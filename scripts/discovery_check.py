#!/usr/bin/env python3
"""Maintain the discovery/ research library.

Commands:
  check              Validate relative links and frontmatter status in discovery/. Exit 1 on problems.
  init-frontmatter   Add frontmatter (status, group) to docs that lack it. Statuses come from
                     discovery/README.md index tables; unlisted docs get the default for their group.
                     Pass --apply to write. Without it, prints the plan.
  manifest           Write discovery/manifest.json (path, title, status, group) for agents.

Frontmatter is the contract. Every library doc under client/, site/, strategy/, market/, brand/,
and archive/ must carry:

    ---
    status: current | reference | partly-superseded | snapshot | superseded | asset
    group: client | site | strategy | market | brand | archive
    ---
"""
import json
import os
import re
import sys
import urllib.parse

REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
DISC = os.path.join(REPO, 'discovery')
GROUPS = ['client', 'site', 'strategy', 'market', 'brand', 'archive']
STATUSES = {'current', 'reference', 'partly-superseded', 'snapshot', 'superseded', 'asset'}
DEFAULT_STATUS = {'archive/superseded': 'superseded', 'archive/snapshots': 'snapshot',
                  'market': 'reference', 'brand': 'reference'}
SKIP_DIRS = {'scratch', 'video_assets', 'node_modules', '.git'}
LINK = re.compile(r'\]\(([^)\s]+)\)')
FM = re.compile(r'\A---\n(.*?)\n---\n', re.S)


def md_files(root=DISC):
    for dp, dn, fn in os.walk(root):
        dn[:] = [d for d in dn if d not in SKIP_DIRS]
        for f in fn:
            if f.endswith('.md'):
                yield os.path.join(dp, f)


def library_files():
    for p in md_files():
        rel = os.path.relpath(p, DISC)
        if rel.split(os.sep)[0] in GROUPS:
            yield p, rel


def parse_fm(text):
    m = FM.match(text)
    if not m:
        return None
    out = {}
    for line in m.group(1).splitlines():
        if ':' in line:
            k, v = line.split(':', 1)
            out[k.strip()] = v.strip()
    return out


def normalize_status(text):
    t = re.sub(r'\(.*?\)', '', text).strip().lower()
    if t.startswith('partly superseded'):
        return 'partly-superseded'
    for s in ('current', 'reference', 'snapshot', 'superseded', 'asset'):
        if t.startswith(s):
            return s
    return None


def readme_statuses():
    """Map discovery-relative doc path -> status, from the index tables in discovery/README.md."""
    text = open(os.path.join(DISC, 'README.md'), encoding='utf-8').read()
    out = {}
    row = re.compile(r'^\|\s*\[`[^`]+`\]\(([^)\s]+)\)\s*\|\s*([^|]+?)\s*\|', re.M)
    for m in row.finditer(text):
        target = urllib.parse.unquote(m.group(1).split('#')[0])
        status = normalize_status(m.group(2))
        if status and target.endswith('.md'):
            out[os.path.normpath(target)] = status
    return out


def default_status(rel):
    for prefix, status in DEFAULT_STATUS.items():
        if rel.replace(os.sep, '/').startswith(prefix + '/') or rel.replace(os.sep, '/').startswith(prefix):
            return status
    return None


def check_links():
    problems = []
    for p in md_files():
        text = open(p, encoding='utf-8').read()
        for m in LINK.finditer(text):
            t = m.group(1)
            if t.startswith(('http', 'mailto:', '#', '/')) or ':' in t.split('/')[0]:
                continue
            path = urllib.parse.unquote(t.split('#')[0])
            if not path:
                continue
            if not os.path.exists(os.path.normpath(os.path.join(os.path.dirname(p), path))):
                problems.append(f"link   {os.path.relpath(p, REPO)} -> {t}")
    return problems


def check_frontmatter():
    problems = []
    for p, rel in library_files():
        fm = parse_fm(open(p, encoding='utf-8').read())
        if fm is None:
            problems.append(f"fm     {os.path.relpath(p, REPO)}: no frontmatter")
            continue
        status = fm.get('status')
        if status not in STATUSES:
            problems.append(f"fm     {os.path.relpath(p, REPO)}: bad status {status!r}")
        if fm.get('group') != rel.split(os.sep)[0]:
            problems.append(f"fm     {os.path.relpath(p, REPO)}: group mismatch")
    return problems


def init_frontmatter(apply):
    known = readme_statuses()
    plan, unclassified = [], []
    for p, rel in library_files():
        text = open(p, encoding='utf-8').read()
        if parse_fm(text) is not None:
            continue
        status = known.get(rel.replace(os.sep, '/')) or known.get(rel) or default_status(rel)
        if status is None:
            unclassified.append(rel)
            continue
        group = rel.split(os.sep)[0]
        block = f"---\nstatus: {status}\ngroup: {group}\n---\n\n"
        plan.append((p, rel, status, block + text))
    for p, rel, status, new in plan:
        print(f"{status:20s} {rel}")
        if apply:
            open(p, 'w', encoding='utf-8').write(new)
    print(f"\n{len(plan)} docs {'updated' if apply else 'to update (dry run)'}; unclassified: {len(unclassified)}")
    for u in unclassified:
        print('  unclassified:', u)
    return 0


def build_manifest():
    entries = []
    for p, rel in library_files():
        text = open(p, encoding='utf-8').read()
        fm = parse_fm(text) or {}
        body = FM.sub('', text, count=1)
        h1 = re.search(r'^# (.+)$', body, re.M)
        entries.append({
            'path': rel.replace(os.sep, '/'),
            'title': h1.group(1).strip() if h1 else os.path.basename(p),
            'status': fm.get('status'),
            'group': fm.get('group'),
        })
    entries.sort(key=lambda e: (e['group'] or '', e['path']))
    out = os.path.join(DISC, 'manifest.json')
    with open(out, 'w', encoding='utf-8') as f:
        json.dump({'generated_by': 'scripts/discovery_check.py manifest', 'docs': entries}, f, indent=2)
        f.write('\n')
    print(f"wrote {os.path.relpath(out, REPO)} ({len(entries)} docs)")
    return 0


def main(argv):
    cmd = argv[1] if len(argv) > 1 else 'check'
    if cmd == 'check':
        problems = check_links() + check_frontmatter()
        for line in problems:
            print(line)
        print(f"{len(problems)} problem(s)")
        return 1 if problems else 0
    if cmd == 'init-frontmatter':
        return init_frontmatter('--apply' in argv)
    if cmd == 'manifest':
        return build_manifest()
    print(__doc__)
    return 2


if __name__ == '__main__':
    sys.exit(main(sys.argv))
