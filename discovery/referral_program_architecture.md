# United Wrestling Club (UWC): Mat Partner Referral Program Architecture
## Strategic Analysis, Behavioral Psychology & Operational Blueprint

> **Prepared For:** Head Coach Naweed Zemaryalai, Coach Karim Zemaryalai & UWC Leadership  
> **Prepared By:** Customer Research & Referral Architect (Sprintz Growth OS)  
> **Date:** November 2, 2026  
> **Status:** Final Architectural Deliverable  
> **Target System:** WrestlingIQ (`Team 513`), `/reviews/` Hub, Native Trial Engine, and Front-Desk Operations  

---

## 1. Executive Summary & Feasibility Determination

### 1.1 The Core Strategic Question
Does introducing a formal referral program make commercial and operational sense for United Wrestling Club (UWC)?

**Architectural Determination:** **YES — but ONLY if architected as an athletic imperative rather than an administrative or transactional affiliate scheme.**

A standard commercial gym referral model (*"Refer a friend and get \$25 cash!"*) will fail in a high-character combat sports club. In youth combat sports across Alameda County (Hayward, Fremont, Union City, Castro Valley, Newark), word of mouth is already the **#1 organic driver of membership**. However, commercial kickbacks trigger strong psychological resistance among suburban parents:
1. It feels **transactional, mercenary, and cheap**, reducing a trusted community recommendation to multi-level marketing (MLM) behavior.
2. It threatens the **parent's social standing** among school, soccer, and wrestling booster networks by making their recommendation look incentivized.
3. It fails to leverage the unique physical reality of wrestling: **an athlete cannot progress without a dedicated training partner of equal weight, skill, and intensity.**

### 1.2 The "Mat Partner Flywheel": Turning an Administrative Ask into an Athletic Advantage
Instead of a commercial referral program, UWC will launch the **"Mat Partner Program"** framed under the athlete-first ethos:  
> **"Build the Room. Bring Your Drill Partner. Iron Sharpens Iron."**

In folkstyle, freestyle, and Greco-Roman wrestling, an athlete’s growth ceiling is dictated entirely by the caliber of their drill partners. A 113-lb high school sophomore cannot develop against a 170-lb heavyweight, nor can a novice 8-year-old push a state-qualifying competitor. 

By framing referrals as **"Finding and bringing the partner your wrestler needs to stand on the podium,"** UWC solves the psychological barrier. The parent is not "selling memberships for UWC"; they are actively investing in their own child's athletic success by recruiting the exact peer who will sharpen them on the mat every Monday through Saturday.

```
       ┌──────────────────────────────────────────────────────────┐
       │                 THE MAT PARTNER FLYWHEEL                 │
       └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                     Podium Milestone / Mat Win
              (Athlete experiences breakthrough at UWC)
                                    │
                                    ▼
                     Need for Matched Training Iron
           ("My wrestler needs a committed partner at 72 lbs")
                                    │
                                    ▼
                      Equipped with Partner Pass
            ($0 3-Day Mat Pass + $25 Credit for teammate)
                                    │
                                    ▼
                      Peer Attends & Enrolls
           (Better drilling for both; higher retention)
                                    │
                                    ▼
                   Tuition Credit / Heavyweight Gear
               ($50 applied or 400 GSM Team Armor awarded)
                                    │
                                    └──────────────┐
                                                   │
                                                   ▼
                                         Compounding Mat Room
                                         (Denser talent pool)
```

---

## 2. Customer Research & Behavioral Psychology Deep Dive

### 2.1 Voice-of-Customer (VOC) & Qualitative Signals
Analysis of UWC’s 5.0★ reputation (42+ verified Google and Yelp reviews) reveals the true emotional drivers of UWC parents:

* **Warmth & Safety over Commercial Muscle:**  
  * *“From the moment we walked in, Nawid, Tariq, and Umaid welcomed us with open arms. They didn’t rush the process—they brought my son in slowly, helped him ease into the sport, and most importantly, made sure he felt safe and seen... For the parents? You feel the hospitality the second you walk in, whether it’s being offered tea or having a friendly conversation.”* — Aijaz P. (Youth Parent)
* **Hygiene & Coaching Integrity:**  
  * *“Cleanest mats in Alameda County and coaches who actually care... Coach Naweed sanitizes the mats constantly, enforces strict discipline, yet cultivates warmth and patience. No contracts, straightforward pricing, unmatched coaching.”* — Yelp Review
