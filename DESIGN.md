# DESIGN.md: United Wrestling Club

Design system for the UWC homepage (archived pre-rebuild page `discovery/archive/legacy-site/v01/index.html`) and the pages it linked to.
Register: **brand** (see [PRODUCT.md](PRODUCT.md)).

**Source of truth (static pages):** `assets/css/uwc.css`. **Source of truth (Astro site):** `site/src/styles/`; see section 13.
The archived pages (`discovery/archive/legacy-site/v01/index.html`, `discovery/archive/legacy-site/reviews/index.html`) linked this one file. The live site uses `site/src/styles/`.
Pages do not carry their own `<style>` blocks, and new components go in this file. This file documents it; if the two disagree, the code wins and this file gets fixed.

Status: the homepage and the reviews page use this system. Component class renames and the spacing and breakpoint consolidation are deferred. See section 11.

---

## 1. Intent

Heavyweight mat-room energy, Olympic lineage, raw cinematic contrast.
The page is a dark room with a single hot color. Crimson carries every call to action.
Neutrals are tinted toward the brand hue and are never pure black or white.

Color strategy: **Committed**. The crimson is the one saturated color. Dark neutrals carry 80% or more of the surface.

---

## 2. Color

### Tokens

| Token | Value | Use |
|---|---|---|
| `--color-brand` | `#902524` | Fills: buttons, featured borders, glows. **Never as text on dark** (2.33:1). |
| `--color-brand-hover` | `#a82e2d` | Hover fill for brand surfaces. |
| `--color-brand-text` | `#e0524f` | Brand-colored text on dark (eyebrows, labels, phone). 5.17:1 on canvas, 4.5:1 on surface-2. |
| `--color-brand-glow` | `rgba(144,37,36,0.45)` | Glow and shadow tint for brand elements. |
| `--color-border-brand` | `rgba(144,37,36,0.35)` | Brand-tinted border on dark. |
| `--color-accent` | `#ff5252` | Hero emphasis line, star ratings, focus ring. 6.2:1 on canvas. |
| `--color-star` | `var(--color-accent)` | Star ratings. |
| `--color-success` | `#22c55e` | Status only (open state, confirmations). |
| `--color-warning` | `#f59e0b` | Status and coach role labels. |
| `--color-canvas` | `#090a0d` | Page background. |
| `--color-surface-1` | `#111318` | Section and card surfaces. |
| `--color-surface-2` | `#181b22` | Raised surfaces (cards, panels). |
| `--color-border-subtle` | `#191c24` | Hairline dividers. |
| `--color-border-default` | `#232733` | Card and input borders. |
| `--color-text-strong` | `oklch(0.98 0.004 25)` | Headings and emphasis. 17.6:1 on canvas. |
| `--color-text-default` | `#f0f2f5` | Body text. 17.7:1 on canvas. |
| `--color-text-muted` | `#9fa6b2` | Secondary copy, meta. 8.1:1 on canvas, 7.0:1 on surface-2. |

Primitive values (`--ref-*`) hold the raw hex. Components reference semantic tokens only.

### Rules

- Red text on dark uses `--color-brand-text`. The fill `--color-brand` is for backgrounds and borders only.
- One saturated hue per view. Do not add a second brand red for text.
- Tinted neutrals only. No `#000`, no `#fff`, and no `rgba(0,0,0,…)` in new code (use `rgba(9,10,13,…)` instead).
- Status colors appear only where the status is the content.

---

## 3. Typography

### Families

| Token | Family | Role |
|---|---|---|
| `--font-sans` | Montserrat | Everything: headings, body, UI. |
| `--font-accent` | Space Grotesk (700) | Numerals and figures only: phone numbers, prices, pillar and safety numbers, the year badge. Kept as an identity choice. |

Google Fonts request: Montserrat 400, 500, 600, 700, 800, 900 with italic 400. Space Grotesk 700.

### Weights in use

| Weight | Role |
|---|---|
| 400 | Body, lead, quotes (italic 400 for pillar and review quotes) |
| 500 | Rare. Reserved for UI labels. |
| 600 | Meta, secondary strong text |
| 700 | Nav, labels, `<strong>` |
| 800 | Buttons, eyebrows, card and coach titles |
| 900 | Display and section headings only |

