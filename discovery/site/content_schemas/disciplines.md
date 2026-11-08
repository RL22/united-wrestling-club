---
type: spec
status: draft
group: site
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/ledger/decisions.json", "discovery/ledger/claims.json", "discovery/knowledge_base/uwc_kb_v1.md", "discovery/site/forms_map_full_sitemap.md", "discovery/site/sitemap_status.md", "discovery/strategy/womens_self_defense_financial_model.md", "discovery/market/local_seo/top_10_programmatic_lps.md", "discovery/plans/astro-design-system-and-buildout.md", "todos.md", "site/src/components/templates/ProgramPage.astro", "site/src/components/pages/classes-wrestling/ClassPage.astro", "site/src/components/pages/classes-adult/PriceFacts.astro", "site/src/components/pages/classes-adult/Topics.astro", "site/src/components/pages/unlocks/SamboBody.astro", "site/src/components/ui/ScheduleList.astro", "site/src/pages/classes/index.astro", "site/src/pages/classes/kid-wrestling.astro", "site/src/pages/classes/youth-wrestling.astro", "site/src/pages/classes/adult-wrestling.astro", "site/src/pages/classes/nogi-jiu-jitsu.astro", "site/src/pages/classes/gi-jiu-jitsu.astro", "site/src/pages/classes/boxing-fundamentals.astro", "site/src/pages/classes/open-mat.astro", "site/src/pages/classes/sambo.astro", "site/src/pages/pricing.astro", "site/src/data/facts.ts", "site/src/data/programs.ts", "site/src/data/schedule.ts", "site/src/data/routes.ts", "site/public/assets/js/uwc-attribution.js"]
---

# Disciplines content schema (/classes/*)

## TL;DR

- **DisciplinePage** (31 fields) is the one schema for every `/classes/*` page. It covers the seven built pages that use the template path and the built sambo page once it is brought onto the schema. The hub `/classes/` gets a 5-field **ClassesHub** schema. The omitted `/classes/womens-self-defense` route gets a 20-row **WomensSelfDefenseOverlay** that sits on top of DisciplinePage and is owner_provided end to end.
- **No built class page can pass the gate today.** No page has an `approved_by` record, no curriculum block is owner-approved, gi, no-gi, and open mat have no named instructor, and the claims ledger holds 0 verified claims, so no ledger source can pass.
- **The built pages break four owner decisions:** age bands (OC-14), $139.99 shown as the membership price (OC-01), the 4-Day Kids plan (LS-01), and the hidden Saturday gi row (OC-02). The women's self-defense prices, dates, and instructors are proposals or unknowns, and the financial model's Sunday cohort conflicts with KB-03.

## Scope

| Route | routes.ts status | Rendered by | Schema |
|---|---|---|---|
| `/classes/` | built (G2) | Inline in `pages/classes/index.astro`. No template. | ClassesHub (section 5) |
| `/classes/kid-wrestling/` | built (G2) | ClassPage, then ProgramPage | DisciplinePage |
| `/classes/youth-wrestling/` | built (G2) | ClassPage, then ProgramPage | DisciplinePage |
| `/classes/adult-wrestling/` | built (G2) | ClassPage, then ProgramPage | DisciplinePage |
| `/classes/nogi-jiu-jitsu/` | built (G3) | ProgramPage direct | DisciplinePage |
| `/classes/gi-jiu-jitsu/` | built (G3) | ProgramPage direct | DisciplinePage |
| `/classes/boxing-fundamentals/` | built (G3) | ProgramPage direct | DisciplinePage |
| `/classes/open-mat/` | built (G3) | ProgramPage direct, form in the `after-schedule` slot | DisciplinePage |
| `/classes/sambo/` | built (no group) | InteriorLayout only. No template. | Not on DisciplinePage today. The plan default is omit (D3). See drift item 7. |
| `/classes/womens-self-defense/` | omitted, unlock D4 | None | WomensSelfDefenseOverlay (section 4), on top of DisciplinePage |

## 1. DisciplinePage

