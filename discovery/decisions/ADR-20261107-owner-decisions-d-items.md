# ADR-20261107-owner-decisions-d-items: Owner decisions on the D-register (D1 to D20)

- **Date:** 2026-11-07
- **Status:** Approved, except D10 (draft copy, owner to confirm)
- **Scope:** Commercial · Compliance · UX

## Context & Problem
The owner reviewed the open D-items in `discovery/plans/astro-design-system-and-buildout.md` section 7.1. Several were blocked on a decision, research, or copy. The owner's answers, recorded in `discovery/plans/phase1-log.md` under "Owner decisions, 2026-11-07", are binding for the site. The D-IDs are not in `discovery/ledger/decisions.json`, so this record is the reference for them.

## Approved Solution
1. **D1 (approved).** The Saturday 8:00 to 10:00 AM gi jiu-jitsu row is shown. `site/src/data/schedule.ts` row-11 no longer carries `pending`.
2. **D3 (approved for staging only).** The Sambo page (`site/src/pages/classes/sambo.astro`) is built and goes to a Vercel preview. It stays out of the live site until the owner approves.
3. **D4 (hold).** `/classes/womens-self-defense/` stays omitted (`site/src/data/routes.ts`).
4. **D5 (accepted).** Minors' imagery stays as it is. No change to the program card photos.
5. **D6 (hold).** `/donate/` stays omitted until donation details, policy, and an endpoint exist.
6. **D7 (accepted).** `/rules/` text stays as it is.
7. **D9 (approved).** Homepage safety claims stand. The mat size is now 3,800 sq ft (`site/src/components/home/Safety.astro`), to match OC-11.
8. **D10 (draft applied, owner to confirm).** The footer tagline reads "Wrestling and grappling for kids, teens, and adults in Hayward, California." (`site/src/components/shell/SiteFooter.astro`). The word "Olympic" is blocked by the copy audit in new text.
9. **D11 (hold).** City pages (Union City, Fremont, Newark, Castro Valley) wait on research.
10. **D12 (hold).** Guides wait on research and a named author.
11. **D20 (approved).** "Forged in Dagestan" stays as written. No change.

## Alternatives Rejected
1. **D1: keep the row pending (hidden).** Rejected by the owner ("show it").
2. **D3: publish Sambo to live now.** Rejected. Owner wants staging first.
3. **D4 and D6: build the pages now with placeholder copy.** Rejected. No sourced details exist, so the page would invent facts.
4. **D9: keep 3,000 sq ft.** Rejected. OC-11 says 3,800.
5. **D10: keep the earlier tagline with "premier" and "state champions".** Rejected. Claims were not verified, and the owner asked for new copy.
6. **D11 and D12: build with unsourced copy.** Rejected for the same reason as D4 and D6.

## Impacted Files
- `site/src/data/schedule.ts`
- `site/src/pages/classes/sambo.astro`
- `site/src/data/routes.ts` (D4, D6, D11, D12 rows unchanged)
- `site/src/components/home/Safety.astro`
- `site/src/components/shell/SiteFooter.astro`
- `discovery/plans/phase1-log.md`