### Type roles

| Role | Class | Size | Weight | Line height | Tracking | Case |
|---|---|---|---|---|---|---|
| Display | `.hero-title` | `clamp(2.5rem, 6.2vw, 4.6rem)` | 900 | 1.05 | -0.02em | Upper |
| Display, mobile | `.hero-title` (≤ 768px) | `clamp(2.1rem, 9.2vw, 2.75rem)` | 900 | 1.05 | -0.02em | Upper |
| Motto display | `.edc-motto-display` | `clamp(2.4rem, 5.2vw, 4.2rem)`; mobile (≤ 600px) `clamp(2.1rem, 9.2vw, 2.75rem)` | 900 | 1.05 | -0.02em | Upper |
| H2 | `.section-title` | `clamp(2rem, 3.8vw, 2.9rem)` | 900 | 1.12 | -0.01em | Upper |
| H3 | `.card-title`, `.pillar-title`, `.modal-title` | 1.22rem to 1.7rem | 800 to 900 | 1.2 | 0 | Upper |
| Lead | `.section-lead`, `.edc-lead`, `.hero-subtitle` | `clamp(1rem, 1.8vw, 1.15rem)` to `1.05rem` | 400 | 1.6 | 0 | Sentence |
| Body | base | 1rem | 400 | 1.6 | 0 | Sentence |
| Small body | `.card-desc`, `.pillar-body` | 0.85rem to 0.92rem | 400 | 1.55 | 0 | Sentence |
| Eyebrow | `.section-eyebrow` | 0.78rem | 800 | 1.6 (inherited) | 0.18em | Upper, `--color-brand-text` |
| Badge and meta | `.card-badge`, `.card-meta`, `.floating-badge-text` | 0.68rem to 0.74rem | 800 | 1.3 | 0.08em to 0.10em | Upper |
| Button | `.btn` | 0.88rem | 800 | 1.6 (inherited) | 0.08em | Upper |

### Rules

- Body copy is 65 to 75 characters per line. Use `max-width: 68ch` on new paragraphs. `.faq-answer` already uses it.
- Light text on dark needs line height at least 1.5. Use 1.55 for light small text.
- Uppercase is for display, section headings, eyebrows, badges, nav, and buttons. Not for sentences.
- A heading step should be at least 1.25x the next step down.

### Known gaps (deferred)

- About 40 distinct font sizes exist across the file. Most collapse to the roles above during the component rename.
- `.brand-sub` renders at about 9.6px on phones. Logo tagline only. Kept for now.
- Caption steps sit 1.02x to 1.07x apart. Consolidate to 0.72 / 0.78 / 0.85 / 0.92 / 1.05rem when the components are renamed.

---

## 4. Layout

- Container: `--container-max: 1260px`.
- Section padding: `--space-section: clamp(70px, 9vw, 130px)`. Five sections still hard-code `52px 0` (deferred, section 11).
- Gutter: 16px on phones, 26px and up on desktop.
- Breakpoints in use: 380, 600, 640, 720, 768, 860, 900, 960, 1024, 1040, 1100, 1220, 1240 (13 values).
  Target set: 380, 640, 768, 1024, 1240. Deferred, because each remap changes the cascade (section 11).
- Desktop nav links hide at 960px (replaced by the drawer). The optional nav items (Coaches and others) hide at 1240px.

---

## 5. Shape

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 4px | Buttons, inputs, most cards, tags |
| `--radius-md` | 8px | Modal, program and pricing cards |
| `--radius-lg` | 14px | Reserved |
| `--radius-pill` | 9999px | Pills (eyebrow pill, featured tag) |

Tags use 2px to 4px and pills use full radius. Both are mapped to tokens where the value is one of the above.

---

## 6. Elevation and depth

- Shadows are tinted, never neutral black. Use `rgba(9,10,13,…)` for dark shadows and `--color-brand-glow` for brand glow.
- No glass. `backdrop-filter` is banned. Use a solid surface at high opacity instead.
- Depth comes from a 1px border, a surface step (`surface-1` to `surface-2`), and one shadow.
- Full shadow inventory (about 20 values) is still inline. Three shadow tokens are the deferred target.

