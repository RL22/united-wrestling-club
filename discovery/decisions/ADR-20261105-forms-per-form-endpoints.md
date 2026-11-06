# ADR-20261105-forms-per-form-endpoints: One Formspree endpoint per form, fail closed

- **Date:** 2026-11-05
- **Status:** Approved (pre-launch: live submissions not yet verified)
- **Scope:** Architecture · Compliance · UX

## Context & Problem
Every form posted to one legacy Formspree endpoint in an old account. The attribution script hard-coded that endpoint. Failed POSTs still showed a success message, so a lost lead looked like a sent one.

## Approved Solution
1. **One endpoint per form** in `FORM_ENDPOINTS` (`assets/js/uwc-attribution.js`): `trial_pass` (homepage modal and `/register`), `contact`, `newsletter`, `review`. Endpoints live in the new Formspree account.
2. **Each submission carries** `form_name` and `route`, plus the existing attribution and consent fields.
3. **Fail closed.** Success shows only on a 2xx response. Failure shows the front-desk number and keeps the form filled. Forms with no endpoint report "not connected" and send nothing.
4. **Media release** is a checkbox on the trial form and `/register`, default checked, opt-out.
5. **SMS consent** wording and the STOP/HELP disclosure are unchanged.
6. **Reviews** send the text and rating without photos. Photos are not transmitted.
7. **Cache busting:** script and stylesheet URLs carry a version query string.

## Alternatives Rejected
1. **One shared endpoint with routing only:** rejected. Per-form endpoints make each inbox and its notifications separate.
2. **Keep silent success on failure:** rejected. Hides lost leads.
3. **Send review photos through Formspree now:** deferred. Needs a file-upload plan and a privacy check for minors' photos.

## Impacted Files
- `assets/js/uwc-attribution.js`
- `v01/index.html`
- `register/index.html`
- `contact/index.html`
- `reviews/index.html`
- `discovery/site/forms_map_full_sitemap.md`
