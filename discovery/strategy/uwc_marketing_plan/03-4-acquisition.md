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
part: "3 of 8"
---

> Part 3 of 8 of [uwc_marketing_plan](../uwc_marketing_plan.md). Text is verbatim from the original; only links were rewritten.

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
- **Move 4 — 5-Email Trial Welcome & Parent Trust Sequence (Days 0–9):** While the athlete completes their 3 consecutive practices (`discovery/strategy/uwc_email_marketing_playbook.md`), parents receive 5 plain-text-style emails from `@unitedwrestlingclub.com`:
  - *Email 1.1 (Immediate):* First-Day Suite C Arrival Guide & Waiver link.
  - *Email 1.2 (Day 2):* Coaching Pedigree — Karim's 1980 Olympic qualification + Naweed's SFSU Kinesiology methodology & 1:6 ratio.
  - *Email 1.3 (Day 4):* Parent Safety & Hygiene — Superseded 2026-11-08: 3,800 sq ft Dollamur mats. Old text: [archive](../../archive/stale-2026-11-08/uwc_marketing_plan.md) & 2× daily EPA hospital-grade sanitization.
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