* **Podium & High School Preparation:**  
  * *“Within three months at UWC, his shot speed and takedown defense transformed. This room took our son to CIF Sectionals.”* — High School Parent

### 2.2 Jobs-to-Be-Done (JTBD) Analysis for UWC Parents

| Dimension | Youth Track (Ages 5–11) | Scholastic / High School Track (Ages 12–18) | Adult & Grappling Track (BJJ / MMA) |
| :--- | :--- | :--- | :--- |
| **Functional Job** | Physical coordination, screen detachment, self-defense, bully prevention. | Varsity placement, CIF podium, off-season freestyle/Greco development, college recruitment. | Live takedown sparring, anti-guard-pulling wrestling skills, high-intensity cardio. |
| **Emotional Job** | Knowing child is building resilience, respect, and mental toughness under safe adult mentorship. | Confidence that child will not get embarrassed or injured in high school dual meets. | Cathartic stress relief, testing grit, camaraderie in an ego-free, hygienic environment. |
| **Social Job** | Belonging to a high-character community; feeling like a proactive, dedicated parent. | Association with Olympic-pedigree lineage (Karim & Naweed); status at CIF section tournaments. | Being the grappler in the BJJ gym who can take anyone down at will. |

### 2.3 The Psychology of Suburban Parent Word-of-Mouth

Suburban parents in Fremont, Hayward, Newark, and Castro Valley communicate constantly via WhatsApp groups, soccer sidelines, high school booster clubs, and school pickup lines. 

1. **Why Cash Bounties Repel:**
   * If Parent A tells Parent B: *"You should take your son to UWC, and use my code so I get \$50 cash,"* Parent A immediately loses credibility. Parent B wonders if the recommendation is genuine or self-serving.
   * In youth sports, altruism and mutual support are the primary social currencies.
2. **Why Athletic Credits & Team Pride Attract:**
   * If Parent A tells Parent B: *"Coach Naweed gave me a VIP Mat Pass for your son. Our boys are the exact same weight, and if we get them drilling together 3 days a week, both of them are going to dominate their tournaments. Here's a voucher that waives the \$15 trial fee and takes \$25 off his first month."*
   * **Result:** Parent A is now a benefactor offering exclusive access and looking out for Parent B’s child, while simultaneously creating a practice partner for their own kid.

---

## 3. The "Mat Partner Referral Program" Complete Architecture

### 3.1 Double-Sided Incentive Structure

To eliminate friction and create win-win social dynamics, the incentive is double-sided, balancing immediate trial removal with long-term retention rewards.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   DOUBLE-SIDED INCENTIVE ARCHITECTURE                  │
├───────────────────────────────────┬────────────────────────────────────┤
│   FOR THE REFERRING ATHLETE/FAMILY│   FOR THE REFERRED PROSPECT/FAMILY │
├───────────────────────────────────┼────────────────────────────────────┤
│ Choice of:                        │ 1. $15 3-Day Mat Pass Waived (100% │
│ • $50 Direct Tuition Credit on    │    FREE 3-Day Trial Pass)          │
│   subsequent WrestlingIQ cycle    │ 2. $25 Off First Month Tuition     │
│   OR                              │    ($114.99 vs. $139.99 for        │
│ • Exclusive 400 GSM Heavyweight   │    Unlimited Membership)           │
│   UWC Team Gear (Hoodie/Backpack) │                                    │
└───────────────────────────────────┴────────────────────────────────────┘
```

#### A. Referring Athlete/Parent Incentive
The referrer chooses between two high-value reward options upon verified conversion:
* **Option 1: \$50 Tuition Credit**
  * Applied automatically to their next monthly WrestlingIQ billing invoice.
  * Direct financial relief for parents with multiple athletes or ongoing dues.
* **Option 2: Exclusive UWC 400 GSM Heavyweight Team Armor (Hoodie or Tournament Backpack)**
  * **Not available for direct retail purchase.** This must be an exclusive *"Mat Partner / Team Inner-Circle"* item.
  * 400 GSM ultra-heavyweight cotton fleece hoodie with embroidered UWC crest and Afghan lion heritage detailing, or military-grade Cordura mat backpack with shoe compartment.
  * **Wholesale COGS to UWC:** \$26.00 – \$29.50 per unit.
  * **Perceived Retail Value:** \$85.00 – \$110.00.
  * **Secondary Benefit:** High-status walking billboard across East Bay schools, track meets, and local tournaments.

#### B. Referred Athlete/Parent Incentive
* **Incentive 1: 100% Fee Waiver on 3-Day Mat Pass (\$15 Value)**
  * Removes all financial hesitation for the initial 3-day evaluation.
  * Eliminates the credit card friction point on initial booking.
* **Incentive 2: \$25 Off First Month's Unlimited Tuition**
  * First month drops from **\$139.99 to \$114.99**.
  * Creates an immediate financial incentive to transition from trial to active member.

---

## 4. High-Intent Trigger Moments & Automated Workflows

Referral requests fail when asked at random times. The Mat Partner Program activates at **5 high-dopamine, peak-satisfaction trigger moments**.

```
   ┌───────────────────────────────────────────────────────────────┐
   │                 5 HIGH-INTENT TRIGGER MOMENTS                 │
   └───────────────────────────────────────────────────────────────┘
      │
      ├─► 1. Post-Tournament Medal / CIF Podium
      │      (Peak athletic pride; social proof at maximum)
      │
      ├─► 2. Post-5-Star Review Submission on `/reviews/` Hub
      │      (Advocate state confirmed; clipboard copy complete)
      │
      ├─► 3. Day 3 of 3-Day Mat Pass Onboarding
      │      (Aha moment unlocked; coach evaluation complete)
      │
      ├─► 4. Seasonal "Bring-a-Partner Mat Mixer"
      │      (Quarterly community open house & fundamentals clinic)
      │
      └─► 5. Day 45 Retention & Belt/Technique Milestone
             (Habit solidified; member fully integrated into room)
