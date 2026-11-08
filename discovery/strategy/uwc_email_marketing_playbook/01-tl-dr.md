---
type: dossier
status: current
group: strategy
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email1_waiver_top", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email1_schedule_cta", "https://unitedwrestlingclub.com/coaches?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email2_coaches_cta", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email3_safety_schedule_cta", "https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email4_proof_enroll_cta", "https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email5_direct_enroll_cta", "https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq2_member_onboarding&utm_content=email1_portal_cta", "https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq2_member_onboarding&utm_content=email2_roadmap_cta", "https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo&utm_source=email&utm_medium=lifecycle&utm_campaign=seq2_member_onboarding&utm_content=email3_gbp_review_cta", "https://unitedwrestlingclub.com/?utm_source=email&utm_medium=referral&utm_campaign=seq2_member_onboarding&utm_content=email3_referral_link", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq3_reengagement&utm_content=email1_checkin_cta", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq3_reengagement&utm_content=email2_seasonal_cta", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq3_reengagement&utm_content=email3_last_call_cta", "https://unitedwrestlingclub.com/first-day-guide?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email1_primary_cta"]
shard_of: "discovery/strategy/uwc_email_marketing_playbook.md"
part: "1 of 4"
---

> Part 1 of 4 of [uwc_email_marketing_playbook](../uwc_email_marketing_playbook.md). Text is verbatim from the original; only links were rewritten.


# United Wrestling Club (UWC) — Email Marketing & Lifecycle Nurture Playbook

> **Client:** United Wrestling Club (UWC) — USA Wrestling Regional Training Center #513  
> **Location:** 30139 Industrial Pkwy SW, Hayward, CA 94544  
> **Leadership:** Karim Zemaryalai (Founder & 1980 Olympian) & Naweed Zemaryalai (Head Coach, Co-Founder, SFSU B.S. Kinesiology)  
> **Acquisition Model:** 100% Organic Local SEO (Zero Paid Ads) across Hayward, Union City, Fremont, Newark, Castro Valley, and San Leandro  
> **Lead Capture Engine:** Native On-Site `<dialog>` Trial Pass Modal (`Formspree ID: xyyavaaj`) → WrestlingIQ Team #513 Checkout  

---

## TL;DR
- Email carries the trust narrative in a 100% organic funnel: coach pedigree, safety and hygiene, and transparent pricing.
- DMARC is at p=quarantine, so unauthenticated mail risks spam placement; the fix is SES, SPF, DKIM, and a bounce subdomain in Route 53.
- Three sequences run: trial welcome (5 emails over 10 days), active-member onboarding (3 emails), and lapsed-lead re-engagement (3 emails over 14 days).
- Email 5 is the direct-conversion email for $139.99 per month month-to-month tuition with zero lock-in, contrasted with 12-month martial arts contracts.
- Email 5 invites parents to reply, or text or call Coach Naweed at (510) 589-5591 (see RC-01).

## 1. Strategic Architecture: Why Email Carries the Trust Load in a 100% Organic Funnel

United Wrestling Club operates under a strict **zero-paid-ads mandate**. Every family entering the funnel arrives via high-intent organic local search (`"youth wrestling near me"`, `"wrestling gym hayward"`, `"wrestling club union city"`, `"off-season CIF wrestling fremont"`) or Google Business Profile (GBP `Place ID: ChIJsQd_yMaVj4ARrXw93nb4euo`, 5.0★ across 42 verified reviews).

While SMS handles immediate logistics (parking alerts, mat-time reminders, quick check-ins), **email carries the heavy psychological and trust-building narrative that convinces East Bay parents to commit their children to a combat sport:**

1. **Pedigree & Authority Over Hype:** Parents want to know *who* is mentoring their child. Email provides the canvas to tell the story of **Karim Zemaryalai** (1980 Moscow Olympic Qualifier) paired with **Head Coach Naweed Zemaryalai** (San Francisco State University B.S. in Kinesiology, collegiate standout, and lifelong technician).
2. **De-Risking Safety & Hygiene Concerns:** First-time wrestling parents worry about concussions, joint injuries, and skin infections (ringworm/impetigo). Dedicated lifecycle emails proactively explain UWC's hospital-grade mat sanitization protocols, age/weight grouping, and biomechanically safe progression.
3. **Radical Pricing Transparency:** Unlike commercial martial arts belt-factories that hide pricing behind high-pressure 12-to-24-month contracts and mandatory $300 gear packages, UWC wins parent trust through transparent **$139.99/month tuition with zero long-term lock-in contracts** and a frictionless **$15 3-Day Trial Mat Pass** (or introductory evaluation).
4. **Bridging the Formspree-to-WrestlingIQ Drop-Off:** Previously, hard-redirecting mobile visitors straight to external WrestlingIQ registration caused a 40%–60% drop-off. By capturing parent contact details in the native on-site `<dialog>` modal (`Formspree: xyyavaaj`) first, this email engine recovers parents who get distracted before completing their WrestlingIQ waiver/enrollment.

### Funnel Data Flow & Lifecycle Architecture

