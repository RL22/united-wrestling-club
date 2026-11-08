---
type: spec
status: draft
group: site
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/ledger/decisions.json", "discovery/ledger/claims.json", "discovery/knowledge_base/uwc_kb_v1.md", "discovery/site/website_rebuild_spec.md", "discovery/site/sitemap_status.md", "discovery/plans/astro-design-system-and-buildout.md", "site/src/data/routes.ts", "site/src/data/facts.ts", "site/src/data/programs.ts", "site/src/data/schedule.ts", "site/src/data/faqs.ts", "site/src/data/reviews.ts", "site/src/data/media.ts", "site/src/pages/pricing.astro", "site/src/pages/classes/kid-wrestling.astro", "site/src/components/home/Hero.astro", "scripts/copy_audit.py", "scripts/copy_audit.sh", "scripts/copy_audit_allow.txt", "scripts/check_dist.py", "scripts/discovery_check.py", "site/astro.config.mjs", "PRODUCT.md"]
shard_of: "discovery/site/content_schemas/guides.md"
part: "1 of 2"
---

> Part 1 of 2 of [guides](../guides.md). Text is verbatim from the original; only links were rewritten.


# Content schema: guides (GuidesHub and GuideArticle)

## TL;DR

- Six routes are omitted until owner decision D12: `/guides/` (GuidesHub) and five GuideArticle pages. The schema defines 17 top-level GuidesHub fields and 26 top-level GuideArticle fields, plus four nested objects (author, source, claim row, other-organization mention).
- Nothing can publish yet. D12 is not in `decisions.json`, no author or reviewer is named, no external source is cited, and none of the 2,608 ledger rows is marked `verified`. Every guide sentence that depends on the ledger or on an external source fails the gate today.
- The copy audit blocks the words these guides most need, including "Olympic", "1980", "boycott", "qualifier", "medalist", and "state champion" (which also matches "state championship"). The schema bans them in every guide, so the audit passes without new allowlist entries.

## Scope

Status from `site/src/data/routes.ts` as of 2026-11-06. Nothing links to these routes. The spec's footer silo B (`website_rebuild_spec.md` section 4) links to `/guides/`, so that footer link waits for D12 too.

| Route | Template | routes.ts status | Unlock | Note |
|---|---|---|---|---|
| `/guides/` | GuidesHub | omitted | D12 | Index of the five guides |
| `/guides/adult-wrestling-bay-area/` | GuideArticle | omitted | D12 | Spec route 28 |
| `/guides/youth-wrestling-vs-martial-arts/` | GuideArticle | omitted | D12 | Spec route 29 |
| `/guides/wrestling-for-bjj-takedowns/` | GuideArticle | omitted | D12 | Spec route 30 |
| `/guides/high-school-off-season-wrestling/` | GuideArticle | omitted | D12 | Spec route 31 |
| `/guides/dsal-hayward-wrestling-pathway/` | GuideArticle | omitted | D12 | Spec route 32 |

Titles differ between routes.ts and the spec for four guides (spec titles: "Youth Wrestling vs. Karate (East Bay)", "Takedowns for BJJ (Wrestle-Jitsu)", "Off-Season HS Wrestling (NCS/CIF)", "DSAL Hayward to Olympic Pathway"). This schema uses the routes.ts titles, because `routes.ts` is the source of truth (`sitemap_status.md`). The owner picks the final titles (open question 8).

### Purpose and intent by guide

The purpose comes from `website_rebuild_spec.md` sections 5 and 7. The source kinds are kinds only. No named source is chosen here. Each one must be verified before a builder cites it.

