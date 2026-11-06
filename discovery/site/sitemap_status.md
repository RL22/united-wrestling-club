---
type: spec
status: current
group: site
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/site/website_rebuild_spec.md", "site/src/data/routes.ts"]
---

# Sitemap status

- **As of:** 2026-11-06
- **Source of truth:** `site/src/data/routes.ts` (every route, its status, and the owner decision that unlocks each omitted one). This page is a readable copy. If the two disagree, `routes.ts` wins.
- **Scope:** the 32-route sitemap in [`website_rebuild_spec.md`](website_rebuild_spec.md) section 5, plus `/reviews/` (added during the rebuild), `/about/`, and the four machine files. `routes.ts` lists 33 page routes.

## TL;DR

- As of 2026-11-06, site/src/data/routes.ts is the source of truth for every route; this page is a readable copy that routes.ts overrides on conflict
- 21 pages are built, including the homepage, /about/, /reviews/, /register/, and /contact/ (see RC-12)
- 12 routes are omitted, nothing links to them, and each waits on an owner decision (D4, D6, D11, D12)
- Four homepage review items from 2026-11-05 stay open: the lineage section, the safety section (possible move to /rules/), the decorative depth section, and the four-column footer

## Built (21 pages)

| Route | Group | Notes |
|---|---|---|
| `/` | none | Homepage |
| `/about/` | G1 | Standards and coaching |
| `/reviews/` | G1 | Verbatim reviews and the submission form |
| `/register/` | G1 | Full-page trial pass |
| `/contact/` | G1 | Contact, B2B, media, sponsorship |
| `/classes/` | G2 | Class hub |
| `/classes/kid-wrestling/` | G2 | |
| `/classes/youth-wrestling/` | G2 | |
| `/classes/adult-wrestling/` | G2 | |
| `/classes/nogi-jiu-jitsu/` | G3 | |
| `/classes/gi-jiu-jitsu/` | G3 | |
| `/classes/sambo/` | none | |
| `/classes/boxing-fundamentals/` | G3 | |
| `/classes/open-mat/` | G3 | |
| `/schedule/` | G4 | |
| `/pricing/` | G4 | |
| `/faqs/` | G4 | |
| `/events/` | none | |
| `/rules/` | none | |
| `/locations/` | G5 | |
| `/locations/hayward-ca/` | G5 | |

Machine files, built: `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt` (group G6).


## Omitted (12 routes)

Each is held back until the owner decision in the Unlock column is made. Nothing links to these routes.

| Route | Reason | Unlock |
|---|---|---|
| `/classes/womens-self-defense/` | KB-19 unconfirmed; no waitlist endpoint | D4 |
| `/donate/` | No donation details, policy, or endpoint | D6 |
| `/locations/union-city-ca/` | Drive times and school claims are not in the KB; doorway-page risk | D11 |
| `/locations/fremont-ca/` | Same as Union City | D11 |
| `/locations/newark-ca/` | Same as Union City | D11 |
| `/locations/castro-valley-ca/` | Same as Union City | D11 |
| `/guides/` | Needs a sourced brief and an author | D12 |
| `/guides/adult-wrestling-bay-area/` | Needs sources outside the KB | D12 |
| `/guides/youth-wrestling-vs-martial-arts/` | Needs sources outside the KB | D12 |
| `/guides/wrestling-for-bjj-takedowns/` | Needs sources outside the KB | D12 |
| `/guides/high-school-off-season-wrestling/` | Needs sources outside the KB | D12 |
| `/guides/dsal-hayward-wrestling-pathway/` | Needs sources outside the KB | D12 |

## Open items from the 2026-11-05 homepage review

These were open on 2026-11-05. Confirm each one before acting on it.

1. **Lineage and coaches section.** Stays on the homepage because the 1980 lineage is the stated moat (`moat_assessment.md`). A shorter version, with full coach profiles on `/about/`, is still open.
2. **Safety section.** Could move to `/rules/`. `/rules/` is built now, so this is open.
3. **Depth section** (parallax, cutouts). Decorative. Kept because the client asked for layered cutouts. Confirm before cutting.
4. **Footer.** Four columns, about 20 links. Trim now that `/about/` exists.
