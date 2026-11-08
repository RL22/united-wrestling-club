---
type: dossier
status: current
group: strategy
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email1_waiver_top", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email1_schedule_cta", "https://unitedwrestlingclub.com/coaches?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email2_coaches_cta", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email3_safety_schedule_cta", "https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email4_proof_enroll_cta", "https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email5_direct_enroll_cta", "https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq2_member_onboarding&utm_content=email1_portal_cta", "https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq2_member_onboarding&utm_content=email2_roadmap_cta", "https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo&utm_source=email&utm_medium=lifecycle&utm_campaign=seq2_member_onboarding&utm_content=email3_gbp_review_cta", "https://unitedwrestlingclub.com/?utm_source=email&utm_medium=referral&utm_campaign=seq2_member_onboarding&utm_content=email3_referral_link", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq3_reengagement&utm_content=email1_checkin_cta", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq3_reengagement&utm_content=email2_seasonal_cta", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq3_reengagement&utm_content=email3_last_call_cta", "https://unitedwrestlingclub.com/first-day-guide?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email1_primary_cta"]
shard_of: "discovery/strategy/uwc_email_marketing_playbook.md"
part: "3 of 4"
---

> Part 3 of 4 of [uwc_email_marketing_playbook](../uwc_email_marketing_playbook.md). Text is verbatim from the original; only links were rewritten.

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
