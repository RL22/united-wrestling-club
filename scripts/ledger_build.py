#!/usr/bin/env python3
"""Merge extraction shards into the discovery claim ledger.

Inputs:  one or more shard JSON files (arrays of claims, temporary ids such as S3-12 or S5-1001).
Output:  discovery/ledger/claims.json  (schema_version 1, claims with CL-NNNN ids)

Steps:
  1. Validate every shard with ledger_check.validate (shard rules).
  2. Drop exact duplicates (same source, section, evidence, claim).
  3. Assign CL-NNNN ids in source order (by source path, then first appearance).
  4. Fill doc_status and doc_date from each source doc's frontmatter (status, date).
  5. Apply conflicts from --conflicts: each conflict links two or more claims (by source + evidence),
     sets their conflicts_with and verification "conflicting", and is written to the "conflicts" array.
  6. Validate the final ledger with ledger_check.validate --final.

Usage:  python3 scripts/ledger_build.py <shard.json> [<shard.json> ...]
        Optional: --conflicts <file.json>
          array of {id, topic, description, status, claims: [{source, evidence}, ...]}
          Claims are referenced by source + evidence (stable across rebuilds), never by id.
"""
import datetime
import json
import os
import re
import subprocess
import sys

REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
DISC = os.path.join(REPO, 'discovery')
OUT = os.path.join(DISC, 'ledger', 'claims.json')
DECISIONS = os.path.join(DISC, 'ledger', 'decisions.json')
CHECK = os.path.join(REPO, 'scripts', 'ledger_check.py')
FM = re.compile(r'\A---\n(.*?)\n---\n', re.S)


def frontmatter(rel):
    """Return the frontmatter dict of a discovery-relative doc, or {} for the root docs."""
    path = os.path.normpath(os.path.join(DISC, rel))
    if not os.path.isfile(path):
        return {}
    m = FM.match(open(path, encoding='utf-8').read())
    out = {}
    if m:
        for line in m.group(1).splitlines():
            if ':' in line:
                k, v = line.split(':', 1)
                out[k.strip()] = v.strip()
    return out


def validate_shard(path):
    r = subprocess.run([sys.executable, CHECK, 'validate', path], capture_output=True, text=True)
    if r.returncode != 0:
        print(r.stdout.strip())
        sys.exit(f"shard failed validation: {path}")


