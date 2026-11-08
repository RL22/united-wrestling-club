---
type: spec
status: current
group: strategy
owner: "Rodney Lewis — Sprintz Growth & Technical Systems Architecture (fCMO)"
date: 2026-11-03
last_reviewed: 2026-11-03
sources: ["https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo", "https://rl22.github.io/united-wrestling-club/portal/#uwc", "https://rl22.github.io/united-wrestling-club/v04/", "discovery/decisions/ADR-20261106-astro-design-system.md", "discovery/strategy/master_discovery_findings.md", "portal/index.html", "v04/index.html", "assets/js/uwc-attribution.js", "discovery/strategy/uwc_email_marketing_playbook.md", "discovery/decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md", "reviews/index.html", "discovery/strategy/uwc_attribution_model.md", "discovery/client/2026-11-02_naweed_discovery-call.md", "discovery/strategy/uwc_marketing_plan_research.md", "discovery/strategy/uwc_sms_marketing_playbook.md", "discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md", "discovery/decisions/ADR-20261102-concept-consolidation-and-v04-flagship.md", "discovery/decisions/ADR-20261102-branded-reviews-and-submission-engine.md", "v01/index.html", "v03/index.html"]
caveat: "partly superseded, see banner"
shard_of: "discovery/strategy/uwc_marketing_plan.md"
part: "5 of 8"
---

> Part 5 of 8 of [uwc_marketing_plan](../uwc_marketing_plan.md). Text is verbatim from the original; only links were rewritten.

## 8. Revenue

