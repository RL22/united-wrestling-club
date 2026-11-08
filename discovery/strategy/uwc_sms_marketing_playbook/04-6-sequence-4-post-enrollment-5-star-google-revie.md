---
type: dossier
status: current
group: strategy
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["https://unitedwrestlingclub.com", "https://unitedwrestlingclub.com/locations/fremont/", "https://unitedwrestlingclub.com/first-day-guide/", "https://unitedwrestlingclub.com/schedule/", "https://www.wrestlingiq.com/unitedwrestlingclub/register", "https://unitedwrestlingclub.com/#trial-pass-modal", "https://unitedwrestlingclub.com/reviews/", "https://unitedwrestlingclub.com/pricing/#seasonal-pif", "https://unitedwrestlingclub.com/camps/", "https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo"]
shard_of: "discovery/strategy/uwc_sms_marketing_playbook.md"
part: "4 of 4"
---

> Part 4 of 4 of [uwc_sms_marketing_playbook](../uwc_sms_marketing_playbook.md). Text is verbatim from the original; only links were rewritten.

## 6. Sequence 4 — Post-Enrollment 5-Star Google Review Nudge & Seasonal Broadcasts

### Part A: Day 14 Post-Enrollment 5-Star GBP Review Nudge
* **Strategic Purpose:** UWC currently holds **42 five-star reviews (5.0★ rating)** on its Hayward Google Business Profile (`Place ID: ChIJsQd_yMaVj4ARrXw93nb4euo`). Growing review velocity past 75+ and 100+ verified reviews—especially containing sub-market keywords like *"youth wrestling in Hayward"*, *"driving from Fremont/Union City"*, and *"Coach Naweed & Coach Karim"*—is the #1 local ranking factor to push `wrestling near me` (#11) and `wrestling clubs near me` (#14) into the **Top-3 Google Map Pack**.
* **Entry Trigger:** Day 14 of active `$139.99/mo` membership (`status:member_active` + at least 3 attended practices logged in WrestlingIQ).
* **Destination:** Links to `https://unitedwrestlingclub.com/reviews/` (`uwc513.co/reviews`), which displays 1-tap review prompt cards and deep-links straight to the Google Write-a-Review modal (`https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo`).

#### Text 4.1 — Day 14 Honeymoon-Window Review Request
* **Timing:** Day 14 post-enrollment at 11:30 AM PT (the day after an attended evening practice)
* **UTM Campaign:** `utm_source=sms&utm_medium=sms&utm_campaign=seq4_gbp_review&utm_content=txt1_day14_nudge`
* **Copy:**
```text
From UWC: Hey [FirstName], loved having your family on the mat these past 2 weeks! Mind sharing a quick 5-star review for UWC Hayward? uwc513.co/reviews
```
* **Character Count:** `152 chars` raw template (`147 chars` with 6-letter name) — **1 GSM-7 Segment**

#### Text 4.2 — Day 21 Gentle Review Follow-Up (Conditional on Unclicked Link)
* **Timing:** Day 21 post-enrollment at 12:30 PM PT (Sent **ONLY** if `uwc513.co/reviews` was not clicked in Text 4.1)
* **UTM Campaign:** `utm_source=sms&utm_medium=sms&utm_campaign=seq4_gbp_review&utm_content=txt2_day21_followup`
* **Copy:**
```text
From UWC: Quick favor from Coach Naweed! Reviews help East Bay families find our mat room. Takes 30 sec to share your UWC experience: uwc513.co/reviews
```
* **Character Count:** `151 chars` — **1 GSM-7 Segment**

---

### Part B: Seasonal PIF (Paid-In-Full) & Camp / Clinic Broadcast Templates
* **Segmentation & Frequency Rules:**
  * Maximum **2 broadcast sends per month** to active or past-trial lists.
  * **Strict Suppression:** Automatically exclude anyone currently inside Sequences 1, 2, or 3 so new leads never get double-tapped during their Trial Pass window.
  * Include `STOP=opt out` on every promotional broadcast.