Source types: `site_data` is a file in `site/src/data`. `owner_decision` is an id in `discovery/ledger/decisions.json`. `ledger` is a CL id, and it counts only when `claims.json` shows `verified` (rule R3). `owner_provided` needs a named owner answer and stays null until one is recorded. `copy` is presentational text, not a fact, and the owner reviews it before publish.

| Field | Type | Required | Source | Gate or rule |
|---|---|---|---|---|
| path | string, `/classes/<slug>/` | yes | site_data (routes.ts) | Must equal the routes.ts path. The sitemap lists it only when built. |
| route_status | enum: built, omitted, redirect | yes | site_data (routes.ts) | Must be `built` to publish. |
| program_id | enum: youth, varsity, adult, open | yes | site_data (programs.ts) | Keys the form preset. The youth page uses `varsity` today (drift 9). |
| unlock_decision | string or null | yes | owner_provided (routes.ts unlock) | Null for a built page. Sambo must record D3 here or be omitted. |
| title | string | yes | copy | Contains "in Hayward, CA". No age band and no price. |
| description | string | yes | copy | Any price or count must match `price_tiers` or `trial_offer`. |
| eyebrow | string | yes | copy | Uses `grade_band` wording only (OC-14). |
| heading | string | yes | copy | Same class name as the hub card and nav (drift 10). |
| heading_brand | string | no | owner_provided | Only "(Wrestle-Jitsu)" on the no-gi page, once the owner confirms the name (CL-0721 is unverified). |
| lead | string | yes | copy | No age band, no credential, no unverified claim. |
| grade_band | string | yes | owner_decision OC-14 (kids, youth); site_data (schedule.ts label, adult) | Kids: "Pre-K to 5th grade". Competition youth: "K to 12th grade". Middle and high school: "Middle and high school". Adult: the schedule.ts label. Age bands are forbidden (R1). |
| schedule_filter | object `{program, tag}` | yes | site_data (schedule.ts) | Must return at least one row. Returned rows render verbatim from schedule.ts. A row with `pending` set does not count (gate 10). |
| price_tiers | list of `{label, price, period, schedule_note}`, at least 1 | yes | owner_decision OC-01 (values transcribed from pricing.astro) | Each tier must match a live /pricing row. A tier is never labeled "Monthly membership". The 4-Day Kids tier is blocked by LS-01. Proposed: move the tier list into `site/src/data/pricing.ts` so the source becomes site_data. |
| trial_offer | object `{name, price, blurb}` | yes | site_data (facts.ts trialPass; KB-06) | The only offer on a class page: 3-Day Mat Pass, $15, new members only. No free class, free 1-day pass, or free 2-class pass (RC-05). |
| trial_cta_label | string | yes | owner_decision RC-05 | Default "Try three practices for $15". Open mat: "Request an open mat visit". |
| membership_terms | string | yes | site_data (facts.ts membership.terms; KB-08) | "Month to month. No contract. No cancellation fee." The 7-day notice from OC-06 is not in this string yet (open question 13). |
| drop_in | object `{price, per, note}` | open-mat only | site_data (facts.ts dropIn; KB-09) | $15 per visit. Included with a monthly membership. |
| hours | list of `{days, time, note}` | open-mat only | site_data (facts.ts hours; KB-03; OC-03) | Renders through `ui/FactList` only. |
| who_it_is_for | list of 2 to 5 strings | yes | owner_provided | Replaces the age-band fact rows. The owner writes these in grades or plain words. |
| curriculum | list of 3 to 7 `{title, body}` | yes | owner_provided | Each item approved by the owner. Replaces ClassPage `sections` and `Topics`. Items may not carry unverified claims (for example "Kyrgyz master" or "16-week progression"). |
| instructors | list of `{name, role}`, at least 1 | yes | site_data (facts.ts coaches) or owner_provided with consent | The name must equal a facts.ts coaches entry, or be owner_provided with consent on file. Gi, no-gi, and open mat have none today. |
| instructor_credentials | string or null | no | owner_provided | KB-16 wording only (KB Section C). No medal, title, or Olympic wording without the decision named in R6. |
| address | object | yes | site_data (facts.ts address; KB-01) | Rendered from facts.ts only. |
| phone | object | yes | site_data (facts.ts phone; RC-01) | (510) 303-4869. Call wording only. |
| contact_email | string | no | site_data (facts.ts email; RC-08) | unitedwrestlingclub@gmail.com |
| booking_note | string | yes | site_data (facts.ts booking.howTo; KB-07) | "Fill in the trial form on the website, or call (510) 303-4869." Never "text Coach Naweed" (OC-04, R6). |
| media_notice | string | yes when a form is shown | site_data (facts.ts media; KB-23) | Keeps the opt-out wording. |
| form | object `{form_id, formPreset, cta_label}` | yes | site_data (programs.ts formPreset) | `form_id` is F1 (trial) or F1a (open mat). The endpoint must be set in FORM_ENDPOINTS (gate 14). |
| unique_fact_count | integer, computed | yes | derived | At least 4, counted under R2. Computed by the build, never typed. |
| approved_by | string | yes | owner_provided | Named owner. Null blocks publish (R4). |
| approved_on | date | yes | owner_provided | Date of the owner's approval. |

