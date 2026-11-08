---
type: dossier
status: current
group: strategy
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email1_waiver_top", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email1_schedule_cta", "https://unitedwrestlingclub.com/coaches?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email2_coaches_cta", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email3_safety_schedule_cta", "https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email4_proof_enroll_cta", "https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email5_direct_enroll_cta", "https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq2_member_onboarding&utm_content=email1_portal_cta", "https://www.wrestlingiq.com/unitedwrestlingclub?utm_source=email&utm_medium=lifecycle&utm_campaign=seq2_member_onboarding&utm_content=email2_roadmap_cta", "https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo&utm_source=email&utm_medium=lifecycle&utm_campaign=seq2_member_onboarding&utm_content=email3_gbp_review_cta", "https://unitedwrestlingclub.com/?utm_source=email&utm_medium=referral&utm_campaign=seq2_member_onboarding&utm_content=email3_referral_link", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq3_reengagement&utm_content=email1_checkin_cta", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq3_reengagement&utm_content=email2_seasonal_cta", "https://unitedwrestlingclub.com/schedule?utm_source=email&utm_medium=lifecycle&utm_campaign=seq3_reengagement&utm_content=email3_last_call_cta", "https://unitedwrestlingclub.com/first-day-guide?utm_source=email&utm_medium=lifecycle&utm_campaign=seq1_trial_welcome&utm_content=email1_primary_cta"]
sharded: "uwc_email_marketing_playbook/"
---

# United Wrestling Club (UWC) — Email Marketing & Lifecycle Nurture Playbook

> Sharded on 2026-11-08. The full text is in [`uwc_email_marketing_playbook/`](uwc_email_marketing_playbook/). Edit the parts, not this index.

## TL;DR

- Email carries the trust narrative in a 100% organic funnel: coach pedigree, safety and hygiene, and transparent pricing.
- DMARC is at p=quarantine, so unauthenticated mail risks spam placement; the fix is SES, SPF, DKIM, and a bounce subdomain in Route 53.
- Three sequences run: trial welcome (5 emails over 10 days), active-member onboarding (3 emails), and lapsed-lead re-engagement (3 emails over 14 days).
- Email 5 is the direct-conversion email for $139.99 per month month-to-month tuition with zero lock-in, contrasted with 12-month martial arts contracts.

## Parts

| Part | Section | File |
|---|---|---|
| 1 | TL;DR | [01-tl-dr.md](uwc_email_marketing_playbook/01-tl-dr.md) |
| 2 | 3. Sequence 1: New Lead / Trial Pass Welcome & Parent Trust Sequence | [02-3-sequence-1-new-lead-trial-pass-welcome-parent-.md](uwc_email_marketing_playbook/02-3-sequence-1-new-lead-trial-pass-welcome-parent-.md) |
| 3 | 4. Sequence 2: Active Member Onboarding & 5-Star Review Engine | [03-4-sequence-2-active-member-onboarding-5-star-rev.md](uwc_email_marketing_playbook/03-4-sequence-2-active-member-onboarding-5-star-rev.md) |
| 4 | 5. Sequence 3: Lapsed Lead & Seasonal Folkstyle/Freestyle Re-Engagement Sequence | [04-5-sequence-3-lapsed-lead-seasonal-folkstyle-free.md](uwc_email_marketing_playbook/04-5-sequence-3-lapsed-lead-seasonal-folkstyle-free.md) |
