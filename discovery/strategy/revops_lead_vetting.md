---
status: current
group: strategy
---

# RevOps vetting: UWC lead pipeline (as designed and as built)

- **Date:** 2026-11-05
- **Scope:** Trial Pass form to member, across the homepage modal, `/register`, `/contact`, footer newsletter, and the review form, plus the systems behind them (Formspree new account, WrestlingIQ Team 513, SMS/email platform, GA4).
- **Method:** RevOps framework (single source of truth, define before automate, measure every handoff, revenue team alignment). Checked against the built code and the discovery docs.
- **Context used:** No product-marketing context file exists in the project. Inputs come from `discovery/strategy/master_discovery_findings.md` and the call notes. Missing inputs are listed in Section 7.

## 1. Verdict

**Capture works. Management does not exist yet.**

The form collects clean, consented, attributed leads. Nothing turns a lead into a conversation, tracks it to a member, or measures it. Two issues are critical: a consent promise the system does not keep, and no person-level handoff. Fix those before launch.

Severity: 2 critical, 5 high, 5 medium.

## 2. Stage model (proposed, for sign-off)

The gym has one offer, one owner, and a short cycle (about 3 to 10 days from form to trial), so the model is short.

| Stage | Entry criteria | Exit criteria | Owner | SLA |
|---|---|---|---|---|
| **Lead** | Trial form submitted (consent and attribution logged) | First contact attempt made | Naweed (named 2026-11-05) | First contact within 1 business hour during open hours. Next morning if after hours. |
| **Contacted** | Call answered, or two attempts with no answer | Trial date agreed | Same owner | Second attempt within 24 hours |
| **Trial booked** | Class date and program set | Athlete attends, or no-show | Same owner | Reminder the day before |
| **Trial attended** | Checked in on WrestlingIQ Team 513 | Enrolls or declines | Naweed | Follow-up within 48 hours |
| **Member** | Active recurring on WrestlingIQ | Churns | WrestlingIQ roster is the record | Monthly reconciliation |
| **Lost** | Declined, no response after 2 attempts, wrong program, or moved | Reason code logged | Owner | Reason code within 7 days |

**Source of truth:** WrestlingIQ for members. The lead record is open until the stage data is agreed (Section 6).

**Scoring:** Skip it. Every trial form is a qualified lead, since the only offer is the trial. Revisit when lead volume passes about 100 a month.

## 3. Findings

