# UWC Knowledge Base v1 (responder source)

- **Status:** Draft for approval. Nothing here is live.
- **Owner:** Naweed approves facts. Staff responder maintains the list.
- **Rule for the responder:** Answer only from entries marked **Verified** or **Client-confirmed**. For anything else, or any escalation category in Section B, hand off to staff.
- **Last reviewed:** 2026-11-05

## Open conflicts

Checked 2026-11-06 against the sources each entry cites. Paths are repo-relative. Line numbers are as checked. None of these is resolved here. The responder must not quote a conflicted value until its owner decides.

### OC-01. Monthly membership price (KB-08)
- **Values:**
  - $139.99 per month: `README.md` (58), `PRODUCT.md` (34), `site/src/components/home/Hero.astro` (24), `site/src/components/home/Pricing.astro` (35), `site/src/data/nav.ts` (16), `site/src/data/jsonld-home.ts` (80), `site/src/data/facts.ts` (44).
  - Monthly plans range from $89.99 to $150.00: `site/src/data/faqs.ts` (7), `site/src/components/home/Faq.astro` (38), `README.md` (60). The pricing page lists $89.99, $139.99, and $150.00: `site/src/pages/pricing.astro` (13 to 17).
- **Status:** open, owner decision. See `todos.md` (62 to 63).

### OC-02. Saturday hours: 8:00 to 10:00 AM gi row (KB-03)
- **Values:**
  - Saturday 10:00 AM to 12:00 PM, open mat: `site/src/components/shell/SiteFooter.astro` (70), `site/src/data/facts.ts` (22), `site/src/data/jsonld-home.ts` (Saturday opens 10:00, closes 12:00), `README.md` (53).
  - Saturday 8:00 to 10:00 AM, gi jiu-jitsu: `site/src/components/home/Schedule.astro` (48). That component is hard-coded and does not read `site/src/data/schedule.ts`, so the row is on the homepage. `site/src/data/schedule.ts` (25) marks the row pending (D1). `README.md` (53) says the row is hidden on the live site.
- **Status:** open, owner decision. See `todos.md` (59).

### OC-03. Weekday closing time (KB-03)
- **Values:**
  - Monday to Friday 6:00 AM to 10:00 PM: `site/src/components/shell/SiteFooter.astro` (69), `site/src/data/jsonld-home.ts` (weekday opens 06:00, closes 22:00), `README.md` (53).
  - 5 PM weekday closing, shown on the Google Business Profile: `README.md` (53), `todos.md` (117).
- **Status:** open, owner decision. Naweed owns the GBP listing (`todos.md` (116 to 117)).

### OC-04. How texts to the club line are answered (KB-02)
- **Values:**
  - Texts are answered by an automated assistant, with staff for anything it cannot handle: KB-02 (this file). `discovery/decisions/ADR-20261105-lead-response-ownership.md` (item 2) sets this as the target design.
  - Coach Naweed does not text leads, and no automated sender is connected: `discovery/decisions/ADR-20261105-lead-response-ownership.md` (line 8). Site copy still promises texts: `site/src/pages/register.astro` (14, 27), `site/src/components/forms/ConsentSms.astro` (9), `site/src/components/shell/TrialModal.astro` (28).
- **Status:** open, owner decision. KB-02 is marked Verified against the site. The ADR requires the copy to change before launch (`discovery/decisions/ADR-20261105-lead-response-ownership.md` (line 14)).

### OC-05. Media opt-out mechanism (KB-23)
- **Values:**
  - Check the box to opt out: KB-23 (this file), `site/src/data/facts.ts` (48). `discovery/site/website_rebuild_spec.md` (212 to 213) also has an unticked box that opts out when ticked.
  - The box is checked by default, and unchecking it opts out: `site/src/components/forms/ConsentMedia.astro` (8 to 9, `checked`; "Uncheck to opt out"). `discovery/decisions/ADR-20261105-forms-per-form-endpoints.md` (line 14, "default checked, opt-out").
- **Status:** open, owner decision.

### OC-06. Cancellation notice period (KB-08)
- **Values:**
  - 7 days advance notice to cancel: `discovery/decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md` (13). Legacy page `v01/index.html` (662) says the same.
  - No notice term on the site. The notice was removed from the homepage FAQ: `discovery/plans/phase1-log.md` (159, D25). KB-08 defers cancellation to KB-25, which this file does not define.
- **Status:** open, owner decision.

### OC-07. Karim Zemaryalai and the 1980 Moscow Games (KB-16)
- **Values:**
  - "1980 Moscow Olympic qualifier" or "1980 Olympian": `discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md` (line 17), `discovery/client/company_profile.md` (20, 46), `discovery/decisions/ADR-20261102-concept-consolidation-and-v04-flagship.md` (23).
  - He boycotted the 1980 Moscow Games: KB-16 (client chat, Nov 5, 2026), `discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md` (line 37). The same ADR states both values at lines 17 and 37.
