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
part: "1 of 8"
---

> Part 1 of 8 of [uwc_marketing_plan](../uwc_marketing_plan.md). Text is verbatim from the original; only links were rewritten.


# United Wrestling Club (UWC) — 12-Month Growth Marketing Plan (v1)

> **Status: Partly superseded.** Written before the Astro build. Where it names the v04 flagship or sitemap counts, `sitemap_status.md` and `decisions/ADR-20261106-astro-design-system.md` are current. The sourced findings still apply.

**Prepared by:** Rodney Lewis — Sprintz Growth & Technical Systems Architecture (fCMO)  
**For:** Head Coach Naweed Zemaryalai & Founder Karim Zemaryalai (United Wrestling Club LLC)  
**Facility:** 30139 Industrial Pkwy SW, Suite C, Hayward, CA 94544 | USA Wrestling Regional Training Center (RTC) #513  
**Date:** 2026-11-03  
**Status:** Draft v1 — Grounded in Master Discovery Findings (`discovery/strategy/master_discovery_findings.md`) & Nov 2 Founder Mandate  

---

## TL;DR
- The goal is to grow from about 45 to 75 active recurring athletes in 90 days and 120 in 12 months, using $0 in paid advertising.
- The three bets are local search crawlability, first-party lead capture with SMS and email activation, and seasonal paid-in-full loyalty with review velocity.
- UWC is positioned as USA Wrestling Regional Training Center (RTC) #513 with an Olympic-lineage coaching bench (see RC-02).
- Naweed owns two-way SMS replies on (510) 303-4869 and final sign-off on offers and policies (see OC-04).
- Sprintz is paid a $1,000 per month base plus $25 per month per incremental active athlete above the 45-member baseline.

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
UWC is claiming the category of **East Bay Premier Olympic & Scholastic Wrestling Academy (USA Wrestling RTC #513)**. Rather than competing as a generic strip-mall martial arts dojo or fitness gym, UWC occupies a distinct structural niche along the I-880 corridor: an authentic, family-trusted Regional Training Center where 5-year-old beginners, CIF/NCS high school state contenders, and adult BJJ/MMA grapplers train on (Superseded 2026-11-08: the mat footprint is 3,800 sq ft of Dollamur competition mats. Old text: [archive](../../archive/stale-2026-11-08/uwc_marketing_plan.md).) under Olympic qualifiers, collegiate coaches, and California state champions.

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
> Superseded 2026-11-08: the mat footprint is 3,800 sq ft of Dollamur competition mats (owner decision, 2026-11-06). Old text: [archive](../../archive/stale-2026-11-08/uwc_marketing_plan.md).
  - `1:6 coach-to-athlete ratio` and `2× daily EPA hospital-grade mat sanitization` (confirm universal session applicability with Naweed).
  - `USA Wrestling Regional Training Center (RTC) #513`.
  - `1980 Moscow Olympic Qualifier Karim Zemaryalai` & `Head Coach Naweed Zemaryalai (B.S. Kinesiology, SFSU)` (avoid repetitive "Dagestani lineage" filler; confirm exact qualifier/medal phrasing with Karim).
  - `$15 3-Day Mat Pass` (3 consecutive age-appropriate practices), `$15 Saturday Open Mat Drop-In`, and `$139.99/mo Core Unlimited Membership` with **no long-term contract lock-in**.
- **NO Vocabulary / Guardrails:**
  - Never claim a "Free Trial" on FAQ/subpages if the standard entry offer is the `$15 3-Day Mat Pass` (unless a specific free assessment policy is explicitly confirmed by Naweed).
  - Never imply UWC operates physical satellite facilities in Fremont, Newark, Castro Valley, or San Leandro; position sub-market pages transparently as **East Bay commuter/service-area hubs** showing exact drive times along I-880 / Industrial Pkwy to `30139 Industrial Pkwy SW, Suite C, Hayward`.
  - Never gate reviews by star rating or offer incentives contingent on 5-star Google reviews.

---
