---
type: dossier
status: current
group: strategy
owner: "Customer Research & Referral Architect (Sprintz Growth OS)"
date: 2026-11-02
last_reviewed: 2026-11-02
sources: ["reviews/index.html", "https://unitedwrestlingclub.com/partner/?ref=[AthleteName"]
shard_of: "discovery/strategy/referral_program_architecture.md"
part: "5 of 5"
---

> Part 5 of 5 of [referral_program_architecture](../referral_program_architecture.md). Text is verbatim from the original; only links were rewritten.

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
