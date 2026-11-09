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
part: "6 of 8"
---

> Part 6 of 8 of [uwc_marketing_plan](../uwc_marketing_plan.md). Text is verbatim from the original; only links were rewritten.

## 10. 12-month outlook

### Framing — Budget Method & Growth Pattern

- **Budget Method Used (Hybrid Revenue-Based + Self-Liquidating Performance Rev-Share):**
  - Rather than a speculative upfront agency retainer, UWC's marketing budget is anchored at **$1,000/mo flat base (`15.9%` of current $6,299 MRR) + $25/mo per verified incremental active recurring athlete above the 45-member baseline**, plus **~$75–$100/mo** in infrastructure/messaging tools and a **15% experimental buffer (~$150–$250/mo)** reserved for seasonal event materials, tournament flyers, and local sponsorships.
  - **Goal-Based Reverse-Engineering Check:** To add **+75 net recurring athletes** in 12 months (reaching 120 active members / $201,600 membership ARR) at a target 12-month monthly churn rate of 3.2% (~68% annual retention), UWC requires approximately **110 gross new member enrollments** over the year (~9.2 gross new members/month). At our modeled blended CAC of **~$105–$155 per enrolled athlete**, total annual marketing investment comes to **~$18,000–$21,500 across 12 months** (including performance rev-share as the roster scales)—representing **~9%–10.5% of the resulting $201,600 Membership ARR** and generating **+$126,012 in incremental annualized membership dues (+$159,612 including auxiliary revenue)**.
- **Growth Pattern Expected (Layered S-Curves):**
  - *S-Curve 1 (Months 1–4):* **Technical Crawlability + On-Page Modal CRO + Hayward/Tri-City Local Pack** drives linear net additions of +8 to +10 athletes/month (45 → 75 athletes).
  - *S-Curve 2 (Months 4–8):* **32-Route Alameda County Programmatic SEO + Women's Self-Defense / Corporate Clinics + Summer Off-Season Camps** layers a second growth engine before Hayward local search saturates (75 → 95 athletes).
  - *S-Curve 3 (Months 9–12):* **CIF/NCS Scholastic Pre-Season Surge + Seasonal PIF Retention Lock + Q1 2027 Pep Boys (`30085 Industrial Pkwy SW`, Union City) Dual-GBP Expansion** powers the step-function jump to **120 active recurring athletes**.

---

#### Q1 — Months 1–3 (Foundation, Local SEO Cluster & Lifecycle Activation)
- **Funding / Roster Stage:** Bootstrapped Baseline (`45 → 75 Active Recurring Athletes` | `$6,299 → $10,500 MRR`).
- **Focus:** Eliminate the 0-word SSR blackout and cold WrestlingIQ drop-off, launch the 6-city Alameda County SEO footprint, and automate SMS/email trial conversion.
- **Outcomes by end of Q1:**
  - `v04` (*The Olympic Sanctuary*) live in production with `<1.4s` mobile LCP, `<dialog>` modal, 19 hidden attribution fields (`uwc-attribution.js`), and TCPA `STOP` opt-out compliance.
  - All 6 Alameda County city pages (`Hayward`, `Union City`, `Fremont`, `Newark`, `Castro Valley`, `San Leandro`), 4 program pages, `/events/` (41 tournaments), and `/reviews/` indexed in Google Search Console.
  - 4 SMS sequences (`(510) 303-4869`) and 3 email sequences (`@unitedwrestlingclub.com`) active with 100% DMARC/10DLC compliance.
  - First Seasonal PIF campaign and Quarterly Community Open Mat & BJJ Mixer completed.
  - **Q1 2027 New Year Follow-Up (Jan 2027):** Re-evaluate contact status with the property owner of the former Pep Boys facility (`30085 Industrial Pkwy SW`, Union City).
- **KPI Targets:** **75 active recurring athletes** | **$10,500 MRR** ($1,250/mo auxiliary) | **3,200 organic visits/mo** | **45 trial passes/mo** | **4.5% monthly churn** | **70 Google reviews (5.0★)**.

#### Q2 — Months 4–6 (32-Route Programmatic Expansion & Women's / Corporate Clinic Launch)
- **Funding / Roster Stage:** Self-Liquidating Growth Stage (`75 → 90 Active Recurring Athletes` | `$10,500 → $12,600 MRR`).
- **Focus:** Scale the programmatic local footprint to all 32 city × program routes, capture the post-CIF State Freestyle/Greco transition, and launch the 4-tier Women's Self-Defense & Corporate Clinic program.
- **Outcomes by end of Q2:**
  - Full 32-route Alameda County programmatic sitemap deployed and internally linked.
  - Women's Self-Defense Introductory Workshop (`20 × $49`) and first 6-Week Cohort (`16 × $199`) completed, plus first East Bay corporate clinic booked (`$1,000–$1,500`).
  - Pre-May Seasonal PIF loyalty promotion executed 30–45 days ahead of the May spring/summer transition window.
  - Quarterly Community Open Mat & BJJ Mixer #2 hosted.
