# United Wrestling Club (UWC): Digital Growth Platform

> **Client:** United Wrestling Club, Hayward, CA
> **Sanctioning:** USA Wrestling Regional Training Center (RTC #513)
> **Address:** 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544
> **Phone:** (510) 303-4869
> **Production:** https://united-wrestling-club.vercel.app (Vercel project `united-wrestling-club`, live since 2026-11-05)
> **Custom domain:** unitedwrestlingclub.com is still on the old host. The cutover is pending (ADR-20261103; addendum in ADR-20261105-public-preview-github-pages)
> **Staging:** retired 2026-11-05. The public repo is private and GitHub Pages is off.

---

## 1. Overview

United Wrestling Club is Northern California's Olympic and Folkstyle wrestling academy. It was founded by Karim Zemaryalai, a Dagestani tournament medalist. The 1980 Olympic wording is pending Karim's confirmation (the US boycotted the 1980 Moscow Games). Head Coach Naweed Zemaryalai runs the program.

This repository is the **internal working repo**. It holds the site files and everything behind them: discovery research, call notes, marketing plans, the portal, and ADRs. Only the site files are published. See Section 6.

---

## 2. Site Pages

| Page | Source file | Status | Notes |
| :--- | :--- | :--- | :--- |
| `/` homepage | `v01/index.html` | Working (flagship) | Hero, classes, schedule, coaches, testimonials, pricing, FAQ, CTA, footer with newsletter, trial modal |
| `/reviews/` | `reviews/index.html` | Working | Filter tabs, testimonial cards, review submission, copy-and-post dialog |
| `/register/` | `register/index.html` | Working | $15 3-Day Mat Pass as a full page (trial form) |
| `/contact/` | `contact/index.html` | Working | Address, hours, contact form |
| `/submit-review/` | `submit-review/index.html` | Redirect | Sends visitors to `/reviews/` |
| Shared stylesheet | `assets/css/uwc.css` | Source of tokens and components | Every page links it. No page carries its own `<style>`. |
| Shared script | `assets/js/uwc-attribution.js` | Source of form endpoints | `FORM_ENDPOINTS` holds one Formspree endpoint per form |

Concept folders kept for reference, not part of the site: `v02/`, `v03/`, `v04/`. The root `index.html` is the internal executive pitch deck. It is not the public homepage.

Planned routes not yet built (32-route sitemap): see `discovery/website_rebuild_spec.md` and `discovery/forms_map_full_sitemap.md`.

---

## 3. Facility and Commercial Facts (as shown on the site)

- **Hours:** Monday to Friday 6:00 AM to 10:00 PM. Saturday 10:00 AM to 12:00 PM (open mat). Sunday closed. Google Business Profile still lists 5 PM weekday closing (open item).
- **Mat footprint:** about 3,000 sq ft of Dollamur mats. Sanitized twice a day.
- **Coaching ratio:** 1:6 (open fact check with Naweed).
- **Pricing:**
  - $15 3-Day Mat Pass: three consecutive practices, equipment fitting, and assessment. Booked through the trial form.
  - $139.99 per month Unlimited: month to month, no contract, no cancellation fee.
  - $15 single drop-in: one practice or the Saturday open mat.

---

## 4. Decision Records

Index: [`discovery/decisions/INDEX.md`](discovery/decisions/INDEX.md) (also reachable as `docs/adr/`).

- [ADR-20261102-concept-consolidation](discovery/decisions/ADR-20261102-concept-consolidation-and-v04-flagship.md): concepts consolidated, V04 as flagship.
- [ADR-20261102-facility-coaching-invariants](discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md): facility and coaching facts.
- [ADR-20261102-branded-reviews-engine](discovery/decisions/ADR-20261102-branded-reviews-and-submission-engine.md): reviews hub and submission engine.
- [ADR-20261102-commercial-pricing-pif](discovery/decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md): pricing and seasonal PIF promotions.
- [ADR-20261103-hosting-on-vercel](discovery/decisions/ADR-20261103-hosting-on-vercel.md): production on Vercel, DNS in Route 53.
- [ADR-20261104-internal-public-repo-split](discovery/decisions/ADR-20261104-internal-public-repo-split.md): private internal repo, site-only public repo.
- [ADR-20261104-review-content-verbatim](discovery/decisions/ADR-20261104-review-content-verbatim.md): reviews stay verbatim, no invented details.
- [ADR-20261105-design-system](discovery/decisions/ADR-20261105-design-system.md): one stylesheet, brand tokens, banned patterns.
- [ADR-20261105-forms-per-form-endpoints](discovery/decisions/ADR-20261105-forms-per-form-endpoints.md): one Formspree endpoint per form, fail closed.
- [ADR-20261105-hours-and-conversion-path](discovery/decisions/ADR-20261105-hours-and-conversion-path.md): hours and modal-first conversion.
- [ADR-20261105-public-preview-github-pages](discovery/decisions/ADR-20261105-public-preview-github-pages.md): GitHub Pages was staging during the client revision. Production moved to Vercel early on 2026-11-05 (see the addendum).

Design spec: [`DESIGN.md`](DESIGN.md). Product context: [`PRODUCT.md`](PRODUCT.md).

---

## 5. Repository Structure

```text
.
├── v01/                      # Homepage (flagship site page)
├── reviews/                  # /reviews/ page
├── register/                 # /register/ page (trial pass)
├── contact/                  # /contact/ page
├── submit-review/            # Redirect to /reviews/
├── assets/
│   ├── css/uwc.css           # Shared tokens and components
│   └── js/uwc-attribution.js # Attribution, consent fields, Formspree endpoints
├── live_site_content/        # Logos and images from the original site
├── video_assets/             # Hero loop, stills, cutouts
├── unsplash-grunge-001.jpg   # CTA background
├── scripts/
│   ├── check_site.py         # Static site check (HTML and local references)
│   ├── generate_edc_graphics.py
│   └── setup_multiversion.py
├── discovery/                # Client research, audits, call notes (internal only)
│   ├── decisions/            # ADRs and INDEX.md
│   ├── forms_map_full_sitemap.md
│   └── website_rebuild_spec.md
├── marketing-plan/           # Marketing plan and playbooks (internal only)
├── portal/                   # Executive portal (internal only)
├── v02/ v03/ v04/            # Concept folders (reference only)
├── index.html                # Internal executive pitch deck (not published)
├── DESIGN.md                 # Design spec
├── PRODUCT.md                # Product context
├── todos.md                  # Ranked backlog
└── docs/adr                  # Symlink to discovery/decisions
```

---

## 6. Running and Publishing

### Run locally

No build step. Serve the repo root and open the pages:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/v01/index.html (homepage), `/reviews/index.html`, `/register/index.html`, and `/contact/index.html`.

Environment variables: none. Formspree endpoints are set in `FORM_ENDPOINTS` in `assets/js/uwc-attribution.js`. Endpoint IDs are public form IDs, not secrets.

### Publish to production (Vercel, manual)

Production is the Vercel project `united-wrestling-club` (Sprintz team). The public GitHub repo is private and GitHub Pages is off, so it is no longer a publish target. Publishing deploys a clean copy of the site files, never the working repo:

1. Run `python3 scripts/check_site.py` and fix anything it reports.
2. In a scratch folder outside this repo, create `united-wrestling-club/`. Copy `assets/`, `reviews/`, `register/`, `contact/`, `about/`, `submit-review/`, and `unsplash-grunge-001.jpg` into it. Copy only the `video_assets/` and `live_site_content/` files the pages reference. Do not copy `assets/img/gbp/`: those photos are not cleared for publication.
3. Write the root `index.html` from `v01/index.html` with the `../` path prefixes stripped. The one-off used so far is `re.subn(r'(["\'(=\s])\.\./', r'\1', src)`.
4. Check that every local `src`, `href`, and CSS `url()` in the copy resolves. Nothing should be missing.
5. From the scratch folder, run `vercel deploy --prod --yes --name united-wrestling-club`. Then check that `/`, `/reviews/`, `/register/`, `/contact/`, and `/about/` return 200.

Open media question: the program card photos of minors are live in production. See `todos.md`.

Nothing in `discovery/`, `marketing-plan/`, `portal/`, or the concept folders is published.

---

## 7. Verification

```bash
# Site pages: unclosed tags, missing local links and images, missing CSS url()
python3 scripts/check_site.py

# Git state: only intentional changes
git status --porcelain
```

Open items and the backlog are in [`todos.md`](todos.md).
