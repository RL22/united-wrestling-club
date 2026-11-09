# United Wrestling Club (UWC): Digital Growth Platform

> **Client:** United Wrestling Club, Hayward, CA
> **Sanctioning:** USA Wrestling Regional Training Center (RTC #513)
> **Address:** 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544
> **Phone:** (510) 303-4869
> **Production:** none connected. Both Vercel projects (`site`, `united-wrestling-club`) were deleted by the owner on 2026-11-07. The site has not been re-linked and is not live at a new URL.
> **Public site repo:** https://github.com/RL22/united-wrestling-club (public; one clean commit, site-only). Search indexing is off until launch (`site/src/data/indexing.ts`, `LAUNCHED = false`; ADR-20261107-public-site-repo-and-noindex).
> **Custom domain:** unitedwrestlingclub.com is still on the old host. The cutover is pending (ADR-20261103; amended by ADR-20261107).
> **Internal repo:** `RL22/united-wrestling-club-internal` was deleted by the owner on 2026-11-07. The local `origin` remote still points at it and needs re-pointing.

---

## 1. Overview

United Wrestling Club is Northern California's Olympic and Folkstyle wrestling academy. It was founded by Karim Zemaryalai, a Dagestani tournament medalist. The 1980 Olympic wording is pending Karim's confirmation (the US boycotted the 1980 Moscow Games). Head Coach Naweed Zemaryalai runs the program.

This repository is the **internal working repo** on this machine. It holds the Astro site in `site/`, the archived pre-rebuild pages (`discovery/archive/legacy-site/`), discovery research, call notes, marketing plans, and ADRs. Only the contents of `site/` are published, to the public site repo above. See Section 6.

---

## 2. Site (Astro, `site/`)

The published site is an Astro 7 static build (`site/astro.config.mjs`: `output: 'static'`, `trailingSlash: 'always'`). Each route is one file in `site/src/pages/`. The build emits 21 pages.

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
| `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/llms-full.txt` | `site/src/pages/*.ts` |

Shared pieces:

- **Styles:** `site/src/styles/` (tokens, base, buttons, shell, sections, cards, forms, overlays, disclosure), imported by `global.css`. Section-only rules are scoped `<style>` blocks in components (ADR-20261106).
- **Components:** `site/src/components/` grouped as `shell/`, `home/`, `ui/`, `forms/`, `templates/`, `pages/`.
- **Content data:** `site/src/data/` (facts, schedule, programs, FAQs, reviews, nav, routes, JSON-LD).
- **Forms:** one Formspree endpoint per form (trial, contact, newsletter, review). Endpoints live in `site/public/assets/js/uwc-attribution.js` and in the trial form's `action` (ADR-20261105-forms-per-form-endpoints).
- **Routes not built:** `site/src/data/routes.ts` lists each omitted route with the owner decision it waits on. The 32-route sitemap is in `discovery/site/website_rebuild_spec.md` and `discovery/site/forms_map_full_sitemap.md`.

**Legacy pages (archived):** the pre-rebuild static pages, concept folders (v01 to v04), the old Next.js snapshot, and the legacy checker moved to `discovery/archive/legacy-site/`. None are deployed. The Astro build in `site/dist/` is the only output that gets published.

- **Search indexing:** `site/src/data/indexing.ts` exports `LAUNCHED = false`. While false, every page is `noindex, follow`, `robots.txt` has no Sitemap line, and `sitemap.xml` lists no URLs. `llms.txt` is not gated yet (open item in `todos.md`).
- **Sambo (D3):** built, but held from the live site until the owner approves publishing. Staging preview only.


---

## 3. Facility and Commercial Facts (as shown on the site)

- **Hours:** Monday to Friday 6:00 AM to 10:00 PM. Saturday 10:00 AM to 12:00 PM (open mat). Sunday closed. The Saturday 8:00 to 10:00 AM gi jiu-jitsu row is shown (D1, approved 2026-11-07). One open item remains in `todos.md`: Google Business Profile still lists a 5 PM weekday closing.
- **Mat footprint:** 3,800 sq ft of seamless Dollamur mats (D9, approved 2026-11-07, matches OC-11). Sanitized twice a day.
- **Coaching ratio:** 1:6 (open fact check with Naweed).
- **Pricing:**
  - $15 3-Day Mat Pass: three consecutive practices, equipment fitting, and assessment. Booked through the trial form.
  - $139.99 per month Unlimited: month to month, no contract, no cancellation fee.
  - $15 single drop-in: one practice or the Saturday open mat.
  - **Conflict:** the FAQ says monthly plans range from $89.99 to $150.00, while the hero, pricing section, nav, and JSON-LD show $139.99. The owner has not decided which figure leads. See `todos.md`.

---

## 4. Decision Records

Index: [`discovery/decisions/INDEX.md`](discovery/decisions/INDEX.md) (the `docs/adr/` symlink was removed on 2026-11-06).

- [ADR-20261102-concept-consolidation](discovery/decisions/ADR-20261102-concept-consolidation-and-v04-flagship.md): concepts consolidated, V04 as flagship.
- [ADR-20261102-facility-coaching-invariants](discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md): facility and coaching facts.
- [ADR-20261102-branded-reviews-engine](discovery/decisions/ADR-20261102-branded-reviews-and-submission-engine.md): reviews hub and submission engine.
- [ADR-20261102-commercial-pricing-pif](discovery/decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md): pricing and seasonal PIF promotions.
- [ADR-20261103-hosting-on-vercel](discovery/decisions/ADR-20261103-hosting-on-vercel.md): production on Vercel, DNS in Route 53. Amended 2026-11-07: both Vercel projects deleted; re-link pending.
- [ADR-20261104-internal-public-repo-split](discovery/decisions/ADR-20261104-internal-public-repo-split.md): private internal repo, site-only public repo. Amended 2026-11-07: internal repo deleted; public repo is a clean single-commit import.
- [ADR-20261104-review-content-verbatim](discovery/decisions/ADR-20261104-review-content-verbatim.md): reviews stay verbatim, no invented details.
- [ADR-20261105-design-system](discovery/decisions/ADR-20261105-design-system.md): one stylesheet, brand tokens, banned patterns (item 1 amended by ADR-20261106).
- [ADR-20261105-forms-per-form-endpoints](discovery/decisions/ADR-20261105-forms-per-form-endpoints.md): one Formspree endpoint per form, fail closed.
- [ADR-20261105-hours-and-conversion-path](discovery/decisions/ADR-20261105-hours-and-conversion-path.md): hours and modal-first conversion.
- [ADR-20261105-public-preview-github-pages](discovery/decisions/ADR-20261105-public-preview-github-pages.md): GitHub Pages was staging during the client revision. Production moved to Vercel early on 2026-11-05 (addendum).
- [ADR-20261106-astro-design-system](discovery/decisions/ADR-20261106-astro-design-system.md): Astro file layout, one-selector-one-file, scoped styles for section-only rules. Addendum: production deploys `site/dist/`.
- [ADR-20261107-public-site-repo-and-noindex](discovery/decisions/ADR-20261107-public-site-repo-and-noindex.md): site-only public repo; `LAUNCHED` switch keeps every page noindex and the sitemap empty until launch.
- [ADR-20261107-owner-decisions-d-items](discovery/decisions/ADR-20261107-owner-decisions-d-items.md): owner decisions on D1 to D20 (D10 copy pending confirmation).

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
├── discovery/                    # Client research, ledger, decisions (internal only)
│   ├── decisions/                # ADRs and INDEX.md
│   ├── ledger/                   # Claim ledger, topic router, owner decisions
│   └── archive/legacy-site/      # Archived pre-rebuild pages, concept folders, old snapshot
├── video_assets/                 # Source masters for media (not the shipped set; site/public has that)
├── DESIGN.md                     # Design spec
├── PRODUCT.md                    # Product context
├── todos.md                      # Ranked backlog
└── (archived internal folders: discovery/archive/legacy-site/marketing-plan, portal)
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

### Publishing status (2026-11-07)

No Vercel project is connected. The old production project was deleted, and a new one for `RL22/united-wrestling-club` has not been created. Do not run `vercel deploy --prod` until the owner approves a host and a launch date. Create the new project with its production branch set so that pushes to `main` never go live (ADR-20261107-public-site-repo-and-noindex).

The public repo holds the contents of `site/`, so it should be updated from a clean export, not from the working tree:

```bash
# 1. Build the site (Node >= 22.23.4)
cd site && mise exec node@26.13.0 -- npm run build

# 2. Gates, from the repo root
cd .. && python3 scripts/check_dist.py --final
bash scripts/copy_audit.sh site/dist

# 3. Confirm no unreleased media is in the output (must print nothing)
find site/dist -path '*gbp*'

# 4. Export the site folder for the public repo (no discovery, ADRs, or internal files)
git archive --format=tar --output=/path/outside/repo/uwc-site.tar HEAD:site
```

Do not add `assets/img/gbp/` to the output. Those photos are not cleared for publication.

**Open publishing risk:** `site/public/video_assets/cards/program-youth.jpg`, `program-varsity.jpg`, `program-adult.jpg`, and `program-openmat.jpg` are tracked in the public repo. Owner decision D5 accepted minors' imagery on the site, but it did not cover publishing the raw files on GitHub. Owner decided on 2026-11-08 to keep them in the public repo. Releases are still unconfirmed. See `todos.md`.

Nothing in `discovery/` or `discovery/archive/legacy-site/` is published.

---

## 7. Verification

```bash
# Astro build
cd site && npm run build && cd ..

# Built site: links, CSS url(), route status (exit 0 = clean)
python3 scripts/check_dist.py --final

# Copy rules on the built site (0 violations expected)
bash scripts/copy_audit.sh site/dist


# Git state: only intentional changes
git status --porcelain
```

Visual equivalence checks (`site/scripts/fingerprint.mjs`, `pixel-diff.mjs`, `check-home.sh`) compare a running dev server against the baselines in `site/tests/baselines/`. Baselines are git-ignored history. See ADR-20261106 for the method.

Open items and the backlog are in [`todos.md`](todos.md).