```
[Organic Local Search / GBP Map Pack: Hayward, Union City, Fremont, Newark, Castro Valley, San Leandro]
                                           │
                                           ▼
        [Native On-Site <dialog> Trial Pass Modal (Formspree: xyyavaaj)]
                                           │
                   ┌───────────────────────┴───────────────────────┐
                   ▼                                               ▼
    [Completed WrestlingIQ Waiver]                 [Abandoned Before WrestlingIQ]
                   │                                               │
                   └───────────────────────┬───────────────────────┘
                                           ▼
         [SEQUENCE 1: New Lead / Trial Pass Welcome & Parent Trust (5 Emails / 10 Days)]
                                           │
                   ┌───────────────────────┴───────────────────────┐
                   ▼                                               ▼
    [Enrolls in $139.99/mo Roster]                 [Did Not Enroll Within 30 Days]
    (WrestlingIQ Team #513 Active)                                 │
                   │                                               ▼
                   ▼                               [SEQUENCE 3: Lapsed Lead & Seasonal
    [SEQUENCE 2: Active Member Onboarding           Folkstyle/Freestyle Re-Engagement]
     & 5-Star GBP Review Engine (3 Emails)]         (3 Emails / 14 Days)
```

---

## 2. Technical Deliverability & AWS Route 53 DNS Alignment

### Current DNS Reality on `unitedwrestlingclub.com`
An audit of `unitedwrestlingclub.com` in AWS Route 53 reveals the following live email security posture:
* **MX Record:** `10 inbound-smtp.us-east-1.amazonaws.com` (AWS Simple Email Service inbound)
* **SPF Record:** `v=spf1 include:amazonses.com ~all`
* **DMARC Record (`_dmarc.unitedwrestlingclub.com`):** `v=DMARC1; p=quarantine; ...`

### Why Current Settings Risk Spam Folder Placement
Because UWC's DMARC policy is actively enforced at **`p=quarantine`**, any outbound email sent from `@unitedwrestlingclub.com` via a third-party Email Service Provider (ESP like Resend, Customer.io, Mailchimp, or HighLevel) or Formspree auto-responders **without explicit SPF inclusion and cryptographic DKIM signing** will fail DMARC alignment. Gmail, Yahoo, and iCloud Mail (which represent >85% of East Bay parent inboxes) will automatically route unaligned messages directly to the **Spam/Junk folder**.

### Exact AWS Route 53 Remediation Steps

#### Step 1: Isolate Sending Subdomain (Recommended Best Practice)
To protect the root domain (`unitedwrestlingclub.com`) reputation while scaling automated lifecycle sequences, configure a dedicated sending subdomain (e.g., `mail.unitedwrestlingclub.com` or `team.unitedwrestlingclub.com`) alongside root alignment:
* **From Address:** `Coach Naweed — United Wrestling Club <coach@unitedwrestlingclub.com>`
* **Return-Path / Bounce Subdomain:** `bounce.unitedwrestlingclub.com`

#### Step 2: Update the Root SPF TXT Record in Route 53
Never create multiple `v=spf1` TXT records on the root domain (which permanently breaks SPF validation with a `PermError`). Instead, merge the chosen ESP's include mechanism into the single existing AWS Route 53 TXT record on `unitedwrestlingclub.com`:

* **If using AWS SES directly (via Customer.io / Custom SMTP):**
  ```text
  v=spf1 include:amazonses.com ~all
  ```
* **If adding Resend / SendGrid / Mailchimp / HighLevel (Mailgun):**
  ```text
  # Example with Resend (which uses Amazon SES under the hood + custom return path) or Mailgun:
  v=spf1 include:amazonses.com include:_spf.mailgun.org ~all
  ```
  *(Note: Keep total DNS lookups strictly under the 10-lookup RFC 7208 limit. Currently `include:amazonses.com` uses only 1 lookup, leaving 9 available).*

#### Step 3: Publish 2048-bit DKIM CNAME/TXT Records in Route 53
Generate DKIM keys inside the ESP (and AWS SES console for `us-east-1` if sending directly through SES) and add the records to Route 53:
1. **AWS SES Easy DKIM (3 CNAME records):**
   * `<token1>._domainkey.unitedwrestlingclub.com` → `CNAME` → `<token1>.dkim.amazonses.com`
   * `<token2>._domainkey.unitedwrestlingclub.com` → `CNAME` → `<token2>.dkim.amazonses.com`
   * `<token3>._domainkey.unitedwrestlingclub.com` → `CNAME` → `<token3>.dkim.amazonses.com`
2. **ESP Custom Return-Path CNAME (Required for Strict SPF Alignment under DMARC):**
   * `bounce.unitedwrestlingclub.com` → `CNAME` → `<esp-return-path-target>`

#### Step 4: Configure DMARC Reporting & Alignment Verification
Update `_dmarc.unitedwrestlingclub.com` TXT record in Route 53 to maintain `p=quarantine` while adding aggregate reporting and relaxed alignment flags:
```text
v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc-reports@unitedwrestlingclub.com; adkim=r; aspf=r;
```

#### Step 5: Disable Unauthenticated Formspree Spoofing
Ensure Formspree (`xyyavaaj`) does **not** send unauthenticated emails pretending to be `From: parent@gmail.com` or unverified `@unitedwrestlingclub.com`. Instead, Formspree should trigger a webhook to the ESP, which dispatches **Email 1** with full DKIM + SPF alignment within 30 seconds of modal submission.

---
