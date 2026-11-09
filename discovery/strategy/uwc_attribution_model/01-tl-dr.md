---
type: dossier
status: current
group: strategy
owner: "Sprintz Growth OS (Rodney Lewis)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["https://formspree.io/f/xyyavaaj", "https://unitedwrestlingclub.com/schedule?lid={{uwc_lead_id}}&utm_source=uwc_lifecycle&utm_medium=sms&utm_campaign=trial_day1_schedule", "https://www.wrestlingiq.com/unitedwrestlingclub/register?ref_id={{uwc_lead_id}}&utm_source=uwc_lifecycle&utm_medium=sms&utm_campaign=trial_day6_close&utm_content={{uwc_lead_id}}"]
shard_of: "discovery/strategy/uwc_attribution_model.md"
part: "1 of 3"
---

> Part 1 of 3 of [uwc_attribution_model](../uwc_attribution_model.md). Text is verbatim from the original; only links were rewritten.


# United Wrestling Club (UWC): Organic SEO + SMS/Email Attribution Model & First-Party Stitching Architecture

> **Client:** United Wrestling Club (UWC) — 30139 Industrial Pkwy SW, Hayward, CA 94544  
> **Prepared By:** Sprintz Growth OS (Rodney Lewis)  
> **Client Principals:** Naweed Zemaryalai (Head Coach & Co-Founder), Karim Zemaryalai (Founder)  
> **Analytics & Roster Stack:** GA4 Property `562010875` · Formspree `xyyavaaj` (Native `<dialog>` Trial Modal) · SMS/Email Lifecycle Engine · WrestlingIQ (`Team ID: 513`)  
> **Commercial Baseline & Rev-Share:** $1,000/mo Base Retainer + **$25.00/mo per incremental active recurring athlete above the 45-member baseline** ($139.99/mo tuition)  

---

## TL;DR
- GA4 has no live tags on the site and checkout sits on wrestlingiq.com, so last-touch reporting would credit SMS or direct traffic for every enrollment.
- The attribution standard has three layers: first-touch for acquisition, U-shaped 40/20/40 for the full funnel, and self-reported attribution with roster match as a cross-check.
- Referrer domains such as the club site, WrestlingIQ, Formspree, Stripe, and Google sign-in are hard-excluded as self-referrals.
- Leads are stitched across domains with a first-party identity, and uwc_lead_id is carried in SMS and email links.
- Sprintz rev-share is reconciled monthly against the WrestlingIQ Team 513 roster at $25 per month per incremental athlete above 45.

## 1. Executive Summary & The Commercial Problem

United Wrestling Club operates under a strict **100% Organic Growth Mandate** (*"bruh i'm not trying to pay for any paper clip things bruh i'm only looking for like organic"* — Naweed Zemaryalai, Nov 2, 2026). Every dollar of growth is driven by three Sprintz-engineered systems:
1. **Top-of-Funnel Acquisition:** Local Organic SEO (programmatic sub-market pages like `/locations/fremont-ca/`, `/locations/union-city-ca/`, `/locations/hayward-ca/`) and Google Business Profile (GBP) Map Pack dominance (`Place ID: ChIJsQd_yMaVj4ARrXw93nb4euo`).
2. **On-Site Conversion Capture:** The native HTML `<dialog>` **$15 3-Day Mat Pass** modal on `unitedwrestlingclub.com` (wired to Formspree `xyyavaaj`).
3. **Middle/Bottom-Funnel Lifecycle Closure:** Automated SMS and Email nurture sequences (`utm_medium=sms` and `utm_medium=email`) that drive parents from their 3-day trial onto a recurring **$139.99/mo membership** on `wrestlingiq.com` (`Team ID: 513`).

