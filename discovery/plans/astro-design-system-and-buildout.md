# Plan v4: Astro design system refactor and full-sitemap buildout

- **Date:** 2026-11-05 (v4 final, after skeptic reviews of v1 to v3)
- **Branch:** `astro-homepage` (Astro project in `site/`). Reference commit: `d78a5da`.
- **Status:** Plan only. Nothing here is built.
- **Executors:** Sonnet by default, Haiku for mechanical runs only. Single shared-file owner: `ds-lead` (Sonnet).

## 0. Scope and reading

"The remaining 32 pages" means every route in `discovery/website_rebuild_spec.md` section 5, plus `/reviews/` (route 33 in `discovery/forms_map_full_sitemap.md`). The Astro site must cover the sitemap without depending on the root static pages, so `/`, `/reviews/`, `/register/`, `/contact/`, `/about/` are ported into `site/`. `/submit-review/` stays a redirect page. Machine files (`robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`) are one extra group.

**D0, owner must confirm.** The user asked for all 32 routes. 15 cannot be written honestly from Verified KB facts, or need a form endpoint that does not exist (section 3, OMIT). The default is to **omit** them. They stay in `src/data/routes.ts` as `omitted` with a reason and an unlock decision. The owner confirms D0 before Phase 2, or names routes to build with the facts to support them.

Order: **Phase 0** baseline B0, **Phase 1** design system (DS-0 to DS-11, with baseline B1 after DS-0), **Phase 2** page groups in parallel, **Phase 3** integration.

Facts found while reading:
1. `site/astro.config.mjs` uses `build: { format: 'file' }` (emits `dist/reviews.html`); all links use trailing slashes. DS-1 fixes it.
2. `site/src/styles/global.css` differs from `assets/css/uwc.css`; `site/public/assets/css/uwc.css` is an unused copy.
3. Each section component has two scoped copies of its rules (first copy plus "Cascade parity" copy, both carrying `[data-astro-cid-*]`), and `global.css` holds a third.
4. Interior static pages share the homepage shell with `../#anchor` links and a skip link. The homepage has no skip link and no `<main>`.
5. Homepage copy that breaks KB rules: Safety section (3,000 sq ft, 2-inch foam, Wi-Fi), footer tagline ("Olympic", "state champions"), Karim's bio in `Coaches.astro` line 29 ("Medalist at the Ali Aliyev Tournament in Makhachkala, Dagestan. Karim brought Dagestani hand-fighting..."). `Testimonials.astro` lines 21 and 32 hold review excerpts joined by " … ", with em dashes; they are excerpts, not exact copies of the reviews page text.
6. Untracked Phase 0 files exist: `site/scripts/fingerprint.mjs`, `site/scripts/fingerprint-diff.mjs`, `site/tests/fingerprint.js`, `site/tests/baseline/homepage-{375,1248}.json`; `site/package.json` has `playwright ^1.65.0` (uncommitted). See 2.4.
7. KB-17 "5.0 across 42 reviews on Google" is **Client-confirmed**, not Verified. ADR-20261104 item 3 approved that figure for the reviews page.

---

## 1. Design system refactor (Phase 1)

`ds-lead` only. The `skeptic` agent reviews before Phase 2.

### 1.1 End-state files under `site/src/styles/` (after DS-5)

| File | Owns |
|---|---|
| `global.css` | ordered `@import` list only |
| `tokens.css` | `:root` primitives (`--ref-*`) and semantic tokens |
| `base.css` | focus ring, reduced-motion guard, reset, typography, `.container`, `.noise-bg`, `.visually-hidden`, `.skip-link` |
| `shell.css` | top bar, sticky nav, nav CTA, drawer and backdrop, brand lockup, shell classes, footer |
| `buttons.css` | `.btn` and variants, shared pill badge box |
| `sections.css` | `.section-block`, `.section-eyebrow`, `.section-title`, `.section-lead`, `.text-brand`, `.page-hero`, `.page-title` |
| `cards.css` | card slots used on 2+ pages: `.card-*`, `.testimonial-meta`, `.testimonial-text`, `.testimonial-stars`, `.testimonial-card`, `.testimonial-grid`, `.platform-card` |
| `forms.css` | form fields, `.tcpa-*`, `.form-status`, `.form-success`, `.newsletter-form`, `.contact-form` |
| `overlays.css` | `.modal-*`, dispatch dialog, `.redirect-card` |
| `disclosure.css` | tabs (`.schedule-tab*`, `.tab-list`, `.tab`) and accordion (`.faq-*`) |

Section-only rules (hero, creed, programs layout, lineage and coaches, pricing layout, testimonials layout, safety, CTA banner, reviews-only pieces) live only in their component's scoped `<style>`. **Rule: a selector lives in exactly one file, with every `@media` override for it, each override after its base rule.**

### 1.2 Components and data

| Path | Owns / props |
|---|---|
| `components/shell/SiteHeader.astro` | top bar, nav, drawer. `isHome`, `current`; off the homepage anchors become `/#programs`. Skip link (DS-8). |
| `components/shell/SiteFooter.astro` | footer, NAP, F6. `isHome`; links from `data/nav.ts`. |
| `components/shell/TrialModal.astro` | F1 modal via `forms/TrialForm.astro`; IDs unchanged (`trialModal`, `trialForm`, `v01-*`). |
| `components/shell/PageScripts.astro` | attribution, FAQ, modal, tabs, drawer; each block no-ops when its elements are absent. |
| `components/home/*.astro` | Hero, Programs, Schedule, Coaches, Pricing, Testimonials, Safety, Faq, CtaBanner. Markup unchanged except DS-0. `home/Schedule.astro` keeps today's static markup (5.6). |
| `components/ui/` | `Button` (`variant`, `href`, `trial`, `program`), `SectionHeader`, `PageHero` (`eyebrow`, `title`, `titleBrand`, `lead`, `compact`), `InfoCard` (existing `.card-*` slots), `FactList` (only from `data/facts.ts`; the only way any page shows hours), `ScheduleList` (`program`, `showPending` default `false`; no prose note), `CtaBanner`. |
| `components/forms/` | `TrialForm` (F1, F1a, F1b; `idPrefix`, `preset`, `sourceTag`, `variant`), `ConsentSms` (TCPA text verbatim from `TrialModal.astro` lines 58 to 66), `ConsentMedia` (lines 68 to 73, default checked), `ContactForm` (F2), `NewsletterForm` (F6), `ReviewForm` (F7), all ported verbatim. |
| `components/templates/ProgramPage.astro` | layout for every `/classes/*` page. |
| `layouts/Layout.astro` | `<head>`; props `title`, `description`, `path`, `jsonLd`, `noindex`. Homepage passes today's values. |
| `layouts/InteriorLayout.astro` | Layout + header + `<main id="main-content">` + CTA + footer + modal + scripts. |
| `data/facts.ts` | Verified KB values with IDs (01, 02, 03, 05, 06, 07, 08, 09, 10, 23). KB-17 Google figure stored separately as `reviewsGoogle` with `basis: "client-confirmed; ADR-20261104 item 3"`, usable only on `/reviews/` (5.10). |
| `data/schedule.ts` | rows with `program` and optional `pending: "D1"` (Saturday 8:00 to 10:00 AM gi row). |
| `data/programs.ts`, `faqs.ts` (four homepage FAQs verbatim), `media.ts` (image allowlist), `nav.ts`, `reviews.ts` (bodies verbatim from the `reviews/index.html` JSON-LD) | |
| `data/routes.ts` | every route: path, title, owning group, `status` (`built`, `planned`, `omitted`, `redirect`), reason. |

