# Lead response system: channels, automation, knowledge base, and handoff

- **Date:** 2026-11-05
- **Status:** Proposed. Needs decisions in Section 10.
- **Decision record:** `discovery/decisions/ADR-20261105-lead-response-ownership.md`
- **Knowledge base:** `discovery/knowledge_base/uwc_kb_v1.md`
- **Inputs:** `discovery/revops_lead_vetting.md`, `discovery/trial_modal_dataflow_ux_spec.md`, `discovery/uwc_sms_marketing_playbook.md`, `discovery/uwc_attribution_model.md`, `discovery/naweed_discovery_questions.md` section 8.

## 1. The problem in one paragraph

Parents reach us by the trial form, by text to (510) 303-4869, by call, by email, and through the reviews and newsletter pages. Today only the trial form exists in the system, and it lands in an inbox. Naweed will not answer leads by text. The site tells people to text the number. Automated texts are not yet possible, since the SMS sender is not registered. The system has to answer quickly, answer correctly, and hand off what it cannot answer, without Naweed on text.

## 2. Roles

| Role | Who | Does | Does not |
|---|---|---|---|
| **Automated responder** | System (SMS platform and a rules engine, plus a language model limited to the knowledge base) | Acknowledges every lead within a minute. Answers FAQ-type texts from the knowledge base. Sends consented confirmations and reminders. Hands off the rest with the transcript. | Give medical, billing, or cancellation answers. Promise anything not in the knowledge base. Say it is a person. |
| **Staff responder** | A named person (not yet chosen) | Works the lead queue during open hours. Calls back. Takes handoffs. Books trials. | Decide pricing or exceptions. |
| **Naweed** | Head coach | Approves knowledge base facts. Takes escalations by phone when needed. Converts trial athletes on WrestlingIQ. | Text leads. |
| **WrestlingIQ** | Vendor system | Holds members, waivers, billing, and the active roster (source of truth for conversions). | Hold lead conversations. |

## 3. Channels into one queue

| Channel | Entry | First response | Owner after first response |
|---|---|---|---|
| Trial form (homepage, `/register`) | Form submit | Automated email acknowledgment within 1 minute. Text acknowledgment only if SMS consent and sender are live. | Staff responder |
| Text to (510) 303-4869 | Inbound SMS | Automated reply within 1 minute, from the knowledge base or a handoff message | Staff responder if handed off |
| Call to (510) 303-4869 | Voice | Voicemail with transcription to the queue | Staff responder, callback within 1 business hour |
| Contact form (`/contact`) | Form submit | Automated email acknowledgment | Staff responder |
| Newsletter (footer) | Form submit | Automated welcome email, double opt-in before the first send | None (marketing) |
| Reviews form (`/reviews`) | Form submit | Automated email thanking the reviewer. Review goes to staff for approval. | Staff responder |
| Email to the club | Email | Automated acknowledgment | Staff responder |

Every channel writes to **one lead record** (Section 4). No channel keeps its own inbox.

## 4. Lead record (the system of record for leads)

Fields, in the order a staff member needs them:

1. Lead ID (`uwc_lead_id`), source form or channel, first-touch page and UTM
2. Name, parent or guardian name, phone (E.164), email (if given)
3. Program or athlete type, preferred class day, self-reported source
4. Consent: SMS opt-in status, disclosure version, timestamp, media release status
5. Stage (Section 5 of `revops_lead_vetting.md`): Lead, Contacted, Trial booked, Trial attended, Member, Lost
6. Owner and first-response time (set automatically)
7. Conversation log (messages, transcript, handoff reason, knowledge-base IDs used)
8. Next action and due time
9. Lost reason code (when Lost)

Lead store: see Section 9 (tools). Until the tool is chosen, use a single shared sheet with these columns.

## 5. Automations

Each flow lists its trigger, timing, actions, and exit.

**A. New lead (any form)**
- Trigger: form submitted.
- Within 1 minute: create the lead record. Send the automated email acknowledgment. If SMS consent is on and the sender is live, send the confirmation text (B).
- Alert: push and email to the staff queue, plus a copy to Naweed.
- Timer: first contact due within 1 business hour during open hours. Outside hours, due 9:00 AM the next open day.
- Escalate: if the timer runs out, alert the backup owner (Naweed, by phone alert).
- Exit: stage moves to Contacted.

