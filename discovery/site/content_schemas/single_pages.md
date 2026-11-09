---
type: spec
status: draft
group: site
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/site/website_rebuild_spec.md", "discovery/site/forms_map_full_sitemap.md", "discovery/site/sitemap_status.md", "discovery/ledger/decisions.json", "discovery/ledger/claims.json", "discovery/knowledge_base/uwc_kb_v1.md", "discovery/plans/astro-design-system-and-buildout.md", "discovery/archive/snapshots/live_site_content/stubs_classes_donate_register.md", "discovery/client/naweed_discovery_questions.md", "todos.md", "site/src/data/routes.ts", "site/src/data/facts.ts", "site/src/data/faqs.ts", "site/src/data/jsonld-home.ts", "site/src/components/forms/TrialForm.astro", "site/src/components/forms/ContactForm.astro", "site/src/components/shell/SiteFooter.astro", "site/src/data/nav.ts", "site/src/pages/sitemap.xml.ts", "site/src/pages/llms-full.txt.ts"]
---

# Content schema: single pages (/donate)

## TL;DR

- `/donate/` is held. Owner decision D6 is still open. It is not in `discovery/ledger/decisions.json`, so no recorded owner answer exists. The route is `omitted` in `site/src/data/routes.ts` and nothing links to it.
- The only content the page could carry is a scholarship application (form F5) plus a policy. Nothing in the knowledge base, the site data, the claims ledger, or the archived live page says what the money funds, who qualifies, how decisions are made, or whether UWC is a registered nonprofit. Every policy field below is `owner_provided` and stays `null` until the owner answers.
- Nonprofit status is not known. Do not write "nonprofit", "501(c)(3)", or "tax-deductible" until the owner confirms. The ledger's nonprofit claims (CL-1069, CL-1096, CL-1111, CL-1178) are about other organizations (Paragon, Petaluma, Lamorinda, and a general category), not UWC.
- If the owner chooses hide, the page must not exist as a route file, a nav item, a footer link, a body link, a sitemap entry, or an F5 form. The old live URL needs a redirect plan (see Publish gate).

## Scope

In scope: the `DonatePage` record, its field sources, an example fill, the publish gate, and the rules for the hide option.

Out of scope: the F5 endpoint setup, the Formspree plan, the copy itself, and the design. Those belong to the forms and copy workstreams.

What the page is, by the spec: "Youth Scholarship Fund (/donate)" in the site tree (`website_rebuild_spec.md`, section 5), and "Youth Tournament Travel Scholarship & Local Business Sponsorships" in the route table (row 20). The live `/donate` on the current site renders only an H1 and an empty body (archived snapshot). So this schema is for a new page, not a migration.

## Field table

Source types: `site_data` (a file in `site/src/data/` or a verified component), `owner_decision` (an id in `discovery/ledger/decisions.json`), `ledger` (a CL id in `claims.json`), `owner_provided` (value stays `null` until the owner answers), `external` (needs a citation).

Note on decisions: `decisions.json` has no entry that mentions donate, scholarships, sponsorship, or nonprofit status. D6 is cited from `routes.ts` and `todos.md` only, so it appears below as `owner_provided`.

### A. Page identity and status

| Field | Type | Source type | Source or reference | Notes |
|---|---|---|---|---|
| `route` | string, fixed `/donate/` | site_data | `site/src/data/routes.ts` (status `omitted`, unlock D6) | Do not change without a redirect plan. |
| `publish_status` | enum: `hidden` or `built` | owner_provided | D6 (in `routes.ts` and `todos.md`) | Default `hidden`. |
| `page_name` | string | owner_provided | Three names in the repo: "Youth Scholarship Fund" (spec, section 5), "Youth Tournament Travel Scholarship & Local Business Sponsorships" (spec, route row 20), "UWC Youth Scholarship & Tournament Travel Fund" (CL-1249, unverified, cited by an omitted guide draft) | Owner picks one name. Use it everywhere. |
| `meta_title` | string | owner_provided | none | Do not reuse the name if the owner chooses hide. |
| `meta_description` | string | owner_provided | none | |
| `hero_lead` | string | owner_provided | none | |

### B. What the money funds

| Field | Type | Source type | Source or reference | Notes |
|---|---|---|---|---|
| `funds_purpose` | text | owner_provided | Spec and CL-1249 name youth tournament travel. The owner has not confirmed it (`naweed_discovery_questions.md`, item 5, is a question, not an answer). | Null until the owner states it. |
| `eligible_costs` | list of strings | owner_provided | none | Example categories are not supplied here. The owner lists them. |
| `award_amount` | money or range | owner_provided | none | CL-1113 proposes "2 to 4 full need-based scholarships each year" for DSAL athletes. It is a proposal in a competitor dossier, not an owner decision. Do not use. |
| `pool_per_year` | money | owner_provided | none | |
| `payment_recipient` | enum: `family`, `vendor`, `team` | owner_provided | none | Who receives the money changes the page's claims. |