### 1.3 Deletions and the media-override rule

1. **Parity blocks** in 12 components (Hero, Programs, Schedule, Coaches, Pricing, Testimonials, Safety, Faq, CtaBanner, SiteHeader, SiteFooter, TrialModal): merge both copies into one block, keeping the parity value where they differ (it wins today). In `CtaBanner.astro` the copies are identical. A component that fails keeps its parity block and is reported with the failing property.
2. **Section rules leave `global.css` with their media overrides.** A base rule moved into scoped `<style>` (0,2,0) outranks a global override (0,1,0), so the override must move too, into the same `<style>`, inside the same `@media` condition, after the base rule. Overrides in the reference file (`git show d78a5da:site/src/styles/global.css`), checked against the file:

| Selector | Overrides in the reference global.css |
|---|---|
| `.programs-grid` | `@media (max-width: 1220px)` (~1992), `@media (max-width: 768px)` (~2210) |
| `.safety-grid` | `1100px` (~2019), `768px` (~2220) |
| `.safety-grid--two` | `720px` (~2458) only; its base rule is unconditional (~2444) and moves with it |
| `.lineage-layout`, `.lineage-frame img` | `960px` (~2034, ~2037) |
| `.pricing-grid` | `960px` (~2047), `768px` (~2225) |
| `.hero-section`, `.hero-container`, `.hero-content`, `.hero-body-block`, `.hero-title`, `.hero-subtitle`, `.hero-cta-group`, `.hero-cta-group .btn.btn-primary`, `.hero-video`, `.hero-grunge-overlay`, `.hero-scrim` | `768px` (~2114 to ~2197) |
| `.edc-motto-display` | `600px` (~2469) |

   The script in 1.4 finds the full list; this table is the known minimum. Overrides for selectors that stay global move into the same global file as their base.
3. **Scoped duplicates of shared primitives** are deleted once the shared file owns them: `.btn`, `.btn-text-full`, `.btn-text-mobile` (SiteHeader), `.newsletter-form` (SiteFooter), `.tcpa-consent-box`, `.tcpa-optout-note` (TrialModal), `.card-*` (Programs), `.testimonial-meta`, `.testimonial-text`, `.testimonial-stars` (Testimonials). If a scoped value differs and wins today, it becomes a scoped modifier or moves into the shared file first.
4. `site/public/assets/css/uwc.css` is deleted after `rg -n "assets/css/uwc.css" site/src` returns nothing.

### 1.4 `site/scripts/css-homes.mjs` (written in DS-2; run after DS-3, DS-4, DS-5 and in 6.6)

- **Reference:** `git show d78a5da:site/src/styles/global.css` (fixed commit, never `HEAD`).
- **Current CSS:** every file under `site/src/styles/` plus only the `<style>` blocks of `site/src/components/**/*.astro`.
- Parse with `postcss` and `postcss-selector-parser` (add both as dev dependencies). Compare **whole selectors**, normalized (whitespace collapsed, selector lists split on top-level commas), so `.btn` never matches `.btn-primary`.
- For each selector inside any `@media` block of the reference: (a) it appears, inside an equivalent `@media` condition, in exactly one current file; (b) that file also holds its base rule if the reference had one; (c) the override comes after the base rule in that file; (d) its declarations (property, value, `!important`) equal the reference override's declarations. Exit 1 on any failure, printing selector, files, and the differing declaration.
- Computed values at the sampled widths are also covered by the fingerprint (2.1); (d) covers widths between samples.

### 1.5 DS-2 slicing by anchors

`site/scripts/split-global-css.mjs` cuts `global.css` into 25 numbered files in source order. A slice starts at the `/* ====` line directly above its anchor title (or the comment line holding the anchor) and ends before the next slice. Each anchor must match exactly once.

| Slice (`styles/split/`) | Anchor | Slice | Anchor |
|---|---|---|---|
| `00-tokens` | start of file | `13-safety` | `FACILITY SAFETY & PARENT ASSURANCE BLOCK` |
| `01-base` | `/* Global focus` | `14-pricing` | `MEMBERSHIP & PRICING TRANSPARENCY` |
| `02-topbar` | `TOP ANNOUNCEMENT / INFINITE SCROLLING TRUST MARQUEE` | `15-faq` | `FAQ ACCORDION` |
| `03-nav` | `STICKY NAVIGATION WITH OFFICIAL EMBLEM` | `16-cta` | `PRE-FOOTER CALL TO ACTION BANNER` |
| `04-drawer` | `MOBILE MENU TOGGLE & ACCESSIBLE DRAWER OVERLAY` | `17-footer` | `COMPREHENSIVE FOOTER & LOCAL NAP` |
| `05-buttons` | `    /* Buttons */` | `18-modal` | `NATIVE 1-CLICK TRIAL MODAL` |
| `06-hero` | `HERO SECTION WITH 1080P VIDEO` | `19-responsive` | `/* Responsive Grid Controls to Prevent Layout Orphans` |
| `07-creed` | `EDC CREED SECTION` | `20-schedule-tabs` | `/* Schedule tabs (section tab nav)` |
| `08-coaches-grid` | `SECONDARY COACHING STAFF 4-COLUMN GRID` | `21-trim` | `/* Trim pass:` |
| `09-reviews-home` | `GOOGLE REVIEWS: feature review + ruled list` | `22-interior` | `INTERIOR-PAGE COMPONENTS (reviews and other pages)` |
| `10-headings` | `SECTION HEADINGS & UTILITIES` | `23-shell-classes` | `/* Shell classes (replace inline styles` |
| `11-programs` | `PROGRAM SILOS SECTION` | `24-forms` | `FORMS: status, success, and layouts` |
| `12-lineage` | `OLYMPIC PEDIGREE & COACHING MOAT SECTION` | | |