### Current state
UWC currently generates **~$6,299/mo MRR (~$75,588 annualized membership run rate)** across ~45 active recurring athletes in WrestlingIQ (Team #513), anchored by a **$139.99/mo core unlimited membership price**. While 8 distinct session/plan IDs exist in WrestlingIQ (`#6327` $15 3-Day Trial, `#2664` $15 Drop-In, `#1087` $89.99 Kids 2-Day, `#4981` $139.99 Kids 4-Day, `#2286` $139.99 Middle/HS, `#3574` $150 Competition Youth, `#1084` $139.99 Adult, `#9536` $100 BJJ 3-Day), auxiliary revenue from structured seasonal PIF packages, women's self-defense cohorts, and corporate clinics is currently **$0/mo modeled baseline**.

### The plan (4 Revenue & Monetization Moves)

- **Move 1 — Core Plan Inventory Cleanup & Sibling/Tier Packaging (`WrestlingIQ Team #513`):** Reconcile the 8 WrestlingIQ plans with published website schedules (specifically resolving the Kids 4-Day `#4981` M–Th vs. M/W/F schedule conflict), standardize the **`$15 3-Day Mat Pass (#6327)` → `$139.99/mo Core Unlimited`** upgrade path, position **`$89.99/mo Kids 2-Day (#1087)`** as a structured down-sell/save offer for busy multi-sport youth families, and promote the **`$150/mo Competition Youth (#3574)`** tier (including tournament coaching support across the 41-event `/events/` calendar) as an ARPU expansion lever.
- **Move 2 — Seasonal 6-Month & 12-Month Paid-In-Full (PIF) Cashflow Engine (ADR-004):** Offer eligible active members the **6-Month PIF ($699.95 — 5 months paid, 6th free)** and **12-Month PIF ($1,399.90 — 10 months paid, 2 free, or $1,500 with limited 400 GSM EDC team kit)** 30–45 days before November and May. *Accounting guardrail:* As documented in `master_discovery_findings.md` §5–6, 10 annual PIF purchases generate **$13,999 in immediate upfront cash**, which accelerates working capital (e.g., for mat expansion or Q1 2027 Pep Boys deposits) and locks in retention, while recognizing tuition over the 6/12-month service period without double-counting in MRR/ARR.
- **Move 3 — 4-Tier Women's Self-Defense & Corporate Clinic Program (Growth Lever 2):** Once instructor availability (e.g., Louisa / qualified female lead coach), mat slot, and insurance are confirmed by Naweed, launch the 4-tier self-defense revenue ladder (`discovery/strategy/master_discovery_findings.md` §5 Lever 2):
  1. **Tier 1 — Introductory 2-Hour Workshop:** 20 seats × `$49` = **`$980 gross`** (~$380 net to UWC at 40% club / 60% instructor split after processing).
  2. **Tier 2 — 6-Week Practical Self-Defense Cohort:** 16 seats × `$199` = **`$3,184 gross`** (~$1,236 net to UWC at 40/60 split before gear).
  3. **Tier 3 — East Bay Corporate Wellness & Safety Clinics:** **`$1,000–$1,500 per booking`** ($300–$450 net to UWC at 30/70 split).
  4. **Tier 4 — Core Membership Rollover:** Graduation incentive applying `$199` credit toward ongoing `$139.99/mo` UWC membership (converting 4–5 cohort graduates per cycle into recurring roster members).
- **Move 4 — Summer Intensive Camps, Private Technique Sessions & Shopify EDC Merch (`shop.unitedwrestlingclub.com`):** Monetize the 3 Summer Off-Season Camp blocks already listed on `/events` (June, July, August 2027), promote 1-on-1 private technique intensives with UWC's 6-coach staff, and reactivate the `shop` CNAME for pre-order drops of heavyweight **EDC (*Excellence / Discipline / Champions*)** team hoodies, singlets, and warm-up shirts required for SCWAY/USAW tournaments.

### Unit economics table

| Metric | Current Baseline (45 Members) | 90-Day Target Scenario (75 Members) | 12-Month Target Scenario (120 Members) | Note / Calculation Basis |
|---|---:|---:|---:|---|
| **ARPC (Blended Monthly Tuition)** | **$139.98 / mo** | **$140.00 / mo** | **$140.00 / mo** | Anchored by $139.99/mo core plan (`#4981`, `#2286`, `#1084`) balanced by $150 Comp (`#3574`) and $89.99 2-Day (`#1087`). |
| **Monthly Churn Rate** | **7.5% / mo** | **4.5% / mo** | **3.2% / mo** | Driven by 30-day onboarding, tournament reminders, and 6/12-mo PIF lock-in. |
| **Implied Average Tenure** | **13.33 months** | **22.22 months** | **31.25 months** | Reciprocal churn model (`1 / monthly_churn`); validate against 24-mo WrestlingIQ cohort export. |
| **Indicative Gross Tuition LTV** | **~$1,867** | **~$3,111** | **~$4,375** | `ARPC × Implied Tenure` (conservative 8/12/16-mo tenure model yields $1,120 / $1,680 / $2,240). |
| **Blended CAC (All-In Marketing)** | **~$83** *(at ~13 gross adds/mo on $1,075 base)* | **~$105** *(at ~14 gross adds/mo on $1,450 spend)* | **~$155** *(at ~12 gross adds/mo on $1,875 spend)* | Includes $1,000/mo Sprintz base + $25/mo rev-share per net athlete > 45 + ~$75/mo software tools ($0 ad spend). |
| **Gross LTV : Blended CAC** | **~22.5×** | **~29.6×** | **~28.2×** | Far exceeds the 3.0× health benchmark (even on conservative 12-mo $1,680 LTV, LTV:CAC is **10.8×–16.0×**). |
| **Auxiliary Revenue / Month** | **$0 / mo** *(assumed)* | **$1,250 / mo** | **$2,800 / mo** | Women's Self-Defense cohorts, corporate clinics, summer camps, Saturday drop-ins, and EDC tournament gear. |
| **Total Annualized Run Rate** | **$75,588 / yr** | **$141,000 / yr** | **$235,200 / yr** | Membership ARR ($75.6K → $126.0K → $201.6K) + Auxiliary Run Rate ($0 → $15.0K → $33.6K). |

### Skills + tools
- **Skills:** `pricing`, `offers`, `paywalls`, `churn-prevention`, `revops`, `sales-enablement`.
- **MCPs / APIs / Tools:** WrestlingIQ Team #513 billing & session checkout, `portal/index.html` interactive tuition calculator, Shopify (`shop` CNAME).

---

## 9. 90-day roadmap

### Weeks 1–2 — Unblock (Access, Fact Register, SSR Foundation & Tracking)

| Move | AARRR Stage | Owner | Completion Deliverable |
|---|---|---|---|
| Elevate `lewis.rodneyl@gmail.com` to GA4 **Editor** (`562010875`) and grant **Full** GSC, Formspree (`xyyavaaj`), WrestlingIQ Team #513 Admin, and ESP/SMS access | Cross-cutting | Naweed Zemaryalai | Active Editor/Admin permissions verified across all 5 systems |
| Approve Fact & Offer Register: primary phone `(510) 303-4869`, `$15 3-Day Mat Pass (#6327)`, 8 plan schedules, 15% sibling discount, and 6 coach bio permissions | Cross-cutting | Naweed & Karim Zemaryalai | Signed-off fact register resolving all copy/schedule contradictions |
| Deploy recommended flagship **Concept 02 (`v04/index.html`)** with pre-rendered HTML, <2MB VP9/WebM video, and `<dialog>` modal (`uwc-attribution.js` + 19 hidden fields + TCPA `STOP` opt-out) | Acquisition + Activation | Rodney Lewis (Sprintz) | Live production site serving full SSR HTML and <1.4s target LCP |
| Publish `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, and unified JSON-LD `@graph` (`SportsActivityLocation`, `Person`, `Offer`, `FAQPage`) | Acquisition | Rodney Lewis (Sprintz) | 200 OK HTTP responses + Search Console sitemap submission |
| Install GA4 (`562010875`) tag and verify `generate_lead` + `wrestlingiq_checkout_click` events + referrer exclusions (`wrestlingiq.com`, `formspree.io`, `stripe.com`) | Activation + Revenue | Rodney Lewis (Sprintz) | Live real-time conversion tracking verified in GA4 DebugView |
| Export 24 months of WrestlingIQ Team #513 member, pause, and cancellation cohorts to baseline true monthly churn and LTV | Retention + Revenue | Rodney Lewis + Naweed | Cohort survival baseline spreadsheet in `discovery/` |

### Weeks 3–4 — Foundation (SMS/Email Lifecycle, `/events/`, `/reviews/` & GBP Cleanup)

| Move | AARRR Stage | Owner | Completion Deliverable |
|---|---|---|---|
| Submit US A2P 10DLC Brand & Campaign registration for `(510) 303-4869` (`United Wrestling Club LLC`) and add Route 53 SPF/DKIM records for `@unitedwrestlingclub.com` | Activation + Retention | Rodney Lewis + DNS Admin | Approved 10DLC campaign + DMARC-aligned email deliverability |
| Launch **SMS Sequences 1, 2 & 3** (Instant Suite C arrival guide, Abandoned WrestlingIQ checkout recovery, 3-Day Pass → $139.99/mo conversion) | Activation | Rodney Lewis (Sprintz) | Live automated SMS workflows firing within 60s of `<dialog>` submit |
| Launch **Email Sequence 1** (5-email Trial Welcome & Parent Trust) and **Email Sequence 2** (3-email Active Member Onboarding: USAW + SCWAY cards) | Activation + Retention | Rodney Lewis (Sprintz) | 8 automated lifecycle emails live with `?lid={{uwc_lead_id}}` tracking |
| Ship prerendered **`/events/`** page (41-tournament 2026–2027 schedule + `SportsEvent` schema) and **`/reviews/`** hub (`ChIJsQd_yMaVj4ARrXw93nb4euo` submission engine) | Acquisition + Referral | Rodney Lewis (Sprintz) | `/events/` and `/reviews/` indexed in GSC |
| Standardize NAP (`(510) 303-4869`, singular "United Wrestling Club") across GBP, Facebook, Yelp, Apple Maps, Bing Places, and USA Wrestling | Acquisition | Rodney Lewis (Sprintz) | 100% NAP consistency across top 15 local & wrestling citations |

### Weeks 5–8 — Velocity (6-City Alameda County Local SEO Cluster & Review Surge)

| Move | AARRR Stage | Owner | Completion Deliverable |
|---|---|---|---|
| Publish the **6 Alameda County City Landing Pages**: `/locations/hayward-ca/`, `/locations/union-city-ca/`, `/locations/fremont-ca/`, `/locations/newark-ca/`, `/locations/castro-valley-ca/`, `/locations/san-leandro-ca/` | Acquisition | Rodney Lewis (Sprintz) | 6 geo-targeted pages live with drive times, feeder schools & local schema |
| Publish the **4 Core Program Pages**: Youth Wrestling (`5–13`), High School Scholastic (`14–18`), Adult Wrestling & BJJ (`18+`), and Saturday Open Mat | Acquisition + Activation | Rodney Lewis (Sprintz) | 4 program pages live with division-specific WrestlingIQ deep-links |
| Turn on missed-call text-back on `(510) 303-4869` during evening mat hours (4:30 PM – 8:00 PM PT) + Day-21 automated Google Review SMS/Email (`TXT-4.1` + Email #2.3) | Activation + Referral | Rodney Lewis + Naweed | Zero unreturned phone inquiries; review count growing from 42 → 60+ |
| Launch **Email Sequence 3** (Lapsed Lead & Post-Football Crossover Win-Back) to historical Formspree (`xyyavaaj`) and past WrestlingIQ inactive contacts | Retention | Rodney Lewis (Sprintz) | Win-back broadcast sent to all historical leads; first reactivations logged |
| Establish 2×/week documentary short-form video cadence (Instagram Reels, YouTube Shorts, GBP Video Posts) from mat room & tournament footage | Acquisition | Naweed (Footage) + Rodney (Distribution) | 8+ vertical clips/mo routing traffic to UTM-tagged Trial Pass modal |

### Weeks 9–12 — Compound (Seasonal PIF Launch, Community Mixer & 90-Day Audit)

| Move | AARRR Stage | Owner | Completion Deliverable |
|---|---|---|---|
| Publish 2 East Bay Parent Comparison Guides (*Youth Wrestling vs. BJJ/Karate* & *Alameda County CIF/NCS Offseason Guide*) + execute 5 local backlink placements | Acquisition | Rodney Lewis (Sprintz) | 2 comparison pillars live + 5 local East Bay/wrestling backlinks earned |
| Launch **Seasonal 6-Month ($699.95) & 12-Month ($1,399.90) Paid-In-Full (PIF) Loyalty Promotion** to high-attendance active families (`TXT-4.2` + Email #3.3) | Retention + Revenue | Rodney Lewis + Naweed | Target 8–10 PIF enrollments ($7,000–$13,999 upfront cash; 0% seasonal churn) |
| Host **Quarterly East Bay Community Open Mat & BJJ Takedown Mixer #1** at `30139 Industrial Pkwy SW, Suite C` | Acquisition + Referral | Naweed & Coaching Bench + Rodney (RSVP Funnel) | 30+ event RSVPs, 10+ Trial Pass claims, 4–5 new recurring members |
| Confirm instructor, insurance & mat slot for **Women's Self-Defense Introductory Workshop ($49) & 6-Week Cohort ($199)** pilot | Revenue | Naweed + Rodney | Pilot workshop date announced for Q2 launch |
| Conduct 90-Day Attribution & Roster Reconciliation (`uwc_lead_id` ledger vs. WrestlingIQ Team #513 active roster > 45 baseline) | Revenue + Measurement | Rodney Lewis + Naweed | Verified 90-day roster count (target: 75 active members / $10,500 MRR) |

---