**Rules**

- **R1 Age bands are forbidden.** No age range, "aged", "age 4 to 11", "18 and up", or "Ages" label may appear in any field, title, description, badge, or JSON-LD. Source: OC-14. Gate 6 tests this.
- **R2 Doorway guard.** A page publishes only if `unique_fact_count` is at least 4. The four counted facts are `grade_band`, `schedule_filter` (at least one row), `instructors` (at least one named), and `price_tiers` (at least one tier). These are the only facts the site holds that differ from class to class. Address, phone, trial offer, membership terms, booking note, and media notice are identical on all eight pages, so they never count. Curriculum is required (3 to 7 approved items), but it is owner-approved copy, so it does not count toward the four. Three would let a page ship with one tier and no instructor. Gi, no-gi, and open mat have no named instructor today, so this rule blocks them until the owner names one.
- **R3 Ledger.** A CL id counts as a source only when `discovery/ledger/claims.json` shows `verification` = `verified`. As of 2026-11-06 the ledger holds 2,608 claims: 2,250 unverified, 298 superseded, 60 conflicting, and 0 verified. Until a claim is verified, no field that cites a CL id can pass.
- **R4 owner_provided.** A field stays null until `approved_by` and `approved_on` are recorded for the page. A null required field blocks publish.
- **R5 Excluded from class pages.** Instructor pay splits, coach bounties, the tuition rollover, corporate clinic prices, named employers, and pitch-script text come from strategy documents. They are internal. KB Section B item 9 routes corporate, partner, and sponsorship work to /contact.
- **R6 Prohibited wording** unless the named decision allows it: "Olympian", "Olympic", "Moscow", or "qualifier" (OC-07 is open); "silver", "bronze", or "medalist" for a named coach (OC-08, OC-09, OC-10); "free trial" (RC-05); "text Coach Naweed" (OC-04).

## 2. Example fill: /classes/kid-wrestling/

Verified values come from the cited source. Nulls are marked.