| Route | Purpose and reader intent | Source kinds needed | Must avoid |
|---|---|---|---|
| `/guides/` | Index for the five guides. Spec places it in the footer. | None of its own. Hub copy carries no facts. | Any fact; any link while omitted |
| `/guides/adult-wrestling-bay-area/` | Adults in the Bay Area asking what adult wrestling involves. Routes the reader to `/classes/adult-wrestling/` and the trial. | The national governing body's published style and rules pages; a regional or state adult competition calendar published by its organizer; club facts from `site/src/data` | Naming the forums and gym the spec says this guide "beats"; any ranking or traffic claim |
| `/guides/youth-wrestling-vs-martial-arts/` | A parent comparing youth wrestling with martial arts classes. Routes to `/classes/kid-wrestling/`. | The governing body's youth rules (age, weight, safety); public health or pediatric guidance on youth sport injury; peer-reviewed research on multi-sport or early specialization; any cost comparison needs a published survey with a date accessed | Naming or describing any studio; "belt factory", "McDojo", or any category claim about rivals without a source; age bands (OC-14); the 4-Day Kids tier (LS-01) |
| `/guides/wrestling-for-bjj-takedowns/` | Grapplers, mostly BJJ practitioners, who want takedown skill. Routes to `/classes/nogi-jiu-jitsu/` and `/classes/gi-jiu-jitsu/`. "Wrestle-Jitsu" is UWC's own program name (CL-0721, unverified). | The submission-grappling body's published ruleset (takedown scoring); the governing body's takedown scoring rules for freestyle and folkstyle | "Collegiate" or "college-level" claims without a source; claims about named academies or competitors; a BJJ credential for any coach (CL-0760 is unverified) |
| `/guides/high-school-off-season-wrestling/` | High school wrestlers and parents asking what off-season training is allowed and useful. Routes to `/classes/youth-wrestling/`. | The state high school athletic association's published rule book on out-of-season contact and practice limits; the league's and section's published season and championship calendars; the governing body's freestyle and Greco-Roman rules | Naming a league, section, or school as a partner or pipeline without an owner decision; "state champion" or "state championship" (blocked); any "official pathway" claim (CL-0591, unverified); the $139.99 off-season pass (CL-1164, unverified proposed copy) |
| `/guides/dsal-hayward-wrestling-pathway/` | Families of youth athletes at DSAL Hayward who may later train at UWC. Community bridge, not a sponsorship. | DSAL's own published program page for its Hayward site (schedule, fees, eligibility, address), with date accessed; the county or city listing for the facility; the governing body's youth rules; written permission from DSAL before any statement about its program | "Olympic" in any form (blocked); DSAL's fee, schedule, coach, or address taken from the dossier (CL-1073, CL-1076, CL-1077, CL-1083, CL-1123 are unverified); partner badges or official-program claims (CL-0536, CL-0537); scholarship or sponsorship offers (CL-1113, CL-1114 are proposals) |

## Schema 1: GuidesHub (17 top-level fields)

| # | Field | Type | Required | Source | Gate or rule |
|---|---|---|---|---|---|
| 1 | route | const `/guides/` | yes | site_data: `routes.ts` | Must match routes.ts |
| 2 | status | enum: `omitted`, `built` | yes | site_data: `routes.ts` | `built` only when D12 is recorded and every listed guide is `published` |
| 3 | title | string | yes | site_data: `routes.ts` ("Guides") | Must match routes.ts |
| 4 | h1 | string | yes | copy | No facts. Copy constraints apply |
| 5 | intro | text, 1 to 3 sentences | yes | copy | Any factual sentence needs a claim row (GuideArticle field 15) |
| 6 | meta_title | string, 60 characters or fewer | yes | copy | Copy constraints apply |
| 7 | meta_description | string, 160 characters or fewer | yes | copy | Copy constraints apply |
| 8 | guides | list of 5 route paths, in spec order (routes 28 to 32) | yes | site_data: `routes.ts` | Each listed guide must be `published`. A draft guide is not listed |
| 9 | guide_cards | list of {route, title, meta_description} | yes | derived from GuideArticle fields 1, 4, 13 | Copied from each guide, never retyped |
| 10 | cta | object {label, href} | yes | site_data: `facts.ts` (`booking`, KB-07) | href is `tel:5103034869` or the trial form route. Label says "Call", never "text" |
| 11 | decision_ref | string `D12` or null | yes | owner_decision | Must match an id in `decisions.json`. Null today, because D12 is not recorded there |
| 12 | footer_link | boolean | yes | owner_decision (D12) | False until status is `built` |
| 13 | reviewed_by | object {name, role} | yes | owner_provided | Named human. Null until the owner answers |
| 14 | last_reviewed | date (YYYY-MM-DD) | yes | owner_provided | Set by the reviewer on the day of review |
| 15 | review_cadence_days | integer | yes | owner_provided | Proposed value 180 (a policy choice, not a fact). The owner sets it |
| 16 | og_image | path in `media.ts` | yes | site_data: `media.ts` | Must be an entry in media.ts. No image of a minor until D5 is recorded |
| 17 | json_ld_type | const `CollectionPage` | yes | derived | Description comes from field 7 (meta_description). Copy constraints apply to JSON-LD |

## Schema 2: GuideArticle (26 top-level fields)