- **Status:** open, owner decision. Karim must confirm the exact wording (`todos.md` (92 to 94)).

### OC-08. Karim Zemaryalai's Ali Aliyev Tournament result (KB-16)
- **Values:**
  - Silver Medal: `discovery/client/naweed_discovery_questions.md` (148), which quotes the /about page.
  - Bronze medalist: `discovery/client/company_profile.md` (20, 46).
  - "Medalist", no placing: `site/src/components/home/Coaches.astro` (29), `discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md` (line 17).
- **Status:** open, owner decision. See `todos.md` (130, "silver or bronze").

### OC-09. Rashad Rahimi's credentials (KB-16, Section C)
- **Values:**
  - "1980 Olympic Qualifier" and "Asian Games Silver Medalist": `site/src/components/pages/about/CoFounder.astro` (7 to 9), `site/src/components/home/Coaches.astro` (60, 61, 66), `discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md` (20), `discovery/client/company_profile.md` (48). `discovery/plans/phase1-log.md` (132, D22, 2026-11-06) restores these three credentials on the live site.
  - Olympic wording blocked: KB-16 and Section C of this file. `todos.md` (94) says "Olympic qualifier" is removed until confirmed. `todos.md` (90) says the 1980 badge was pulled from public copy.
- **Status:** open, owner decision.

### OC-10. Sandeep Singh Gosal's titles (KB-16)
- **Values:**
  - "3x California Greco-Roman State Champion" and "USA Wrestling Silver Certified Coach": `discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md` (21).
  - No titles listed; wrestled at Fresno State and San Francisco State: `discovery/client/company_profile.md` (49), `site/src/components/home/Coaches.astro` (79).
- **Status:** open, owner decision.

### OC-11. Mat footprint status (KB-14)
- **Values:**
  - 3,000 sq ft shown as fact: `site/src/components/home/Safety.astro` (17), `README.md` (54), `discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md` (12).
  - KB-14 status is "ADR-only. Not yet confirmed." and says do not quote. `discovery/plans/astro-design-system-and-buildout.md` (21) says the Safety section's 3,000 sq ft claim breaks KB rules.
- **Status:** open, owner decision.

### OC-12. Coaching ratio status (KB-15)
- **Values:**
  - 1:6 is a fixed invariant: `discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md` (14), `discovery/decisions/ADR-20261102-concept-consolidation-and-v04-flagship.md` (20).
  - Unverified, open fact check: `README.md` (55), `todos.md` (125). `todos.md` (122) says the 1:6 ratio is absent from the Astro build.
- **Status:** open, owner decision.

### OC-13. Dollamur as the mat brand (KB-13)
- **Values:**
  - Client-confirmed (KB-13, client chat Nov 4). Used as fact in `README.md` (54) and `site/src/components/home/Safety.astro` (17).
  - Still on the Naweed fact-check list: `todos.md` (124), `discovery/plans/astro-design-system-and-buildout.md` (316).
- **Status:** open, owner decision.

### OC-14. Youth age band (KB-05)
- **Values:**
  - Youth Wrestling Academy ages 5 to 13: KB-05 (this file), `PRODUCT.md` (15, 33).
  - Youth ages 5 to 18: `PRODUCT.md` (12).
  - Grade bands: "Kids, pre-K to 5th grade" and "Team & competition, K–12": `site/src/components/home/Schedule.astro` (20, 21, 28), `site/src/data/schedule.ts` (row-02). "Competition Youth (Pre K - 12th)": `site/src/pages/classes/youth-wrestling.astro` (25), `site/src/pages/pricing.astro` (16).
- **Status:** open, owner decision. KB-05 already asks Naweed to confirm which ages go in which program.

## Section A. Facts

