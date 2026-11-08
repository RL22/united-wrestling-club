---
type: spec
status: draft
group: site
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/market/local_seo/top_10_programmatic_lps.md", "discovery/ledger/decisions.json", "discovery/ledger/claims.json", "discovery/knowledge_base/uwc_kb_v1.md", "discovery/site/website_rebuild_spec.md", "discovery/site/forms_map_full_sitemap.md", "discovery/client/naweed_discovery_questions.md", "discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md", "discovery/decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md", "discovery/decisions/ADR-20261105-public-preview-github-pages.md", "discovery/market/local_seo_keyword_reroute_map.md", "site/src/data/facts.ts", "site/src/data/faqs.ts", "site/src/data/programs.ts", "site/src/data/schedule.ts", "site/src/data/reviews.ts", "site/src/data/routes.ts", "site/src/data/jsonld-home.ts", "site/src/data/nav.ts", "site/src/pages/pricing.astro", "site/src/pages/classes/kid-wrestling.astro", "site/src/components/home/Coaches.astro", "site/src/components/home/Programs.astro", "site/src/components/home/Safety.astro", "site/src/components/forms/TrialForm.astro", "site/src/components/forms/ContactForm.astro", "site/src/components/pages/info/faqItems.ts", "site/src/components/pages/unlocks/SamboBody.astro", "site/src/components/pages/about/CoFounder.astro", "site/src/pages/register.astro"]
---

# Blueprint claim audit: top_10_programmatic_lps.md

## TL;DR

- This table lists every factual claim in `discovery/market/local_seo/top_10_programmatic_lps.md`. Other teammates should check it before copying any blueprint text. The blueprint is an example of layout and intent only. Its numbers are not verified.
- Most of its claims are unsourced or contradicted. The contradictions come from owner decisions (OC-07, OC-14, OC-01, RC-01, RC-05, OC-04, LS-01) and from the route status in `site/src/data/routes.ts`.
- Five of the ten blueprint pages are not live routes: four location pages (only `/locations/hayward-ca/` is built) and `/classes/womens-self-defense/` (omitted, D4). The 1980 Olympic claim is blocked (OC-07).
- Do not copy the blueprint's phone attribution ("call or text Coach Naweed"), its free trial offers, its drive times, its geo values, or its review badge.

## How to read this table

Status values:

- `verified`: the claim matches a site_data file, a KB entry marked Verified, or an owner decision in `decisions.json` (the decision id is cited). The claims ledger has no entry with `verification: verified`. Its 2,608 entries are `unverified` (2,250), `superseded` (298), or `conflicting` (60). So "verified" here rests on the repo's source files, not on the ledger.
- `contradicted`: the claim conflicts with an owner decision (decision id cited), with a KB entry that is Verified or planned (KB id cited), or with a route or site data value (path cited).
- `unsourced`: no KB entry, site data value, or decision supports it. Ledger entries marked `unverified` are cited for reference, but they do not make a claim sourced. Also used for plan-only statements and for claims that conflict only with built code.
- `market-data`: keyword volume, KD, CPC, rank, or traffic. Each one cites **SEO-SRC-1** (OpenSEO project `778e3f25`, location 2840, pulled 2026-10-30) in `discovery/market/local_seo/seo_data_sources.md`. The row-level export is not in the repo or in OpenSEO, so these figures are stated, not checked. They are not site facts and must not appear on a page.

Conventions: "CL-xxxx" is a claims ledger id. "RC-", "OC-", and "LS-" are ids in `discovery/ledger/decisions.json`. "KB-xx" is an entry in `discovery/knowledge_base/uwc_kb_v1.md`. "D1" to "D15" are owner-decision labels cited from `routes.ts` and `todos.md`. They are not in `decisions.json`. Section labels follow the blueprint: "1" is the matrix, "2.1" to "2.8" are the eight layout sections, "3" is the martial arts section, "4.1" to "4.5" are the five deep-dive blueprints, "5" is the JSON-LD, "6" is the rollout.

Document metadata (dates, frontmatter, "Updated" line) is not a site fact and is not audited.

## Audit table