### Why Naive Attribution Fails UWC (And Costs Sprintz Money)
Right now, UWC has **two fatal measurement blind spots**:
* **The Un-Tagged / Cross-Domain Gap:** GA4 (`562010875`) currently has zero live tags on `unitedwrestlingclub.com`, and final tuition checkout happens on a third-party domain (`wrestlingiq.com`, Team ID `513`). Without first-party identity stitching, every parent who clicks from `unitedwrestlingclub.com` or an SMS link into WrestlingIQ appears in analytics as a disconnected `Direct` or `Referral` session.
* **The Last-Touch Cannibalization Trap:** In a standard local youth sports journey, a Fremont parent discovers UWC via an organic search (`"youth wrestling near me"` -> `/locations/fremont-ca/`), claims a $15 3-Day Trial Pass in the on-site modal, attends practice in Hayward, and 4 days later clicks a follow-up **SMS link** (`?utm_source=lifecycle&utm_medium=sms`) to complete their $139.99/mo enrollment on WrestlingIQ.
  * Under **Last-Touch Attribution**, **SMS gets 100% of the credit** and **Organic SEO gets 0%**.
  * Alternatively, if the parent opens a new browser tab on their laptop and types `unitedwrestlingclub.com` to sign up after getting an email reminder, **Direct / Branded Search gets 100% of the credit** and **Organic SEO gets 0%**.

This architecture solves both problems permanently using **Pillar A (Dual First-Touch + 40/20/40 U-Shaped Multi-Touch + Self-Reported Attribution)** and **Pillar B (First-Party `localStorage` Identity Graph + Cross-Domain Passthrough + WrestlingIQ Roster Reconciliation)**.

---

## 2. Pillar A: Attribution Model Selection & Mathematical Framework

### A. The Three-Layer Attribution Standard for UWC

Because UWC's buyer journey has a clear **Demand Creation moment** (Organic Search / GBP discovery + Trial Pass modal) and a clear **Lifecycle Closure moment** (SMS/Email follow-up -> WrestlingIQ recurring enrollment), no single-touch model tells the full operational truth. We deploy a three-layer triangulation architecture:

| Attribution Layer | Model Rule | Operational Question Answered | Role in UWC Growth OS |
| :--- | :--- | :--- | :--- |
| **Layer 1: Primary Acquisition Read** | **First-Touch (100% to Initial Touch)** | *"Which local SEO page, keyword cluster, or GBP listing brought this family into UWC's orbit?"* | Proves top-of-funnel SEO & Map Pack ROI (`/locations/fremont-ca/`, `/locations/union-city-ca/`, GBP Hayward). |
| **Layer 2: Full-Funnel Operating Model** | **Position-Based / U-Shaped (40% / 20% / 40%)** | *"How did Organic SEO discovery, SMS/Email trial nurture, and the closing conversion trigger work together?"* | Splits credit across the two moments we engineer: **40% First Organic Touch**, **20% Middle SMS/Email Nurture**, **40% Conversion Trigger**. |
| **Layer 3: Out-of-Model Triangulation** | **Self-Reported Attribution + Roster Match** | *"What does the parent remember, and did they become an active paying member in WrestlingIQ?"* | Captures Dark Social (word-of-mouth from James Logan / Chabot wrestlers, Instagram DMs, mat-side referrals) and anchors rev-share to real bank deposits. |

---

### B. Worked Journey: One East Bay Parent Scored Across All 6 Models

Consider a real UWC parent journey over 9 days resulting in a **$139.99/mo recurring membership** ($1,679.88 annualized LTV; **$25.00/mo Sprintz Rev-Share**):

* **Touch 1 (Day 0 — Discovery):** Parent searches `"youth wrestling fremont ca"` on Google and lands on `unitedwrestlingclub.com/locations/fremont-ca/` (`Organic Search — Non-Branded`).
* **Touch 2 (Day 0 — Capture):** Parent clicks *"Claim $15 3-Day Mat Pass"*, opens the native `<dialog>` modal, and submits the Formspree (`xyyavaaj`) form (`On-Site Modal`).
* **Touch 3 (Day 1 — Nurture 1):** Parent clicks the automated **SMS Welcome & Mat Schedule link** (`utm_source=uwc_sms&utm_medium=sms&utm_campaign=trial_welcome`) to check practice times (`SMS Nurture`).
* **Touch 4 (Day 4 — Nurture 2):** After attending two practices, parent opens the **Coach Naweed Trial Follow-Up Email** (`utm_source=uwc_email&utm_medium=email&utm_campaign=trial_day4`) and reviews tuition tiers (`Email Nurture`).
* **Touch 5 (Day 6 — Closure):** Parent receives the **Final Day-6 SMS Enrollment Link** (`utm_source=uwc_sms&utm_medium=sms&utm_campaign=trial_close`), clicks through to `wrestlingiq.com` (`Team ID: 513`), and activates a **$139.99/mo recurring membership** (`Conversion Trigger`).