```

### Trigger 1: Post-Tournament Medal / CIF Podium Milestone
* **Context:** Athlete places at local East Bay duals, SCWAY, USA Wrestling tournament, or MVAL/WACC/CIF sectionals. Coach takes podium photo for UWC Instagram.
* **Channel:** In-person coach conversation + automated parent SMS.
* **Coach Script (Coach Naweed / Karim):**
  > *"Tariq wrestled out of his mind today—his level changes were flawless. Look around this podium: the only reason he’s here is because of the grind in our room. Who is at his weight at school that’s tough enough to drill with him? Let’s get him a Partner Pass so Tariq has someone pushing him every day."*
* **Automated SMS Workflow:**
  > *"Coach Naweed here! Incredible podium finish for [Athlete Name] this weekend! 🥇 To keep the momentum rolling, we've loaded a Mat Partner Pass into your account. Gift 3 Days of Free Training + \$25 off to [Athlete Name]’s favorite drilling partner: [Link]. Let’s build the room!"*

### Trigger 2: Post-5-Star Review Submission on `/reviews/` Hub
* **Context:** Parent completes the feedback flow on [`reviews/index.html`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/reviews/index.html) and clicks *"Copy Review & Open Google Maps"*.
* **Channel:** On-screen confirmation modal + instant follow-up SMS.
* **On-Screen Modal Copy:**
  > **"You’re Building Our Family."**  
  > *Thank you for sharing your experience. Authentic parent word-of-mouth is how we keep UWC strong and independent.*  
  > **Who does your wrestler want in the room next to them?**  
  > *Click below to send a Free 3-Day Mat Pass + \$25 tuition voucher to a friend, classmate, or teammate.*  
  > `[Generate Mat Partner Link]`

### Trigger 3: Day 3 of the Mat Pass Onboarding (The "Aha" Moment)
* **Context:** The trial athlete finishes their 3rd consecutive practice. Coach Naweed provides the 1-on-1 technique assessment and parent debrief.
* **Channel:** In-person mat-side transition conversation.
* **Coach Script:**
  > *"He has natural hip pressure and great discipline. He’s ready for the full program. One thing we always look at: who does he hang out with or play sports with that has that same drive? If he has a buddy from school training with him, his commitment doubles. When you register him today, we’ll immediately text you a complimentary Partner Pass for his best friend."*

### Trigger 4: Seasonal "Bring-a-Partner Mat Mixer" (Community Day)
* **Context:** Scheduled twice annually (September pre-season launch and January mid-season sprint) aligned with ADR-20261102 Community Open Mat.
* **Execution:**
  * Free 90-minute clinic: 45 minutes of fun tumbling, agility, and fundamental wrestling + 45 minutes of parent meet-and-greet with Afghan tea and light snacks.
  * Every enrolled athlete is challenged to bring one "Mat Partner" who has never wrestled before.
  * Every guest receives an official UWC Mat Partner certificate and an automatic waiver into the 3-Day Trial.

### Trigger 5: Day 45 Habit Solidification Check-In
* **Context:** Member has completed 6 weeks of consistent attendance (12–18 sessions). Unmanaged drop-off risk begins to decline.
* **Channel:** WrestlingIQ automated system message.
* **Message Copy:**
  > *"Hi [Parent Name], Coach Naweed here. [Athlete Name] has officially logged 15 practices at UWC and the growth in balance and confidence is night and day. We want to reward their dedication: you are now eligible for our Mat Partner Gear Drop. When you introduce a new family who joins the team, we’ll credit \$50 to your account or hand [Athlete Name] our exclusive 400 GSM Heavyweight Team Hoodie. Details here: [Link]"*

---

## 5. Referral Unit Economics, LTV & Payback Financial Model

### 5.1 Baseline Commercial Metrics (from Discovery Synthesis)
* **Active Membership:** ~45 recurring athletes
* **Blended Monthly ARPU:** \$139.99 / month
* **Current Unmanaged Churn:** ~7.5% / month (Average tenure = 13.3 months)
* **Target Optimized Churn:** ~4.5% / month (Average tenure = 22.2 months)
* **Baseline Customer Lifetime Value (LTV):**
  $$\text{LTV}_{\text{baseline}} = 13.3 \text{ months} \times \$139.99 = \mathbf{\$1,867.20}$$
* **Optimized Customer Lifetime Value (LTV):**
  $$\text{LTV}_{\text{optimized}} = 22.2 \text{ months} \times \$139.99 = \mathbf{\$3,111.45}$$

### 5.2 Paid Acquisition vs. Mat Partner Referral Unit Economics

| Commercial Metric | Paid Ad Channel (Meta / Google PPC) | Mat Partner Referral (Tuition Credit) | Mat Partner Referral (Team Gear Option) |
| :--- | :---: | :---: | :---: |
| **Gross Trial Claims** | High volume (cold leads) | Targeted (warm peers) | Targeted (warm peers) |
| **Show-Up Rate** | 45% – 50% | **85% – 92%** | **85% – 92%** |
| **Trial-to-Paid Conversion** | 35% – 45% | **65% – 75%** | **65% – 75%** |
| **Nominal Reward Cost** | — | \$50 credit + \$25 discount = **\$75** | \$28 COGS + \$25 discount = **\$53** |
| **Blended Customer Acquisition Cost (CAC)** | **\$120.00 – \$180.00** | **\$75.00** | **\$53.00** |
| **CAC Savings vs. Paid Ads** | Baseline | **38% – 58% cheaper** | **56% – 71% cheaper** |
| **First Month Cash Inflow to UWC** | \$139.99 | \$114.99 (\$139.99 - \$25) | \$114.99 (\$139.99 - \$25) |
| **Net Cash Position on Day 1** | **-\$40.01 to -\$100.01** | **+\$114.99** | **+\$86.99** |
| **Net Cash Position on Day 30** | Break-even at 45–60 days | **+\$64.99** (\$114.99 - \$50 credit) | **+\$86.99** (COGS expensed) |
| **Payback Period** | 45 – 75 Days | **< 21 Days (Instant Positive Cash)** | **< 21 Days (Instant Positive Cash)** |
| **LTV : CAC Ratio** | 10.4 : 1 (at \$180 CAC) | **24.9 : 1 – 41.5 : 1** | **35.2 : 1 – 58.7 : 1** |

> [!IMPORTANT]
> **Zero Cash Flow Deficit:** Because the \$50 tuition credit is applied against the referrer's *future* monthly invoice, and the referred athlete pays \$114.99 *upfront* on Day 1, UWC experiences **positive working capital from the moment of enrollment**. There is never a cash-negative moment in this program.

### 5.3 Viral Coefficient ($K$-Factor) Modeling

$$\text{Viral Coefficient } (K) = i \times c$$
Where:
* $i$ = Number of invites/passes shared per active member
* $c$ = Conversion rate of shared pass to paying member

```
┌────────────────────────────────────────────────────────────────────────┐
│                       VIRAL COEFFICIENT SCENARIOS                      │
├────────────────────┬───────────┬──────────────┬──────────┬─────────────┤
│ Scenario           │ Invites/Yr│ Conv. Rate   │ K-Factor │ Roster Lift │
├────────────────────┼───────────┼──────────────┼──────────┼─────────────┤
│ Baseline (Status)  │ 0.40      │ 20%          │ 0.08     │ Negligible  │
│ 90-Day Target      │ 0.50      │ 50%          │ 0.25     │ +25% Lift   │
│ 12-Month Scale     │ 0.70      │ 50%          │ 0.35     │ +35% Lift   │
└────────────────────┴───────────┴──────────────┴──────────┴─────────────┘
```

* **At $K = 0.25$ (90-Day Target):**
  * Current 45 members generate ~11 net new paying athletes per cycle purely from word of mouth without ad spend.
* **At $K = 0.35$ (12-Month Scale):**
  * A 100-member room generates 35 new athletes per year via referrals, yielding **\$58,796+ in new recurring ARR** at zero media acquisition cost.
* **Organic Multiplier Effect:**
  $$\text{Multiplier} = \frac{1}{1 - K} = \frac{1}{1 - 0.35} = \mathbf{1.54\times}$$
  Every 10 athletes acquired through search, SEO, or local clinics ultimately produce **15.4 total athletes** over their lifetime.

---

## 6. Guardrails, Anti-Gaming Rules & Operational Integrity

To maintain commercial integrity and prevent exploitation, the Mat Partner Program operates under 6 clear, unbending rules:

### Rule 1: First Full Billing Cycle Lock
* Referral credits are **earned** when the referred athlete creates their WrestlingIQ profile, but are **released strictly after the referred athlete's first full month's auto-draft invoice ($114.99) clears**.
* If a referred trial cancels during the 3-day window or before the first month bill date, zero credits are issued.

### Rule 2: Household & Sibling Exclusion
* Immediate family members residing in the same household do **not** qualify for the Mat Partner referral bounty.
* Siblings must be routed into the approved **15% Household / Sibling Discount Policy** (established under ADR-20261102). This prevents families from artificially churning or splitting accounts to capture referral bounties.

### Rule 3: Single-Use Attribution & 60-Day Lookback Window
* Referral tracking links and codes remain valid for 60 days from the initial 3-Day Mat Pass claim.
* If a prospect claims a pass through Referrer A, does not attend, but returns 6 months later organically, the referral credit does not automatically bind without manual coach review.

### Rule 4: Non-Cash & Non-Transferable Status
* Referral rewards possess **zero cash value**. They cannot be cashed out, refunded to a credit card, or transferred to third parties.
* Rewards must be taken as either:
  1. A credit against future UWC WrestlingIQ membership dues.
  2. Physical team gear allocated to the active member.

### Rule 5: Active Membership Requirement
* The referring member must be an active member in good financial standing (no overdue invoices or frozen accounts) at the time the credit is applied.

### Rule 6: Anti-Poaching / School Team Protection
* UWC explicitly forbids using the referral program to solicit athletes away from local partner high school teams or feeder programs during competitive CIF seasons.
* The messaging must always emphasize off-season enhancement, technical supplementation, and building local athletes up for their high school programs (Hayward, Logan, Moreau Catholic, Tennyson, Castro Valley).

---

## 7. Operational Architecture & Technical Implementation

### 7.1 WrestlingIQ (`Team 513`) Setup
WrestlingIQ is UWC's administrative engine. The Mat Partner Program integrates natively using existing WrestlingIQ functionality:

1. **Dedicated Promo Code Engine:**
   * Create master coupon in WrestlingIQ: `PARTNER25` (Applies \$25 discount to Month 1 of Unlimited Training `Session #2286` / `Session #4981`).
   * Create personalized athlete codes for champions/leaders (e.g., `PARTNER-TARIQ`, `PARTNER-LUCAS`).
