# United Wrestling Club (UWC) — 12-Month Growth Marketing Plan (v1)

**Prepared by:** Rodney Lewis — Sprintz Growth & Technical Systems Architecture (fCMO)  
**For:** Head Coach Naweed Zemaryalai & Founder Karim Zemaryalai (United Wrestling Club LLC)  
**Facility:** 30139 Industrial Pkwy SW, Suite C, Hayward, CA 94544 | USA Wrestling Regional Training Center (RTC) #513  
**Date:** 2026-11-03  
**Status:** Draft v1 — Grounded in Master Discovery Findings (`discovery/master_discovery_findings.md`) & Nov 2 Founder Mandate  

---

## 1. Executive summary

This plan optimizes for one concrete outcome over the next 12 months: **scaling United Wrestling Club from its ~45-athlete recurring baseline (~$6,299 MRR / ~$75,588 ARR) to 75 active recurring athletes in 90 days ($10,500 MRR / $126,000 ARR) and 120 active recurring athletes in 12 months ($16,800 MRR / $201,600 membership ARR; $235,200 total annualized run rate with auxiliary programs) using 100% organic local SEO, on-page conversion engineering, and automated SMS/email lifecycle systems—with $0 in paid advertising.**

### Three big bets, ranked by leverage

1. **Bet 1 — Unlocking East Bay Local Search & Technical Crawlability (Acquisition):** UWC already commands ~2,086 estimated monthly organic visits, 368 ranked keywords, a 5.0-star Google rating (42 reviews), and striking-distance rankings (`wrestling gym` #6, `wrestling classes near me` #9, `wrestling near me` #11, `wrestling club` #12, `youth wrestling near me` #17)—despite serving a 0-word client-side Next.js spinner shell (`<div id="__next"></div>`), returning 404s on `sitemap.xml` and `robots.txt`, and hiding all 41 tournaments on `/events` inside a JavaScript bundle. Replacing the empty shell with a static pre-rendered foundation (`v04` *The Olympic Sanctuary*), resolving the `(510) 303-4869` vs. `[retired number]` NAP phone conflict, prerendering `/events` with `SportsEvent` schema, and shipping dedicated service-area and program pages across **Hayward, Union City, Fremont, Newark, Castro Valley, and San Leandro** turns UWC's dormant domain equity into an East Bay local search moat.
2. **Bet 2 — First-Party Lead Capture, Performance Refresh & Instant SMS/Email Activation (Activation):** Sending cold mobile visitors (>6.5s mobile LCP, 17.72 MB raw hero video) straight to third-party `wrestlingiq.com` account creation causes an estimated 40%–60% drop-off before UWC ever captures a parent's name or phone number, while industrial-corridor uncertainty (`Suite C`) holds trial show-up rates near ~45%–55%. Deploying the `<1.4s` LCP design refresh (<2MB VP9/WebM video), the native `<dialog>` **$15 3-Day Mat Pass** modal (wired with 19 first-party attribution fields via `uwc-attribution.js` and TCPA `STOP` opt-out compliance), and the 60-second SMS/Email Suite C arrival guide captures the parent first, lifts trial show-up rates toward 75%–82%, and stitches every paid membership in WrestlingIQ (Team #513) back to its original organic search landing page.
3. **Bet 3 — Seasonal PIF Loyalty Architecture, Review Velocity & Auxiliary Program Layering (Retention, Referral & Revenue):** Combat-sports academies suffer predictable roster dips (~7.5% monthly churn baseline) around the November and May youth sports transition windows. Rather than discounting public monthly dues ($139.99/mo), UWC will insulate cashflow and cut churn toward 4.5% (90d) and 3.2% (12m) by offering targeted 6-month ($699.95) and 12-month ($1,399.90) Paid-In-Full (PIF) renewals 30–45 days ahead of seasonal transitions, launching a crawlable `/reviews/` submission hub (`ChIJsQd_yMaVj4ARrXw93nb4euo`), and piloting high-margin auxiliary revenue streams (Women's Self-Defense & Corporate Clinics + Quarterly Community Open Mat Mixers).

### What 12 months looks like, plausibly (Scenario Targets)

- **Active recurring roster:** **45 → 75 athletes (90 days) → 120 athletes (12 months)** (+75 net athletes / +166.7%).
- **Monthly recurring tuition (MRR):** **$6,299/mo → $10,500/mo (90d) → $16,800/mo (12m)** ($201,600 membership ARR).
- **Auxiliary & clinic revenue:** **$0 baseline → $1,250/mo (90d) → $2,800/mo (12m)** (**$235,200 total annualized gross run rate**).
- **Monthly churn & athlete LTV:** **7.5%/mo → 4.5%/mo (90d) → 3.2%/mo (12m)**, expanding indicative reciprocal-churn gross LTV from **~$1,867 (13.3 mo)** to **~$3,111 (22.2 mo)** at 90 days and **~$4,375 (31.25 mo)** at 12 months.
- **Local search & reputation moat:** Top-3 Google Map Pack placement across the 6-city Alameda County corridor, **42 → 110+ Google reviews (5.0★)**, and **18/100 → 80+/100 AI/GEO readiness** across ChatGPT, Perplexity, Claude, and Google AI Overviews.
- **Facility expansion readiness (Q1 2027 Backlog):** Dual-GBP protection architecture pre-staged for the former Pep Boys facility (`30085 Industrial Pkwy SW`, Union City) once property-owner contact is established after New Year's.

### 90-day priorities (The 6 ships in Q1)

1. **Unblock measurement & fact register (Weeks 1–2):** Upgrade GA4 (`562010875`) to Editor, connect GSC, Formspree (`xyyavaaj`), WrestlingIQ Team #513 Admin, and ESP/SMS platforms; confirm primary phone (`(510) 303-4869`), trial terms ($15 3-Day Mat Pass `#6327`), and coaching credentials.
2. **Ship the pre-rendered flagship redesign (`v04`) & technical SEO foundation (Weeks 1–2):** Replace the 0-word S3 spinner shell with semantic static HTML, <2MB VP9/WebM video, `sitemap.xml`, `robots.txt`, `llms.txt`, and `SportsActivityLocation` / `ExerciseGym` JSON-LD `@graph`.
3. **Activate on-page `<dialog>` Trial Pass capture + `uwc-attribution.js` stitcher (Weeks 2–3):** Route all CTAs through the native modal (with 19 hidden attribution fields, self-reported source dropdown, and TCPA `STOP` opt-out checkbox) prior to WrestlingIQ Team #513 checkout.
4. **Launch A2P 10DLC SMS & DMARC-aligned Email Lifecycle Flows (Weeks 3–4):** Turn on the 4 automated SMS sequences (`(510) 303-4869`) and 3 email sequences (`@unitedwrestlingclub.com` clearing DMARC `p=quarantine`) covering Suite C arrival instructions, abandoned WrestlingIQ checkout recovery, USAW/SCWAY card onboarding, and Day-21 review asks.
5. **Deploy the 6-City Alameda County Local SEO Cluster + Prerendered `/events/` & `/reviews/` Hubs (Weeks 5–8):** Publish distinct, high-intent service-area pages for Hayward, Union City, Fremont, Newark, Castro Valley, and San Leandro, plus the 41-tournament `/events/` schedule (`SportsEvent` schema) and `/reviews/` submission engine.
6. **Launch Pre-Season PIF Loyalty Campaign & Pilot Quarterly Community Mat Day (Weeks 9–12):** Roll out the 6- and 12-month Paid-In-Full loyalty offer to high-attendance families ahead of seasonal transitions and host the first East Bay Community Open Mat & BJJ Takedown Mixer.

---

## 2. Strategic frame

### What United Wrestling Club is, in one sentence
United Wrestling Club (USA Wrestling Regional Training Center #513) is an Olympic-lineage youth, scholastic, and adult wrestling and combat-sports academy in Hayward, CA that builds technical mastery, physical resilience, and character for East Bay families and athletes.

### The category we're claiming
UWC is claiming the category of **East Bay Premier Olympic & Scholastic Wrestling Academy (USA Wrestling RTC #513)**. Rather than competing as a generic strip-mall martial arts dojo or fitness gym, UWC occupies a distinct structural niche along the I-880 corridor: an authentic, family-trusted Regional Training Center where 5-year-old beginners, CIF/NCS high school state contenders, and adult BJJ/MMA grapplers train on **3,000 sq ft of hospital-sanitized Dollamur mats** under Olympic qualifiers, collegiate coaches, and California state champions.

### Who we're for (ICP, distilled)

- **Persona 1 — The Safety- & Character-First Youth Parent (Kids Ages 5–13 | Youth 2-Day `#1087` $89.99/mo & 4-Day `#4981` $139.99/mo):**
  - *Geography:* 0–18 minute drive from `30139 Industrial Pkwy SW, Suite C` (Hayward `94544/94541/94545`, Union City `94587`, Fremont `94536/94538/94539`, Newark `94560`, Castro Valley `94546`, San Leandro `94577`).
  - *Stated problem:* "I want an after-school sport in the East Bay that builds my child's confidence, discipline, and coordination."
  - *Real problem:* Fear of rough/unsupervised coaching, skin infections (ringworm/staph), hidden belt-testing fees, 12-month lock-in contracts, and awkwardness finding Suite C inside an industrial park on Day 1.
  - *What they're actually buying:* A 1:6 coach-to-athlete ratio, 2× daily EPA hospital-grade mat sanitization, structured mentorship under the **EDC creed (*Excellence / Discipline / Champions*)**, and transparent month-to-month tuition.
- **Persona 2 — The CIF / NCS Scholastic Contender & Parent (Ages 14–18 | Middle/HS `#2286` $139.99/mo & Competition Youth `#3574` $150/mo):**
  - *Geography:* Feeder high schools across Alameda County (James Logan HS in Union City, Hayward HS, Moreau Catholic, Washington HS, American HS, Newark Memorial, Castro Valley HS, San Leandro HS).
  - *Stated problem:* "My wrestler needs elite off-season Freestyle/Greco-Roman and Folkstyle mat time to place at SCWAY, NCS, and CIF State."
  - *Real problem:* High school rooms close or slow down in the off-season, and local recreational clubs lack Olympic/collegiate coaching depth and tournament cornering across the 41-event season (`/events`).
  - *What they're actually buying:* Direct technical instruction from 1980 Olympic qualifier Karim Zemaryalai, SFSU Kinesiology Head Coach & UFC corner Naweed Zemaryalai, Asian Games silver medalist Rashad Rahimi, and 3× CA Greco State Champion Sandeep Singh Gosal.
- **Persona 3 — The Adult Grappler, BJJ Cross-Trainer & Women's Self-Defense Participant (18+ | Adult `#1084` $139.99/mo, BJJ `#9536` $100/mo, Open Mat `#2664` $15):**
  - *Stated problem:* "My BJJ stand-up and takedown defense are weak" or "I want practical, scenario-based self-defense and conditioning."
  - *Real problem:* Traditional BJJ academies start from the knees, while hardcore MMA gyms can feel unapproachable for working professionals or women seeking structured self-defense.
  - *What they're actually buying:* Authentic Soviet/American takedown mechanics, Wrestle-Jitsu chain wrestling, Saturday Bay Area Open Mat rounds, and modular 6-week self-defense cohorts.

### The business model logic
- **100% Organic Acquisition Mandate:** Per Head Coach Naweed Zemaryalai's explicit directive on November 2, 2026 (*"bruh i'm not trying to pay for any paper clip things bruh i'm only looking for like organic"*), UWC spends **$0 on paid ads**. Every dollar of growth compounds through owned digital assets: technical SSR/SSG speed, local programmatic landing pages, Google Business Profile Map Pack dominance, and review velocity.
- **Two-Step Low-Friction Entry ($15 3-Day Mat Pass → $139.99/mo Core Membership):** Parents claim a **$15 3-Day Mat Pass (`#6327`)** inside an on-page `<dialog>` modal first (capturing first-party contact + attribution data in Formspree `xyyavaaj`), receive immediate SMS/email Suite C arrival instructions, experience 3 consecutive practices, and convert into **$139.99/mo unlimited recurring membership** in WrestlingIQ (Team #513).
- **Aligned Performance Retainer Economics:** Sprintz operates on a **$1,000/mo base retainer + $25/mo rev-share per verified active recurring athlete above the 45-member baseline**. Just **7 net new recurring athletes** ($979.93/mo in recurring dues) completely self-liquidates the base retainer; at the 90-day target of 75 athletes (+30 net), UWC adds **+$4,200/mo (+$50,400/yr)** in recurring tuition while paying $1,750/mo total ($1,000 base + $750 rev-share).

### Brand voice & factual invariants (the non-negotiables)
Bound by **ADR-001 (Facility & Coaching Invariants)**, **ADR-002 (`v04` Flagship Parity)**, **ADR-003 (Branded Reviews)**, and **ADR-004 (Commercial Pricing & PIF)**:
- **Tone:** Industrial utility, documentary honesty, and welcoming family mentorship (inspired by Rogue's specification clarity, Leica's documentary restraint, and Darc Sport's team brotherhood—never sterile corporate SaaS jargon or hyper-aggressive "blood-and-cage" clichés that alienate parents).
- **The EDC Creed:** *Excellence / Discipline / Champions* woven consistently across hero copy, mat room signage, email footers, and apparel.
- **YES Vocabulary / Standardized Invariants:**
  - `3,000 sq ft of Dollamur competition mats` (strictly retire the legacy `5,000 sq ft` claim).
  - `1:6 coach-to-athlete ratio` and `2× daily EPA hospital-grade mat sanitization` (confirm universal session applicability with Naweed).
  - `USA Wrestling Regional Training Center (RTC) #513`.
  - `1980 Moscow Olympic Qualifier Karim Zemaryalai` & `Head Coach Naweed Zemaryalai (B.S. Kinesiology, SFSU)` (avoid repetitive "Dagestani lineage" filler; confirm exact qualifier/medal phrasing with Karim).
  - `$15 3-Day Mat Pass` (3 consecutive age-appropriate practices), `$15 Saturday Open Mat Drop-In`, and `$139.99/mo Core Unlimited Membership` with **no long-term contract lock-in**.
- **NO Vocabulary / Guardrails:**
  - Never claim a "Free Trial" on FAQ/subpages if the standard entry offer is the `$15 3-Day Mat Pass` (unless a specific free assessment policy is explicitly confirmed by Naweed).
  - Never imply UWC operates physical satellite facilities in Fremont, Newark, Castro Valley, or San Leandro; position sub-market pages transparently as **East Bay commuter/service-area hubs** showing exact drive times along I-880 / Industrial Pkwy to `30139 Industrial Pkwy SW, Suite C, Hayward`.
  - Never gate reviews by star rating or offer incentives contingent on 5-star Google reviews.

---

## 3. Current state

### Team composition (marketing & growth surface area)

| Person | Role | Shape | Marketing & Operational Surface Area |
|---|---|---|---|
| **Naweed Zemaryalai** | Head Coach & Co-Founder (UWC) / CEO (TravaLab) | T-shaped Operator & Technical Coach | Owns mat curriculum (SFSU Kinesiology, Chabot College, UFC corner), parent/athlete mat-side conversion, 2-way SMS replies on `(510) 303-4869`, Instagram video capture, and final sign-off on commercial offers/policies. |
| **Karim Zemaryalai** | Founder & Principal Coach | Deep Technical Authority | 1980 Olympic qualifier & Ali Aliyev medalist; anchors academy heritage, senior technical instruction, and legal/commercial co-signatory authority. |
| **Rashad Rahimi, Sandeep Singh Gosal, Steve Siroy, Farid Siddiq** | 4-Coach Secondary Bench | Subject-Matter Specialists | Deliver the 1:6 coaching ratio across Freestyle, Greco-Roman, Scholastic Folkstyle, and Combat Footwork/Boxing; subjects for documentary coach spotlights and tournament cornering across the 41-event schedule. |
| **Rodney Lewis (Sprintz Growth OS)** | Fractional CMO & Technical Growth Architect | **π-shaped Strategist + Engineer** (Local SEO + CRO/Full-Stack + Lifecycle Automation) | Owns the `v04` static redesign, 32-route Alameda County local SEO build, GBP/citation engineering, GA4 (`562010875`) + `uwc-attribution.js` instrumentation, and automated SMS/Email lifecycle campaigns. |

**Team gap assessment:** UWC has no dedicated front-desk receptionist during evening practice hours (4:30 PM – 8:00 PM PT), resulting in an estimated **10–18 missed phone inquiries per month** while coaches are on the mat. At UWC's current stage ($75.6K ARR), hiring a $3,500/mo front-desk admin would consume >50% of MRR. Instead, our architecture solves this gap via **on-page `<dialog>` modal capture + instant automated 10DLC SMS (`TXT-1.1`) + missed-call text-back automation**, deferring a part-time Operations/Member Experience Coordinator hire until the roster crosses **90–100 active athletes (~$13K–$14K MRR)**.

### Marketing budget (current & unit economics)

- **Paid acquisition:** **$0 / month** (Permanent founder rule: 100% organic).
- **fCMO & Growth OS Retainer (Sprintz — Invoice B):** **$1,000 / month flat base** + **$25 / month per incremental active recurring athlete above the 45-member baseline**.
- **Tooling stack overhead:** **~$50–$120 / month**
  - AWS Route 53 DNS + Static Hosting (`$5–$15/mo`)
  - WrestlingIQ Team #513 (`already in core gym operations`)
  - Formspree (`xyyavaaj`) + Amazon SES (`@unitedwrestlingclub.com`) + 10DLC SMS automation via HighLevel/Twilio (`~$45–$105/mo`).
- **Total monthly marketing spend:** **~$1,050–$1,120 / month at baseline** (~16.7% of current $6,299 MRR; well within the 15%–25% growth-stage allocation benchmark).
- **Blended CAC (modeled at 90-day trajectory):** Reaching 75 active athletes in 90 days (+30 net adds; ~38–42 gross adds accounting for churn, or ~13–14 gross new members/mo) at an average monthly marketing outlay of ~$1,375/mo ($1,000 base + ~$300 avg rev-share + ~$75 tools) yields a **blended CAC of ~$98–$106 per enrolled recurring athlete** against an indicative gross LTV of **$1,867 (at 7.5% churn) to $3,111 (at 4.5% churn)**—an exceptional **18× to 30× LTV:CAC ratio**.

### Phase of business growth
UWC is currently in the **$10K–$100K ARR "Treacherous Middle" ($75,588 annualized membership run rate at 45 athletes)**, where word-of-mouth and natural founder reputation have filled the first 45 spots, but uninstrumented digital leaks (>6.5s mobile load, 0-word SSR shell, cold third-party checkout redirects, and 7.5% seasonal churn) prevent the roster from compounding past 50. Section 9 (90-Day Roadmap) and Section 10 (12-Month Outlook) sequence the transition into the **$100K–$250K ARR Acceleration Phase (75 → 120 athletes)**.

### What's already done (acknowledge, then build on)

| Asset / Achievement | Current Status | Marketing Leverage in This Plan |
|---|---|---|
| **42 Google Reviews (5.0★ Rating)** (`Place ID: ChIJsQd_yMaVj4ARrXw93nb4euo`) | Live & verified in Hayward | Anchors the Authority Banner across all pages, powers the new `/reviews/` hub, and gives UWC #1 Hayward Map Pack credibility. |
| **USA Wrestling RTC #513 + 6-Coach Olympic/State-Champ Bench** | Active in mat room | Differentiates UWC from every recreational martial arts studio in Alameda County; featured in structured `Person` schema and Email #2. |
| **Natural Organic Search Footprint (~2,086 visits/mo, 368 keywords)** | Live (`#6 wrestling gym`, `#9 wrestling classes near me`, `#11 wrestling near me`) | Proves Google already trusts the domain despite the broken Next.js shell; fixing SSR and adding sub-market pages unlocks Page-1 top-3 rankings rapidly. |
| **41-Tournament 2026–2027 Schedule (`/events`)** | Live in JS bundle (*North Coast Grapplers* at James Logan HS through Aug 2027) | Prerendering with `SportsEvent` schema turns `/events/` into an East Bay search magnet and fuels automated SMS/email tournament reminders. |
| **Three Interactive Redesign Concepts (`v01`, `v03`, `v04` Flagship) + Executive Portal (`portal/index.html`)** | Built, tested & live on staging | Includes <2MB VP9/WebM video compression (94% reduction), 12-component parity, `<dialog>` modal, 19 hidden attribution fields (`uwc-attribution.js`), and TCPA `STOP` opt-out compliance. |
| **4 Binding ADRs + SMS, Email & Attribution Playbooks** | Approved in repo | Ready for immediate production deployment once Naweed grants Editor/Admin access. |

### What's in-flight (drafted/built, awaiting confirmation or access to ship)

| Item | Status | Blocker |
|---|---|---|
| **Concept 02 (`v04` — *The Olympic Sanctuary*) Production Deployment** | Built & verified on staging (`v04/index.html`) | Client selection sign-off from Naweed/Karim + AWS Route 53 DNS handoff. |
| **On-Page `<dialog>` Trial Pass Modal + `uwc-attribution.js` Stitcher** | Wired across `v01`, `v03`, `v04` (19 hidden fields + TCPA `STOP` opt-out) | Formspree (`xyyavaaj`) inbox access + WrestlingIQ Team #513 Admin access. |
| **4-Sequence SMS Playbook & 11-Email Lifecycle Playbook** | Copy & triggers 100% written | A2P 10DLC EIN verification for `(510) 303-4869` + Route 53 SPF/DKIM records to clear DMARC `p=quarantine`. |
| **6-City Alameda County Programmatic Local Landing Pages** | Architecture & keyword map complete | Final schedule/offer verification from Naweed before publishing live routes. |
| **Former Pep Boys Facility Expansion (`30085 Industrial Pkwy SW`, Union City)** | Dual-GBP Annex Blueprint pre-staged | **Parked in Q1 2027 Backlog** — Naweed and the city have not yet been able to contact the property owner. |

### What's stuck (and must unstick in Weeks 1–2)

| Issue | Cost of Inaction | Immediate Action |
|---|---|---|
| **1. GA4 Measurement Blackout (`562010875`) & Missing GSC** | Recording **0 visitors** and **0 conversion events**; flying blind on which organic queries drive trials. | Naweed upgrades `lewis.rodneyl@gmail.com` from Viewer to **Editor** in GA4 and grants **Full** GSC access (Day 1). |
| **2. Zero-Word Next.js CSR Shell & 404 Discovery Files** | Initial HTML has 0 readable words; `sitemap.xml` and `robots.txt` return 404; `/events` (41 tournaments) is invisible to non-JS crawlers and AI engines (18/100 AI score). | Deploy pre-rendered static build (`v04`) with valid `sitemap.xml`, `robots.txt`, `llms.txt`, and JSON-LD `@graph` (Week 1–2). |
| **3. Cold Off-Site WrestlingIQ Bounce & Trial Copy Contradictions** | 40%–60% estimated mobile drop-off; homepage says `$15 3-Day Trial`, pricing says `$15 Drop-In`, FAQ says `Free Trial`. | Standardize `$15 3-Day Mat Pass (#6327)` + `$15 Saturday Open Mat Drop-In (#2664)` across all surfaces and route CTAs through the on-page `<dialog>` modal first (Week 1–2). |
| **4. NAP Phone Mismatch & Plural GBP Name** | Website/GBP shows `(510) 303-4869`, Facebook shows `[retired number]`, and GBP name reads "United Wrestling Clubs"—eroding local Map Pack trust. | Confirm `(510) 303-4869` as primary voice/SMS line and synchronize exact NAP across GBP, Facebook, Yelp, Apple Maps, and schema (Week 2). |

### Audit rubric snapshot (Scored from Discovery Materials — Nov 2026)

| # | Section | Live Baseline Score | Post-90d Target | Note (Live S3 Site Baseline vs. Staged Sprintz Architecture) |
|---|---|:---:|:---:|---|
| 1 | **Positioning** | **3 / 5** | 5 / 5 | Real-world RTC #513 & Olympic lineage is world-class, but live site buries it in a JS shell and states unverified 5,000 sq ft (`v04` standardizes 3,000 sq ft, 1:6 ratio, EDC creed). |
| 2 | **Customer research** | **4 / 5** | 5 / 5 | 42 5.0★ parent reviews, founder call transcript, and East Bay commuter search demand mapped to 3 core personas. |
| 3 | **Homepage** | **1 / 5** | 5 / 5 | Live site has >6.5s mobile LCP, 17.72 MB video, 0 SSR words, and cold off-site redirects. (`v04` flagship staged at <1.4s target LCP). |
| 4 | **Sales / product pages** | **2 / 5** | 4 / 5 | 8 WrestlingIQ plans exist, but live site has conflicting trial/schedule copy and lacks dedicated Youth, Varsity, Adult, and Women's program pages. |
| 5 | **Conversion pages** | **1 / 5** | 5 / 5 | Zero sub-market landing pages live for Union City, Fremont, Newark, Castro Valley, or San Leandro; `/events` is trapped in client-side JS. |
| 6 | **Competitor comparison** | **1 / 5** | 4 / 5 | East Bay martial arts/BJJ competitors mapped in discovery, but zero live comparison guides ("Youth Wrestling vs. BJJ / Karate for East Bay Kids"). |
| 7 | **Resources / content** | **1 / 5** | 4 / 5 | 41 tournaments + USAW/SCWAY rules exist on `/events` in JS, but no crawlable First-Day Parent Guide, Mat Hygiene protocol page, or Tournament Prep Hub. |
| 8 | **Onboarding** | **1 / 5** | 5 / 5 | No automated Suite C arrival/parking guide or USAW/SCWAY card setup live today (~45%–55% show-up rate). SMS/Email onboarding playbooks now built. |
| 9 | **Email lifecycle** | **1 / 5** | 5 / 5 | Domain has DMARC `p=quarantine`, but 0 automated trial welcome, member onboarding, or seasonal PIF flows live yet (11-email playbook ready to wire). |
| 10 | **Sales material** | **3 / 5** | 4 / 5 | Executive portal (`portal/index.html`), 3 live interactive concepts, ROI calculator, and corporate/women's self-defense clinic models built. |
| 11 | **Messaging** | **3 / 5** | 5 / 5 | Strong *Excellence / Discipline / Champions* creed, but live site has "$15 trial vs. free trial" FAQ contradictions and unverified coach bio claims. |
| 12 | **Pricing** | **3 / 5** | 5 / 5 | Clear $139.99/mo core price and $15 3-day pass in WrestlingIQ, pending formal sign-off on 15% sibling discount, 7-day cancel notice, and 6/12-mo PIF tiers. |
| 13 | **CRO** | **1 / 5** | 5 / 5 | Live site has 0 GA4 tracking and 40%–60% cold WrestlingIQ drop-off. (`uwc-attribution.js` + `<dialog>` modal with 19 hidden fields now wired in `v01/v03/v04`). |
| 14 | **GTM launches** | **1 / 5** | 4 / 5 | No structured seasonal launch motion for CIF/NCS offseason, post-football crossover, Women's cohorts, or Summer Camps yet. |
| 15 | **Ads (paid)** | **0 / 5** | 0 / 5 | Intentionally $0/mo per Naweed's strict 100% organic mandate (structural strategic choice, not a deficit). |
| 16 | **SEO** | **2 / 5** | 5 / 5 | Strong natural authority (2,086 est. visits/mo, 368 keywords, #6 `wrestling gym`), but bottlenecked by 0-word SSR shell, 404 `sitemap.xml`/`robots.txt`, and NAP phone mismatch. |
| 17 | **Internationalization** | **0 / 5** | 0 / 5 | N/A — Hyper-local East Bay academy serving a 20-minute drive radius in Alameda County. |

**Total Baseline Score: 28 / 85 (32.9%) → 90-Day Target: 66 / 85 (77.6%)**

**Shape interpretation:** UWC exhibits a classic **"World-Class Physical Product & Reputation (#1, #2, #11, #12), Broken Digital Plumbing & Lifecycle Execution (#3, #5, #8, #9, #13, #16)"** shape. The academy has already done the hardest thing in local business—building an Olympic-caliber coaching staff, a 3,000 sq ft mat room, 42 5.0-star reviews, and page-1/page-2 search rankings with zero SEO effort—while losing half its prospective families to a 0-word CSR web shell, cold off-site WrestlingIQ redirects, and missing SMS/email follow-up. Sections 4 (Acquisition), 5 (Activation), and 6 (Retention) are the longest sections in this plan because closing that digital execution gap unlocks immediate, compounding roster growth.

---

## 4. Acquisition

### Current state
UWC generates an estimated **2,086 organic search visits per month** across **368 ranked keywords** (OpenSEO baseline) and holds a **5.0-star rating across 42 Google reviews** in Hayward (`Place ID: ChIJsQd_yMaVj4ARrXw93nb4euo`). It ranks #1 in the local pack for sampled Hayward and Tri-City "Wrestling Club" searches and sits in striking distance (positions #6 to #22) for high-volume regional terms:
- `wrestling gym` — **Position #6** (2,900 monthly searches)
- `wrestling classes near me` — **Position #9** (1,900 monthly searches)
- `wrestling near me` — **Position #11** (9,900 monthly searches)
- `wrestling club` — **Position #12** (5,400 monthly searches)
- `wrestling gyms near me` — **Position #13** (3,600 monthly searches)
- `wrestling clubs near me` — **Position #14** (8,100 monthly searches)
- `youth wrestling near me` — **Position #17** (6,600 monthly searches)
- `wrestling academy near me` — **Position #22** (5,400 monthly searches)

However, 100% of this traffic hits a single un-prerendered homepage (`/`) with 0 server-rendered words, while neighboring East Bay cities (Union City, Fremont, Newark, Castro Valley, San Leandro) and program-specific queries lack dedicated landing pages.

### The plan (7 Acquisition Moves — 100% Organic)

- **Move 1 — Technical SSR/SSG Overhaul & Crawlability Restoration (`v04` Flagship):** Replace the client-side S3 Next.js shell with pre-rendered semantic HTML (`v04/index.html`) delivering <1.4s target mobile LCP, <2MB VP9/WebM hero video with preload poster, and valid `robots.txt`, `sitemap.xml`, `llms.txt`, and `llms-full.txt` files. Embed a unified JSON-LD `@graph` (`SportsActivityLocation`, `ExerciseGym`, `LocalBusiness`, `Person` for all 6 coaches, `Offer` for the 8 WrestlingIQ plans, and `FAQPage`) with canonical NAP (`30139 Industrial Pkwy SW, Suite C, Hayward, CA 94544`, `(510) 303-4869`). This immediately lifts UWC's **18/100 AI/GEO readiness score** and lets Googlebot and LLM answer engines index every word of UWC's coaching pedigree and program matrix on initial HTTP response.
- **Move 2 — 6-City Alameda County Programmatic Local Landing Pages:** As agreed on the November 2 call (*"different locations and CDs and searches and zip codes"*), deploy dedicated, non-duplicative commuter service-area pages for **Hayward (`/locations/hayward-ca/`), Union City (`/locations/union-city-ca/`), Fremont (`/locations/fremont-ca/`), Newark (`/locations/newark-ca/`), Castro Valley (`/locations/castro-valley-ca/`), and San Leandro (`/locations/san-leandro-ca/`)**. To comply strictly with Google doorway-page guidelines and ADR-001, each page never claims a fake satellite address; instead, it features exact drive times along I-880 / Industrial Pkwy SW to Suite C, local feeder high school context (e.g., James Logan HS in Union City, Washington/American/Irvington in Fremont, Newark Memorial, Castro Valley HS), local parent testimonials, and a pre-selected `<dialog>` Trial Pass CTA.
- **Move 3 — Dedicated Program & Comparison Pillar Pages:** Expand beyond a single-page brochure by publishing dedicated program routes: `/programs/youth-wrestling/` (Ages 5–13), `/programs/high-school-scholastic/` (Ages 14–18 CIF/NCS prep), `/programs/adult-wrestling-bjj/` (18+ Wrestle-Jitsu & Takedowns), `/programs/saturday-open-mat/`, and `/programs/womens-self-defense/`. Pair these with two high-intent East Bay parent comparison guides: *"Youth Wrestling vs. Brazilian Jiu-Jitsu & Karate: Which Builds Better Confidence and Athleticism for East Bay Kids?"* and *"How Off-Season Club Wrestling Prepares Alameda County High School Athletes for NCS & CIF State."*
- **Move 4 — Prerendered `/events/` 41-Tournament Hub with `SportsEvent` Schema:** Unlock the 41 scheduled 2026–2027 tournaments currently trapped inside `/_next/static/chunks/pages/events-c19ceb4499e7a4a0.js` (*North Coast Grapplers* at James Logan HS in Union City, SCWAY, SCVWA, NCS, CIF State, CAUSAW Folkstyle/Freestyle/Greco State in Fresno, U.S. Open in Las Vegas). Prerender `/events/` as static HTML with `SportsEvent` JSON-LD schema, retains the interactive *"Jump to Next Upcoming Event"* button, and adds a downloadable **East Bay Wrestling Parent Sanctioning Checklist** (explaining USA Wrestling `usawmembership.com` vs. SCWAY `scwaywrestling.org` cards and tournament singlet rules) that captures parent emails/SMS opt-ins.
- **Move 5 — Google Business Profile (`ChIJsQd_yMaVj4ARrXw93nb4euo`) & Citation Synchronization:** Standardize GBP name ("United Wrestling Club" vs. "United Wrestling Clubs"), lock `(510) 303-4869` across Facebook (replacing `[retired number]`), Yelp, Apple Maps, Bing Places, Nextdoor, SCWAY, and USA Wrestling (`team_id=513`), add secondary GBP categories (*Youth Organization*, *Sports Club*, *Martial Arts School*, *Physical Fitness Program*), upload 20+ geo-tagged documentary photos from `video_assets/stills_selected/`, and publish weekly GBP Updates tied to upcoming `/events/` tournaments and `$15 3-Day Mat Pass` links tagged with `?utm_source=gbp&utm_medium=maps&cid=16896090141452237997`.
- **Move 6 — Local Feeder School, Football Coach & BJJ Academy Backlink Partnerships:** Execute Naweed's organic backlink directive by building high-authority local links and referral bridges: (a) partner with East Bay high school football and wrestling programs (James Logan, Hayward, Moreau Catholic, Chabot College alumni network) on off-season tackling/leverage clinics; (b) cross-list UWC's Saturday Open Mat ($15 drop-in) with neighboring East Bay BJJ academies whose members need takedown rounds; and (c) list UWC in municipal recreation guides, Chamber of Commerce directories, and CAUSAW/SCWAY club directories.
- **Move 7 — Short-Form Documentary Video Repurposing (Instagram / YouTube Shorts / GBP):** Repurpose Naweed's corner footage, technique breakdowns, and youth mat drills into 2–3 weekly vertical clips (Instagram Reels, YouTube Shorts, GBP Video Updates) anchored by the EDC creed (*Excellence / Discipline / Champions*). Every profile bio and pinned comment routes traffic to `unitedwrestlingclub.com/?utm_source=instagram&utm_medium=social` to capture the `$15 3-Day Mat Pass`.
- **Skipped Channel — Paid Search & Paid Social Ads ($0/mo):** Explicitly skipped across all 4 quarters per Naweed's strict zero-ads mandate.

### 90-day acquisition moves
- **Weeks 1–2:** Ship pre-rendered `v04` flagship; publish `sitemap.xml`, `robots.txt`, `llms.txt`, and JSON-LD `@graph`; fix Facebook `[retired number]` → `(510) 303-4869` NAP mismatch; install GA4 (`562010875`) and submit sitemap in GSC.
- **Weeks 3–4:** Ship prerendered `/events/` (41-tournament hub + `SportsEvent` schema) and `/reviews/` hub; optimize GBP categories, services, Q&A, and UTM links.
- **Weeks 5–8:** Publish the 6 Alameda County city landing pages (`Hayward`, `Union City`, `Fremont`, `Newark`, `Castro Valley`, `San Leandro`) and 4 core `/programs/` pages; begin weekly GBP post + 2×/wk Instagram/Shorts cadence.
- **Weeks 9–12:** Publish 2 parent comparison guides (Wrestling vs. BJJ/Karate; CIF/NCS Offseason Guide); execute first 5 local backlink placements (Chabot/HS booster links, local directories, BJJ cross-promotion).

### 12-month acquisition outlook
- **Q1 (Months 1–3):** 100% indexation of 15+ core/local routes; move striking-distance keywords (`wrestling gym`, `wrestling near me`, `wrestling classes near me`, `youth wrestling near me`) into Top 3–5 in Hayward/Union City/Fremont; grow organic traffic from **~2,086 → 3,200 visits/mo**.
- **Q2 (Months 4–6):** Expand programmatic footprint to all 32 planned Alameda County city × program combinations; launch Spring Freestyle/Greco & Post-CIF State recruitment push; reach **4,000 organic visits/mo**.
- **Q3 (Months 7–9):** Summer Wrestling Camp & Youth Intensive SEO surge + Post-Summer Back-to-School / Pre-Football crossover campaign; reach **4,500 organic visits/mo**.
- **Q4 (Months 10–12):** Winter Folkstyle / NCS / CIF Season dominance + **Q1 2027 Pep Boys (`30085 Industrial Pkwy SW`, Union City) Dual-GBP Annex activation** (if owner contact and lease close); reach **5,000+ organic visits/mo** and #1 Map Pack coverage across both Hayward (`94544`) and Union City (`94587`).

### Skills + tools
- **Skills:** `seo-audit`, `programmatic-seo`, `schema`, `ai-seo`, `directory-submissions`, `competitors`, `content-strategy`, `social`, `video`, `analytics`.
- **MCPs / APIs / Tools:** OpenSEO MCP (`get_domain_overview`, `get_serp_results`, `get_local_rank_grid`, `get_business_profile`, `inspect_urls`, `get_search_console_performance`), GA4 (`562010875`), Google Search Console, GitHub (`RL22/united-wrestling-club`).

---

## 5. Activation

### Current state
Activation is UWC's single largest conversion bottleneck:
1. **Slow mobile first impression:** >6.5s mobile LCP and an unoptimized 17.72 MB hero video on cellular networks.
2. **Premature third-party redirect:** Clicking any CTA bounces cold visitors directly to `wrestlingiq.com/unitedwrestlingclub/` account creation before UWC captures a first-party lead, causing an estimated **40%–60% abandonment rate**.
3. **Conflicting offer copy:** Homepage says `$15 3-Day Trial`, pricing says `$15 Drop-In`, FAQ says `Free Trial`, and the 7-column desktop schedule table is unreadable on mobile phones.
4. **Industrial-corridor "First-Day Anxiety":** Parents who do register receive no automated parking map, Suite C entrance guide, or gear checklist—leaving estimated trial show-up rates at **~45%–55%**.

### The plan (5 Activation Moves)

- **Move 1 — Standardize the Entry Offer & Deploy Mobile-First Schedule Cards (`v04`):** Lock in one unambiguous entry hierarchy across every page and FAQ: **`$15 3-Day Mat Pass` (`paid_session_id=6327`)** for new local athletes (3 consecutive age-appropriate practices), **`$15 Single Mat Drop-In` (`paid_session_id=2664`)** for Saturday Open Mat visitors, and **`$139.99/mo Core Unlimited Membership`** (`#4981` Youth / `#2286` Scholastic / `#1084` Adult). Replace the broken 7-column schedule table with interactive mobile day-filter pills (`All Days`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`).
- **Move 2 — On-Page Native `<dialog>` Trial Pass Modal with `uwc-attribution.js` & TCPA `STOP` Opt-Out:** Every CTA opens the native `<dialog>` modal (`v01`, `v03`, `v04`) on-site in <50ms. The form captures Athlete Name, Parent/Guardian Name, Mobile Phone, Target Program, and a mandatory **Self-Reported Attribution** dropdown (*"How did you first find United Wrestling Club?"*), plus an unchecked-by-default TCPA SMS opt-in checkbox with explicit `Reply STOP to opt out or HELP for help` disclosure. On submit, `assets/js/uwc-attribution.js` injects **19 hidden attribution & consent audit fields** (`uwc_lead_id`, `ga_client_id`, `initial_referrer`, `initial_landing_page`, `initial_utm_*`, `touch_path_json`, `consent_timestamp_utc`, `sms_opt_in_status`), dispatches a non-blocking payload to Formspree (`xyyavaaj`), and presents Step 2: a pre-composed SMS to Coach Naweed (`(510) 303-4869`) and a decorated WrestlingIQ Team #513 checkout link (`?ref_id=uwc_...`).
- **Move 3 — Automated 10DLC SMS Sequence 1 ("Instant Confirmation & First-Day Anxiety Killer") & Sequence 3 ("Abandoned Checkout Recovery"):**
  - *If the parent submits the modal but abandons WrestlingIQ checkout:* **SMS Sequence 3** fires at `+15 mins` (`TXT-3.1`), `+24 hours` (`TXT-3.2`), and `+72 hours` (`TXT-3.3`, offering to switch to a `$15 Saturday Open Mat Drop-In` `#2664`), recovering 20%–30% of abandoned checkouts.
  - *As soon as the pass is claimed:* **SMS Sequence 1** (`TXT-1.1` immediate, `TXT-1.2` -24h reminder, `TXT-1.3` +2h post-practice check-in from Coach Naweed) + **Email #1.1** deliver exact `30139 Industrial Pkwy SW, Suite C` parking instructions, 15-minute early arrival timing, and pocketless shorts/t-shirt gear rules—lifting trial show-up rate from **~45%–55% → 75%–82%**.
- **Move 4 — 5-Email Trial Welcome & Parent Trust Sequence (Days 0–9):** While the athlete completes their 3 consecutive practices (`discovery/uwc_email_marketing_playbook.md`), parents receive 5 plain-text-style emails from `@unitedwrestlingclub.com`:
  - *Email 1.1 (Immediate):* First-Day Suite C Arrival Guide & Waiver link.
  - *Email 1.2 (Day 2):* Coaching Pedigree — Karim's 1980 Olympic qualification + Naweed's SFSU Kinesiology methodology & 1:6 ratio.
  - *Email 1.3 (Day 4):* Parent Safety & Hygiene — 3,000 sq ft Dollamur mats & 2× daily EPA hospital-grade sanitization.
  - *Email 1.4 (Day 6):* East Bay Parent Social Proof — Verified stories from Hayward, Union City, and Fremont families (`5.0★ / 42 reviews`).
  - *Email 1.5 (Day 9):* Transparent `$139.99/mo` Team #513 Membership invitation (no long-term contract lock-in, 15% sibling discount).
- **Move 5 — SMS Sequence 2 ("3-Day Pass → $139.99/mo Member Conversion"):** Coordinates with the 5-email sequence on **Day 2 (`TXT-2.1`)**, **Day 3 (`TXT-2.2`)**, and **Day 5 (`TXT-2.3`)**, sending a direct deep-link to the athlete's exact WrestlingIQ age division (`#4981` Youth, `#2286` Varsity, `#1084` Adult) to lift show-up-to-member conversion from **~40% → 60%–68%**.

### 90-day activation moves
- **Weeks 1–2:** Deploy `v04/index.html` with `<dialog>` modal, `uwc-attribution.js`, and standardized `$15 3-Day Mat Pass` copy; submit A2P 10DLC brand/campaign registration for `(510) 303-4869` and add Route 53 SPF/DKIM records for `@unitedwrestlingclub.com`.
- **Weeks 3–4:** Turn on SMS Sequences 1, 2, and 3 + Email Sequence 1 (5-email Trial Welcome); verify Formspree (`xyyavaaj`) webhook → CRM ledger → WrestlingIQ (`?ref_id=uwc_...`) attribution stitch.
- **Weeks 5–8:** Instrument missed-call text-back on `(510) 303-4869` so any parent calling during 4:30 PM – 8:00 PM mat hours immediately receives a text with the `$15 3-Day Mat Pass` modal link.
- **Weeks 9–12:** Run first CRO review on modal completion rate and SMS show-up rate across city landing pages; A/B test modal headline framing (*"Claim Your First 3 Days — $15"* vs. *"Reserve Your 3-Session Mat Evaluation — $15"*).

### 12-month activation outlook
- **Visitor-to-lead rate:** **0.8%–1.5% baseline → 3.5% (90d) → 4.8% (12m)**.
- **Monthly trial registrations:** **~16/mo baseline → 45/mo (90d) → 75/mo (12m)**.
- **Trial show-up rate:** **~45% baseline → 75% (90d) → 82% (12m)**.
- **Show-up-to-paid member conversion:** **~40% baseline → 60% (90d) → 68% (12m)**.

### Skills + tools
- **Skills:** `cro`, `signup`, `onboarding`, `popups`, `sms`, `emails`, `copywriting`, `marketing-psychology`, `attribution`, `ab-testing`.
- **MCPs / APIs / Tools:** `assets/js/uwc-attribution.js`, Formspree (`xyyavaaj`), WrestlingIQ Team #513 (`paid_session_id=6327/2664/4981/2286/1084`), HighLevel / Twilio 10DLC (`(510) 303-4869`), Amazon SES (`@unitedwrestlingclub.com`), GA4 (`562010875`).

---

## 6. Retention

### Current state
UWC's working baseline assumes **~7.5% monthly churn** (~13.33-month average tenure; ~$1,867 indicative gross LTV at $139.99/mo), with pronounced seasonal vulnerability in **November** (fall-to-winter sports transition) and **May** (end of CIF/SCWAY folkstyle/freestyle cycle & start of summer travel). New parents who enroll in WrestlingIQ currently face friction navigating dual sanctioning memberships (**USA Wrestling** at `usawmembership.com` AND **SCWAY** at `scwaywrestling.org/sign-up`) plus tournament singlet/warm-up attire rules on `/events`.

### The plan (4 Retention Moves)

- **Move 1 — 30-Day Active Member Onboarding Sequence (Email Sequence 2 + SMS Onboarding):** Immediately upon WrestlingIQ Team #513 enrollment, trigger the 3-email Member Onboarding sequence (`discovery/uwc_email_marketing_playbook.md`):
  - *Email 2.1 (Day 1 of Membership):* Welcome to Team #513 — step-by-step links to secure the athlete's **USA Wrestling card (`usawmembership.com`)** and **SCWAY card (`scwaywrestling.org/sign-up`)**, how to order the UWC tournament singlet/warm-up kit at the front desk, and a bookmark link to the prerendered `/events/` 41-tournament schedule.
  - *Email 2.2 (Day 10):* The First 90 Days on the Mat — setting parent expectations around mat conditioning, learning how to fall/hand-fight before worrying about tournament medals, and how our 1:6 coaching ratio tracks individual progress.
  - *Email 2.3 (Day 21):* First-Month Milestone Check-In + GBP Review & Buddy Pass invitation.
- **Move 2 — Automated `/events/` Tournament & Weigh-In SMS/Email Reminders:** Use the 41-event competition calendar (`/events`) as a year-round retention spine. Athletes competing in at least 2 local SCWAY/SCVWA/USAW tournaments per season retain at >2× the rate of non-competing athletes. Send automated SMS/email reminders 10 days before Trackwrestling registration deadlines (e.g., *North Coast Grapplers* at James Logan HS in Union City, *Battle of the Bay*, *CAUSAW Folkstyle State* in Fresno) so families feel plugged into a championship team calendar.
- **Move 3 — Targeted Seasonal Paid-In-Full (PIF) Loyalty Promotions (ADR-004):** 30–45 days before the **November** and **May** seasonal transition windows, offer existing high-attendance members an optional prepaid renewal (`discovery/decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md` + Email Sequence 3.3 + SMS `TXT-4.2`):
  - **6-Month PIF (Pay 5 Months, Get Month 6 Free):** **$699.95** (effective rate $116.66/mo — saves $140).
  - **12-Month PIF (Pay 10 Months, Get 2 Months Free):** **$1,399.90** (or $1,500 bundled tier with limited-edition 400 GSM *EDC: Excellence / Discipline / Champions* heavyweight team hoodie/singlet kit, pending unit-cost sign-off).
  - *Strategic effect:* Eliminates November and May seasonal cancellation spikes for participating families while preserving the $139.99/mo public price integrity.
- **Move 4 — Failed-Payment Dunning, Freeze Policy & Lapsed-Athlete Win-Back (Email Sequence 3):**
  - *Involuntary churn:* Configure automated WrestlingIQ / Stripe card-retry + SMS payment-update nudges so expired debit/credit cards don't silently cancel active athletes.
  - *Summer / Multi-Sport Freeze Option:* Offer a formal 30-to-60-day seasonal hold/freeze (or 2-Day `#1087` $89.99/mo step-down save offer) for high school football players in August–October rather than full cancellation, followed by **Email 3.1 (Post-Football Crossover)** and **Email 3.2 (CIF/NCS Pre-Season Tune-Up)** to reactivate paused athletes automatically.

### 90-day retention moves
- **Weeks 1–2:** Export 24-month WrestlingIQ Team #513 member, pause, and cancellation history to establish true cohort churn baselines by division (`#4981` Youth vs. `#2286` Scholastic vs. `#1084` Adult).
- **Weeks 3–4:** Launch Email Sequence 2 (3-email Active Member Onboarding covering USAW/SCWAY cards + `/events/` calendar) and configure WrestlingIQ failed-payment SMS nudges.
- **Weeks 5–8:** Ship Email Sequence 3 (Lapsed Trial & Seasonal Crossover Win-Back) to historical Formspree (`xyyavaaj`) and past WrestlingIQ inactive contacts.
- **Weeks 9–12:** Launch the first **6-Month ($699.95) & 12-Month ($1,399.90) Seasonal PIF Loyalty Campaign** to active members (target: 8–10 PIF conversions generating $7,000–$13,999 in upfront cash collection and locking in 6–12 months of zero churn).

### 12-month retention outlook
- **Monthly churn rate:** **7.5%/mo baseline → 4.5%/mo (90 days) → 3.2%/mo (12 months)**.
- **Implied annual retention & tenure:** Average athlete tenure expands from **13.33 months (~$1,867 gross LTV)** to **22.22 months (~$3,111 gross LTV)** at 90 days and **31.25 months (~$4,375 gross LTV)** at 12 months.

### Skills + tools
- **Skills:** `churn-prevention`, `emails`, `sms`, `onboarding`, `offers`, `pricing`.
- **MCPs / APIs / Tools:** WrestlingIQ Team #513 billing/roster alerts, Amazon SES / ESP (`@unitedwrestlingclub.com`), HighLevel/Twilio 10DLC (`(510) 303-4869`).

---

## 7. Referral

### Current state
UWC's 5.0-star rating across 42 Google reviews proves parents love the club, and word-of-mouth from current families and high school teammates is already a top acquisition channel. However, referrals and reviews currently happen by accident: the legacy `/submit-review/` route relies on a client-side redirect, there is no automated Day-21 review prompt, and there is no structured buddy-pass or BJJ cross-training referral mechanic.

### The plan (4 Referral Moves)

- **Move 1 — Branded `/reviews/` Hub & Assisted Google Review Submission Engine (ADR-003):** Deploy the crawlable `/reviews/` page (`reviews/index.html`) featuring verified, attributed parent and athlete reviews filterable by division (*Youth*, *High School Varsity*, *Adult / BJJ*), a permanent redirect from `/submit-review/`, and an assisted **"Copy & Open Google Review"** workflow pointing directly to `https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo` (with clipboard + popup-blocker fallback and zero rating-gating).
- **Move 2 — Automated Day-14 / Day-21 SMS & Email Review Trigger:** Wire **SMS `TXT-4.1`** and **Email #2.3** to fire automatically on Day 21 of active membership (after the family has experienced 3 full weeks of coaching). If the parent replies with positive feedback, `TXT-4.1B` sends the direct Google review shortlink (`uwc513.co/review`), systematically scaling UWC from **42 → 70 reviews in 90 days → 110+ reviews in 12 months**.
- **Move 3 — "Bring a Training Partner" 3-Day Mat Pass & 15% Family/Sibling Program:** Embed a two-sided referral mechanic in Email #2.3 and quarterly member texts: active UWC families receive a shareable **"Teammate 3-Day Mat Pass"** link (`unitedwrestlingclub.com/?utm_source=member_referral&utm_medium=referral`) to invite a school or football teammate, paired with UWC's **15% additional-household/sibling tuition discount** (pending final Naweed confirmation per ADR-004).Every modal submission captures *"If referred by a coach, school, or family, who can we thank?"* (`self_reported_source = friend_family_referral`) so Coach Naweed can recognize referring families on the mat and award UWC EDC team gear credits.
- **Move 4 — Quarterly East Bay Community Day & BJJ Takedown Mixer (Growth Lever 3):** Host a quarterly Saturday Open Mat event combining a free youth introductory clinic (10:00 AM) with an East Bay BJJ & Grappling Takedown Mixer (11:30 AM). Partner with local Alameda County BJJ gyms and high school wrestling captains; require online RSVP via the `<dialog>` modal (tagging `utm_campaign=quarterly_bjj_mixer`) and follow up within 2 hours via SMS with the `$15 3-Day Mat Pass` or `$100/mo BJJ 3-Day (#9536)` / `$139.99/mo Adult (#1084)` offer.

### 90-day referral moves
- **Weeks 1–2:** Ship `/reviews/index.html` and configure permanent `/submit-review/` redirect; test the assisted Google review flow (`ChIJsQd_yMaVj4ARrXw93nb4euo`) on iOS and Android.
- **Weeks 3–4:** Activate automated Day-21 Review & Teammate Referral triggers (`TXT-4.1` + Email #2.3); send a one-time review request broadcast to the existing 45 active families who haven't left a Google review yet (immediate boost of +12–18 new 5.0★ reviews).
- **Weeks 5–8:** Formalize the 15% Sibling/Household discount and Teammate Pass tracking inside the `<dialog>` modal (`self_reported_source`).
- **Weeks 9–12:** Host **Quarterly Community Open Mat & BJJ Mixer #1** at `30139 Industrial Pkwy SW, Suite C` (target: 30+ RSVPs, 10+ trial pass claims, 4–5 new recurring adult/youth members).

### 12-month referral outlook
- **Google Review Velocity:** **42 reviews (5.0★) → 70 reviews (90d) → 110+ reviews (12m)**—cementing #1 Map Pack authority across Alameda County.
- **Referral Share of New Trials:** **15%–20% of all new trial passes** sourced via tracked teammate referrals, sibling enrollments, and Quarterly BJJ Mixers.

### Skills + tools
- **Skills:** `referrals`, `community-marketing`, `co-marketing`, `sms`, `emails`, `social`, `schema`.
- **MCPs / APIs / Tools:** `/reviews/index.html` submission engine, Google Business Profile (`Place ID: ChIJsQd_yMaVj4ARrXw93nb4euo`), `uwc-attribution.js` (`self_reported_source` tracking).

---

## 8. Revenue

### Current state
UWC currently generates **~$6,299/mo MRR (~$75,588 annualized membership run rate)** across ~45 active recurring athletes in WrestlingIQ (Team #513), anchored by a **$139.99/mo core unlimited membership price**. While 8 distinct session/plan IDs exist in WrestlingIQ (`#6327` $15 3-Day Trial, `#2664` $15 Drop-In, `#1087` $89.99 Kids 2-Day, `#4981` $139.99 Kids 4-Day, `#2286` $139.99 Middle/HS, `#3574` $150 Competition Youth, `#1084` $139.99 Adult, `#9536` $100 BJJ 3-Day), auxiliary revenue from structured seasonal PIF packages, women's self-defense cohorts, and corporate clinics is currently **$0/mo modeled baseline**.

### The plan (4 Revenue & Monetization Moves)

- **Move 1 — Core Plan Inventory Cleanup & Sibling/Tier Packaging (`WrestlingIQ Team #513`):** Reconcile the 8 WrestlingIQ plans with published website schedules (specifically resolving the Kids 4-Day `#4981` M–Th vs. M/W/F schedule conflict), standardize the **`$15 3-Day Mat Pass (#6327)` → `$139.99/mo Core Unlimited`** upgrade path, position **`$89.99/mo Kids 2-Day (#1087)`** as a structured down-sell/save offer for busy multi-sport youth families, and promote the **`$150/mo Competition Youth (#3574)`** tier (including tournament coaching support across the 41-event `/events/` calendar) as an ARPU expansion lever.
- **Move 2 — Seasonal 6-Month & 12-Month Paid-In-Full (PIF) Cashflow Engine (ADR-004):** Offer eligible active members the **6-Month PIF ($699.95 — 5 months paid, 6th free)** and **12-Month PIF ($1,399.90 — 10 months paid, 2 free, or $1,500 with limited 400 GSM EDC team kit)** 30–45 days before November and May. *Accounting guardrail:* As documented in `master_discovery_findings.md` §5–6, 10 annual PIF purchases generate **$13,999 in immediate upfront cash**, which accelerates working capital (e.g., for mat expansion or Q1 2027 Pep Boys deposits) and locks in retention, while recognizing tuition over the 6/12-month service period without double-counting in MRR/ARR.
- **Move 3 — 4-Tier Women's Self-Defense & Corporate Clinic Program (Growth Lever 2):** Once instructor availability (e.g., Louisa / qualified female lead coach), mat slot, and insurance are confirmed by Naweed, launch the 4-tier self-defense revenue ladder (`discovery/master_discovery_findings.md` §5 Lever 2):
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
| Ship prerendered **`/events/`** page (41-tournament 2026–2027 schedule + `SportsEvent` schema) and **`/reviews/`** hub (`ChIJsQd_yMaVj4ARrXw93nb4euo` submission engine) | Acquisition + Referral | Rodney Lewis (Sprintz) | `/events/` and `/reviews/` indexed in GSC; `/submit-review/` 301-redirected |
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

## 12. Tactical idea bank (All 139 `marketing-ideas` Cross-Referenced to UWC)

Sections 4–8 prescribe what UWC is executing now. This section cross-references all **139 proven tactics** from the `marketing-ideas` library (144 stage entries including 5 cross-cutting ideas) against UWC's 100% organic local SEO mandate, brick-and-mortar academy model, and brand voice.

**Status Legend:**
- **Now (Q1)** — Active in the 90-day roadmap
- **Q2** — Months 4–6 layer-in (post-foundation)
- **Q3+** — Months 7–9 expansion (Summer Camps, Women's/Corporate scaling)
- **Q4+** — Months 10–12+ / Long-game (Dual-GBP Union City Annex, regional tournaments)
- **Skip** — Incompatible with Naweed's Zero-Paid-Ads rule, B2B/SaaS-only, or off-brand for an Olympic RTC

### 12.1 Acquisition ideas (116 entries)

#### Active & Planned Acquisition Ideas (Now / Q2 / Q3+ / Q4+)

| # | Idea | Status | UWC Client-Specific Execution Note |
|---:|---|---|---|
| 1 | Easy Keyword Ranking | **Now (Q1)** | Push striking-distance terms (`wrestling gym` #6, `wrestling classes near me` #9, `wrestling near me` #11, `wrestling club` #12, `youth wrestling near me` #17) into Top 3 via SSR (`v04`) + title/H1/schema optimization. |
| 2 | SEO Audit | **Now (Q1)** | Completed in discovery (`master_discovery_findings.md`); fixes 0-word CSR shell, 404 `sitemap.xml`/`robots.txt`, and 17.72 MB video bottleneck. |
| 3 | Glossary Marketing | **Q2** | Publish *East Bay Parent's Guide to Wrestling Terms & Sanctioning* (Folkstyle vs. Freestyle vs. Greco-Roman, SCWAY vs. USAW, NCS, CIF, Takedown scoring). |
| 4 | Programmatic SEO | **Now (Q1) → Q2** | Ship 6 Alameda County city hubs in Q1 (`Hayward`, `Union City`, `Fremont`, `Newark`, `Castro Valley`, `San Leandro`), scaling to the full 32 city × program matrix in Q2. |
| 5 | Content Repurposing | **Now (Q1)** | Repurpose existing training footage (`video_assets/`) and tournament highlights into GBP updates, Instagram Reels, YouTube Shorts, and landing page embeds. |
| 6 | Proprietary Data Content | **Now (Q1)** | Prerender UWC's 41-event 2026–2027 competition calendar (`/events/`) with `SportsEvent` schema and USAW/SCWAY sanctioning requirements. |
| 7 | Internal Linking | **Now (Q1)** | Hub-and-spoke internal linking between `/`, the 6 `/locations/` hubs, the 4 `/programs/` pages, `/events/`, and `/reviews/`. |
| 8 | Content Refreshing | **Q2** | Seasonal refreshes of `/events/` tournament links and city landing pages ahead of CIF Folkstyle (Nov), Freestyle/Greco (March), and Summer Camps (June). |
| 9 | Knowledge Base SEO | **Q2** | Expand single-open `<details name="uwc-faq">` into a crawlable Parent & Athlete FAQ Hub (hygiene, headgear/shoes, USAW/SCWAY cards, weight classes). |
| 10 | Parasite SEO | **Q2** | Publish UWC clinic/open-mat announcements and East Bay youth wrestling guides on Medium, Patch (Hayward/Union City/Fremont), Nextdoor, and local Reddit (`r/BayArea`, `r/Fremont`, `r/Hayward`). |
| 11 | Competitor Comparison Pages | **Now (Q1)** | Publish *"Youth Wrestling vs. BJJ, Karate & Taekwondo for East Bay Kids"* and *"Club RTC Training vs. High School Season-Only Wrestling."* |
| 12 | Marketing Jiu-Jitsu | **Now (Q1)** | Turn the industrial-park location (`30139 Industrial Pkwy SW, Suite C`) and lack of flashy strip-mall glass into a badge of authenticity: *3,000 sq ft of pure Olympic Dollamur mat space, zero mall-dojo belt fees*. |
| 17 | Quiz Marketing | **Q3+** | Interactive *"Which UWC Program Fits Your Athlete?"* 30-second age/experience selector routing into the `<dialog>` Trial Pass modal. |
| 20 | Microsites | **Q4+** | Dedicated micro-hub for the Annual East Bay Open Mat / UWC Invitational Clinic once the Union City Annex opens. |
| 35 | Community Marketing | **Now (Q1)** | Quarterly East Bay Community Open Mat & BJJ Takedown Mixer at Suite C + feeder high school booster partnerships. |
| 36 | Quora Marketing | **Q2** | Answer Bay Area parent questions on Quora (*"Best youth martial arts in Fremont/Hayward?"*, *"What age should kids start wrestling?"*). |
| 37 | Reddit Keyword Research | **Now (Q1)** | Mine `r/wrestling`, `r/bjj`, `r/BayArea`, and `r/Fremont` for parent questions around mat hygiene, cauliflower ear, and youth sports costs. |
| 38 | Reddit Marketing | **Q2** | Authentic participation in `r/BayArea`, `r/Hayward`, `r/Fremont`, and `r/bjj` sharing open mat dates and youth clinic guides. |
| 39 | LinkedIn Audience | **Q2** | Use Naweed's LinkedIn to pitch East Bay HR/People leaders on **Tier 3 Corporate Wellness & Women's Self-Defense Clinics ($1,000–$1,500)**. |
| 40 | Instagram Audience | **Now (Q1)** | Primary social proof channel for East Bay parents & high school wrestlers; 2–3×/wk documentary reels + bio link with `?utm_source=instagram`. |
| 42 | Short Form Video | **Now (Q1)** | Vertical technique breakdowns, Karim/Naweed coaching mic'd-up clips, and youth drill highlights across Reels, Shorts, and GBP. |
| 44 | Comment Marketing | **Now (Q1)** | Active, supportive engagement from UWC on local East Bay high school athletics, NCS wrestling, and Chabot College sports posts. |
| 49 | Monthly Newsletters | **Q2** | Monthly *Team #513 Mat Report* email covering upcoming `/events/` tournaments, athlete medalists, and seasonal clinic dates. |
| 54 | Affiliate Discovery via Backlinks | **Q2** | Audit backlinks of California wrestling clubs and Bay Area BJJ academies using OpenSEO MCP (`get_backlinks_profile`) to find local directory opportunities. |
| 57 | Expert Networks | **Q3+** | Partner with East Bay physical therapists, youth sports chiropractors, and SFSU/Chabot kinesiology networks for athlete referrals. |
| 58 | Newsletter Swaps | **Q2** | Cross-promote UWC Youth Trial Passes and Women's Self-Defense workshops in local East Bay parent/PTA newsletters and BJJ gym dispatches. |
| 59 | Article Quotes (HARO) | **Q2** | Pitch Head Coach Naweed Zemaryalai (B.S. Kinesiology, UFC Corner, RTC Head Coach) & 1980 Olympian Karim Zemaryalai to Bay Area journalists covering youth sports & Olympics. |
| 64 | Community Sponsorship | **Now (Q1)** | Sponsor local feeder high school wrestling tournament brackets/banners (James Logan HS *North Coast Grapplers*, Hayward HS, Chabot). |
| 68 | Local Meetups | **Now (Q1)** | Quarterly Saturday Community Open Mat & East Bay BJJ Takedown Mixer (`$0` community intro / `$15` open mat drop-in). |
| 69 | Meetup Sponsorship | **Q2** | Co-sponsor local East Bay grappling open mats and high school athletic booster nights. |
| 70 | Conference Speaking | **Q3+** | Naweed speaking at local high school coaching clinics, Chabot College kinesiology panels, and corporate wellness seminars. |
| 74 | Press Coverage | **Q2** | Local East Bay press pitch (*Hayward Daily Review*, *East Bay Times*, *Tri-City Voice*) on 1980 Olympian Karim & Naweed building RTC #513 (and revitalizing the Industrial Pkwy corridor). |
| 76 | Documentaries | **Q3+** | 5-minute mini-documentary on the Zemaryalai family's Olympic journey from 1980 Moscow qualification to building UWC RTC #513 in Hayward. |
| 77 | Black Friday Promotions | **Now (Q1 — Nov)** | Pre-Thanksgiving / November **6-Month ($699.95) & 12-Month ($1,399.90) Seasonal PIF + Limited 400 GSM EDC Gear Bundle** for members and returning alumni. |
| 79 | Early-Access Referrals | **Q2** | Early-bird waitlist with buddy discount for the **6-Week Women's Self-Defense Cohort ($199)** and Summer Intensive Camps. |
| 80 | New Year Promotions | **Q1 2027 (Jan)** | January *"New Year / Winter NCS Push"* `$15 3-Day Mat Pass` campaign + **Q1 2027 Pep Boys (`30085 Industrial Pkwy SW`) owner follow-up**. |
| 81 | Early Access Pricing | **Q2** | Founding-cohort pricing (`$49` intro workshop → `$199` 6-week cohort) for the pilot Women's Self-Defense program. |
| 84 | Giveaways | **Q3+** | Tournament-week giveaway of an official UWC *EDC: Excellence / Discipline / Champions* heavyweight hoodie for tagging 2 East Bay teammates. |
| 98 | Template Marketing | **Now (Q1)** | Downloadable **East Bay Wrestling Parent's Tournament & Sanctioning Checklist** (USAW + SCWAY + weigh-in packing list) on `/events/`. |
| 100 | Promo Videos | **Now (Q1)** | Compressed <2MB VP9/WebM hero reel live across `v01`, `v03`, and `v04` flagship. |
| 101 | Industry Interviews | **Q2** | Short video/blog Q&As featuring UWC's 6 coaches (Karim, Naweed, Rashad Rahimi, Sandeep Singh Gosal, Steve Siroy, Farid Siddiq). |
| 102 | Social Screenshots | **Now (Q1)** | Feature verified 5.0★ Google review cards across the homepage, city pages, Email #1.4, and `/reviews/`. |
| 106 | End of Year Wraps | **Q4** | Annual *Team #513 Season Wrap* (total tournaments wrestled across the 41-event schedule, state qualifiers, mat hours logged). |
| 109 | Public Demos | **Now (Q1)** | Live interactive 3-Day Trial Pass preview + open spectator seating for parents at Suite C during any evening practice. |
| 111 | Challenges as Marketing | **Q3+** | *30-Day Off-Season Mat Attendance Challenge* for Youth & Scholastic wrestlers during May/June transition (earns EDC patch/shirt). |
| 114 | Moneyball Marketing | **Now (Q1)** | High-intent, zero-ad-spend local SEO (`wrestling near me`, `youth wrestling hayward`) + first-party `uwc-attribution.js` tracking. |
| 115 | Curation as Marketing | **Now (Q1)** | Curated 41-Tournament 2026–2027 Northern California Competition Directory at `/events/`. |
| 127 | YouTube Channel | **Q2** | Organize technique breakdowns and tournament match film by division (`Youth`, `Varsity`, `Wrestle-Jitsu`) with local SEO descriptions. |
| 129 | Review Sites | **Now (Q1)** | Google Business Profile (`42 → 110+ reviews`), Yelp, Facebook, and the first-party `/reviews/` hub. |

#### Skipped Acquisition Ideas (67 entries — Explicitly Excluded with Rationale)
- **#23–#34, #55, #60, #119 (15 Paid Advertising Ideas — Podcast Ads, Pre-targeting, Facebook Ads, Instagram Ads, Twitter Ads, LinkedIn Ads, Reddit Ads, Quora Ads, Google Ads, YouTube Ads, Cross-Platform Retargeting, Click-to-Messenger Ads, Influencer Whitelisting, Pixel Sharing, OOH Advertising):** **SKIP.** Explicitly prohibited by Naweed's November 2, 2026 **100% Organic / Zero-Paid-Ads Mandate** (*"bruh i'm not trying to pay for any paper clip things bruh i'm only looking for like organic"*).
- **#13 (Competitive Ad Research):** **SKIP.** No paid ad campaigns in scope.
- **#14–#16, #18–#19, #21–#22, #61, #63, #87–#89, #117, #123, #125, #128 (16 B2B SaaS / Developer / Browser Ideas — Side Projects, Engineering as Marketing, Importers, Calculator Marketing for consumers, Chrome Extensions, Scanners, Public APIs, Shared Slack Channels, Integration Marketing, Powered By, Free Migrations, Contract Buyouts, Product Competitions, Open Source, App Marketplaces, Source Platforms):** **SKIP.** Inapplicable to a local physical wrestling academy. *(Note: we did build an interactive Roster & Tuition ROI Calculator inside `portal/index.html` for internal executive planning).*
- **#41, #43, #56, #65–#67, #71–#73, #75, #78, #82–#83, #85–#86, #97, #99, #103–#105, #107–#108, #110, #112–#113, #116, #118, #120–#122, #126, #130–#131, #133, #138 (35 Off-Brand / Wrong-Stage / Non-Local Ideas — X Audience, Engagement Pods, Reseller Programs, Webinars, Virtual Summits, Roadshows, Own-Hosted Conferences, Conference Sponsorship, Media Acquisitions, Fundraising PR, Product Hunt Launch, PH Alternatives, Twitter Giveaways, Vacation Giveaways, Lifetime Deals #86 [destroys recurring gym LTV], Playlists, Graphic Novels, Online Courses, Books, Annual Reports, Own Podcast, Changelogs, Awards, Reality TV, Controversy, Grants, Cameo, Marketing Stunts, Guerrilla, Humor, YouTube Product Reviews, Live Audio, International Expansion, Investor Marketing, Podcast Tours):** **SKIP.** Either off-brand for an Olympic Regional Training Center (#43, #83, #86, #99, #112, #113, #118, #120–#122) or distractions from hyper-local Alameda County mat enrollment.

---

### 12.2 Activation ideas (8 entries)

| # | Idea | Status | UWC Client-Specific Execution Note |
|---:|---|---|---|
| 47 | Founder Welcome Email | **Now (Q1)** | **Email 1.1 & 1.2** from Head Coach Naweed Zemaryalai & Founder Karim Zemaryalai sent immediately upon `<dialog>` Trial Pass claim. |
| 48 | Dynamic Email Capture | **Now (Q1)** | Native `<dialog>` Trial Pass modal dynamically pre-selects the athlete's program (`Youth`, `Varsity`, `Adult`, `Open Mat`) and offer (`$15 3-Day Pass` vs. `$15 Drop-In` vs. `$139.99/mo`) based on which CTA was clicked. |
| 51 | Onboarding Emails | **Now (Q1)** | **Email Sequence 1** (5-email Trial Welcome) + **Email Sequence 2** (3-email Active Member Onboarding: USAW `usawmembership.com` + SCWAY `scwaywrestling.org` cards & `/events/` schedule). |
| 90 | One-Click Registration | **Now (Q1)** | 1-click `<dialog>` Trial Pass modal on `v01`, `v03`, and `v04` replaces cold third-party redirects, capturing the lead in <15 seconds before pre-filling SMS and WrestlingIQ Team #513 checkout. |
| 91 | In-App Upsells | **Now (Q1)** | Step 2 of the `<dialog>` modal + Day-2/3/5 SMS (`TXT-2.1–2.3`) upgrades `$15 3-Day Mat Pass` athletes into `$139.99/mo` unlimited membership (`#4981`/`#2286`/`#1084`). *(Cross-cuts Revenue).* |
| 95 | Concierge Setup | **Now (Q1)** | Direct 2-way SMS with Coach Naweed (`(510) 303-4869`) pre-composed in Step 2 of the modal + `TXT-1.3` post-practice check-in to place every new wrestler in the right training group. |
| 96 | Onboarding Optimization | **Now (Q1)** | Eliminates industrial-corridor "First-Day Anxiety" via `TXT-1.1` and Email #1.1 (exact `30139 Industrial Pkwy SW, Suite C` parking map, 15-min early arrival, pocketless shorts/t-shirt gear checklist). |
| 124 | App Store Optimization | **Skip** | N/A — UWC is a brick-and-mortar academy using web + WrestlingIQ, not a standalone consumer App Store app. |

---

### 12.3 Retention ideas (8 entries)

| # | Idea | Status | UWC Client-Specific Execution Note |
|---:|---|---|---|
| 45 | Mistake Email Marketing | **Skip** | Hold unless a genuine scheduling/registration link correction occurs; never fabricate fake "oops" emails for a trusted family academy. |
| 46 | Reactivation Emails | **Now (Q1)** | **Email Sequence 3.1 & 3.2** reactivating paused football/multi-sport athletes and past WrestlingIQ alumni ahead of CIF/NCS and Summer seasons. |
| 50 | Inbox Placement | **Now (Q1)** | Route 53 SPF (`include:amazonses.com`), 2048-bit DKIM, and custom return-path (`bounce.unitedwrestlingclub.com`) so `@unitedwrestlingclub.com` clears DMARC `p=quarantine` into primary parent inboxes. |
| 52 | Win-back Emails | **Now (Q1)** | **Email Sequence 3** + **SMS Sequence 3** (`TXT-3.1–3.3`) recovering abandoned WrestlingIQ checkouts and lapsed 3-Day Mat Pass leads. |
| 53 | Trial Reactivation | **Now (Q1)** | `TXT-3.3` (+72h) and Email #3.1 invite unredeemed `$15 3-Day Mat Pass` leads back for a fresh week or a `$15 Saturday Open Mat Drop-In (#2664)`. |
| 94 | Offboarding Flows | **Q2** | Structured freeze/step-down flow offering a **30–60 day seasonal sports hold** or step-down to **Kids 2-Day (`#1087`, $89.99/mo)** before a family cancels in WrestlingIQ. |
| 134 | Certifications | **Q3+** | 90-Day Youth Mat Fundamentals & EDC (*Excellence / Discipline / Champions*) milestone recognition certificates/patches awarded coach-side to boost youth retention. *(Cross-cuts Referral).* |
| 135 | Support as Marketing | **Now (Q1)** | Proactive USA Wrestling (`usawmembership.com`) + SCWAY (`scwaywrestling.org`) card setup help and tournament weigh-in SMS alerts turn administrative friction into parent loyalty. |

---

### 12.4 Referral ideas (5 entries)

| # | Idea | Status | UWC Client-Specific Execution Note |
|---:|---|---|---|
| 62 | Affiliate Program | **Q2** | Formalize partner bounties (`$50/enrollment` or revenue split) for local BJJ coaches, personal trainers, and Women's Self-Defense co-instructors. |
| 79 | Early-Access Referrals | **Q2** | "Bring a Friend" priority registration for the 6-Week Women's Self-Defense Cohort and Summer Camps. *(Cross-cuts Acquisition).* |
| 92 | Newsletter Referrals | **Skip** | Over-engineered for a local gym newsletter; direct teammate pass sharing is higher leverage. |
| 93 | Viral Loops | **Now (Q1)** | Post-tournament podium photos & `/reviews/` assisted Google Review + Teammate Pass sharing loop triggered on Day 21 (`TXT-4.1` + Email #2.3). |
| 137 | Two-Sided Referrals | **Now (Q1)** | **Teammate 3-Day Mat Pass + 15% Sibling/Household Discount** + EDC team gear credit when an active UWC family refers a new recurring member (`self_reported_source = friend_family_referral`). |

---

### 12.5 Revenue ideas (2 entries)

| # | Idea | Status | UWC Client-Specific Execution Note |
|---:|---|---|---|
| 91 | In-App Upsells | **Now (Q1)** | Upgrade `$15 3-Day Mat Pass (#6327)` → `$139.99/mo Core Unlimited (#4981/#2286/#1084)` → `$150/mo Competition Youth (#3574)` → **6-Month ($699.95) & 12-Month ($1,399.90) Seasonal PIF**. *(Cross-cuts Activation).* |
| 132 | Price Localization | **Skip** | N/A — Single-market USD pricing in Alameda County, CA. *(Note: #86 Lifetime Deals is also strictly skipped to protect recurring gym LTV).* |

---

### 12.6 Cross-cutting / brand foundation & developer ideas (4 entries)

| # | Idea | Status | UWC Client-Specific Execution Note |
|---:|---|---|---|
| 114 | Moneyball Marketing | **Now (Q1)** | Core operating philosophy: $0 paid ads; capture undervalued East Bay local search terms (`#6–#22` striking distance) + stitch every lead to WrestlingIQ (`uwc-attribution.js`). |
| 139 | Customer Language | **Now (Q1)** | Copy across `v04`, SMS, and Email mirrors exact parent language from UWC's 42 5.0★ reviews (discipline, confidence, clean mats, Coach Naweed & Karim's personal attention). |
| 117 | Product Competitions | **Skip** | Developer-tool tactic (N/A for UWC). |
| 136 | Developer Relations | **Skip** | Developer-tool tactic (N/A for UWC). |

### Idea-bank summary
- **49 ideas active/planned in Acquisition** (with 67 skipped—primarily the 15 paid-ad tactics ruled out by Naweed's 100% organic mandate and 16 SaaS/developer-only tactics).
- **7 of 8 ideas active in Activation** (all except consumer App Store Optimization).
- **7 of 8 ideas active in Retention** (anchored by DMARC inbox placement, 30-day USAW/SCWAY onboarding, seasonal freeze/step-down saves, and PIF loyalty).
- **4 of 5 ideas active in Referral** (anchored by `/reviews/`, Day-21 SMS/Email review triggers, Teammate Passes, and Quarterly BJJ Mixers).
- **1 of 2 ideas active in Revenue** (tiered membership + 6/12-month PIF + 4-tier Women's Self-Defense & Corporate Clinics; Lifetime Deals explicitly skipped).
- **2 of 2 cross-cutting brand foundation ideas active** (Moneyball Marketing #114 + Customer Language #139).
- **Total active/planned surface area:** **67 unique tactics (~48.2% of the 139-idea library)** sequenced across Q1–Q4, with **72 ideas deliberately skipped** to keep UWC 100% focused on high-margin organic local growth.

---

## 13. Measurement, RACI, open decisions, appendix

### Measurement — the metrics that matter

- **North-Star Metric:** **Net Active Recurring Athletes in WrestlingIQ (Team #513) Above the 45-Member Baseline** (Directly governs UWC's monthly recurring tuition growth from `$6,299/mo → $10,500/mo (90d) → $16,800/mo (12m)` and reconciles Sprintz's `$25/mo` per-athlete performance rev-share).
- **Attribution Governance (`discovery/uwc_attribution_model.md`):**
  1. **Primary Acquisition Proof (First-Touch Model — 100% Credit):** Credits the initial Organic Search / GBP Map Pack touch (`$initial_landing_page`, `$initial_referrer`, `$initial_utm_*` locked by `assets/js/uwc-attribution.js`) so downstream SMS and Email follow-ups can convert the parent without overwriting Organic SEO credit.
  2. **Diagnostic Lifecycle Model (Position-Based U-Shaped 40 / 20 / 40):** Allocates **40% credit** to First Organic Touch, **20% credit** across nurturing SMS/Email touches in `touch_path[]`, and **40% credit** to the final conversion trigger before WrestlingIQ Team #513 enrollment.
  3. **Dark-Social & Word-of-Mouth Verification:** Cross-checked against the mandatory `self_reported_source` dropdown (*"How did you first find United Wrestling Club?"*) inside the `<dialog>` modal.

#### Leading indicators by AARRR stage

| AARRR Stage | Primary Leading Indicators | Target Benchmark (90d / 12m) | Source of Truth |
|---|---|---|---|
| **Acquisition** | Non-brand organic impressions & clicks; Alameda County 6-city Map Pack grid rank; organic sessions | `3,200 / 5,000+ visits/mo`; Top-3 Map Pack in Hayward/Union City/Fremont | Google Search Console + OpenSEO MCP + GA4 (`562010875`) |
| **Activation** | `<dialog>` Trial Pass modal submit rate (`generate_lead`); WrestlingIQ checkout completion; Trial show-up rate at Suite C | `3.5% / 4.8%` visitor-to-lead; `45 / 75` trials/mo; `75% / 82%` show-up rate | Formspree (`xyyavaaj`) + `uwc-attribution.js` + WrestlingIQ `#6327` |
| **Retention** | 30/60/90-day cohort survival; USAW/SCWAY card completion; Seasonal PIF participation; monthly churn rate | `4.5% (90d) / 3.2% (12m)` monthly churn; `8–10` PIF renewals/cycle | WrestlingIQ Team #513 Active Roster & Billing Export |
| **Referral** | Net new 5.0★ Google reviews (`ChIJsQd_yMaVj4ARrXw93nb4euo`); `self_reported_source = friend_family_referral` share; Quarterly Mixer RSVPs | `70 (90d) / 110+ (12m)` Google reviews; `15%–20%` referral trial share | Google Business Profile + `/reviews/` + Formspree Ledger |
| **Revenue** | Active Recurring Roster count; Membership MRR/ARR; Auxiliary clinic/camp/PIF cash collected; Blended LTV:CAC | `75 (90d) / 120 (12m)` members; `$10,500 / $16,800` MRR; `>20×` LTV:CAC | WrestlingIQ Billing + Monthly Reconciliation Ledger |

#### Review cadence
- **Weekly (Async Slack/SMS pulse every Monday):** Trial Pass claims (`xyyavaaj`), show-ups at Suite C, new WrestlingIQ enrollments, and any missed calls/texts on `(510) 303-4869`.
- **Monthly (1st of each month — 20-min sync):** Reconcile WrestlingIQ Team #513 active recurring roster against the 45-member baseline (`max(0, Active_Roster - 45) × $25`), review 6-city organic keyword movement in GSC, and audit SMS/Email sequence conversion rates.
- **Quarterly (Every 90 days):** Full AARRR cohort churn review, Seasonal PIF campaign planning (ahead of November and May windows), Quarterly Community Open Mat & BJJ Mixer retro, and **Q1 2027 New Year check-in on the `30085 Industrial Pkwy SW` (Pep Boys) facility**.

---

### RACI Matrix

| Domain / Workstream | Responsible (Executes) | Accountable (Approves) | Consulted | Informed |
|---|---|---|---|---|
| **Strategic Growth Plan & Attribution Ledger** | Rodney Lewis (Sprintz) | Naweed Zemaryalai | Karim Zemaryalai | Coaching Staff |
| **Website Redesign (`v04`), Technical SEO & 32 Local Pages** | Rodney Lewis (Sprintz) | Naweed Zemaryalai | Karim Zemaryalai | Coaching Staff |
| **On-Page `<dialog>` Modal, `uwc-attribution.js` & GA4/GSC** | Rodney Lewis (Sprintz) | Rodney Lewis (Sprintz) | Naweed Zemaryalai | — |
| **10DLC SMS (`(510) 303-4869`) & SES Email Automations** | Rodney Lewis (Build) / Naweed (2-Way Replies) | Naweed Zemaryalai | Rodney Lewis | Coaching Staff |
| **Mat Curriculum, Safety, 1:6 Ratio & 2× Daily Sanitation** | Naweed, Karim & 4 Secondary Coaches | Naweed & Karim Zemaryalai | — | Parents & Athletes |
| **Pricing, Seasonal PIF Offers & WrestlingIQ Team #513 Billing** | Rodney Lewis (Packaging) / Naweed (Ops) | Naweed & Karim Zemaryalai | Rodney Lewis | Members |
| **Women's Self-Defense & Corporate Clinics** | Lead Female Instructor + Naweed | Naweed Zemaryalai | Rodney Lewis (Funnel) | Community Partners |
| **Q1 2027 Pep Boys (`30085 Industrial Pkwy SW`) Dual-GBP Plan** | Naweed (Lease/City) + Rodney (Dual-GBP SEO) | Naweed & Karim Zemaryalai | City of Union City / Hayward | Sprintz |

---

### Open decisions blocking full production cutover (Ranked by Impact)

1. **GA4 Editor, GSC, Formspree (`xyyavaaj`), WrestlingIQ Admin & ESP/SMS Access (HIGHEST IMPACT — Blocks Week 1 Instrumentation):** Naweed needs to upgrade `lewis.rodneyl@gmail.com` from Viewer to **Editor** in GA4 (`562010875`), grant **Full** GSC access, and share Admin/Editor invites for WrestlingIQ (Team #513), Formspree (`xyyavaaj`), AWS Route 53 DNS, and UWC's SMS/email platform.
2. **Historical Cohort Churn & Active Roster Export (Blocks Exact LTV & Baseline Verification):** Export the last 24 months of WrestlingIQ Team #513 active members, plan mix (`#1087`, `#4981`, `#2286`, `#3574`, `#1084`, `#9536`), pauses, and cancellations to replace the modeled 7.5% churn / ~1.5% conversion estimates with hard cohort numbers and lock the exact Day-1 roster count (~45 members).
3. **Primary Public Phone & SMS Number Confirmation (Blocks Citation & 10DLC Lock):** Confirm that **`(510) 303-4869`** (listed on the live website and GBP) is the single primary voice/SMS number and authorize replacing **`[retired number]`** on Facebook and legacy directories.
4. **Trial Offer, Schedule & Commercial Policy Sign-Off (Blocks Final Copy Cutover):** Confirm:
   - Standard entry offer is the **`$15 3-Day Mat Pass (#6327)`** + **`$15 Saturday Open Mat Drop-In (#2664)`** (retiring the legacy FAQ "free trial" contradiction, or defining exact eligibility if a free assessment exists).
   - Exact training days/hours for **Kids 4-Day (`#4981`)** and **Combat Sambo / BJJ (`#9536`)** so the website schedule matches WrestlingIQ 100%.
   - Formal sign-off on the **15% sibling/household discount**, **7-day cancellation notice**, and **6-month ($699.95) / 12-month ($1,399.90) PIF** refund/freeze rules and 400 GSM EDC gear unit costs.
5. **Founder & Coaching Credential Verification + Media Permissions (Blocks Public Schema & Bio Claims):** Confirm exact wording for Founder Karim Zemaryalai's **1980 Moscow Olympic qualifier / participation status** and **Ali Aliyev tournament medal**, Steve Siroy's Hall of Fame title, and written bio/photo permissions for all 6 coaches and featured minor athletes.
6. **Signing Authority for UWC Commercial Agreement (`$1,000/mo + $25/athlete > 45`):** Confirm whether **Naweed Zemaryalai** or **Karim Zemaryalai** is the primary corporate signatory on Invoice B (`United Wrestling Club LLC`).
7. **Women's Self-Defense Lead Instructor & Insurance Confirmation (Blocks Q2 Auxiliary Revenue Launch):** Confirm qualified instructor availability (e.g., Louisa / partner coach), mat slot, insurance coverage, and the 40% club / 60% instructor revenue split before opening public registration.
8. **Former Pep Boys Facility (`30085 Industrial Pkwy SW`, Union City) Owner Contact (PARKED — Q1 2027 Backlog):** Hold Dual-GBP Union City annex deployment in the backlog until Naweed and the city establish contact with the property owner after New Year's.

---

### Appendix — Deep-Dive Repository Links (`RL22/united-wrestling-club`)

**Core Strategic & Discovery Documents:**
- `discovery/master_discovery_findings.md` — Master Discovery Findings & Strategic Transformation Report
- `discovery/call_notes_naweed_20261102_uwc.md` — Nov 2, 2026 Founder Call Transcript Excerpts & Operational Brief
- `discovery/uwc_marketing_plan_research.md` — Phase 1 fCMO Research Record & 17-Section Rubric Breakdown

**Post-Capture Lifecycle & Attribution Playbooks:**
- `discovery/uwc_sms_marketing_playbook.md` — A2P 10DLC Setup, TCPA `STOP` Opt-Out & 4 Automated SMS Sequences
- `discovery/uwc_email_marketing_playbook.md` — Route 53 SPF/DKIM/DMARC Setup & 11-Email Lifecycle Sequences
- `discovery/uwc_attribution_model.md` — First-Party Identity Stitcher (`uwc_lead_id`), 40/20/40 U-Shaped Model & Rev-Share Ledger
- `assets/js/uwc-attribution.js` — Production JavaScript Stitcher (19 Hidden Fields + WrestlingIQ Link Decorator)

**Binding Architectural Decision Records (ADRs):**
- `discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md` (ADR-001)
- `discovery/decisions/ADR-20261102-concept-consolidation-and-v04-flagship.md` (ADR-002)
- `discovery/decisions/ADR-20261102-branded-reviews-and-submission-engine.md` (ADR-003)
- `discovery/decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md` (ADR-004)

**Live Interactive Deliverables:**
- `portal/index.html` — Unified Executive Growth Portal & Interactive Roster/Tuition Calculator (`https://rl22.github.io/united-wrestling-club/portal/#uwc`)
- `v04/index.html` — Concept 02 Flagship (*The Olympic Sanctuary*) (`https://rl22.github.io/united-wrestling-club/v04/`)
- `v01/index.html` — Concept 01 (*The Clean Baseline*) & `v03/index.html` — Concept 03 (*The Conversion Engine*)
- `reviews/index.html` — Branded Reviews Hub & Assisted Google Review Engine

*United Wrestling Club (UWC) Marketing Plan v1. Prepared by Rodney Lewis (Sprintz Growth OS), November 3, 2026. For founder and team review.*