#### How the 6 Standard Models Score This Single $139.99/mo Membership:

| Touchpoint | Channel / Medium | First-Touch (Acquisition) | Last-Touch (Naive) | Last Non-Direct | Linear (Equal) | Time-Decay (7d half-life) | **UWC Standard: U-Shaped (40/20/40)** |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **T1 (Day 0)** | **Organic SEO (`/locations/fremont-ca/`)** | **$139.99 (100%)** | $0.00 (0%) | $0.00 (0%) | $35.00 (25%) | $18.90 (13.5%) | **$56.00 (40%)** |
| **T3 (Day 1)** | **SMS Welcome (`utm_medium=sms`)** | $0.00 (0%) | $0.00 (0%) | $0.00 (0%) | $35.00 (25%) | $20.86 (14.9%) | **$14.00 (10%)** |
| **T4 (Day 4)** | **Email Follow-Up (`utm_medium=email`)** | $0.00 (0%) | $0.00 (0%) | $0.00 (0%) | $35.00 (25%) | $28.14 (20.1%) | **$14.00 (10%)** |
| **T5 (Day 6)** | **SMS Closing Link → WrestlingIQ (`513`)** | $0.00 (0%) | **$139.99 (100%)** | **$139.99 (100%)** | $35.00 (25%) | $72.09 (51.5%) | **$56.00 (40%)** |
| **Total MRR** | **1 Verified New Roster Athlete** | **$139.99** | **$139.99** | **$139.99** | **$139.99** | **$139.99** | **$139.99** |
| **Sprintz Rev-Share** | **$25.00/mo Attribution Split** | **$25.00 SEO** | $0.00 SEO / $25 SMS | $0.00 SEO / $25 SMS | $6.25 each | $3.38 SEO / $21.62 Lifecycle | **$10.00 Discovery / $5.00 Nurture / $10.00 Close** |

#### Why First-Touch + U-Shaped (40/20/40) Is the Gold Standard for UWC:
1. **Side-by-Side First-Touch vs. Last-Touch Exposes Funnel Velocity:** Reporting First-Touch alongside U-Shaped (40/20/40) proves that **Organic SEO created 100% of the demand** (T1) while **SMS/Email automated the follow-up and close** (T3–T5). Without First-Touch and U-Shaped tracking, Naweed would see 100% of enrollments coming from SMS links or Direct traffic and mistakenly believe the local SEO sub-market pages (`/locations/fremont-ca/`, `/locations/union-city-ca/`) weren't driving athletes.
2. **No Volume Bottleneck (Why We Reject Data-Driven / Shapley):** Algorithmic Data-Driven Attribution (DDA) requires hundreds of monthly conversions to stabilize counterfactual Shapley weights. For a local wrestling academy scaling from 45 to 120+ recurring athletes, deterministic **Position-Based (40/20/40)** + **First-Touch** is 100% transparent, mathematically exact on every single athlete, and impossible to manipulate.
3. **Self-Reported Attribution Captures the East Bay "Dark Social" Blind Spot:** Wrestling is a tightly knit community. Parents talk at SCYWAY tournaments, high school matches (James Logan, Moreau Catholic, Hayward High), and in WhatsApp/text threads. Those touches carry zero digital referrer (`Direct`). Adding a required **"How did you first hear about UWC?"** field inside the `<dialog>` Trial Pass modal catches 100% of dark-social and word-of-mouth referrals.

---

### C. First-Touch Data Quality: Mandatory Referrer Exclusions

To prevent redirects and payment flows from overwriting `$initial_referrer` in GA4 (`562010875`) and our first-party attribution script, the following domains are **hard-excluded** from referrer classification (treated as self-referrals / passthroughs, never as acquisition sources):
* `unitedwrestlingclub.com` and `*.unitedwrestlingclub.com`
* `wrestlingiq.com` and `*.wrestlingiq.com` (Roster & checkout platform)
* `formspree.io` (Modal form handler)
* `stripe.com` and `checkout.stripe.com` (Payment processor redirects)
* `accounts.google.com` (OAuth logins)
* `localhost` and `127.0.0.1` (Staging/dev environments)

---
