---
type: dossier
status: current
group: strategy
owner: "Sprintz Growth OS (Rodney Lewis)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["https://formspree.io/f/xyyavaaj", "https://unitedwrestlingclub.com/schedule?lid={{uwc_lead_id}}&utm_source=uwc_lifecycle&utm_medium=sms&utm_campaign=trial_day1_schedule", "https://www.wrestlingiq.com/unitedwrestlingclub/register?ref_id={{uwc_lead_id}}&utm_source=uwc_lifecycle&utm_medium=sms&utm_campaign=trial_day6_close&utm_content={{uwc_lead_id}}"]
sharded: "uwc_attribution_model/"
---

# United Wrestling Club (UWC): Organic SEO + SMS/Email Attribution Model & First-Party Stitching Architecture

> Sharded on 2026-11-08. The full text is in [`uwc_attribution_model/`](uwc_attribution_model/). Edit the parts, not this index.

## TL;DR

- GA4 has no live tags on the site and checkout sits on wrestlingiq.com, so last-touch reporting would credit SMS or direct traffic for every enrollment.
- The attribution standard has three layers: first-touch for acquisition, U-shaped 40/20/40 for the full funnel, and self-reported attribution with roster match as a cross-check.
- Referrer domains such as the club site, WrestlingIQ, Formspree, Stripe, and Google sign-in are hard-excluded as self-referrals.
- Leads are stitched across domains with a first-party identity, and uwc_lead_id is carried in SMS and email links.
- Sprintz rev-share is reconciled monthly against the WrestlingIQ Team 513 roster at $25 per month per incremental athlete above 45.

## Parts

| Part | Section | File |
|---|---|---|
| 1 | TL;DR | [01-tl-dr.md](uwc_attribution_model/01-tl-dr.md) |
| 2 | 3. Pillar B: First-Party Identity & Cross-Domain Stitching Architecture | [02-3-pillar-b-first-party-identity-cross-domain-sti.md](uwc_attribution_model/02-3-pillar-b-first-party-identity-cross-domain-sti.md) |
| 3 | 4. Monthly Rev-Share Verification Protocol (Naweed & Rodney) | [03-4-monthly-rev-share-verification-protocol-naweed.md](uwc_attribution_model/03-4-monthly-rev-share-verification-protocol-naweed.md) |
