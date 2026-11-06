---
status: partly-superseded
group: strategy
---

# United Wrestling Club: Master Discovery Findings & Strategic Transformation Report

> **Status: Partly superseded.** Written before the Astro build. Where it names the v04 flagship or sitemap counts, `sitemap_status.md` and `decisions/ADR-20261106-astro-design-system.md` are current. The sourced findings still apply.

**Prospect / Client:** Head Coach Naweed Zemaryalai & Founder Karim Zemaryalai  
**Facility:** 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544 | USA Wrestling RTC #513  
**Report Date:** November 2026  
**Compiled By:** Sprintz Growth & Technical Systems Architecture

---

> **Decision brief.** Present Concept 02 (`v04/`) as the recommended direction; validate the operating facts and offers with the club; then launch a measured, accessible acquisition system with reliable lead capture and a clear path into WrestlingIQ.
>
> **Evidence standard.** This report synthesizes discovery records captured in November 2026. Audit observations are point-in-time snapshots; rankings, review counts and prices can change. Funnel, churn, membership and revenue figures are planning estimates unless supported by club exports. Targets are scenarios, not forecasts or guarantees. ADRs record internal project decisions; they do not substitute for client confirmation of factual claims or commercial terms.

## Section 1: Executive Summary & Engagement Context

United Wrestling Club (UWC) has the ingredients of a distinctive Northern California combat-sports academy: an Olympic qualification lineage, a strong local reputation, a family-centered coaching environment and a physical training facility in Hayward. The mandate is to turn an underperforming digital presence into a highly effective regional acquisition and retention engine, with measurable improvements in discovery, inquiry capture, trial attendance and membership stability.

The core paradox is that the existing site presents very little readable content in its initial server response and directs cold prospects to an external registration flow before the club can reliably follow up. Discovery records attribute a 5.0-star Google rating to 42 reviews and identify founder Karim Zemaryalai as a 1980 Moscow Olympic qualifier. His precise Olympic participation and tournament medal details should be confirmed before public claims are standardized. An empty initial HTML shell does **not** prove the site is wholly unindexed: discovery also reports organic rankings and traffic.

Four transformation pillars govern the proposed engagement:

1. **Fast, accessible web foundation:** semantic, pre-rendered content and a lightweight vanilla HTML/CSS/JavaScript experience with reduced media weight.
2. **First-party acquisition:** a prominent, simple trial intake that records an inquiry before a clearly explained handoff to WrestlingIQ, supported by timely follow-up.
3. **Local and AI discovery:** accurate business information, program and location content, structured data, credible citations and a first-party reviews destination across Alameda County.
4. **Retention and revenue resilience:** better onboarding, seasonal paid-in-full loyalty offers and carefully piloted complementary programs.

The recommended narrative is **Problem → Agitation → Solution**: the digital front door underrepresents a respected academy; slow mobile access and fragmented checkout compound lost opportunities; a clear, credible and measurable acquisition experience makes UWC's real-world strengths easier to discover and act on. The objective of regional leadership is an ambition, not a measured current conversion ranking. [Sources: audit synthesis](../scratch/audits_baselines_synthesis.md), [pitch narrative](executive_pitch_deck_copy.md), [brand synthesis](../scratch/brand_architecture_synthesis.md).

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
| Discovery files | `robots.txt`, `sitemap.xml`, `llms.txt` and `llms-full.txt` returned 404 in the audit | Publish valid directives and sitemap; `llms.txt` is optional and does not guarantee AI discovery. A missing robots file does not itself block crawling. |

### 2.2 Funnel and conversion

| Measure | Discovery estimate | Action / qualification |
|---|---:|---|
| Website visitor → trial | ~1.5% | Define whether denominator is all sessions, users or organic visits; instrument end-to-end. |
| Trial → paid | ~35% | Define whether trial means claim, attendance or completed trial. |
| Missed inquiries | 10–18 per month | Estimate, not a verified call-log count; reconcile calls, forms and messages. |
| Cold checkout abandonment | 40%–60% | Planning assumption; no observed step-by-step checkout cohort supplied. |
| Current flow | External WrestlingIQ sign-up and Formspree endpoints | Test endpoints, ownership, notifications and follow-up before migration. |