---

## 7. Motion

| Token | Value | Use |
|---|---|---|
| Fast | 200ms | Hover color and border changes |
| Base | 250ms | Lift, border, and small reveal |
| Slow | 400ms | Modal and drawer |
| Ease | `cubic-bezier(0.16, 1, 0.3, 1)` | Ease-out expo for all transforms |

- **Reduced motion is global.** A `prefers-reduced-motion: reduce` rule shortens every animation and transition to 0.01ms. Components do not need their own guards.
- Only `transform` and `opacity` animate. No layout properties.
- Autoplay hero video loops with no pause control. This is a WCAG 2.2.2 risk. Open decision, section 11.

---

## 8. Focus and states

- **Focus:** one global `:focus-visible` rule. 2px solid `--color-accent`, 3px offset. Applies to every link, button, input, and tab.
- Form inputs no longer remove the outline.
- **Hover:** color and border change on links and buttons. Cards lift 3px to 6px on hover. The lift is decorative and is disabled under reduced motion.
- **Disabled:** no disabled styling exists yet. Add it with the button rename.

---

## 9. Components

The current class names are the standard. Renames are deferred (section 11), so each entry lists the class in use now.

| Component | Class (now) | Variants | Contract | Status |
|---|---|---|---|---|
| Button | `.btn` + `.btn-primary`, `.btn-outline`, `.btn-accent-glow`, `.btn-nav-cta`, `.btn-text-full` / `.btn-text-mobile` | primary (fill), outline (secondary), glow (hero), nav (compact) | `<a>` or `<button>` with text | Radius unified (nav CTA to `--radius-sm`). Five heights still differ. |
| Text link | `.card-link`, `.testimonials-link` | card action, section link | `<a>` with text and optional arrow | `.testimonials-link` now uses brand-text. |
| Eyebrow | `.section-eyebrow`, `.edc-badge-pill` | label, pill | `<span>` uppercase, brand-text | Contrast fixed (was 2.3:1). |
| Section header | `.section-title` + `.section-lead` in a wrapper | center, split (programs row) | h2 + p in a div | Wrappers differ in max-width and margin. Consolidate later. |
| Card | `.program-card`, `.pricing-card`, `.coach-card-secondary`, `.edc-pillar`, `.safety-card` | featured (pricing) | Slots: media, body, title, meta, desc, footer | Hover lift on non-link cards is decorative. Radius differs (4px and 8px). |
| Badge | `.card-badge`, `.featured-tag`, `.image-label`, `.coach-role-tag`, `.pillar-tag` | media, featured, credential, role, stage | `<span>` | Five near-identical boxes. Each keeps its own name by intent; they share the same tokens. |
| Testimonial | `.testimonial-feature`, `.testimonial-item` | feature, list | `<article>` with meta, stars, quote | Quotes are verbatim review text. Do not edit them. |
| Tabs | `.schedule-tab`, `.schedule-panel` | tab (selected) | `role="tab"` buttons | Arrow-key navigation. Home and End missing. |
| Accordion | `.faq-item`, `.faq-question`, `.faq-answer` | open (`.active`) | Disclosure with button trigger | Keyboard focus now shows. Trigger needs `aria-expanded` (deferred). |
| Modal | `.modal-overlay`, `.modal-card` | open (`.open`) | Overlay, card, close, form | Accent stripe removed. No `role="dialog"` yet (deferred). |
| Form field | `.form-group`, `.form-input`, `.form-select` | input, select | Label + control | Focus outline restored (was removed). |
| Icon button | `.mobile-nav-close`, `.modal-close`, `.footer-social-link` | close, social | Button with `aria-label`, 44px target | Three treatments, one intent. Merge later. |
| Nav link | `.nav-link`, `.mobile-nav-link` | desktop, drawer | `<a>` | No current-page state yet (`.active` is never applied). |
| Footer column | `.footer-col-title`, `.footer-links`, `.footer-nap` | link list, NAP | Heading and list | `.footer-links a` and `.footer-nap a` duplicate rules. |