| # | Sev | Principle | Finding | Evidence | Fix |
|---|---|---|---|---|---|
| C1 | Critical | Alignment, compliance | The consent copy says "Text me my 3-Day Mat Pass confirmation, Suite C arrival instructions..." and the success screen says "SMS Status: Opted In". Nothing sends a text. No SMS sender is connected, and A2P 10DLC registration is not done. | `v01/index.html` trial form; `register/index.html`; `discovery/strategy/uwc_sms_marketing_playbook.md` section 1A (blocker) | Until a sender exists: send confirmations by hand and make the copy say so, or remove the promise. Do not show "Opted In" until texts can be sent. |
| C2 | Critical | Handoff, speed-to-lead | A lead lands in the Formspree inbox. Naweed checks it (confirmed 2026-11-05), but the hours he checks it are not stated, no alert is confirmed, and notification recipients are not set. Naweed also teaches on the mat during class, so leads submitted then wait. | `todos.md` P1 (Formspree access pending); `discovery/strategy/master_discovery_findings.md` phase 4 ("named club owner monitors leads") | Set notifications to two people (Naweed and the front desk). Turn on mobile push if available. Write the SLA from Section 2 and get Naweed's sign-off. |
| H1 | High | Single source of truth | Three places hold lead or member data: Formspree (leads), WrestlingIQ (members), and nothing else. Leads are not linked to a WrestlingIQ prospect. The lead ID (`uwc_lead_id`) only reaches WrestlingIQ on the waiver link. | `assets/js/uwc-attribution.js`; `discovery/strategy/uwc_attribution_model.md` | Pick one lead record. Option A: a shared sheet for now, with the WrestlingIQ roster as the member record. Option B: WrestlingIQ prospects, if the API supports creating them (the wiq-cli README lists `prospects create`, research preview). |
| H2 | High | Measure every handoff | GA4 has no tag on the site, so `generate_lead` never fires. No stage is counted. The funnel rates in discovery (1.5%, 35%, 40–60%) are estimates. | `assets/js/uwc-attribution.js` (fires only if `gtag` exists); `discovery/strategy/master_discovery_findings.md` section 2.2 | Install the GA4 tag with the events in the todos. Count submissions, first contacts, trials booked, attended, and members, using the Section 2 definitions. |
| H3 | High | Define before automate | "Trial" means different things in the docs: a free 2-class assessment (`website_rebuild_spec.md`, modal spec), a $15 3-day pass (live homepage), and a $15 drop-in (pricing). The live homepage now says the 3-day pass only. | `discovery/site/trial_modal_dataflow_ux_spec.md`; `v01/index.html`; `discovery/strategy/master_discovery_findings.md` section 2.2 | Confirm the offer with Naweed and Karim. Update the spec and modal docs to match. Use the stage definitions above. |
| H4 | High | Measure every handoff (acceptance) | The discovery gate "actual receipt of test leads" has not been run. No test submission has been confirmed in the real inbox. | `discovery/strategy/master_discovery_findings.md` section 8.3, phase 2 | Submit one test to each of the four forms. Confirm each arrives in the correct form with `form_name`. Record the result in this file. |
| H5 | High | Single source of truth, data hygiene | No email is captured, so roster matching falls back to phone (match key 1 needs guardian email or phone; phone is present). Phone is stored as typed, not normalized. | `discovery/strategy/uwc_attribution_model.md` (match keys); trial form fields | Decide whether email is required. Normalize phone to E.164 on export. Dedupe weekly by phone. |
| M1 | Medium | Routing, fallback owner | One owner (Naweed) is on the mat during class. No fallback. | `discovery/strategy/master_discovery_findings.md` | Two recipients. Auto-reply on submit: "We reply within one business day. Call (510) 303-4869 for same-day." |
| M2 | Medium | Speed-to-lead | Speed-to-lead is not timestamped beyond the form submit time. The designed SMS (3 seconds in the spec, 60 seconds in the playbook) does not run. | `discovery/site/trial_modal_dataflow_ux_spec.md` TP-03; `discovery/strategy/uwc_sms_marketing_playbook.md` | Log first-contact time in the lead record. Report median time to first contact weekly. |
| M3 | Medium | Data hygiene | No duplicate check. Repeat submissions create duplicate leads. | Formspree submissions | Weekly dedupe by phone and name. Merge rule: keep the earliest record and append later attempts as notes. |
| M4 | Medium | Revenue team alignment | Missed inquiries are estimated at 10–18 a month. Calls, texts, and the Google listing are not in the form system. | `discovery/strategy/master_discovery_findings.md` section 2.2 | Log calls and texts into the same lead record, with the channel. Reconcile monthly against the form count. |
| M5 | Medium | Privacy and compliance | The playbook requires `/privacy` and `/terms` links on the modal. Neither page exists, and the modal does not link them. | `discovery/strategy/uwc_sms_marketing_playbook.md` section 1B | Build both pages and link them from the trial form and the newsletter. |

## 4. What is sound (keep)

- **Consent is logged with a timestamp, the disclosure version, and the source URL.** This is the audit trail TCPA needs.
- **Every form has its own endpoint and `form_name`.** Routing by form is clean.
- **Failure is visible to the parent.** A failed submit shows the front-desk number. The old silent success is gone.
- **Program and self-reported source are picklists.** Clean segmentation without free text.
- **The roster is the conversion truth.** This matches the discovery decision.
- **The media release is recorded per lead.** It is needed for the media plan.

## 5. Implementation order

**Before launch (blocking)**
1. Fix C1: confirmation copy and the "Opted In" line match what is sent.
2. Fix C2: two notification recipients; SLA signed off by Naweed.
3. Run H4: test receipt for all four forms, recorded here.
4. Settle H3: one trial definition, with the four stage definitions.
5. Pick the lead record (H1) and write its fields: lead ID, first-contact time, stage, owner, reason code.

**At launch**
6. GA4 tag and events (H2).
7. Phone normalization and the weekly dedupe (H5, M3).
8. Standard auto-reply with response time (M1).

**30 / 60 / 90 days**
9. Weekly reconciliation: form leads, first contacts, trials booked, attended, members. Compare with the discovery rates.
10. Monthly: WrestlingIQ roster check against lead records (match keys 1 to 3). Read-only, using `wiq-cli` if the team admin enables API access.
11. Revisit scoring when volume passes about 100 a month.

## 6. What the data needs to answer

- Leads per month, counted from the Formspree inboxes, from launch.
- Median time from submit to first contact, per owner.
- Percent of leads that book a trial, and percent that attend.
- Percent of attended trials that become members within 30 days.
- Monthly churn among new members.

Each member is about $1,680 a year in gross tuition ($139.99 a month). That is the value of each conversion the pipeline recovers.

## 7. Open questions

1. How many trial forms have come in so far, and from which sources?
2. Who checks the inbox today, and during what hours? (Answered 2026-11-05: Naweed. Hours not yet stated.)
3. Is Naweed willing to sign off on the SLA in Section 2?
4. Does WrestlingIQ create prospects automatically from anything on our site? Ask WrestlingIQ support.
5. Should email be required on the trial form, given the trade-off in form friction?
