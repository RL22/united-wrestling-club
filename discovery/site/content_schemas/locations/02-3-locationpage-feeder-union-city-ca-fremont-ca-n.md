---
type: spec
status: draft
group: site
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/ledger/decisions.json", "discovery/ledger/claims.json", "discovery/ledger/conflicts.json", "discovery/knowledge_base/uwc_kb_v1.md", "discovery/plans/astro-design-system-and-buildout.md", "discovery/site/sitemap_status.md", "discovery/decisions/ADR-20261105-hours-and-conversion-path.md", "discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md", "discovery/market/local_seo/top_10_programmatic_lps.md", "discovery/strategy/uwc_marketing_plan.md", "discovery/archive/snapshots/live_site_content/about.md", "discovery/archive/snapshots/live_site_content/events.md", "site/src/data/routes.ts", "site/src/data/facts.ts", "site/src/data/programs.ts", "site/src/data/schedule.ts", "site/src/data/faqs.ts", "site/src/data/jsonld-home.ts", "site/src/data/nav.ts", "site/src/pages/locations/index.astro", "site/src/pages/locations/hayward-ca.astro", "site/src/components/pages/locations/HaywardBody.astro", "site/src/components/ui/FactList.astro", "site/src/components/ui/ScheduleList.astro", "site/src/components/home/Coaches.astro", "site/src/components/home/Programs.astro", "site/src/components/shell/SiteFooter.astro", "site/src/components/pages/unlocks/events-data.ts"]
shard_of: "discovery/site/content_schemas/locations.md"
part: "2 of 3"
---

> Part 2 of 3 of [locations](../locations.md). Text is verbatim from the original; only links were rewritten.

## 3. LocationPage, feeder (`union-city-ca`, `fremont-ca`, `newark-ca`, `castro-valley-ca`)

Status is omitted for all four (routes.ts, unlock D11). Unique facts are the U rows. Shared facts are listed for completeness and do not count.

| Field | Type | Required | Source | Gate or rule |
|---|---|---|---|---|
| `route_path` | string | yes | site_data `routes.ts` | Status changes from omitted to built only after D11 passes for that city. |
| `city_name` | string | yes | site_data `routes.ts` `title` | "Union City, CA", "Fremont, CA", "Newark, CA", "Castro Valley, CA". |
| `unlock_record` | string | yes | owner_decision D11 | Recorded in `decisions.json` with city, date, and owner. Not recorded today. |
| `page_title` | string | yes | copy | Must say the club trains in Hayward. |
| `meta_description` | string | yes | copy | Same rule as page_title. |
| `club_location_statement` | string | yes | site_data `facts.ts` `address` (KB-01); ledger CL-2363 | Fixed sentence: "United Wrestling Club trains at 30139 Industrial Pkwy SW, Suite C, Hayward, CA 94544." CL-2363 bars implying a satellite facility. |
| `service_area_statement` | text | yes | owner_provided | Owner approves the wording. No "located in" or "our [city] location". The built FAQ and areaServed list already name these cities (see Drift). |
| `drive_minutes` (U1) | integer | yes | owner_provided | Whole minutes measured by the owner from the club address. Blueprint values (6, 9, 8 to 10, 11) are not accepted. Null until measured. |
| `drive_destination` (U1) | string | yes | owner_provided | A named place in that city. A school only if the school rule below is met. |
| `drive_route` (U1) | text | yes | owner_provided | Exits and roads actually driven. CL-1628 says "I-880 S" for Castro Valley and San Leandro. Both lie north of Hayward, so the measured route must settle it. |
| `drive_method` (U1) | text | yes | owner_provided | Tool, day, time of day, vehicle, and who drove. |
| `drive_measured_on` (U1) | date (ISO) | yes | owner_provided | Within 180 days before publish. Older values are measured again. |
| `local_tie` (U2) | text | counts | owner_provided | A school, venue, program, or coach tie the club has confirmed, with the owner's stated basis. Null by default. |
| `coach_local_bio` (U2, optional) | text | counts | owner_provided; live About page sentence (`about.md`, Sandeep Singh Gosal) | Only the owner-approved sentence. Not the "2001 state place winner" line (CL-1157, unverified). Follows OC-07 and OC-09 for any Olympic-era wording. |
| `city_event` (U3) | text | counts | owner_provided; live events list (`events.md`); CL-2513 | Event name, venue, date, and host. A past date is labelled past or excluded. The club is not the host unless the owner says so. |
| `entrance_note` (U4) | text | counts | owner_provided; CL-2294 (unverified) | Entrance or parking note from an owner drive. Null until confirmed. |
| `unique_fact_count` | integer | yes (computed) | computed from U1 to U4 | Must be at least 3, and U1 must be one of them. Not an input. |
| `trial_name` | string | yes | site_data `facts.ts` `trialPass.name`; owner_decision RC-05 | Shared. Same value as Hayward. |
| `trial_price` | string | yes | site_data `facts.ts` `trialPass.price`; owner_decision RC-05 | Shared. "$15". |
| `phone` | string | yes | site_data `facts.ts` `phone`; owner_decision RC-01 | Shared. (510) 303-4869. |
| `email` | string | no | site_data `facts.ts` `email`; owner_decision RC-08 | Shared. |
| `hours_rows` | list | yes | site_data `facts.ts` `hours.rows` (KB-03); OC-02; OC-03 | Shared. Same rows as Hayward. |
| `hours_footnote` | string | yes | site_data `facts.ts` `hours.footnote` | Shared. |
| `class_schedule` | list | yes | site_data `schedule.ts` | Shared. Every row is at the Hayward address, and the page says so. |
| `program_level` | string | yes | owner_decision OC-14 | Shared. Grade labels only. |
| `facility_claim` | string | no (forbidden) | ledger CL-0092, CL-0657, CL-2386 (unconfirmed site) | No city facility, mat area, or "our [city] mat". The former Pep Boys site at 30085 Industrial Pkwy SW, Union City is unconfirmed and must not appear on any page. |
| `json_ld_area_served` | list | no (forbidden until built) | site_data `jsonld-home.ts` `areaServed` | The city appears only after D11 and an approved service_area_statement. Today's list is drift. |

