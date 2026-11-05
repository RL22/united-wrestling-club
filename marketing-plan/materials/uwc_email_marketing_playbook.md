# United Wrestling Club (UWC) — Email Marketing & Lifecycle Nurture Playbook

> **Client:** United Wrestling Club (UWC) — USA Wrestling Regional Training Center #513  
> **Location:** 30139 Industrial Pkwy SW, Hayward, CA 94544  
> **Leadership:** Karim Zemaryalai (Founder & 1980 Olympian) & Naweed Zemaryalai (Head Coach, Co-Founder, SFSU B.S. Kinesiology)  
> **Acquisition Model:** 100% Organic Local SEO (Zero Paid Ads) across Hayward, Union City, Fremont, Newark, Castro Valley, and San Leandro  
> **Lead Capture Engine:** Native On-Site `<dialog>` Trial Pass Modal (`Formspree ID: xyyavaaj`) → WrestlingIQ Team #513 Checkout  

---

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

## 3. Sequence 1: New Lead / Trial Pass Welcome & Parent Trust Sequence

### Sequence Overview
```
Sequence Name: Sequence 1 — New Lead / Trial Pass Welcome & Parent Trust Sequence
Trigger: Parent or adult athlete submits the native on-site Trial Pass <dialog> modal (Formspree ID: xyyavaaj)
Goal: Ensure 80%+ show-rate for the 3-Day Trial Mat Pass and convert trial attendees into $139.99/mo active members on WrestlingIQ Team #513
Length: 5 emails over 10 days
Timing: Immediate (Day 0), Day 2, Day 4, Day 7, Day 10
Exit Conditions: Lead completes full $139.99/mo recurring membership enrollment in WrestlingIQ Team #513 (automatically transitions to Sequence 2)
Sender Identity: Coach Naweed Zemaryalai <coach@unitedwrestlingclub.com>
```

---

### Email 1: Immediate First-Day Guide & Industrial Pkwy Parking Map
* **Send:** Immediately upon `<dialog>` modal submission (0-minute delay)
* **Purpose:** Confirm their Trial Pass reservation, prompt waiver completion on WrestlingIQ if unfinished, eliminate first-day arrival anxiety (finding the entrance on Industrial Pkwy SW), and specify exact gear needed.
* **Subject:** `{{first_name}}, your UWC Trial Pass is locked in (First-Day Guide inside)`
* **Preview:** `Where to park on Industrial Pkwy SW, what {{athlete_name}} should wear, and your 60-second waiver link.`
* **Segment/Conditions:** All new `<dialog>` modal submissions (`Formspree: xyyavaaj`). Dynamic block displays if `wrestlingiq_waiver_completed == false`.

**Body Copy:**

Hi {{first_name}},