Trial messaging conflicts: the homepage advertises a $15 three-day trial, pricing a $15 drop-in, and the FAQ free trials. Resolve the actual offer and eligibility before changing all entry points. The source's ~16 monthly trial claims and ~0.8% visitor-to-lead estimate do not reconcile directly with ~1.5% visitor-to-trial without different denominators or periods; treat these as separate unvalidated estimates.

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

Prioritize useful, distinct program and service-area pages for Hayward, Union City, Fremont, Newark, Castro Valley and San Leandro; avoid duplicative city pages or implying facilities in locations UWC does not operate. Connect pages to relevant programs, real travel context, verified coaching and a clear trial action. [Sources: local SEO audit](../archive/snapshots/local_seo_audit.md), [landing-page strategy](../market/local_seo/top_10_programmatic_lps.md).

### 2.4 Local pack and reputation

| Observation | Discovery snapshot | Qualification |
|---|---|---|
| Google reputation | 5.0★ / 42 reviews | Point-in-time reported Google count; refresh before publication. “Verified” is a source characterization, not independent verification of every reviewer. |
| Hayward / central Alameda | #1 for sampled “Wrestling Club” query | Query and location specific. |
| Tri-City | #1 in sampled searches | The “vacuum” finding is a research hypothesis, not proof no relevant competitors exist. |
| Castro Valley / San Leandro | Top 3 | Sampled results; validate with a geographic grid. |
| Bay Area regional pack | #2 in sampled comparison | Not a permanent or universal regional ranking. |
| Oakland / north county | Unranked in sampled results | Opportunity for relevant coverage and local authority. |

The website and GBP listed **(510) 303-4869** while Facebook listed **[retired number]**. Confirm the primary call/SMS number and standardize name, address, phone, HTTPS destination and hours across profiles. Discovery reports GBP name variation (“United Wrestling Clubs”). [Source: Alameda footprint](../market/alameda_county_local_footprint.md).

### 2.5 AI citation and GEO visibility

The discovery audit assigns **18/100** for AI readiness and reports **zero citations in sampled prompts** across ChatGPT, Perplexity, Claude and Google AI Overviews. The score is an internal audit rubric, not an industry-standard measure; the result does not establish zero citations for every query or session. Publish accessible factual content and corroborated entity information, then repeat a documented prompt sample. Structured data and optional AI-facing files can assist comprehension but do not guarantee citations. [Source: AI readiness audit](../archive/snapshots/ai_readiness_audit.md).

### 2.6 Commercial baseline and plan inventory

| Metric | Working baseline | Basis / limitation |
|---|---:|---|
| Active recurring athletes | ~45 | Requires WrestlingIQ active-member export and plan mix. |
| MRR / annualized membership run rate | ~$6,299 / ~$75,588 | $6,299 × 12; implied blended revenue ~$139.98 per member, subject to discounts and mix. |
| Monthly churn | ~7.5% | Estimate; establish starting members, cancellations, freezes and billing period. |
| Core monthly price | $139.99 | One core price; not every plan costs this amount. |
| Indicative lifetime and gross revenue LTV | 13.33 months / ~$1,867 | Simple reciprocal churn model: 1 / 0.075 × $139.99; excludes variable costs, acquisition costs, discounting and changing churn. Source also uses an eight-month tenure assumption; both cannot be the same model. |

