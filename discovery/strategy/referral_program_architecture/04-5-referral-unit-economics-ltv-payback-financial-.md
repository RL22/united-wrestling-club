---
type: dossier
status: current
group: strategy
owner: "Customer Research & Referral Architect (Sprintz Growth OS)"
date: 2026-11-02
last_reviewed: 2026-11-02
sources: ["reviews/index.html", "https://unitedwrestlingclub.com/partner/?ref=[AthleteName"]
shard_of: "discovery/strategy/referral_program_architecture.md"
part: "4 of 5"
---

> Part 4 of 5 of [referral_program_architecture](../referral_program_architecture.md). Text is verbatim from the original; only links were rewritten.

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
