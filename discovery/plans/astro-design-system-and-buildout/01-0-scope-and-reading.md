
> Part 1 of 4 of [astro-design-system-and-buildout](../astro-design-system-and-buildout.md). Text is verbatim from the original; only links were rewritten.

# Plan v4: Astro design system refactor and full-sitemap buildout

- **Date:** 2026-11-05 (v4 final, after skeptic reviews of v1 to v3)
- **Branch:** `astro-homepage` (Astro project in `site/`). Reference commit: `d78a5da`.
- **Status:** Plan only. Nothing here is built.
- **Executors:** Sonnet by default, Haiku for mechanical runs only. Single shared-file owner: `ds-lead` (Sonnet).

## 0. Scope and reading

"The remaining 32 pages" means every route in `discovery/site/website_rebuild_spec.md` section 5, plus `/reviews/` (route 33 in `discovery/site/forms_map_full_sitemap.md`). The Astro site must cover the sitemap without depending on the root static pages, so `/`, `/reviews/`, `/register/`, `/contact/`, `/about/` are ported into `site/`. Machine files (`robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`) are one extra group.

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
