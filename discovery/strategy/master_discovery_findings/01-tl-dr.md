---
type: dossier
status: current
group: strategy
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/scratch/audits_baselines_synthesis.md", "discovery/strategy/executive_pitch_deck_copy.md", "discovery/scratch/brand_architecture_synthesis.md", "discovery/archive/snapshots/local_seo_audit.md", "discovery/market/local_seo/top_10_programmatic_lps.md", "discovery/market/alameda_county_local_footprint.md", "discovery/archive/snapshots/ai_readiness_audit.md", "discovery/strategy/commercial_and_financial_model_synthesis.md", "discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md", "discovery/decisions/ADR-20261102-concept-consolidation-and-v04-flagship.md", "discovery/brand/edc_motto_graphic_architecture.md", "discovery/decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md", "discovery/strategy/womens_self_defense_financial_model.md", "https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo", "discovery/decisions/ADR-20261102-branded-reviews-and-submission-engine.md", "discovery/client/naweed_discovery_questions.md", "discovery/decisions/ADR-20261106-astro-design-system.md"]
caveat: "partly superseded, see banner"
shard_of: "discovery/strategy/master_discovery_findings.md"
part: "1 of 3"
---

> Part 1 of 3 of [master_discovery_findings](../master_discovery_findings.md). Text is verbatim from the original; only links were rewritten.


# United Wrestling Club: Master Discovery Findings & Strategic Transformation Report

> **Status: Partly superseded (updated 2026-11-06).** Superseded 2026-11-08: no production host is connected (both Vercel projects were deleted 2026-11-07), and the site is not live. Old text: [archive](../../archive/stale-2026-11-08/master_discovery_findings.md). The v01, v03, and v04 concepts are archived under `../archive/legacy-site/`. Owner decisions from 2026-11-06 are recorded in `ledger/decisions.json`; where they differ from the text below, the decision wins. The sourced findings still apply.

**Prospect / Client:** Head Coach Naweed Zemaryalai & Founder Karim Zemaryalai  
**Facility:** 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544 | USA Wrestling RTC #513  
**Report Date:** November 2026  
**Compiled By:** Sprintz Growth & Technical Systems Architecture

---

> **Decision brief.** Superseded 2026-11-08: no production host is connected (both Vercel projects were deleted 2026-11-07), and the site is not live. Old text: [archive](../../archive/stale-2026-11-08/master_discovery_findings.md). Concept 02 (`v04/`) was the candidate direction and is now archived. Validate the operating facts and offers with the club; then run a measured, accessible acquisition system with reliable lead capture and a clear path into WrestlingIQ.
>
> **Evidence standard.** This report synthesizes discovery records captured in November 2026. Audit observations are point-in-time snapshots; rankings, review counts and prices can change. Funnel, churn, membership and revenue figures are planning estimates unless supported by club exports. Targets are scenarios, not forecasts or guarantees. ADRs record internal project decisions; they do not substitute for client confirmation of factual claims or commercial terms.

## TL;DR
- Superseded 2026-11-08: no production host is connected, and the site is not live. Old text: [archive](../../archive/stale-2026-11-08/master_discovery_findings.md). Concept 02 (v04) is archived. Operating facts and offers still need club validation.
- The initial server HTML has 0 readable words, and cold checkout routes to WrestlingIQ with an estimated 40% to 60% abandonment (a planning assumption).
- The discovery snapshot shows about 2,086 estimated organic visits per month and 368 ranked keywords; these are modeled estimates, not verified analytics.
- Facility and commercial figures (3,800 sq ft of mats, a 1:6 ratio, ~45 athletes, $6,299 MRR) are working baselines to confirm before public promises. The mat footprint is decided at 3,800 sq ft; the ratio is still open.
- Growth levers are seasonal paid-in-full loyalty promotions, women's self-defense and corporate clinics, a quarterly community day, and a branded reviews hub.

## Section 1: Executive Summary & Engagement Context

United Wrestling Club (UWC) has the ingredients of a distinctive Northern California combat-sports academy: an Olympic qualification lineage, a strong local reputation, a family-centered coaching environment and a physical training facility in Hayward. The mandate is to turn an underperforming digital presence into a highly effective regional acquisition and retention engine, with measurable improvements in discovery, inquiry capture, trial attendance and membership stability.

The core paradox is that the existing site presents very little readable content in its initial server response and directs cold prospects to an external registration flow before the club can reliably follow up. Discovery records attribute a 5.0-star Google rating to 42 reviews and identify founder Karim Zemaryalai as a 1980 Moscow Olympic qualifier. The 1980 Moscow Games were boycotted by many countries, so the qualification wording still needs review before it is standardized. The Ali Aliyev medal is bronze (owner decision, 2026-11-06). An empty initial HTML shell does **not** prove the site is wholly unindexed: discovery also reports organic rankings and traffic.

