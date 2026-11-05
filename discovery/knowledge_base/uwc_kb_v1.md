# UWC Knowledge Base v1 (responder source)

- **Status:** Draft for approval. Nothing here is live.
- **Owner:** Naweed approves facts. Staff responder maintains the list.
- **Rule for the responder:** Answer only from entries marked **Verified** or **Client-confirmed**. For anything else, or any escalation category in Section B, hand off to staff.
- **Last reviewed:** 2026-11-05

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

Each entry is one record with: ID, topic, approved answer, status, source, owner, last verified date, and an escalate-if rule. The published subset (Verified entries only) can become `llms.txt` (see `discovery/ai_readiness_audit.md`).
