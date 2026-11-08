---
type: spec
status: draft
group: site
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/ledger/decisions.json", "discovery/ledger/claims.json", "discovery/knowledge_base/uwc_kb_v1.md", "discovery/site/website_rebuild_spec.md", "discovery/site/sitemap_status.md", "discovery/plans/astro-design-system-and-buildout.md", "site/src/data/routes.ts", "site/src/data/facts.ts", "site/src/data/programs.ts", "site/src/data/schedule.ts", "site/src/data/faqs.ts", "site/src/data/reviews.ts", "site/src/data/media.ts", "site/src/pages/pricing.astro", "site/src/pages/classes/kid-wrestling.astro", "site/src/components/home/Hero.astro", "scripts/copy_audit.py", "scripts/copy_audit.sh", "scripts/copy_audit_allow.txt", "scripts/check_dist.py", "scripts/discovery_check.py", "site/astro.config.mjs", "PRODUCT.md"]
shard_of: "discovery/site/content_schemas/guides.md"
part: "2 of 2"
---

> Part 2 of 2 of [guides](../guides.md). Text is verbatim from the original; only links were rewritten.

## Example fill (adult guide, verified values only; nulls marked)

Each value carries the id of the decision or fact it came from. Nulls wait on the named owner answer. Facts from `site/src/data` are used as they stand.

```yaml
route: /guides/adult-wrestling-bay-area/      # routes.ts: omitted, unlock D12
slug: adult-wrestling-bay-area
status: draft
title: Adult Wrestling in the Bay Area         # routes.ts
purpose: Explain adult wrestling at UWC for Bay Area adults and link to the adult class page.   # owner_provided, not yet confirmed
reader_intent: null                            # owner_provided
author: {name: null, role: null, credentials: [], credential_refs: []}   # owner_provided
reviewed_by: null                              # owner_provided
last_reviewed: null                            # set at review
review_cadence_days: null                      # proposed 180; owner sets it
date_published: null                           # set at publish
facts used:
  - program: Adult Wrestling and Wrestle-Jitsu, no age descriptor   # facts.programs.adult (KB-05); OC-14 bars age bands
  - facts.address: 30139 Industrial Pkwy SW, Suite C, Hayward, CA 94544     # KB-01
  - facts.phone: (510) 303-4869                                              # RC-01, KB-02
  - facts.email: unitedwrestlingclub@gmail.com                               # RC-08
  - facts.trialPass: 3-Day Mat Pass, $15, new members only                   # RC-05, KB-06
  - facility_size: 3,800 sq ft of mats                                       # OC-11
  - coaches: Naweed Zemaryalai, Head coach                                   # facts.coaches (KB-16 names and roles only)
pricing: null                                  # OC-01 requires per-program tiers; no tier list in site/src/data yet
hours_block: {source: FactList, rows: facts.hours}   # KB-03; open mat ends 12:00 PM (RC-13)
schedule_block: null                           # choose schedule.ts row ids for adult classes when the owner confirms
sources: []                                    # no external sentence yet; any external row fails the gate
about_other_orgs: []
cta: {label: "Call (510) 303-4869", href: "tel:5103034869"}   # KB-07
json_ld_type: Article
```

Null in this fill: reader_intent, author.name, author.role, reviewed_by, last_reviewed, review_cadence_days, date_published, pricing, and schedule_block. That is the correct state. The page cannot publish until the owner answers the open questions below.

## Publish gate