2. **Custom Registration Session:**
   * Configure **Session: "Mat Partner 3-Day Pass"** in WrestlingIQ with price set to **\$0.00** (normally \$15.00 in `Session #6327`).
   * Requirement: Referrer's name field set to mandatory text input (`"Who invited you to UWC?"`).
3. **Credit Application:**
   * Front-desk admin / Coach Naweed applies a **\$50 one-time credit adjustment** to the referrer's profile inside WrestlingIQ upon notification of the referred member's first payment.

### 7.2 Physical Mat Partner Invitation Cards
Suburban youth wrestling still thrives on tangible artifacts. Digital links are supplemented with high-end, physical collateral:

```
┌──────────────────────────────────────────────────────────────────┐
│  UNITED WRESTLING CLUB                                           │
│  30139 Industrial Pkwy SW Ste C, Hayward, CA                     │
│                                                                  │
│  OFFICIAL MAT PARTNER INVITATION                                 │
│  ──────────────────────────────────────────────────────────────  │
│  "Iron Sharpens Iron. Build The Room."                           │
│                                                                  │
│  THIS PASS ENTITLES:                                             │
│  Name: _______________________________ Weight: _______ lbs      │
│                                                                  │
│  TO 3 CONSECUTIVE PRACTICES (FREE - $15 VALUE)                   │
│  + $25 OFF FIRST MONTH OF UNLIMITED TRAINING                     │
│                                                                  │
│  Invited By UWC Athlete: ______________________________________  │
│                                                                  │
│  Scan to Claim: [ QR CODE → /register?partner=code ]             │
│  Coach Naweed Zemaryalai | (510) 936-0036                        │
└──────────────────────────────────────────────────────────────────┘
```
* **Production Spec:** 32pt heavy silk cardstock with matte black finish and gold foil stamping.
* **Distribution:** Handed to podium winners, review submitters, and active tournament competitors to keep in their gear bags and school backpacks.

