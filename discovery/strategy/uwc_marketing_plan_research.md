---
status: reference
group: strategy
---

# United Wrestling Club (UWC) — Marketing Plan Research Record

**Date:** 2026-11-03  
**Author:** Rodney Lewis (Sprintz Growth & Technical Systems Architecture / fCMO)  
**Client:** United Wrestling Club LLC (`unitedwrestlingclub.com`) — USA Wrestling Regional Training Center (RTC) #513  
**Principals:** Head Coach Naweed Zemaryalai & Founder Karim Zemaryalai  
**Facility:** 30139 Industrial Pkwy SW, Suite C, Hayward, CA 94544  

---

## Company snapshot
- **One-sentence description:** An Olympic-pedigree youth, scholastic, and adult wrestling and combat-sports academy in Hayward, CA (USA Wrestling RTC #513) serving the East Bay (Hayward, Union City, Fremont, Newark, Castro Valley, San Leandro).
- **Stage:** Bootstrapped / profitable local brick-and-mortar academy in the **$10K–$100K ARR phase** (~$75,588 annualized membership run rate at 45 active recurring athletes × $139.99/mo core dues), targeting the **$100K–$250K ARR acceleration phase** ($126,000 ARR at 90 days / 75 athletes; $201,600 membership ARR + $33,600 auxiliary run rate = $235,200 total annualized run rate at 12 months / 120 athletes).
- **Product status:** Live facility (`3,000 sq ft` Dollamur competition mats, 1:6 coach-to-athlete ratio, 2× daily hospital-grade mat sanitization) with 8 active WrestlingIQ (Team #513) membership/session SKUs:
  - `$15` 3-Day Mat Pass (`#6327`) & `$15` Single Mat Drop-In (`#2664`)
  - Youth 2-Day (`#1087`, `$89.99/mo`), Youth 4-Day (`#4981`, `$139.99/mo`), Competition Youth (`#3574`, `$150/mo`)
  - Middle / High School Scholastic (`#2286`, `$139.99/mo`)
  - Adult / College / Wrestle-Jitsu (`#1084`, `$139.99/mo`) & BJJ 3-Day (`#9536`, `$100/mo`)

## ICP
- **Primary ICPs:**
  1. **East Bay Wrestling Parents (Ages 5–13 Youth & Ages 14–18 CIF/NCS Scholastic):** Families within a 4–20 minute drive along the I-880 / Industrial Pkwy corridor (Hayward `94544/94541/94545`, Union City `94587`, Fremont `94536/94538/94539`, Newark `94560`, Castro Valley `94546`, San Leandro `94577`).
  2. **Adult Grapplers, BJJ Cross-Trainers & Multi-Sport Athletes (18+ & High School Football/MMA):** Athletes seeking authentic Olympic takedown mechanics, cage/mat wrestling, and Saturday Bay Area Open Mat rounds.
- **Stated problem vs. real problem:**
  - *Stated:* "I need a youth wrestling class or offseason high school mat room near Hayward/Union City/Fremont."
  - *Real:* Parents worry about safety, ringworm/mat hygiene, chaotic coaching, lock-in contracts, and intimidation entering an industrial-park combat gym (`Suite C`), while varsity families need credible collegiate/Olympic technique so their kid actually wins at SCWAY/NCS/CIF tournaments.
- **What they are actually buying:** Mentorship, physical confidence, discipline (*Excellence / Discipline / Champions* — the EDC creed), a clean hospital-grade mat room, and direct access to a 6-coach bench anchored by 1980 Olympic qualifier Karim Zemaryalai and SFSU Kinesiology Head Coach Naweed Zemaryalai.

## Funnel state today
- **Current numbers (Discovery baseline):**
  - Modeled organic search traffic: **~2,086 visits/mo** across **368 ranked keywords** (OpenSEO snapshot; unverified in GA4 because the GA4 tag is missing on the live S3 build).
  - Website visitor → trial rate: **~1.5%** (or ~0.8% visitor-to-lead / ~16 trial claims/mo across unaligned denominators — requires unified GA4 + Formspree + WrestlingIQ instrumentation).
  - Cold WrestlingIQ checkout abandonment: **40%–60%** (estimated mobile drop-off when cold visitors are bounced off-site to `wrestlingiq.com` before first-party lead capture).
  - Trial → paid member conversion: **~35%** (with estimated ~45%–55% trial show-up rate due to zero automated SMS/email arrival instructions for Suite C).
  - Active recurring roster: **~45 athletes** (~$6,299 MRR / ~$75,588 ARR).
  - Estimated monthly churn: **~7.5%/mo** (~13.33-month average lifetime; ~$1,867 simple gross LTV at $139.99/mo), spiking during November and May seasonal sport transitions.
- **Funnel shape & biggest leak:**
  - **Top-of-funnel striking-distance leak:** UWC ranks #6–#22 for high-intent terms (`wrestling gym` #6, `wrestling classes near me` #9, `wrestling near me` #11, `wrestling club` #12, `youth wrestling near me` #17), but serves a 0-word client-side Next.js spinner shell (`<div id="__next"></div>`), has zero sub-market pages for Union City/Fremont/Newark/Castro Valley/San Leandro, and hides all 41 tournaments on `/events` inside a client-side JS bundle.
  - **Middle-of-funnel conversion & activation leak:** Cold mobile visitors click a CTA and get thrown straight to third-party `wrestlingiq.com` account creation with zero on-page `<dialog>` lead capture, zero automated SMS/email confirmation, and conflicting trial copy ($15 3-day pass vs. $15 drop-in vs. FAQ "free trial").

## Funding & commercial state
- **Funding tier:** Self-funded / bootstrapped local operating business (maps to **Pre-Seed / Bootstrapped tier: $0–$2K/mo marketing spend; 100% organic mandate**).
- **Hard Founder Constraint:** **Zero Paid Ads Mandate.** Naweed explicitly ruled out PPC/paid social on the Nov 2, 2026 call (*"bruh i'm not trying to pay for any paper clip things bruh i'm only looking for like organic"*).
- **Engagement Economics (Invoice B — United Wrestling Club LLC):**
  - **$1,000/mo flat base retainer** + **$25/mo performance rev-share per verified incremental active athlete above the 45-member baseline** (reconciled against WrestlingIQ Team #513).
  - **7-Athlete Payback Threshold:** Just 7 net new recurring athletes ($979.93/mo) covers the entire base retainer.
  - **Growth-stage capability unlocks:** Instead of VC equity rounds, UWC's capability unlocks are tied to **Roster Milestones** (45 baseline → 60 self-liquidating → 75 90-day target → 100+ Q1 2027 Pep Boys `30085 Industrial Pkwy SW` Dual-GBP facility expansion).

## Team
- **Naweed Zemaryalai (Head Coach & Managing Co-Founder):** Owns coaching operations, curriculum (SFSU B.S. Kinesiology, Chabot College coaching, UFC corner for Farid Basharat), parent relationships, and final sign-off on commercial offers and `(510) 303-4869` two-way texts.
- **Karim Zemaryalai (Founder & Principal):** 1980 Olympic qualifier & Ali Aliyev medalist; owns academy heritage, elite senior technique, and co-signatory authority.
- **Secondary Coaching Bench (4 Coaches):** Rashad Rahimi (Co-Founder / Olympic qualifier & Asian Games silver medalist), Sandeep Singh Gosal (Youth competition coach / 3× CA Greco-Roman State Champion), Steve Siroy (Senior advisory coach / Chabot Hall of Fame), Farid Siddiq (Striking & boxing footwork director).
- **Rodney Lewis (Sprintz Growth OS — Fractional CMO & Technical Growth Architect):** π-shaped strategist + builder (Technical/Local SEO + Conversion Engineering + Lifecycle Automation). Owns the web overhaul (`v04` flagship), 32-route programmatic local SEO architecture, GA4/GSC instrumentation, `uwc-attribution.js` stitcher, and SMS/Email lifecycle flows.
- **Gaps:** No dedicated front-desk admin during live mat hours (causing 10–18 missed calls/mo when coaches are on the mat); solved via on-page `<dialog>` Trial Pass intake + automated SMS/Email sequences rather than premature headcount.

## Current marketing budget
- **Paid acquisition:** `$0/mo` (strictly excluded by founder mandate).
- **Retainer (Sprintz fCMO & Growth OS):** `$1,000/mo` base + `$25/mo` per active athlete > 45 baseline.
- **Tooling stack:** `~$50–$120/mo` (AWS Route 53 / hosting, Formspree `xyyavaaj`, WrestlingIQ Team #513 already in operational overhead, plus SES/HighLevel/Twilio 10DLC SMS pass-through ~$20–$97/mo).
- **Total monthly marketing spend:** `~$1,050–$1,120/mo` base (~16.7% of current $6,299 MRR; drops to ~10% of MRR at the 90-day $10,500 MRR target).
- **Blended CAC (modeled at 90-day target):** Adding ~38–42 gross athletes over 90 days (~13–14 gross adds/mo) on ~$1,375/mo total spend (base + rev-share) yields a **blended CAC of ~$98–$105 per enrolled athlete** against a **$1,867–$3,111 gross LTV** (**18×–30× LTV:CAC**).

## Channels currently active
- **Acquisition:**
  - *Organic Search & Google Map Pack (Live, under-optimized):* 2,086 est. visits/mo, 368 keywords, 5.0★ (42 Google reviews) on Hayward GBP (`ChIJsQd_yMaVj4ARrXw93nb4euo`).
  - *Tournament & Feeder School Word-of-Mouth (Live, unsystematized):* 41-event 2026–2027 competition schedule (`/events`) starting with *North Coast Grapplers* at James Logan High School (Union City), plus Chabot College and local high school ties.
  - *Instagram / Social Video (Live, disconnected from site):* High-engagement mat footage and UFC corner authority, currently trapped off-site while the website serves an uncompressed 17.72 MB hero video.
  - *Paid Ads (Never / Skipped):* Explicitly ruled out.
- **Activation:**
  - *Live Site:* Direct bounce to `wrestlingiq.com` + unlinked Formspree (`xyyavaaj`) contact form; conflicting trial copy.
  - *Built & Ready (`v01`, `v03`, `v04` Flagship):* 1-click `<dialog>` Trial Pass modal with 19 hidden attribution fields (`uwc-attribution.js`), self-reported source dropdown, and TCPA `STOP` opt-out checkbox.
- **Retention:**
  - *Live:* Ad-hoc coach check-ins and WrestlingIQ roster broadcasts; ~7.5%/mo estimated churn with November/May seasonal dips.
  - *Built & Ready:* 4-flow SMS Playbook + 3-sequence Email Playbook + Seasonal 6/12-month Paid-In-Full (PIF) loyalty architecture.
- **Referral:**
  - *Live:* Organic family word-of-mouth; 42 5.0★ Google reviews; legacy `/submit-review/` client-side redirect.
  - *Built & Ready:* Branded `/reviews/` hub + Day-21 automated SMS/Email review & buddy-pass referral engine + Quarterly Community Day & BJJ Mixer.
- **Revenue:**
  - *Live:* 8 WrestlingIQ plans ($139.99/mo core unlimited, $89.99/mo 2-day kids, $150/mo competition youth, $100/mo BJJ, $15 trial/drop-in).
  - *Staged Expansion Levers:* Seasonal 6-month ($699.95) and 12-month ($1,399.90) PIF loyalty packages + 4-tier Women's Self-Defense & Corporate Clinics ($49 workshop / $199 6-week cohort / $1,000–$1,500 corporate clinics).

## Already done (acknowledge in plan)
1. **Earned 42 5.0-Star Google Reviews** and #1 Local Pack ranking in Hayward for core "Wrestling Club" searches without paid ads.
2. **Established USA Wrestling RTC #513** status and assembled a 6-coach Olympic/collegiate/state-champion staff (Karim, Naweed, Rashad, Sandeep, Steve, Farid).
3. **Built a 45-Athlete Recurring Roster (~$75.6K ARR)** and a 41-tournament 2026–2027 competition calendar (`/events`).
4. **Engineered 3 Production Redesign Concepts (`v01`, `v03`, `v04` Flagship)** with 94% VP9/WebM video compression (<2MB), 12-component parity, `<dialog>` Trial Pass modal, 19 hidden attribution fields (`assets/js/uwc-attribution.js`), TCPA `STOP` opt-out compliance, and the executive companion portal (`portal/index.html`).
5. **Authored 4 Binding ADRs** (`001` Facility/Coaching Invariants, `002` Concept Consolidation & `v04` Flagship, `003` Branded Reviews Hub, `004` Commercial Pricing & Seasonal PIF) plus complete SMS, Email, and Attribution playbooks.

## In-flight and stuck
- **GA4 Measurement Blackout (`562010875`):** Rodney has Viewer access, but the live S3 site has zero GA4 tag installed (recording 0 visitors). *Blocker:* Naweed upgrading `lewis.rodneyl@gmail.com` to Editor + production deployment.
- **GSC, Formspree (`xyyavaaj`), WrestlingIQ Admin & ESP/SMS Access:** *Blocker:* Pending Naweed's admin invites (requested in Nov 2 follow-up).
- **Phone Number & NAP Mismatch:** Website/GBP lists `(510) 303-4869` while Facebook lists `[retired number]`, and GBP name shows plural "United Wrestling Clubs". *Blocker:* Naweed confirming primary voice/SMS number.
- **Trial & Schedule Copy Conflicts:** Live homepage says `$15 3-Day Trial`, pricing says `$15 Drop-In`, FAQ says `Free Trial`, and 4-Day Kids (`#4981`) conflicts with published M/W/F schedule. *Blocker:* Final fact-register sign-off from Naweed.
- **Pep Boys Expansion (`30085 Industrial Pkwy SW`, Union City):** *Blocker:* Naweed and the city have not yet been able to reach the property owner. **Parked in Q1 2027 New Year Backlog** with Dual-GBP annex safeguard pre-staged.

## Strategic posture
- **Founder's top priority this quarter:** Drive 100% organic local SEO discovery across neighboring East Bay cities/ZIPs and convert traffic into recurring mat members (`45 → 75` athletes).
- **Founder's top de-prioritization this quarter:** Zero paid ads ("paper clip things"), zero vanity redesign work that doesn't move rankings/leads, and parking the Pep Boys `30085 Industrial Pkwy SW` relocation until Q1 2027 owner contact.

## Current-state rubric scores (scored from discovery materials — Nov 2026)

| # | Section | Score (0–5) | Rationale (Live Site Baseline vs. Staged Sprintz Assets) |
|---|---|:---:|---|
| 1 | Positioning | **3 / 5** | Authentic Olympic & collegiate lineage (`RTC #513`, EDC creed) exists in the room, but live site buries it in a client-side shell and repeats unverified 5,000 sq ft claims (`v04` + ADR-001 standardize 3,000 sq ft, 1:6 ratio, 6-coach dossier). |
| 2 | Customer research | **4 / 5** | Deep VOC from 42 5.0★ parent/athlete reviews, Nov 2 founder transcript, and East Bay commuter/competitor analysis mapped to 3 core personas. |
| 3 | Homepage | **1 / 5** | Live S3 site has >6.5s mobile LCP, 17.72 MB raw video, 0 server-rendered words, and cold off-site redirects. (`v04` flagship built & ready to ship at <1.4s target LCP). |
| 4 | Sales / product pages | **2 / 5** | 8 WrestlingIQ plans exist, but live site has conflicting trial/drop-in/schedule copy and no dedicated program pages (`/programs/youth-wrestling/`, etc.). |
| 5 | Conversion pages | **1 / 5** | Zero sub-market landing pages live today for Union City, Fremont, Newark, Castro Valley, or San Leandro; `/events` (41 tournaments) is locked in client-side JS. |
| 6 | Competitor comparison | **1 / 5** | Competitor landscape mapped in discovery, but zero live comparison/alternative pages (e.g., Wrestling vs. Youth BJJ/Karate/Taekwondo for East Bay parents). |
| 7 | Resources / content | **1 / 5** | Live `/events` has 41 tournaments and USAW/SCWAY links trapped in JS; no parent first-day guide, mat hygiene explainer, or tournament prep resource hub live yet. |
| 8 | Onboarding | **1 / 5** | No automated first-day Suite C arrival guide, parking map, or USAW/SCWAY card onboarding flow live today (causes ~45%–55% trial show-up rate). Playbooks now written. |
| 9 | Email lifecycle | **1 / 5** | DMARC `p=quarantine` live on domain, but 0 automated trial welcome, member onboarding, or seasonal PIF sequences active yet (11-email playbook now drafted). |
| 10 | Sales material | **3 / 5** | Executive growth portal (`portal/index.html`), 3 live interactive concepts, ROI calculator, and corporate/women's self-defense clinic models drafted. |
| 11 | Messaging | **3 / 5** | Strong *Excellence / Discipline / Champions* (EDC) creed and family-first industrial grit, but live site has trial price contradictions and unstandardized coach bios. |
| 12 | Pricing | **3 / 5** | Clear $139.99/mo core anchor and $15 entry point in WrestlingIQ, but needs 15% sibling discount, 7-day cancellation policy, and 6/12-mo PIF loyalty tiers formalized. |
| 13 | CRO | **1 / 5** | GA4 property `562010875` is recording 0 visitors; 40%–60% cold WrestlingIQ drop-off on live site. (`uwc-attribution.js` + `<dialog>` modal now wired in `v01/v03/v04`). |
| 14 | GTM launches | **1 / 5** | No structured seasonal launch motion for CIF/NCS offseason, post-football crossover, or Summer Camps yet. |
| 15 | Ads (paid) | **0 / 5** | Intentionally $0/mo per founder's strict 100% organic mandate (structural choice, not a defect). |
| 16 | SEO | **2 / 5** | Strong natural authority (2,086 est. visits/mo, 368 keywords, #6 `wrestling gym`, 42 5.0★ reviews), but severely handicapped by 0-word SSR shell, 404 `sitemap.xml`/`robots.txt`, and NAP phone mismatch. |
| 17 | Internationalization | **0 / 5** | N/A — Hyper-local East Bay brick-and-mortar academy (Alameda County 6-city footprint). |

**Total Score: 28 / 85 (32.9%)** *(Live Baseline Scored from Discovery Materials)*

## Materials read
- `discovery/strategy/master_discovery_findings.md` (read 2026-11-03)
- `discovery/client/call_notes_naweed_20261102_uwc.md` (read 2026-11-03)
- `discovery/strategy/uwc_sms_marketing_playbook.md` (read 2026-11-03)
- `discovery/strategy/uwc_email_marketing_playbook.md` (read 2026-11-03)
- `discovery/strategy/uwc_attribution_model.md` (read 2026-11-03)
- `discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md` (read 2026-11-03)
- `discovery/decisions/ADR-20261102-concept-consolidation-and-v04-flagship.md` (read 2026-11-03)
- `discovery/decisions/ADR-20261102-branded-reviews-and-submission-engine.md` (read 2026-11-03)
- `discovery/decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md` (read 2026-11-03)
