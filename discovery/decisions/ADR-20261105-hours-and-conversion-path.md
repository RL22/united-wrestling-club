# ADR-20261105-hours-and-conversion-path: Club hours and modal-first conversion

- **Date:** 2026-11-05
- **Status:** Approved (hours confirmed by the client; Google listing still open)
- **Scope:** Commercial · UX

## Context & Problem
Club hours changed to 6 AM weekday opening. The Google Business Profile still shows 5 PM. The trial path opens a native modal on every conversion trigger, and its fine print previously said the form went to WrestlingIQ.

## Approved Solution
1. **Hours:** Monday to Friday 6:00 AM to 10:00 PM. Saturday 10:00 AM to 12:00 PM (open mat). Sunday closed. Used on the homepage JSON-LD, footer, and `/contact`.
2. **Conversion path:** every conversion trigger opens the native $15 Mat Pass modal, per PRODUCT.md. `/register` offers the same form as a full page.
3. **WrestlingIQ** hosts the waiver and checkout only. The trial form posts to our Formspree endpoint, and the copy says so.
4. **Open:** Google Business Profile hours must be updated by Naweed before launch.

## Alternatives Rejected
1. **Keep 5 PM weekday opening:** rejected. The client confirmed 6 AM.
2. **Send every CTA to WrestlingIQ:** rejected. PRODUCT.md calls for capturing the lead first.
3. **Inline form on every page instead of the modal:** deferred. The modal stays, with `/register` as the non-modal version.

## Impacted Files
- `v01/index.html` (hours JSON-LD, footer, trial modal fine print)
- `contact/index.html`
- `register/index.html`
- `PRODUCT.md`
