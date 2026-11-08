# ADR-20261106-astro-design-system: Astro design system layout and CSS rules

- **Date:** 2026-11-06
- **Status:** Approved
- **Scope:** UX · Architecture

## Context & Problem
The Astro homepage carried one 78 KB `global.css` plus component styles that duplicated it. ADR-20261105-design-system item 1 said pages and components carry no `<style>` blocks, which fit the static pages but not Astro section components.

## Approved Solution
1. **Amends ADR-20261105-design-system item 1:** section components may hold scoped `<style>` blocks for section-only rules. Shared rules live in `site/src/styles/` (tokens, base, buttons, shell, sections, cards, forms, overlays, disclosure), imported in that order by `global.css`.
2. **One selector, one file**, with each `@media` override after its base rule. `site/scripts/css-homes.mjs` enforces it.
3. **Components** are grouped as shell, home, ui, forms, templates; shared content lives in `site/src/data/`.
4. **Equivalence is measured**, not eyeballed: fingerprint, text, and pixel diffs against a baseline. Baselines are history (B0, B1 for D18, B2 for D21).
5. Two aliases added: `--color-surface-0`, `--space-section-tight`.
6. Copy rules are checked by `scripts/copy_audit.sh` with hashed allowlist entries in `scripts/copy_audit_allow.txt`.

## Alternatives Rejected
1. **Keep one global stylesheet:** rejected. Duplicates drifted and cascade order was invisible.
2. **All CSS scoped per component:** rejected. Shared patterns would be copied again.

## Impacted Files
- `site/src/styles/**`, `site/src/components/**`, `site/src/layouts/**`, `site/src/data/**`
- `site/scripts/**`, `scripts/check_dist.py`, `scripts/copy_audit.py`
- `DESIGN.md` (section 13)

## Addendum (2026-11-05): production serves the Astro build

1. **Deploy source changed.** Production (Vercel project `united-wrestling-club`) serves the Astro build output in `site/dist/`, deployed on 2026-11-05. The root static pages (`v01/`, `reviews/`, `register/`, `contact/`, `about/`) are no longer deployed.
2. **Publish allowlist.** `site/public/` is the only source of static files that ship besides Astro page output. Anything placed there is public. Build output is checked with `scripts/check_dist.py --final` and `scripts/copy_audit.sh site/dist` before deploy.
3. **Build toolchain.** Astro requires Node `>=22.23.4` (`site/package.json` engines). Builds in this repo ran on Node 26.13.0 via mise.
4. **Vercel link folder.** `vercel deploy` writes `site/dist/.vercel/`. Vercel does not serve dot-folders (verified: `/.vercel/project.json` returns 404), and `/site/dist/` is git-ignored.

## Amendment (2026-11-07)

The production deploy described in the 2026-11-05 addendum no longer exists. Both Vercel projects were deleted on 2026-11-07. The file layout and CSS rules in this ADR are unchanged. The output rule still applies: a future host publishes `site/dist/` only, after the gates pass.