1. **D12 is recorded.** `discovery/ledger/decisions.json` has a D12 entry with a date and a scope that names the six routes. Test: grep for `D12`. Then `routes.ts` changes a guide's status to `built` only if that guide's `status` is `published`.
2. **Author is complete.** `author.name`, `author.role`, and every credential are non-null. Each credential resolves to a source row or an owner decision. Test: schema lint fails on any null in these fields.
3. **Review is complete.** `reviewed_by.name` and `last_reviewed` are set, `last_reviewed` is on or before `date_published`, and `review_cadence_days` is set. Test: the builder fails a guide whose `last_reviewed` is older than `review_cadence_days`.
4. **Every factual sentence has a claim row.** A sentence with a number, a dollar amount, a date, a time, a place, a named organization, a superlative, or an outcome has exactly one claim row whose `sentence` matches it. Test: the builder splits sentences and counts rows.
5. **Every reference resolves.** `site_data` refs exist in the named file under `site/src/data`. `owner_decision` refs exist in `decisions.json`. `ledger` refs exist in `claims.json` with verification `verified`. Today no row passes that test. `owner_provided` refs carry an owner answer id. `external` refs point to a `sources` row. Test: the builder resolves each ref.
6. **Every source row is complete.** Each row has `publisher`, `title`, `url_or_citation`, and `date_accessed`. `date_accessed` is on or before `date_published` of the guide. `verified_by` is set. Test: field check.
7. **Other organizations are approved.** Every `about_other_orgs` row has a non-null `approval_ref`. Every club or gym and every athlete row is `not_permitted` unless the owner names it in a decision. Test: the builder scans the text for names and fails any name missing from `about_other_orgs`.
8. **Prices are per program.** Each dollar amount in the text matches a `pricing` row or a `facts` value. No single membership price appears as the price. No 4-Day Kids tier appears until LS-01 is fixed. Test: grep the dollar amounts against the `pricing` list.
9. **Facility size is correct.** The only mat size in the text is "3,800 sq ft of mats" (OC-11), or none. Test: grep for "sq".
10. **Times come from data components only.** No day or time string appears in prose. Test: the audit's day and time check passes.
11. **Copy audit passes.** After `npm run build` in `site/`, `bash ../scripts/copy_audit.sh src dist` reports zero violations, and `scripts/copy_audit_allow.txt` has no new line. Test: exit code 0, and `git diff` on the allowlist is empty.
12. **Links are valid.** `python3 scripts/check_dist.py --final` passes. Every internal link resolves to a built route. No link points to an omitted route.
13. **Images are cleared.** Every image path is in `media.ts`. No image shows a minor until D5 is recorded. Test: audit image check plus a manual look at each image.
14. **Machine files match status.** `sitemap.xml` and `llms-full.txt` list a guide only when its status is `published`. Test: grep the built output for each omitted route; expect no matches.
15. **Hub matches status.** `/guides/` lists only `published` guides and is linked from the footer only when its routes.ts status is `built`. Test: `check_dist.py --final` plus a grep of the footer.
16. **Owner sign-off is recorded.** The owner records an approval id for the guide, dated on or after `last_reviewed`. Test: the id resolves in `decisions.json` or in the owner answer log.

## Open questions for owner

Blocking questions come first.

1. Who is the named author for the guides, and which credentials, if any, may appear under that name?
2. Will you record D12 in `decisions.json` with its scope, since D12 now appears only in `routes.ts` and the plan table?
3. Will Naweed Zemaryalai be the named reviewer for every guide claim, as the KB header assigns him fact approval?
4. Do you approve naming DSAL Hayward in its guide, subject to written permission from DSAL?
5. Who verifies the ledger rows before any CL id can support a guide sentence, given that none of the 2,608 rows is marked verified?
6. Should review cadence be 180 days, as proposed here?
7. Should any other school, league, club, or athlete be named in a guide, or should every outside organization stay unnamed?
8. Should the guide titles follow routes.ts or the spec, given that four titles differ?
9. Do you approve a new allowlist entry tied to OC-07, so that the "boycotted" wording can appear in a guide, given that the audit blocks it?
10. Do you approve the word "Olympic" in guide text, given that the audit blocks it on every new page and the spec's DSAL title uses it?
11. Should the youth guide mention karate or any other martial arts category at all?
12. Which per-program tiers may appear in a guide once LS-01 is fixed?
13. Do you confirm that rival and forum names from the spec's guide intent stay out of all guide copy?