### C. Who qualifies

| Field | Type | Source type | Source or reference | Notes |
|---|---|---|---|---|
| `eligibility_summary` | text | owner_provided | none | |
| `member_required` | boolean | owner_provided | none | F5 does not say whether the applicant must be a member. |
| `age_or_grade_limit` | text | owner_provided | OC-14 (decisions.json): age bands are not published; the live site uses grades | If a limit exists, state it by grade, not by age (OC-14). |
| `need_basis` | text | owner_provided | F5 requires a "need statement" (`forms_map_full_sitemap.md`, F5). The test for need is not defined. | |
| `geographic_limit` | text | owner_provided | none | CL-1559 says "low-income East Bay youth" in outreach copy. It is unverified and must not be used. |

### D. How decisions are made

| Field | Type | Source type | Source or reference | Notes |
|---|---|---|---|---|
| `review_process` | text | owner_provided | none | |
| `decided_by` | text | owner_provided | none | Name the role or person the owner chooses. |
| `decision_days` | integer | owner_provided | none | Null until the owner gives a number. |
| `notify_method` | enum: `email`, `phone`, `text` | owner_provided | none | Text routing follows OC-04 (texts go to the automated responder). |
| `cycle_or_deadline` | text | owner_provided | none | |
| `appeal_or_reconsideration` | text | owner_provided | none | |

### E. How the amount is used and reported

| Field | Type | Source type | Source or reference | Notes |
|---|---|---|---|---|
| `use_of_funds_statement` | text | owner_provided | none | Written by the owner. |
| `reporting_back` | text | owner_provided | none | Whether recipients or donors get a report. |
| `recipients_to_date` | integer | owner_provided | none | Do not publish until the owner gives a dated number. |

### F. Nonprofit and tax status

| Field | Type | Source type | Source or reference | Notes |
|---|---|---|---|---|
| `is_registered_nonprofit` | enum: `yes`, `no`, `pending` | owner_provided | No KB entry, no site copy, no decision. The archived live `/donate` had "no 501(c)(3) copy" (`stubs_classes_donate_register.md`). | Do not assume `yes`. |
| `nonprofit_legal_name` | string | owner_provided | none | Required only if `is_registered_nonprofit` is `yes`. |
| `determination_reference` | string | owner_provided | none | Owner decides whether any identifier is published. Do not publish a tax ID without the owner's direct instruction. |
| `tax_deductible_statement` | text | owner_provided | none | Allowed only when `is_registered_nonprofit` is `yes` and the owner approves the wording. Otherwise the field must stay out of the page. |

### G. Donations and sponsorships

| Field | Type | Source type | Source or reference | Notes |
|---|---|---|---|---|
| `accepts_donations` | boolean | owner_provided | No payment method on the live page (archived stub: "No donation link, Stripe/PayPal button"). | If `false`, the page has no donate button and no payment copy. |
| `donation_channel` | enum: `none`, `processor_link` | owner_provided | none | A link is needed only if the owner names a processor. Do not put a payment credential in the repo. |
| `sponsorship_route` | enum | site_data | `site/src/components/forms/ContactForm.astro` (reason "Sponsorship or partnership"); KB Section B, item 9 (sponsorship goes to `/contact`, then staff) | Default is a link to `/contact/` with that reason, not a sponsor form. |
| `sponsor_names_public` | list | owner_provided | none | Default empty. Each business must give written permission, and the owner confirms. |

### H. Scholarship application (form F5, `form_name=scholarship`)

| Field | Type | Source type | Source or reference | Notes |
|---|---|---|---|---|
| `form_enabled` | boolean | owner_provided | D6, and `forms_map_full_sitemap.md` F5 ("Decide") | `false` in the hide case. |
| `form_endpoint` | string | owner_provided | None for F5 in the repo. Formspree access is still pending (`forms_map_full_sitemap.md`, blockers). `TrialForm.astro` posts to `mkjjyyep`, which RC-09 says is not live. | Do not wire F5 until the owner confirms an endpoint. |
| `fields.parent_guardian` | name, email, phone | owner_provided | F5 table: required | Field list is a draft in `forms_map` F5. The owner confirms it. |
| `fields.athlete` | name, age, school or club | owner_provided | F5 table: required. Note: "store only what the review needs" for minors. | Age is a field, not a published age band (OC-14 does not forbid asking). |
| `fields.tournament_travel_plans` | text | owner_provided | F5 table: required | |
| `fields.need_statement` | text | owner_provided | F5 table: required | |
| `fields.supporting_documents` | file, optional | owner_provided | F5 table: "Formspree file upload depends on plan. Confirm before promising it." | Do not promise uploads until the plan is confirmed. |
| `minors_data_rule` | text | owner_provided | F5 table note | Retention period is required for the privacy line. |
| `retention_period` | text | owner_provided | KB-22: "Message and data retention period is not yet published." | Null until the owner sets it. The page cannot state a retention period before that. |
| `media_consent` | boolean | owner_provided | KB-23 (media on by default); OC-05 (open conflict). F5 has no media field. | If any athlete photo or story appears on the page, the owner confirms the media wording first. |

