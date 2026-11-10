# United Wrestling Club design system

This document describes the United Wrestling Club Astro site, with the homepage as the primary reference. Styling is built on Tailwind CSS 4 and a custom daisyUI 5 theme. The implementation is authoritative; update this document when the design changes. Product context lives in [PRODUCT.md](PRODUCT.md).

Paths below are relative to the site project root. Locally that is `site/`; on `origin` the site sits at the repository root (see [AGENTS.md](AGENTS.md)).

A [visual companion](src/pages/design-system/index.astro) (served at `/design-system/`) illustrates the current tokens, typography, logo treatments, and components.

## Design intent

The site should feel like a serious, welcoming wrestling room: cinematic footage, strong athletic typography, dark surfaces, and restrained crimson accents. It should make classes, practice times, coaching, pricing, and the trial offer easy to find on a phone.

## Color

The `uwc` daisyUI theme is defined in `src/styles/global.css` and is the default (and only) theme. Prefer daisyUI color names (`primary`, `base-100`, `base-content`, and so on) so components follow the theme. Brand-only roles that daisyUI does not cover are defined in the same file's `@theme` block.

| Role | Class or value | Use |
|---|---|---|
| Primary | `primary` / `bg-primary`, `#902524` | Primary fills, borders, and glows |
| Brand text | `text-brand-text`, `#e0524f` | Labels and eyebrows on dark surfaces |
| Accent | `accent` / `text-accent`, `#ff5252` | Hero emphasis, stars, times, and focus rings |
| Page canvas | `bg-base-100`, `#090a0d` | Page background |
| Surfaces | `bg-base-200` / `bg-base-300`, `#111318` / `#181b22` | Cards, raised sections, and modals |
| Borders | `border-neutral` (`#232733`), `border-base-300` | Outlines and dividers |
| Text | `text-base-content`, `#f0f2f5`; `text-muted`, `#9fa6b2` | Headings and body; secondary text |
| Status | `success`, `warning`, `error`, `info` | Status, coach credentials, errors, and program tints |

Keep status colors purposeful and preserve sufficient contrast. Program tints on the schedule use `primary` (youth), `warning` (scholastic), `info` (adult), and `success` (open mat), at reduced opacity.

## Typography

- **Montserrat** (`font-sans`) is the primary family for headings, body copy, navigation, and controls. Display headings are heavy and uppercase; body copy uses sentence case and generous line height.
- **Space Grotesk** (`font-accent`) is the accent family for figures such as prices and phone numbers.
- The desktop hero title uses `clamp(2.5rem, 6.2vw, 4.6rem)`; at 768px and below it uses `clamp(2.1rem, 9.2vw, 2.75rem)`.
- Section headings, leads, and eyebrows are set with utility classes on the shared `SectionHeader` and `PageHero` components. Keep headings concise and body text readable at mobile widths.

## Layout and shape

- Wrap content in `container-uwc` (max width `1260px`, centered, side padding `clamp(20px, 4vw, 40px)`).
- Vertical section spacing uses the `section-y` utility (`clamp(70px, 9vw, 130px)`); `section-y-tight` is `52px`. Use these instead of a shorthand padding, so the sides stay at zero on mobile.
- Radius tokens: 4px for fields and selectors (`rounded-field`, and checkboxes and toggles), 8px for boxes and cards (`rounded-box`), and pills only where a control is intentionally round.
- The desktop navigation switches to a mobile drawer at 960px. The wordmark without wrestlers is used at 768px and below; the drawer always uses that wordmark. Larger screens use the full lockup.
- Footer columns: from 961px, the brand and Mat Report newsletter share the first column, followed by Programs, Academy, and Hayward Headquarters in one row. From 769px, Programs and Academy stack under the brand in the first column. Below 769px, one column.
- Breakpoints vary by component. Check each component's classes rather than assuming a single site-wide scale.

## Homepage

`src/pages/index.astro` composes these sections in order:

1. **Hero:** full-bleed looping video, dark directional scrim, headline, offer, and trial button. The section has a minimum height of `95svh` with copy aligned toward the bottom. Mobile spacing keeps the CTA higher in the initial viewport.
2. **Programs and schedule:** a program overview with a link to all classes, followed by tabbed practice times and a link to the full schedule.
3. **Coaches:** a lead-coach editorial layout followed by three staff cards. The staff grid is three columns above 1100px and one column at narrower widths; cards stack their image and text at 600px and below.
4. **Pricing and testimonials:** the pricing overview precedes a horizontally scrolling review carousel. Desktop shows three complete cards and part of the next; narrower screens show fewer. Buttons and horizontal scrolling let visitors control the carousel; it does not autoplay. Excerpts are checked against `src/data/reviews.ts` at build time.
5. **Safety, FAQ, and final CTA:** reinforce the training environment, answer common questions in native `<details>` accordions, and offer the trial.

