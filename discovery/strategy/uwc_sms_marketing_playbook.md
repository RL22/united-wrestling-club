---
status: reference
group: strategy
---

# United Wrestling Club (UWC): SMS Marketing & Lifecycle Playbook

> **Client:** United Wrestling Club (UWC) — USA Wrestling Regional Training Center (RTC) #513  
> **Leadership:** Head Coach Naweed Zemaryalai & Co-Founder / 1980 Olympian Karim Zemaryalai  
> **Facility Address:** 30139 Industrial Pkwy SW, Suite C, Hayward, CA 94544  
> **Primary SMS & Voice Line:** `(510) 303-4869`  
> **Core Funnel Economics:** 100% Organic Local SEO Traffic $\rightarrow$ On-Page `<dialog>` Trial Pass Modal / Formspree (`xyyavaaj`) $\rightarrow$ $15 3-Day Mat Pass $\rightarrow$ **$139.99/mo Recurring Membership** (Scaling past the 45-member baseline toward 65+ active members)  

---

## Executive Strategic Mandate

United Wrestling Club operates under a **strict 100% organic acquisition mandate** (zero paid search or paid social ads). Every parent or adult athlete who lands on `unitedwrestlingclub.com` from East Bay local search queries (`wrestling gym`, `wrestling near me`, `youth wrestling hayward`, `fremont wrestling club`) is a high-intent, non-replaceable organic lead.

Historically, sending mobile visitors directly off-site to cold third-party registration screens (`wrestlingiq.com/unitedwrestlingclub/`) caused a **40%–60% mobile drop-off**, while standard email follow-ups sit unread in parent inboxes for 24+ hours. 

**Why SMS is UWC's #1 High-Velocity Conversion Channel:**
1. **98% Open Rate Within 3 Minutes:** East Bay parents searching for youth sports or CIF off-season training compare 2–3 local academies simultaneously. Texting within 60 seconds of modal submission locks in the family before they book elsewhere.
2. **Eliminates Industrial-Corridor "First-Day Anxiety":** Finding Suite C inside the industrial park at `30139 Industrial Pkwy SW` can intimidate first-time families. Proactive SMS arrival instructions (parking, entrance doors, exact gear needed) raise **Trial Show-Up Rates from ~55% to >85%**.
3. **Bridges the Two-Step Funnel:** Captures the lead on-site via the `<dialog>` Trial Pass modal + Formspree (`xyyavaaj`) first, then uses automated SMS nudges to rescue anyone who abandons the WrestlingIQ Team 513 checkout or hesitates to convert from the 3-Day Mat Pass into the **$139.99/mo recurring membership**.

---

## 1. Compliance, Technical Setup & Platform Architecture

### A. US A2P 10DLC Registration Requirements (Mandatory Blocker First)
All Application-to-Person (A2P) SMS traffic sent from a 10-digit long code (`(510) 303-4869`) over US carriers (AT&T, T-Mobile, Verizon) must be registered with **The Campaign Registry (TCR)** prior to activating automated workflows. Unregistered traffic is throttled or silently dropped by carrier spam filters.

