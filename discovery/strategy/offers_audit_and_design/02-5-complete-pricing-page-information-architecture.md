---
type: dossier
status: current
group: strategy
owner: "Sprintz Growth OS (`offers` Discovery Phase)"
date: 2026-10-30
last_reviewed: 2026-10-30
sources: ["discovery/archive/snapshots/live_site_content/pricing.json", "discovery/site/website_rebuild_spec.md", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=6327&show_registration=true&team_id=513", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=2664&show_registration=true&team_id=513", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=1087&show_registration=true&team_id=513", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=4981&show_registration=true&team_id=513", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=2286&show_registration=true&team_id=513", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=3574&show_registration=true&team_id=513", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=1084&show_registration=true&team_id=513", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=9536&show_registration=true&team_id=513"]
shard_of: "discovery/strategy/offers_audit_and_design.md"
part: "2 of 3"
---

> Part 2 of 3 of [offers_audit_and_design](../offers_audit_and_design.md). Text is verbatim from the original; only links were rewritten.

## 5. Complete `/pricing` Page Information Architecture & Funnel Specification (Route #14)

The rebuild of Route #14 (`/pricing`) transforms an empty utility table into an educational, high-trust sales engine that routes cold visitors into the **Native 1-Click Trial Pass Modal** while providing verified direct links to all **8 live WrestlingIQ Team 513 sessions** for returning or ready-to-join athletes.

### Architecture & Funnel Routing Matrix

```text
/pricing (Route #14)
│
├── Primary Conversion CTA (Hero, Cards, Sticky Footer)
│   └── Route #16: /register (Native 1-Click Trial Pass Modal ──> Captures Lead First ──> SMS Concierge)
│
├── Program Deep-Dive Verification Links
│   ├── Kids Wrestling (Pre-K–5th):      Route #4  ──> /classes/kid-wrestling
│   ├── Competition Youth (K–12):        Route #5  ──> /classes/youth-wrestling
│   ├── Adult Wrestling (18+):           Route #6  ──> /classes/adult-wrestling
│   ├── Women's Self-Defense:            Route #12 ──> /classes/womens-self-defense
│   ├── Grappling / Sambo / Boxing:      Routes #7–#11 (/classes/nogi-jiu-jitsu, /gi-jiu-jitsu, /sambo, /boxing-fundamentals, /open-mat)
│
├── Schedule & Facility Verification Links
│   ├── Filterable Mat Schedule:         Route #13 ──> /schedule
│   ├── Facility & Parking Location:     30139 Industrial Pkwy SW Ste C, Hayward, CA 94544
│   └── Direct Phone & Text Inquiries:   (510) 303-4869 ──> /contact
│
└── Express Direct Checkout Bypass (All 8 WrestlingIQ Team 513 Sessions)
    ├── Session #6327 ($15 3-Day Trial)
    ├── Session #2664 ($15 Drop-In)
    ├── Session #1087 ($89.99 Kids 2-Day)
    ├── Session #4981 ($139.99 4-Day Kids)
    ├── Session #2286 ($139.99 MS/HS 6-Day)
    ├── Session #3574 ($150.00 Competition Youth)
    ├── Session #1084 ($139.99 Adult All-Access)
    └── Session #9536 ($100.00 BJJ 3-Day)
```

### Section-by-Section Wireframe Specification for `/pricing`

1. **Section 1: Hero & Transparent Pricing Commitment**
   * *H1:* **"Transparent Membership Plans. Zero Long-Term Contracts."**
   * *Subhead:* "Olympic-caliber wrestling, Wrestle-Jitsu, Combat Sambo, and Women's Self-Defense in Hayward, CA. 35%–45% below commercial Bay Area BJJ academies."
   * *Trust Badges:* `[ 1980 Moscow Olympic Lineage ]` · `[ Month-to-Month Tuition ]` · `[ Zero Cancellation Fees ]` · `[ 5.0★ Google Rating ]`
   * *Primary CTA Button:* `[ Claim Free 2-Class Trial Pass ]` (Routes to `/register`) · *Secondary Ghost Button:* `[ View Full Schedule ]` (Routes to `/schedule`).

