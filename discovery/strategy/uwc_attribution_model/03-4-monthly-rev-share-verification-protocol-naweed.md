---
type: dossier
status: current
group: strategy
owner: "Sprintz Growth OS (Rodney Lewis)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["https://formspree.io/f/xyyavaaj", "https://unitedwrestlingclub.com/schedule?lid={{uwc_lead_id}}&utm_source=uwc_lifecycle&utm_medium=sms&utm_campaign=trial_day1_schedule", "https://www.wrestlingiq.com/unitedwrestlingclub/register?ref_id={{uwc_lead_id}}&utm_source=uwc_lifecycle&utm_medium=sms&utm_campaign=trial_day6_close&utm_content={{uwc_lead_id}}"]
shard_of: "discovery/strategy/uwc_attribution_model.md"
part: "3 of 3"
---

> Part 3 of 3 of [uwc_attribution_model](../uwc_attribution_model.md). Text is verbatim from the original; only links were rewritten.

## 4. Monthly Rev-Share Verification Protocol (Naweed & Rodney)

### A. Commercial Baseline & Formula
* **Fixed Retainer:** **$1,000.00 / month**
* **Baseline Active Roster:** **45 Active Recurring Athletes** (Grandfathered baseline at $139.99/mo tuition = $6,299.55/mo baseline MRR).
* **Performance Rev-Share Rate:** **$25.00 / month per incremental active recurring athlete above 45** (~17.86% of incremental $139.99/mo athlete tuition; UWC retains **$114.99/mo** or **82.14%** of every new member).
* **Monthly Calculation Formula:**
  $$\text{Monthly Rev-Share Payout} = \max\left(0,\; \text{Active Recurring Roster}_{\text{WrestlingIQ}} - 45\right) \times \$25.00$$

---

### B. Source of Truth & The 3-Step Monthly Reconciliation Ritual

 per **Pillar A §5 (Reconciling Conflicting Sources)**, **WrestlingIQ (`Team ID: 513`) Active Recurring Roster** is the single source of truth for the *conversion count* (where money is actually collected). GA4 (`562010875`), Google Search Console, and the UWC Attribution Ledger explain *where those athletes came from*—they never inflate the headcount.

On the **1st business day of each month** (taking <10 minutes):

1. **Step 1 — Export Active Roster from WrestlingIQ (`Team ID: 513`):**
   * Navigate to `WrestlingIQ Admin > Reports > Active Subscriptions / Roster`.
   * Filter for: `Status = Active`, `Billing Type = Recurring Monthly ($139.99/mo)` (or active annual/PIF equivalent), `As of = Last Day of Prior Month`.
   * Freeze the initial **45 Baseline Roster IDs** on Day 1 of the engagement in Tab 1 (`Baseline_45_Lock`) of the shared **UWC Growth Ledger**.

2. **Step 2 — Automated 3-Key Join Against the UWC Attribution Ledger:**
   Every active athlete enrolled after the engagement start date is matched against the Attribution Ledger using a strict, deterministic 3-tier cascade:
   * **Match Key 1 (Exact Digital Stitch — `journey_linked`):** Match WrestlingIQ `Guardian Email`, `Guardian Phone (E.164)`, or `ref_id` (`uwc_lead_id`) against the Formspree (`xyyavaaj`) Trial Pass & SMS/Email Click Ledger.
   * **Match Key 2 (Athlete + Guardian Fuzzy Match — `journey_linked`):** If a spouse used a second email address on WrestlingIQ checkout after the other parent submitted the Trial Pass modal, match on `Athlete First + Last Name` + `Guardian Last Name` + `Zip Code / City`.
   * **Match Key 3 (Walk-In / Direct Enrollment Intake — `self_reported`):** If a parent bypassed the website modal entirely (e.g., called Coach Naweed from Google Maps or walked into 30139 Industrial Pkwy SW and enrolled directly on WrestlingIQ), WrestlingIQ's required custom registration field (*"How did you first hear about UWC?"*) supplies the `self_reported` attribution source.

