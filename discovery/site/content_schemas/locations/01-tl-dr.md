---
type: spec
status: draft
group: site
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/ledger/decisions.json", "discovery/ledger/claims.json", "discovery/ledger/conflicts.json", "discovery/knowledge_base/uwc_kb_v1.md", "discovery/plans/astro-design-system-and-buildout.md", "discovery/site/sitemap_status.md", "discovery/decisions/ADR-20261105-hours-and-conversion-path.md", "discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md", "discovery/market/local_seo/top_10_programmatic_lps.md", "discovery/strategy/uwc_marketing_plan.md", "discovery/archive/snapshots/live_site_content/about.md", "discovery/archive/snapshots/live_site_content/events.md", "site/src/data/routes.ts", "site/src/data/facts.ts", "site/src/data/programs.ts", "site/src/data/schedule.ts", "site/src/data/faqs.ts", "site/src/data/jsonld-home.ts", "site/src/data/nav.ts", "site/src/pages/locations/index.astro", "site/src/pages/locations/hayward-ca.astro", "site/src/components/pages/locations/HaywardBody.astro", "site/src/components/ui/FactList.astro", "site/src/components/ui/ScheduleList.astro", "site/src/components/home/Coaches.astro", "site/src/components/home/Programs.astro", "site/src/components/shell/SiteFooter.astro", "site/src/components/pages/unlocks/events-data.ts"]
shard_of: "discovery/site/content_schemas/locations.md"
part: "1 of 3"
---

> Part 1 of 3 of [locations](../locations.md). Text is verbatim from the original; only links were rewritten.


# Location pages: content schema

## TL;DR

- Three schemas. LocationsIndex (`/locations/`, built) has 8 fields. LocationPage for Hayward (`/locations/hayward-ca/`, built) has 29. LocationPage for the four feeder pages (omitted, held for D11) has 27. Every per-city value in the feeder schema is null, so its publish gate blocks all four pages today.
- No ledger claim is verified. claims.json holds 2,608 claims: 2,250 unverified, 298 superseded, 60 conflicting. CL ids in this file are evidence pointers, not verified sources. Every per-city value needs a named owner answer.
- The blueprint drive times (6, 9, 8 to 10, and 11 minutes) have no measured source. The schema requires the owner's measured minutes, route, method, and date. James Logan High School can appear only in the narrow, owner-approved forms listed below. The built Hayward page conflicts with OC-14 (age bands). Superseded 2026-11-08: the Saturday 8:00 to 10:00 AM gi row is shown (D1 approved). Old text: [archive](../../../archive/stale-2026-11-08/locations.md).

## Scope

| Schema | Route | routes.ts status | Unlock |
|---|---|---|---|
| LocationsIndex | `/locations/` | built (G5) | none. Spec calls it a new route (CL-1782). |
| LocationPage, Hayward | `/locations/hayward-ca/` | built (G5) | none |
| LocationPage, feeder | `/locations/union-city-ca/` | omitted | D11 |
| LocationPage, feeder | `/locations/fremont-ca/` | omitted | D11 |
| LocationPage, feeder | `/locations/newark-ca/` | omitted | D11 |
| LocationPage, feeder | `/locations/castro-valley-ca/` | omitted | D11 |

Notes:
- D11 is not recorded in `decisions.json`. It appears in `site/src/data/routes.ts` and in `discovery/plans/astro-design-system-and-buildout.md` (decision table, row D11: "Verified local facts for city pages", default "Omit; Hayward only").
- San Leandro is named in the marketing plan, the built footer, and the areaServed list, but `routes.ts` has no San Leandro route. It is not covered here. A routes.ts entry must come first.

## Conventions

- Source types: `site_data` (a file in `site/src/data`), `owner_decision` (a `decisions.json` id), `ledger` (a CL id, evidence only), `owner_provided` (a named owner answer is required, and the value stays null until it is given), `external` (needs a citation).
- Copy fields (headings, meta text, button labels) carry no facts. They are marked `copy` in the Source column and pass only through the owner review in the publish gate.
- Shared facts (address, phone, email, hours, trial, schedule) are true for every page. They never count toward the doorway guard.
- Ranges are written with "to", not dashes.

## 1. LocationsIndex (`/locations/`)

| Field | Type | Required | Source | Gate or rule |
|---|---|---|---|---|
| `route_path` | string | yes | site_data `routes.ts` | Must be `/locations/`, status built. |
| `page_title` | string | yes | copy | Current: "Locations \| United Wrestling Club". |
| `meta_description` | string | yes | copy | Names only cities whose pages are built. |
| `lead` | string | yes | copy | No facts. |
| `location_cards` | list | yes | site_data `routes.ts` | Only routes with status built. Omitted routes are never listed or linked. Minimum one (Hayward). |
| `card_address` | string | yes | site_data `facts.ts` `address` (KB-01, Verified) | Club address only. A feeder card shows the Hayward address, never a city street address. |
| `card_phone` | string | yes | site_data `facts.ts` `phone` (KB-02); owner_decision RC-01 | (510) 303-4869 only. |
| `city_cards_unlocked` | list | no | owner_decision D11 | Empty until D11 is recorded and a feeder page passes its gate. |

