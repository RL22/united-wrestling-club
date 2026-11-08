---
type: spec
status: current
group: site
owner: "Rodney Lewis (Sprintz)"
date: 2026-10-31
last_reviewed: 2026-10-31
sources: ["https://www.wrestlingiq.com/users/sign_up?paid_session_id=6327&show_registration=true&team_id=513", "https://wrestlingiq.com/uwc/w?lead={lead_id}&team=513", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=6327&team_id=513&prefill_phone=${encodeURIComponent(phone"]
sharded: "trial_modal_dataflow_ux_spec/"
---

# Native 1-Click Trial Modal & WrestlingIQ Middleware Bridge

> Sharded on 2026-11-08. The full text is in [`trial_modal_dataflow_ux_spec/`](trial_modal_dataflow_ux_spec/). Edit the parts, not this index.

## TL;DR

- The rebuild adds a native dialog modal that captures phone and athlete age bracket in under 15 seconds without a credit card, and sends an SMS confirmation through a Next.js edge API route.
- The lead pre-fills the WrestlingIQ Team 513 waiver so parents do not retype their details.
- Projected visitor-to-trial conversion rises from about 1.5% to 8.5%–10.5%, and trial show-up rises from a 40% industry baseline to 82%+.

## Parts

| Part | Section | File |
|---|---|---|
| 1 | UX Architecture, Multi-Channel Touchpoints & Data Flow Specification | [01-ux-architecture-multi-channel-touchpoints-data-f.md](trial_modal_dataflow_ux_spec/01-ux-architecture-multi-channel-touchpoints-data-f.md) |
| 2 | 3. Interactive UX State Transition Architecture | [02-3-interactive-ux-state-transition-architecture.md](trial_modal_dataflow_ux_spec/02-3-interactive-ux-state-transition-architecture.md) |
| 3 | 6. Full Edge API Implementation: `/api/trial-lead/route.ts` | [03-6-full-edge-api-implementation-api-trial-lead-ro.md](trial_modal_dataflow_ux_spec/03-6-full-edge-api-implementation-api-trial-lead-ro.md) |