### I. Shared contact data (no owner input needed)

| Field | Type | Source type | Source or reference | Notes |
|---|---|---|---|---|
| `phone` | `(510) 303-4869` | site_data | `site/src/data/facts.ts` (`phone`); KB-02; RC-01 | This is the club line. Do not label it as Coach Naweed's line (OC-04). |
| `email` | `unitedwrestlingclub@gmail.com` | site_data | `site/src/data/facts.ts` (`email`); RC-08 | |
| `address` | `30139 Industrial Pkwy SW, Suite C, Hayward, CA 94544` | site_data | `site/src/data/facts.ts` (`address`); KB-01 | |

### J. Impact and proof

| Field | Type | Source type | Source or reference | Notes |
|---|---|---|---|---|
| `impact_items` | list | owner_provided | none | Dollar totals, athlete counts, and outcomes need a dated owner source. |
| `testimonial` | text | owner_provided | none | Needs the recipient's consent and the owner's approval. |

## Example fill

Only site-verified values are filled. Every owner value is `null`. This is the state the page is in today.

```json
{
  "route": "/donate/",
  "publish_status": "hidden",
  "page_name": null,
  "meta_title": null,
  "meta_description": null,
  "hero_lead": null,
  "funds_purpose": null,
  "eligible_costs": null,
  "award_amount": null,
  "pool_per_year": null,
  "payment_recipient": null,
  "eligibility_summary": null,
  "member_required": null,
  "age_or_grade_limit": null,
  "need_basis": null,
  "geographic_limit": null,
  "review_process": null,
  "decided_by": null,
  "decision_days": null,
  "notify_method": null,
  "cycle_or_deadline": null,
  "appeal_or_reconsideration": null,
  "use_of_funds_statement": null,
  "reporting_back": null,
  "recipients_to_date": null,
  "is_registered_nonprofit": null,
  "nonprofit_legal_name": null,
  "determination_reference": null,
  "tax_deductible_statement": null,
  "accepts_donations": null,
  "donation_channel": null,
  "sponsorship_route": {"value": "/contact/", "reason": "Sponsorship or partnership", "source": "site_data: ContactForm.astro; KB Section B.9"},
  "sponsor_names_public": [],
  "form_enabled": false,
  "form_endpoint": null,
  "retention_period": null,
  "media_consent": null,
  "phone": {"value": "(510) 303-4869", "source": "site_data: facts.ts; RC-01"},
  "email": {"value": "unitedwrestlingclub@gmail.com", "source": "site_data: facts.ts; RC-08"},
  "address": {"value": "30139 Industrial Pkwy SW, Suite C, Hayward, CA 94544", "source": "site_data: facts.ts; KB-01"},
  "impact_items": [],
  "testimonial": null
}
```

Note on the example: `sponsorship_route` is the only non-null policy field, and it is a route, not a claim about UWC. `form_enabled` is `false` because the form is not wired.

## Publish gate

The page moves from `hidden` to `built` only when all of the following are true. Each item names who signs it off.

1. Owner records D6 as "build" in `discovery/ledger/decisions.json`, with a decision id (owner).
2. `page_name`, `funds_purpose`, `eligibility_summary`, `review_process`, `decided_by`, and `use_of_funds_statement` are set by the owner. None may be null on a built page (owner).
3. `is_registered_nonprofit` is set. If it is `yes`, `nonprofit_legal_name` and `determination_reference` are set and the owner approves the tax wording. If it is `no` or `pending`, the page contains no "501(c)(3)", "nonprofit", "tax-deductible", or "donations are deductible" text (owner).
4. `accepts_donations` is set. If `false`, there is no donate button and no payment copy. If `true`, `donation_channel` names a processor and the owner has approved the link (owner).
5. `form_endpoint` is an endpoint the owner confirms. Formspree access is confirmed (`forms_map_full_sitemap.md` blockers). `retention_period` is set, because the privacy line cannot be published without it (owner, then KB-22).
6. No award total, recipient count, testimonial, or sponsor name appears unless the owner provided it with a date and consent (owner).
7. Copy has no age bands, no "free" trial offers, and no em dashes (OC-14, RC-05, plain-prose rule). Run the existing copy audit (see `discovery/plans/phase1-log.md`, the copy audit allowlist note).
8. The page is linked from the sitemap only by the existing build logic. `site/src/pages/sitemap.xml.ts` adds a route only when its status is `built` in `routes.ts`. Change `routes.ts` only after steps 1 to 7 pass.

