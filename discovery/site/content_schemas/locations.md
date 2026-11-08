---
type: spec
status: draft
group: site
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/ledger/decisions.json", "discovery/ledger/claims.json", "discovery/ledger/conflicts.json", "discovery/knowledge_base/uwc_kb_v1.md", "discovery/plans/astro-design-system-and-buildout.md", "discovery/site/sitemap_status.md", "discovery/decisions/ADR-20261105-hours-and-conversion-path.md", "discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md", "discovery/market/local_seo/top_10_programmatic_lps.md", "discovery/strategy/uwc_marketing_plan.md", "discovery/archive/snapshots/live_site_content/about.md", "discovery/archive/snapshots/live_site_content/events.md", "site/src/data/routes.ts", "site/src/data/facts.ts", "site/src/data/programs.ts", "site/src/data/schedule.ts", "site/src/data/faqs.ts", "site/src/data/jsonld-home.ts", "site/src/data/nav.ts", "site/src/pages/locations/index.astro", "site/src/pages/locations/hayward-ca.astro", "site/src/components/pages/locations/HaywardBody.astro", "site/src/components/ui/FactList.astro", "site/src/components/ui/ScheduleList.astro", "site/src/components/home/Coaches.astro", "site/src/components/home/Programs.astro", "site/src/components/shell/SiteFooter.astro", "site/src/components/pages/unlocks/events-data.ts"]
---

# Location pages: content schema

## TL;DR

- Three schemas. LocationsIndex (`/locations/`, built) has 8 fields. LocationPage for Hayward (`/locations/hayward-ca/`, built) has 29. LocationPage for the four feeder pages (omitted, held for D11) has 27. Every per-city value in the feeder schema is null, so its publish gate blocks all four pages today.
- No ledger claim is verified. claims.json holds 2,608 claims: 2,250 unverified, 298 superseded, 60 conflicting. CL ids in this file are evidence pointers, not verified sources. Every per-city value needs a named owner answer.
- The blueprint drive times (6, 9, 8 to 10, and 11 minutes) have no measured source. The schema requires the owner's measured minutes, route, method, and date. James Logan High School can appear only in the narrow, owner-approved forms listed below. The built Hayward page conflicts with OC-14 (age bands) and OC-02 (hides the Saturday gi row).

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

## Drift from built page

Built pages checked: `hayward-ca.astro`, `HaywardBody.astro`, `index.astro`, `FactList.astro`, `ScheduleList.astro`, `facts.ts`, `programs.ts`, `schedule.ts`.

| Built item | Where | Schema says | Owner ref | Fix |
|---|---|---|---|---|
| Age bands on program cards: "Ages 5 to 13", "Ages 14 to 18", "18 and up" | `HaywardBody.astro` (`meta={p.youth.ages}` and siblings); `facts.ts` `programs`; `programs.ts` | Grade labels only | OC-14 | Remove `ages` from the render path. The facts.ts comment that says "show both" is wrong under OC-14. |
| Saturday gi row hidden | `ScheduleList` defaults `showPending=false`, so `row-11` (`pending: "D1"`) does not render on Hayward | Render row-11 | OC-02 | Clear the pending flag per OC-02. The plan's D1 default ("hide") is superseded. |
| Saturday hours start at 10:00 AM only | `facts.ts` `hours.rows` | Saturday hours start time is open | OC-02, question 4 | Owner answers question 4. |
| Age bands elsewhere, site-wide | `components/home/Programs.astro` (badges), `components/forms/TrialForm.astro` (option labels), `components/forms/ReviewForm.astro`, `data/nav.ts` | Grade labels | OC-14 | Outside this schema's pages, but the same rule applies. Fix in the same change. |
| No mat area | Hayward page | `mat_area` required: "3,800 sq ft" | OC-11 | Add. Gap, not a violation. |
| No directions or parking | Hayward page | Optional, null until owner text | KB-21 | Gap. Do not invent. |
| Service area named for omitted cities | `SiteFooter.astro` line 80 ("Serving Hayward, Union City, Fremont, San Leandro, Castro Valley, Newark"); `faqs.ts` FAQ 1 ("We serve families and competitors from ..."); `jsonld-home.ts` `areaServed` (five feeder names) | Feeder names appear only after D11 and an approved statement | D11; open question 6 | Owner approves one service-area wording. The FAQ also says "easily accessible via I-880 and Highway 92," which rests on CL-1220 (unverified). |
| Coach bio on homepage | `components/home/Coaches.astro` line 79: "James Logan High School wrestler and 2001 California state place winner ... volunteers as an assistant at Kennedy High School" | `coach_local_bio` only with owner wording | OC-07, OC-09; CL-1157, CL-1158 | Owner picks the sentence. The state place line is unverified. |
| FAQ and footer present the city list as coverage | Same as above | No coverage claim without approval | D11 | Same owner answer as service-area wording. |

No drift found on the Hayward page for: address, phone (RC-01), email not shown (no violation), trial "$15" (RC-05), weekday hours (OC-03), Google rating absent (KB-17 is for /reviews/ only), and sanction not shown.

## Publish gate

Hayward (re-check before any change to the built page):

1. `routes.ts` lists `/locations/hayward-ca/` as built. Test: parse routes.ts.
2. Every site_data value on the rendered page equals its value in `facts.ts`, `schedule.ts`, or `programs.ts`. Test: script diffs rendered text against the data files.
3. No age band renders. Test: grep the built HTML for "Ages " and "18 and up". Zero hits.
4. All 12 schedule rows render, including row-11 (Saturday gi). Test: count `<li>` rows in the schedule list.
5. Mat area renders as "3,800 sq ft". Test: grep for "3,800", and grep for "3,000" and "5,000", which must return zero hits.
6. No Google rating renders. Test: grep for "5.0" and "42 reviews". Zero hits.
7. Phone and email match RC-01 and RC-08. Test: grep for "(510)" and "@". Only (510) 303-4869 and unitedwrestlingclub@gmail.com.
8. Trial reads "3-Day Mat Pass" at "$15". Test: grep.
9. An owner_provided field renders a block only when its owner answer is recorded. Test: a null value produces no block.