| # | Field | Type | Required | Source | Gate or rule |
|---|---|---|---|---|---|
| 1 | route | one of the five guide paths | yes | site_data: `routes.ts` | Must match a routes.ts entry for a guide |
| 2 | slug | string | yes | derived from route | Last path segment |
| 3 | status | enum: `draft`, `ready`, `published` | yes | owner_decision (D12) for `published` | `published` only after every publish gate step passes |
| 4 | title (H1) | string | yes | site_data: `routes.ts` | Must match routes.ts. Differences from the spec title are an open question |
| 5 | purpose | text, 1 sentence, internal | yes | owner_provided (spec sections 5 and 7) | Never rendered. Owner confirms |
| 6 | reader_intent | text, 1 sentence, internal | yes | owner_provided (spec section 5) | Never rendered. Must not name rival gyms, forums, or keyword volumes |
| 7 | author | object (see Author) | yes | owner_provided | Named human with credentials as the author rules require |
| 8 | reviewed_by | object {name, role} | yes | owner_provided | Named human who checked every claim row |
| 9 | last_reviewed | date | yes | owner_provided | On or before date_published |
| 10 | review_cadence_days | integer | yes | owner_provided | Proposed 180. Owner sets it |
| 11 | date_published | date | yes at publish | owner_provided | Set once, at publish. Not before last_reviewed |
| 12 | meta_title | string, 60 characters or fewer | yes | copy | Copy constraints apply |
| 13 | meta_description | string, 160 characters or fewer | yes | copy | Copy constraints apply |
| 14 | sections | list of {heading, paragraphs[]}, 4 to 7 sections | yes | copy | Each factual sentence has a claim row, with its sentence_id |
| 15 | claim_map | list of claim rows (see Claim row) | yes | per row | One row per factual sentence |
| 16 | sources | list of source rows (see Source) | yes (empty only if no row has source_type external) | external | Every external claim resolves to a source row |
| 17 | about_other_orgs | list of org rows (see Org mention) | yes (empty when no outside organization is named) | flag | Empty list means no other organization is named |
| 18 | fact_refs | list of site_data keys, for example `facts.trialPass` | yes | site_data | Builder fills it from claim_map. Each key must exist in its file |
| 19 | pricing | list of {program, tier, price}, or null | yes (may be null) | owner_decision OC-01; values owner_provided | Per program only. Never one "membership price". Null when no price appears |
| 20 | schedule_block | {source: "ScheduleList", row_ids[]}, or null | when times appear | site_data: `schedule.ts` | Times render only through ScheduleList |
| 21 | hours_block | {source: "FactList", rows from facts.hours}, or null | when hours appear | site_data: `facts.ts` (KB-03) | Times render only through FactList. Open mat ends 12:00 PM (RC-13) |
| 22 | facility_size | text, or null | when mentioned | owner_decision OC-11 | Only "3,800 sq ft of mats". Never "3,000" |
| 23 | cta | object {label, href} | yes | site_data: `facts.ts` (`booking`, KB-07) | Same rule as GuidesHub field 10 |
| 24 | internal_links | list of route paths, 1 or more | yes | site_data: `routes.ts` | Each target has status built or redirect |
| 25 | hero_image | path in `media.ts`, or null | no | site_data: `media.ts` | Must be in media.ts. No minor until D5 is recorded |
| 26 | json_ld_type | const `Article` | yes | derived | headline and description come from fields 4 and 13 |

### Nested: Author (4 fields)

| Field | Type | Required | Source | Gate or rule |
|---|---|---|---|---|
| name | string | yes | owner_provided | Full name of a named human. Null until the owner answers |
| role | string | yes | owner_provided | Role at UWC as the owner states it. KB-16 allows names and roles only |
| credentials | list of strings | yes (may be empty) | owner_provided | Empty today. Each credential needs a credential_refs entry |
| credential_refs | list of source ids or decision ids | yes when credentials is non-empty | external or owner_decision | Each credential resolves to a source row or a decision |

Credentials are the sensitive part. KB-16 blocks "any statement about a specific coach's credentials beyond KB-16" (KB section C), and the ledger holds conflicting or superseded credential claims for the head coach and both founders (CL-0033 and CL-0151 for Naweed; CL-0691 and CL-0709 for Karim and Rahimi). No credential appears until the owner names it and a source backs it.

### Nested: Source (9 fields)

| Field | Type | Required | Source | Gate or rule |
|---|---|---|---|---|
| id | string (S-01, S-02, ...) | yes | derived | Unique within the guide |
| publisher | string | yes | external | Organization that published the page |
| publisher_type | enum: governing body, state athletic association, league or section, public agency, medical or research body, nonprofit, club's own site, other | yes | external | Type drives how much the source can say |
| title | string | yes | external | As printed on the source |
| url_or_citation | URL or full citation | yes | external | No tracking parameters, no personal data |
| date_published | date | when stated | external | Null is allowed, but then the claim cannot use a date |
| date_accessed | date | yes | external | On or before date_published of the guide |
| supports | list of claim sentence_ids | yes | derived | Every row supports at least one claim |
| verified_by | {name, date} | yes at publish | owner_provided | A named human opened the page and matched the quoted wording |