| WrestlingIQ plan / session | Discovery price | Schedule or issue to validate |
|---|---:|---|
| 3-Day Trial #6327 | $15 | Trial terms and consecutive-practice requirement. |
| Drop-In #2664 | $15 / day | Single visit and Saturday eligibility. |
| Kids 2-Day #1087 | $89.99 / month | Monday / Wednesday. |
| Kids 4-Day #4981 | $139.99 / month | Monday–Thursday offer conflicts with published schedule. |
| Middle / High School #2286 | $139.99 / month | Monday–Saturday access. |
| Competition Youth #3574 | $150 / month | Pre-K–12, Monday–Saturday; travel coaching terms. |
| Adult / College / High School #1084 | $139.99 / month | Monday–Saturday access and program scope. |
| BJJ 3-Day #9536 | $100 / month | Days, instructor and curriculum. |

The records propose a 15% additional-household discount, no initiation or cancellation penalty, seven days' notice and potentially a free two-class assessment. Although the commercial ADR records an approved direction, the discovery questions still request coach confirmation. Treat these terms as **pending club sign-off** until verified in billing and policy. [Source: commercial synthesis](commercial_and_financial_model_synthesis.md).

### 2.7 Physical and operational invariants

The facility ADR specifies **3,000 sq ft of Dollamur competition mats**, a **1:6 coach-to-athlete ratio**, **twice-daily hospital-grade sanitization**, and **USA Wrestling RTC #513**. It rejects the earlier 5,000 sq ft claim. These are project content standards; confirm mat measurement, whether the ratio applies to every session, cleaning product and protocol, and current sanctioning with the club before making unconditional public promises. Confirm safe class capacity separately. [Source: facility ADR](../decisions/ADR-20261102-facility-and-coaching-invariants.md).

## Section 3: Root-Cause Problem Deconstruction & Impact

| Failure point | Problem | Agitation / business impact | Solution and proof of success |
|---|---|---|---|
| **1. Technical architecture and visibility** | The sampled initial HTML is a spinner/shell with no readable words; discovery files returned 404. | Users and crawlers relying on initial HTML encounter weak content; rendering and discovery depend on later execution. Existing organic rankings show this is not total invisibility. | Serve semantic content on initial response, valid sitemap and robots directives, canonical URLs and entity data. Verify live HTTP responses, indexing and Search Console coverage. |
| **2. Mobile experience** | Reported >6.5-second mobile LCP, 17.72 MB video and a difficult seven-column schedule with duplicated slots. | Slow first impressions and hard-to-read class information add friction; the size alone does not prove exactly which resource caused LCP. | Use a compressed responsive video, visible poster, reduced-motion fallback and mobile day cards; validate real LCP, layout and actual schedule with coaches. |
| **3. WrestlingIQ handoff** | Cold visitors are redirected to third-party registration before a reliable first-party contact is captured. | Follow-up opportunities are lost; 40%–60% abandonment is a hypothesis until funnel events are measured. | Capture consented contact details with clear offer and confirmation; persist the lead, then offer the WrestlingIQ handoff. Measure modal start, successful save, outbound click, waiver and paid enrollment. |
| **4. Lineage and brand** | Credentials and social video proof are difficult to find in static copy or external feeds. | Families cannot quickly evaluate coaching credibility or the atmosphere; the online identity does not fully communicate the club's strengths. | Tell the founder and coaching story with verified credentials, documentary imagery, permissions and accessible captions. Confirm whether Karim qualified for or competed at Moscow, and verify Ali Aliyev medal. |
| **5. Seasonality** | The model assumes 7.5% monthly churn and vulnerability around November and May transitions. | Cash flow and staffing can become volatile; the cited 20%–30% seasonal swings need historical billing evidence. | Analyze 24 months of cohorts, offer optional PIF before the relevant season, track renewals and recognize prepaid income over service periods. |

## Section 4: Proposed Redesign Architecture & Concept Parity

### 4.1 Three presentation concepts