The script asserts that concatenating `00` to `24` reproduces the original byte for byte (`cmp`), then writes `global.css` as 25 `@import`s in order. Regrouping into the 1.1 files happens only in DS-4 and DS-5.

### 1.6 Tokens

No renames. New tokens only alias literals used in 2+ files (`rg -o "#[0-9a-fA-F]{3,8}\b|rgba\([^)]*\)" site/src/components site/src/styles | sort | uniq -c | sort -rn`). Candidates: `#0b0d11` to `--color-surface-0`, `0 4px 15px rgba(144, 37, 36, 0.4)` to `--shadow-cta`, `52px 0` to `--space-section-tight`. Mapping goes into `DESIGN.md` section 2. Deferred (they change output): breakpoint consolidation, 4pt spacing, OKLCH.

### 1.7 Phase 1 tasks (sequential; fingerprint, pixel diff, and text diff after every task)

| Task | Work | Check |
|---|---|---|
| DS-0 | (a) Delete Karim's whole bio paragraph (the `.coach-info-bio` element in `Coaches.astro`, lines 28 to 30) (D18). (b) Leave the `Testimonials.astro` lines 21 and 32 excerpts unchanged; verify their hashes (1.8) and write them to `scripts/copy_audit_allow.txt` under D19. (c) Add `site/output/` to the root `.gitignore`. (d) Run `fingerprint-diff.mjs` B0 vs the DS-0 build with `--emit-allow site/tests/baselines/allow-ds0.json`: it writes one entry per difference (exact path, pass, state, width, property, old value, new value). Allowed kinds only: the removed bio element; `height` and rect height of its ancestors up to `#coaches`; old and new rect (`y`, and `x`/`width`/`height` if they move) of every later sibling and descendant inside `#coaches`. The script rejects any entry outside `#coaches` or of another kind. Planner approves the file. (e) `pixel-diff.mjs` B0 vs DS-0 with `--allow allow-ds0.json`: differing pixels must fall inside the old or new rect of a listed element. (f) Capture **B1** (all widths, passes, text, shots) | fingerprint diff equals `allow-ds0.json` exactly; pixel diff passes with it; no other section differs |
| DS-1 | `astro.config.mjs`: `build: { format: 'directory' }`, `trailingSlash: 'always'`, `site: 'https://www.unitedwrestlingclub.com'` | B1 identical |
| DS-2 | `split-global-css.mjs` (1.5); write `css-homes.mjs` | `cmp`; B1 identical |
| DS-3 | Collapse parity blocks, one component per commit | B1 identical, coaches included; `css-homes` |
| DS-4 | Move section rules with their overrides into components; regroup global slices into 1.1 files | B1 identical, coaches included; `css-homes` exit 0 |
| DS-5 | Delete scoped duplicates (1.3 item 3) | B1 identical; `css-homes` exit 0 |
| DS-6 | Token aliases | B1 identical |
| DS-7 | Folders `shell/`, `home/`, `ui/`, `forms/`, `templates/`, `data/*`, `InteriorLayout`; homepage sections wrapped in `<main id="main-content">`; `routes.ts` created (4.2) | B1 identical (path keys skip the wrapper, 2.1); text diff empty |
| DS-8 | Shell props; skip link on every page | B1 diff: only the skip link element (`allow-ds8.json`, exact paths) |
| DS-9 | `scripts/check_dist.py`, `site/scripts/smoke.mjs`, `scripts/copy_audit.sh` | all pass on `/` |
| DS-10 | `DESIGN.md`: file map, one-selector-one-file rule, override rule, scoped-style rule, token table, fingerprint how-to | planner review |
| DS-11 | `discovery/decisions/ADR-20261106-astro-design-system.md`, indexed; amends ADR-20261105-design-system item 1 (section components may hold scoped styles for section-only rules) | indexed |

**Phase 1 done:** every task from DS-1 to DS-11 matches B1 with zero exemptions except `allow-ds8.json`; DS-3 and DS-4 pass the coaches section in fingerprint and pixel diff with no exemption; `npm run build` passes; skeptic has no open blocker.

### 1.8 Allowlist hash (D19, D10, D20)
Definition: SHA-256 of the UTF-8 bytes of a `<p>` element's inner content, exactly as written between its opening and closing tags (newlines and indentation included), no trimming, no normalization. Computed over the **whole file** with `re.finditer(r'<p\b[^>]*>(.*?)</p>', text, re.S)`; the entry's line is any line inside the matched element. Stored in `scripts/copy_audit_allow.txt`:

| File, line (element lines) | SHA-256 |
|---|---|
| `site/src/components/Testimonials.astro` 21 (21) | `a36ba4526ad4cd5c6ee6bebbe6ae154323920dc4fe6922ba37fe195fb83be8d9` |
| `site/src/components/Testimonials.astro` 32 (32) | `02358decfb5198d8e3348f59df6185bb8ccacd2e5e3d69095ee7d0f38f8c9cd6` |
| `site/src/components/Coaches.astro` 18 (17 to 19) | `ef717b23065863d3663d4193002191bc1c2ae2231423bb867c04a6580942e695` |
| `site/src/components/SiteFooter.astro` 12 (11 to 13) | `2fe193cbc498254cf580e8e32458e9a3427ea502989ef26eb13967a89e9b0d61` |

Recompute before DS-0 (repo root). Each run prints the element's line span, the hash, and the captured text; the hash must equal the table and the captured text must match the file, or stop and report:

```bash
for spec in site/src/components/Testimonials.astro:21 site/src/components/Testimonials.astro:32 site/src/components/Coaches.astro:18 site/src/components/SiteFooter.astro:12; do python3 -c "
import sys,re,hashlib
f,n=sys.argv[1].rsplit(':',1); n=int(n); s=open(f,encoding='utf-8').read()
for m in re.finditer(r'<p\b[^>]*>(.*?)</p>', s, re.S):
    a=s.count('\n',0,m.start())+1; b=s.count('\n',0,m.end())+1
    if a<=n<=b: print(f,n,a,b,hashlib.sha256(m.group(1).encode('utf-8')).hexdigest()); print(repr(m.group(1)))
" "$spec"; done
```