def main(argv):
    conflicts_file = None
    args = argv[1:]
    if '--conflicts' in args:
        i = args.index('--conflicts')
        conflicts_file = args[i + 1]
        del args[i:i + 2]
    if not args:
        print(__doc__)
        return 2

    raw = []
    for path in args:
        validate_shard(path)
        raw.extend(json.load(open(path, encoding='utf-8')))

    seen, unique = set(), []
    for c in raw:
        key = (c['source'], c.get('section', ''), c['evidence'], c['claim'])
        if key in seen:
            continue
        seen.add(key)
        unique.append(c)

    order = {}
    unique.sort(key=lambda c: (c['source'], order.setdefault(c['source'], len(order))))
    today = datetime.date.today().isoformat()

    claims = []
    for n, c in enumerate(unique, 1):
        fm = frontmatter(c['source']) if not c['source'].startswith('../') else {}
        out = {
            'id': f'CL-{n:04d}',
            'topic': c['topic'],
            'claim': c['claim'],
            'value': c.get('value'),
            'source': c['source'],
            'section': c.get('section', '(top)'),
            'evidence': c['evidence'],
            'doc_status': fm.get('status'),
            'doc_date': fm.get('date'),
            'verification': c.get('verification', 'unverified'),
            'kb_id': c.get('kb_id'),
            'conflicts_with': c.get('conflicts_with', []),
            'last_verified': today,
        }
        claims.append(out)

    # Conflicts are written against shard (temporary) ids and translated to CL ids here,
    # so a rebuild keeps them. A conflict lists the claims that disagree with each other.
    by_id_topic = {c['id']: c['topic'] for c in claims}
    conflicts = []
    if conflicts_file:
        raw_conflicts = json.load(open(conflicts_file, encoding='utf-8'))
        by_id = {c['id']: c for c in claims}
        by_ref = {}
        for c in claims:
            by_ref.setdefault((c['source'], c['evidence']), []).append(c['id'])
        for k in raw_conflicts:
            ids = []
            for ref in k['claims']:
                hits = by_ref.get((ref['source'], ref['evidence']), [])
                if len(hits) != 1:
                    sys.exit(f"conflict {k.get('id')}: ref matches {len(hits)} claims: {ref['source']} / {ref['evidence'][:60]!r}")
                ids.append(hits[0])
            for cid in ids:
                others = [o for o in ids if o != cid]
                by_id[cid]['conflicts_with'] = sorted(set(by_id[cid]['conflicts_with']) | set(others))
                by_id[cid]['verification'] = 'conflicting'
            conflicts.append({'id': k['id'], 'topic': k['topic'], 'claim_ids': ids,
                              'description': k['description'], 'status': 'open, owner decision'})

    # Owner decisions (discovery/ledger/decisions.json) settle conflicts by id.
    decisions = []
    if os.path.isfile(DECISIONS):
        decisions = json.load(open(DECISIONS, encoding='utf-8'))
    dec_by_id = {d['conflict']: d for d in decisions}
    for k in conflicts:
        d = dec_by_id.get(k['id'])
        if d:
            k['status'] = 'resolved'
            k['decision'] = d['decision']
            k['basis'] = d['basis']
    # decisions with no ledger claims (for example live-site-only conflicts) are kept as conflicts too
    known = {k['id'] for k in conflicts}
    for d in decisions:
        if d['conflict'] not in known:
            conflicts.append({'id': d['conflict'], 'topic': 'live-site', 'claim_ids': [],
                              'description': d.get('note', ''), 'status': 'resolved',
                              'decision': d['decision'], 'basis': d['basis']})

    doc = {
        'schema_version': 1,
        'generated': today,
        'generated_by': 'scripts/ledger_build.py',
        'claim_count': len(claims),
        'claims': claims,
        'conflicts': conflicts,
    }
    doc['open_conflicts'] = sum(1 for k in conflicts if k['status'].startswith('open'))
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, 'w', encoding='utf-8') as f:
        json.dump(doc, f, ensure_ascii=False, indent=2)
        f.write('\n')
    print(f"raw {len(raw)} -> unique {len(unique)} -> {os.path.relpath(OUT, REPO)}")

    # topic router: where to look for each topic, and what is contested
    from collections import Counter, defaultdict
    per_topic = defaultdict(lambda: {'claims': 0, 'verification': Counter(), 'sources': Counter(), 'conflicts': set()})
    for c in claims:
        t = per_topic[c['topic']]
        t['claims'] += 1
        t['verification'][c['verification']] += 1
        t['sources'][c['source']] += 1
    for k in conflicts:
        for cid in k['claim_ids']:
            topic = by_id_topic.get(cid)
            if topic:
                per_topic[topic]['conflicts'].add(k['id'])
    topics = {
        'schema_version': 1,
        'generated': today,
        'topics': {
            name: {
                'claims': v['claims'],
                'verification': dict(v['verification']),
                'top_sources': [{'source': s, 'claims': n} for s, n in v['sources'].most_common(8)],
                'open_conflicts': sorted(v['conflicts']),
            }
            for name, v in sorted(per_topic.items())
        },
    }
    tpath = os.path.join(os.path.dirname(OUT), 'topics.json')
    with open(tpath, 'w', encoding='utf-8') as f:
        json.dump(topics, f, ensure_ascii=False, indent=2)
        f.write('\n')
    print(f"wrote {os.path.relpath(tpath, REPO)} ({len(topics['topics'])} topics)")

    r = subprocess.run([sys.executable, CHECK, 'validate', OUT, '--final'], capture_output=True, text=True)
    print(r.stdout.strip())
    return r.returncode


if __name__ == '__main__':
    sys.exit(main(sys.argv))