| Concept | Directory | Visual direction | Decision |
|---|---|---|---|
| **01 — The Clean Baseline** | `v01/` | High-contrast tournament grit, directional scrim and 1080p hero treatment. | Retain as a clear comparison. Confirm camera-original quality; upscaling is not a 1080p source. |
| **02 — The Olympic Sanctuary** | `v04/` | Dark, restrained surfaces, open video clearance, floating navigation/action pill and balanced coaching dossier. | **Recommended flagship**, subject to client selection and production acceptance. |
| **03 — The Conversion Engine** | `v03/` | Editorial typography, Google reputation badge, italic pull-quotes and explicit conversion hierarchy. | Retain as the editorial comparison. |

ADR 002 removes `v02/` from the presentation because of routing and design inconsistency. The requirement is **100% information and functional parity**, not visual uniformity. The matrix below is the acceptance baseline specified in the ADR, not a claim that every interaction was independently tested for this report.

| # | Required component and acceptance criterion | v01 | v04 | v03 |
|---:|---|:---:|:---:|:---:|
| 1 | Sanction bar: accurate USA Wrestling RTC #513 | Required | Required | Required |
| 2 | Responsive header: navigation, confirmed phone, pass CTA | Required | Required | Required |
| 3 | Hero: accessible video/poster, primary action and meaningful text | Required | Required | Required |
| 4 | Authority banner: review snapshot, coaching ratio, cleaning and 3,000 sq ft | Required | Required | Required |
| 5 | Program matrix: youth, varsity, adult and open mat | Required | Required | Required |
| 6 | EDC creed: Excellence / Discipline / Champions | Required | Required | Required |
| 7 | Coaching dossier: two principal and four secondary coaches | Required | Required | Required |
| 8 | Attributed, permissioned testimonials and reviews link | Required | Required | Required |
| 9 | Pricing: $15 three-day pass, $139.99 core and $15 drop-in, subject to confirmation | Required | Required | Required |
| 10 | Parent safety and single-open FAQ | Required | Required | Required |
| 11 | Location, accurate schedule and facility information | Required | Required | Required |
| 12 | Pre-footer action and complete semantic footer | Required | Required | Required |

Test each row in all three concepts on desktop and mobile, including keyboard interaction, factual copy, CTA destination and lead persistence; record pass/fail before presenting parity as verified. [Source: concept ADR](../decisions/ADR-20261102-concept-consolidation-and-v04-flagship.md).

### 4.2 Technical blueprint and acceptance

- **Delivery:** pre-render meaningful HTML; use vanilla CSS and JavaScript without runtime framework dependencies. Inventory any external fonts, embeds, analytics and services separately: zero JavaScript framework dependencies does not mean zero external services.
- **Performance:** compress and defer video appropriately, preload the actual LCP poster where justified, serve responsive images and test on representative devices. A source projects <1.4-second LCP; this is a target requiring live measurement, not an established result.
- **Accessibility:** target WCAG AAA contrast where feasible; measure each foreground/background and state, including text on video. AAA contrast alone does not establish full WCAG conformance. Provide keyboard access, visible focus, labels, captions and reduced-motion support.
- **Structured data:** use a valid JSON-LD `@graph` for the business and verified people/offers, with consistent IDs and canonical NAP. Mark up only visible, accurate content; review rich-result eligibility and platform policies before publishing aggregate ratings. Schema does not guarantee a rich result.
- **Interactions:** use native `<details name="uwc-faq">` for single-open FAQ behavior with an appropriate compatibility fallback, and a native `<dialog>` or equivalent accessible modal with focus management, escape/close and a no-JavaScript route.
- **Lead workflow:** a one-click CTA **opens** the form; completing it still requires input and a successful save. Capture the minimum necessary fields, disclose the offer and handoff, validate, show confirmation and recover from network or clipboard failure. Verify backend delivery, consent, retention, notifications and WrestlingIQ integration; do not assume prefill or automated SMS exists.

### 4.3 Coaching and brand system

The facility ADR identifies a six-person coaching bench. Confirm current roles, credentials and permission to publish with each person:

| Coach | Discovery-record role and credential |
|---|---|
| Karim Zemaryalai | Founder; 1980 Moscow Olympic qualifier and Ali Aliyev tournament medalist. |
| Naweed Zemaryalai | Head coach; SFSU kinesiology degree, Chabot coaching and Farid Basharat corner experience. |
| Rashad Rahimi | Co-founder / coach; Olympic qualifier and Asian Games silver medalist. |
| Sandeep Singh Gosal | Youth competition coach; three-time California Greco-Roman state champion. |
| Steve Siroy | Senior advisory coach; Chabot coaching and wrestling hall-of-fame recognition; confirm exact institution/title. |
| Farid Siddiq | Striking and boxing director; collegiate athlete and combat footwork coach. |

The brand position combines **industrial utility, documentary honesty and welcoming community**. Rogue informs clear equipment specifications and durability; Milwaukee suggests practical craft; Leica informs restrained, authentic photography. Darc Sport offers a model for collective identity and substantial team gear; Gymshark informs mobile convenience. Adapt these references to UWC rather than reproduce another brand or use intimidating imagery that undermines family trust.

The **EDC creed** translates *Excellence / Discipline / Champions* into repeatable editorial and merchandise language. Three existing vector treatments provide a choice: **Tri-block** (clear modular wordmark), **Brutalist Contour** (industrial outline) and **Combat Octagon** (compact tactical badge). Select one primary system and retain legible monochrome and small-size variants. [Sources: brand synthesis](../scratch/brand_architecture_synthesis.md), [EDC architecture](../brand/edc_motto_graphic_architecture.md).

## Section 5: Strategic Growth Levers & Revenue Enhancements

### Lever 1 — Targeted seasonal PIF loyalty promotions

Offer optional six- and twelve-month prepaid renewals to eligible existing, high-attendance members **30–45 days before** the November and May transition windows. The source proposes pay five months for six or pay ten for twelve, with a custom team item; 400 GSM gear is a creative option, with garment and unit cost still to be confirmed. Preserve transparent month-to-month entry and avoid public discounting as the ADR directs.

At $139.99, the illustrative six-month price is **$699.95** and the twelve-month price **$1,399.90**, before gear and processing. Each provides a 16.7% tuition discount against the full term; the annual effective rate is ~$116.66/month. Ten annual purchases generate **$13,999 cash upfront**, not $13,999 of incremental revenue. Discount, gear, refunds, taxes, card fees, existing member cannibalization and recognition over the service period must be modeled. The source's $15,000–$25,000 cash-per-cycle range is an unvalidated participation scenario. Confirm eligibility, refund/freeze rules, dates, capacity and margin floor before launch. [Source: commercial ADR](../decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md).

### Lever 2 — Women's self-defense and corporate clinics

Pilot a respectful, practical program with qualified instructors, insurance and mat availability confirmed. Louisa, Neha's sister and Ja Shia are potential collaborators, not confirmed staff or partners. The model proposes four connected tiers:

| Tier | Proposed offer | Illustrative gross | Club economics / open decisions |
|---|---|---:|---|
| 1 | 20-person introductory workshop × $49 | $980 | At an assumed $950 after processing, 40% to UWC = $380 and 60% instructor pool = $570, before other costs. |
| 2 | Six-week cohort, 16 × $199 | $3,184 | At assumed $3,090 after processing, UWC share $1,236 and instructor pool $1,854, before gear and other costs. |
| 3 | Corporate clinic | $1,000–$1,500 / booking | Proposed 30% club / 70% instructor split: $300–$450 to club before expenses if applied to gross. |
| 4 | Membership tuition rollover | Five members × $139.99 × 12 = $8,399.40 annualized dues | A $199 credit each is $995 of future tuition, plus proposed $250 total instructor bounty; do not treat gross run rate as profit or guarantee 12-month retention. |