The header links to Classes, Schedule, Reviews, and Pricing pages. Coaches links to the homepage coaching section. The mobile drawer also links to FAQ, the Hayward location, and Contact. The persistent trial button opens the intake modal.

## Schedule page

`/schedule/` is built from `src/data/schedule.ts` and the `ScheduleWeek` component (`src/components/pages/schedule/ScheduleWeek.astro`).

- **Large screens (1024px and up):** a Monday to Saturday week calendar with a 6 AM to 10 PM time axis. Each class is placed at its start and end time, color-coded by program, with a legend above. Sunday is omitted because the club is closed.
- **Below 1024px:** four program tabs (in a 2×2 grid on phones) with one class list below. The tabs use the shared `.schedule-tab` and `.schedule-panel` hooks driven by the script in `PageScripts.astro`.
- Rows marked `pending` in the data stay hidden, as they do on the homepage.

## Motion and interaction

- The hero video autoplays and loops. The scroll-linked parallax from the earlier site was removed in the daisyUI conversion; reinstate it with `@keyframes` in `global.css` if wanted, guarded for reduced motion.
- The testimonial arrows scroll the carousel by one card. Smooth scrolling is disabled for reduced-motion preferences. The track also supports direct horizontal scrolling.
- Hover treatments include color and border changes and lift effects. Use transform and opacity for new movement, and keep content available without animation.
- `global.css` supplies a global reduced-motion rule in `@layer base`. Scroll-linked effects need their own reduced-motion guard; shortening animation duration alone does not disable them.
- **Known limitation:** the hero video autoplays and loops without a pause control. Reduced motion does not stop the video itself. A pause mechanism and video behavior for reduced motion remain open accessibility work.

## Components and states

| Component | Implementation |
|---|---|
| Buttons and links | daisyUI `btn` variants (`btn-primary`, `btn-outline`, `btn-ghost`); use real links for navigation and buttons for actions |
| Header and drawer | `src/components/shell/SiteHeader.astro`, with navigation data in `src/data/nav.ts` |
| Program cards | `card` with media, title, schedule, description, and trial action |
| Coach cards | `card` components in `src/components/home/Coaches.astro` |
| Reviews | `carousel` with `carousel-item` cards, stars, excerpt, and attribution |
| Schedule | `ScheduleWeek` (calendar and tabs), with `.schedule-tab` and `.schedule-panel` hooks |
| FAQ | native `details` with `collapse` and `collapse-arrow` |
| Forms | daisyUI `input`, `select`, `textarea`, `checkbox`, `fieldset`, and `alert` for status messages |
| Trial modal | daisyUI `modal`; open by adding `modal-open` to `#trialModal` |
| Footer | `src/components/shell/SiteFooter.astro`, with location and contact links |

A global `:focus-visible` rule supplies a 2px accent outline with a 3px offset. Keep controls keyboard accessible and provide accessible names for icon-only actions. Verify focus, touch targets, and reduced motion when changing interactions.

## Source map

| Path | Responsibility |
|---|---|
| `src/styles/global.css` | Tailwind import, the `uwc` daisyUI theme, brand `@theme` tokens, `section-y` and `container-uwc` utilities, focus and reduced-motion base rules |
| `src/layouts/` | Document shell (`Layout.astro`) and interior-page layout |
| `src/components/shell/` | Header, footer, trial modal, and shared page scripts |
| `src/components/ui/` | Shared UI components (page hero, section header, buttons, info cards) |
| `src/components/home/` | Homepage sections |
| `src/components/forms/` | Trial, contact, newsletter, consent, and review forms |
| `src/components/pages/` | Page-specific components (schedule, reviews, contact, classes, and others) |
| `src/pages/design-system/` | Visual companion for the design system |
| `src/data/` | Navigation, reviews, schedules, programs, and other site data |
| `public/assets/` | Full logo lockup and mobile wordmark |

Use daisyUI components and Tailwind utilities for new work. Add a shared rule to `global.css` only when a utility or daisyUI class cannot express it.

## Verification

From the site project root:

```sh
npm run build
```

Then run the distribution and copy checks from the repository root, as AGENTS.md describes. Use a supported Node version from `package.json`. For visual changes, check desktop and mobile widths, keyboard focus, the mobile drawer, the schedule tabs and calendar, and reduced-motion behavior. For carousel or layout changes, check long content and confirm that scrolling does not move surrounding sections.
