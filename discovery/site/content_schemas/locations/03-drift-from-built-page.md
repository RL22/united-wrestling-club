---
type: spec
status: draft
group: site
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/ledger/decisions.json", "discovery/ledger/claims.json", "discovery/ledger/conflicts.json", "discovery/knowledge_base/uwc_kb_v1.md", "discovery/plans/astro-design-system-and-buildout.md", "discovery/site/sitemap_status.md", "discovery/decisions/ADR-20261105-hours-and-conversion-path.md", "discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md", "discovery/market/local_seo/top_10_programmatic_lps.md", "discovery/strategy/uwc_marketing_plan.md", "discovery/archive/snapshots/live_site_content/about.md", "discovery/archive/snapshots/live_site_content/events.md", "site/src/data/routes.ts", "site/src/data/facts.ts", "site/src/data/programs.ts", "site/src/data/schedule.ts", "site/src/data/faqs.ts", "site/src/data/jsonld-home.ts", "site/src/data/nav.ts", "site/src/pages/locations/index.astro", "site/src/pages/locations/hayward-ca.astro", "site/src/components/pages/locations/HaywardBody.astro", "site/src/components/ui/FactList.astro", "site/src/components/ui/ScheduleList.astro", "site/src/components/home/Coaches.astro", "site/src/components/home/Programs.astro", "site/src/components/shell/SiteFooter.astro", "site/src/components/pages/unlocks/events-data.ts"]
shard_of: "discovery/site/content_schemas/locations.md"
part: "3 of 3"
---

> Part 3 of 3 of [locations](../locations.md). Text is verbatim from the original; only links were rewritten.

## Drift from built page

Built pages checked: `hayward-ca.astro`, `HaywardBody.astro`, `index.astro`, `FactList.astro`, `ScheduleList.astro`, `facts.ts`, `programs.ts`, `schedule.ts`.

| Built item | Where | Schema says | Owner ref | Fix |
|---|---|---|---|---|
| Age bands on program cards: "Ages 5 to 13", "Ages 14 to 18", "18 and up" | `HaywardBody.astro` (`meta={p.youth.ages}` and siblings); `facts.ts` `programs`; `programs.ts` | Grade labels only | OC-14 | Remove `ages` from the render path. The facts.ts comment that says "show both" is wrong under OC-14. |
| Saturday gi row hidden | Superseded 2026-11-08: row-11 renders on Hayward (D1 approved). Old text: [archive](../../../archive/stale-2026-11-08/locations.md) | Render row-11 | OC-02 | Clear the pending flag per OC-02. The plan's D1 default ("hide") is superseded. |
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