The requested **$4,200–$8,400 per six-week cycle** is an illustrative combined-program revenue goal, not the revenue of the stated full 16-person cohort alone. For example, one full cohort plus one $1,200 corporate clinic yields **$4,384 gross** before costs and rollover credits. The upper end requires additional bookings or different attendance/pricing. A **70%+ club margin is not supported** by the proposed 40%/30% club shares; calculate contribution after instructor shares, processing, insurance, gear, credits and acquisition. Corporate leads named in discovery are prospects, not confirmed buyers. [Source: women's financial model](womens_self_defense_financial_model.md).

### Lever 3 — Quarterly community day and BJJ mixer

Pilot a Saturday open mat with youth and adult introductions, local BJJ cross-training, a transparent capacity limit and simple RSVP-to-trial follow-up. Make the introductory event free if chosen by the club; monetize optional ongoing drop-ins, memberships or future paid events without double-counting them. Track attendance, partner source, trial claims, attendance and paid joins. A referral loop is a hypothesis to test, not guaranteed virality. Confirm instructor coverage, insurance, media permissions, partner participation and schedule.

### Lever 4 — Branded reviews hub and assisted submissions

Create a crawlable `/reviews/` page with clearly attributed, permissioned, dated reviews, platform links and category filters. The legacy `/submit-review/` route currently has a client-side redirect in the ADR; prefer a permanent server-side redirect when hosting permits and test both routes. Provide a user-initiated **copy and open Google** action to the [Google review form](https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo), with manual-copy and popup-blocker fallback. The reviewer controls the wording, rating and final submission; this does not automatically submit a five-star review. Invite honest feedback without rating-based gating or incentives contingent on positive reviews, and verify current platform policies before deployment. Do not publish an unsupported “100% recommendation” claim or stale review counts. [Source: reviews ADR](../decisions/ADR-20261102-branded-reviews-and-submission-engine.md).

## Section 6: Financial KPI Growth Model & Revenue Projections

The following is a **scenario at the stated horizon**, using the source's 45 / 75 / 120 member targets and approximately $140 blended monthly dues. Annualized run rate is the end-state monthly rate × 12, not cumulative cash collected over the intervening year. Variance is 12-month target minus baseline; percentage-point (pp) changes apply to rates. Auxiliary amounts are source targets and must exclude prepaid membership principal already counted in MRR/ARR to avoid double counting.

| Metric | Current baseline | 90-day target | 12-month target | 12-month variance vs baseline |
|---|---:|---:|---:|---:|
| Active recurring athletes | 45 | 75 | 120 | +75 / +166.7% |
| MRR | $6,299 | $10,500 | $16,800 | +$10,501 / +166.7% |
| Membership ARR | $75,588 | $126,000 | $201,600 | +$126,012 / +166.7% |
| Monthly churn | 7.5% | 4.5% | 3.2% | −4.3 pp / −57.3% relative |
| Average lifetime, reciprocal-churn model | 13.33 months | 22.22 months | 31.25 months | +17.92 months / +134.4% |
| Gross revenue LTV, same model | ~$1,867 | ~$3,111 | ~$4,375 | +~$2,508 / +134.4% |
| New trial registrations / month | ~16 | 45 | 75 | +59 / +368.8% |
| Trial-to-member conversion | ~35% | Not specified | Not specified | Not calculable on a consistent definition |
| Website visitor-to-trial rate | ~1.5% | Not specified | Not specified | Not calculable on a consistent definition |
| Auxiliary revenue / month | $0 assumed | $1,250 | $2,800 | +$2,800 / % not meaningful from zero |
| Total annualized gross run rate | $75,588 | $141,000 | $235,200 | +$159,612 / +211.2% |

**Reconciliation and definitions.** The source separately proposes visitor-to-*lead* rates of 0.8%, 3.5% and 4.8%; trial show-up rates of 45%, 75% and 82%; and show-up-to-member rates of 40%, 60% and 68%. These are not interchangeable with visitor-to-trial or trial-to-member. Multiplying the latter two gives implied claim-to-member conversion of **18%, 45% and 55.8%**, respectively, which conflicts with the separately quoted 35% baseline. Under a single denominator, 2,086 × 1.5% implies ~31 trials, not ~16; 3,200 × 3.5% implies 112 leads, not 45; 5,000 × 4.8% implies 240 leads, not 75. Different traffic sources and time periods may explain the differences, but no bridge is supplied. Instrument and recalibrate rather than silently merge the series.

**Unit economics.** The reciprocal-churn LTV is gross tuition revenue, assumes constant churn and ARPU indefinitely, and excludes discounts, contribution margin, acquisition costs and survival differences. The source also assumes 8 / 12 / 16 months and corresponding $1,120 / $1,680 / $2,240 gross LTV. Those are separate planning assumptions, not the result of the table's churn rates. Use cohort survival and contribution margin once data is available.

**Roster feasibility.** Starting at 45, reaching 75 in three months needs 30 net adds. With 7.5% monthly churn applied to a growing roster, roughly 42 gross additions are needed over three months if spread evenly; at 4.5%, roughly 38. Exact results depend on timing and cohort retention. At month 12, 120 members and 3.2% monthly churn imply ~3.8 cancellations per month at that roster size before new joins. Validate mat capacity, coaching, actual enrollment and demand before treating the targets as operational commitments.

**Sensitivity.** At 120 athletes, each $10 change in blended monthly revenue changes annualized dues by **$14,400**. At 7.5% churn and $139.99 ARPU, simple gross LTV is ~$1,867; at 10% it is ~$1,400, and at 5% ~$2,800. On the six-week cohort, 12 rather than 16 paid seats at $199 lowers gross from $3,184 to $2,388 before costs. Prepayments accelerate cash but replace future collections; neither PIF cash nor tuition rollovers should be added again to membership ARR. The baseline of zero auxiliary revenue is a modeling assumption, not proof that clinics currently generate no income. [Source: commercial model](commercial_and_financial_model_synthesis.md).

## Section 7: Binding Architectural Decision Records

These four records are marked **Approved** in the discovery repository and bind the project design unless superseded. The fourth record's actual filename is `ADR-20261102-commercial-pricing-and-pif-promotions.md`; “seasonal PIF loyalty architecture” is its subject, not a separate file. Client approval, implementation and factual verification remain distinct from the ADR status.

| ADR | Decision and rationale | Execution guardrails |
|---|---|---|
| **001 — [Facility and coaching invariants](../decisions/ADR-20261102-facility-and-coaching-invariants.md)** | Standardize 3,000 sq ft, 1:6, 2× daily sanitation, address, RTC #513 and six-person bench; retire 5,000 sq ft and avoid repetitive lineage claims. | Confirm universal applicability, current credentials, sanctioning and permissions; propagate corrected facts to copy, metadata and schema. |
| **002 — [Concept consolidation and v04 flagship](../decisions/ADR-20261102-concept-consolidation-and-v04-flagship.md)** | Retain v01, v04 and v03; recommend v04 as Concept 02; remove v02 from the presentation; enforce 12-component parity. | Client selects final concept; verify actual content and function against Section 4 before release. |
| **003 — [Branded reviews and submission engine](../decisions/ADR-20261102-branded-reviews-and-submission-engine.md)** | Establish `/reviews/`, redirect legacy route and assist users in drafting and opening review platforms. | User submits independently; maintain honest review invitations, current counts, accessible fallback, permissions and valid markup. |
| **004 — [Commercial pricing and PIF promotions](../decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md)** | Favor transparent monthly membership, a $15 trial and drop-in, optional family discount and targeted six-/twelve-month prepaid loyalty promotions ahead of seasonal dips. | Confirm live prices, cancellation and discount terms, eligibility, unit costs, cash recognition and refund/freeze policy with UWC before public release. |

## Section 8: Discovery Call Presentation Checklist & Next Steps for Naweed & Karim

### 8.1 Presentation agenda

1. **Context and goals (5 minutes):** confirm priorities, business constraints, success measures and the club's definition of a qualified trial.
2. **Baseline and problem (10 minutes):** show the mobile experience, initial HTML, schedule inconsistencies, phone mismatch and existing external handoff. Label estimates and discuss historical membership evidence.
3. **Live concept walkthrough (15 minutes):** demonstrate Concept 02 on desktop and mobile; compare v01 and v03 briefly; review coaching, EDC, programs, pricing and accessible schedule. Open and complete a test lead only in an agreed test environment; verify confirmation and handoff. Demonstrate `/reviews/`, clipboard fallback and user-controlled Google submission.
4. **Commercial choices (10 minutes):** review the trial offer, seasonal PIF and women's program economics, capacity and staffing; select measurable pilot assumptions.
5. **Decisions and access (10 minutes):** assign owners, approve factual corrections and creative direction, agree on access, timeline and the first measurement checkpoint.

### 8.2 Questions requiring club confirmation

| Decision | Question / evidence to request |
|---|---|
| Primary contact | Is **(510) 303-4869** or **[retired number]** the primary public call and SMS number? Who monitors it and when? |
| Coaches and founder | Confirm each secondary coach's current role, exact credential, biography and image permission; identify the BJJ and Sambo instructors. Confirm Karim's Olympic qualifier/participation wording and Ali Aliyev medal. |
| Schedule and capacity | Where and when do four-day Kids and Combat Sambo train? What is safe capacity by class, actual coach ratio, sanitation protocol and current RTC status? |
| Offer and seasonality | Confirm $15 trial vs free assessment, session terms, eight active plans, household discount, cancellation rules, six-/twelve-month PIF eligibility, dates, gear cost, refund and freeze terms. Export 24 months of members, churn, pauses and plan mix. |
| Women's program | Who is available and qualified, what launch date and mat slot work, what insurance applies, and what split, tuition credit and margin floor are acceptable? |
| Proof and access | Confirm review reuse, photo/video permissions, review count, address and GBP name. Identify owners of the domain, hosting, GBP, analytics, WrestlingIQ and form inbox; provide appropriate access. |

Additional discovery topics include feeder schools, documented athlete achievements, missed-call volume, prior drop-ins, USA Wrestling card requirements, a community day, original video masters, and whether the currently unfinished shop and donation links should be hidden until usable. Use affirmative, informed media permissions appropriate to the participants and context, especially minors; do not assume an opt-out checkbox alone resolves all requirements. [Source: discovery questions](../client/naweed_discovery_questions.md).

### 8.3 Implementation roadmap and acceptance gates

| Phase | Work | Completion evidence / owner |
|---|---|---|
| **1. Confirm and instrument** | Client selects concept and offer; confirm contact, credentials, hours, schedule and capacity; secure access; establish analytics events and baseline cohorts. | Naweed/Karim approve fact and offer register; Sprintz documents funnel definitions and access. |
| **2. Build and verify** | Finalize v04 if selected; implement reliable lead persistence, notification and WrestlingIQ handoff; optimize media, accessibility and review flow. | Sprintz tests desktop/mobile, keyboard, form failures, consent, clipboard fallback, parity and actual receipt of test leads. |
| **3. Launch foundation** | Deploy approved site; configure and test `robots.txt`, `sitemap.xml`, canonical URLs and optional `llms.txt`; submit sitemap, validate schema and redirects. | Hosting owner authorizes release; Sprintz verifies live HTTP responses, rendering, indexability and analytics. |
| **4. Grow and learn** | Correct GBP and priority citations, publish useful local/program content, pilot follow-up and a community event, prepare seasonal offer and women's cohort if approved. | Named club owner monitors leads and calls; review trial, show-up, enrollment, retention and contribution economics at 30/60/90 days. |

**Immediate next action:** use the discovery call to settle the primary phone number, trial terms and flagship selection; these decisions unblock accurate copy, lead routing and deployment.
