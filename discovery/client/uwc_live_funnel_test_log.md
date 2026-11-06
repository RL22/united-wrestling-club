---
type: audit
status: current
group: client
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-04
last_reviewed: 2026-11-04
sources: ["https://www.unitedwrestlingclub.com/contact", "https://formspree.io/f/xyyavaaj", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=6327&show_registration=true&team_id=513"]
---

# UWC Live Sales Funnel Audit & Mystery-Shopper Test Log

> **Objective:** Enter United Wrestling Club's current live sales funnel across all 3 active entry points to document exact email/SMS touchpoints, sender addresses, response latency, and automation gaps.  
> **Test Date:** November 4, 2026  

## TL;DR

- The test date is November 4, 2026; the audit enters the live funnel through three doors to log email and SMS touchpoints, sender addresses, response latency, and automation gaps
- Door 1 is the /contact form posting to Formspree xyyavaaj; the live form has no phone field and no automated Suite C arrival guide
- Door 2 is the WrestlingIQ $15 3-Day Trial checkout (paid_session_id 6327, team 513); the audit hypothesizes that zero abandoned-checkout SMS or email follow-ups fire today
- Door 3 tests inbound SMS and missed calls to (510) 303-4869 during mat hours (4:30–8:00 PM PT) for an automated text-back
- The scorecard is still pending, so no auto-email, auto-SMS, or response-latency results are recorded yet

---

## The 3 Live Funnel Entry Doors to Test

### Door 1: Website Contact Form (`/contact` → Formspree `xyyavaaj`)
- **Live URL:** https://www.unitedwrestlingclub.com/contact
- **Underlying Endpoint:** `POST https://formspree.io/f/xyyavaaj`
- **Live Fields Collected:** `name`, `email`, `message` *(Note: the live `/contact` form does not even have a dedicated `phone` field!)*
- **What to Paste (Test Persona — East Bay Parent):**
  - **Name:** `[Your Test Name, e.g., Marcus Cole]`
  - **Email:** `[Your Test Email — use a Gmail address so we can inspect "Show Original" SPF/DKIM/DMARC headers]`
  - **Message:**
    ```text
    Hi Coach, we live in Union City and want to bring our 10-year-old son in for the $15 3-day trial pass this week. Which evenings should he come for his first class, and can you text me the details at [Your Mobile Number]?
    ```
- **What We Are Testing:**
  1. Does Formspree `xyyavaaj` fire an instant auto-responder email to the parent, or zero confirmation email?
  2. How long does it take to get a manual email or SMS reply?
  3. Does the reply come from `unitedwrestlingclub@gmail.com`, `@unitedwrestlingclub.com` (Amazon SES), or `(510) 303-4869`?

---

### Door 2: WrestlingIQ `$15 3-Day Trial` Checkout Funnel (`team_id=513`, `paid_session_id=6327`)
- **Live URL (Homepage "Start Your Trial" CTA):**  
  https://www.wrestlingiq.com/users/sign_up?paid_session_id=6327&show_registration=true&team_id=513
- **Two-Stage Test Protocol:**
  - **Stage 2A — Pre-Paywall Abandonment Test (Free / $0):**
    1. Open the link above in an incognito mobile or desktop browser.
    2. Create a parent/guardian account with a second test email (e.g., `yourname+wiq@gmail.com`) and your mobile number.
    3. Fill out the wrestler details / waiver step, reach the **`$15.00` Stripe payment screen**, and **close the tab without paying**.
    4. **Wait 15 mins → 24 hours:** Check if WrestlingIQ (or any connected tool) sends an account-creation email, waiver copy, or an abandoned-checkout SMS/email. *(Hypothesis from our audit: 0 abandoned-cart SMS/email follow-ups fire today).*
  - **Stage 2B — Paid `$15.00` Trial Pass Completion Test (Optional — $15):**
    1. Complete the `$15.00` payment on `paid_session_id=6327`.
    2. Inspect every email and SMS triggered post-purchase:
       - Does the parent receive anything beyond a bare WrestlingIQ/Stripe receipt?
       - Does it explain where **Suite C** (`30139 Industrial Pkwy SW`) is located, what to wear, or how to get USAW/SCWAY cards?

---

### Door 3: Direct Inbound SMS / Missed-Call Test (`(510) 303-4869` vs. `[retired number]`)
- **Primary Number (Website & Google Business Profile):** `sms:+15103034869` (`(510) 303-4869`)
- **Secondary Legacy Number (Facebook Page):** `sms:[retired number]` (`[retired number]`)
- **What to Text to `(510) 303-4869`:**
  ```text
  Hi UWC, I saw the $15 3-day trial on your website for my son. How do we sign up and what days are beginner youth practice?
  ```
- **What We Are Testing:**
  1. Is `(510) 303-4869` wired to an automated SMS platform (HighLevel / Twilio / WrestlingIQ SMS) or is it a manual handset / Google Voice line?
  2. If you call during mat hours (4:30 PM – 8:00 PM PT) and nobody picks up, is there an **automated missed-call text-back**, or does it go to voicemail?

---

## Live Touchpoint Scorecard (Fill In As Responses Arrive)

| Funnel Entry Door | Timestamp Entered | Instant Auto-Email Received? | Instant Auto-SMS Received? | Sender Address / Number | Manual Follow-Up Latency | Observed Gaps (Proof for Naweed) |
|---|---|---|---|---|---|---|
| **Door 1:** `/contact` (`formspree.io/f/xyyavaaj`) | *Pending* | `[Yes / No]` | `[Yes / No]` | `[e.g. noreply@formspree.io / gmail]` | `[e.g. 6 hrs / None]` | Live form lacks a Phone input; no automated Suite C arrival guide. |
| **Door 2A:** WrestlingIQ Signup (`#6327` Abandoned at Payment) | *Pending* | `[Yes / No]` | `[Yes / No]` | `[e.g. notifications@wrestlingiq.com]` | `[None]` | Cold visitors who drop at the payment screen receive zero SMS/email recovery. |
| **Door 2B:** WrestlingIQ Paid `$15` Trial (`#6327` Completed) | *Pending* | `[Yes / No]` | `[Yes / No]` | `[e.g. notifications@wrestlingiq.com]` | `[N/A]` | Receipt only — no 5-email trust sequence, no Suite C parking map, no Day-2/3/5 `$139.99/mo` upgrade flow. |
| **Door 3:** Inbound SMS to `(510) 303-4869` | *Pending* | `N/A` | `[Yes / No]` | `(510) 303-4869` | `[e.g. Manual text]` | No instant keyword/missed-call automation when coaches are on the mat. |