### Interior-page components (reviews page and forms)

| Component | Class | Notes |
|---|---|---|
| Page hero | `.page-hero`, `.page-title`, `.section-lead` | Eyebrow, display title, lead. Used once per interior page. |
| Trust score | `.trust-score`, `.trust-score-figure`, `.trust-stars` | Numerals in `--font-accent`. |
| Platform card | `.platform-grid-3`, `.platform-card` | Whole card is a link out. Hover lifts 3px; reduced motion disables it. |
| Filter tabs | `.tab-list`, `.tab`, `.tab-count` | `aria-selected="true"` marks the active tab (brand fill). |
| Testimonial card | `.testimonial-grid`, `.testimonial-card`, `.testimonial-meta`, `.testimonial-source` | Reuses the homepage testimonial meta and text. Quotes are verbatim. |
| Form card | `.form-card`, `.form-row`, `.form-textarea`, `.form-hint`, `.form-optional`, `.required` | Same label, input, and select styles as the trial modal. |
| Star rating | `.star-selector`, `.star-buttons-group`, `.star-btn`, `.star-rating-label` | Accent color for selected stars. |
| Photo dropzone | `.dropzone`, `.preview-grid`, `.preview-item` | Dashed border; brand tint on drag-over. |
| Platform checkbox | `.platform-grid`, `.platform-checkbox` | Border brand-tinted when checked. |
| Copy dialog | `.modal-overlay` + `.modal-card`, `.modal-check`, `.clipboard-box`, `.clipboard-text` | Same overlay as the trial modal. |

### Components that look alike and must stay separate

- `.btn-nav-cta` (persistent header conversion) and `.btn-primary` (in-content commitment).
- `.card-link` (card action) and `.testimonials-link` (secondary navigation).
- `.pillar-quote` (brand maxim) and `.testimonial-feature-text` (customer proof). Never present a maxim as a testimonial.
- `.mobile-menu-toggle` (open and closed state) and close buttons (dismiss).
- `.price-val`, `.pillar-num`, `.safety-num`, `.floating-badge-year` (display numerals). Keep separate by meaning.

---

## 10. Do and don't

**Do**
- Reference semantic tokens (`--color-brand-text`, `--color-surface-2`), never raw hex.
- Keep one sentence per line of copy where possible. Limit paragraphs to 68ch.
- Use real offers and real prices in the copy. Verify hours and class times against the live site.

**Don't**
- Side-stripe borders wider than 1px as accents.
- Gradient text (`background-clip: text`).
- Glass: `backdrop-filter` on any element.
- The hero-metric template (big number plus small label plus gradient).
- Identical card grids repeated without a reason.
- Modal as the first response to a question. Exception: conversion triggers, which the product brief specifies (see section 11).
- Em dashes in our copy. Use periods, commas, colons, or parentheses. Testimonial quotes are verbatim and may contain them.
- Pure `#000` or `#fff`.

---

## 11. Decisions and open items

**Decided in this pass**
- Brand red as text on dark is replaced by `--color-brand-text` (`#e0524f`, 5.2:1). Fills keep `#902524`.
- One accent red (`#ff5252`) replaces four near-identical reds (`#ff6b6b`, `#ff5e5d`, `#ff8584`, `#ff5252`).
- Glass (8 `backdrop-filter` lines) removed. The modal-card 4px top accent stripe removed.
- Dead CSS removed: marquee, hero badge strip, trial callout, hero phone direct, facility bar, review cards, mobile proof band, steps, coach pill, footer stamp, community section, feature check, visibility toggles. About 72 rule blocks. Markup and JS checked to confirm no reference.
- Global `:focus-visible` ring and global reduced-motion guard added.
- Input outline restored for keyboard users.
- Weights 300 and 500 mapped to 400. 750 mapped to 800. Unused Montserrat italic 700 and 900 dropped from the font request.
- Mobile motto no longer renders larger than the mobile hero.
- Light-text line heights raised to 1.55.
- Em dash removed from our copy (testimonial quotes kept verbatim).
- `--font-mono` renamed `--font-accent`. Space Grotesk kept for numerals (identity choice).
- Verified: no horizontal overflow at 375px, no console errors, layout parity within 22px on the page (pillar section, from the line-height change).