### Conflicts found while drafting (not resolved here)

- **OC-07 versus the audit.** OC-07 keeps the "boycotted" wording, but the audit blocks "boycott", "moscow", and "1980" on new pages.
- **OC-09 versus the audit.** OC-09 keeps Rashad Rahimi's "1980 Olympic Qualifier" and "Asian Games silver". The audit blocks those terms on new pages. Only existing allowlisted lines pass (`CoFounder.astro`, `Coaches.astro`).
- **OC-11 versus existing copy.** OC-11 sets 3,800 sq ft. The copy audit allowlist still records a "3,000 sq" line in `site/src/components/home/Safety.astro` (line 17, under D9). Draft guide rows also state "3,000+ sq ft" (CL-1245) and "Resilite" mats (CL-1246). KB-13 says Dollamur.
- **OC-14 versus site data.** OC-14 says age bands are not published. `site/src/data/facts.ts` (`programs`), `programs.ts`, and `faqs.ts` (age 5) still publish age numbers.
- **OC-01 versus pricing copy.** OC-01 says $139.99 is one tier. `facts.ts` (`membership.price`), `site/src/components/home/Hero.astro` (line 24), and draft guide copy (CL-1222) state $139.99 as the price.
- **LS-01 versus pricing pages.** LS-01 says the schedule does not support a 4-Day Kids plan. `site/src/pages/pricing.astro` (line 14) and `site/src/pages/classes/kid-wrestling.astro` (line 27) still sell it at $139.99. Draft copy (CL-1236) repeats it.
- **D12 is not in the decision ledger.** It appears in `routes.ts` and the plan table only, so the `owner_decision` source type cannot resolve it.
- **No verified ledger rows.** Of 2,608 rows in `claims.json`, 2,250 are unverified, 298 are superseded, and 60 are conflicting. None is verified.

## Sources

Read in full or in the relevant part:

- `discovery/ledger/decisions.json` (all entries; owner decisions OC-01 to OC-14, RC-01 to RC-13, LS-01)
- `discovery/knowledge_base/uwc_kb_v1.md` (facts KB-01 to KB-23, open conflicts, section C not to quote)
- `discovery/site/website_rebuild_spec.md` (sections 4, 5, 7; guide purpose and intent)
- `discovery/site/sitemap_status.md` (omitted routes and D12 unlock)
- `discovery/plans/astro-design-system-and-buildout.md` (routes 27 to 32; D12 row)
- `site/src/data/routes.ts`, `facts.ts`, `programs.ts`, `schedule.ts`, `faqs.ts`, `reviews.ts`, `media.ts` (site data)
- `site/src/pages/pricing.astro` and `site/src/pages/classes/kid-wrestling.astro` (price lines, grep only); `site/src/components/home/Hero.astro` (line 24, grep only)
- `scripts/copy_audit.py` (BLOCK pattern, DAYTIME, PHONE, TEXTUS, image and allowlist rules), `scripts/copy_audit.sh`, `scripts/copy_audit_allow.txt` (entries, read in full)
- `scripts/check_dist.py` (omitted-route link rule and usage), `scripts/discovery_check.py` (frontmatter enums), `discovery/_templates/spec.md`
- `site/astro.config.mjs` (site URL, not used in fields)
- `PRODUCT.md` (anti-references, audience; not used as a fact source)
- `discovery/ledger/claims.json` (2,608 rows; searched by keyword, not read whole; counts taken from the file)
- `discovery/archive/snapshots/live_site_content/` (the live-site copy the owner named as source of truth). The folder was located, but its files were not re-read for this draft. The owner decisions quote it, so this schema relies on those decisions.

No external source was browsed or cited. The top-10 programmatic blueprint (`discovery/market/local_seo/top_10_programmatic_lps.md`) was used only for intent. Its figures were not used.