Feeder page (each city, in order; all must pass before the route is built):

1. `decisions.json` has a D11 entry for that city with date and owner. Test: grep.
2. `routes.ts` changes that route to built in the same change. Test: parse routes.ts.
3. Every owner_provided field is non-null and has an owner answer, date, and name in the page frontmatter. Test: frontmatter check.
4. `drive_minutes` is an integer. `drive_measured_on` is an ISO date within 180 days of publish. `drive_method` is non-empty. Test: validator.
5. `unique_fact_count` is at least 3, and U1 is among the counted facts. Test: computed count.
6. `club_location_statement` appears verbatim. The page has no "located in [city]", "our [city] location", or "[city] studio". Test: regex.
7. The page contains none of these strings: "30085", "Pep Boys", "satellite", "5,000", "3,000", "Olympian", "Moscow", "Ages ", "#100234", "+1-510", "(510) 589-5591", "info@unitedwrestlingclub.com", "5.0", "42 reviews". Test: grep rendered HTML.
8. If the page names James Logan High School, a `local_tie` or `city_event` record exists with an owner basis that names it. Test: grep, then check the record.
9. City copy is at least 120 words and at most 40 percent 8-word shingle overlap with each other feeder page. Test: script.
10. Shared values (phone, address, hours, trial price) match the Hayward page. Test: diff.
11. `jsonld-home.ts` areaServed includes the city only if `service_area_statement` is approved. The sitemap includes the page only after steps 1 to 10 pass. Test: check both files.
12. The LocationsIndex card for the city is added only after steps 1 to 11 pass. Test: LocationsIndex gate step 1.
13. The page frontmatter records the owner name and sign-off date.

LocationsIndex:

1. Every card in `location_cards` is a built route in `routes.ts`. Test: compare lists.
2. No link points to an omitted route. Test: grep hrefs against routes.ts.
3. Card address and phone match `facts.ts`. Test: diff.

## Open questions for owner

1. Will you measure drive time in whole minutes from 30139 Industrial Pkwy SW Ste C to a named destination in each city, and record the route, method, and date for each?
2. Does UWC have a confirmed relationship with James Logan High School or any other Union City school, and if so, what wording may the page use?
3. Will you confirm that no feeder page will imply a facility in Union City, Fremont, Newark, or Castro Valley, given that the former Pep Boys site at 30085 Industrial Pkwy SW is unconfirmed?
4. Should the Saturday hours row start at 8:00 AM now that the gi class is part of the Saturday schedule under OC-02?
5. What grade labels should replace the age bands for the adult and high school programs?
6. Which service-area sentence replaces the FAQ answer and the areaServed list?
7. Which Sandeep Singh Gosal bio sentence is approved, given the live About page, the homepage, and the ledger disagree?
8. May the North Coast Grapplers event at James Logan High School be listed on a Union City page as a third-party venue?
9. Should ADR-20261102 and KB-14 be corrected from 3,000 to 3,800 sq ft to match OC-11?
10. Who will write and drive the Hayward directions and parking text that KB-21 says is missing?
11. Will you record D11 in `decisions.json` with the four cities and the minimum of three unique facts proposed here?
12. Should San Leandro get a route and its own schema, since the marketing plan and built footer name it?

## Sources

- Owner decisions: `discovery/ledger/decisions.json` (OC-01, OC-02, OC-03, OC-07, OC-08, OC-09, OC-11, OC-14, LS-01, RC-01, RC-02, RC-05, RC-08).
- Site data: `site/src/data/routes.ts`, `facts.ts`, `programs.ts`, `schedule.ts`, `faqs.ts`, `jsonld-home.ts`, `nav.ts`.
- Built pages and components: `site/src/pages/locations/index.astro`, `hayward-ca.astro`, `site/src/components/pages/locations/HaywardBody.astro`, `ui/FactList.astro`, `ui/ScheduleList.astro`, `home/Coaches.astro`, `home/Programs.astro`, `shell/SiteFooter.astro`, `forms/TrialForm.astro`, `forms/ReviewForm.astro`, `pages/unlocks/events-data.ts`.
- Knowledge base: `discovery/knowledge_base/uwc_kb_v1.md` (KB-01 to KB-23, OC-01 to OC-06 notes).
- Claims: `discovery/ledger/claims.json` (CL-0092, CL-0657, CL-0591, CL-1150, CL-1155, CL-1157, CL-1158, CL-1220, CL-1248, CL-1558, CL-1626, CL-1628, CL-1862, CL-2171, CL-2292, CL-2294, CL-2363, CL-2386, CL-2513, CL-1782, CL-1736, CL-1800). Verification status counts from the same file. `discovery/ledger/conflicts.json` (RC-01, RC-08 variants).
- Plans and decisions: `discovery/plans/astro-design-system-and-buildout.md` (D1, D11 rows), `discovery/site/sitemap_status.md`, `discovery/decisions/ADR-20261105-hours-and-conversion-path.md`, `discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md`.
- Live copy snapshot (history, used for the coach bio and event listing only): `discovery/archive/snapshots/live_site_content/about.md`, `events.md`.
- Blueprint (intent and layout only, numbers not used): `discovery/market/local_seo/top_10_programmatic_lps.md`.
- Marketing plan (invariants, service-area intent): `discovery/strategy/uwc_marketing_plan.md`.