- **KPI Targets:** **90 active recurring athletes** | **$12,600 MRR** ($1,800/mo auxiliary) | **4,000 organic visits/mo** | **55 trial passes/mo** | **4.0% monthly churn** | **85 Google reviews (5.0★)**.

#### Q3 — Months 7–9 (Summer Camp Monetization, Back-to-School Surge & First Ops Hire Trigger)
- **Funding / Roster Stage:** High-Velocity Stage (`90 → 105 Active Recurring Athletes` | `$12,600 → $14,700 MRR`).
- **Focus:** Monetize the June/July/August Summer Off-Season Camps on `/events/`, execute the Back-to-School & Youth Sports recruitment push, and onboard a part-time Member Experience / Front-Desk Coordinator once the roster crosses 95 members.
- **Outcomes by end of Q3:**
  - Summer Wrestling Intensive Camps filled via organic local search + SMS/Email broadcasts to the accumulated Formspree/CRM lead database.
  - Part-time Member Experience Coordinator (15 hrs/wk during 4:30 PM – 7:30 PM evening mat hours) hired from recurring tuition surplus to greet trial families at Suite C, check in passes, and manage front-desk singlet/gear sales.
  - Second 6-Week Women's Self-Defense Cohort + 2 corporate clinics completed.
- **KPI Targets:** **105 active recurring athletes** | **$14,700 MRR** ($2,400/mo auxiliary) | **4,500 organic visits/mo** | **65 trial passes/mo** | **3.5% monthly churn** | **100 Google reviews (5.0★)**.

#### Q4 — Months 10–12 (Folkstyle / CIF Season Peak & Dual-GBP Annex Readiness)
- **Funding / Roster Stage:** Regional Dominance Stage (`105 → 120 Active Recurring Athletes` | `$14,700 → $16,800 MRR` | `$235,200 Total Annualized Run Rate`).
- **Focus:** Dominate the fall/winter SCWAY & CIF Folkstyle kickoff (*North Coast Grapplers* at James Logan HS), lock in pre-November PIF renewals, and activate the Dual-GBP Union City Annex if the `30085 Industrial Pkwy SW` facility closes.
- **Outcomes by end of Q4:**
  - Top-3 Google Map Pack and organic placement across Hayward, Union City, Fremont, Newark, Castro Valley, and San Leandro for primary youth, scholastic, and adult wrestling queries.
  - Pre-November 6/12-month PIF loyalty campaign executed across a 105+ member base.
  - If the `30085 Industrial Pkwy SW` (Union City `94587`) Pep Boys lease is secured: activate the **Second Verified Google Business Profile** while preserving `30139 Industrial Pkwy SW` (Hayward `94544`) equity.
- **KPI Targets:** **120 active recurring athletes** | **$16,800 MRR ($201,600 Membership ARR)** | **$2,800/mo auxiliary ($235,200 Total Annualized Run Rate)** | **5,000+ organic visits/mo** | **75 trial passes/mo** | **3.2% monthly churn** | **110+ Google reviews (5.0★)**.

---

## 11. Marketing operations stack

### The thesis
A bootstrapped regional academy cannot—and should not—hire a traditional 6-person marketing department (SEO manager, web developer, copywriter, lifecycle marketer, CRO analyst, designer). By pairing **Naweed & Karim's real-world coaching authority** with **Sprintz Growth OS (fCMO + full-stack engineering + the agentic marketing-skills & MCP library)**, UWC gets the execution velocity of a 15-person growth team for a $1,000/mo base retainer and a performance rev-share tied strictly to verified roster growth.

### Skills mapped to AARRR stages

| Stage | Primary Skills Executed | Supporting Skills |
|---|---|---|
| **Acquisition** | `seo-audit`, `programmatic-seo`, `schema`, `ai-seo`, `directory-submissions` | `competitors`, `content-strategy`, `social`, `video`, `analytics` |
| **Activation** | `cro`, `signup`, `onboarding`, `popups`, `sms` | `copywriting`, `copy-editing`, `marketing-psychology`, `ab-testing`, `attribution` |
| **Retention** | `emails`, `churn-prevention`, `sms`, `onboarding` | `offers`, `pricing`, `copywriting` |
| **Referral** | `referrals`, `community-marketing`, `co-marketing` | `sms`, `emails`, `social`, `schema` |
| **Revenue** | `pricing`, `offers`, `paywalls`, `revops` | `sales-enablement`, `churn-prevention`, `attribution` |
| **Cross-cutting** | `product-marketing`, `customer-research`, `marketing-plan` | `marketing-psychology`, `marketing-ideas`, `marketing-loops` |

### MCPs / APIs & first-party tooling mapped to stages