Fields: 8.

## 2. LocationPage, Hayward (`/locations/hayward-ca/`)

This is the facility page. It is exempt from the doorway unique-fact count and must pass the factual checks instead.

| Field | Type | Required | Source | Gate or rule |
|---|---|---|---|---|
| `route_path` | string | yes | site_data `routes.ts` | `/locations/hayward-ca/`, status built. |
| `page_title` | string | yes | copy | Current: "United Wrestling Club in Hayward, CA". |
| `meta_description` | string | yes | copy | Names Hayward. No unverified fact. |
| `street_address` | string | yes | site_data `facts.ts` `address.line1` (KB-01, Verified) | "30139 Industrial Pkwy SW, Suite C". |
| `locality` | string | yes | site_data `facts.ts` `address` city, region, postal (KB-01) | "Hayward, CA 94544". |
| `maps_url` | url | yes | site_data `facts.ts` `address.mapsUrl` | Opens the club address. |
| `directions_text` | text | no | owner_provided (KB-21: "Not written") | Null by default. If null, the block is omitted. Staff drafts, owner approves. |
| `parking_note` | text | no | owner_provided (ledger CL-2294, unverified) | Null until the owner confirms. Do not publish from CL-2294 alone. |
| `phone` | string | yes | site_data `facts.ts` `phone` (KB-02); owner_decision RC-01 | (510) 303-4869 with a tel link. Not (510) 589-5591 or +1-510-736-2342, which appear in other files. |
| `email` | string | no | site_data `facts.ts` `email`; owner_decision RC-08 | unitedwrestlingclub@gmail.com only. Not info@unitedwrestlingclub.com. |
| `hours_rows` | list | yes | site_data `facts.ts` `hours.rows` (KB-03); owner_decision OC-03 | Monday to Friday 6:00 AM to 10:00 PM. Sunday closed. Saturday open mat 10:00 AM to 12:00 PM. The Saturday start time is open question 4. |
| `hours_footnote` | string | yes | site_data `facts.ts` `hours.footnote` (KB-03) | "Times can shift around holidays and tournaments." |
| `class_schedule` | list | yes | site_data `schedule.ts` (rows 01 to 12); owner_decision OC-02 (row-11 shown); LS-01 (kids Mon and Wed) | Render all 12 rows. Row-11 (Saturday gi, 8:00 to 10:00 AM) is shown per OC-02. Its `pending` flag is not a reason to hide it. |
| `program_name` | string | yes | site_data `facts.ts` `programs` (KB-05) and `programs.ts` `name` | Four programs: Youth Wrestling Academy, Varsity and Scholastic Prep, Adult Wrestling and Wrestle-Jitsu, Saturday Open Mat. |
| `program_level` | string | yes | owner_decision OC-14 | Grade label, never an age band. Wording for adult and high school is open question 5. |
| `program_age_band` | string | no (must not render) | forbidden by OC-14 | Remove. facts.ts and programs.ts hold "Ages 5 to 13", "Ages 14 to 18", and "18 and up". |
| `trial_name` | string | yes | site_data `facts.ts` `trialPass.name`; owner_decision RC-05 | "3-Day Mat Pass". |
| `trial_price` | string | yes | site_data `facts.ts` `trialPass.price`; owner_decision RC-05 | "$15". No free 1-day or 2-class pass (RC-05). |
| `trial_blurb` | string | yes | site_data `facts.ts` `trialPass.blurb` (KB-06) | "New members only." |
| `booking_howto` | string | yes | site_data `facts.ts` `booking.howTo` (KB-07) | Fill in the trial form, or call the club line. |
| `payment_note` | string | yes | site_data `facts.ts` `booking.payment` (KB-10) | Payment and waiver on WrestlingIQ (Team #513). |
| `membership_price` | string | no | owner_decision OC-01 | If shown, list each tier from the pricing page. Never "$139.99" alone, because it is one tier. |
| `mat_area` | string | yes | owner_decision OC-11 | "3,800 sq ft of mats". Reject 3,000 (KB-14, ADR-20261102) and 5,000. Not on the page today. |
| `mat_care` | text | no | owner_provided (KB-13, client chat Nov 4) | Seamless Dollamur mats, sanitized twice a day. Owner names the approver. |
| `coaches` | list | no | site_data `facts.ts` `coaches` (KB-16) | Names and roles only. No credentials. No 1980, Moscow, or Olympic wording until OC-07 and OC-09 close. Bronze wording follows OC-08. |
| `arrival_time` | string | no | owner_provided (KB-12, not confirmed) | Not shown until Naweed confirms. CL-2292 says 10 to 15 minutes; KB-12 says 15. |
| `media_notice` | text | yes | site_data `facts.ts` `media.note` (KB-23); OC-05 open | Default-release wording. Opt-out mechanism waits for OC-05. |
| `google_rating` | string | no (forbidden here) | site_data `facts.ts` `reviewsGoogle` (KB-17) | Must not render. The data file says `onlyOn: "/reviews/"`. |
| `sanction_line` | string | no | owner_decision RC-02 | "USA Wrestling RTC #513". Never #100234. |

Fields: 29.
