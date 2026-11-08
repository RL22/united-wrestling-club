---
type: dossier
status: current
group: strategy
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["https://unitedwrestlingclub.com", "https://unitedwrestlingclub.com/locations/fremont/", "https://unitedwrestlingclub.com/first-day-guide/", "https://unitedwrestlingclub.com/schedule/", "https://www.wrestlingiq.com/unitedwrestlingclub/register", "https://unitedwrestlingclub.com/#trial-pass-modal", "https://unitedwrestlingclub.com/reviews/", "https://unitedwrestlingclub.com/pricing/#seasonal-pif", "https://unitedwrestlingclub.com/camps/", "https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo"]
shard_of: "discovery/strategy/uwc_sms_marketing_playbook.md"
part: "1 of 4"
---

> Part 1 of 4 of [uwc_sms_marketing_playbook](../uwc_sms_marketing_playbook.md). Text is verbatim from the original; only links were rewritten.


# United Wrestling Club (UWC): SMS Marketing & Lifecycle Playbook

> **Client:** United Wrestling Club (UWC) — USA Wrestling Regional Training Center (RTC) #513  
> **Leadership:** Head Coach Naweed Zemaryalai & Co-Founder / 1980 Olympian Karim Zemaryalai  
> **Facility Address:** 30139 Industrial Pkwy SW, Suite C, Hayward, CA 94544  
> **Primary SMS & Voice Line:** `(510) 303-4869`  
> **Core Funnel Economics:** 100% Organic Local SEO Traffic $\rightarrow$ On-Page `<dialog>` Trial Pass Modal / Formspree (`xyyavaaj`) $\rightarrow$ $15 3-Day Mat Pass $\rightarrow$ **$139.99/mo Recurring Membership** (Scaling past the 45-member baseline toward 65+ active members)  

---

## TL;DR
- SMS is the top conversion channel under a strict 100% organic mandate, and trial show-up is about 55% today with a target of 85% or more after automated arrival instructions (see RC-10).
- A2P 10DLC registration with The Campaign Registry is a blocker, since carriers throttle or drop unregistered traffic.
- Sequence sends run in 9:00 AM to 8:00 PM Pacific quiet hours, and only the immediate transactional confirmation is exempt.
- STOP and HELP keywords are handled automatically within 3 seconds with carrier-compliant replies.
- Four sequences cover trial pass confirmation, trial-to-member conversion at $139.99 per month, abandoned-inquiry follow-up, and post-enrollment review nudges with seasonal broadcasts.

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
