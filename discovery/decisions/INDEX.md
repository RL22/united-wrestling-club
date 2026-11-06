# Architectural & Commercial Decision Records (ADR) Index

| ADR ID | Date | Scope | Title | Status |
| :--- | :--- | :--- | :--- | :--- |
| [`ADR-20261102-concept-consolidation`](ADR-20261102-concept-consolidation-and-v04-flagship.md) | 2026-11-02 | UX / Architecture | Production Concept Consolidation & V04 Flagship Selection | Approved |
| [`ADR-20261102-facility-coaching-invariants`](ADR-20261102-facility-and-coaching-invariants.md) | 2026-11-02 | Commercial / Content | Physical Facility Footprint & Coaching Pedigree Invariants | Approved |
| [`ADR-20261102-branded-reviews-engine`](ADR-20261102-branded-reviews-and-submission-engine.md) | 2026-11-02 | Architecture / SEO | Branded Reviews Hub & First-Party Review Submission Engine | Approved |
| [`ADR-20261102-commercial-pricing-pif`](ADR-20261102-commercial-pricing-and-pif-promotions.md) | 2026-11-02 | Commercial / Policy | Commercial Pricing Strategy & Seasonal Paid-In-Full (PIF) Promotions | Approved |
| [`ADR-20261103-hosting-on-vercel`](ADR-20261103-hosting-on-vercel.md) | 2026-11-03 | Architecture / SEO | Production Hosting on Vercel (not GitHub Pages), DNS Stays in Route 53 | Approved (Vercel production live at vercel.app since 2026-11-05; domain cutover pending) |
| [`ADR-20261104-internal-public-repo-split`](ADR-20261104-internal-public-repo-split.md) | 2026-11-04 | Architecture / Compliance | Private internal repo; site-only public repo | Approved |
| [`ADR-20261104-review-content-verbatim`](ADR-20261104-review-content-verbatim.md) | 2026-11-04 | Compliance / UX | Reviews stay verbatim; no invented headlines or details | Approved |
| [`ADR-20261105-design-system`](ADR-20261105-design-system.md) | 2026-11-05 | UX / Architecture | One stylesheet, brand tokens, banned patterns | Approved |
| [`ADR-20261105-forms-per-form-endpoints`](ADR-20261105-forms-per-form-endpoints.md) | 2026-11-05 | Architecture / Compliance | One Formspree endpoint per form; fail closed | Approved (live submissions unverified) |
| [`ADR-20261105-hours-and-conversion-path`](ADR-20261105-hours-and-conversion-path.md) | 2026-11-05 | Commercial / UX | Club hours and modal-first conversion path | Approved (Google listing hours open) |
| [`ADR-20261105-public-preview-github-pages`](ADR-20261105-public-preview-github-pages.md) | 2026-11-05 | Architecture / SEO | GitHub Pages is staging during client revision; Vercel is production at launch | Approved; amended 2026-11-05 (production moved early, GitHub Pages off) |
| [`ADR-20261105-lead-response-ownership`](ADR-20261105-lead-response-ownership.md) | 2026-11-05 | UX / Operations / Compliance | Naweed does not text leads; automated responder with knowledge base; staff handoff | Approved (design Proposed) |
| [`ADR-20261105-no-crm-this-year`](ADR-20261105-no-crm-this-year.md) | 2026-11-05 | Architecture / Operations | No CRM this year; shared lead record and WrestlingIQ | Approved |
| [`ADR-20261106-astro-design-system`](ADR-20261106-astro-design-system.md) | 2026-11-06 | UX / Architecture | Astro file map, one-selector-one-file, scoped styles for section-only rules; amends ADR-20261105-design-system item 1 | Approved (addendum 2026-11-05: production deploys `site/dist/`) |
