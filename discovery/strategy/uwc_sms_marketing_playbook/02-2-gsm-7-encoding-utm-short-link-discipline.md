---
type: dossier
status: current
group: strategy
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["https://unitedwrestlingclub.com", "https://unitedwrestlingclub.com/locations/fremont/", "https://unitedwrestlingclub.com/first-day-guide/", "https://unitedwrestlingclub.com/schedule/", "https://www.wrestlingiq.com/unitedwrestlingclub/register", "https://unitedwrestlingclub.com/#trial-pass-modal", "https://unitedwrestlingclub.com/reviews/", "https://unitedwrestlingclub.com/pricing/#seasonal-pif", "https://unitedwrestlingclub.com/camps/", "https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo"]
shard_of: "discovery/strategy/uwc_sms_marketing_playbook.md"
part: "2 of 4"
---

> Part 2 of 4 of [uwc_sms_marketing_playbook](../uwc_sms_marketing_playbook.md). Text is verbatim from the original; only links were rewritten.

## 2. GSM-7 Encoding & UTM Short-Link Discipline

### A. Strict GSM-7 160-Character Single-Segment Rule
Carriers bill SMS per **160-character GSM-7 segment**. Introducing a single emoji (`🤼`, `🔥`), curly apostrophe (`’`), or em-dash (`—`) forces the entire message into **UCS-2 Unicode encoding**, slashing the segment limit from **160 characters to 70 characters** and doubling or tripling per-message carrier fees.

**Mandatory Copy Rules Applied Across All UWC Templates Below:**
1. **Zero Emojis, Zero Em-Dashes (`—`), Zero Curly Quotes (`’`):** Use standard ASCII hyphens (`-`) and straight apostrophes (`'`) only.
2. **Sender ID Prefix on Every Send:** Every message begins with `From UWC:` so parents immediately recognize the club.
3. **Token Length Budgeting:** Character counts below are calculated assuming a **6-character `{{FirstName}}` / `{{Athlete}}` fallback** (e.g., `"Marcus"` or `"there"`). Every single template stays strictly **$\le$ 160 characters (1 GSM-7 segment)**.

### B. Branded Short-Link Router & Full UTM Taxonomy
Never paste raw 95-character URLs with UTM strings directly into an SMS body. Use a branded short-domain redirector (`uwc513.co/*` or `unitedwrestlingclub.com/go/*` edge redirects) that resolves to the full destination URL with GA4 UTM parameters appended:

| Short Link in SMS (13–17 chars) | Resolves To Destination URL | Full Appended UTM Query String |
| :--- | :--- | :--- |
| `uwc513.co/start` | `https://unitedwrestlingclub.com/first-day-guide/` | `?utm_source=sms&utm_medium=sms&utm_campaign=seq1_trial_confirm&utm_content=txt1_arrival_guide` |
| `uwc513.co/mat` | `https://unitedwrestlingclub.com/schedule/` | `?utm_source=sms&utm_medium=sms&utm_campaign=seq1_trial_confirm&utm_content=txt2_24h_reminder` |
| `uwc513.co/join` | `https://www.wrestlingiq.com/unitedwrestlingclub/register` | `?utm_source=sms&utm_medium=sms&utm_campaign=seq2_trial_convert&utm_content=txt1_day2_nudge` |
| `uwc513.co/join513` | `https://www.wrestlingiq.com/unitedwrestlingclub/register` | `?utm_source=sms&utm_medium=sms&utm_campaign=seq2_trial_convert&utm_content=txt2_day3_close` |
| `uwc513.co/roster` | `https://www.wrestlingiq.com/unitedwrestlingclub/register` | `?utm_source=sms&utm_medium=sms&utm_campaign=seq2_trial_convert&utm_content=txt3_day5_hold` |
| `uwc513.co/pass` | `https://unitedwrestlingclub.com/#trial-pass-modal` | `?utm_source=sms&utm_medium=sms&utm_campaign=seq3_abandoned_pass&utm_content=recovery_link` |
| `uwc513.co/reviews` | `https://unitedwrestlingclub.com/reviews/` | `?utm_source=sms&utm_medium=sms&utm_campaign=seq4_gbp_review&utm_content=day14_nudge` |
| `uwc513.co/pif` | `https://unitedwrestlingclub.com/pricing/#seasonal-pif` | `?utm_source=sms&utm_medium=sms&utm_campaign=bcast_seasonal_pif&utm_content=pif_offer` |
| `uwc513.co/camp` | `https://unitedwrestlingclub.com/camps/` | `?utm_source=sms&utm_medium=sms&utm_campaign=bcast_clinic_camp&utm_content=camp_reg` |

---

## 3. Sequence 1 — Instant Trial Pass Confirmation & First-Day Anxiety Killer

* **Objective:** Eliminate industrial-park navigation confusion, ensure the athlete arrives with proper gear, and establish personal rapport with Coach Naweed right after their first session.
* **Entry Trigger:** `status:trial_active` (Parent completes $15 3-Day Mat Pass registration on WrestlingIQ Team 513).
* **Exit Condition:** Continues automatically into Sequence 2 after Text 1.3; exits early only on `STOP` or immediate full-membership upgrade.

### Text 1.1 — Immediate Confirmation + Parking / Suite C Entrance Walkthrough
* **Timing:** Immediate (`<60 seconds` after Trial Pass claim)
* **UTM Campaign:** `utm_source=sms&utm_medium=sms&utm_campaign=seq1_trial_confirm&utm_content=txt1_arrival_guide`
* **Copy:**
```text
From UWC: Welcome [FirstName]! Your 3-Day Mat Pass at Ste C (30139 Industrial Pkwy SW) is set. Parking & 1st day guide: uwc513.co/start Reply STOP to opt out
```
* **Character Count:** `157 chars` raw template (`152 chars` with 6-letter name) — **1 GSM-7 Segment**
* **Why It Works:** Confirms the exact Suite C address in Hayward, delivers a visual walkthrough of where to park and enter on Industrial Pkwy SW, and satisfies the mandatory first-message TCPA opt-out footer.

### Text 1.2 — 24-Hour Pre-Practice Gear & Hydration Reminder
* **Timing:** 24 hours prior to first scheduled practice (or 10:00 AM PT on practice day if booked same-day)
* **UTM Campaign:** `utm_source=sms&utm_medium=sms&utm_campaign=seq1_trial_confirm&utm_content=txt2_24h_reminder`
* **Copy:**
```text
From UWC: See you on the mat! Bring clean athletic shorts (no zippers), t-shirt, water bottle & wrestling/clean shoes. Map & schedule: uwc513.co/mat
```
* **Character Count:** `148 chars` — **1 GSM-7 Segment**
* **Why It Works:** Answers the #1 parent anxiety question ("What does my kid wear if they don't own wrestling shoes or a singlet yet?") before they have to ask, preventing last-minute no-shows.

### Text 1.3 — 2-Hour Post-First-Practice Check-In from Coach Naweed
* **Timing:** 2 hours after first class concludes (capped at 7:50 PM PT to respect quiet hours; otherwise held until 9:15 AM PT next morning)
* **UTM Campaign:** Conversational two-way check-in (No link required; optimizes for reply rate)
* **Copy:**
```text
From UWC: Hey [FirstName], Coach Naweed here. Great effort on the mat tonight! How did day 1 feel? Reply with any questions before session 2.
```
* **Character Count:** `141 chars` raw template (`136 chars` with 6-letter name) — **1 GSM-7 Segment**
* **Why It Works:** Shifts the channel from automated notifications to a genuine 2-way conversation with Head Coach Naweed Zemaryalai, building high-trust accountability before Day 2.

---