3. **Step 3 — Sign-Off & Invoice Generation:**
   * Because UWC operates under a **100% Zero-Paid-Ads Mandate** ($0 PPC spend), there is zero conflict between Paid Ads and Organic/Lifecycle channels.
   * The ledger automatically outputs the **Monthly Attribution & Rev-Share Statement** showing:
     1. Total Active Recurring Roster count in WrestlingIQ (`Team 513`).
     2. Net Incremental Athletes above the 45-member baseline.
     3. The First-Touch Acquisition breakdown (which SEO location pages & GBP queries generated the members) alongside the U-Shaped (40/20/40) nurture breakdown (how SMS & Email closed them).

---

### C. Sample Monthly Reconciliation Readout (Month 4 Projection Example)

```markdown
# UWC Monthly Attribution & Rev-Share Readout — [Month Ending]

## 1. Source of Truth (WrestlingIQ Team ID: 513)
- Contractual Baseline Roster: 45 Active Athletes
- Verified Active Recurring Roster (EOM): 68 Active Athletes ($9,519.32/mo MRR)
- Net Incremental Active Athletes: +23 Athletes (+$3,219.77/mo Incremental MRR)
- Sprintz Rev-Share Earned (23 × $25.00): $575.00
- Total Monthly Invoice ($1,000 Base + $575 Rev-Share): $1,575.00
- Net Incremental Cash Flow Kept by UWC: +$2,644.77/mo

## 2. Attribution Breakdown of the 23 Incremental Athletes
| Acquisition Channel | First-Touch (Created) | Naive Last-Touch | U-Shaped (40/20/40) | Self-Reported Survey | Confidence / Basis |
| :--- | :---: | :---: | :---: | :---: | :--- |
| Organic SEO: Local Pages (/locations/*) | 11 (47.8%) | 2 (8.7%) | 9.2 (40.0%) | 10 (Google Search) | HIGH (`journey_linked`) |
| Google Business Profile (Map Pack) | 8 (34.8%) | 3 (13.0%) | 6.4 (27.8%) | 7 (Google Maps / Reviews) | HIGH (`journey_linked`) |
| SMS Trial Nurture (`utm_medium=sms`) | 0 (0.0%) | 12 (52.2%) | 4.8 (20.9%) | 0 (Post-Discovery Touch) | HIGH (`journey_linked`) |
| Email Trial Nurture (`utm_medium=email`) | 0 (0.0%) | 4 (17.4%) | 1.6 (7.0%) | 0 (Post-Discovery Touch) | HIGH (`journey_linked`) |
| Word-of-Mouth / Tournament Dark Social | 4 (17.4%) | 2 (8.7%) | 1.0 (4.3%) | 6 (Friend / Coach / HS) | MEDIUM (`self_reported`) |
| **Total Verified Incremental Athletes** | **23 (100%)** | **23 (100%)** | **23.0 (100%)** | **23 (100%)** | **100% Reconciled to WIQ** |
```

### D. Governance Guardrails (Zero-Ambiguity Rules)
1. **Churn & Pause Protection:** Rev-share applies strictly to **net active paying recurring athletes** above 45 in a given billing month. If total active roster is 60 in Month 3 and 58 in Month 4 due to seasonal graduation, Month 4 rev-share automatically adjusts to $58 - 45 = 13 \times \$25 = \$325$.
2. **Paid-in-Full (PIF) / Annual Memberships:** Any athlete who purchases a 6-month or 12-month Paid-in-Full membership on WrestlingIQ is counted as `1 Active Recurring Athlete` for each month their prepaid membership remains active.
3. **Sibling / Family Discounts:** Any athlete on an active recurring family plan with a monthly tuition contribution $\ge \$99/mo$ counts as 1 active roster spot; short-term $15 3-Day Trial Passes or drop-in mat fees are **excluded** from the recurring roster count until they convert to a full membership.
