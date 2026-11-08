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
part: "3 of 3"
---

> Part 3 of 3 of [master_discovery_findings](../master_discovery_findings.md). Text is verbatim from the original; only links were rewritten.

## Section 5: Strategic Growth Levers & Revenue Enhancements

### Lever 1 — Targeted seasonal PIF loyalty promotions

Offer optional six- and twelve-month prepaid renewals to eligible existing, high-attendance members **30–45 days before** the November and May transition windows. The source proposes pay five months for six or pay ten for twelve, with a custom team item; 400 GSM gear is a creative option, with garment and unit cost still to be confirmed. Preserve transparent month-to-month entry and avoid public discounting as the ADR directs.

At $139.99, the illustrative six-month price is **$699.95** and the twelve-month price **$1,399.90**, before gear and processing. Each provides a 16.7% tuition discount against the full term; the annual effective rate is ~$116.66/month. Ten annual purchases generate **$13,999 cash upfront**, not $13,999 of incremental revenue. Discount, gear, refunds, taxes, card fees, existing member cannibalization and recognition over the service period must be modeled. The source's $15,000–$25,000 cash-per-cycle range is an unvalidated participation scenario. Confirm eligibility, refund/freeze rules, dates, capacity and margin floor before launch. [Source: commercial ADR](../../decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md).

### Lever 2 — Women's self-defense and corporate clinics

Pilot a respectful, practical program with qualified instructors, insurance and mat availability confirmed. Louisa, Neha's sister and Ja Shia are potential collaborators, not confirmed staff or partners. The model proposes four connected tiers:

| Tier | Proposed offer | Illustrative gross | Club economics / open decisions |
|---|---|---:|---|
| 1 | 20-person introductory workshop × $49 | $980 | At an assumed $950 after processing, 40% to UWC = $380 and 60% instructor pool = $570, before other costs. |
| 2 | Six-week cohort, 16 × $199 | $3,184 | At assumed $3,090 after processing, UWC share $1,236 and instructor pool $1,854, before gear and other costs. |
| 3 | Corporate clinic | $1,000–$1,500 / booking | Proposed 30% club / 70% instructor split: $300–$450 to club before expenses if applied to gross. |
| 4 | Membership tuition rollover | Five members × $139.99 × 12 = $8,399.40 annualized dues | A $199 credit each is $995 of future tuition, plus proposed $250 total instructor bounty; do not treat gross run rate as profit or guarantee 12-month retention. |