- `path`: /classes/kid-wrestling/ (site_data, routes.ts, built)
- `program_id`: youth (site_data, programs.ts)
- `grade_band`: "Pre-K to 5th grade" (owner_decision OC-14)
- `schedule_filter`: `{program: youth, tag: kids}`. Returns two rows from schedule.ts: Mon and Wed, 6:30 to 7:30 PM, "Kids, pre-K to 5th grade"; and Fri, 5:00 to 6:30 PM, "Kids competition" (site_data)
- `price_tiers`: "Kids 2 Day (Monday and Wednesday)" $89.99 per month (owner_decision OC-01; value from pricing.astro). "4 Day Kids": **null**, blocked by LS-01.
- `trial_offer`: 3-Day Mat Pass, $15, "Three practices to see if the room fits. New members only." (site_data, KB-06; owner_decision RC-05)
- `trial_cta_label`: "Try three practices for $15" (owner_decision RC-05)
- `membership_terms`: "Month to month. No contract. No cancellation fee." (site_data, KB-08). The 7-day notice: **null** (OC-06 wording pending).
- `who_it_is_for`: **null** (owner_provided). The built lead "age 4 to 11" is forbidden under R1.
- `curriculum`: **null** (owner_provided). The seven current sections are unapproved.
- `instructors`: Naweed Zemaryalai, Head coach; Sandeep Singh Gosal, Youth competition (site_data, facts.ts coaches; KB-16 names and roles)
- `instructor_credentials`: **null**
- `address`: 30139 Industrial Pkwy SW, Suite C, Hayward, CA 94544 (site_data, KB-01)
- `phone`: (510) 303-4869 (site_data; RC-01)
- `form`: `{form_id: F1, formPreset: youth}` (site_data). Endpoint: `trial_pass`, which is set to a value RC-09 says is not live (drift 12).
- `unique_fact_count`: 4 (grade band, schedule rows, instructors, price tier)
- `approved_by`: **null**

Result: blocked by curriculum, who_it_is_for, the LS-01 tier, the trial endpoint, and approved_by. The four facts pass R2.

## 3. Publish gate

1. routes.ts shows `built` for the path. An unlock route also needs its decision id recorded in `decisions.json`. Test: script reads both files.
2. Every required field is non-null. Test: schema validator fails on any null.
3. Every `owner_provided` field has `approved_by` and `approved_on` set. Test: validator.
4. Every `ledger` value cites a CL id whose `verification` is `verified` in claims.json. Test: lookup. Today this fails for every claim.
5. `price_tiers` equals the matching rows in pricing.astro (or `site/src/data/pricing.ts` once moved). No 4-Day Kids row appears unless LS-01 is resolved. Test: diff.
6. No age band in rendered text, titles, descriptions, badges, or JSON-LD. Test: grep built HTML for `\bages? \d`, `\baged \d`, `\d+ to \d+ (years|age)`, `18 and up`, and `Ages`.
7. `grade_band` equals one of the OC-14 wordings for kids, youth, or adult. Test: string match.
8. `unique_fact_count` is at least 4 under R2. Test: validator counts the four facts.
9. `curriculum` has 3 to 7 items, each approved. Test: count and flag check.
10. `schedule_filter` returns at least one row from schedule.ts, and no returned row has `pending` set. The Saturday gi row (OC-02) must be resolved before it can appear. Test: run the filter.
11. Each named instructor equals a facts.ts coaches name, or has consent on file and `approved_by`. Test: lookup.
12. Phone, address, email, and trial text are imported from facts.ts. No literal copy exists outside facts.ts. Test: grep the source tree.
13. No R6 term appears unless its named decision allows it. Test: grep built HTML for "Olympian", "Olympic", "Moscow", "qualifier", "silver", "bronze", "medalist", "free trial", and "text Coach".
14. `form.form_id` has a non-empty endpoint in `FORM_ENDPOINTS` (site/public/assets/js/uwc-attribution.js, lines 13 to 18). For F1, the `trial_pass` value must match the endpoint the owner confirms (open question 15). Test: grep.
15. The hub lists the page with its `heading`, `grade_band`, and `lead`. Test: hub build check.
16. The sitemap includes the path only when `route_status` is `built`. Test: diff sitemap.xml against routes.ts.
17. `approved_by` names the owner. Test: field is non-empty and matches the owner list.

## 4. WomensSelfDefenseOverlay (route omitted, unlock D4)

routes.ts: omitted, "KB-19 unconfirmed; no waitlist endpoint", unlock D4. Nothing here is publishable until D4 is recorded. Address and phone inherit from DisciplinePage. The rest of DisciplinePage applies, with the rows below.