### 7.3 Digital Assets & Copy Scripts

#### A. SMS Script for Referrer to Forward to Friends
> *"Hey! My son [Name] has been training at United Wrestling Club in Hayward with Coach Naweed. It’s been incredible for his confidence and technique. Coach gave us a VIP Mat Partner Pass that gets your son 3 free practices (normally \$15) plus \$25 off if you decide to join. Here’s the private link: https://unitedwrestlingclub.com/partner/?ref=[AthleteName]. Let me know if you want to head to practice together this week!"*

#### B. Front-Desk / Coach Onboarding Cheat Sheet (for Coach Naweed & Staff)
* **When a parent asks for a discount:**  
  * *“We keep our tuition at \$139.99 with no contracts or hidden fees so it’s fair for everyone. But if you have friends from school or soccer who want to drill with your son, use our Mat Partner Program. You get \$50 off your tuition for every partner you bring in, and they get \$25 off their first month.”*
* **When an athlete needs better partners at their weight:**  
  * *“You’re outgrowing your current partners in the room. Who are you wrestling in school duals that gives you a tough match? Bring them into UWC. Take this card, hand it to them on Monday. If you get them in here, you both get better.”*

---

## 8. 90-Day Implementation Roadmap

```
Week 1 - 2: Foundation & Setup
─────────────────────────────────────────────────────────────────────────
• Create WrestlingIQ `PARTNER25` discount rule and $0 Mat Partner Session.
• Order 500 physical 32pt Mat Partner Invitation Cards for front desk.
• Connect `/reviews/` post-submission modal to referral invite generator.

Week 3 - 4: Internal Launch & Champion Rollout
─────────────────────────────────────────────────────────────────────────
• Brief Coach Naweed, Karim, and coaching staff on referral talk tracks.
• Personally issue Partner Passes to top 10 competition team leaders.
• Send initial announcement SMS to current active parent roster (45 families).

Week 5 - 8: Event Activation & Review Loop Integration
─────────────────────────────────────────────────────────────────────────
• Activate Trigger 1 at first post-launch weekend wrestling tournament.
• Review weekly WrestlingIQ referral attribution reports.
• Issue first round of $50 billing credits and 400 GSM Team Armor hoodies.

Week 9 - 12: Community Mixer & Optimization
─────────────────────────────────────────────────────────────────────────
• Host Spring Community Open Mat & Bring-a-Partner Mixer.
• Audit CAC, show-up rates, and conversion metrics against paid ad benchmarks.
• Calibrate 12-month projections toward 120-athlete club roster target.
```

---

## 9. Summary Architectural Checklist

- [x] **Psychological Alignment:** Validated athletic necessity ("Mat Partner Flywheel") replacing transactional cash incentives.
- [x] **Double-Sided Offer:** \$50 credit or 400 GSM team gear for referrer; \$15 trial fee waived + \$25 off month 1 for referred.
- [x] **5 High-Intent Triggers:** Post-podium, post-review, Day 3 onboarding, Community Mixer, and Day 45 milestone.
- [x] **Financial Viability:** \$53–\$75 referral CAC vs. \$120–\$180 paid ad CAC; instant cash flow positivity (< 21-day payback); LTV:CAC exceeding 24:1.
- [x] **Anti-Gaming Guardrails:** Mandatory 1st paid invoice clearing, household/sibling exclusions, non-cash terms, 60-day attribution window.
- [x] **WrestlingIQ Compatibility:** Fully deployable on Team 513 infrastructure without external SaaS subscription overhead.