The `dist/` check runs the same function over each built HTML file. Astro's `compressHTML` may collapse the whitespace in multi-line elements, so at DS-0 `ds-lead` also records a `dist_sha256` per entry by running the same function on `dist/index.html`. It confirms that the captured text equals the source text with whitespace runs collapsed (a check only; both hashes are raw). A built element is exempt only if its hash equals an allowlisted `dist_sha256`.
---

## 2. Regression baseline (Phase 0, runs first on `d78a5da`)

Owner `baseline` (Sonnet extends the scripts; Haiku may run them). Port 4340, static server 8140, scratch `site/output/phase0/`. Phase 0 adds the `site/output/` line to `.gitignore` itself before writing scratch output.

### 2.1 `site/scripts/fingerprint.mjs` (extend the existing script)

Arguments: `--url`, `--widths` (default `375,600,768,900,1024,1100,1240,1248`), `--sections home|interior`, `--out <prefix>`, `--text` (writes `<prefix>-text.json`, `innerText` per section root, whitespace normalized), `--passes` (default `default,reduced,focus,hover`), `--shots` (section PNGs for 2.2).

- Viewport `{width, height: 900}`, `deviceScaleFactor: 1`.
- **Font guard:** call `document.fonts.load()` for `400 16px Montserrat`, `700 16px Montserrat`, `900 16px Montserrat`, `700 16px "Space Grotesk"`, await `document.fonts.ready`, then iterate `document.fonts`. Abort unless at least four faces are declared and, for each of the four (family, weight) pairs, at least one declared face matches and has `status === 'loaded'`. (`document.fonts.check()` is not used: it returns true when no face is declared.)
- **Freeze:** hero video paused at `currentTime = 0`; `document.getAnimations()` paused at `currentTime = 0`; `scrollTo(0, 0)`.
- **Per element** under each section root: path key, class list without `astro-*` and `data-astro-cid-*`, rect relative to the root (0.5px rounding), and computed `display position top right bottom left z-index width height max-width min-height margin-* padding-* border-*-width border-*-style border-*-color border-*-radius color background-color background-image background-size background-position font-family font-size font-weight font-style line-height letter-spacing text-transform text-align white-space text-decoration-line text-shadow opacity visibility pointer-events overflow-x overflow-y box-shadow transform filter outline-style outline-width outline-color outline-offset fill grid-template-columns grid-template-rows gap row-gap column-gap flex-direction flex-wrap flex-basis justify-content align-items object-fit transition-property transition-duration cursor`; `::before` and `::after`: `content background-image background-color opacity width height`.
- **Path keys** follow DOM order of element children and skip one wrapper level if it is `main#main-content`. That `<main>` is the only allowed structural addition.
- **Passes:** `default` (`reducedMotion: 'no-preference'`; states: drawer open below 1024px, modal open, first FAQ open, each schedule tab); `reduced` (`reducedMotion: 'reduce'`); `focus` (Tab through every focusable element; record its key with `outline-*`, `box-shadow`, `color`, `background-color`, `border-*-color`); `hover` (each `.btn`, `.nav-link`, `.mobile-nav-link`, `.footer-links a`, `.card-link`; record `color`, `background-color`, `border-*-color`, `box-shadow`, `transform`, `text-decoration-line`, `opacity`).
- **Section maps.** `home`: `topbar` `aside.top-bar`, `nav` `header.site-nav`, `drawer` `#mobileNavDrawer`, `hero` `.hero-section`, `programs` `#programs`, `schedule` `#schedule`, `coaches` `#coaches`, `pricing` `#pricing`, `testimonials` `#testimonials`, `safety` `#safety`, `faq` `#faq`, `cta` `.cta-banner`, `footer` `#visit`, `modal` `#trialModal`. `interior`: shell keys plus `main > section:nth-of-type(n)`.

`fingerprint-diff.mjs <baseline> <current> [--allow <file>] [--emit-allow <file>]`: `--emit-allow` writes every difference as an exact allow entry for review (DS-0). Matches by pass, state, section, key; rect tolerance 0.5px; values exact. Allow entries are exact (path, pass, width, property, old, new); a section-wide or wildcard entry is rejected. Exit 1 on any unallowed difference.

### 2.2 `site/scripts/pixel-diff.mjs <baseline-dir> <current-dir> [--allow <file>]`

Compares `--shots` PNGs (one per section, width, default pass, frozen) with `pixelmatch`, threshold 0. Allow entries name a section, width, and the element path whose rect may change; differing pixels must fall inside that element's old or new rect. No whole-section exemption. Dev dependencies `pixelmatch`, `pngjs`.

### 2.3 Commands

```bash
cd /Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/site
npm i -D playwright pixelmatch pngjs postcss postcss-selector-parser && npx playwright install chromium
npm run build && (npm run preview -- --port 4340 &)
node scripts/fingerprint.mjs --url http://localhost:4340/ --sections home --shots --out tests/baselines/B0/home
node scripts/fingerprint.mjs --url http://localhost:4340/ --text --out tests/baselines/B0/home
node scripts/fingerprint.mjs --url http://localhost:4340/ --sections home --shots --out output/phase0/rerun
for w in 375 600 768 900 1024 1100 1240 1248; do node scripts/fingerprint-diff.mjs tests/baselines/B0/home-$w.json output/phase0/rerun-$w.json; done
node scripts/pixel-diff.mjs tests/baselines/B0/home-shots output/phase0/rerun-shots      # determinism: all exit 0
cd .. && (python3 -m http.server 8140 &)
for p in reviews register contact about; do
  node site/scripts/fingerprint.mjs --url http://localhost:8140/$p/ --sections interior --shots --out site/tests/baselines/static/$p
  node site/scripts/fingerprint.mjs --url http://localhost:8140/$p/ --text --out site/tests/baselines/static/$p
done
```
B1 (DS-0) uses the same commands with `--out tests/baselines/B1/home`.

### 2.4 Existing untracked files
| File | Action |
|---|---|
| `site/scripts/fingerprint.mjs`, `fingerprint-diff.mjs` | Keep, extend to 2.1, commit in Phase 0 |
| `site/tests/fingerprint.js` (hash-only console snippet) | Move to `site/scripts/legacy/fingerprint-console.js`; not a gate |
| `site/tests/baseline/homepage-{375,1248}.json` (hashes) | Move to `site/tests/baselines/legacy-hash/`; superseded by B0 |
| `site/package.json` and lock changes | Commit in Phase 0 with the new dev dependencies |

---

## 3. Page inventory