Welcome to United Wrestling Club (USA Wrestling Regional Training Center #513). We got your Trial Pass request for **{{athlete_name}}**, and my coaching staff and I are fired up to welcome you to the mat.

Walking into a real wrestling room for the first time can feel intimidating for both parents and athletes. I want to make sure your first evening with us is completely stress-free.

**Step 1: Complete Your 60-Second Mat Waiver (Required Before Stepping on the Mat)**
If you didn't finish the final registration step after submitting our form, please lock in your official USA Wrestling / Team #513 digital waiver right now so you don't have to fill out paperwork at the door:

👉 **[Complete Your Trial Pass & Waiver on WrestlingIQ →](https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email1_waiver_top)**

---

**Step 2: Where to Find Us & Parking Map (`30139 Industrial Pkwy SW, Hayward`)**
We are located right on the Hayward / Union City border corridor, less than 5 minutes off I-880 (Whipple Rd / Industrial Pkwy exit):
* **Address:** 30139 Industrial Pkwy SW, Hayward, CA 94544
* **Arrival Timing:** Please arrive **10–15 minutes before class starts** so we can introduce {{athlete_name}} to the coaches and get settled without rushing.
* **Parking Tip:** Pull directly into the industrial park lot at 30139 Industrial Pkwy SW. Look for the unit with the United Wrestling Club banner and open bay door ventilation—park in any unmarked space in front of the facility.
* **Parent Viewing:** We have a dedicated parent viewing area mat-side. You are 100% welcome (and encouraged!) to stay and watch every minute of practice.

**Step 3: First-Day Gear Checklist (Keep It Simple)**
You do **not** need to buy expensive gear for your trial week:
* **Clothing:** A snug-fitting athletic t-shirt (tucked in) and athletic shorts or sweatpants **without zippers, metal snaps, or pockets** (fingers can get caught in pockets during drills).
* **Footwear:** Clean wrestling shoes if you already own them, or **clean athletic socks** on the mat. *(Important: Never wear street shoes onto the wrestling mat—walk to the mat edge in street shoes/slides, then step onto the mat in socks or wrestling shoes).*
* **Hydration:** A full, reusable water bottle.

Click below to view the live weekly practice schedule and confirm which night you're coming in first:

**[Confirm First Practice & View Parking Map →](https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email1_schedule_cta)**

Or simply hit **Reply** to this email and let me know which day you plan to bring {{athlete_name}} in—this goes straight to my phone.

See you on the mat,

**Coach Naweed Zemaryalai**  
Head Coach & Co-Founder, United Wrestling Club  
USA Wrestling Regional Training Center #513  
30139 Industrial Pkwy SW, Hayward, CA 94544  
(510) 589-5591  

* **CTA Button:** `Complete Waiver & View First-Day Guide` → `https://unitedwrestlingclub.com/first-day-guide?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email1_primary_cta`

---

### Email 2: Meet the Coaches — 1980 Olympic Heritage + Kinesiology Science
* **Send:** Day 2 (48 hours after Email 1, sent at 10:15 AM Pacific)
* **Purpose:** Establish unmatched East Bay authority by contrasting UWC's Olympic + Kinesiology coaching lineage against pop-up fitness gyms or unqualified volunteer rooms.
* **Subject:** `Who is actually coaching your child? (Olympic lineage + Kinesiology science)`
* **Preview:** `How a 1980 Olympian and an SFSU Kinesiology graduate built the East Bay's premier wrestling academy.`
* **Segment/Conditions:** Active trial leads.

**Body Copy:**

Hi {{first_name}},

When parents from Hayward, Union City, Fremont, and Castro Valley visit our room for the first time, they usually notice something right away:

Our practices don't look like chaotic daycare, and they don't look like meathead "throw-them-to-the-wolves" fight gyms.

Every single warm-up, tumbling progression, and takedown series at United Wrestling Club is engineered around two things: **Olympic-level technical mastery** and **modern human movement science**.

Here is who is on the mat with {{athlete_name}} every week:

**1. Founder & Master Coach Karim Zemaryalai — 1980 Olympian**
My father, Coach Karim, qualified for the **1980 Olympic Games** and brings over four decades of international freestyle and folkstyle coaching experience. He teaches wrestling the way it is practiced at the highest levels in the world—as a game of leverage, balance, timing, and chess-like positioning rather than brute force.

**2. Head Coach Naweed Zemaryalai — SFSU B.S. in Kinesiology & Collegiate Pedigree**
Growing up on the mat under an Olympian gave me the technique, but earning my **Bachelor of Science in Kinesiology at San Francisco State University**—while competing at the collegiate level—gave me the physiological blueprint.

Why does a Kinesiology degree matter for a 7-year-old beginner or a 15-year-old high school athlete?
* **Age-Appropriate Biomechanics:** Young joints and growth plates aren't miniature adult bodies. We teach kids how to absorb force, fall safely, and develop elite proprioception (body control) before they ever go live.
* **Transferable Athletic Dominance:** Whether {{athlete_name}} wants to win a California state wrestling medal, dominate in tackle football, or become un-sweepable in Jiu-Jitsu, our footwork and hip-mobility drills build the most explosive athletes in Alameda County.
* **Emotional Composure Under Pressure:** Wrestling is 1-on-1. There is no bench to hide on and no teammate to blame. We teach young athletes how to breathe through adversity, shake hands with respect, and take ownership of their effort.

We don't outsource your child's development to teenage assistant coaches staring at their phones. You get an Olympian and a Kinesiology-trained Head Coach on the mat every single session.

**[Meet the UWC Coaching Staff & See Class Times →](https://unitedwrestlingclub.com/coaches?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email2_coaches_cta)**

See you in the room,

**Coach Naweed Zemaryalai**  
Head Coach, United Wrestling Club (Team #513)  

* **CTA Button:** `Explore Our Coaching Philosophy & Schedule` → `https://unitedwrestlingclub.com/coaches?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email2_coaches_cta`

---

### Email 3: Safety, Mat Hygiene & Exactly How a 90-Minute Practice Works
* **Send:** Day 4 (48 hours after Email 2, sent at 1:30 PM Pacific)
* **Purpose:** Proactively eliminate the #1 unspoken parent objection in youth wrestling: fear of injury and skin infections (ringworm/mat hygiene).
* **Subject:** `Let's talk honestly about wrestling safety & mat hygiene`
* **Preview:** `How we protect young athletes' joints, match training partners by size/skill, and sanitize our mats daily.`
* **Segment/Conditions:** Active trial leads.

**Body Copy:**

Hi {{first_name}},

I want to address the two questions almost every parent has when they consider wrestling—even if they don't ask them out loud:

1. *"Is my kid going to get hurt or thrown around by bigger kids?"*
2. *"How clean are the mats?"*

As both a Head Coach and a Kinesiology specialist, I treat mat safety and facility hygiene as non-negotiable standards at United Wrestling Club. Here is exactly how we protect {{athlete_name}}:

**1. Hospital-Grade Daily Mat Sanitization**
Skin hygiene is the #1 operational priority in our building.
* Our Dollamur/Resilite competition mats are scrubbed and disinfected before and after practices using **EPA-registered, hospital-grade virucidal and fungicidal mat cleaners** specifically formulated for wrestling rooms.
* **Strict Zero-Street-Shoe Rule:** Nobody—not coaches, not parents, not Olympians—steps onto the mat in street shoes.
* **Visual Health Checks:** Coaches monitor athletes daily, and we educate every wrestler on post-practice shower habits so our room stays the cleanest training environment in the East Bay.

**2. Smart Partner Pairing (Weight, Age & Experience)**
Beginners are **never** thrown into live shark-tanks with advanced varsity wrestlers to act as tackling dummies.
* During your Trial Pass, we pair {{athlete_name}} with a partner of comparable size and temperament—or a trusted team captain who knows how to feed proper reactions safely.
* Live wrestling is introduced progressively only after an athlete demonstrates safe stance, neck posture, and break-fall mechanics.

**3. Inside a Typical UWC Practice (Structured & Fast-Paced)**
* **Minutes 0–15 (Dynamic Kinesiology Warm-Up):** Tumbling, neck/shoulder stabilization, gymnastic movement, and stance-and-motion footwork.
* **Minutes 15–50 (Technical Instruction & Drilling):** Step-by-step breakdown of high-percentage setups, takedowns, and mat returns—supervised closely by Coach Karim and me.
* **Minutes 50–75 (Situational Live Goes):** Controlled scenarios (e.g., "20 seconds to score from a single-leg") where athletes apply what they just learned safely.
* **Minutes 75–90 (Conditioning, Mindset & Cool-Down):** Core strength, grip endurance, and a brief team huddle on discipline, schoolwork, and character.

Have you and {{athlete_name}} completed all 3 days of your Trial Pass yet? If you need help picking your next class night, check the schedule below:

**[View Youth & Scholastic Practice Schedule →](https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email3_safety_schedule_cta)**

In your corner,

**Coach Naweed Zemaryalai**  
Head Coach, United Wrestling Club  

* **CTA Button:** `View Practice Schedule & Safety Standards` → `https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email3_safety_schedule_cta`

---

### Email 4: East Bay Parent Stories & Proof (Why Families Drive Across the 880 Corridor)
* **Send:** Day 7 (72 hours after Email 3, sent at 11:00 AM Pacific)
* **Purpose:** Build social proof across UWC's six core East Bay sub-markets (Hayward, Union City, Fremont, Newark, Castro Valley, San Leandro) showing transformation in both shy beginners and CIF high school competitors.
* **Subject:** `Why families from Fremont, Union City & Castro Valley drive to Unit 30139`
* **Preview:** `42+ verified 5.0-star Google reviews from East Bay parents—here is what changed for their kids.`
* **Segment/Conditions:** Active trial leads who have not yet converted to full membership.

**Body Copy:**

Hi {{first_name}},

United Wrestling Club holds a **5.0-star rating across 42+ verified Google reviews**—without ever running a single paid advertisement.

Every evening on Industrial Pkwy SW, you'll see parents parked outside from **Hayward, Union City, Fremont (James Logan / Mission / Irvington corridors), Newark, San Leandro, and Castro Valley**.

Some brought their kids in because they were quiet, hesitant, or glued to video screens and needed physical confidence. Others came in as high school wrestlers looking for the technical edge to win league and CIF NCS medals.

Here is what East Bay parents say after their first month in our room:

> ⭐⭐⭐⭐⭐  
> *"Hands down the best wrestling club in the Bay Area. Coach Karim and Coach Naweed genuinely care about every kid on that mat, from the 6-year-old first-timers to the high school state contenders. My son's confidence, discipline at home, and conditioning transformed in weeks."*  
> — **Verified UWC Parent (Hayward / Union City)**

> ⭐⭐⭐⭐⭐  
> *"We tried traditional martial arts studios before, where you pay for belts every two months. UWC is the real deal. Elite Olympic-level technique, immaculate coaching attention, and a family brotherhood you can't fake."*  
> — **Verified UWC Parent (Fremont)**

> ⭐⭐⭐⭐⭐  
> *"Whether your athlete is preparing for high school season, competing in USA Wrestling tournaments, or sharpening takedowns for BJJ/MMA, the level of detail Naweed teaches is unmatched."*  
> — **Verified UWC Athlete & Parent (Newark / Castro Valley)**

**What We Measure Success By:**
Medals on the wall are great—and Team #513 wins plenty of them across SCYWAY and CA-USAW tournaments.

But our real metric is watching a kid who used to look at the floor walk into a room with their shoulders back, look adults in the eye, shake hands firmly, and know that hard work beats talent when talent doesn't work hard.

If {{athlete_name}} is enjoying the room (or if you still have a trial day left to use this week), we'd love to make you a permanent part of Team #513.

**[Activate {{athlete_name}}'s Full Team #513 Membership →](https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email4_proof_enroll_cta)**

Best regards,

**Coach Naweed Zemaryalai**  
Head Coach, United Wrestling Club  

* **CTA Button:** `Join Team #513 on WrestlingIQ` → `https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email4_proof_enroll_cta`

---

### Email 5: Joining the Roster — Transparent $139.99/mo Tuition & Zero Lock-In Contracts
* **Send:** Day 10 (72 hours after Email 4, sent at 4:00 PM Pacific)
* **Purpose:** Direct conversion email. Contrast UWC's straightforward $139.99/mo month-to-month tuition against predatory 12-month martial arts contracts, and provide a 1-click path to complete WrestlingIQ enrollment.
* **Subject:** `Ready to make it official? ({{athlete_name}}'s spot on Team #513)`
* **Preview:** `$139.99/mo flat tuition, zero long-term lock-in contracts, and 2-minute enrollment on WrestlingIQ.`
* **Segment/Conditions:** Leads at Day 10 who have not yet activated a recurring membership in WrestlingIQ.

**Body Copy:**

Hi {{first_name}},

As your Trial Pass window wraps up, I wanted to share how membership works at United Wrestling Club so you have all the facts with zero sales pressure.

If you've ever shopped around at commercial martial arts franchises or private sports academies in the Bay Area, you've probably seen the usual playbook: hidden pricing, mandatory $400 uniform packages, "belt testing fees" every 8 weeks, and rigid 12-to-24-month financing contracts you can't cancel.

**We refuse to operate like that.**

At United Wrestling Club, we believe our coaching should keep you in the room—not a legal contract:

* **Transparent Tuition:** **$139.99 / month** (simple, flat automated monthly billing via WrestlingIQ).
* **Zero Long-Term Lock-In Contracts:** Membership is month-to-month. If your family's schedule changes or seasonal sports shift, just let us know—no cancellation penalties or collections headaches.
* **No Belt-Testing Fees:** In wrestling, you earn your progress in live drills and on the competition mat, never by paying a testing fee.
* **Official USA Wrestling RTC #513 Access:** Full access to weekly structured practices under 1980 Olympian Karim Zemaryalai and Head Coach Naweed Zemaryalai, plus coaching support at local SCYWAY & CA-USAW tournaments.

**How to Lock In {{athlete_name}}'s Spot on the Roster (Takes 90 Seconds):**

1. Click the secure WrestlingIQ link below.
2. Select the **UWC Monthly Membership ($139.99/mo)** for {{athlete_name}}.
3. Complete your registration—since your profile is already started from your Trial Pass, it takes less than two minutes.

**[Activate {{athlete_name}}'s UWC Roster Spot ($139.99/mo) →](https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email5_direct_enroll_cta)**

**Still have a question before joining?**  
Just reply directly to this email or text/call me at **(510) 589-5591**. Whether you want to ask about which training group fits {{athlete_name}} best or need an extra trial class because your week got busy, I'm happy to help.

Let's build something great together,

**Coach Naweed Zemaryalai**  
Head Coach & Co-Founder, United Wrestling Club  
30139 Industrial Pkwy SW, Hayward, CA 94544  

* **CTA Button:** `Complete Enrollment on WrestlingIQ ($139.99/mo)` → `https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email5_direct_enroll_cta`

---

## 4. Sequence 2: Active Member Onboarding & 5-Star Review Engine

### Sequence Overview
```
Sequence Name: Sequence 2 — Active Member Onboarding & 5-Star Review Engine
Trigger: Parent activates recurring membership ($139.99/mo) in WrestlingIQ (Team ID: 513)
Goal: Cement 90-day member retention, integrate parents into the UWC communication ecosystem, and systematically compound UWC's 5.0-star Google Business Profile moat (42 → 100+ reviews)
Length: 3 emails over 30 days
Timing: Day 1 (Welcome to Team #513), Day 10 (Practice & Tournament Roadmap), Day 21 (The "Earned" 5-Star Google Review & East Bay Referral Ask)
Exit Conditions: Member cancels subscription (moves to Sequence 3 / Win-Back)
Sender Identity: Coach Naweed Zemaryalai <coach@unitedwrestlingclub.com>
```

---

### Email 2.1: Welcome to Team #513 — Official Gear, USA Wrestling Card & Parent Comms
* **Send:** Day 1 (Immediately upon WrestlingIQ active membership webhook / status change)
* **Purpose:** Celebrate the decision, eliminate buyer's remorse, walk through essential first-month logistics (wrestling shoes, headgear, USA Wrestling athlete card), and bookmark the WrestlingIQ parent portal.
* **Subject:** `Welcome to Team #513! {{athlete_name}} is officially on the UWC roster 🤼`
* **Preview:** `Your first-month roadmap: wrestling shoes, USA Wrestling card setup, and how we communicate.`
* **Segment/Conditions:** Active paying members (`wrestlingiq_status == active`).

**Body Copy:**

Hi {{first_name}},

On behalf of my father, Coach Karim, and our entire coaching staff—welcome to the United Wrestling Club family! **{{athlete_name}}** is officially on the Team #513 roster.

To help {{athlete_name}} settle in smoothly over the next 30 days, here are the 3 quick things to check off during your first two weeks as a member:

**1. Wrestling Shoes & Headgear Recommendations**
Now that {{athlete_name}} is training regularly, a dedicated pair of wrestling shoes will make a huge difference in traction, ankle support, and mat hygiene:
* **Starter Shoes:** ASICS Matflex, ASICS Snapdown, or Rudis youth/adult models ($45–$75).
* **Headgear:** Required for live sparring and tournament competition to protect ears (Cliff Keen Tornado or E58 are the gold standard).
* **Golden Rule Reminder:** Wrestling shoes stay in the gym bag until you are standing at the edge of the mat. Never wear them in the parking lot or restrooms!

**2. Your WrestlingIQ Parent Portal & Practice Check-In**
We use **WrestlingIQ (Team #513)** for all roster announcements, schedule updates, tournament sign-ups, and automated billing receipts.
* Bookmark your parent login here so you never miss a schedule update or holiday adjustment.

**3. USA Wrestling Athlete Membership (For Competition & Insurance)**
As an official USA Wrestling Regional Training Center (#513), athletes competing in local events or sanctioned duals will need an active USA Wrestling Athlete Card (`usawmembership.com` — affiliate with **United Wrestling Club, Club ID #513**). If {{athlete_name}} is just starting out and focusing strictly on in-room fundamentals first, ask me at practice before purchasing and I'll let you know which tier you need.

**[Access Your UWC Member Portal on WrestlingIQ →](https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq2_member_onboarding&utm_content=email1_portal_cta)**

Thank you for trusting us with {{athlete_name}}'s athletic and personal growth.

See you at practice,

**Coach Naweed Zemaryalai**  
Head Coach, United Wrestling Club  

* **CTA Button:** `Open Your WrestlingIQ Member Portal` → `https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq2_member_onboarding&utm_content=email1_portal_cta`

---

### Email 2.2: The 90-Day Progression & Tournament Roadmap (How to Support Your Wrestler)
* **Send:** Day 10 of Active Membership (10:30 AM Pacific)
* **Purpose:** Set realistic developmental expectations for weeks 2–12 so parents don't pull their child out during the natural "learning curve" phase, and explain how UWC approaches local SCYWAY / CA-USAW tournaments.
* **Subject:** `What to expect in {{athlete_name}}'s first 90 days on the mat`
* **Preview:** `How we measure progress in Months 1–3, plus how local East Bay beginner tournaments work.`
* **Segment/Conditions:** Active paying members (`days_active == 10`).

**Body Copy:**

Hi {{first_name}},

{{athlete_name}} is now about two weeks into training with Team #513!

Around week two or three, parents often ask me: *"How do I know if my child is on track, and when do they start competing?"*

In wrestling, development happens in three distinct 30-day phases during an athlete's first quarter:

* **Days 1–30: Stance, Motion & Body Awareness**  
  Right now, our #1 goal is building {{athlete_name}}'s kinesiological foundation—staying in a disciplined athletic stance without crossing their feet, protecting their neck/elbows, and learning how to scramble without panicking.
* **Days 30–60: Chain Wrestling & Escape Confidence**  
  In month two, isolated moves start connecting. Instead of freezing when a first takedown attempt is stopped, {{athlete_name}} will begin chaining a setup into a penetration step and finishing cleanly.
* **Days 60–90: Situational Grit & Optional First Tournaments**  
  Once an athlete can safely defend themselves, score from neutral, and escape from bottom, we invite them to test their skills at local East Bay developmental tournaments (SCYWAY and CA-USAW events right here in Alameda and Santa Clara counties).

**How Parents Help Most Right Now:**
After practice, instead of asking *"Did you win your live goes today?"*, ask:
1. *"What move did Coach Naweed or Coach Karim show today?"*
2. *"Did you work hard and listen well?"*

When young athletes know their parents value **effort and coachability** over winning practice rounds, their technical growth skyrockets.

**[View Upcoming Team #513 Calendar & Events →](https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq2_member_onboarding&utm_content=email2_roadmap_cta)**

Proud to have {{athlete_name}} in our room,

**Coach Naweed Zemaryalai**  
Head Coach, United Wrestling Club  

* **CTA Button:** `View Team #513 Practice & Event Calendar` → `https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq2_member_onboarding&utm_content=email2_roadmap_cta`

---

### Email 2.3: Day 21 "Peak Pride" 5-Star Google Review & Local Keyword Seeding Engine
* **Send:** Day 21 of Active Membership (Tuesday or Thursday at 6:45 PM Pacific — right as practice wraps up and parent pride is highest)
* **Purpose:** Systematically scale UWC's 5.0-star Google Business Profile (`Place ID: ChIJsQd_yMaVj4ARrXw93nb4euo`) with keyword-rich, neighborhood-specific reviews from real Hayward, Union City, Fremont, Newark, and Castro Valley parents—Directly fueling the 100% organic local Map Pack ranking engine.
* **Subject:** `Quick favor for Coach Karim & me? (Takes 45 seconds)`
* **Preview:** `We don't pay for ads—here is how East Bay families like yours help UWC grow.`
* **Segment/Conditions:** Active paying members (`days_active == 21` AND `attendance_count >= 4`).

**Body Copy:**

Hi {{first_name}},

Watching **{{athlete_name}}** work hard on the mat over the past three weeks has been a privilege for Coach Karim and me.

I have a quick, personal favor to ask.

Unlike big commercial franchises, **United Wrestling Club runs on 100% organic word-of-mouth—we spend $0 on paid ads.** That means we can put 100% of our energy into coaching your kids and keeping our tuition honest.

The #1 way new families in **Hayward, Union City, Fremont, Newark, Castro Valley, and San Leandro** find our wrestling room is by reading Google reviews from parents just like you.

Would you be willing to take **45 seconds right now** to leave us an honest 5-star review on Google?

👉 **[Leave a 45-Second Google Review for UWC →](https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo&utm_source=email&utm_medium=lifecycle&utm_campaign=seq2_member_onboarding&utm_content=email3_gbp_review_cta)**

**Not sure what to write? Just 1 or 2 sentences mentioning:**
* Which city you drive in from (e.g., *"We drive over from Union City / Fremont / Hayward..."*)
* Which program {{athlete_name}} is in (*youth wrestling, high school off-season, or adult training*)
* What you appreciate most about Coach Karim's and Coach Naweed's coaching style or the change you've seen in {{athlete_name}}

*(Bonus: If {{athlete_name}} has a school teammate, cousin, or friend who needs discipline, conditioning, or off-season mat time, forward them our [3-Day Trial Pass link here](https://unitedwrestlingclub.com/?utm_source=email&utm_medium=referral&utm_campaign=seq2_member_onboarding&utm_content=email3_referral_link)—nothing makes practice more fun than training alongside a friend!)*

Thank you for helping us build the strongest wrestling community in the East Bay.

With gratitude,

**Coach Naweed Zemaryalai & Coach Karim Zemaryalai**  
United Wrestling Club (USA Wrestling RTC #513)  
30139 Industrial Pkwy SW, Hayward, CA 94544  

* **CTA Button:** `Post a 5-Star Google Review (45 Seconds)` → `https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo&utm_source=email&utm_medium=lifecycle&utm_campaign=seq2_member_onboarding&utm_content=email3_gbp_review_cta`

---

## 5. Sequence 3: Lapsed Lead & Seasonal Folkstyle/Freestyle Re-Engagement Sequence

### Sequence Overview
```
Sequence Name: Sequence 3 — Lapsed Lead & Off-Season Re-Engagement Sequence
Trigger:
  (Path A) Lead inquired via Formspree (xyyavaaj) 30–60 days ago but never activated a WrestlingIQ membership, OR
  (Path B) Seasonal scholastic/youth athlete whose membership paused at the end of football/soccer/high school CIF season returning for Spring Freestyle/Greco or Fall Folkstyle pre-season
Goal: Reactivate dormant East Bay leads and fill mat capacity during seasonal transitions without spending $1 on retargeting ads
Length: 3 emails over 12 days
Timing: Day 0 (Trigger Day), Day 5, Day 12
Exit Conditions: Lead replies, claims a fresh Trial Pass, or reactivates membership in WrestlingIQ Team #513
Sender Identity: Coach Naweed Zemaryalai <coach@unitedwrestlingclub.com>
```

---

### Email 3.1: The Personal Low-Friction Check-In ("Is Wrestling Still on the Radar?")
* **Send:** Day 0 of Sequence (30–45 days post-inquiry or seasonal transition trigger, sent Tuesday at 10:00 AM Pacific)
* **Purpose:** Re-open the conversation with zero guilt, acknowledge how chaotic East Bay family schedules get, and offer a fresh start on the mat.
* **Subject:** `Still thinking about wrestling for {{athlete_name}}?`
* **Preview:** `Schedules get crazy—just checking in from the UWC mat room in Hayward.`
* **Segment/Conditions:** Unconverted leads (30–60 days old) or paused seasonal roster athletes.

**Body Copy:**

Hi {{first_name}},

A little while back, you reached out about getting **{{athlete_name}}** on the mat with us at United Wrestling Club.

I know firsthand how fast family schedules fill up across the East Bay—between school, homework, other sports seasons, and commuting up and down the 880 corridor, timing isn't always right on the first try.

I'm reaching out because we just opened up a few spots in our upcoming training block here at **30139 Industrial Pkwy SW**, and it's an ideal week for new and returning athletes to jump in because we are reviewing core stance, motion, and foundational takedown series from the ground up.

If {{athlete_name}} is still interested in building confidence, conditioning, and real-world grappling skills under Coach Karim and me, **your Trial Pass invitation is still 100% valid.**

**[Pick Your Practice Night & Reactivate Your Trial Pass →](https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq3_reengagement&utm_content=email1_checkin_cta)**

Or just hit **Reply** with a quick *"Next week works"* and let me know which evening you'd like to bring {{athlete_name}} by.

Best,

**Coach Naweed Zemaryalai**  
Head Coach, United Wrestling Club  
(510) 589-5591  

* **CTA Button:** `View Updated Schedule & Claim Your Mat Spot` → `https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq3_reengagement&utm_content=email1_checkin_cta`

---

### Email 3.2: The Seasonal Edge (Why Champions Are Built in the Off-Season & Multi-Sport Crossover)
* **Send:** Day 5 of Sequence (120 hours after Email 3.1, sent Thursday at 2:00 PM Pacific)
* **Purpose:** Appeal to both multi-sport parents (football, BJJ, soccer, lacrosse) and scholastic wrestlers preparing for CIF Folkstyle or Spring CA-USAW Freestyle/Greco seasons.
* **Subject:** `What happens before next season starts (Folkstyle, Freestyle & Multi-Sport)`
* **Preview:** `Why the best athletes in Hayward, Union City, and Fremont train in our room year-round.`
* **Segment/Conditions:** Non-responders from Email 3.1.

**Body Copy:**

Hi {{first_name}},

There is an old saying in our sport: *"Winter wrestlers are made in the spring and summer—and fall football stars are made on the wrestling mat."*

Whether {{athlete_name}} is a complete beginner looking for a physical foundation, a multi-sport athlete (football, Jiu-Jitsu, rugby, basketball), or a scholastic wrestler preparing for CIF league duals, the work done **right now** separates average athletes from leaders:

1. **For Youth & Multi-Sport Athletes:**  
   Using Kinesiology-driven movement drills, we teach kids how to lower their center of gravity, explode through their hips, and control another human being's weight safely. Football coaches across Hayward, Union City, and Fremont love wrestlers because they tackle cleanly and never get tired in the 4th quarter.
2. **For Scholastic & High School Wrestlers (Folkstyle + Olympic Styles):**  
   Waiting until November high school tryouts to step on the mat means spending half the season just getting into shape. Training at **USA Wrestling RTC #513** gives {{athlete_name}} Olympic-caliber Freestyle and Folkstyle hand-fighting, leg attacks, and mat returns months ahead of the competition.
3. **Flexible Month-to-Month Structure ($139.99/mo):**  
   Because we never lock families into annual contracts, you can train with us for an off-season block, sharpen up for a specific season, or train year-round at your own pace.

Come see the room in action this week:

**[Reserve {{athlete_name}}'s Mat Session This Week →](https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq3_reengagement&utm_content=email2_seasonal_cta)**

See you on the mat,

**Coach Naweed Zemaryalai**  
Head Coach, United Wrestling Club (RTC #513)  

* **CTA Button:** `Lock In Your Practice Night This Week` → `https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq3_reengagement&utm_content=email2_seasonal_cta`

---

### Email 3.3: The Respectful Close-Out ("Should I Keep Your Trial Spot Open or Pause Follow-Ups?")
* **Send:** Day 12 of Sequence (7 days after Email 3.2, sent Tuesday at 11:30 AM Pacific)
* **Purpose:** Classic "break-up / permission to close file" email that consistently drives the highest reply rate of any re-engagement email while keeping list hygiene pristine for DMARC/deliverability health.
* **Subject:** `Should I close out {{athlete_name}}'s trial pass file for now?`
* **Preview:** `No pressure at all—just let me know if we should hold a spot this month or check back next season.`
* **Segment/Conditions:** Non-responders from Email 3.2. After this email, unengaged contacts move to the low-frequency Seasonal Broadcast list (4x/year only) to protect sender reputation.

**Body Copy:**

Hi {{first_name}},

I haven't heard back from you, and I never want to clutter your inbox if your family's plans have changed.

I'm updating our Trial Pass roster for the month here at United Wrestling Club, so I'm going to close out {{athlete_name}}'s open inquiry file for now.

**If you STILL want to bring {{athlete_name}} in for your 3-Day Trial Pass this month:**  
Click the link below (or reply with the word **"MAT"**) and I'll keep your pass active on our clipboard at the front desk:

**[Keep {{athlete_name}}'s Trial Pass Active for This Month →](https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq3_reengagement&utm_content=email3_last_call_cta)**

If timing isn't right until next season, you don't need to do a thing—whenever {{athlete_name}} is ready to step onto the mat at 30139 Industrial Pkwy SW, our doors are open.

Wishing your family the absolute best,

**Coach Naweed Zemaryalai**  
Head Coach & Co-Founder, United Wrestling Club  
30139 Industrial Pkwy SW, Hayward, CA 94544  
(510) 589-5591  

* **CTA Button:** `Keep My Trial Pass Active` → `https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq3_reengagement&utm_content=email3_last_call_cta`

---

## 6. Metrics Plan, Attribution & ESP Integration Architecture

### A. Target Lifecycle KPIs & Benchmarks
Because UWC's traffic is 100% high-intent local organic search (parents actively searching for youth wrestling or martial arts in the East Bay), open and conversion benchmarks are significantly higher than cold or paid-social traffic:

| Sequence / Metric | Target Benchmark | Warning Threshold | Primary Optimization Lever |
| :--- | :--- | :--- | :--- |
| **Deliverability / Inbox Placement** | **> 99.0% Delivered** (< 0.1% bounce, 0% spam complaints) | < 97% or DMARC fail | Verify Route 53 SPF + 2048-bit DKIM + custom return-path alignment |
| **Seq 1, Email 1 (First-Day Guide)** | **> 72% Open Rate** / **> 35% CTR** | < 55% Open Rate | Ensure webhook triggers within < 60 seconds of `<dialog>` modal submit |
| **Seq 1 Overall (Emails 1–5)** | **> 50% Open Rate** / **> 12% CTR** | < 35% Open Rate | A/B test subject lines (Athlete First Name personalization vs. Coach Karim/Naweed hook) |
| **Modal Lead → Trial Show-Rate** | **> 75% Physical Mat Attendance** | < 50% Show-Rate | Pair Email 1 with immediate SMS Parking Map confirmation |
| **Trial Attendee → WrestlingIQ Active ($139.99/mo)** | **> 60% Conversion to Roster** | < 40% Conversion | Trigger Email 5 + Coach Naweed personal reply check-in on Day 8–10 |
| **Seq 2, Email 2.3 (Day 21 GBP Review Ask)** | **25%–35% Review Completion Rate** | < 15% Completion | Send at 6:45 PM Tue/Thu right after practice; include direct Google `placeid` deep link |
| **Seq 3 (Lapsed Lead Re-Engagement)** | **8%–15% Reactivation Rate** | < 5% Reactivation | Time batch sends to align with CIF Pre-Season (Aug/Sept), Winter Youth, and Spring Freestyle (March) |

### B. GA4 & UTM Attribution Wiring
Once `lewis.rodneyl@gmail.com` is elevated from Viewer to **Editor** in GA4, configure the following custom events to close the attribution loop between local SEO landing pages, email clicks, and WrestlingIQ checkouts:
1. **`generate_lead_trial_modal`**: Fires when the native `<dialog>` modal (`Formspree: xyyavaaj`) submits successfully, capturing `page_location` (e.g., `/union-city-wrestling`, `/fremont-youth-wrestling`).
2. **`email_lifecycle_click`**: Automatically captured via the standardized UTM taxonomy embedded across all sequences above:
   * `utm_source=email`
   * `utm_medium=lifecycle` (or `referral` on the forwardable link)
   * `utm_campaign=seq1_trial_welcome` | `seq2_member_onboarding` | `seq3_reengagement`
   * `utm_content=email[1-5]_[specific_cta]`
3. **`wrestlingiq_checkout_redirect`**: Fires when a user clicks the outbound `wrestlingiq.com/unitedwrestlingclub` enrollment link with cross-domain linker parameters enabled.

### C. Recommended ESP & Webhook Integration Stack
To keep UWC's operational overhead near zero while maximizing speed and AWS SES alignment, we recommend one of two implementation paths:

#### Option 1: Existing SMS/Email CRM (HighLevel / GoHighLevel) + AWS SES / Mailgun (Recommended if UWC already uses HighLevel for SMS)
* **Why It Fits:** Unifies UWC's instant SMS confirmations and the 3 email sequences above inside one timeline so Coach Naweed can see every parent's texts and email replies in a single mobile app.
* **Integration Flow:**
  1. Native `<dialog>` modal submits to Formspree (`xyyavaaj`) **AND/OR** directly to an inbound webhook.
  2. Webhook creates/updates contact with tags `source:organic_website`, `status:trial_pass_lead`, and custom fields `{{athlete_name}}`, `{{athlete_age}}`, `{{city_submarket}}`.
  3. Starts **Sequence 1** immediately.
  4. WrestlingIQ Team #513 new-member webhook (or Zapier/Make bridge reading WrestlingIQ roster notifications) applies tag `status:active_member_513`, automatically exiting **Sequence 1** and triggering **Sequence 2 (Onboarding & 5-Star Review Engine)**.

#### Option 2: Resend + Customer.io / Loops (Lightweight Developer-Native Stack on Existing AWS SES Infrastructure)
* **Why It Fits:** Since UWC already has AWS Route 53 and SES (`us-east-1`) configured on `unitedwrestlingclub.com`, connecting **Resend** or **Loops** takes less than 15 minutes via Route 53 DNS records, costs $0–$20/mo at UWC's local lead volume, and guarantees near-100% primary inbox placement.
* **Integration Flow:**
  1. Next.js static site `<dialog>` modal posts to Formspree (`xyyavaaj`), which fires a native webhook to Loops/Resend.
  2. Contact enters `Seq 1: Trial Welcome`.
  3. When the parent completes payment in WrestlingIQ (`Team 513`), the status flag updates to `member_active = true`, halting `Seq 1` and initiating `Seq 2` (scheduling the Day 21 Google Business Profile review request automatically).
