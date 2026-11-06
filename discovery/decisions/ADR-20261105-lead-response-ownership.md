# ADR-20261105-lead-response-ownership: Naweed does not answer leads by text

- **Date:** 2026-11-05
- **Status:** Approved (Naweed does not text leads). The response system design is Proposed in `discovery/strategy/lead_response_system.md`.
- **Scope:** UX · Operations · Compliance

## Context & Problem
The discovery plan and the SMS playbook assumed Coach Naweed would text new trial leads personally, from his number, with arrival details and follow-ups. Naweed has said he will not respond to people by text. The live homepage still says "Text (510) 303-4869 to confirm your first session", and the trial form's consent copy promises a confirmation text. No automated sender is connected.

## Approved Solution
1. **Naweed does not text leads.** He may take calls and step in personally on escalations (`discovery/client/naweed_discovery_questions.md` section 8).
2. **Text replies come from an automated responder** that answers only from the approved knowledge base (`discovery/knowledge_base/uwc_kb_v1.md`) and hands off to a named staff member when it cannot answer.
3. **Staff responder:** a named person covers calls, texts handed off by the responder, and new-lead follow-up during class time. Not yet named.
4. **Copy changes before launch:** "Text (510) 303-4869 to confirm" and the consent promise are replaced with wording that matches the system that will run.
5. **Messages are not sent from Naweed's personal number.** Automated messages are sent as United Wrestling Club.

## Alternatives Rejected
1. **Naweed texts leads personally:** rejected by Naweed.
2. **No texting at all, phone and email only:** rejected for now. The trial form's text confirmation and the parent's preference for text make it a core channel. Re-open if the 10DLC registration fails.
3. **Automated replies without a knowledge base:** rejected. Replies must come from approved facts only.

## Impacted Files
- `discovery/strategy/lead_response_system.md`
- `discovery/knowledge_base/uwc_kb_v1.md`
- `v01/index.html` (schedule line, trial consent copy)
- `discovery/strategy/uwc_sms_marketing_playbook.md` ("Coach Naweed" sender lines)
- `discovery/decisions/INDEX.md`
