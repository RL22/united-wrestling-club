# United Wrestling Club design system

This document describes the current United Wrestling Club Astro site, with the homepage as the primary reference. The implementation in `site/src/` is authoritative; update this document when the design changes. Product context lives in [PRODUCT.md](PRODUCT.md).

A [visual companion](site/public/design-system/index.html) illustrates the current tokens, typography, logo treatments, and components.

## Design intent

The site should feel like a serious, welcoming wrestling room: cinematic footage, strong athletic typography, dark surfaces, and restrained crimson accents. It should make classes, practice times, coaching, pricing, and the trial offer easy to find on a phone.

## Color

Semantic tokens are defined in `site/src/styles/tokens.css`. Prefer them to new literal colors.

| Token | Value | Use |
|---|---|---|
| `--color-brand` | `#902524` | Primary fills, borders, and glows |
| `--color-brand-hover` | `#a82e2d` | Hover fill |
| `--color-brand-text` | `#e0524f` | Brand-colored text on dark surfaces |
| `--color-accent` | `#ff5252` | Hero emphasis, stars, and focus rings |
| `--color-success` | `#22c55e` | Success and status |
| `--color-warning` | `#f59e0b` | Status and coach credentials |
| `--color-canvas` | `#090a0d` | Page background |
| `--color-surface-0` / `1` / `2` | `#0b0d11` / `#111318` / `#181b22` | Section and card surfaces |
| `--color-border-subtle` / `default` | `#191c24` / `#232733` | Dividers and outlines |
| `--color-text-strong` | `oklch(0.98 0.004 25)` | Headings and emphasis |
| `--color-text-default` / `muted` | `#f0f2f5` / `#9fa6b2` | Body and secondary text |

Use `--color-brand-text` for red text on dark backgrounds. Keep status colors purposeful and preserve sufficient contrast. Existing component CSS contains some literal colors; use tokens for new shared rules.

## Typography

- **Montserrat** is the primary family for headings, body copy, navigation, and controls. Display headings are heavy and uppercase; body copy uses sentence case and generous line height.
- **Space Grotesk** is the accent family for figures such as prices and phone numbers.
- The desktop hero title uses `clamp(2.5rem, 6.2vw, 4.6rem)`; at 768px and below it uses `clamp(2.1rem, 9.2vw, 2.75rem)`.
- Section headings, leads, and eyebrows use the shared `.section-title`, `.section-lead`, and `.section-eyebrow` classes. Keep headings concise and body text readable at mobile widths.

## Layout and shape

- The shared container is capped at `1260px`. Default section spacing is `clamp(70px, 9vw, 130px)`; the tight section token is `52px 0`.
- Radius tokens are 4px (`--radius-sm`), 8px (`--radius-md`), 14px (`--radius-lg`), and 9999px (`--radius-pill`). Borders and surface changes provide most separation.
- The desktop navigation switches to a mobile drawer at 960px. The wordmark without wrestlers is used at 768px and below; the drawer always uses that wordmark. Larger screens use the full lockup.
- Breakpoints vary by component. Check the component's CSS rather than assuming a single site-wide breakpoint scale.

## Homepage

`site/src/pages/index.astro` composes these sections in order:

1. **Hero:** full-bleed looping video, dark directional scrim, headline, offer, and trial button. The section has a minimum height of `95svh` with copy aligned toward the bottom. Mobile spacing keeps the CTA higher in the initial viewport.
2. **Programs and schedule:** a program overview with a link to all classes, followed by tabbed practice times and a link to the full schedule.
3. **Coaches:** a lead-coach editorial layout followed by three staff cards. The staff grid is three columns above 1100px and one column at narrower widths; cards stack their image and text at 600px and below.
4. **Pricing and testimonials:** the pricing overview precedes a horizontally scrolling review track. Desktop shows three complete cards and part of the next; narrower screens show fewer. All cards stretch to a common height, preventing height changes during scrolling. Buttons and horizontal scrolling let visitors control the track; it does not autoplay. Excerpts are checked against `site/src/data/reviews.ts` at build time.
5. **Safety, FAQ, and final CTA:** reinforce the training environment, answer common questions, and offer the trial.

