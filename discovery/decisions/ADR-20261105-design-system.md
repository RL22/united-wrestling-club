# ADR-20261105-design-system: One stylesheet, brand tokens, and banned patterns

- **Date:** 2026-11-05
- **Status:** Approved
- **Scope:** UX · Architecture

## Context & Problem
The homepage, reviews page, and submit redirect each carried their own styles. The reviews page used Barlow Condensed, Inter, JetBrains Mono, and separate `--ink` and `--paper` variables. The auto-extracted DESIGN.md described the old live site.

## Approved Solution
1. **One stylesheet.** `assets/css/uwc.css` holds all tokens and components. Pages do not carry `<style>` blocks and do not use inline styles.
2. **Brand text vs fills.** `#902524` (`--color-brand`) is for fills and borders only. Red text on dark uses `--color-brand-text` (`#e0524f`, 5.2:1 on the canvas).
3. **One accent red** (`#ff5252`) for hero emphasis, stars, and focus rings.
4. **Fonts:** Montserrat for all text. Space Grotesk (`--font-accent`) for numerals and prices, kept as an identity choice.
5. **Banned patterns:** side-stripe borders over 1px, gradient text, glass (`backdrop-filter`), pure `#000` or `#fff`, em dashes in our own copy. Verbatim review quotes are exempt.
6. **`DESIGN.md` is the spec** and describes the stylesheet.

## Alternatives Rejected
1. **Per-page styles:** rejected. Caused the reviews page to drift to a second type system.
2. **Auto-extracted DESIGN.md from the live site:** rejected. Described the old site and got the colors wrong.
3. **OKLCH tokens now:** deferred. Hex kept for exact render parity during the cutover.

## Impacted Files
- `assets/css/uwc.css`
- `DESIGN.md`
- `v01/index.html`
- `reviews/index.html`
- `register/index.html`
- `contact/index.html`
- `submit-review/index.html`