Four transformation pillars govern the proposed engagement:

1. **Fast, accessible web foundation:** semantic, pre-rendered content and a lightweight vanilla HTML/CSS/JavaScript experience with reduced media weight.
2. **First-party acquisition:** a prominent, simple trial intake that records an inquiry before a clearly explained handoff to WrestlingIQ, supported by timely follow-up.
3. **Local and AI discovery:** accurate business information, program and location content, structured data, credible citations and a first-party reviews destination across Alameda County.
4. **Retention and revenue resilience:** better onboarding, seasonal paid-in-full loyalty offers and carefully piloted complementary programs.

The recommended narrative is **Problem → Agitation → Solution**: the digital front door underrepresents a respected academy; slow mobile access and fragmented checkout compound lost opportunities; a clear, credible and measurable acquisition experience makes UWC's real-world strengths easier to discover and act on. The objective of regional leadership is an ambition, not a measured current conversion ranking. [Sources: audit synthesis](../../scratch/audits_baselines_synthesis.md), [pitch narrative](../executive_pitch_deck_copy.md), [brand synthesis](../../scratch/brand_architecture_synthesis.md).

## Section 2: Captured Performance & Commercial Baselines

### 2.1 Technical and performance

| Measure | Captured baseline | Interpretation / next measurement |
|---|---:|---|
| Mobile LCP | >6.5 seconds | Discovery estimate; establish a repeatable field and lab baseline by device and network. |
| Desktop LCP | ~4.2 seconds | Same validation requirement. |
| FCP | Delayed by client-side rendering and spinner; no reliable numeric value provided | Measure in seconds rather than infer a specific FCP from LCP. |
| Hero video | 17,722,787 bytes (~17.72 MB decimal) | Optimize delivery, poster, loading priority and motion preferences. |
| CSS | ~180 KB; 1,639 duplicate declarations reported | Audit bundle and remove redundant runtime styling. |
| Initial response | 0 readable words in the sampled server HTML | Pre-render essential page content; JavaScript-capable search engines may still render and index the site. |
| Discovery files | `robots.txt`, `sitemap.xml`, `llms.txt` and `llms-full.txt` returned 404 on the old site (Superseded 2026-11-08: no production host is connected, and the sitemap is empty while every page is noindex. Old text: [archive](../../archive/stale-2026-11-08/master_discovery_findings.md)) | Publish valid directives and sitemap; `llms.txt` is optional and does not guarantee AI discovery. A missing robots file does not itself block crawling. |

### 2.2 Funnel and conversion

| Measure | Discovery estimate | Action / qualification |
|---|---:|---|
| Website visitor → trial | ~1.5% | Define whether denominator is all sessions, users or organic visits; instrument end-to-end. |
| Trial → paid | ~35% | Define whether trial means claim, attendance or completed trial. |
| Missed inquiries | 10–18 per month | Estimate, not a verified call-log count; reconcile calls, forms and messages. |
| Cold checkout abandonment | 40%–60% | Planning assumption; no observed step-by-step checkout cohort supplied. |
| Current flow | External WrestlingIQ sign-up and Formspree endpoints | Test endpoints, ownership, notifications and follow-up before migration. |

Trial offer: the live site advertises a $15 three-day trial on the homepage and a $15 drop-in on pricing; the FAQ mentions free trial sessions in general terms. The free two-class and free one-day passes are not live. Confirm eligibility before changing all entry points. The source's ~16 monthly trial claims and ~0.8% visitor-to-lead estimate do not reconcile directly with ~1.5% visitor-to-trial without different denominators or periods; treat these as separate unvalidated estimates.

### 2.3 Organic SEO and search footprint

The discovery OpenSEO snapshot reports **2,086 estimated organic visits per month** and **368 ranked keywords**. These are modeled tool estimates, not verified analytics sessions. Positions depend on geography, device and date; search volumes and CPCs are market-level estimates, not club revenue.

| Striking-distance query | Position | Estimated monthly searches | CPC |
|---|---:|---:|---:|
| wrestling gym | 6 | 2,900 | $1.89 |
| wrestling classes near me | 9 | 1,900 | $2.31 |
| wrestling near me | 11 | 9,900 | $1.56 |
| wrestling club | 12 | 5,400 | $2.55 |
| wrestling gyms near me | 13 | 3,600 | $1.37 |
| wrestling clubs near me | 14 | 8,100 | $1.40 |
| youth wrestling near me | 17 | 6,600 | $3.22 |
| wrestling academy near me | 22 | 5,400 | $1.45 |

Prioritize useful, distinct program and service-area pages for Hayward, Union City, Fremont, Newark, Castro Valley and San Leandro; avoid duplicative city pages or implying facilities in locations UWC does not operate. Connect pages to relevant programs, real travel context, verified coaching and a clear trial action. [Sources: local SEO audit](../../archive/snapshots/local_seo_audit.md), [landing-page strategy](../../market/local_seo/top_10_programmatic_lps.md).