| Field | Type | Required | Source | Gate or rule |
|---|---|---|---|---|
| unlock_decision | "D4" | yes | owner_provided | Record D4 in decisions.json and set routes.ts to `built` before anything else. |
| instructors | list of `{name, public_role, credential_line, consent_on_file}`, 3 expected | yes | owner_provided | "Louisa" and "Ja Shia" are first names only. "Neha's Sister" is a relationship, not a name. Each needs a full name, public role, and consent. CL-2031 says the three are "potential collaborators, not confirmed staff or partners". `credential_line` stays null unless the owner approves it. |
| workshop_dates | list of dates | yes | owner_provided | KB-19: "Dates and pricing not set." |
| workshop_time | string | yes | owner_provided | The model proposes Saturday 12:30 to 3:00 PM (CL-2585). That falls after the KB-03 Saturday close at 12:00 PM. |
| cohort_schedule | string | yes | owner_provided | The model proposes Sunday 10:30 AM to 12:00 PM or Tuesday 7:30 to 9:00 PM (CL-2590). KB-03 says Sunday is closed. |
| cohort_start_date | date | yes | owner_provided | Not set. |
| workshop_price | money | yes | owner_provided | Proposal: $49 (see the proposal table). Owner picks one figure. |
| cohort_price | money | yes | owner_provided | Proposal: $199 for six sessions. |
| workshop_capacity | integer | yes | owner_provided | Proposal: 20 (model; CL-2584). |
| cohort_capacity | integer | yes | owner_provided | Proposal: 16 (model; CL-2591). |
| cohort_includes | string | no | owner_provided | The model says a UWC rashguard or t-shirt. The owner confirms. |
| curriculum | list of 3 to 7 `{title, body}` | yes | owner_provided | CL-0103: the curriculum "still need[s] confirmation" with Louisa and Neha's sister. The blueprint topics (escapes, striking) are not approved. |
| eligibility_text | string | yes | owner_provided | The blueprint says "women and teen girls". Under OC-14 there is no age band, so the owner writes grade or plain wording. |
| trial_offer | object or null | yes (may be null) | owner_decision RC-05 | Default null. The blueprint's "Free Trial Session" is barred by RC-05. The $15 3-Day Mat Pass applies only if the owner says so. |
| waitlist_form | object `{form_id: F4, form_name: wsd_waitlist, endpoint}` | yes | owner_provided (forms map F4) | No `wsd_waitlist` entry exists in FORM_ENDPOINTS. Gate 14 blocks until one is set. |
| waitlist_fields | list | yes | forms map F4 | Name and email required. Phone optional. `cohort_interest` (workshop, cohort, both) with labels from the approved prices. `buddy_email` optional. |
| buddy_discount | string or null | no | owner_provided | Named in the forms map and the model. No decision. Null. |
| media_release_default | enum: checked, unchecked | yes | owner_provided | The forms map F4 says unchecked. D16 keeps general forms checked. The owner picks one. |
| sms_disclosure | boolean | yes | owner_provided | If the form takes SMS, the F1 disclosure in `forms/ConsentSms.astro` applies (KB-22: STOP and HELP). |
| contact_cta | string | yes | owner_decision OC-04 | "Call (510) 303-4869." The blueprint's "Call or text Coach Naweed" is barred. |

**Proposals, not facts.** The strategy model and the forms map disagree, and the ledger adds a conflicting range. None of these may appear on the page until the owner approves one.

| Item | Financial model | Forms map F4 | Ledger and KB | Status |
|---|---|---|---|---|
| Workshop | $49 per seat. Early bird $39, at door $59. Cap 20. 2.5 hours. Saturday 12:30 to 3:00 PM. | "$49 intro workshop", founding pricing | CL-0308 and CL-0755 (conflicting): $35 to $50 per ticket, or a free intro. CL-2036: $49, 20 people. | Proposal |
| Cohort | $199. Cap 16. Six weekly 90-minute sessions. Sunday 10:30 AM or Tuesday 7:30 PM. | "$199 six-week cohort", founding pricing | CL-2441: 16 seats at $199 | Proposal. Sunday conflicts with KB-03. |
| Buddy discount | Mentioned, no amount | Buddy email field | None | Undecided |
| Tuition rollover | 100% of the seminar fee credited to a $139.99 membership within 7 days | Not on the form | Not in KB Section A. KB Section C bars unlisted offers. | Excluded (R5) |
| Corporate clinic | $1,000 to $1,500 per booking | Not on this page | CL-2524 | Excluded. Route to /contact (KB Section B item 9). |