| Registration Step | UWC Submission Specification | Notes & Carrier Verification Rules |
| :--- | :--- | :--- |
| **1. Brand Registration** | **Legal Entity:** United Wrestling Club (Verify exact IRS EIN name match with Naweed/Karim)<br>**Address:** 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544<br>**Website:** `https://unitedwrestlingclub.com`<br>**Vertical:** Sports / Recreation / Athletic Training | Exact match against IRS CP575 / EIN letter is required to achieve **Verified Standard / Low-Volume Standard** trust score (4–75 msg/sec throughput, far exceeding UWC's local volume needs). |
| **2. Campaign Use Case** | **Low-Volume Mixed (Marketing + Account Notification / Customer Care)** | Costs ~$1.50–$2.00/mo in carrier pass-through registry fees. Covers Trial Pass confirmations, practice reminders, membership conversions, review requests, and two-way parent Q&A. |
| **3. Opt-In Flow Proof** | Public URL & screenshot of the on-page `<dialog>` Trial Pass modal showing the unchecked SMS consent box, TCPA disclosure text, and links to `/privacy/` and `/terms/`. | Carriers manually audit the live URL and form screenshot before approving the campaign (1–5 business days). |
| **4. Registered Sample Messages** | **Sample 1:** `From UWC: Welcome [FirstName]! Your 3-Day Mat Pass at Ste C (30139 Industrial Pkwy SW) is set. Parking & 1st day guide: uwc513.co/start Reply STOP to opt out`<br>**Sample 2:** `From UWC: Hey [FirstName], Coach Naweed at UWC Hayward. Saw your inquiry! Grab your $15 3-Day Mat Pass & waiver here: uwc513.co/pass Reply STOP to opt out` | **Critical:** Actual automated texts must match the sender prefix (`From UWC:`) and use-case structure submitted during A2P registration. |

---

### B. TCPA Checkbox Disclosure Copy for On-Page `<dialog>` Trial Pass Modal
Under the Telephone Consumer Protection Act (TCPA), marketing SMS requires **express written consent** that is **not** a mandatory condition of purchasing the Trial Pass. Place the following checkbox and disclosure directly below the Mobile Phone field inside the on-page `<dialog>` Trial Pass modal and `/contact/` form:

#### Production HTML / UI Implementation Snippet
```html
<div class="uwc-sms-consent-group">
  <label class="uwc-checkbox-label" for="sms_opt_in">
    <input 
      type="checkbox" 
      id="sms_opt_in" 
      name="sms_opt_in" 
      value="true" 
    />
    <span>
      Text me my 3-Day Mat Pass confirmation, practice arrival instructions, and club offers from <strong>United Wrestling Club</strong> at the mobile number provided.
    </span>
  </label>
  <p class="uwc-tcpa-microcopy">
    By checking this box and submitting this form, you agree to receive recurring automated promotional and personalized marketing text messages (e.g., trial pass reminders, practice updates, and membership offers) from United Wrestling Club at the cell number used when signing up. Consent is not a condition of any purchase. Reply <strong>HELP</strong> for help and <strong>STOP</strong> to cancel. Msg frequency varies (up to 6 msgs/mo). Msg &amp; data rates may apply. View <a href="/terms/">Terms</a> &amp; <a href="/privacy/">Privacy Policy</a>.
  </p>
</div>
```

**Audit Log Payload (Formspree `xyyavaaj` + CRM Webhook):**
Every submission must store:
- `sms_opt_in`: `true` / `false`
- `consent_timestamp_utc`: ISO-8601 timestamp
- `consent_source_url`: Page URL where modal was triggered (e.g., `https://unitedwrestlingclub.com/locations/fremont/`)
- `consent_disclosure_version`: `v1.0-2026-11`

---

### C. Quiet Hours Enforcement (9:00 AM – 8:00 PM PT)
* **Strict Sending Window:** All automated lifecycle sequences and promotional broadcasts are restricted to **9:00 AM – 8:00 PM Pacific Time (`America/Los_Angeles`)**.
* **Queue-and-Hold Logic:**
  * **Exception (Immediate Transactional Confirmation — Text 1.1):** Because the parent just clicked submit on the site, the immediate opt-in/pass confirmation (`Text 1.1`) fires immediately.
  * **All Subsequent & Delayed Steps (Texts 1.2, 1.3, Sequences 2, 3, 4):** If a parent submits the form at `10:45 PM PT`, the 15-minute abandoned checkout follow-up (`Text 3.1`) or post-practice check-in (`Text 1.3`) automatically holds in the queue and releases at **9:05 AM PT the following morning**.

---

### D. Automated `STOP` / `HELP` Keyword Handling
Every carrier-mandated opt-out and help keyword must execute automatically within `<3 seconds`:

* **Honored Opt-Out Keywords:** `STOP`, `END`, `CANCEL`, `UNSUBSCRIBE`, `QUIT`, `STOPALL`, `OPTOUT`
* **Automated `STOP` Response (123 chars | 1 GSM-7 segment):**
  ```text
  From UWC: You are unsubscribed from United Wrestling Club texts. No more msgs will be sent. Reply HELP or call 510-303-4869
  ```
* **Honored Help Keywords:** `HELP`, `INFO`
* **Automated `HELP` Response (143 chars | 1 GSM-7 segment):**
  ```text
  From UWC: United Wrestling Club (30139 Industrial Pkwy SW Ste C, Hayward). Call/text 510-303-4869. Msg&data rates apply. Reply STOP to opt out.
  ```

---

### E. Platform Recommendation & WrestlingIQ Team 513 Integration Architecture

| Platform Option | Role in UWC Stack | Pros for UWC | Cons / Trade-offs | Recommendation |
| :--- | :--- | :--- | :--- | :--- |
| **WrestlingIQ Native Messaging (Team ID: 513)** | Active roster announcements, practice schedule changes, tournament weigh-in alerts, billing dunning | Built directly into UWC's billing & roster system; automatic division syncing. | **Cannot nurture pre-checkout leads** who fill out the website modal and abandon before creating a WrestlingIQ account; limited multi-step drip branching. | **Keep for Active Roster Ops** (Schedule alerts, snow/holiday closures, failed card recovery). |
| **HighLevel (GoHighLevel) via LeadConnector / Twilio 10DLC** | Lead capture automation, 2-way shared inbox for Coach Naweed's mobile app, Trial Pass conversion drips, GBP review automation | Native mobile app for Naweed to reply to parents from `(510) 303-4869`; native Google Business Profile (`ChIJsQd_yMaVj4ARrXw93nb4euo`) review tracking; visual workflow builder; built-in A2P 10DLC wizard. | ~$97/mo agency sub-account + ~$0.0079/segment Twilio pass-through. | **PRIMARY RECOMMENDATION** for Marketing & Lifecycle SMS. |
| **Direct Twilio Studio + Webhook Bridge** | Raw programmable SMS API triggered via Formspree `xyyavaaj` & WrestlingIQ webhooks | Lowest raw monthly overhead (~$2/mo number + $0.0079/msg); zero platform bloat. | No unified mobile inbox for Coach Naweed unless paired with Front/Twilio Conversations UI. | **Backup / Dev-First Option** if Naweed prefers zero new dashboard logins. |

#### Recommended End-to-End Data Flow
```
[Parent Submits <dialog> Trial Pass Modal on unitedwrestlingclub.com]
       │
       ├──► 1. Dual POST to Formspree (xyyavaaj) + HighLevel/Twilio Webhook
       │       • Creates Lead Contact (Tag: status:modal_submitted)
       │       • Starts 15-Min Timer for Sequence 3 (Abandoned Checkout)
       │
       └──► 2. Redirects Browser with Pre-Filled Params to WrestlingIQ Team 513
               │
               ├──► IF Parent Completes $15 3-Day Mat Pass Checkout:
               │       • WrestlingIQ Webhook / Email Parser tags Contact: status:trial_active
               │       • Cancels Sequence 3 immediately
               │       • Triggers Sequence 1 (Instant Confirmation & Anxiety Killer)
               │       • Schedules Sequence 2 (Day 2 & Day 3 $139.99/mo Conversion Flow)
               │
               └──► IF Parent Enrolls in $139.99/mo Recurring Division on WrestlingIQ:
                       • Tags Contact: status:member_active
                       • Cancels Sequence 2 immediately
                       • Schedules Sequence 4 (Day 14 5-Star GBP Review Nudge)
```

---

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