**Open (needs a decision)**
1. **Conversion path.** Every conversion trigger (11 total) opens the trial intake form first. PRODUCT.md calls for a one-click modal, so it is kept. Add an in-page explanation above the modal if you want one.
2. **Coach grid.** Three staff cards sit in a four-column grid above 1024px, which leaves an empty cell. Pick three columns or add a fourth coach.
3. ~~Reviews page.~~ Done. See "Reviews page rebuild" below.
4. **Hero video.** It autoplays and loops with no pause control. Add a pause button and respect reduced motion.
5. **"Pay Drop-In at Door"** opens the 3-day pass intake form. Decide whether it should open a drop-in form.
6. **Program card links** use `href="#trial"`, which has no target. The JS intercepts them, so they work. Replace with a real anchor if the JS fails.
7. **Review submission promises.** The reviews form offers "Feature your testimonial on our homepage & reviews hub" and accepts photos, but nothing is sent to the club. Reviews stay in the submitter's browser. Decide whether to connect a form endpoint (the trial form already posts to Formspree), reword the checkbox, or remove it.

**Deferred (safe to do later, larger diffs)**
- Spacing: move 32 px values to a 4pt scale (`--space-1` to `--space-10`). About 121 off-scale uses.
- Breakpoints: 13 values to 5. Remap one at a time with visual checks at each edge width.
- Shadows: about 20 inline values to three tokens.
- Five `transition: all` declarations: list the properties.
- About 40 `!important` declarations, mostly in mobile overrides for pricing and hero.
- Section padding: five sections hard-code `52px 0`. Move them to `--space-section`.
- Component renames to the standard names in section 9. Mechanical, but each rule block needs checking.
- OKLCH conversion of the hex tokens. Kept as hex for exact render parity.
- Button heights: five values (42px to 50px). Pick two.

---

### Reviews page rebuild (Nov 5, 2026)

Removed from the reviews page: Barlow Condensed, Inter, JetBrains Mono, the `--ink`, `--paper`, `--primary`, `--muted`, `--display`, `--body`, `--mono`, `--white`, and `--gold` variables, the page's `<style>` block, and all inline styles.

Rebuilt on the homepage shell (top bar, nav, drawer, CTA banner, footer, trial modal) and the shared components above.

Content changes, all flagged for review:
- Removed the eight invented card headlines. They were not review text. (The homepage already dropped its headlines for the same reason.)
- Removed the role and tenure lines ("Local Guide (17 reviews)", "BJJ Brown Belt", "Ages 7 & 10", and similar), the "Verified" checks, and the "Hayward, CA" and "East Bay" locations. None appear in the reviews. Restore only with a source.
- Sarah Lindqvist's card had "(ages 7 and 10)" inserted into her review. The text now matches the structured data.
- Google pill said "35+ Reviews". It now says "5.0 across 42 reviews", matching the homepage.
- Removed the quick-link bar. It repeated the platform cards and the nav.
- Replaced the WrestlingIQ "Start 3-Day Mat Pass" link with the trial modal, as on the homepage.

Behavior changes:
- The submit flow builds its output with `textContent`, not `innerHTML`. A submitted review can no longer inject markup into the page.
- The "Submitted just now" card and the stored copy live only in this browser. The page still offers a checkbox labeled "Feature your testimonial on our homepage & reviews hub", and that promise is not kept. Uploaded photos are previewed but never sent anywhere. See section 11.

---

## 12. Sources

- Token audit and typography audit (Nov 4, 2026): saved in the session scratchpad as `audit_tokens.md` and `audit_typography.md`. The component audit is in the session record only.
- Transform script that applied the token and banned-pattern changes: `design_system_transform.py` in the same scratchpad.
- Previous auto-extracted DESIGN.md (from the old live site): replaced. Kept in the scratchpad as `DESIGN_old_autoextract.md`.
- PRODUCT.md: brand, audience, and anti-references. The register and product principles in this file come from it.