| # | Blueprint section | Claim (quoted briefly) | Status | Evidence or conflict | Replacement or owner question |
|---|---|---|---|---|---|
| 1 | Header | Target territory: Hayward HQ, Tri-City, Castro Valley, San Leandro | verified | `site/src/data/faqs.ts` (Q4) lists Hayward, Union City, Fremont, Newark, Castro Valley, and San Leandro as served. | Use the faqs.ts list. "Alameda County" is not sourced (see row 109). |
| 2 | Header | "5 location feeder pages and 5 core discipline pages" | contradicted | `site/src/data/routes.ts`: only `/locations/hayward-ca/` is built. Union City, Fremont, Newark, and Castro Valley are omitted (D11). | Publish only the built pages until D11 is decided. |
| 3 | Header | "Strictly locked to the 32-route information architecture" | contradicted | `discovery/site/website_rebuild_spec.md` status line: 33 page routes (21 built, 12 omitted). `routes.ts` is the route source. | Cite `routes.ts` and the 33-route count. |
| 4 | Header | Data sources: OpenSEO ranked keywords, local SERPs, Google Ads volume and CPC | market-data | `discovery/market/local_seo_keyword_reroute_map.md` (line 14) cites OpenSEO project 778e3f25-5476-4c54-bfe2-e418e131aaaf. No raw export file is in the repo. | Re-pull and file the export before reusing any number. |
| 5 | 1 Matrix, row 1 `/locations/hayward-ca` | "wrestling gym", "wrestling club", "wrestling near me": 26,300/mo, KD 4 to 10, CPC $1.89 | market-data | CL-1605 | Market data only. |
| 6 | 1 Matrix, row 2 `/locations/union-city-ca` | "union city wrestling" etc.: 480/mo, KD 0 to 2, CPC $1.40 | market-data | CL-1606 | Market data only. |
| 7 | 1 Matrix, row 3 `/locations/fremont-ca` | "wrestling fremont ca" etc.: 2,320/mo, KD 0 to 13, CPC $2.86 | market-data | CL-1607 | Market data only. |
| 8 | 1 Matrix, row 4 `/locations/newark-ca` | "wrestling newark ca" etc.: 640/mo, KD 0 to 5, CPC $1.90 | market-data | CL-1608 | Market data only. |
| 9 | 1 Matrix, row 5 `/locations/castro-valley-ca` | "wrestling castro valley" etc.: 890/mo, KD 0 to 6, CPC $2.15 | market-data | CL-1609 | Market data only. |
| 10 | 1 Matrix, row 6 `/classes/kid-wrestling` | "youth wrestling near me" etc.: 8,530/mo, KD 0 to 6, CPC $3.22 | market-data | CL-1610 | Market data only. |
| 11 | 1 Matrix, row 7 `/classes/youth-wrestling` | "wrestling teams" etc.: 4,300/mo, KD 4 to 20, CPC $3.87 | market-data | CL-1611 | Market data only. |
| 12 | 1 Matrix, row 8 `/classes/adult-wrestling` | "adult wrestling clubs near me" etc.: 3,530/mo, KD 0 to 15, CPC $1.82 | market-data | CL-1612 | Market data only. |
| 13 | 1 Matrix, row 9 `/classes/nogi-jiu-jitsu` | "no gi jiu jitsu near me" etc.: 4,200/mo, KD 3 to 14, CPC $2.75 | market-data | CL-1613 | Market data only. |
| 14 | 1 Matrix, row 10 `/classes/womens-self-defense` | "women's self defense classes hayward" etc.: 1,420/mo, KD 0 to 4, CPC $3.50 | market-data | CL-1614 | Market data only. |
| 15 | 1 Matrix, row 3 intent | Fremont is a "Tri-City combat sports vacuum" that "intercepts karate searchers" | unsourced | Market and competitor claim. No source in KB, site data, or ledger. | Drop, or source it. |
| 16 | 1 Matrix, row 3 region | "Fremont (230k population hub)" | unsourced | No population figure in the repo or ledger. | Drop, or cite a census source (external). |
| 17 | 1 Matrix, row 2 intent | "James Logan High feeder and MVAL scholastic pipeline" | unsourced | No KB entry. CL-1558 (outreach copy) is unverified. "MVAL" appears in no source. James Logan is another organization. | Owner question: does UWC have a feeder relationship with James Logan High? If not, drop. |
| 18 | 1 Matrix, row 6 price | Kids "youth foundation" at $89.99/mo (lower bound of the range) | verified | `site/src/pages/pricing.astro`: "Kids (Pre k - 5th) 2 Day" at 89.99/mo, Monday and Wednesday, which matches `site/src/data/schedule.ts` row-01. CL-1639. | Show only the 2-day kids plan at $89.99. |
| 19 | 1 Matrix, row 6 price | Kids price range tops out at $139.99/mo | contradicted | LS-01: the pricing page's 4-Day Kids plan at $139.99 (Monday to Thursday) is not supported by the schedule, and the pricing copy must be fixed. Also `site/src/pages/classes/kid-wrestling.astro` (line 27). | Do not show $139.99 for kids until LS-01 is fixed. |
| 20 | 1 Matrix, row 6 intent | "youth foundation and motor mechanics" | unsourced | `site/src/data/faqs.ts` Q1 names agility, tumbling, balance, basic stances, and listening discipline. "Motor mechanics" is not in any source. | Use the faqs.ts list. |
| 21 | 1 Matrix, row 6 audience | "Pre-K to 5th (Ages 4 to 11)" | contradicted | Grade part verified: `schedule.ts` row-01 ("Kids, pre-K to 5th grade") and OC-14 (grades are used). Age part contradicted by OC-14 (age bands are not published). | Keep the grade wording. Drop "Ages 4 to 11." |
| 22 | 1 Matrix, row 7 price | Competition youth at $139.99 to $150/mo | verified | `pricing.astro`: Middle School / High School $139.99; Competition Youth (Pre K to 12th) $150.00. CL-1640. | Show each price by program name, as pricing.astro does. |
| 23 | 1 Matrix, row 7 intent | "Elite scholastic year-round travel squad" | unsourced | No source. `schedule.ts` rows 02 and 04 do not say travel or year-round. | Owner question: is there a travel squad? If not, drop the phrase. |
| 24 | 1 Matrix, row 7 audience | "Grades K to 12 competition and scholastic" | verified | OC-14 (live site uses K to 12th for competition youth); `schedule.ts` row-02 ("Team & competition, K to 12"). | Use the grade wording. |
| 25 | 1 Matrix, row 8 audience | "Adults 18+ / College" | contradicted | OC-14 says KB age numbers should not be published. KB-05 and `facts.ts` state "18 and up." The "College" wording is verified by `schedule.ts` row-05 ("Adult, college & high school"). | Owner question: is "18 and up" an age band that OC-14 removes? Use "adult" and the program name until answered. |
| 26 | 1 Matrix, row 8 price | Adult membership at $139.99/mo | verified | `pricing.astro`: Adult / College / High School $139.99 per month; `facts.ts` membership. Note OC-01: $139.99 is one tier, not the price. | Show it as the adult tier on /pricing, not as a headline price (OC-01). |
| 27 | 1 Matrix, row 8 intent | "Without needing a collegiate roster" | unsourced | No admission rule in KB, site data, or ledger. | Drop, or the owner states the rule. |
| 28 | 1 Matrix, row 9 price | No-gi "$100 to $139.99/mo" | unsourced | `pricing.astro` lists "BJJ / 3 days" at $100 only. There is no $139.99 no-gi tier. CL-1642. | Owner question: which tier applies to no-gi? Use $100 only if it is the BJJ 3-day tier. |
| 29 | 1 Matrix, row 9 intent | No-gi is the "guard-puller antidote" for people "frustrated with guard-pulling culture" | unsourced | A claim about other grapplers' habits. No source. | Drop, or source it with an owner statement. |
| 30 | 1 Matrix, row 10 leadership | Women's self-defense "co-led by Louisa, Neha's Sister and Ja Shia" | unsourced | No source in KB-16, `facts.ts` coaches, or site copy. CL-1625 is unverified. | Owner names the coaches, or drop. |
| 31 | 1 Matrix, row 10 status | Women's self-defense page is a live route | contradicted | `routes.ts`: `/classes/womens-self-defense/` is omitted (unlock D4). KB-19: "Planned. Dates and pricing not set." | Do not build the page until D4 and KB-19 are resolved. |
| 32 | 2.2 Proof bar | "42 five-star Google reviews" | contradicted | `site/src/data/facts.ts` (`reviewsGoogle`): the KB-17 figure is usable only on /reviews/. `llms-full.txt.ts` says the same. CL-1618. | Use "5.0 across 42 reviews on Google" on /reviews/ only. |
| 33 | 2.2 Proof bar | "100% five-star" | unsourced | KB-17 gives a 5.0 average only. No source gives a 100% share. CL-1618. | Drop the 100% figure. |
| 34 | 2.2 Proof bar | "1980 Moscow Olympics qualified founder (Karim Zemaryalai)" | contradicted | OC-07: keep the boycott wording from KB-16. The "qualified" wording needs review. KB-16 blocks Olympian and Moscow claims until Karim confirms. CL-1620. | Owner question: Karim's exact 1980 wording (OC-07). Until then, drop. |
| 35 | 2.2 Proof bar | "Collegiate kinesiology and Chabot College coaching staff" (Naweed) | unsourced | KB Section C: no coach credentials beyond KB-16. The claim is in `ADR-20261102-facility-and-coaching-invariants.md` (line 18) and `Coaches.astro` (line 41), not in KB-16. | Use "head coach" only (KB-16) until Naweed confirms. |
| 36 | 2.2 Proof bar | "Verified facility location: 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544" | verified | KB-01; `facts.ts` address. CL-1621. | Use the facts.ts address. |
| 37 | 2.2 Proof bar | "Minutes from I-880" | unsourced | No drive time in KB or site data. `faqs.ts` Q4 says "easily accessible via I-880 and Highway 92." | Use the faqs.ts wording. |
| 38 | 2.2 Proof bar | "Active competitor metrics" (diagram label) | unsourced | No competitor metrics exist for this use in the repo. | Drop. |
| 39 | 2.1 Hero | H1 pattern: "[Discipline] Classes in Hayward & East Bay" | unsourced | "East Bay" is not in the faqs.ts served-city list. | Use the faqs.ts served-city wording. |
| 40 | 2.1 Hero | Subheadline: "exact age brackets (Pre-K to Adult)" | contradicted | OC-14: age bands are not published. The live site uses grades. | Use grades: Pre-K to 5th, K to 12th, middle and high school (OC-14). |
| 41 | 2.1 Hero | Trust badge: "1980 Olympic Qualifier Lineage" | contradicted | OC-07 (Karim). OC-09 approves "1980 Olympic Qualifier" for Rashad Rahimi only, as on the live About page. | Do not attribute it to Karim. Rahimi's credential may appear as OC-09 approved it. |
| 42 | 2.1 Hero | Trust badge: "5.0 Google Rated (42 Reviews)" | contradicted | `facts.ts` (`reviewsGoogle`): /reviews/ only. CL-1615. | Remove from LP templates. |
| 43 | 2.1 Hero | Trust badge: "Hayward, CA facility" | verified | `facts.ts` address; KB-01. | None. |
| 44 | 2.1 Hero | Primary CTA: "Claim Free 1-Day Trial Pass" | contradicted | RC-05: the live trial is a $15 3-day trial. Free 2-class and free 1-day passes are not offered. CL-1616 (conflicting). | Use "Try three practices for $15" (`register.astro` lead; `facts.ts` trialPass). |
| 45 | 2.1 Hero | Secondary CTA: "Call / Text Coach Naweed: (510) 303-4869" | contradicted | RC-01: the number is the club line. OC-04: texts go to the automated responder, not Coach Naweed. CL-1617. | Use "Call the club: (510) 303-4869." Text routing follows OC-04. |
| 46 | 2.1 Hero | Primary CTA links to /register | verified | `routes.ts`: /register/ is built. | None. |
| 47 | 2.3 Curriculum | Card 1: "stance, motion and level changes; biomechanical foundations and kinetic chain" | unsourced | No curriculum source in KB or site data. | Owner describes the curriculum, or drop the card. |
| 48 | 2.3 Curriculum | Card 2: "high-percentage takedowns; folkstyle and freestyle leg attacks; snap-downs" | unsourced | No curriculum source. Reviews in `reviews.ts` mention folkstyle and freestyle, but reviews are not curriculum evidence. | Owner describes the curriculum. |
| 49 | 2.3 Curriculum | Card 3: "mat control and defense: escapes, reversals, ride time, safe falling" | unsourced | No source. | Owner describes the curriculum. |
| 50 | 2.3 Curriculum | Card 4: "live goes matched strictly by size and skill" | unsourced | No source. KB-15 (coaching ratio) is unverified and must not be quoted. | Owner confirms the matching rule, or drop it. |
| 51 | 2.3 Curriculum | Kids classes cover agility, tumbling, balance, and basic stances | verified | `faqs.ts` Q1: "agility, tumbling, balance, basic stances, and listening discipline" for the Youth Wrestling Academy. | Use the faqs.ts wording. |
| 52 | 2.3 Curriculum, 3 | Outcome claims: "unshakeable confidence," "discipline, accountability, and self-confidence" | unsourced | Outcome claims with no source. | Drop, or source with an owner statement. |
| 53 | 3 Martial arts | Parents want self-defense "without striking injuries," and fitness, from martial arts | unsourced | Market claim with no source. | Drop, or cite research (external). |
| 54 | 2.3 Curriculum | Internal link to /classes | verified | `routes.ts`: /classes/ is built. | None. |
| 55 | 2.4 Contrast table | Heading: "How United Wrestling Club compares to typical martial arts schools" | unsourced | Comparison to an unnamed category with no source. | Owner decides whether to compare at all. |
| 56 | 2.4 Contrast table | Typical school: "franchise black belts and strip-mall instructors" | unsourced | Claim about other organizations. No source. | Drop. |
| 57 | 2.4 Contrast table | Typical school: "kata, air punching, expensive belt promotion fees" | unsourced | Claim about other organizations. No source. | Drop. |
| 58 | 2.4 Contrast table | Typical school: "zero full-contact resistance" | unsourced | Claim about other organizations. No source. | Drop. |
| 59 | 2.4 Contrast table | Typical school: "$250+/mo long-term lock-in contracts" | unsourced | Competitor price. CL-1637 is unverified. No competitor pricing source in site data. | Drop, or cite the competitor's published price (external). |
| 60 | 2.4 Contrast table | UWC: "1980 Moscow Olympic Qualifier" | contradicted | OC-07 (see row 34). | Remove. |
| 61 | 2.4 Contrast table | UWC: "Dagestan medalist" | verified | OC-08: Karim's Ali Aliyev Tournament result is bronze. "Medalist" with no place is consistent. | Use "bronze medalist" if a place is shown (OC-08). |
| 62 | 2.4 Contrast table | Ali Aliyev event location: Dagestan (Makhachkala) | unsourced | `Coaches.astro` (line 29) and the facility ADR (line 17) say Dagestan or Makhachkala. Neither is in KB-16 or `decisions.json`. | Owner confirms the location with Karim. |
| 63 | 2.4 Contrast table | UWC: "real Olympic folkstyle, freestyle, sambo and wrestle-jitsu" | unsourced | "Olympic" describes freestyle and Greco-Roman wrestling, not folkstyle. No source in the repo supports the list. Sambo appears in the footer and on a route, but has no schedule row. | Owner confirms the style list. Drop "Olympic" unless it refers to freestyle or Greco-Roman. |
| 64 | 2.4 Contrast table | UWC: "elite functional grappling strength, agility, and stamina" | unsourced | Puffery with no source. | Drop. |
| 65 | 2.4 Contrast table | UWC: "controlled live wrestling against resisting partners" | unsourced | Same as row 50. | Owner confirms. |
| 66 | 2.4 Contrast table | UWC: "flexible monthly memberships ($89.99 to $150/mo), no long contracts" | verified | `faqs.ts` Q3: "Monthly plans range from $89.99 to $150.00"; `pricing.astro`; KB-08 (month to month, no contract). | If cancellation is mentioned, state the 7 days' notice (OC-06). |
| 67 | 2.4 Contrast table | Internal link to /pricing | verified | `routes.ts`: /pricing/ is built. | None. |
| 68 | 2.5 Coaches | Heading: "Led by real competitors and collegiate coaches" | unsourced | "Collegiate coaches" depends on the Chabot College claim (row 35). | Drop until row 35 is resolved. |
| 69 | 2.5 Coaches | Naweed Zemaryalai: "Head Coach" | verified | KB-16 (names and roles verified on site); `facts.ts` coaches. | Use "Head coach." |
| 70 | 2.5 Coaches | Naweed: "Chabot College Coach" | unsourced | KB Section C. CL-1106 and CL-1562 are unverified. The claim appears in the ADR (line 18) and `Coaches.astro` (line 41). | Owner confirms wording. |
| 71 | 2.5 Coaches | Naweed: "SF State Kinesiology" | unsourced | KB Section C. Site copy (`jsonld-home.ts` description, `Layout.astro`) says "SFSU Kinesiology." | Owner confirms wording before any copy uses it. |
| 72 | 2.5 Coaches | Karim Zemaryalai: "Founder" | verified | KB-16; `facts.ts` coaches. | Use "Founder." |
| 73 | 2.5 Coaches | Karim: "1980 Olympian" | contradicted | OC-07; KB-16 blocks it. | Remove. |
| 74 | 2.5 Coaches | Karim: "Ali Aliyev Tournament medalist" | verified | OC-08 (bronze). `Coaches.astro` (line 29) already says bronze. | Use the bronze wording (OC-08). |
| 75 | 2.5 Coaches | Sandeep Singh Gosal, "youth competition" | verified | KB-16 names and role; `facts.ts` coaches role "Youth competition." OC-10 blocks his titles. | Name and role only. |
| 76 | 2.5 Coaches | Farid Siddiq, "boxing" | verified | KB-16; `facts.ts` coaches role "Boxing." | Name and role only. |
| 77 | 2.5 Coaches | "Kyrgyz Sambo Master Instructor" | unsourced | Not in KB-16 or `facts.ts` coaches. `SamboBody.astro` refers to an unnamed "master-level instructor from Kyrgyzstan with legitimate credentials." | Owner names the instructor and confirms credentials, or drop. |
| 78 | 2.5 Coaches | "Louisa / Ja Shia (Women's Self-Defense)" | unsourced | No source in KB-16, `facts.ts`, or the ledger except CL-1625 (unverified). The route is omitted (D4). | Owner names the coaches, or drop. |
| 79 | 2.5 Coaches | "Neha's Sister" | unsourced | This is a descriptor, not a name. No source. | Owner gives a name, or drop. |
| 80 | 2.5 Coaches | Internal link to /about for "complete Olympic coaching bios" | verified | `routes.ts`: /about/ is built. The Olympic content there is subject to rows 34, 41, 60, and 73. | Link is fine. The Olympic copy is not. |
| 81 | 2.6 Schedule and location | Verified physical address: 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544 | verified | KB-01; `facts.ts` address. | Use the facts.ts address. |
| 82 | 2.6 Schedule and location | From Union City: "6 minutes via Whipple Rd and I-880 N" | unsourced | CL-1626 (unverified). `routes.ts` gives "drive times ... not in the KB" as the reason the page is omitted (D11). | Drop, or owner confirms. |
| 83 | 2.6 Schedule and location | From Fremont: "9 minutes via I-880 N (exit Industrial Pkwy W)" | unsourced | CL-1627 (unverified). Same reason as row 82. | Drop, or owner confirms. |
| 84 | 2.6 Schedule and location | From Castro Valley and San Leandro: "8 to 10 minutes via I-880 S or Mission Blvd" | unsourced | CL-1628 (unverified). | Drop. |
| 85 | 2.6 Schedule and location | From Newark: "11 minutes via Cedar Blvd and I-880 N" | unsourced | CL-1629 (unverified). | Drop. |
| 86 | 4.1 Blueprint 1 (Fremont) | "Straight 9-minute shot north on I-880 from Fremont Blvd or Auto Mall Pkwy" | unsourced | CL-1654 (unverified). | Drop. |
| 87 | 2.6 Schedule and location | "Dedicated commercial park lot with ample free parking directly in front of Suite C" | unsourced | KB-21: directions and parking are "Missing." CL-1630 (unverified). `register.astro` promises parking instructions that the KB does not contain. | Staff writes the parking guide (KB-21). Owner confirms. |
| 88 | 2.6 Schedule and location | Phone note: "Call or text Coach Naweed directly at (510) 303-4869" | contradicted | RC-01: the number is the club line. OC-04: texts go to the automated responder. | "Call the club at (510) 303-4869." Text routing per OC-04. |
| 89 | 2.6 Schedule and location | Interactive schedule CTA links to /schedule as a "filterable weekly matrix" | verified | `routes.ts`: /schedule/ is built. The "filterable" wording was not checked against the page. | Link is fine. |
| 90 | 2.6 Schedule and location | Embedded Google Map: "CID: 16896090141452237997" | unsourced | This CID is in no KB entry, site data file, or decision. | Use the `facts.ts` `address.mapsUrl`. |
| 91 | 2.7 FAQ | Q1: "Do I or my child need prior wrestling or martial arts experience?" | verified | `site/src/components/pages/info/faqItems.ts` (Q2, live /faqs): "No prior experience is required to join." | Use the faqItems.ts wording. |
| 92 | 2.7 FAQ | Q2: "What gear is required for the first free class?" | contradicted | RC-05: no free class is offered. `faqs.ts` Q2 gives gear for the 3-day trial pass. | Ask "What should I wear to the 3-day trial?" and use faqs.ts Q2. |
| 93 | 2.7 FAQ | Q3: "How does wrestling help student athletes in high school or other sports?" | unsourced | A question with no sourced answer. | Owner approves an answer, or drop. |
| 94 | 2.7 FAQ | Q4: "Where exactly is the facility located and where do we park?" | unsourced | The address part is verified (row 81). The parking part is unsourced (row 87). | Address only until KB-21 is closed. |
| 95 | 2.7 FAQ | Links to /faqs and /rules | verified | `routes.ts`: /faqs/ and /rules/ are built. | None. |
| 96 | 2.7 FAQ | "/rules for club hygiene standards" | unsourced | The KB does not describe /rules content. The spec (route row 19) says "Hospital-Grade Mat Hygiene Proof," which is also unsourced (row 149). | Check the /rules copy against KB-13. |
| 97 | 2.8 Final CTA | Four fields: name, phone, email, and class date (Monday to Saturday) | unsourced | `TrialForm.astro` has athlete name, parent name, phone, program, and source. It has no email field and no class-date field. | Owner decides the field set, then update the form or the blueprint. |
| 98 | 2.8 Final CTA | "Phone number (for automated SMS confirmation)" | unsourced | `TrialForm.astro` (line 30) labels the phone "For SMS Confirmation." KB-07: "Arrival text not yet live." OC-04 settles reply routing only. | Owner confirms whether confirmations go out before launch. |
| 99 | 6 Rollout, phase 4 | "Connect automated SMS trial confirmations via (510) 303-4869" | unsourced | Same as row 98. This is a plan, not a live feature. | Owner confirms before launch. |
| 100 | 2.8 Final CTA | Button: "Confirm Free Trial Class" | contradicted | RC-05. The built label is "Confirm $15 3-Day Pass" (`TrialForm.astro` default). | Use "Confirm $15 3-Day Pass." |
| 101 | 2.8 Final CTA | Form "submits directly into the native /register intake" | contradicted | RC-09: `mkjjyyep` is not live. `TrialForm.astro` (line 18) posts to `mkjjyyep`. | Owner confirms the trial-form endpoint before launch. |
| 102 | 2.8 Final CTA | "/register (direct checkout)" | contradicted | KB-10: payment and the waiver are completed on WrestlingIQ (Team #513). | Say "payment and the waiver are completed on WrestlingIQ." |
| 103 | 5 JSON-LD | `@type` SportsClub; name "United Wrestling Club" | verified | `site/src/data/jsonld-home.ts`. | None. |
| 104 | 5 JSON-LD | `@id` "https://www.unitedwrestlingclub.com/#organization" | unsourced | No `@id` in `jsonld-home.ts`. | Decide one `@id` and use it on every page. |
| 105 | 5 JSON-LD | `url` "https://www.unitedwrestlingclub.com" | verified | `jsonld-home.ts` `url` (with trailing slash). | Keep the form that `jsonld-home.ts` uses. |
| 106 | 5 JSON-LD | `telephone` "+1-510-303-4869" | verified | RC-01; `facts.ts` phone. | None. |
| 107 | 5 JSON-LD | `email` "unitedwrestlingclub@gmail.com" | verified | RC-08; `facts.ts` email. | None. |
| 108 | 5 JSON-LD | `priceRange` "$15 - $150" | unsourced | `jsonld-home.ts` uses "$$". No decision sets a price range. Each end is sourced on its own: $15 (`facts.ts` trialPass) and $150 (`pricing.astro` Competition Youth). CL-1648. | Owner picks the schema value. |
| 109 | 5 JSON-LD | `areaServed` AdministrativeArea "Alameda County" | unsourced | CL-1650 (unverified). No source says UWC serves the whole county. | Drop, or owner confirms the service area. |
| 110 | 5 JSON-LD | `address` 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544, US | verified | KB-01; `jsonld-home.ts`. | None. |
| 111 | 5 JSON-LD | `geo` latitude 37.6091918, longitude -122.0673447 | unsourced | Three different values: this blueprint (CL-1649), `jsonld-home.ts` (37.6033, -122.0538), and the competitor-dossier proposal (latitude 37.60742, CL-1118). No KB entry or decision gives coordinates. | Owner or staff confirms one set for Suite C, then the schema uses it everywhere. |
| 112 | 5 JSON-LD | `areaServed` cities: Hayward, Fremont, Union City, Newark, Castro Valley, San Leandro | verified | `faqs.ts` Q4; `jsonld-home.ts` `areaServed`. | None. |
| 113 | 5 JSON-LD | Location breadcrumb: Home, Locations, Fremont | contradicted | `routes.ts`: /locations/fremont-ca/ is omitted (D11). A breadcrumb to an omitted page breaks the silo rule in the blueprint itself. | Breadcrumbs only to built routes. |
| 114 | 5 JSON-LD | Discipline breadcrumb: Home, Classes, Kids Wrestling | verified | `routes.ts`: /classes/ and /classes/kid-wrestling/ are built. | None. |
| 115 | 5 JSON-LD | All 10 templates inject SportsClub, BreadcrumbList, and FAQPage | unsourced | Plan only. The home page has SportsClub JSON-LD (`jsonld-home.ts`), and /faqs has FAQPage. No template exists for the 10 pages. CL-1647. | Treat as a plan, not a fact. |
| 116 | 5 JSON-LD | FAQ Q1: "Do beginners or kids need prior experience to join?" | verified | `faqItems.ts` Q2 (same source as row 91). | Use the faqItems.ts wording. |
| 117 | 5 JSON-LD | FAQ Q1 answer: coaches "specialize in teaching foundational athletic movement, stance, and basic techniques" | unsourced | `faqItems.ts` Q2 says "experienced coaches provide instruction tailored to the needs and abilities of each participant." The blueprint wording is not in any source. | Use the faqItems.ts wording. |
| 118 | 5 JSON-LD | FAQ Q2 answer: "athletic shorts (without zippers or pockets) and a clean t-shirt" | verified | `faqs.ts` Q2 says "athletic shorts (without zippers or pockets) and a t-shirt." The word "clean" is not in the source. | Use the faqs.ts wording. Drop "clean." |
| 119 | 5 JSON-LD | FAQ Q2 answer: "or rashguard" | unsourced | `faqs.ts` Q2 names no rashguard. The only rashguard mention is a retention perk in `ADR-20261102-commercial-pricing-and-pif-promotions.md` (line 20), not a gear rule. | Drop, or owner confirms. |
| 120 | 5 JSON-LD | FAQ Q2 answer: "Wrestling shoes or bare feet on the mats" | unsourced | `faqs.ts` Q2: "Wrestling shoes are recommended but socks are acceptable." Bare feet is not in any source. | Use the faqs.ts wording. |
| 121 | 5 JSON-LD | FAQ Q2 answer: "Bring a water bottle" | unsourced | CL-1652 (unverified). No other source. | Owner confirms, or drop. |
| 122 | 5 JSON-LD | FAQ Q3 answer: address "right off I-880" | unsourced | `faqs.ts` Q4: "easily accessible via I-880 and Highway 92." "Right off" is not in the source. The address is verified. | Use the faqs.ts wording. |
| 123 | 5 JSON-LD | FAQ Q3 answer: "call or text Coach Naweed directly at (510) 303-4869" | contradicted | RC-01; OC-04. | Club line only. |
| 124 | 6 Rollout, phase 1 | Week 1: `/locations/hayward-ca`, `/classes/kid-wrestling`, `/classes/youth-wrestling` | verified | `routes.ts`: all three are built. | None. |
| 125 | 6 Rollout, phase 2 | Week 2: Union City, Fremont, and Newark location pages | contradicted | `routes.ts`: all three are omitted (D11). | Hold until D11. |
| 126 | 6 Rollout, phase 3 | Week 3: adult, no-gi, and women's self-defense pages | contradicted | `routes.ts`: `/classes/womens-self-defense/` is omitted (D4). Adult and no-gi are built. | Hold women's self-defense until D4 and KB-19. |
| 127 | 6 Rollout, phase 4 | Castro Valley location page | contradicted | `routes.ts`: omitted (D11). | Hold until D11. |
| 128 | 6 Rollout, phase 4 | "Final verification of native /register intake endpoints" | unsourced | Depends on the endpoint conflict in row 101. | Resolve row 101 first. |
| 129 | 3 Martial arts | "Martial arts near me": 90,500/mo, KD 9, CPC $2.68 | market-data | CL-1643 | Market data only. |
| 130 | 3 Martial arts | "Mixed martial arts near me": 40,500/mo, KD 13, CPC $1.70 | market-data | CL-1644 | Market data only. |
| 131 | 3 Martial arts | "Martial arts for kids near me": 18,100/mo, KD 0, CPC $4.73 | market-data | CL-1645 | Market data only. |
| 132 | 3 Martial arts | "Fremont martial arts" and "martial arts Fremont CA": 2,320/mo combined, KD 0 to 13, CPC $2.86 | market-data | CL-1607 (same figure as row 7). | Market data only. |
| 133 | 3 Martial arts | Martial arts queries carry "5x to 10x" the volume of wrestling queries | market-data | Derived ratio from the OpenSEO export, which is not in the repo. Not verified. | Re-check against the export, or drop. |
| 134 | 3 Martial arts | Martial arts intent routed to `/locations/fremont-ca` and `/locations/newark-ca` | contradicted | `routes.ts`: both omitted (D11). | Do not route intent to omitted pages. |
| 135 | 3 Martial arts | Kids martial arts parents routed to `/guides/youth-wrestling-vs-martial-arts` | contradicted | `routes.ts`: the guide is omitted (D12). | Hold until D12. |
| 136 | 3 Martial arts | BJJ searchers routed to `/classes/nogi-jiu-jitsu` and `/classes/gi-jiu-jitsu` | verified | `routes.ts`: both are built. | None. |
| 137 | 3 Martial arts | Women's self-defense intent routed to `/classes/womens-self-defense` | contradicted | `routes.ts`: omitted (D4). | Hold. |
| 138 | 3 Martial arts | Wrestling as "the ultimate, practical martial arts alternative" to "expensive, low-intensity strip-mall karate studios" | unsourced | Claim about other organizations, with no source. | Drop. |
| 139 | 4.1 Blueprint 1 (Fremont) | Keywords: "wrestling fremont ca" (KD 0, CPC $2.86) and "wrestling classes fremont" (KD 2, CPC $2.31) | market-data | The combined Fremont volume is CL-1607. The per-keyword KD and CPC are not in the ledger. | Market data only. |
| 140 | 4.1 Blueprint 1 (Fremont) | "Fremont's Gateway to Olympic Wrestling, No-Gi Jiu-Jitsu & Combat Sambo" | unsourced | "Olympic" (see row 63). Sambo has no schedule row. | Drop "Olympic." Owner confirms Sambo is a current program. |
| 141 | 4.1 Blueprint 1 (Fremont) | Target offer: "Free 1-Day Trial Pass" | contradicted | RC-05. CL-1635. | Use the $15 3-day trial. |
| 142 | 4.1 Blueprint 1 (Fremont) | Direct inquiry: "Call or text Coach Naweed at (510) 303-4869" | contradicted | RC-01; OC-04 (see row 88). | Club line. |
| 143 | 4.2 Blueprint 2 (Union City) | Keywords: "union city wrestling" (KD 0, CPC $1.40), "wrestling union city ca", "james logan wrestling club" | market-data | CL-1606 for the cluster. "James logan wrestling club" names another club. It is keyword data only. | Do not use the keyword as a claim about James Logan. |
| 144 | 4.2 Blueprint 2 (Union City) | Positioning: "Elite Wrestling Development for Union City Athletes" | unsourced | Positioning with no source. | Drop, or owner confirms. |
| 145 | 4.2 Blueprint 2 (Union City) | "6 minutes from James Logan High School via Whipple Rd" | unsourced | CL-1626 covers the drive from Union City, not from the school. No source for the school distance. | Drop. |
| 146 | 4.2 Blueprint 2 (Union City) | Union City athletes "compete for James Logan High School and MVAL championships" | unsourced | See row 17. | Drop, or owner confirms. |
| 147 | 4.2 Blueprint 2 (Union City) | Target offer: "Free 1-Day Trial Pass" | contradicted | RC-05. CL-1635 covers the same claim for Fremont. | Use the $15 3-day trial. |
| 148 | 4.2 Blueprint 2 (Union City) | Direct inquiry: "Call or text Coach Naweed" | contradicted | RC-01; OC-04 (see row 88). | Club line. |
| 149 | 4.3 Blueprint 3 (kids) | Target intent: "children ages 4 to 11" | contradicted | OC-14: no age bands. KB-05 and `programs.ts` say "Ages 5 to 13" for the Youth Wrestling Academy, which is also an age band. | Use grades: Pre-K to 5th (`schedule.ts` row-01). |
| 150 | 4.3 Blueprint 3 (kids) | H1: "Kids Wrestling Classes (Ages 4 to 11)" | contradicted | OC-14. `kid-wrestling.astro` (line 11) also says "age 4 to 11." | Grades only. |
| 151 | 4.3 Blueprint 3 (kids) | Keywords: "youth wrestling near me" (8,530/mo, KD 0 to 6, CPC $3.22) | market-data | CL-1610. | Market data only. |
| 152 | 4.3 Blueprint 3 (kids) | "Taught at our Hayward Olympic training facility" | unsourced | No source calls the facility an Olympic training facility. | Drop "Olympic." |
| 153 | 4.3 Blueprint 3 (kids) | "Hospital-grade sanitized mats" | unsourced | KB-13 (client-confirmed): "Seamless Dollamur mats. Sanitized twice a day." "Hospital-grade" appears only in `ADR-20261102-facility-and-coaching-invariants.md` (line 13), the spec (route row 19), and CL-0645 (unverified). | Use "mats sanitized twice a day" (KB-13). |
| 154 | 4.3 Blueprint 3 (kids) | "Spectator seating" | unsourced | No source in KB, site data, or ledger. | Owner confirms, or drop. |
| 155 | 4.3 Blueprint 3 (kids) | Target offer: "Free Youth Mat Assessment and Trial Class" | contradicted | RC-05. CL-1636. | Use the $15 3-day trial. |
| 156 | 4.3 Blueprint 3 (kids) | Direct inquiry: "Call or text Coach Naweed" | contradicted | RC-01; OC-04 (see row 88). | Club line. |
| 157 | 4.4 Blueprint 4 (no-gi) | Target intent: adult grapplers "frustrated with guard-pulling culture" | unsourced | See row 29. | Drop. |
| 158 | 4.4 Blueprint 4 (no-gi) | Keywords: "wrestle jitsu" (880/mo, KD 3), "bjj takedowns", "wrestling for bjj", "no gi jiu jitsu near me" (4,200/mo, KD 3 to 14, CPC $2.75) | market-data | CL-1646 and CL-1613. | Market data only. |
| 159 | 4.4 Blueprint 4 (no-gi) | Positioning: "The missing link in your BJJ game: Olympic takedowns, scramble mastery, dominant top pressure" | unsourced | "Olympic" (see row 63) and the curriculum claims (rows 47 to 50). | Drop, or owner describes the class. |
| 160 | 4.4 Blueprint 4 (no-gi) | "Conveniently located for grapplers across Alameda County" | unsourced | County service is unsourced (row 109). | Drop "across Alameda County." |
| 161 | 4.4 Blueprint 4 (no-gi) | Target offer: "Free Grappler Mat Assessment" | contradicted | RC-05. KB Section C: no free offer that is not in Section A. | Use the $15 3-day trial, or the $15 drop-in (KB-09) for one visit. |
| 162 | 4.4 Blueprint 4 (no-gi) | No-gi and Wrestle-Jitsu program exists | verified | `schedule.ts` row-10 (Friday, 6:30 to 8:00 PM, "Boxing & no-gi jiu-jitsu"); KB-05 ("Adult Wrestling and Wrestle-Jitsu"). | Use the schedule.ts times. |
| 163 | 4.4 Blueprint 4 (no-gi) | Direct inquiry: "Call or text Coach Naweed" | contradicted | RC-01; OC-04 (see row 88). | Club line. |
| 164 | 4.5 Blueprint 5 (women's self-defense) | Audience: "women and teen girls in Hayward and the East Bay" | unsourced | KB-19: "Planned. Dates and pricing not set." "East Bay" is not in the served-city list (row 39). | Hold until KB-19 is resolved. |
| 165 | 4.5 Blueprint 5 (women's self-defense) | Positioning: "practical escape mechanics, positional control, and striking defense" | unsourced | No curriculum source (rows 47 to 50). | Owner describes the class. |
| 166 | 4.5 Blueprint 5 (women's self-defense) | "Co-led by experienced female coaches Louisa, Neha's Sister, and Ja Shia" | unsourced | See rows 78 and 79. | Owner names the coaches, or drop. |
| 167 | 4.5 Blueprint 5 (women's self-defense) | "Held at United Wrestling Club, 30139 Industrial Pkwy SW Ste C" | contradicted | KB-19 (planned, not confirmed). `routes.ts`: omitted (D4). | Do not state the class is held. Hold. |
| 168 | 4.5 Blueprint 5 (women's self-defense) | Target offer: "Free Trial Session via /register" | contradicted | RC-05. | Use the $15 3-day trial. |
| 169 | 4.5 Blueprint 5 (women's self-defense) | Keywords: "women's self defense classes hayward" (KD 0, CPC $3.50), "womens self defense east bay", "girls wrestling east bay" | market-data | CL-1614. | Market data only. |
| 170 | 4.5 Blueprint 5 (women's self-defense) | Direct inquiry: "Call or text Coach Naweed" | contradicted | RC-01; OC-04 (see row 88). | Club line. |
| 171 | Header (links) | All internal links and sources point to `united-wrestling-club.vercel.app`, and the silo rules say every link resolves to an active route | unsourced | The vercel.app host is not a public domain in any source. `ADR-20261105-public-preview-github-pages.md` makes GitHub Pages the staging host and says production moves to Vercel at launch. `jsonld-home.ts` uses `https://www.unitedwrestlingclub.com/`. Four of the linked location pages are omitted in `routes.ts` (rows 2, 125, 127), so the silo rule fails. | Use relative paths to built routes, with the production domain from `jsonld-home.ts`. |

## Counts by status

Counted from the Status column of the table above (171 rows).

| Status | Count |
|---|---|
| verified | 35 |
| contradicted | 41 |
| unsourced | 74 |
| market-data | 21 |
| Total | 171 |

Reading the counts: the contradicted rows cite these sources most often: `routes.ts` (route status), RC-05 (free trials), RC-01 with OC-04 (phone attribution), OC-14 (age bands), and OC-07 (1980 wording). Smaller groups cite LS-01, OC-01, RC-09, KB-10, KB-19, and the reviews rule in `facts.ts`. Most unsourced rows are drive times, curriculum detail, and competitor claims that no source in the repo supports.

## Owner-decision conflicts found outside the blueprint

These are in the repo now, not in the blueprint. They are listed for the owner and for the teammates who write copy.

- OC-11 (3,800 sq ft): `site/src/components/home/Safety.astro` (line 17) says "3,000 Sq Ft Seamless Dollamur Mats." KB-14 and the facility ADR say 3,000 too. The owner decided 3,800.
- OC-14 (no age bands): age bands appear in `site/src/data/programs.ts`, `site/src/data/facts.ts` (KB-05), `site/src/components/home/Programs.astro` ("Ages 5 to 13," "Ages 14 to 18," "Ages 18+"), `site/src/components/forms/TrialForm.astro` (lines 37 and 38), `site/src/components/forms/ReviewForm.astro` (lines 34 and 35), `site/src/data/nav.ts` (footer), `site/src/pages/classes/kid-wrestling.astro` (line 11, "age 4 to 11"), and `site/src/components/pages/info/faqItems.ts` (line 12, "a minimum age of 4-5 years").
- OC-01 ($139.99 is one tier, not the price): `site/src/data/nav.ts` (line 16, "Pricing ($139.99/mo)"), `site/src/components/home/Hero.astro` (line 24), `site/src/components/home/Pricing.astro` (line 35, a $139.99 headline), `site/src/data/facts.ts` (membership), and `site/src/data/jsonld-home.ts` (makesOffer 139.99).
- LS-01 (4-Day Kids): `site/src/pages/pricing.astro` (4 Day Kids, $139.99, Monday to Thursday) and `kid-wrestling.astro` (line 27). The decision says the pricing copy must be fixed to match the schedule.
- RC-05 (no free trial): `site/src/components/pages/info/faqItems.ts` (line 9) asks "Do you offer free trial sessions?" and answers "Yes." The owner's naweed questions (item 2) quote the same FAQ.
- OC-02 (add the Saturday gi row): `site/src/data/schedule.ts` (row-11) keeps the 8:00 to 10:00 AM gi row marked pending. The file's own comment says the list component hides it unless `showPending` is set. The homepage `Schedule.astro` (line 48) shows it. The decision says the KB should add the row.
- RC-09 (endpoints): `site/src/components/forms/TrialForm.astro` (line 18) posts to `mkjjyyep`. RC-09 says `mkjjyyep` is not live. The contact endpoint `xyyavaaj` does not appear anywhere in `site/src`. `ContactForm.astro` has no endpoint in the source.
- Naweed's questions (item 6) say the live About page reads "Silver Medal" for Karim. OC-08 requires correction to bronze. The repo's `Coaches.astro` already says bronze. The live page is not in the repo.
- Not an owner decision, but KB Section C applies: `site/src/pages/classes/gi-jiu-jitsu.astro` (lines 7, 11, 15) and `nogi-jiu-jitsu.astro` (line 16) describe instructors as black belts. KB-16 does not list those credentials.

## Sources

- `discovery/market/local_seo/top_10_programmatic_lps.md`: all sections (1, 2.1 to 2.8, 3, 4.1 to 4.5, 5, 6).
- `discovery/ledger/decisions.json`: read in full (OC-01, OC-02, OC-03, OC-04, OC-06, OC-07, OC-08, OC-09, OC-11, OC-14, RC-01, RC-05, RC-08, RC-09, RC-13, LS-01).
- `discovery/ledger/claims.json`: CL-1603 to CL-1656 (the claims extracted from this blueprint), and CL-0645, CL-0650, CL-1106, CL-1111, CL-1113, CL-1118, CL-1249, CL-1558, CL-1559, CL-1562, CL-1625, CL-1637, CL-1647 to CL-1650. Status counts: 2,608 entries; 0 `verified`.
- `discovery/knowledge_base/uwc_kb_v1.md`: KB-01, KB-02, KB-05, KB-06, KB-07, KB-08, KB-09, KB-10, KB-13, KB-14, KB-15, KB-16, KB-17, KB-19, KB-21, KB-22, KB-23, Section B.9, Section C, open conflicts OC-01 to OC-14.
- `discovery/site/website_rebuild_spec.md`, `discovery/site/forms_map_full_sitemap.md`, `discovery/client/naweed_discovery_questions.md`.
- `discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md`, `discovery/decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md`.
- `discovery/market/local_seo_keyword_reroute_map.md` (OpenSEO project id, line 14).
- `site/src/data/`: `facts.ts`, `faqs.ts`, `programs.ts`, `schedule.ts`, `reviews.ts`, `routes.ts`, `jsonld-home.ts`, `nav.ts`.
- `site/src/pages/`: `pricing.astro`, `register.astro`, `classes/kid-wrestling.astro`, `classes/gi-jiu-jitsu.astro`, `classes/nogi-jiu-jitsu.astro`, `llms-full.txt.ts`.
- `site/src/components/`: `home/Coaches.astro`, `home/Programs.astro`, `home/Safety.astro`, `home/Pricing.astro`, `home/Hero.astro`, `home/Schedule.astro`, `forms/TrialForm.astro`, `forms/ContactForm.astro`, `forms/ReviewForm.astro`, `pages/info/faqItems.ts`, `pages/unlocks/SamboBody.astro`, `pages/about/CoFounder.astro`, `shell/SiteFooter.astro`.