**Excluded from the page (R5, R6):** the 60/40 and 70/30 splits and per-instructor pay; the $50 coach bounty; named employers (Kaiser Permanente, St. Rose, Bay East Association of Realtors); "Free Trial Session"; "Call or text Coach Naweed"; any "Olympian" or Olympic phrasing (OC-07).

## 5. ClassesHub (/classes/)

The hub has no template. `pages/classes/index.astro` builds it inline.

| Field | Type | Required | Source | Gate or rule |
|---|---|---|---|---|
| title | string | yes | copy | "Classes in Hayward, CA | United Wrestling Club". |
| description | string | yes | copy | Trial wording must match RC-05. |
| heading | string | yes | copy | "Classes at United Wrestling Club". |
| lead | string | yes | copy | Trial wording must match RC-05. |
| cards | list, one per built DisciplinePage | yes | site_data (routes.ts status `built`) | Each card takes `title` from the page's `heading`, `badge` from `grade_band`, `text` from `lead`, and `href` from `path`. No empty card. No age badge (OC-14). Omitted routes never appear. |

## 6. Drift from built pages

### 6a. What each built page passes

| Page | Rendered by | Price shown | Instructor shown | Curriculum | Grade or age wording | Gate today |
|---|---|---|---|---|---|---|
| kid-wrestling | ClassPage | 2 Day $89.99 and 4 Day Kids $139.99 | Naweed, Sandeep (site_data) | 7 sections (unapproved) | Lead says "age 4 to 11". Fact row "Ages 5 to 13". Eyebrow "Pre K - 5th". | Fails: age, LS-01, curriculum, approval |
| youth-wrestling | ClassPage | $150 Competition, $139.99 Middle and High School | Naweed, Sandeep | 6 sections (unapproved) | Lead says "aged 12 to 18". Fact row "Ages 14 to 18". Eyebrow "Pre K - 12th" (OC-14 says K to 12th). | Fails: age, grade label, curriculum, approval |
| adult-wrestling | ClassPage | $139.99 "Adult / College / High School" | Naweed (site_data) | 5 sections (unapproved) | Fact row "18 and up" | Fails: age, curriculum, approval |
| nogi-jiu-jitsu | ProgramPage + PriceFacts | Generic $139.99 membership. The $100 "BJJ / 3 days" tier on pricing.astro is not shown. | None named ("a black belt") | Paragraphs only | None | Fails: instructor, tier, curriculum, approval |
| gi-jiu-jitsu | ProgramPage + PriceFacts | Generic $139.99 membership | None named ("a black belt") | Paragraph only | None | Fails: instructor, tier, curriculum, approval |
| boxing-fundamentals | ProgramPage + PriceFacts + Topics | Generic $139.99 membership. No boxing tier exists on pricing.astro. | Farid Siddiq, "Coach: ... boxing." (site_data) | 6 topics (unapproved) | None | Fails: tier, curriculum, approval |
| open-mat | ProgramPage + PriceFacts + Topics + FactList | $15 drop-in and generic $139.99 membership | None | 5 topics (unapproved) | Copy says "Youth and adults come together" (CL-0176 superseded) | Fails: instructor, tier, curriculum, approval |
| sambo | InteriorLayout + SamboBody | None | "Master-level instructor from Kyrgyzstan" (unnamed) | Paragraph | Title "Sambo (9th - ADULT)" | Fails. Not on schema. D3 open. |

### 6b. Numbered drift