The requested **$4,200–$8,400 per six-week cycle** is an illustrative combined-program revenue goal, not the revenue of the stated full 16-person cohort alone. For example, one full cohort plus one $1,200 corporate clinic yields **$4,384 gross** before costs and rollover credits. The upper end requires additional bookings or different attendance/pricing. A **70%+ club margin is not supported** by the proposed 40%/30% club shares; calculate contribution after instructor shares, processing, insurance, gear, credits and acquisition. Corporate leads named in discovery are prospects, not confirmed buyers. [Source: women's financial model](../womens_self_defense_financial_model.md).

### Lever 3 — Quarterly community day and BJJ mixer

Pilot a Saturday open mat with youth and adult introductions, local BJJ cross-training, a transparent capacity limit and simple RSVP-to-trial follow-up. Make the introductory event free if chosen by the club; monetize optional ongoing drop-ins, memberships or future paid events without double-counting them. Track attendance, partner source, trial claims, attendance and paid joins. A referral loop is a hypothesis to test, not guaranteed virality. Confirm instructor coverage, insurance, media permissions, partner participation and schedule.

### Lever 4 — Branded reviews hub and assisted submissions

Create a crawlable `/reviews/` page with clearly attributed, permissioned, dated reviews, platform links and category filters. Provide a user-initiated **copy and open Google** action to the [Google review form](https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo), with manual-copy and popup-blocker fallback. The reviewer controls the wording, rating and final submission; this does not automatically submit a five-star review. Invite honest feedback without rating-based gating or incentives contingent on positive reviews, and verify current platform policies before deployment. Do not publish an unsupported “100% recommendation” claim or stale review counts. [Source: reviews ADR](../../decisions/ADR-20261102-branded-reviews-and-submission-engine.md).

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

**Sensitivity.** At 120 athletes, each $10 change in blended monthly revenue changes annualized dues by **$14,400**. At 7.5% churn and $139.99 ARPU, simple gross LTV is ~$1,867; at 10% it is ~$1,400, and at 5% ~$2,800. On the six-week cohort, 12 rather than 16 paid seats at $199 lowers gross from $3,184 to $2,388 before costs. Prepayments accelerate cash but replace future collections; neither PIF cash nor tuition rollovers should be added again to membership ARR. The baseline of zero auxiliary revenue is a modeling assumption, not proof that clinics currently generate no income. [Source: commercial model](../commercial_and_financial_model_synthesis.md).

## Section 7: Binding Architectural Decision Records

These four records are marked **Approved** in the discovery repository and bind the project design unless superseded. The fourth record's actual filename is `ADR-20261102-commercial-pricing-and-pif-promotions.md`; “seasonal PIF loyalty architecture” is its subject, not a separate file. Client approval, implementation and factual verification remain distinct from the ADR status.

| ADR | Decision and rationale | Execution guardrails |
|---|---|---|
| **001 — [Facility and coaching invariants](../../decisions/ADR-20261102-facility-and-coaching-invariants.md)** | Standardize 3,800 sq ft (owner decision; the ADR text says 3,000), 1:6, 2× daily sanitation, address, RTC #513 and six-person bench; retire 5,000 sq ft and avoid repetitive lineage claims. | Confirm universal applicability, current credentials, sanctioning and permissions; propagate corrected facts to copy, metadata and schema. |
| **002 — [Concept consolidation and v04 flagship](../../decisions/ADR-20261102-concept-consolidation-and-v04-flagship.md)** | Historical: retained v01, v03 and v04 and recommended v04 as Concept 02. The concept folders are archived and the Astro build is the production site (ADR-20261106). | Superseded. Section 4 is kept as design history. |
| **003 — [Branded reviews and submission engine](../../decisions/ADR-20261102-branded-reviews-and-submission-engine.md)** | Establish `/reviews/`, redirect legacy route and assist users in drafting and opening review platforms. | User submits independently; maintain honest review invitations, current counts, accessible fallback, permissions and valid markup. |
| **004 — [Commercial pricing and PIF promotions](../../decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md)** | Favor transparent monthly membership, a $15 trial and drop-in, optional family discount and targeted six-/twelve-month prepaid loyalty promotions ahead of seasonal dips. | Cancellation notice is seven days (owner decision, 2026-11-06). Confirm the household discount, eligibility, unit costs, cash recognition and refund/freeze policy with UWC before public release. Live prices are per program (section 2.6). |

## Section 8: Discovery Call Presentation Checklist & Next Steps for Naweed & Karim

### 8.1 Presentation agenda

1. **Context and goals (5 minutes):** confirm priorities, business constraints, success measures and the club's definition of a qualified trial.
2. **Baseline and problem (10 minutes):** show the mobile experience, initial HTML, schedule inconsistencies, phone mismatch and existing external handoff. Label estimates and discuss historical membership evidence.
3. **Live concept walkthrough (15 minutes):** walk through the live Astro site on desktop and mobile; review coaching, EDC, programs, pricing and accessible schedule. Open and complete a test lead only in an agreed test environment; verify confirmation and handoff. Demonstrate `/reviews/`, clipboard fallback and user-controlled Google submission.
4. **Commercial choices (10 minutes):** review the trial offer, seasonal PIF and women's program economics, capacity and staffing; select measurable pilot assumptions.
5. **Decisions and access (10 minutes):** assign owners, approve factual corrections and creative direction, agree on access, timeline and the first measurement checkpoint.

### 8.2 Questions requiring club confirmation

| Decision | Question / evidence to request |
|---|---|
| Primary contact | Resolved: **(510) 303-4869** is the club phone (owner decision, 2026-11-06). Retire **[retired number]** on Facebook. Who monitors texts and calls, and when? |
| Coaches and founder | Confirm each secondary coach's current role, exact credential, biography and image permission; identify the BJJ and Sambo instructors. The Ali Aliyev medal is decided (bronze). Confirm the Moscow qualification wording, given that the Games were boycotted. |
| Schedule and capacity | The live schedule governs: kids train Monday and Wednesday only. Confirm whether the Monday to Thursday 4-day kids plan is offered, and where Combat Sambo trains. What is safe capacity by class, actual coach ratio, sanitation protocol and current RTC status? |
| Offer and seasonality | The trial is the $15 three-day pass (live). Confirm session terms, the live plan list, the household discount (on hold), cancellation rules (seven days, decided), six-/twelve-month PIF eligibility, dates, gear cost, refund and freeze terms. Export 24 months of members, churn, pauses and plan mix. |
| Women's program | Who is available and qualified, what launch date and mat slot work, what insurance applies, and what split, tuition credit and margin floor are acceptable? |
| Proof and access | Confirm review reuse, photo/video permissions, review count, address and GBP name. Identify owners of the domain, hosting, GBP, analytics, WrestlingIQ and form inbox; provide appropriate access. |

Additional discovery topics include feeder schools, documented athlete achievements, missed-call volume, prior drop-ins, USA Wrestling card requirements, a community day, original video masters, and whether the currently unfinished shop and donation links should be hidden until usable. Use affirmative, informed media permissions appropriate to the participants and context, especially minors; do not assume an opt-out checkbox alone resolves all requirements. [Source: discovery questions](../../client/naweed_discovery_questions.md).

### 8.3 Implementation roadmap and acceptance gates

| Phase | Work | Completion evidence / owner |
|---|---|---|
| **1. Confirm and instrument** | Client selects concept and offer; confirm contact, credentials, hours, schedule and capacity; secure access; establish analytics events and baseline cohorts. | Naweed/Karim approve fact and offer register; Sprintz documents funnel definitions and access. |
| **2. Build and verify** | The Astro build is the production site. Verify reliable lead persistence, notification and WrestlingIQ handoff; optimize media, accessibility and review flow. | Sprintz tests desktop/mobile, keyboard, form failures, consent, clipboard fallback, parity and actual receipt of test leads. |
| **3. Launch foundation** | Superseded 2026-11-08: the Vercel projects were deleted 2026-11-07, no production host is connected, and the site is not live (every page is noindex until `LAUNCHED = true`). Old text: [archive](../../archive/stale-2026-11-08/master_discovery_findings.md). `robots.txt`, `sitemap.xml`, `llms.txt` and `llms-full.txt` are built. Remaining: canonical URLs, schema, and sitemap submission. | Hosting owner authorizes release; Sprintz verifies live HTTP responses, rendering, indexability and analytics. |
| **4. Grow and learn** | Correct GBP and priority citations, publish useful local/program content, pilot follow-up and a community event, prepare seasonal offer and women's cohort if approved. | Named club owner monitors leads and calls; review trial, show-up, enrollment, retention and contribution economics at 30/60/90 days. |

**Immediate next action:** the phone number and trial terms are settled. Remaining: the Moscow qualification wording, the 4-day kids plan, the cancellation copy, and the household discount. These decisions unblock accurate copy and the Astro site fixes.
