# United Wrestling Club (UWC): Digital Growth Platform

> **Client:** United Wrestling Club, Hayward, CA
> **Sanctioning:** USA Wrestling Regional Training Center (RTC #513)
> **Address:** 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544
> **Phone:** (510) 303-4869
> **Production:** https://united-wrestling-club.vercel.app (Vercel project `united-wrestling-club`, Sprintz team). Serves the Astro build from `site/dist/`, deployed 2026-11-05.
> **Custom domain:** unitedwrestlingclub.com is still on the old host. The cutover is pending (ADR-20261103; addenda in ADR-20261105-public-preview-github-pages and ADR-20261106-astro-design-system).
> **Staging:** retired 2026-11-05. The public repo is private and GitHub Pages is off.

---

## 1. Overview

United Wrestling Club is Northern California's Olympic and Folkstyle wrestling academy. It was founded by Karim Zemaryalai, a Dagestani tournament medalist. The 1980 Olympic wording is pending Karim's confirmation (the US boycotted the 1980 Moscow Games). Head Coach Naweed Zemaryalai runs the program.

This repository is the **internal working repo**. It holds the Astro site in `site/`, the legacy static pages from before the rebuild, discovery research, call notes, marketing plans, the portal, and ADRs. Only the built site is published. See Section 6.

---

## 2. Site (Astro, `site/`)

The published site is an Astro 7 static build (`site/astro.config.mjs`: `output: 'static'`, `trailingSlash: 'always'`). Each route is one file in `site/src/pages/`. The build emits 22 pages, including the `/submit-review/` redirect.

| Route | Source file |
| :--- | :--- |
| `/` homepage | `site/src/pages/index.astro` |
| `/about/` | `site/src/pages/about.astro` |
| `/classes/` and eight class pages (`kid-wrestling`, `youth-wrestling`, `adult-wrestling`, `nogi-jiu-jitsu`, `gi-jiu-jitsu`, `boxing-fundamentals`, `open-mat`, `sambo`) | `site/src/pages/classes/` |
| `/pricing/`, `/schedule/`, `/faqs/`, `/rules/`, `/events/` | `site/src/pages/*.astro` |
| `/locations/` and `/locations/hayward-ca/` | `site/src/pages/locations/` |
| `/reviews/` | `site/src/pages/reviews.astro` |
| `/register/` ($15 3-Day Mat Pass, trial form) | `site/src/pages/register.astro` |
| `/contact/` | `site/src/pages/contact.astro` |
| `/submit-review/` (redirects to `/reviews/`) | `site/src/pages/submit-review.astro` |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/llms-full.txt` | `site/src/pages/*.ts` |

Shared pieces:

- **Styles:** `site/src/styles/` (tokens, base, buttons, shell, sections, cards, forms, overlays, disclosure), imported by `global.css`. Section-only rules are scoped `<style>` blocks in components (ADR-20261106).
- **Components:** `site/src/components/` grouped as `shell/`, `home/`, `ui/`, `forms/`, `templates/`, `pages/`.
- **Content data:** `site/src/data/` (facts, schedule, programs, FAQs, reviews, nav, routes, JSON-LD).
- **Forms:** one Formspree endpoint per form (trial, contact, newsletter, review). Endpoints live in `site/public/assets/js/uwc-attribution.js` and in the trial form's `action` (ADR-20261105-forms-per-form-endpoints).
- **Routes not built:** `site/src/data/routes.ts` lists each omitted route with the owner decision it waits on. The 32-route sitemap is in `discovery/website_rebuild_spec.md` and `discovery/forms_map_full_sitemap.md`.

**Legacy root pages (not deployed):** `v01/`, `reviews/`, `register/`, `contact/`, `about/`, `submit-review/`, and the root `assets/css/uwc.css`. They are the pre-rebuild static site. Keep them only as reference until the Astro site is final, then archive them under `discovery/`.

Concept folders kept for reference, not part of the site: `v02/`, `v03/`, `v04/`. The root `index.html` is the internal executive pitch deck. It is not the public homepage.

---

## 3. Facility and Commercial Facts (as shown on the site)

- **Hours:** Monday to Friday 6:00 AM to 10:00 PM. Saturday 10:00 AM to 12:00 PM (open mat). Sunday closed. Two open items, both in `todos.md`: `site/src/data/schedule.ts` holds a Saturday 8:00 to 10:00 AM gi row marked pending (D1), hidden on the live site unless `showPending` is set; and Google Business Profile still lists a 5 PM weekday closing.
- **Mat footprint:** about 3,000 sq ft of Dollamur mats. Sanitized twice a day.
- **Coaching ratio:** 1:6 (open fact check with Naweed).
- **Pricing:**
  - $15 3-Day Mat Pass: three consecutive practices, equipment fitting, and assessment. Booked through the trial form.
  - $139.99 per month Unlimited: month to month, no contract, no cancellation fee.
  - $15 single drop-in: one practice or the Saturday open mat.
  - **Conflict:** the FAQ says monthly plans range from $89.99 to $150.00, while the hero, pricing section, nav, and JSON-LD show $139.99. The owner has not decided which figure leads. See `todos.md`.

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
- [ADR-20261105-design-system](discovery/decisions/ADR-20261105-design-system.md): one stylesheet, brand tokens, banned patterns (item 1 amended by ADR-20261106).
- [ADR-20261105-forms-per-form-endpoints](discovery/decisions/ADR-20261105-forms-per-form-endpoints.md): one Formspree endpoint per form, fail closed.
- [ADR-20261105-hours-and-conversion-path](discovery/decisions/ADR-20261105-hours-and-conversion-path.md): hours and modal-first conversion.
- [ADR-20261105-public-preview-github-pages](discovery/decisions/ADR-20261105-public-preview-github-pages.md): GitHub Pages was staging during the client revision. Production moved to Vercel early on 2026-11-05 (addendum).
- [ADR-20261106-astro-design-system](discovery/decisions/ADR-20261106-astro-design-system.md): Astro file layout, one-selector-one-file, scoped styles for section-only rules. Addendum: production deploys `site/dist/`.

Design spec: [`DESIGN.md`](DESIGN.md) (section 13 covers the Astro system). Product context: [`PRODUCT.md`](PRODUCT.md).

---

## 5. Repository Structure

```text
.
├── site/                         # Astro site (the published site)
│   ├── astro.config.mjs
│   ├── src/
│   │   ├── pages/                # One file per route
│   │   ├── components/           # shell, home, ui, forms, templates, pages
│   │   ├── data/                 # Facts, schedule, programs, FAQs, routes
│   │   ├── layouts/              # Layout.astro, InteriorLayout.astro
│   │   └── styles/               # Shared CSS (tokens, base, components)
│   ├── public/                   # Static files that ship (publish allowlist)
│   ├── scripts/                  # CSS, fingerprint, pixel, and smoke checks
│   ├── tests/baselines/          # Visual baselines (git-ignored)
│   └── dist/                     # Build output (git-ignored, deployed)
├── scripts/
│   ├── check_dist.py             # Gate: built site links, CSS url(), route status
│   ├── copy_audit.py / .sh       # Gate: copy rules (allowlist: copy_audit_allow.txt)
│   └── check_site.py             # Legacy check for the root static pages
├── discovery/                    # Client research, audits, call notes (internal only)
│   ├── decisions/                # ADRs and INDEX.md
│   ├── forms_map_full_sitemap.md
│   └── website_rebuild_spec.md
├── assets/ live_site_content/ video_assets/ unsplash-grunge-001.jpg
│                                 # Legacy root media for the old static pages
├── v01/ reviews/ register/ contact/ about/ submit-review/
│                                 # Legacy root static pages (not deployed)
├── marketing-plan/               # Marketing plan and playbooks (internal only)
├── portal/                       # Executive portal (internal only)
├── v02/ v03/ v04/                # Concept folders (reference only)
├── index.html                    # Internal executive pitch deck (not published)
├── DESIGN.md                     # Design spec
├── PRODUCT.md                    # Product context
├── todos.md                      # Ranked backlog
└── docs/adr                      # Symlink to discovery/decisions
```

---

## 6. Running and Publishing

### Requirements

- Node `>=22.23.4` (`site/package.json` engines). The system Node on the build machine was 22.23.2, which fails the check. Builds in this repo ran on Node 26.13.0 through mise.
- Vercel CLI, logged in to the `sprintz` team (`vercel whoami`).

### Run locally

```bash
cd site
npm install
npm run dev
```

Then open http://localhost:4321 (Astro's default port). If the port is busy, Astro picks another one and prints it. With mise, prefix the commands with `mise exec node@26.13.0 --`.

Environment variables: none. Formspree endpoint IDs are public form IDs, not secrets.

### Publish to production (Vercel, manual)

Production is the Vercel project `united-wrestling-club`. Publishing deploys only the Astro build output, never the working repo:

```bash
# 1. Build the site (Node >= 22.23.4)
cd site && npm run build

# 2. Gates, from the repo root
cd .. && python3 scripts/check_dist.py --final
bash scripts/copy_audit.sh site/dist

# 3. Confirm no unreleased media is in the output (must print nothing)
find site/dist -path '*gbp*'

# 4. Deploy the build output
cd site/dist && vercel deploy --prod --yes --name united-wrestling-club --scope sprintz

# 5. Check the live routes (all should print 200)
for p in / /reviews/ /register/ /contact/ /about/ /classes/ /pricing/; do
  curl -s -o /dev/null -w "%{http_code} $p\n" "https://united-wrestling-club.vercel.app$p"
done
```

Do not add `assets/img/gbp/` to the output. Those photos are not cleared for publication. Program card photos of minors (`video_assets/cards/program-youth.jpg`, `program-varsity.jpg`) are live in production; see `todos.md`.

Nothing in `discovery/`, `marketing-plan/`, `portal/`, or the concept folders is published.

---

## 7. Verification

```bash
# Astro build
cd site && npm run build && cd ..

# Built site: links, CSS url(), route status (exit 0 = clean)
python3 scripts/check_dist.py --final

# Copy rules on the built site (0 violations expected)
bash scripts/copy_audit.sh site/dist

# Legacy root pages (not deployed; kept until archived)
python3 scripts/check_site.py

# Git state: only intentional changes
git status --porcelain
```

Visual equivalence checks (`site/scripts/fingerprint.mjs`, `pixel-diff.mjs`, `check-home.sh`) compare a running dev server against the baselines in `site/tests/baselines/`. Baselines are git-ignored history. See ADR-20261106 for the method.

Open items and the backlog are in [`todos.md`](todos.md).