**B. Consent confirmation text** (only after SMS opt-in, and only once the sender is registered)
- Content: "United Wrestling Club: thanks, [first name]. Your 3-Day Mat Pass request is in. Suite C, 30139 Industrial Pkwy SW, Hayward. Reply with questions. Reply STOP to stop texts."
- Not sent from a personal number. Not sent as Naweed.

**C. Inbound text**
- Keyword handling first: STOP, START, HELP are handled by the SMS platform exactly as required by carrier rules.
- Otherwise the responder classifies the message:
  - **FAQ match** (the knowledge base has a Verified entry for it): reply with that entry, up to two messages, and log the KB ID.
  - **Escalation category** (Section B of the knowledge base): hand off at once. Reply: "Thanks, a team member will reply during open hours. For an emergency, call 911."
  - **Unclear or no match:** ask one clarifying question. If still unclear, hand off.
- Never more than two automated messages in a row without a human, in the same conversation.
- Handoff: staff gets the full thread, the lead record, and the reason.

**D. Inbound call**
- Voicemail with transcription (platform or carrier feature, to be chosen) into the queue.
- Callback due within 1 business hour during open hours.
- No AI voice in version 1.

**E. Trial lifecycle (consented contacts only)**
- Trial booked: confirmation text and email with date, time, class, and arrival details.
- Day before: reminder text.
- Morning of: reminder text with the Suite C entrance note.
- Day after: thank-you text, plus the WrestlingIQ enrollment link with `ref_id` (the existing attribution pattern).
- No-show: one automated reschedule text, then a staff call. After 5 days with no reply, Lost, reason "no response".

**F. Non-response**
- Two automated follow-ups over 5 days, by the channel the lead chose.
- Then Lost, reason "no response". The lead can re-enter by any channel.

## 6. Knowledge base rules

- **Source of answers:** only entries marked Verified or Client-confirmed in `discovery/knowledge_base/uwc_kb_v1.md`.
- **Change control:** Naweed approves each fact. The staff responder changes an entry only with approval. Each entry carries a last-verified date.
- **Refusal rule:** if no entry fits, hand off. Never guess a price, a time, or a policy.
- **Testing before launch:** 40 scripted questions (30 FAQ, 10 escalation). Pass means: correct answer, or handoff, every time. No answer with a made-up fact.
- **Monitoring:** every automated reply logs the KB ID. Weekly, staff reviews a sample of 20 and any handoff with a reason code of "unclear".
- **Publishing:** the Verified subset is the source for `llms.txt`, so public and private answers stay the same.

## 7. Escalation matrix

| Category | Route | Response time |
|---|---|---|
| Medical, injury, allergy | Staff immediately, Naweed alerted. Parent told to call 911 for emergencies. | Immediate |
| Minors: safety, pickup, custody, bullying | Naweed by phone, staff | Same day |
| Refund, billing, cancellation | Staff. Naweed decides. | Within 1 business day |
| Complaint about coach, class, facility | Naweed | Within 1 business day |
| Photo or media removal | Staff | Within 2 business days |
| Press, sponsorship, corporate clinic, partnership | Contact form, then staff | Within 2 business days |
| Anything unanswered | Staff, then Naweed | Within 1 business hour during open hours |

## 8. Responder rules

- **Identity:** "This is the United Wrestling Club automated assistant. A team member is available during open hours." Disclose at the first reply.
- **Tone:** plain, warm, and direct. Short messages. Brand voice from `PRODUCT.md`.
- **Length:** no more than two automated messages in a row. No long answers by text.
- **Language:** English in version 1. Decision needed on Spanish (Section 10).
- **Hours:** automated replies run 24 hours. Handoffs wait for open hours, and the parent is told when to expect a reply.
- **Never:** give medical advice, promise a price, discount, free class, or spot. Ask for payment details. Share another family's information.

## 9. Compliance