### 2.4 Local pack and reputation

| Observation | Discovery snapshot | Qualification |
|---|---|---|
| Google reputation | 5.0★ / 42 reviews | Point-in-time reported Google count; refresh before publication. “Verified” is a source characterization, not independent verification of every reviewer. |
| Hayward / central Alameda | #1 for sampled “Wrestling Club” query | Query and location specific. |
| Tri-City | #1 in sampled searches | The “vacuum” finding is a research hypothesis, not proof no relevant competitors exist. |
| Castro Valley / San Leandro | Top 3 | Sampled results; validate with a geographic grid. |
| Bay Area regional pack | #2 in sampled comparison | Not a permanent or universal regional ranking. |
| Oakland / north county | Unranked in sampled results | Opportunity for relevant coverage and local authority. |

The live site and GBP use **(510) 303-4869** as the club phone (owner decision, 2026-11-06). Facebook still lists **[retired number]**; retire it there and standardize name, address, phone, HTTPS destination and hours across profiles. Discovery reports GBP name variation (“United Wrestling Clubs”). [Source: Alameda footprint](../../market/alameda_county_local_footprint.md).

### 2.5 AI citation and GEO visibility

The discovery audit assigns **18/100** for AI readiness and reports **zero citations in sampled prompts** across ChatGPT, Perplexity, Claude and Google AI Overviews. The score is an internal audit rubric, not an industry-standard measure; the result does not establish zero citations for every query or session. Publish accessible factual content and corroborated entity information, then repeat a documented prompt sample. Structured data and optional AI-facing files can assist comprehension but do not guarantee citations. [Source: AI readiness audit](../../archive/snapshots/ai_readiness_audit.md).

### 2.6 Commercial baseline and plan inventory

| Metric | Working baseline | Basis / limitation |
|---|---:|---|
| Active recurring athletes | ~45 | Requires WrestlingIQ active-member export and plan mix. |
| MRR / annualized membership run rate | ~$6,299 / ~$75,588 | $6,299 × 12; implied blended revenue ~$139.98 per member, subject to discounts and mix. |
| Monthly churn | ~7.5% | Estimate; establish starting members, cancellations, freezes and billing period. |
| Core monthly price | $139.99 | Adult, middle/high school, and 4-day kids rate. Not one price: the live site lists $89.99 to $150 per program (owner decision, 2026-11-06). |
| Indicative lifetime and gross revenue LTV | 13.33 months / ~$1,867 | Simple reciprocal churn model: 1 / 0.075 × $139.99; excludes variable costs, acquisition costs, discounting and changing churn. Source also uses an eight-month tenure assumption; both cannot be the same model. |

| WrestlingIQ plan / session | Discovery price | Schedule or issue to validate |
|---|---:|---|
| 3-Day Trial #6327 | $15 | Trial terms and consecutive-practice requirement. |
| Drop-In #2664 | $15 / day | Single visit and Saturday eligibility. |
| Kids 2-Day #1087 | $89.99 / month | Monday / Wednesday. |
| Kids 4-Day #4981 | $139.99 / month | Monday–Thursday is not on the live schedule, which governs (owner decision, 2026-11-06). Fix the pricing copy or the schedule. |
| Middle / High School #2286 | $139.99 / month | Monday–Saturday access. |
| Competition Youth #3574 | $150 / month | Pre-K–12, Monday–Saturday; travel coaching terms. |
| Adult / College / High School #1084 | $139.99 / month | Monday–Saturday access and program scope. |
| BJJ 3-Day #9536 | $100 / month | Days, instructor and curriculum. |

The records propose a 15% additional-household discount, no initiation or cancellation penalty, and seven days' notice. The seven-day notice is decided (owner, 2026-11-06). The household discount is not on the public price list and stays on hold. The free two-class assessment is not offered; the live trial is the $15 three-day pass. Treat the discount and the remaining terms as **pending club sign-off** until verified in billing and policy. [Source: commercial synthesis](../commercial_and_financial_model_synthesis.md).

### 2.7 Physical and operational invariants

The facility ADR specifies **3,800 sq ft of Dollamur competition mats** (owner decision, 2026-11-06, replacing the ADR's 3,000 sq ft), a **1:6 coach-to-athlete ratio** (still open), **twice-daily hospital-grade sanitization**, and **USA Wrestling RTC #513**. It rejects the earlier 5,000 sq ft claim. These are project content standards; confirm mat measurement, whether the ratio applies to every session, cleaning product and protocol, and current sanctioning with the club before making unconditional public promises. Confirm safe class capacity separately. [Source: facility ADR](../../decisions/ADR-20261102-facility-and-coaching-invariants.md).