Copy source: **H** homepage component text, **S** static page, **KB** `data/facts.ts`. **OMIT** = not built by default (D0). Files are under `site/src/pages/`.

| # | Route | File | Status | KB | Forms | Shared components | Content blockers | Copy |
|---|---|---|---|---|---|---|---|---|
| 1 | `/` | `index.astro` | built (Astro) | 01-10, 13, 16 names, 23 | F1 modal, F6 | `home/*`, shell | DS-0 removes Karim's bio. Safety (D9), footer tagline (D10), Saturday row (D1), youth card photos (D5), testimonial excerpts (D19), "forged in Dagestan" (D20) stay as today | H |
| 2 | `/about/` | `about.astro` | port | 05, 13, 16 names | F1 CTA, F6 | InteriorLayout, PageHero, SectionHeader | No Olympic, 1980, Moscow wording. Creed "Dagestani lineage" sentence is allowlisted under D10 | S verbatim |
| 3 | `/classes/` | `classes/index.astro` | new | 05, 06, 08, 09 | F1 CTA | PageHero, InfoCard, Button | Lists KB-05 programs and built class pages only | H Programs |
| 4 | `/classes/kid-wrestling/` | `classes/kid-wrestling.astro` | new | 04, 05, 06, 08 | F1 `youth` | ProgramPage, ScheduleList | KB-05 ages vs schedule "pre-K to 5th": show both as sourced. No youth photos (D5). Spec prices not in KB | H |
| 5 | `/classes/youth-wrestling/` | `classes/youth-wrestling.astro` | new | 04, 05, 06, 08, 16 (Sandeep Singh Gosal) | F1 `varsity` | ProgramPage, ScheduleList | Same age conflict; no varsity photo; no CIF or NCAA claims | H |
| 6 | `/classes/adult-wrestling/` | `classes/adult-wrestling.astro` | new | 04, 05, 06, 08, 16 (Naweed) | F1 `adult` | ProgramPage, ScheduleList | No clinic or Olympian claims | H |
| 7 | `/classes/nogi-jiu-jitsu/` | `classes/nogi-jiu-jitsu.astro` | new | 04, 05, 06, 08 | F1 `adult` | ProgramPage, ScheduleList | One schedule row; spec prices not in KB | H schedule |
| 8 | `/classes/gi-jiu-jitsu/` | `classes/gi-jiu-jitsu.astro` | new | 04, 06, 08 | F1 `adult` | ProgramPage, ScheduleList | Saturday row is `pending` and hidden (5.6) | H schedule |
| 9 | `/classes/sambo/` | `classes/sambo.astro` | OMIT | none | | | No KB entry, schedule row, or coach (D3) | |
| 10 | `/classes/boxing-fundamentals/` | `classes/boxing-fundamentals.astro` | new | 04, 06, 08, 16 (Farid Siddiq) | F1 `adult` | ProgramPage, ScheduleList | One shared schedule row | H |
| 11 | `/classes/open-mat/` | `classes/open-mat.astro` | new | 03, 04, 09 | F1a `openmat` | ProgramPage, ScheduleList, FactList | Hours via FactList only (D2); button label matches the form | H |
| 12 | `/classes/womens-self-defense/` | `classes/womens-self-defense.astro` | OMIT | 19 unconfirmed | F4 none | | D4 | |
| 13 | `/schedule/` | `schedule.astro` | new | 03, 04 | F1b | ScheduleList (filters), FactList | Pending rows hidden; homepage prose note not reused; hours from FactList; "Times can shift around holidays and tournaments" kept | H rows |
| 14 | `/pricing/` | `pricing.astro` | new | 06, 08, 09, 10 | F1 CTA | `home/Pricing.astro` | No sibling, PIF, or 4-day price | H |
| 15 | `/events/` | `events.astro` | OMIT | 20 unconfirmed | F3 none | | D6 | |
| 16 | `/register/` | `register.astro` | port | 06, 07, 10, 23 | F1 page | TrialForm `page` | Consent copy verbatim (D8) | S verbatim |
| 17 | `/contact/` | `contact.astro` | port | 01, 02, 03 | F2 | ContactForm, FactList | Hours via FactList | S verbatim |
| 18 | `/faqs/` | `faqs.astro` | new | 01, 02, 03, 06, 07, 08, 09, 10, 23 | F2 link | `home/Faq.astro` markup, FAQPage JSON-LD | Gear answer overlaps KB-11: reuse verbatim, add nothing. New answers only from listed KB, via `ds-lead` | H + KB |
| 19 | `/rules/` | `rules.astro` | OMIT | 13 | | | D7 | |
| 20 | `/donate/` | `donate.astro` | OMIT | none | F5 | | D6 | |
| 21 | `/locations/` | `locations/index.astro` | new | 01, homepage FAQ cities answer | F1 CTA | InfoCard | Cities as text; links only to built pages | H |
| 22 | `/locations/hayward-ca/` | `locations/hayward-ca.astro` | new | 01, 02, 03, 05, 06, 08 | F1 `hayward` | FactList, ScheduleList, TrialForm | No parking guide (KB-21) | KB + H |
| 23-26 | `/locations/{union-city-ca,fremont-ca,newark-ca,castro-valley-ca}/` | `locations/<slug>.astro` | OMIT | none | | | Drive times and school claims not in KB; doorway risk (D11) | |
| 27 | `/guides/` | `guides/index.astro` | OMIT | none | | | D12 | |
| 28-32 | `/guides/{adult-wrestling-bay-area,youth-wrestling-vs-martial-arts,wrestling-for-bjj-takedowns,high-school-off-season-wrestling,dsal-hayward-wrestling-pathway}/` | `guides/<slug>.astro` | OMIT | none | | | D12; need sources outside the KB | |
| 33 | `/reviews/` | `reviews.astro` | port | 17 Google (5.10) | F7 | ReviewForm, cards | Unverified stats stripped (5.10, D13) | S, minus stripped strings; bodies from `data/reviews.ts` |
| R | `/submit-review/` | `submit-review.astro` | redirect | | | Layout | D14 | S |

Totals: **18 built** (1 to 8, 10, 11, 13, 14, 16 to 18, 21, 22, 33), **1 redirect**, **15 omitted**. Omitted routes 404 and nothing links to them.

---

## 4. Execution plan

### 4.1 Phases

```
Phase 0 (B0) -> DS-0 (B1) -> DS-1..DS-11 -> skeptic -> owner confirms D0 -> G1..G6 in parallel (G1 merges first) -> Phase 3
```