---

## 13. Astro design system (site/)

### File map

| Path | Holds |
|---|---|
| `site/src/styles/tokens.css` | `:root` tokens (primitives `--ref-*`, then semantic tokens) |
| `site/src/styles/base.css` | resets, typography, focus, shared layout helpers |
| `site/src/styles/buttons.css` | `.btn*` and text buttons |
| `site/src/styles/shell.css` | topbar, nav, drawer, footer |
| `site/src/styles/sections.css` | shared section scaffolding and section-level rules |
| `site/src/styles/cards.css` | card families |
| `site/src/styles/forms.css` | form controls, consent blocks, newsletter |
| `site/src/styles/overlays.css` | trial modal and overlays |
| `site/src/styles/disclosure.css` | accordions, schedule list, other disclosure patterns |
| `site/src/styles/global.css` | only `@import`s, in the order above (buttons before shell) |
| `site/src/components/shell/` | SiteHeader, SiteFooter, TrialModal, PageScripts |
| `site/src/components/home/` | the nine homepage sections |
| `site/src/components/ui/` | Button, SectionHeader, PageHero, InfoCard, FactList, ScheduleList, CtaBanner |
| `site/src/components/forms/` | TrialForm, ConsentSms, ConsentMedia, NewsletterForm, ContactForm, ReviewForm |
| `site/src/components/templates/` | ProgramPage |
| `site/src/layouts/` | Layout (home), InteriorLayout |
| `site/src/data/` | facts, schedule, programs, faqs, media, nav, reviews, routes, jsonld-home |

### Rules

1. **One selector, one file.** A selector, its base rule, and all of its `@media` overrides live in exactly one file, with each override after its base rule and with the same declarations as the reference. `node scripts/css-homes.mjs` (from `site/`) enforces this against commit `d78a5da`.
2. **Override rule.** Scoped component styles have specificity (0,2,0) and beat global rules (0,1,0). A section rule and its overrides therefore move together, never one without the other.
3. **Scoped-style rule.** A section component may hold a `<style>` block only for rules used by that section alone (today Hero, Programs, Coaches, Testimonials, Safety, Pricing, CtaBanner, Schedule). Anything shared goes in a global file. Faq, SiteHeader, SiteFooter, and TrialModal have no `<style>`.
4. **Tokens before literals.** A literal used in two or more files becomes a token. Two aliases were added in DS-6.

### Token table (semantic)

| Group | Tokens |
|---|---|
| Brand | `--color-brand`, `--color-brand-hover`, `--color-brand-text`, `--color-brand-glow`, `--color-border-brand` |
| Accent and status | `--color-accent`, `--color-star`, `--color-success`, `--color-warning` |
| Surfaces | `--color-canvas`, `--color-surface-0`, `--color-surface-1`, `--color-surface-2` |
| Borders and text | `--color-border-subtle`, `--color-border-default`, `--color-text-strong`, `--color-text-default`, `--color-text-muted` |
| Shape and layout | `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-pill`, `--container-max`, `--space-section`, `--space-section-tight` (`52px 0`) |
| Type | `--font-sans`, `--font-accent` |

### Fingerprint how-to (run from `site/`)

1. Run `PORT=4340 bash scripts/check-home.sh B2` (builds, serves, captures 8 widths with default, reduced-motion, focus, and hover passes, text, and screenshots into `output/ds/`).
2. It diffs against `tests/baselines/B2` with `fingerprint-diff.mjs` (exact allow entries; unused entries are an error), `pixel-diff.mjs` (threshold 0), and a text diff. Exit 0 means no difference.
3. Every unexplained difference is a stop. Do not widen an allow file.
4. Other checks: `python3 ../scripts/check_dist.py`, `node scripts/smoke.mjs --base http://localhost:4340`, `bash ../scripts/copy_audit.sh src dist`, `node scripts/css-homes.mjs`.
5. Baselines in `tests/baselines/` are history: B0 (d78a5da), B1 (bio removed, D18), B2 (medal claims removed, D21). New intentional content changes get a new baseline, never an overwrite.