The header links to Classes, Schedule, Reviews, and Pricing pages. Coaches links to the homepage coaching section. The mobile drawer also links to FAQ, the Hayward location, and Contact. The persistent trial button opens the intake modal.

## Motion and interaction

- The hero video has a subtle scroll-linked transform when the browser supports scroll-driven animations and the visitor has not requested reduced motion. The video is scaled to cover its movement; the copy, scrim, and texture remain stationary. Unsupported browsers retain a static video position.
- The testimonial arrows scroll by one card. Smooth scrolling is disabled for reduced-motion preferences. The track also supports direct horizontal scrolling.
- Hover treatments include color and border changes and decorative card lifts. Use transform and opacity for new movement, and keep content available without animation.
- `site/src/styles/base.css` supplies a global reduced-motion rule. Scroll-linked effects need their own reduced-motion guard; shortening animation duration alone does not disable them.
- **Known limitation:** the hero video autoplays and loops without a pause control. Reduced motion currently disables the parallax, not the video itself. A pause mechanism and video behavior for reduced motion remain open accessibility work.

## Components and states

| Component | Current implementation |
|---|---|
| Buttons and links | `.btn` variants and `.card-link`; use real links for navigation and buttons for actions |
| Header and drawer | `SiteHeader.astro`, with navigation data in `site/src/data/nav.ts` |
| Program cards | `.program-card`, with media, title, schedule, description, and trial action |
| Coach cards | `.coach-card-line` and `.coach-card-secondary` |
| Reviews | `.testimonial-track` and `.testimonial-card`, with stars, excerpt, and attribution |
| Schedule | `.schedule-tab` and `.schedule-panel` |
| FAQ | `.faq-item`, `.faq-question`, and `.faq-answer` |
| Trial form | `TrialModal.astro` and shared form components |
| Footer | `SiteFooter.astro`, including location and contact links |

A global `:focus-visible` rule supplies a 2px accent outline with a 3px offset. Keep controls keyboard accessible and provide accessible names for icon-only actions. Verify focus, touch targets, and reduced motion when changing interactions.

## Source map

| Path | Responsibility |
|---|---|
| `site/src/styles/tokens.css` | Color, type, radius, and layout tokens |
| `site/src/styles/base.css` | Reset, typography, focus, and reduced-motion defaults |
| `site/src/styles/buttons.css` | Shared button and text-button styles |
| `site/src/styles/shell.css` | Header, navigation, drawer, and footer |
| `site/src/styles/sections.css`, `cards.css` | Shared section and card styles |
| `site/src/styles/forms.css`, `overlays.css`, `disclosure.css` | Forms, overlays, and disclosure patterns |
| `site/src/components/home/` | Homepage sections and their section-specific styles |
| `site/src/components/shell/` | Header, footer, trial modal, and shared scripts |
| `site/src/components/ui/` | Shared UI components |
| `site/src/data/` | Navigation, reviews, schedules, programs, and other site data |
| `site/public/assets/` | Full logo lockup and mobile wordmark |

Shared rules belong in the appropriate stylesheet. A homepage component may contain scoped styles for rules unique to that section. Keep each selector and its responsive overrides together, and use the existing component patterns before introducing a new one.

## Verification

Build the site and run the distribution and copy checks from the repository root:

```sh
npm --prefix site run build
bash scripts/copy_audit.sh site/dist
python3 scripts/check_dist.py --final
```

Use a supported Node version from `site/package.json`. For visual changes, check desktop and mobile widths, keyboard focus, the mobile drawer, and reduced-motion behavior. For slider or layout changes, check long content and confirm that scrolling does not move surrounding sections.