| Stage | Live / Staged Connections in UWC Stack | Sprintz fCMO Tooling Layer |
|---|---|---|
| **Acquisition** | Google Search Console, Google Business Profile (`ChIJsQd_yMaVj4ARrXw93nb4euo`), AWS Route 53, GitHub (`RL22/united-wrestling-club`) | **OpenSEO MCP** (`get_domain_overview`, `get_serp_results`, `get_local_rank_grid`, `get_business_profile`, `inspect_urls`, `run_site_audit`) |
| **Activation** | Native `<dialog>` Modal (`v01/v03/v04`), Formspree (`xyyavaaj`), `assets/js/uwc-attribution.js`, WrestlingIQ Team #513 | **GA4 (`562010875`)**, HighLevel / Twilio 10DLC (`(510) 303-4869`), FFmpeg VP9/WebM video pipeline |
| **Retention** | WrestlingIQ Roster & Billing (`team_id=513`), Amazon SES (`@unitedwrestlingclub.com`), HighLevel/Twilio SMS | Automated 11-Email & 4-SMS Lifecycle Playbooks, Route 53 SPF/DKIM/DMARC (`p=quarantine`) alignment |
| **Referral** | `/reviews/index.html` Assisted Review Engine, Google Write-Review API (`placeid=ChIJsQd_yMaVj4ARrXw93nb4euo`) | `uwc-attribution.js` (`self_reported_source` tracking), UTM referral link generator |
| **Revenue** | WrestlingIQ Checkout (`#6327`, `#2664`, `#1087`, `#4981`, `#2286`, `#3574`, `#1084`, `#9536`), Shopify (`shop` CNAME) | Interactive Roster & Tuition Calculator (`portal/index.html`), Monthly Attribution Reconciliation Ledger |

### Concrete operational proof of the stack
During our November 2–3 discovery and architecture sprint, the Sprintz stack audited UWC's live S3 bundle (uncovering the 0-word CSR blackout and the 41-tournament `/events` schedule hidden in `pages/events-c19ceb4499e7a4a0.js`), compressed the 17.72 MB hero video by 94% (<2MB VP9/WebM), engineered three production-ready homepage concepts (`v01`, `v03`, `v04`), built the interactive Executive Growth Portal (`portal/index.html`), authored the complete 4-sequence SMS and 11-email lifecycle playbooks, and wired `assets/js/uwc-attribution.js` (19 hidden attribution fields + TCPA `STOP` opt-out compliance) across all three concepts—work that would normally take a traditional agency 6–8 weeks and $15,000+ in upfront build fees.

### Capability unlocks by roster milestone (Bootstrapped Growth Tiers)

| Roster Milestone | Active Members & MRR | Team / Headcount Unlock | Tooling & Channel Unlock |
|---|---|---|---|
| **Stage 0 — Baseline (Today)** | **45 Members** (~$6,299 MRR / $75.6K ARR) | Naweed + Karim + 4 Coaches + Sprintz fCMO ($1,000/mo base) | `v04` static SSR site, `<dialog>` modal, `uwc-attribution.js`, GA4/GSC, 6-city local SEO, 10DLC SMS + SES Email flows |
| **Stage 1 — Self-Liquidating (Month 1–2)** | **52–60 Members** (~$7,280–$8,400 MRR) | Retainer 100% covered by first 7 net new athletes; Sprintz rev-share kicks in ($25/athlete > 45) | Missed-call text-back automation, 32-route Alameda County programmatic sitemap, `/events/` & `/reviews/` hubs |
| **Stage 2 — 90-Day Target (Month 3)** | **75 Members** (~$10,500 MRR / $126K ARR + $1.25K/mo aux) | Part-time Female Lead Instructor (revenue-share split: 60% instructor / 40% club) | Launch 4-Tier Women's Self-Defense ($49 workshop / $199 cohort) + Corporate Clinics ($1K–$1.5K) + Seasonal PIF |
| **Stage 3 — High-Velocity (Month 6–9)** | **95–105 Members** (~$13,300–$14,700 MRR) | **First Part-Time Ops Hire:** Evening Member Experience Coordinator (15 hrs/wk, 4:30–7:30 PM PT) | In-person trial family concierge greeting at Suite C, front-desk EDC gear/singlet merchandising, Summer Intensive Camps |
| **Stage 4 — Expansion (Month 9–12 / Q1 2027)** | **120+ Members** (~$16,800+ MRR / $235.2K Total Run Rate) | Dedicated Youth & Adult Mat Leads across expanded mat space | **Pep Boys (`30085 Industrial Pkwy SW`, Union City) Dual-GBP Annex** (if owner contact & lease close) |

### Team and agency model (Functional Ownership)

| Function | Owned Strategically By (Internal / fCMO) | Executed By (Operator / Specialist) |
|---|---|---|
| **Growth Marketing (Local SEO, CRO & Attribution Engine)** | Rodney Lewis (Sprintz fCMO) | Sprintz Growth OS (`seo-audit`, `programmatic-seo`, `cro`, `uwc-attribution.js`) |
| **Product & Academy Experience (Curriculum, Safety & Culture)** | Naweed Zemaryalai & Karim Zemaryalai | 6-Coach UWC Bench (1:6 ratio, 2× daily hospital-grade mat sanitization) |
| **Content & Lifecycle Trust Engine (SMS, Email & Video)** | Rodney Lewis (Strategy/Automation) + Naweed (Mat Voice) | Automated 10DLC SMS (`(510) 303-4869`) + SES Email flows + Naweed 2-way replies & mat video clips |

---
