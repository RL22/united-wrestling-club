#!/usr/bin/env python3
"""Validate the discovery claim ledger.

A claim is one sourced fact pulled from a discovery doc. Shard files (produced by extraction
agents) and the final ledger (discovery/ledger/claims.json) use the same claim shape.

Claim fields:
  id              CL-NNNN in the final ledger; temporary ids (S<shard>-<n>) allowed in shards
  topic           one of TOPICS below
  claim           the fact in one plain sentence (max 300 chars)
  value           the value as stated (number, price, name, date, status). null if not a value
  source          discovery-relative path of the doc the fact came from, e.g. "strategy/uwc_marketing_plan.md",
                  or "../DESIGN.md" for the repo-root docs (DESIGN.md, PRODUCT.md, todos.md)
  section         heading path inside that doc, e.g. "## 3. Facility > Pricing" ("(top)" if none)
  evidence        exact quote from the source doc that supports the claim (max 300 chars).
                  Must appear verbatim in the source file, after collapsing whitespace.
  verification    verified | client-confirmed | unverified | conflicting | superseded  (default unverified)
  kb_id           KB-NN if the KB holds this fact, else null
  conflicts_with  list of claim ids that disagree with this claim (final ledger only; default [])

Commands:
  validate <file.json> [--final]   check one shard or the final ledger
  stats <file.json>               counts by topic and verification
"""
import json
import os
import re
import sys

REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
DISC = os.path.join(REPO, 'discovery')
KB = os.path.join(DISC, 'knowledge_base', 'uwc_kb_v1.md')

TOPICS = {
    'site-routes', 'site-forms', 'site-copy', 'pricing', 'offers', 'schedule', 'hours',
    'location-contact', 'facility', 'programs-classes', 'coaches-lineage', 'events', 'reviews',
    'policies-rules', 'media-consent', 'lead-handling', 'marketing-plan', 'seo-keywords',
    'competitors', 'links-partners', 'brand-design', 'financials', 'social-media', 'operations',
    'research-meta', 'other',
}
VERIFICATION = {'verified', 'client-confirmed', 'unverified', 'conflicting', 'superseded'}
REQUIRED = ['topic', 'claim', 'source', 'section', 'evidence']
ID_RE = re.compile(r'^(CL-\d{4}|S\d+-\d+)$')
KB_RE = re.compile(r'^KB-\d+$')


def norm(s):
    return re.sub(r'\s+', ' ', s).strip()


_source_cache = {}


def source_text(rel):
    if rel not in _source_cache:
        p = os.path.join(DISC, rel)
        _source_cache[rel] = norm(open(p, encoding='utf-8').read()) if os.path.isfile(p) else None
    return _source_cache[rel]


def kb_ids():
    if not os.path.isfile(KB):
        return set()
    return set(re.findall(r'\bKB-\d+\b', open(KB, encoding='utf-8').read()))


def validate(claims, final=False):
    problems = []
    kbs = kb_ids()
    ids = set()
    for i, c in enumerate(claims):
        where = f"claim[{i}] {c.get('id', '')}".strip()
        for k in REQUIRED:
            if not c.get(k):
                problems.append(f"{where}: missing {k}")
        cid = c.get('id')
        if cid is not None:
            if not ID_RE.match(str(cid)):
                problems.append(f"{where}: bad id {cid!r}")
            elif final and not re.match(r'^CL-\d{4}$', str(cid)):
                problems.append(f"{where}: final ledger needs CL-NNNN ids")
            if cid in ids:
                problems.append(f"{where}: duplicate id")
            ids.add(cid)
        if c.get('topic') and c['topic'] not in TOPICS:
            problems.append(f"{where}: unknown topic {c['topic']!r}")
        if len(str(c.get('claim', ''))) > 300:
            problems.append(f"{where}: claim longer than 300 chars")
        verification = c.get('verification', 'unverified')
        if verification not in VERIFICATION:
            problems.append(f"{where}: bad verification {verification!r}")
        kb = c.get('kb_id')
        if kb is not None:
            if not KB_RE.match(str(kb)):
                problems.append(f"{where}: bad kb_id {kb!r}")
            elif kb not in kbs:
                problems.append(f"{where}: kb_id {kb} not in knowledge_base/uwc_kb_v1.md")
        src = c.get('source', '')
        if src:
            parts = src.split('/')
            # discovery-relative, or "../<file>" for the few repo-root docs (DESIGN.md, PRODUCT.md, todos.md)
            ok_prefix = parts[0] == '..' and len(parts) >= 2 and '..' not in parts[1:]
            if src.startswith('/') or ('..' in parts and not ok_prefix):
                problems.append(f"{where}: source must be discovery-relative or ../ for repo root, got {src!r}")
            elif not src.endswith('.md') or not os.path.isfile(os.path.join(DISC, src)):
                problems.append(f"{where}: source file not found: {src}")
            else:
                ev = c.get('evidence', '')
                if len(ev) > 300:
                    problems.append(f"{where}: evidence longer than 300 chars")
                body = source_text(src)
                if ev and body is not None and norm(ev) not in body:
                    problems.append(f"{where}: evidence not found verbatim in {src}: {ev[:80]!r}")
        if final:
            for other in c.get('conflicts_with', []) or []:
                if not re.match(r'^CL-\d{4}$', str(other)):
                    problems.append(f"{where}: conflicts_with has bad id {other!r}")
    if final:
        valid = ids
        for i, c in enumerate(claims):
            for other in c.get('conflicts_with', []) or []:
                if other not in valid:
                    problems.append(f"claim[{i}] {c.get('id')}: conflicts_with {other} does not exist")
    return problems


def load(path):
    data = json.load(open(path, encoding='utf-8'))
    if isinstance(data, dict):
        return data.get('claims', [])
    return data


def main(argv):
    if len(argv) < 3:
        print(__doc__)
        return 2
    cmd, path = argv[1], argv[2]
    claims = load(path)
    if cmd == 'validate':
        final = '--final' in argv
        problems = validate(claims, final=final)
        for p in problems:
            print(p)
        print(f"{len(claims)} claims, {len(problems)} problem(s)")
        return 1 if problems else 0
    if cmd == 'stats':
        from collections import Counter
        print('claims:', len(claims))
        print('by topic:', dict(Counter(c.get('topic') for c in claims)))
        print('by verification:', dict(Counter(c.get('verification', 'unverified') for c in claims)))
        return 0
    print(__doc__)
    return 2


if __name__ == '__main__':
    sys.exit(main(sys.argv))