#### Broadcast 4.3 — Seasonal Paid-In-Full (PIF) Membership Offer
* **Use Case:** Quarterly cash-flow injection & multi-month retention lock-in (Fall Folkstyle Season, Spring Freestyle/Greco Cycle, Summer Off-Season). Upgrades monthly `$139.99/mo` members or reactivates past trials into a pre-paid seasonal commitment.
* **UTM Campaign:** `utm_source=sms&utm_medium=sms&utm_campaign=bcast_seasonal_pif&utm_content=pif_offer`
* **Copy:**
```text
From UWC: Lock in our Seasonal PIF Membership & save vs $139.99/mo! Full access at RTC #513 Hayward. 10 spots open. Claim yours: uwc513.co/pif STOP=opt out
```
* **Character Count:** `154 chars` — **1 GSM-7 Segment**

#### Broadcast 4.4 — CIF Off-Season / Olympic Technique Camp & Clinic Broadcast
* **Use Case:** High-margin weekend clinics, summer wrestling camps, or pre-CIF tournament intensives led by Coach Karim (1980 Olympian) and Coach Naweed.
* **UTM Campaign:** `utm_source=sms&utm_medium=sms&utm_campaign=bcast_clinic_camp&utm_content=camp_reg`
* **Copy:**
```text
From UWC: UWC Hayward Intensive Camp w/ Coach Karim (1980 Olympian) & Naweed is open! Limited mat spots at Ste C. Register now: uwc513.co/camp STOP=opt out
```
* **Character Count:** `155 chars` — **1 GSM-7 Segment**

---

## 7. Master Message Audit Matrix (GSM-7 & UTM Verification)

| Message ID | Sequence / Trigger | Timing (9am–8pm PT Enforced) | Raw Char Count | Segment Count | Encoding | Short Link (`uwc513.co`) | `utm_campaign` |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| **SYS-STOP** | Inbound `STOP` / `QUIT` | Immediate (`<3 sec`) | 123 / 160 | 1 | GSM-7 | *None* | *System Compliance* |
| **SYS-HELP** | Inbound `HELP` / `INFO` | Immediate (`<3 sec`) | 143 / 160 | 1 | GSM-7 | *None* | *System Compliance* |
| **TXT-1.1** | Seq 1: Trial Pass Claimed | Immediate (`<60 sec`) | 157 / 160 | 1 | GSM-7 | `uwc513.co/start` | `seq1_trial_confirm` |
| **TXT-1.2** | Seq 1: Pre-Practice Gear | -24h before Practice #1 | 148 / 160 | 1 | GSM-7 | `uwc513.co/mat` | `seq1_trial_confirm` |
| **TXT-1.3** | Seq 1: Coach Naweed Check-In | +2h after Practice #1 | 141 / 160 | 1 | GSM-7 | *Two-Way Reply* | `seq1_trial_confirm` |
| **TXT-2.1** | Seq 2: Day 2 Momentum | Morning after Practice #2 (11:00 AM) | 156 / 160 | 1 | GSM-7 | `uwc513.co/join` | `seq2_trial_convert` |
| **TXT-2.2** | Seq 2: Day 3 Pass Complete | +1h after Practice #3 | 151 / 160 | 1 | GSM-7 | `uwc513.co/join513` | `seq2_trial_convert` |
| **TXT-2.3** | Seq 2: Day 5 Roster Hold | +48h after TXT-2.2 (12:15 PM) | 148 / 160 | 1 | GSM-7 | `uwc513.co/roster` | `seq2_trial_convert` |
| **TXT-3.1** | Seq 3: Abandoned Modal | +15m after Unpaid Modal Submit | 154 / 160 | 1 | GSM-7 | `uwc513.co/pass` | `seq3_abandoned_pass` |
| **TXT-3.2** | Seq 3: Beginner Triage | +24h after Unpaid Modal Submit | 150 / 160 | 1 | GSM-7 | `uwc513.co/pass` | `seq3_abandoned_pass` |
| **TXT-3.3** | Seq 3: Weekly Cohort Call | +72h after Unpaid Modal Submit | 144 / 160 | 1 | GSM-7 | `uwc513.co/pass` | `seq3_abandoned_pass` |
| **TXT-4.1** | Seq 4: Day 14 Review Nudge | Day 14 of Active Membership | 152 / 160 | 1 | GSM-7 | `uwc513.co/reviews` | `seq4_gbp_review` |
| **TXT-4.2** | Seq 4: Day 21 Review Follow | Day 21 (If TXT-4.1 Unclicked) | 151 / 160 | 1 | GSM-7 | `uwc513.co/reviews` | `seq4_gbp_review` |
| **BCAST-4.3** | Seasonal PIF Offer | Quarterly / Season Start | 154 / 160 | 1 | GSM-7 | `uwc513.co/pif` | `bcast_seasonal_pif` |
| **BCAST-4.4** | Intensive Camp / Clinic | Pre-Camp Window | 155 / 160 | 1 | GSM-7 | `uwc513.co/camp` | `bcast_clinic_camp` |

