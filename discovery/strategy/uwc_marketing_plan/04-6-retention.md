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
part: "4 of 8"
---

> Part 4 of 8 of [uwc_marketing_plan](../uwc_marketing_plan.md). Text is verbatim from the original; only links were rewritten.

## 6. Retention

### Current state
UWC's working baseline assumes **~7.5% monthly churn** (~13.33-month average tenure; ~$1,867 indicative gross LTV at $139.99/mo), with pronounced seasonal vulnerability in **November** (fall-to-winter sports transition) and **May** (end of CIF/SCWAY folkstyle/freestyle cycle & start of summer travel). New parents who enroll in WrestlingIQ currently face friction navigating dual sanctioning memberships (**USA Wrestling** at `usawmembership.com` AND **SCWAY** at `scwaywrestling.org/sign-up`) plus tournament singlet/warm-up attire rules on `/events`.

### The plan (4 Retention Moves)

- **Move 1 — 30-Day Active Member Onboarding Sequence (Email Sequence 2 + SMS Onboarding):** Immediately upon WrestlingIQ Team #513 enrollment, trigger the 3-email Member Onboarding sequence (`discovery/strategy/uwc_email_marketing_playbook.md`):
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
UWC's 5.0-star rating across 42 Google reviews proves parents love the club, and word-of-mouth from current families and high school teammates is already a top acquisition channel. However, referrals and reviews currently happen by accident: there is no automated Day-21 review prompt, and there is no structured buddy-pass or BJJ cross-training referral mechanic.

### The plan (4 Referral Moves)

- **Move 1 — Branded `/reviews/` Hub & Assisted Google Review Submission Engine (ADR-003):** Deploy the crawlable `/reviews/` page (`reviews/index.html`) featuring verified, attributed parent and athlete reviews filterable by division (*Youth*, *High School Varsity*, *Adult / BJJ*), and an assisted **"Copy & Open Google Review"** workflow pointing directly to `https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo` (with clipboard + popup-blocker fallback and zero rating-gating).
- **Move 2 — Automated Day-14 / Day-21 SMS & Email Review Trigger:** Wire **SMS `TXT-4.1`** and **Email #2.3** to fire automatically on Day 21 of active membership (after the family has experienced 3 full weeks of coaching). If the parent replies with positive feedback, `TXT-4.1B` sends the direct Google review shortlink (`uwc513.co/review`), systematically scaling UWC from **42 → 70 reviews in 90 days → 110+ reviews in 12 months**.
- **Move 3 — "Bring a Training Partner" 3-Day Mat Pass & 15% Family/Sibling Program:** Embed a two-sided referral mechanic in Email #2.3 and quarterly member texts: active UWC families receive a shareable **"Teammate 3-Day Mat Pass"** link (`unitedwrestlingclub.com/?utm_source=member_referral&utm_medium=referral`) to invite a school or football teammate, paired with UWC's **15% additional-household/sibling tuition discount** (pending final Naweed confirmation per ADR-004).Every modal submission captures *"If referred by a coach, school, or family, who can we thank?"* (`self_reported_source = friend_family_referral`) so Coach Naweed can recognize referring families on the mat and award UWC EDC team gear credits.
- **Move 4 — Quarterly East Bay Community Day & BJJ Takedown Mixer (Growth Lever 3):** Host a quarterly Saturday Open Mat event combining a free youth introductory clinic (10:00 AM) with an East Bay BJJ & Grappling Takedown Mixer (11:30 AM). Partner with local Alameda County BJJ gyms and high school wrestling captains; require online RSVP via the `<dialog>` modal (tagging `utm_campaign=quarterly_bjj_mixer`) and follow up within 2 hours via SMS with the `$15 3-Day Mat Pass` or `$100/mo BJJ 3-Day (#9536)` / `$139.99/mo Adult (#1084)` offer.

### 90-day referral moves
- **Weeks 1–2:** Ship `/reviews/index.html`; test the assisted Google review flow (`ChIJsQd_yMaVj4ARrXw93nb4euo`) on iOS and Android.
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
