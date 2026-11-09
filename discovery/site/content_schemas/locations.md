---
type: spec
status: draft
group: site
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/ledger/decisions.json", "discovery/ledger/claims.json", "discovery/ledger/conflicts.json", "discovery/knowledge_base/uwc_kb_v1.md", "discovery/plans/astro-design-system-and-buildout.md", "discovery/site/sitemap_status.md", "discovery/decisions/ADR-20261105-hours-and-conversion-path.md", "discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md", "discovery/market/local_seo/top_10_programmatic_lps.md", "discovery/strategy/uwc_marketing_plan.md", "discovery/archive/snapshots/live_site_content/about.md", "discovery/archive/snapshots/live_site_content/events.md", "site/src/data/routes.ts", "site/src/data/facts.ts", "site/src/data/programs.ts", "site/src/data/schedule.ts", "site/src/data/faqs.ts", "site/src/data/jsonld-home.ts", "site/src/data/nav.ts", "site/src/pages/locations/index.astro", "site/src/pages/locations/hayward-ca.astro", "site/src/components/pages/locations/HaywardBody.astro", "site/src/components/ui/FactList.astro", "site/src/components/ui/ScheduleList.astro", "site/src/components/home/Coaches.astro", "site/src/components/home/Programs.astro", "site/src/components/shell/SiteFooter.astro", "site/src/components/pages/unlocks/events-data.ts"]
sharded: "locations/"
---

# Location pages: content schema

> Sharded on 2026-11-08. The full text is in [`locations/`](locations/). Edit the parts, not this index.

## TL;DR

- Three schemas. LocationsIndex (`/locations/`, built) has 8 fields. LocationPage for Hayward (`/locations/hayward-ca/`, built) has 29. LocationPage for the four feeder pages (omitted, held for D11) has 27. Every per-city value in the feeder schema is null, so its publish gate blocks all four pages today.
- No ledger claim is verified. claims.json holds 2,608 claims: 2,250 unverified, 298 superseded, 60 conflicting. CL ids in this file are evidence pointers, not verified sources. Every per-city value needs a named owner answer.
- The blueprint drive times (6, 9, 8 to 10, and 11 minutes) have no measured source, and the schema requires the owner's measured minutes, route, method, and date.
- James Logan High School can appear only in the narrow, owner-approved forms listed below.

## Parts

| Part | Section | File |
|---|---|---|
| 1 | TL;DR | [01-tl-dr.md](locations/01-tl-dr.md) |
| 2 | 3. LocationPage, feeder (`union-city-ca`, `fremont-ca`, `newark-ca`, `castro-valley-ca`) | [02-3-locationpage-feeder-union-city-ca-fremont-ca-n.md](locations/02-3-locationpage-feeder-union-city-ca-fremont-ca-n.md) |
| 3 | Drift from built page | [03-drift-from-built-page.md](locations/03-drift-from-built-page.md) |