Each group works in its own git worktree off the Phase 1 merge commit and merges one at a time.

### 4.2 Shared files, `routes.ts`, and `nav.ts`

Only `ds-lead` writes `site/src/{styles,layouts,data}/**`, `site/src/components/{shell,home,ui,forms,templates}/**`, `site/public/**`, `site/astro.config.mjs`, `site/package.json`, `site/scripts/**`, `scripts/**`, `site/tests/baselines/**` (except G1's port allow files), `.gitignore`, `DESIGN.md`, `discovery/decisions/**`.

`data/routes.ts` statuses:
- **DS-7** creates it: `/` is `built` (owned by no group); `/submit-review/` is `redirect`; the 15 OMIT routes are `omitted`; the other 17 routes are `planned`, each with its owning group. `planned` is allowed only on a route that a group owns.
- **Each group's merge commit** changes only its own routes from `planned` to `built`. That is the only shared-file write a group makes; `ds-lead` reviews the diff and rejects anything else.
- **Phase 3** requires no `planned` route left.

`data/nav.ts` changes only in DS-7 (today's homepage links), DS-8 (`isHome` variants), and Phase 3 step 1. Never by a group.

**Link rule:** `check_dist.py` passes a link whose target is `built`, `redirect`, or `planned`; fails a link to `omitted`. With `--final`, a link to a route that is not `built` or `redirect` fails.

### 4.3 Groups

Naming: group N uses preview port `4340 + N`, static port `8140 + N`, scratch `site/output/g<N>/`. `ds-lead` uses 4330, 8130, `site/output/ds/`.

| Group | Routes | Exclusive paths | Components | KB allowed | Model |
|---|---|---|---|---|---|
| **G1 Ports** | `/about/`, `/reviews/`, `/register/`, `/contact/`, `/submit-review/` | `site/src/pages/{about,reviews,register,contact,submit-review}.astro`, `site/src/components/pages/{about,reviews,register,contact}/**`, `site/tests/baselines/static/*-allow.json` | InteriorLayout, PageHero, SectionHeader, TrialForm, ContactForm, ReviewForm, Consent*, cards | 01, 02, 03, 05, 06, 07, 10, 13, 16 names, 23; 17 Google on `/reviews/` only | Sonnet |
| **G2 Classes: hub and wrestling** | `/classes/`, `/classes/kid-wrestling/`, `/classes/youth-wrestling/`, `/classes/adult-wrestling/` | `site/src/pages/classes/{index,kid-wrestling,youth-wrestling,adult-wrestling}.astro`, `site/src/components/pages/classes-wrestling/**` | ProgramPage, ScheduleList, InfoCard, TrialForm, Button | 04, 05, 06, 08, 09, 16 names | Sonnet |
| **G3 Classes: grappling, boxing, open mat** | `/classes/nogi-jiu-jitsu/`, `/classes/gi-jiu-jitsu/`, `/classes/boxing-fundamentals/`, `/classes/open-mat/` | `site/src/pages/classes/{nogi-jiu-jitsu,gi-jiu-jitsu,boxing-fundamentals,open-mat}.astro`, `site/src/components/pages/classes-adult/**` | ProgramPage, ScheduleList, TrialForm, FactList | 03, 04, 05, 06, 08, 09, 16 (Farid Siddiq) | Sonnet |
| **G4 Info** | `/schedule/`, `/pricing/`, `/faqs/` | `site/src/pages/{schedule,pricing,faqs}.astro`, `site/src/components/pages/info/**` | ScheduleList, `home/Pricing.astro`, `home/Faq.astro` markup, FactList, TrialForm F1b | 01, 02, 03, 04, 06, 07, 08, 09, 10, 23 | Sonnet |
| **G5 Locations** | `/locations/`, `/locations/hayward-ca/` | `site/src/pages/locations/{index,hayward-ca}.astro`, `site/src/components/pages/locations/**` | FactList, ScheduleList, InfoCard, TrialForm | 01, 02, 03, 05, 06, 08 | Sonnet |
| **G6 Machine files** | `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt` | `site/src/pages/{robots.txt,sitemap.xml,llms.txt,llms-full.txt}.ts` | `data/routes.ts`, `data/facts.ts` | Verified only. `llms.txt`: summary and built-route links; `llms-full.txt`: Verified facts with KB IDs | Haiku |

Unlock-only groups (Sonnet, after their decisions, ports 4347 to 4350): **G7** sambo (D3), women's self-defense (D4); **G8** events, donate (D6), rules (D7); **G9** four city pages (D11); **G10** guides (D12, after a sourced brief).

### 4.4 Per-group gate (before merge)

From the group worktree, `site/`, with `P=4340+N`, `O=output/g<N>`:
1. `npm run build` exits 0.
2. `dist/<route>/index.html` (or the `.txt`/`.xml` file for G6) exists for **every route the group owns**; a missing one fails.
3. `python3 ../scripts/check_dist.py --routes <owned routes>` (link rule 4.2).
4. `npm run preview -- --port $P &`; `node scripts/smoke.mjs --base http://localhost:$P --routes <owned routes> --out $O`.
5. `bash ../scripts/copy_audit.sh src/pages src/components/pages dist`.
6. Homepage regression against B1 (fingerprint, pixel, text; `allow-ds8.json` only). Must exit 0.
7. G1 only: port comparison (6.5).
8. Report: routes built, KB IDs per page, any copy line not from H, S, or KB, and requests for `ds-lead`.

### 4.5 Phase 3 (`ds-lead`)

1. `data/nav.ts`: interior pages link to built routes; homepage anchors stay. Resulting homepage nav and footer differences go into `allow-p3.json` (exact paths), the planner approves, and B2 is captured.
2. Apply group requests.
3. Whole-build verification (6.6).
4. Production switch is D15, outside this plan.

---

## 5. Copy and content rules

1. **No em dashes** (U+2014) in our copy, markup, alt text, titles, meta, or JSON-LD. Exceptions: the quote elements exempt under 6.4. En dashes in schedule time ranges stay.
2. **No invented facts:** no new numbers, prices, ages, times, dates, reviews, counts, ratings, staff names, credentials, outcomes, or partnerships. If a sentence needs a fact not in `data/facts.ts`, cut it.
3. **Verified KB only**, as listed per group. Never KB-11, 12, 14, 15, 18, 19, 20, 21, 22 retention, or any KB Section C item. KB-13 only in existing reused copy (Dollamur is still on the Naweed fact-check list). The only exception: the client-confirmed KB-17 rating "5.0 across 42 reviews on Google", which stays on `/reviews/` only, under ADR-20261104 item 3, and is listed in D13.
4. **Blocked claims:** "Olympian", "Olympic" as a credential, "1980", "Moscow", "boycott", "qualifier", "Ali Aliyev", "Makhachkala", "Dagestan" or "Dagestani", "medalist", "Train with an Olympian", "Ramazanov", "Kardanov", "state champions", any coach credential beyond KB-16 names and roles. Only the allowlisted existing lines (6.4) may contain them.
5. **Phone:** `(510) 303-4869`, `tel:5103034869`. Say "Call", never "Text us". "Text" appears only in `ConsentSms.astro`, verbatim until D8.
6. **Hours and Saturday.** Open conflict: the schedule lists Saturday 8:00 to 10:00 AM gi, outside KB-03's Saturday 10:00 AM to 12:00 PM, and the Saturday end time is unconfirmed (D1, D2). Until both close:
   - No page writes a day or time in prose. Hours appear only through `FactList`; class times only through `ScheduleList`.
   - `ScheduleList` does not render a `pending` row unless `showPending` is true. No new page sets it. Nothing replaces or explains the hidden row.
   - The homepage keeps `home/Schedule.astro` as today (Saturday row and the line 53 prose note), allowlisted under D1. When D1 closes, `ds-lead` switches it to `ScheduleList` and `FactList` in one change with a new baseline.
7. **Photos:** only `data/media.ts` (`still_31_naweed_headshot_united_wall.jpg`, `still_44_coach_naweed_mat_command_uwc_banner.jpg`, `still_49_sergio_gomez_striking_usa_wrestling_olympic_banner.jpg`, `live_site_content/assets/co-founder.jpg`, `program-adult.jpg`). No `program-youth.jpg`, `program-varsity.jpg`, `program-openmat.jpg`, GBP photos, or images of minors until D5. `still_09_coach_community_mat.jpg` only after `ds-lead` checks it for minors.
8. **Forms:** `forms/*` only; the four `FORM_ENDPOINTS` (`trial_pass`, `contact`, `newsletter`, `review`). No new endpoints or `form_name` values; no `xyyavaaj`. F3, F4, F5, F8 not built.
9. **Consent:** `ConsentSms.astro` and `ConsentMedia.astro` only, unchanged. Media release default checked (D16).
10. **Reviews (ADR-20261104).** Bodies verbatim, name and platform only. G1 **strips** these unverified strings from the `/reviews/` port and puts them in no other page:
    - `<title>` "5.0 ★ Verified Google & Yelp Reviews": replaced by `United Wrestling Club Reviews | Hayward, CA`.
    - meta description and `og:description` "Read 42+ verified 5.0-star reviews...": replaced by `Reviews of United Wrestling Club in Hayward, CA, and a form to share your own.`
    - `twitter:title` and `twitter:description` "5.0 ★ Verified...": `twitter:title` matches the new title; `twitter:description` matches the new meta description.
    - eyebrow "Verified Social Proof ·": removed, rest of the eyebrow kept.
    - hero lead "5.0 ★ verified reviews from East Bay youth parents, CIF high school competitors, and adult grapplers...": the sentence is removed; the second sentence ("Read authentic member experiences or share your story below.") is kept.
    - trust score "100% Unanimous Rating" and "42+ Verified Reviews Across Platforms": removed. The "5.0" figure stays only with the label `5.0 across 42 reviews on Google` from `facts.reviewsGoogle`.
    - Yelp card "5.0 ★" and "Verified Grapplers & Parents"; Facebook card "100% Rec" and "East Bay Combat Community": rating and tagline lines removed; the card names and links stay.
    The Google card "5.0 across 42 reviews" and the `AggregateRating` JSON-LD (5.0, 42) stay, on `/reviews/` only, on the basis of KB-17 (client-confirmed) and ADR-20261104 item 3. Owner confirms all of this under D13. "42+" appears nowhere.
11. **Visuals:** PRODUCT.md and DESIGN.md; no side stripes over 1px, gradient text, `backdrop-filter`, pure `#000` or `#fff`; tokens only.
12. **Each page:** one H1, real `<title>` and meta description, canonical path, alt text on every image.

---

## 6. Verification

### 6.1 Build: `npm run build` exits 0; `dist/<route>/index.html` exists for each `built` route.

### 6.2 `scripts/check_dist.py` (new)

`scripts/check_site.py` hard-codes six root pages; keep running it for the static pages until D15. `check_dist.py` reuses its `Tags` parser and: walks `site/dist/**/*.html` (or `--routes`); resolves `/x/` to `dist/x/index.html` and relative refs; checks `#fragment` ids exist on the target; checks `url()` in `dist/_astro/*.css`; applies the 4.2 link rule (`--final` in Phase 3); fails when a `built` route has no output file.

### 6.3 `site/scripts/smoke.mjs` (new)

Arguments: `--base`, `--routes <list>` or `--all` (all `built` routes), `--widths` (default as 2.1), `--out`. Per route and width: `scrollWidth <= innerWidth`; zero `console.error` and `pageerror`; zero failed local requests; header (`aside.top-bar`, `header.site-nav`, `#mobileNavDrawer`) and footer (`#visit`) fingerprints equal the homepage's except `href` and active state; header and footer PNGs to `<out>/<route>-<width>-{header,footer}.png`. The executor views each new route's PNGs and says so in its report.

### 6.4 `scripts/copy_audit.sh` (new)

Over source and `dist/`:
- **Quote-element exemption (applies to every check below, not only em dashes).** Text inside an exempt quote element is skipped by all pattern checks. Exempt elements are exactly: (a) on the homepage, a `<p>` whose excerpt hash (1.8) equals a hash in `scripts/copy_audit_allow.txt`; (b) on `/reviews/`, a quote element or `reviewBody` JSON-LD value whose text equals a body in `data/reviews.ts`; (c) `data/reviews.ts` itself. The verbatim reviews contain "dagestan" (`reviews/index.html` lines ~220 and ~457) and em dashes; they pass only through (b) or (c). Nothing else is exempt.
- Em dash: any U+2014 outside exempt elements fails.
- `rg -ni "olympi|1980|moscow|boycott|qualifier|aliyev|makhachkala|dagestan|medalist|ramazanov|kardanov|state champion|1:6|1 coach to 6|3,000 sq|cross-linked|wi-fi|sibling|unanimous|100% rec|42\+"` outside exempt elements matches only allowlisted lines.
- Prose day and time: `rg -n "Sat(urday)? *[0-9]|Mon.{0,3}Fri *[0-9]"` outside `data/`, `ui/FactList`, `ui/ScheduleList`, and allowlisted lines fails.
- Phone other than `(510) 303-4869`, or `tel:` other than `tel:5103034869`, fails.
- `formspree.io/f/` with any ID outside the four; `xyyavaaj`; or `text (us|me|\(510\))` outside `ConsentSms.astro` fails.
- Images on new pages not in `data/media.ts` fail.

`scripts/copy_audit_allow.txt` (only `ds-lead` edits it): one line per allowed occurrence: file, line, SHA-256 (1.8 method), matched pattern, decision ID. Initial entries: the two excerpts (1.8, D19); footer tagline in `shell/SiteFooter.astro` (D10); `about` creed "Dagestani lineage" sentence (D10); `home/Coaches.astro` line 18 "forged in Dagestan" (D20); `home/Safety.astro` claims (D9); `home/Schedule.astro` Saturday row and note (D1). A hash mismatch fails, so edited text cannot ride on an old entry. When DS-7 moves a file, `ds-lead` updates the file and line keys in the same commit; hashes do not change.

### 6.5 Port comparison (G1)

For `/reviews/`, `/register/`, `/contact/`, `/about/`, at all widths and passes: fingerprint and pixel diff against `tests/baselines/static/<page>`, and text diff against `static/<page>-text.json`. Allowed differences, each listed by exact path in `static/<page>-allow.json`: link and asset paths (`../` to `/`); stylesheet query strings; the `<main>` key rule; for `about` (loaded `uwc.css?v=2026-11-05b`), each rule that changed between `b` and `f`, one by one; `/contact/` hours if `FactList` markup differs; on `/reviews/`, the 5.10 removals and replacements. Anything else blocks the merge.

### 6.6 Whole build (Phase 3; Haiku may run it)

```bash
cd /Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/site
npm run build
python3 ../scripts/check_dist.py --final && python3 ../scripts/check_site.py
node scripts/css-homes.mjs
(npm run preview -- --port 4330 &)
node scripts/smoke.mjs --base http://localhost:4330 --all --out output/ds/smoke
bash ../scripts/copy_audit.sh src dist
node scripts/fingerprint.mjs --url http://localhost:4330/ --sections home --shots --out output/ds/home
node scripts/fingerprint.mjs --url http://localhost:4330/ --text --out output/ds/home
for w in 375 600 768 900 1024 1100 1240 1248; do node scripts/fingerprint-diff.mjs tests/baselines/B2/home-$w.json output/ds/home-$w.json; done
node scripts/pixel-diff.mjs tests/baselines/B2/home-shots output/ds/home-shots
```

Plus: `dist/sitemap.xml` lists exactly the `built` routes; `robots.txt` points to it; no omitted route appears in `dist/`.

---

## 7. Decisions and risks

### 7.1 Owner decisions (proposed default; the owner decides)

| ID | Decision | Blocks | Default |
|---|---|---|---|
| D0 | Omit 15 of the 32 requested routes | Phase 2 start | Omit |
| D1 | Saturday 8 to 10 AM gi class; Saturday hours | Row hidden on new pages | Hide; one-edit fix after Naweed confirms |
| D2 | Open mat end time (12:00 vs 12:30 PM) | Same | 12:00 PM (KB-03) |
| D3 | Combat Sambo offered, when, by whom | `/classes/sambo/` | Omit; redirect to `/classes/` at D15 |
| D4 | Women's self-defense details and waitlist endpoint | `/classes/womens-self-defense/` | Omit |
| D5 | Minors' photos: releases or replacement | Youth imagery | Keep minors off new pages; homepage cards are a separate call |
| D6 | `/events/`, `/donate/`: details, policy, endpoints F3 and F5 | Both | Omit; route to `/contact/` |
| D7 | Club rules text; mat size, foam, Wi-Fi, Dollamur | `/rules/` | Omit |
| D8 | Consent and texting copy | None | Keep; change once in `ConsentSms.astro` |
| D9 | Homepage Safety claims | None (allowlisted) | Leave for the Naweed fact check |
| D10 | Footer tagline, about-page "Dagestani lineage" | None (allowlisted) | Reword after owner approval; drop "state champions" |
| D11 | Verified local facts for city pages | Four city routes | Omit; Hayward only |
| D12 | Sourced brief and author for guides | Six guide routes | Omit |
| D13 | `/reviews/`: stripping the 5.10 strings; keeping "5.0 across 42 reviews on Google" (client-confirmed) | None (port proceeds with the strip) | Strip as listed; keep the Google figure |
| D14 | Keep `/submit-review/` as a redirect | That route | Keep |
| D15 | Vercel serves `site/dist`; root pages retired | Retirement | After Phase 3 and owner review of a preview |
| D16 | Media release default | None | Keep checked |
| D17 | F8 affiliate: route or F2 reason | None | F2 reason |
| D18 | Karim's bio (Aliyev result, Dagestani lineage), KB-16 blocked | None; DS-0 removes the paragraph | Keep removed until Karim confirms wording |
| D19 | Homepage testimonial excerpts with em dashes (lines 21, 32) | None (allowlisted by hash) | Keep as published; if edited, re-excerpt verbatim from the review |
| D20 | "forged in Dagestan" in the lineage lead (`Coaches.astro` line 18), unverified lineage claim | None (allowlisted until decided) | Remove it (one change by `ds-lead`, with exact-path allow entries and a new baseline) |

### 7.2 Risks

1. **Fingerprint flakiness** (Google fonts, video, animation): font guard, freeze, Phase 0 determinism rerun at all widths, passes, and pixels.
2. **Specificity traps:** scoped rules outrank global ones. Covered by the override rule, `css-homes.mjs` (placement, order, declarations), and one component per commit.
3. **Unsampled breakpoints** (380, 480, 640, 720, 860, 960, 1040, 1220 px): values covered by `css-homes.mjs` check (d), not by measurement.
4. **DS-1 URL format** changes deploy paths: update `README.md` section 6 before D15.
5. **SEO loss on omitted live URLs** (`/classes/sambo`, `/events`, `/donate`, `/rules`) after D15: add Vercel redirects at the switch.
6. **Thin class pages** (7, 8, 10): accept; do not pad.
7. **Node version:** `mise use node@22` (22.23.4 or later) if npm refuses.
8. **RTC #513 sanctioning** (top bar, reviews eyebrow) is not a KB entry. Existing shell copy stays; new copy does not add it. Add to the Naweed fact check.
