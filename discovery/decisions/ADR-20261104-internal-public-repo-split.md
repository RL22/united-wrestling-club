# ADR-20261104-internal-public-repo-split: Private internal repo, site-only public repo

- **Date:** 2026-11-04
- **Status:** Approved
- **Scope:** Architecture · Compliance

## Context & Problem
The project mixed client-confidential discovery, research, call notes, marketing plans and the portal in the same repo as the website. The public Pages site was built from that repo, so anything in it was public.

## Approved Solution
1. **Internal repo is private.** `RL22/united-wrestling-club-internal` holds everything: discovery, research, call notes, marketing plans, the portal, ADRs, and the working site files.
2. **Public repo holds site files only.** `RL22/united-wrestling-club` (branch `gPages`, Pages from root) contains the homepage at `/`, `reviews/`, `register/`, `contact/`, `assets/`, and the media the pages reference. Nothing else.
3. **Publishing is a deliberate copy.** Site files are copied from the internal repo into the public repo and pushed to `gPages`. There is no automated sync yet; the public root `index.html` is a one-off copy with `../` paths stripped.
4. **Same public URL throughout:** `https://rl22.github.io/united-wrestling-club/`.

## Alternatives Rejected
1. **Public repo holds everything (current `main`):** rejected. It exposed client-confidential documents.
2. **Single private repo with Pages from a subfolder:** rejected. Forced `../` prefixes and path hacks, which the client asked to eliminate.
3. **Automated publish script now:** deferred. Not needed until the site stops changing daily.

## Impacted Files
- `discovery/` (internal only, never published)
- Public repo `gPages` root: `index.html`, `assets/`, `reviews/`, `register/`, `contact/`

## Amendment (2026-11-07)

The internal repo `RL22/united-wrestling-club-internal` was deleted by the owner on 2026-11-07. The public repo `RL22/united-wrestling-club` is now a clean, site-only, single-commit import, and it is public. Search indexing is off until launch (see [ADR-20261107-public-site-repo-and-noindex](ADR-20261107-public-site-repo-and-noindex.md)). Points 1 and 2 describe 2026-11-04 and are kept as history.