- **A2P 10DLC registration** is required before any automated SMS. The discovery playbook says approval takes 1 to 5 business days after submission. Nothing automated is sent until it is approved.
- **Consent:** SMS only to people who opted in, with the disclosure version and time stored. The confirmation text is the first automated message.
- **STOP and HELP** are honored at once. Opt-out is final until the parent opts back in.
- **Quiet hours:** no marketing text before 8:00 AM or after 9:00 PM in the parent's local time. Reminders are transactional and still follow these hours.
- **Disclosure:** the responder identifies itself as automated.
- **Minors:** store the minimum about a child. Parent or guardian is the contact. No child details in analytics.
- **Retention:** the privacy page and retention period are not yet written (KB-22). Required before launch.
- **Privacy and terms pages** (`/privacy`, `/terms`) are required by the playbook and are not built.

## 10. Tools (categories, not vendors yet)

| Need | Options (to compare) | Notes |
|---|---|---|
| SMS sending and inbound, with 10DLC | SMS platforms that support A2P registration and keyword handling | Discovery estimates about $1.50 to $2.00 a month for the registry fee. Per-message fees to be quoted. |
| Form to automation | Zapier, Make, or the SMS platform's own connector | Connects Formspree submissions to the lead record and the queue |
| Lead record | A shared sheet now. Later: WrestlingIQ prospects, if the API can create them. | wiq-cli README lists `prospects create`. Research preview. |
| Responder | A rules engine for FAQ and keywords. A language model only if it is limited to the knowledge base and refuses anything outside it. | Start with rules. Add a model after the 40-question test passes. |
| Voicemail transcription | Phone-system feature or the SMS platform | Confirm what the (510) 303-4869 line supports |

No vendor is selected. Choose after Section 10 decisions.

## 11. Build order

**P0: before launch (no SMS sender needed)**
1. Change the copy: remove "Text (510) 303-4869 to confirm" from the homepage schedule. Replace the consent promise on the trial form. Remove "SMS Status: Opted In" until texts can be sent.
2. Email acknowledgment on every form (needs an email field on the trial form, decision 3).
3. Lead record (shared sheet) with the Section 4 fields.
4. Staff queue alerts to Naweed and the staff responder.
5. Knowledge base v1 approved by Naweed (the verify items in the table).
6. Escalation matrix and the responder script, written down.
7. Voicemail routine for the (510) 303-4869 line.

**P1: after the 10DLC approval**
8. Confirmation texts after opt-in.
9. Trial reminders and the thank-you text with the WrestlingIQ link.
10. Non-response follow-ups.

**P2: after P1 is stable**
11. Inbound text responder with FAQ matching, handoff, and the 40-question test.
12. Publish the Verified subset as `llms.txt`.

**P3: later**
13. Sync to WrestlingIQ prospects, if the API supports it.
14. Review requests to members (playbook Sequence 4).

## 12. Metrics

| Metric | Target | Source |
|---|---|---|
| Time to first automated reply | Under 1 minute | Lead record |
| Time to first human contact, open hours | Under 1 business hour | Lead record |
| Share of texts answered without a human | Set after 30 days | Conversation log |
| Handoffs by reason | Trend weekly | Conversation log |
| Leads to trial booked | Set after 30 days | Lead record |
| Trial show-up rate | Set after 30 days | Lead record |
| Trial to member (WrestlingIQ) | Set after 60 days | WrestlingIQ roster |

## 13. Risks

- **Wrong answer to a parent.** Mitigation: knowledge base only, the 40-question test, weekly review.
- **Texts to people who did not opt in.** Mitigation: consent gate on every automated send.
- **Staff overload on the queue.** Mitigation: alert timers, backup owner, and a daily count of open leads.
- **The number is still advertised as a text line before the system is ready.** Mitigation: P0 copy change.
- **Carrier blocks the number.** Mitigation: registration before launch. Email and form still work.

## 14. Decisions needed

1. **Staff responder:** who is the named person for the queue, and what hours?
2. **Backup owner:** when the staff responder is out, does Naweed take alerts by phone, or someone else?
3. **Email on the trial form:** required, or optional? Required gives an acknowledgment and better roster matching.
4. **Spanish** for automated replies in version 1?
5. **Automated assistant:** approved by Naweed and the client? It answers texts within the rules above.
6. **SMS platform and budget:** approve a shortlist to compare.
7. **Privacy and terms pages:** who writes the retention policy?
