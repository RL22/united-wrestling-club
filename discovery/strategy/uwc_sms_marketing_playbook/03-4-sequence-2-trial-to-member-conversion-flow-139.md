---
type: dossier
status: current
group: strategy
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["https://unitedwrestlingclub.com", "https://unitedwrestlingclub.com/locations/fremont/", "https://unitedwrestlingclub.com/first-day-guide/", "https://unitedwrestlingclub.com/schedule/", "https://www.wrestlingiq.com/unitedwrestlingclub/register", "https://unitedwrestlingclub.com/#trial-pass-modal", "https://unitedwrestlingclub.com/reviews/", "https://unitedwrestlingclub.com/pricing/#seasonal-pif", "https://unitedwrestlingclub.com/camps/", "https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo"]
shard_of: "discovery/strategy/uwc_sms_marketing_playbook.md"
part: "3 of 4"
---

> Part 3 of 4 of [uwc_sms_marketing_playbook](../uwc_sms_marketing_playbook.md). Text is verbatim from the original; only links were rewritten.

## 4. Sequence 2 — Trial-to-Member Conversion Flow ($139.99/mo Recurring)

* **Objective:** Convert 3-Day Mat Pass families into recurring **$139.99/mo WrestlingIQ Team 513 members** while emotional momentum is at its peak on Days 2 and 3.
* **Entry Trigger:** Completion of Practice #2 (or 48 hours after Practice #1).
* **Exit Condition:** Immediately halts the moment WrestlingIQ fires the `status:member_active` webhook ($139.99/mo division enrollment completed).

### Text 2.1 — Day 2 Momentum & Division Fit Nudge
* **Timing:** Day after Practice #2 at 11:00 AM PT
* **UTM Campaign:** `utm_source=sms&utm_medium=sms&utm_campaign=seq2_trial_convert&utm_content=txt1_day2_nudge`
* **Copy:**
```text
From UWC: Strong 2nd practice, [FirstName]! Coach Karim & I loved the focus. Ready to lock in your Team 513 division spot ($139.99/mo)? Join: uwc513.co/join
```
* **Character Count:** `156 chars` raw template (`151 chars` with 6-letter name) — **1 GSM-7 Segment**
* **Why It Works:** Invokes both Coach Naweed and 1980 Olympian Coach Karim Zemaryalai to validate the athlete's effort, transparently anchors the `$139.99/mo` rate, and provides a 1-tap registration link.

### Text 2.2 — Day 3 Final Mat Pass Session & Full Membership Activation
* **Timing:** 1 hour after Practice #3 ends (or Day 4 at 10:30 AM PT if Practice #3 ends after 7:00 PM PT)
* **UTM Campaign:** `utm_source=sms&utm_medium=sms&utm_campaign=seq2_trial_convert&utm_content=txt2_day3_close`
* **Copy:**
```text
From UWC: 3-Day Mat Pass complete! Keep [Athlete]'s momentum going at RTC #513 for $139.99/mo. Activate your division membership now: uwc513.co/join513
```
* **Character Count:** `151 chars` raw template (`148 chars` with 6-letter name) — **1 GSM-7 Segment**
* **Why It Works:** Strikes right as the 3-Day Mat Pass wraps up, framing enrollment as preserving the athlete's hard-earned progress rather than starting a cold subscription.

### Text 2.3 — Day 5 Roster Spot Hold Expiry (Final Conversion Follow-Up)
* **Timing:** 48 hours after Text 2.2 (if still not enrolled in WrestlingIQ) at 12:15 PM PT
* **UTM Campaign:** `utm_source=sms&utm_medium=sms&utm_campaign=seq2_trial_convert&utm_content=txt3_day5_hold`
* **Copy:**
```text
From UWC: Hey [FirstName], Coach Naweed. We're holding a roster spot for next week's cycle ($139.99/mo). Lock it in on WrestlingIQ: uwc513.co/roster
```
* **Character Count:** `148 chars` raw template (`143 chars` with 6-letter name) — **1 GSM-7 Segment**
* **Why It Works:** Creates legitimate training-cycle urgency ahead of the following week's practices without resorting to brand-eroding discounting.

---

## 5. Sequence 3 — Abandoned Inquiry / Unclaimed Mat Pass Follow-Up

* **Objective:** Recover warm East Bay leads who submitted the on-page `<dialog>` Trial Pass modal (or Formspree `xyyavaaj` inquiry form) on `unitedwrestlingclub.com` but dropped off before completing the WrestlingIQ Team 513 checkout/waiver.
* **Entry Trigger:** `status:modal_submitted` AND `status:trial_active == false` after 15 minutes.
* **Exit Condition:** Immediately halts the moment the user completes the $15 3-Day Mat Pass or $139.99/mo membership checkout on WrestlingIQ (and moves them into Sequence 1).

### Text 3.1 — 15-Minute High-Velocity Checkout Recovery
* **Timing:** 15 minutes after modal submission (if within 9:00 AM – 8:00 PM PT; otherwise queued for 9:05 AM PT)
* **UTM Campaign:** `utm_source=sms&utm_medium=sms&utm_campaign=seq3_abandoned_pass&utm_content=txt1_15m_recovery`
* **Copy:**
```text
From UWC: Hey [FirstName], Coach Naweed at UWC Hayward. Saw your inquiry! Grab your $15 3-Day Mat Pass & waiver here: uwc513.co/pass Reply STOP to opt out
```
* **Character Count:** `154 chars` raw template (`149 chars` with 6-letter name) — **1 GSM-7 Segment**
* **Why It Works:** Reaches the parent while their phone is still in hand, provides a direct deep link back to finish the $15 pass & waiver, and includes the required first-touch `STOP` disclosure.

### Text 3.2 — 24-Hour Beginner Reassurance & Two-Way Age/Division Triage
* **Timing:** 24 hours after modal submission (if still unclaimed)
* **UTM Campaign:** `utm_source=sms&utm_medium=sms&utm_campaign=seq3_abandoned_pass&utm_content=txt2_24h_reassure`
* **Copy:**
```text
From UWC: Still looking for wrestling in Hayward? Beginners welcome at Ste C! Text me your athlete's age or claim your 3-Day Pass here: uwc513.co/pass
```
* **Character Count:** `150 chars` — **1 GSM-7 Segment**
* **Why It Works:** Often parents abandon checkout because they aren't sure which division fits their child's age or experience level. Inviting them to simply reply with their athlete's age opens a high-converting dialogue.

### Text 3.3 — 72-Hour Next-Week Beginner Cohort Call
* **Timing:** 72 hours after modal submission (usually Thursday/Sunday afternoon at 4:00 PM PT ahead of Monday practice)
* **UTM Campaign:** `utm_source=sms&utm_medium=sms&utm_campaign=seq3_abandoned_pass&utm_content=txt3_72h_cohort`
* **Copy:**
```text
From UWC: New beginner group hits the mat this week at 30139 Industrial Pkwy SW Ste C. Claim your 3-Day Mat Pass before practice: uwc513.co/pass
```
* **Character Count:** `144 chars` — **1 GSM-7 Segment**
* **Why It Works:** Anchors the decision to an upcoming weekly cohort ("this week") so the parent has a concrete start date to commit to.

---
