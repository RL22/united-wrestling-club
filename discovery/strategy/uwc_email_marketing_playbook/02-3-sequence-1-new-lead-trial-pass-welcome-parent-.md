---
type: dossier
status: current
group: strategy
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email1_waiver_top", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email1_schedule_cta", "https://unitedwrestlingclub.com/coaches?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email2_coaches_cta", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email3_safety_schedule_cta", "https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email4_proof_enroll_cta", "https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email5_direct_enroll_cta", "https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq2_member_onboarding&utm_content=email1_portal_cta", "https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq2_member_onboarding&utm_content=email2_roadmap_cta", "https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo&utm_source=email&utm_medium=lifecycle&utm_campaign=seq2_member_onboarding&utm_content=email3_gbp_review_cta", "https://unitedwrestlingclub.com/?utm_source=email&utm_medium=referral&utm_campaign=seq2_member_onboarding&utm_content=email3_referral_link", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq3_reengagement&utm_content=email1_checkin_cta", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq3_reengagement&utm_content=email2_seasonal_cta", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq3_reengagement&utm_content=email3_last_call_cta", "https://unitedwrestlingclub.com/first-day-guide?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email1_primary_cta"]
shard_of: "discovery/strategy/uwc_email_marketing_playbook.md"
part: "2 of 4"
---

> Part 2 of 4 of [uwc_email_marketing_playbook](../uwc_email_marketing_playbook.md). Text is verbatim from the original; only links were rewritten.

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