### Nested: Claim row (9 fields)

| Field | Type | Required | Source | Gate or rule |
|---|---|---|---|---|
| sentence_id | string | yes | derived | Unique within the guide |
| section | string | yes | derived | Section index and heading |
| sentence | text | yes | copy | Exact rendered sentence. The builder matches it character for character |
| source_type | enum: site_data, owner_decision, ledger, owner_provided, external | yes | n/a | Determines how source_ref resolves |
| source_ref | string | yes | per source_type | facts key (site_data), decision id such as OC-01 (owner_decision), CL id (ledger), owner answer id (owner_provided), or source id S-01 (external) |
| verification | enum: verified, unverified, superseded, conflicting, pending_owner, null | yes | ledger | Copied from claims.json for ledger rows. No ledger row is `verified` today |
| about_other_org | boolean | yes | flag | True means the row must link to an about_other_orgs entry |
| org_ref | string | when about_other_org is true | flag | Points to an about_other_orgs entry |

### Nested: Other-organization mention (6 fields)

| Field | Type | Required | Source | Gate or rule |
|---|---|---|---|---|
| org_name | string | yes | flag | As the guide names it |
| org_type | enum: club or gym, school, league or section, governing body, nonprofit, athlete, other | yes | flag | Club or gym, and athlete, default to not_permitted |
| sentence_ids | list | yes | flag | Every sentence that names or describes the organization |
| approval_ref | owner_decision id or owner answer id | yes | owner_decision or owner_provided | Must be non-null before publish |
| written_permission | {granted_by, date, file_ref}, or null | yes for club or gym, school, nonprofit, athlete | owner_provided | Required for any named nonprofit, school, or athlete |
| permitted_form | enum: name_only, category_only, not_permitted | yes | owner_decision | Rival gyms and athlete results are not_permitted unless the owner names them in a decision |

### Copy constraints (apply to every text field, including meta tags, alt text, and JSON-LD)

These rules come from `scripts/copy_audit.py`. The audit scans `src` and `dist`. It matches blocked terms as case-insensitive substrings, so the list below also catches longer words.

- **No em dash** (U+2014) in any rendered text, meta tag, or JSON-LD (audit check 1). Use a comma, a period, or the word "to" for ranges.
- **Blocked terms:** olympi, 1980, moscow, boycott, qualifier, aliyev, makhachkala, dagestan, medalist, ramazanov, kardanov, state champion, 1:6, 1 coach to 6, 3,000 sq, cross-linked, wi-fi, sibling, unanimous, 100% rec, 42+. Substring hits include "Olympiad", "medalists", "qualifiers", "state championship", "siblings", "3,000 square", and "100% recommended".
- **Consequence for style names:** the audit blocks "olympi", so guide text cannot say "Olympic", "Olympic-style", or "Olympic Folkstyle" (CL-1026 and CL-1295 use the phrase in drafts). Name the styles freestyle, Greco-Roman, and folkstyle.
- **Day and time prose:** no pattern such as "Sat 10", "Saturday 8", or "Mon-Fri 6" outside `site/src/data`, FactList, and ScheduleList. Write "the Saturday open mat" in prose and let FactList or ScheduleList print the times.
- **Phone:** only (510) 303-4869 and `tel:5103034869`. No other phone-number pattern appears anywhere, including a rival's number in a citation. "text us", "text me", and "text (510)" are blocked outside `ConsentSms.astro`. Use "Call" (`facts.ts` comment). OC-04 keeps the live "Call or Text" button, which sits outside guide copy.
- **Form endpoints:** no formspree id and no xyyavaaj string in guide text (audit item 5).
- **Images:** every image path on a new page must be in `media.ts` (audit item 6). A media.ts path that contains "olympic" passes only because the audit exempts media paths. Do not repeat that word in alt text.
- **Allowlist:** `copy_audit_allow.txt` locks exemptions to exact hashes of existing lines (home, shell, and pages components). No guide inherits one. A new entry needs an owner decision id and an exact hash, and this schema does not assume one.
- **No keyword volumes, rankings, or traffic figures** in any text (spec section 5 and section 7 carry them; they are targeting data, not facts, and none is sourced in the ledger beyond unverified CL rows).