2. **Section 2: Interactive 4-Track Pricing Grid (The Core Cards)**
   * **Card 1: Junior Olympian Kids (Pre-K – 5th)**
     * *Headline Price:* `$89.99/mo` (2-Day Mon/Wed) or `$139.99/mo` (4-Day Mon–Thu).
     * *Key Bullets:* Weight & age-matched drilling, safe falling mechanics, no gear required for 30 days, 14-day mat-fit guarantee.
     * *Links:* Deep-dive [`/classes/kid-wrestling`](../../site/website_rebuild_spec.md#L75) · Schedule [`/schedule#kids`](../../site/website_rebuild_spec.md#L87).
     * *Card CTA:* `[ Start Free Kids Trial ]` (`/register`).
   * **Card 2: Varsity & CIF Competition Pipeline (Grades 6–12) — [Featured Card: "Most Popular"]**
     * *Headline Price:* `$139.99/mo` (MS/HS 6-Day) or `$150.00/mo` (Full Competition Travel Team).
     * *Key Bullets:* 6 days/wk Folkstyle/Freestyle/Greco, MVAL/WACC/CIF varsity preparation, Saturday Open Mat access included, Chabot College recruiting mentorship.
     * *Links:* Deep-dive [`/classes/youth-wrestling`](../../site/website_rebuild_spec.md#L76) · Schedule [`/schedule#varsity`](../../site/website_rebuild_spec.md#L87).
     * *Card CTA:* `[ Book Varsity Assessment ]` (`/register`).
   * **Card 3: Adult Wrestling & Wrestle-Jitsu (Ages 18+)**
     * *Headline Price:* `$100.00/mo` (BJJ 3-Day) or `$139.99/mo` (All-Access Unlimited Mon–Sat).
     * *Key Bullets:* Authentic Olympic takedowns for BJJ guard-pullers, Dagestani top control, Combat Sambo, Boxing, progressive live-go safety scaling.
     * *Links:* Deep-dive [`/classes/adult-wrestling`](../../site/website_rebuild_spec.md#L78) · Schedule [`/schedule#adult`](../../site/website_rebuild_spec.md#L87).
     * *Card CTA:* `[ Try Adult Wrestle-Jitsu ]` (`/register`).
   * **Card 4: Women's Self-Defense Intensive (Seminar & Cohort Series)**
     * *Headline Price:* `$35–$50` (Weekend Seminar) or `$149–$199` (6-Week Progressive Cohort).
     * *Key Bullets:* Female-led instruction by Louisa, Neha's Sister (police officer & collegiate champion), and Ja Shia. Practical anti-assault leverage, ground escapes, and decisive counter-striking.
     * *Links:* Deep-dive [`/classes/womens-self-defense`](../../site/website_rebuild_spec.md#L84) · Schedule [`/schedule#womens-self-defense`](../../site/website_rebuild_spec.md#L87).
     * *Card CTA:* `[ Reserve Women's Seminar Spot ]` (`/register`).

3. **Section 3: Transparent WrestlingIQ Team 513 Direct Checkout Table**
   * An accordion or toggle for returning athletes: *"Already know your plan? Click below to complete your direct registration on WrestlingIQ (Team 513)."*
   * Displays the audited table of all 8 sessions (`#6327`, `#2664`, `#1087`, `#4981`, `#2286`, `#3574`, `#1084`, `#9536`) with explicit 1-click checkout links.

4. **Section 4: Schedule Verification & Facility Location Anchor**
   * *Copy:* "Not sure which class fits your family's routine? Check our live mat schedule or stop by our Hayward facility."
   * Direct embed link to [`/schedule`](../../site/website_rebuild_spec.md#L87).
   * Exact physical address display: `30139 Industrial Pkwy SW Ste C, Hayward, CA 94544` (with link to Google Maps and parking instructions).
   * Primary phone line display: `(510) 303-4869` with `tel:` and `sms:` links.

5. **Section 5: Transparent Membership FAQs**
   * *Q: Are there annual contracts?* No. All plans are month-to-month.
   * *Q: Do you offer sibling or family discounts?* Yes, sibling and multi-member discounts are available.
   * *Q: Do I have to buy expensive gear before starting?* No, beginners start in t-shirt and athletic shorts.
   * *Q: Can I freeze my membership for high school sports season or injury?* Yes, simple 1-click freeze with zero penalty.

6. **Section 6: Bottom Sticky / Conversion Banner**
   * *Headline:* "Experience the Room First — Free 2-Class Pass."
   * *CTA Button:* `[ Claim Your Pass at /register ]` (Pops modal).

---