1. **Age bands are published (OC-14).** The facts block on the kid, youth, and adult pages renders `facts.ts` `programs.*.ages` ("Ages 5 to 13", "Ages 14 to 18", "18 and up") as "Who it is for" rows (facts.ts lines 30 to 32). The lead copy says "age 4 to 11" (kid-wrestling.astro line 11) and "aged 12 to 18" (youth-wrestling.astro line 11). The hub badges use the same ages (classes/index.astro lines 10 to 12).
2. **Competition youth grade label conflicts with OC-14.** youth-wrestling.astro line 9 (eyebrow), line 13 (fact label), and pricing.astro line 16 read "Pre K - 12th". OC-14 says K to 12th. The same page shows "Ages 14 to 18" under that label.
3. **$139.99 is presented as the membership price (OC-01).** PriceFacts.astro line 9 renders "Monthly membership: $139.99 per month" on the gi, no-gi, boxing, and open-mat pages. OC-01 says $139.99 is one tier, not the price. The $100 "BJJ / 3 days" tier on pricing.astro is shown on no class page.
4. **The 4-Day Kids plan is still sold (LS-01).** kid-wrestling.astro line 27 and pricing.astro line 14 list it at $139.99 Monday to Thursday. LS-01 says the pricing copy must match the schedule, and the schedule has no Thursday kids row.
5. **The Saturday gi row is still hidden (OC-02).** schedule.ts row-11 carries `pending: "D1"` (line 25). OC-02 says the row is live. The file's comment still describes the plan default.
6. **Instructors are unnamed and credentials are unapproved.** gi-jiu-jitsu.astro lines 7, 11, and 15 and nogi-jiu-jitsu.astro line 16 say "taught by a black belt" or "led by a jiu-jitsu black belt who also wrestled in college". No instructor row renders. SamboBody.astro line 7 says "master-level instructor from Kyrgyzstan with legitimate credentials". CL-2151 says the instructors are not named on the website, and KB Section C bars credential statements beyond KB-16.
7. **Sambo is built outside the plan.** routes.ts marks `/classes/sambo/` built with no group. The rebuild plan (row 9 and D3) says omit. CL-1737 says "omitted until the owner confirms". SamboBody.astro says D3 is pending. The page has no schedule row, no coach, no price, and no trial CTA. Its title "Sambo (9th - ADULT)" (sambo.astro lines 6 to 7) is a legacy grade-style label.
8. **The template contract is narrower than the pages.** ProgramPage accepts only title, description, path, eyebrow, heading, headingBrand, lead, schedule, trialProgram, and ctaLabel. ClassPage adds facts, sections, prices, and coachNames and renders them itself. Gi, no-gi, boxing, and open mat hand-write prices and topics into the default slot. Prices, curriculum, and coaches are therefore not template fields. This schema makes them fields.
9. **Trial presets do not match the schedule keys.** ClassPage types `trialProgram` as youth, varsity, or adult, so it cannot pass openmat. ProgramPage allows openmat. The youth page passes `varsity` (age-based "Varsity, 14 to 18" in the forms map) with schedule tag `competition`, which programs.ts has no key for.
10. **Names differ between hub and page.** routes.ts titles ("Kid Wrestling", "Youth Wrestling", "Sambo") are the hub card titles. The page headings are "Kids Wrestling", "Competition Youth Wrestling", and "Sambo (9th - ADULT)". "No-Gi Jiu-Jitsu" in routes.ts lacks the "(Wrestle-Jitsu)" brand in the heading.
11. **The hub is partly empty.** Eight built class routes are listed. Only three have a blurb and badge (classes/index.astro lines 9 to 13). The gi, no-gi, sambo, boxing, and open-mat cards render with no text. The three badges are age bands (drift 1).
12. **The trial endpoint contradicts RC-09.** uwc-attribution.js line 14 sets `trial_pass` to `mkjjyyep`. RC-09 says `mkjjyyep` is not live and the contact form posts to `xyyavaaj`. The forms map says `trial_pass` still points at `xyyavaaj`. Every F1 trial form on a class page depends on this value.
13. **The membership terms omit the decided notice (OC-06).** facts.ts `membership.terms` does not mention the 7-day cancellation notice that OC-06 decided on.
14. **Section labels differ.** ClassPage uses "Price" and ProgramPage pages use "Prices". Only ClassPage has a "Coaches" section. Only the boxing page has a "Coach:" line.
15. **Reverse drift (the schema requires these; built pages do not have them).** `approved_by` and `approved_on` (no sign-off trail exists). An instructor on gi, no-gi, and open mat. A curriculum list on gi and no-gi (they use paragraphs). A tier table on any page that shows $139.99 (the pages show one generic figure instead). A `form` block with an endpoint check (class pages use a trial button, except open mat's F1a form).

## Open questions for owner

1. What are Louisa's full name, public role, and credential line, and has she agreed to be named on the page?
2. What is the full name of Neha's sister, and does she agree to a public line about her police work?
3. What are Ja Shia's full name and public role, and has Ja Shia agreed to be named?
4. Which women's self-defense price is approved, given the $49 and $199 proposal and the alternative $35 to $50 and $39 and $59 figures?
5. Which workshop and cohort dates, times, and capacities are approved, given that KB-03 says Sunday is closed and Saturday closes at 12:00 PM?
6. Does the $15 3-Day Mat Pass apply to women's self-defense, or is the waitlist the only call to action?
7. Should the women's self-defense waitlist default the media release to unchecked, as the forms map says, or checked, as the general rule (D16) says?
8. Which price tier applies to the gi, no-gi, and boxing pages, now that OC-01 makes $139.99 one tier only?
9. Who teaches gi jiu-jitsu, no-gi jiu-jitsu, and the Saturday open mat, and may each be named on the page?
10. Should the 4-Day Kids plan be removed from the kids page and pricing, or should a Thursday kids class be added to the schedule (LS-01)?
11. Should the Saturday 8 to 10 AM gi row drop its D1 pending flag now that OC-02 says the row is live?
12. Is Combat Sambo offered under D3, so that /classes/sambo stays built, or should the route be omitted?
13. What wording should the 7-day cancellation notice from OC-06 use in the membership terms?
14. Should F1 get a women's self-defense program preset, since programs.ts has none?
15. Should the trial form post to `xyyavaaj`, as RC-09 and the forms map say, instead of `mkjjyyep`, which uwc-attribution.js sets?
16. Should the Saturday open mat be open to minors with a guardian, given the page says youth and adults train together?

## Sources

- discovery/ledger/decisions.json (OC-01, OC-02, OC-03, OC-06, OC-07, OC-08, OC-09, OC-10, OC-11, OC-14, RC-01, RC-05, RC-08, RC-09, RC-13, LS-01, and OC-04)
- discovery/ledger/claims.json (counts by verification state; CL-0103, CL-0148, CL-0162, CL-0173, CL-0176, CL-0179, CL-0180, CL-0308, CL-0531, CL-0590, CL-0721, CL-0755, CL-1737, CL-1832, CL-1833, CL-2031, CL-2036, CL-2151, CL-2441, CL-2524, CL-2581, CL-2584, CL-2585, CL-2590, CL-2591)
- discovery/knowledge_base/uwc_kb_v1.md (KB-01, KB-02, KB-03, KB-05, KB-06, KB-07, KB-08, KB-09, KB-16, KB-19, KB-22, KB-23, Sections B and C)
- discovery/site/forms_map_full_sitemap.md (F1, F1a, F4, F9, route table)
- discovery/site/sitemap_status.md
- discovery/strategy/womens_self_defense_financial_model.md (proposals only)
- discovery/market/local_seo/top_10_programmatic_lps.md (Blueprint 5 and the coach bench; intent only)
- discovery/plans/astro-design-system-and-buildout.md (row 9, D1 to D17)
- todos.md (women's self-defense acceptance criteria; Saturday gi row)
- site/src/components/templates/ProgramPage.astro
- site/src/components/pages/classes-wrestling/ClassPage.astro
- site/src/components/pages/classes-adult/PriceFacts.astro and Topics.astro
- site/src/components/pages/unlocks/SamboBody.astro
- site/src/components/ui/ScheduleList.astro
- site/src/pages/classes/*.astro (all nine files) and site/src/pages/pricing.astro
- site/src/data/facts.ts, programs.ts, schedule.ts, routes.ts
- site/public/assets/js/uwc-attribution.js (FORM_ENDPOINTS, lines 13 to 18)