Fields: 27.

## James Logan High School

James Logan is a named school in Union City. Its use is a separate question for the Union City page and for any page that names it.

| Use | Allowed? | Basis | Condition |
|---|---|---|---|
| "6 minutes from James Logan" (drive anchor) | No, until measured | The 6-minute figure is a blueprint value (CL-1626, CL-1862). It has no measurement. | Owner measures to a named place and approves the wording. |
| "Official pathway," "partner," or "supports James Logan" (feeder, partnership) | No | CL-0591, CL-1248, CL-1558 are unverified. The owner has not confirmed any relationship. CL-2171 bars soliciting athletes away from partner school teams during CIF seasons. | Owner names the relationship and its basis. Otherwise null. |
| Coach bio: Sandeep Singh Gosal, James Logan alumnus or coach | Only with owner wording | The live About page says he "wrestled at James Logan high" and was a "volunteer coach at James Logan and Kennedy high schools" (`about.md`). Ledger variants: "assistant coach" (CL-1158) and "state place-winner" (CL-1157, unverified). KB-16 lists names and roles only. | Owner approves one sentence. The state place claim stays out until confirmed. |
| North Coast Grapplers at James Logan HS (event venue) | Only as a third-party venue | Listed on the live events page (`events.md`) with a past date (Sat Oct 3, 2026) and in CL-2513. UWC does not appear to host it. | Date is upcoming or labelled past. The page says the event is third party. |
| Third-party school address, 1801 H St, Union City | No | CL-1150 comes from a competitor dossier, not a school source. | Never published on a location page. |
| NCS Championship at James Logan (historical) | No | Marked historical in `events.md`. | Not used for a local claim. |

## Doorway guard (proposed)

- **Proposed minimum: three unique verified facts per feeder page, with U1 (the owner-measured drive time, route, method, and date) required.** Passing needs U1 plus two of U2, U3, and U4.
- **Why three.** The club has one facility, one price list, and one class schedule (KB-03, KB-05, `schedule.ts`). No class or price exists per city. So the only per-city facts are drive, relationship, dated event, and entrance. Requiring all four would block every page, because no verified event sits in Fremont, Newark, or Castro Valley, and the only Union City event is a past one. Requiring U1 alone leaves a drive-time template with one number changed, which is the doorway pattern the blueprint warns about. Three, with U1 required, is the smallest set that holds a measured fact and a relationship or dated item.
- **Copy floor.** City-specific copy is at least 120 words and shares no more than 40 percent of its 8-word shingles with any other feeder page.

## Example fill (verified values, nulls marked)

Hayward (built):

```
route_path:        /locations/hayward-ca/            (site_data routes.ts: built)
street_address:    30139 Industrial Pkwy SW, Suite C (site_data facts.ts; KB-01 Verified)
locality:          Hayward, CA 94544                 (site_data facts.ts)
phone:             (510) 303-4869                    (site_data facts.ts; RC-01)
email:             unitedwrestlingclub@gmail.com     (site_data facts.ts; RC-08)
hours:             Mon to Fri 6:00 AM to 10:00 PM; Sat open mat 10:00 AM to 12:00 PM; Sun closed (KB-03; OC-03)
trial:             3-Day Mat Pass, $15               (RC-05)
mat_area:          3,800 sq ft of mats               (OC-11)
directions_text:   null (owner_provided; KB-21 missing)
parking_note:      null (owner_provided; CL-2294 unverified)
arrival_time:      null (owner_provided; KB-12 unconfirmed)
membership_price:  null (OC-01: list each tier; tiers are not in facts.ts)
```

Union City (held, D11):

```
route_path:              /locations/union-city-ca/     (routes.ts: omitted, unlock D11)
city_name:               Union City, CA
unlock_record:           null (D11 not in decisions.json)
club_location_statement: "United Wrestling Club trains at 30139 Industrial Pkwy SW, Suite C, Hayward, CA 94544."
service_area_statement:  null (owner_provided)
drive_minutes:           null (owner measures; 6 is not accepted)
drive_destination:       null
drive_route:             null
drive_method:            null
drive_measured_on:       null
local_tie:               null (owner_provided; see James Logan table)
coach_local_bio:         null
city_event:              null (only Union City event on file is past and third party)
entrance_note:           null
unique_fact_count:       0 (gate needs 3)
```

Fremont, Newark, and Castro Valley use the same nulls. No verified city event appears in the sources for those cities.
