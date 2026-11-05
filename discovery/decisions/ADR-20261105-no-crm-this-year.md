# ADR-20261105-no-crm-this-year: No CRM this year; leads live in a shared record, members in WrestlingIQ

- **Date:** 2026-11-05
- **Status:** Approved (client decision: B2B pipelines not this year)
- **Scope:** Architecture · Operations

## Context & Problem
The lead response design needs one lead record. Twenty (open-source CRM) was evaluated. It has no native SMS, requires self-hosting or a hosted plan, and would create a second record alongside WrestlingIQ. Corporate clinics, sponsors, and affiliate partners are the only B2B pipelines, and the client has said they are not this year.

## Approved Solution
1. **No CRM this year.** No Twenty, HubSpot, or similar system.
2. **Leads:** one shared lead record (sheet or Airtable), per `discovery/lead_response_system.md` section 4.
3. **Members and prospects:** WrestlingIQ. Check whether its prospects can be created by API. If yes, it becomes the lead record.
4. **Corporate, sponsor, and affiliate inquiries:** handled through `/contact` with a reason code, then staff, as in the escalation matrix.
5. **Revisit** in 12 months, or sooner if lead volume passes about 100 a month or a B2B pipeline is started.

## Alternatives Rejected
1. **Twenty now:** rejected. No native SMS, self-hosting load, and a second system of record.
2. **Hosted CRM for B2B only:** deferred. No pipeline to run this year.

## Impacted Files
- `discovery/lead_response_system.md` (section 10, tools)
- `discovery/revops_lead_vetting.md`
- `todos.md` (P4 corporate and affiliate items)