| ID | Topic | Approved answer | Status | Source | Verify with |
|---|---|---|---|---|---|
| KB-01 | Address | 30139 Industrial Pkwy SW, Suite C, Hayward, CA 94544. | Verified | Site footer and JSON-LD | None |
| KB-02 | Phone | (510) 303-4869 is the club line for calls and texts. Texts are answered by our automated assistant, with a staff member for anything it cannot handle. | Verified | Site | Staff |
| KB-03 | Hours | Monday to Friday 6:00 AM to 10:00 PM. Saturday 10:00 AM to 12:00 PM (open mat). Sunday closed. Times can shift around holidays and tournaments. | Verified (site). Client-confirmed 6 AM weekdays and Saturday 10 AM. | Site, client chat | Naweed: confirm the Saturday end time (site says 12:00 PM; `README.md` once said 12:30 PM) |
| KB-04 | Class times | Point to the schedule on the homepage (`#schedule`). Read times from that list only. | Verified (site) | Site schedule | Staff, when the schedule changes |
| KB-05 | Programs and ages | Youth Wrestling Academy: ages 5 to 13. Varsity and Scholastic Prep: ages 14 to 18. Adult Wrestling and Wrestle-Jitsu: 18 and up. Saturday Open Mat: drop-in. | Verified (site, form options). Grade and age ranges differ on the schedule. | Site | Naweed: confirm which ages go in which program |
| KB-06 | 3-Day Mat Pass | $15. Three practices to see if the room fits. New members only. | Verified (site) | Site | Naweed: confirm eligibility details |
| KB-07 | Booking a trial | Fill in the trial form on the website, or call (510) 303-4869. The waiver is completed on WrestlingIQ (Team #513). | Verified (site). Arrival text not yet live. | Site | None |
| KB-08 | Monthly membership | $139.99 per month. Month to month. No contract. No cancellation fee. | Verified (site) | Site, discovery | Naweed: confirm the cancellation process (see KB-25) |
| KB-09 | Drop-in | $15 per visit. Saturday open mat is included with a monthly membership. | Verified (site) | Site | None |
| KB-10 | Payment and waiver | Payment and the waiver are completed on WrestlingIQ (Team #513). | Verified (site) | Site | None |
| KB-11 | What to wear | T-shirt and gym shorts with no pockets. | Site-stated. Not yet confirmed by Naweed. | Site success screen | Naweed |
| KB-12 | Arrival time | Arrive 15 minutes before class. | Site-stated. Not yet confirmed by Naweed. | Site success screen | Naweed |
| KB-13 | Mat and hygiene | Seamless Dollamur mats. Sanitized twice a day. | Client-confirmed (twice a day, Dollamur) | Client chat, Nov 4 | None |
| KB-14 | Mat size | About 3,000 sq ft. | ADR-only. Not yet confirmed. | `ADR-20261102-facility-and-coaching-invariants` | Naweed. Do not quote until confirmed. |
| KB-15 | Coaching ratio | 1 coach to 6 athletes. | Unverified (on the fact-check list) | `todos.md` P1 | Naweed. Do not quote. |
| KB-16 | Coaches | Blocked. Karim Zemaryalai (founder). He boycotted the 1980 Moscow Games (client, Nov 5, 2026). Do not quote any "Olympian" or "Moscow" claim until Karim confirms the exact wording. Naweed Zemaryalai (head coach). Rashad Rahimi. Sandeep Singh Gosal (youth competition). Farid Siddiq (boxing). | Blocked (wording). Names and roles verified on site. | Site; client chat, Nov 5 | Karim: exact 1980 wording and Ali Aliyev result |
| KB-17 | Reviews | 5.0 across 42 reviews on Google. Reviews on Google, Yelp, and Facebook. | Client-confirmed (Google); Yelp and Facebook counts not confirmed | Client chat, site | Staff |
| KB-18 | Sibling discount | Not on the public price list. | Unverified | `ADR-20261102-commercial-pricing-and-pif-promotions` | Naweed. Do not quote. |
| KB-19 | Women's self-defense | Planned. Dates and pricing not set. | Not confirmed. Do not quote prices or dates. | Plan docs | Naweed and staff |
| KB-20 | Holiday mixer and community day | Planned. Date not set. | Not confirmed. Do not quote a date. | Plan docs | Naweed |
| KB-21 | Directions by car | Not written. Give the address only. | Missing | None | Staff: write the parking and entrance guide |
| KB-22 | Privacy and texting | Reply STOP to stop texts. HELP for help. Message and data retention period is not yet published. | STOP and HELP verified (consent copy). Retention not set. | Consent copy | Privacy page (not built) |
| KB-23 | Media and photos | Media release is included by default. To opt out, check the box on the trial form or tell staff at check-in. | Verified (form copy). Check-in process not defined. | Trial form | Staff |

## Section B. Escalation categories (always hand off to staff)

Hand off immediately, with the full message and the lead record, for:

1. **Medical, injury, or allergy questions.** Never give medical advice. For an emergency, tell the parent to call 911.
2. **Refunds, credits, or billing disputes.**
3. **Cancellation, freeze, or account changes** (until KB-25 is approved).
4. **Minors:** pickup, custody, safety, bullying, or any child-protection concern.
5. **Complaints** about a coach, a class, or the facility.
6. **Photo or media removal requests** beyond the opt-out in KB-23.
7. **Anything not in Section A**, or any answer the responder would have to guess.
8. **Any request to speak to a person.**
9. **Press, sponsorship, corporate clinics, affiliate or coach partnerships.** Route to `/contact`, then to staff.

## Section C. Not to quote (until verified)

- Mat size (KB-14), coaching ratio (KB-15), sibling discount (KB-18)
- Women's self-defense prices or dates (KB-19)
- Holiday mixer date (KB-20)
- Any discount, free class, or offer not in Section A
- Any statement about a specific coach's credentials beyond KB-16

## Section D. Structure for the responder (later)

Each entry is one record with: ID, topic, approved answer, status, source, owner, last verified date, and an escalate-if rule. The published subset (Verified entries only) can become `llms.txt` (see `discovery/archive/snapshots/ai_readiness_audit.md`).