---

## 8. KPIs, Revenue Attribution & Unit Economics

### A. Core Performance Targets & Guardrails

| Lifecycle Metric | Current Baseline | 90-Day Target | Guardrail / Alert Threshold | How It Is Measured |
| :--- | :---: | :---: | :---: | :--- |
| **Modal SMS Opt-In Rate** | 0% (No SMS box) | **75% – 85%** | $<60\%$ | `sms_opt_in = true` divided by total `<dialog>` Trial Pass modal submissions (`Formspree xyyavaaj`). |
| **Abandoned Pass Recovery Rate (Seq 3)** | 0% | **25% – 35%** | $<15\%$ | Unpaid modal leads who complete WrestlingIQ $15 3-Day Mat Pass within 72h of receiving Sequence 3. |
| **Trial Pass Mat Show-Up Rate (Seq 1)** | ~55% (Est.) | **85%+** | $<70\%$ | Paid 3-Day Mat Pass holders who check in at Suite C for Practice #1 within 7 days. |
| **Reply Rate to Text 1.3 (Coach Check-In)** | N/A | **35% – 50%** | $<20\%$ | Inbound parent replies to Coach Naweed's post-practice check-in text. |
| **Trial-to-$139.99/mo Conversion Rate (Seq 2)** | ~35% (Manual) | **55% – 65%** | $<40\%$ | Trial Pass athletes who enroll in a recurring $139.99/mo division on WrestlingIQ Team 513 within 7 days. |
| **Day-14 Google Review Conversion Rate (Seq 4)** | 42 Total Reviews | **30% – 40%** of new members | $<15\%$ | Net-new 5-star Google reviews posted on Hayward GBP (`ChIJsQd_yMaVj4ARrXw93nb4euo`) per 10 new members (+4 to +6 reviews/mo). |
| **SMS Opt-Out (`STOP`) Rate** | N/A | **$<1.0\%$ per sequence** | $>2.0\%$ | Total `STOP` replies divided by total unique recipients. |
| **Carrier Filtering / Error Rate** | N/A | **$<0.5\%$** | $>1.5\%$ | Twilio / LeadConnector error codes (`30007` carrier filtering) monitored weekly. |

### B. Financial ROI Model (Scaling Above the 45-Member Baseline)
* **Monthly SMS Infrastructure & Carrier Cost:**
  * 50 organic modal inquiries/month $\times$ ~4 texts/lead = 200 automated segments $\approx$ **$1.60/mo in carrier fees** (+ ~$2/mo 10DLC number + ~$2/mo TCR campaign fee).
* **Net Revenue Impact:**
  * Recovering just **3 abandoned modal inquiries/month** (Sequence 3) + lifting Trial-to-Member conversion by **4 additional members/month** (Sequences 1 & 2) = **+7 net-new recurring members/month**.
  * **7 new members $\times$ $139.99/mo = +$979.93/mo in net-new Monthly Recurring Revenue (MRR)** added every single month ($11,759/yr annualized per monthly cohort), paying for the entire $1,000/mo Sprintz Growth OS retainer from month one's cohort alone.