### If the owner chooses hide

The page is not built. The following must not happen:

- No route file for `/donate/` in `site/src/pages/`. The route stays `omitted` in `site/src/data/routes.ts`.
- No link to `/donate/` in the header or mobile nav (`site/src/data/nav.ts`), the footer (`SiteFooter.astro`), any home section, any page body, any CTA, any FAQ, or any guide. No site file links to `/donate/` today. The one reference in the repo's docs is CL-1249 (a guide draft in `market/competitors/groupD_forums_reddit_and_ai_citations.md` that links to a "Youth Scholarship & Tournament Travel Fund" on /donate). Remove that text before any guide is built.
- No sitemap entry. `sitemap.xml.ts` and `llms-full.txt.ts` both filter to `built` routes. Keep it that way.
- No F5 form on any page, and no `form_name=scholarship` submissions anywhere.
- No "scholarship fund", "donate", or "sponsorship fund" copy on any page. The contact reason "Sponsorship or partnership" stays on `/contact/` and goes to staff, as KB Section B.9 says.
- No footer line from the spec (spec, section 5 tree, and route row 20). That line is for the built page only.
- Redirect for the live URL. The live `/donate` URL has SEO value. `discovery/plans/astro-design-system-and-buildout.md` (line 421) says to add redirects at the switch. Its D6 row (line 400) says "Omit; route to `/contact/`". That is a plan default, not an owner decision. The owner confirms the target before cutover.

## Open questions

Top three for the owner, in order:

1. Build or hide `/donate` (D6)? If build: what is the page called, and what does the money fund?
2. Is United Wrestling Club a registered nonprofit? If yes, what is the legal name and determination reference? If no or unknown, the page must not use nonprofit or tax language.
3. Is there a donation channel, or only the F5 application? Which endpoint receives F5, and what is the data retention period for minors' details (KB-22 says it is not set)?

Further questions:

4. Who decides scholarships, how long does a decision take, and how are applicants told?
5. Who is eligible (members only? grade or age limit? need test?) and what is the award amount or pool per year?
6. Are sponsors listed on the page? If so, which businesses have given written permission?
7. Should the redirect for the old `/donate` URL go to `/contact/` (plan default) or return a 404?

## Sources

- `discovery/ledger/decisions.json`: read in full. No donate, scholarship, sponsorship, or nonprofit entry. Relevant entries: OC-04, OC-05, OC-14, RC-01, RC-05, RC-08, RC-09.
- `discovery/site/website_rebuild_spec.md`: section 5 tree (line 133) and route row 20 (line 166), status line.
- `discovery/site/forms_map_full_sitemap.md`: F2 (contact, sponsorship reason), F5 (scholarship field table and notes), blockers, decisions list.
- `discovery/site/sitemap_status.md`: `/donate/` omitted, unlock D6.
- `discovery/plans/astro-design-system-and-buildout.md`: D6 row (line 400), redirect note (line 421).
- `discovery/archive/snapshots/live_site_content/stubs_classes_donate_register.md`: live `/donate` was an empty shell with no donation link, payment button, or 501(c)(3) copy.
- `discovery/knowledge_base/uwc_kb_v1.md`: KB-01, KB-02, KB-07, KB-10, KB-22, KB-23, OC-05, Section B.9, Section C.
- `discovery/ledger/claims.json`: CL-1096, CL-1111 (other clubs' 501(c)(3)), CL-1113 (proposed scholarships, unverified), CL-1249 (guide references `/donate`, unverified), CL-1559 (outreach copy, unverified). No UWC nonprofit claim exists.
- `discovery/client/naweed_discovery_questions.md`: item 5 (blank `/donate`, question on donation link).
- `todos.md`: D6 task (`/donate` built with F5, or hidden).
- `site/src/data/routes.ts`: `/donate/` omitted, reason and unlock D6.
- `site/src/data/facts.ts`, `site/src/data/faqs.ts`, `site/src/data/jsonld-home.ts`: phone, email, address, served cities.
- `site/src/components/forms/TrialForm.astro`: Formspree endpoint `mkjjyyep` (line 18).
- `site/src/components/forms/ContactForm.astro`: sponsorship reason (line 27).
- `site/src/components/shell/SiteFooter.astro`, `site/src/data/nav.ts`: no `/donate` link found.
- `site/src/pages/sitemap.xml.ts`, `site/src/pages/llms-full.txt.ts`: built routes only.
- Repo-wide search for donate, donation, scholarship, sponsor, nonprofit, 501(c): no UWC nonprofit status found in `site/src`, the KB, the decisions, or the ledger.
