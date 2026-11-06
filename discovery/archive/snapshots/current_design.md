---
status: snapshot
group: archive
---

# United Wrestling Club: Current Design System & Visual Identity Specification

> **Status: Snapshot.** Describes the pre-rebuild site (`unitedwrestlingclub.com`, late Oct 2026). Its findings were addressed by the Astro build, live on 2026-11-05 (see `decisions/ADR-20261106-astro-design-system.md`). Read as history, not as current state.
## Document: `current_design.md`

> **Extracted From:** `https://www.unitedwrestlingclub.com/`  
> **Extraction Source:** [`/Users/rodneylewis/Sprintz/design-extract-output/united-wrestling-club/`](../../../../../../design-extract-output/united-wrestling-club/unitedwrestlingclub-com-DESIGN.md) (33 Design Tokens & CSS Artifacts)  
> **Media Vault:** [`discovery/archive/snapshots/live_site_content/assets/`](live_site_content/assets)  
> **Date:** October 2026

---

## 1. Brand Essence, Tone & Visual DNA

| Dimension | Current Site Reality | Target Rebuild Evolution |
| :--- | :--- | :--- |
| **Aesthetic Material** | **Flat Dark UI** with high-contrast crimson accents | Modern, high-performance dark combat sports aesthetic with refined subtle borders & glassmorphism overlays |
| **Brand Vibe** | Tough, gritty, traditional wrestling & combat academy | **Elite Olympic Lineage & Family Academy** (blending gritty Dagestani toughness with clean, professional family trust) |
| **Design Grade** | **A (WCAG 100% Contrast Score)** | Preserves 100% WCAG contrast while modernizing typography and micro-interactions |
| **Color Archetype** | Crimson Blood Red (`#902524`), Jet Black (`#000000`), Charcoal (`#191919`), Crisp White (`#ffffff`) | Standardized semantic color tokens wired directly to Tailwind CSS v4 |
| **Voice & Personas** | Friendly, direct, "you-only" pronoun posture, Title Case headings | Authoritative, inspiring, and welcoming to beginners and parents |

---

## 2. Complete Color Palette & Token Architecture

```
                                UWC COLOR PALETTE
                                        │
        ┌───────────────────────────────┼───────────────────────────────┐
        ▼                               ▼                               ▼
    PRIMARY:                         CANVAS:                        ACCENTS:
#902524 (Crimson)               #000000 (Jet Black)             #cacaca (Muted Grey)
RGB: 144, 37, 36                #191919 (Dark Charcoal)         #efefef (Off-White)
HSL: 1°, 60%, 35%               #232323 (Card Charcoal)         #ffffff (Pure White)
```

### 1. Primary Brand Crimson
* **Primary Hex:** `#902524` (169 active DOM elements)
* **RGB:** `rgb(144, 37, 36)` | **HSL:** `hsl(1, 60%, 35%)`
* **Role:** Brand logo crest outer rings, high-intent CTA button fills (`"Download Schedule"`, `"Register"`), active navbar indicators, and price callouts.

### 2. Neutral Canvas & Background Layers
* **Canvas Black:** `#000000` (167 elements) — Page background, modal scrims, and footer background.
* **Elevated Container Dark:** `#191919` / `#232323` (22 elements) — Schedule grid header rows, coach profile card containers, and class feature cards.
* **Mid-Tone Slate:** `#282828` — Secondary card backgrounds and inactive schedule grid day slots.

### 3. Typography & Border Neutrals
* **Primary Text White:** `#ffffff` (207 elements) — High-contrast display headlines (H1/H2) and body text on dark containers.
* **Secondary Text Muted:** `#cacaca` (8 elements) — Meta subtitles, class time stamps, and footer legal text.
* **Subtle Highlight:** `#efefef` — Hover states and contrast borders.

### 4. Atmospheric Gradients
```css
/* Hero Dark Vignette (Fades video loop into background) */
background-image: linear-gradient(120deg, rgba(10, 10, 10, 0.7) 60%, rgba(144, 37, 36, 0.3) 100%);

/* Card Depth Gradient */
background-image: linear-gradient(145deg, rgba(20, 20, 20, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%);

/* Section Surface Fade */
background-image: linear-gradient(135deg, rgb(37, 37, 35) 0%, rgb(0, 0, 0) 100%);
```

---

## 3. Typography System (`Montserrat`)

The current branding relies almost 100% on **Montserrat** (268 of 269 elements), establishing a clean, geometric, athletic, and modern voice.

### Type Hierarchy Matrix

| HTML Level | Font Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Current Application |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Display H1** | `67.2px` | `4.2rem` | `900` (Black) | `70.56px` | `2.5px` | Homepage hero title (`"UNITED WRESTLING CLUB"`) |
| **Section H2** | `28.8px` | `1.8rem` | `700` (Bold) | `37.44px` | `1.0px` | Section titles (`"OUR PROGRAMS"`, `"COACHES"`) |
| **Subhead H3** | `24.0px` | `1.5rem` | `500` (Medium) | `38.4px` | `1.2px` | Card headers, program titles, FAQ questions |
| **Nav & Badges** | `19.2px` | `1.2rem` | `700` (Bold) | `normal` | `4.0px` | Navbar links, category tags |
| **Body Large** | `17.6px` | `1.1rem` | `700` (Bold) | `normal` | `1.0px` | Lead paragraph copy, pricing amounts |
| **Body Text** | `16.0px` | `1.0rem` | `400` (Regular)| `normal` | `normal` | General body paragraphs, curriculum bullet points |
| **Captions** | `14.0px` | `0.875rem`| `500` (Medium) | `normal` | `normal` | Timestamps, button subtitles, form helpers |
| **Micro Labels** | `12.0px` | `0.75rem` | `700` (Bold) | `normal` | `1.0px` | Dropdown links, copyright notice, tags |

*(Note: 1 single legacy instance of `Times` was detected in the legacy CSS; this must be purged in the rebuild).*

---

## 4. Spacing, Shapes & Elevation

### Spacing Scale
* **Base Unit:** `2px`
* **Scale Tokens:** `2px` · `24px` · `29px` · `40px` · `80px` · `96px` · `128px` · `190px`
* **Container Padding:** `24px` on mobile screens, `80px–96px` section padding on desktop.

### Corner Radii (Shapes)
* **Pill Buttons (`25px – 30px`):** Primary action buttons (`"Download Schedule"`, `"Register Now"`, `"Book Trial"`). Gives call-to-actions an athletic, approachable, and modern feel.
* **Cards & Containers (`8px – 15px`):** Used on class cards, pricing tables, coach profiles, and modal containers. Sharp, disciplined athletic framing without being boxy.
* **Micro Badges (`4px`):** Filter pills, date badges, and status tags.

### Elevation & Depth (Shadow Scale)
* **Crimson Brand Glow (Primary CTA hover):**  
  `box-shadow: rgba(144, 37, 36, 0.4) 0px 4px 15px 0px;`
* **Ambient Crimson Accent:**  
  `box-shadow: rgba(144, 37, 36, 0.2) 0px 0px 20px 0px;`
* **Subtle Dark Card Shadow:**  
  `box-shadow: rgba(0, 0, 0, 0.18) 0px 4px 18px 0px;`
* **Modal / Dropdown Elevation:**  
  `box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 30px -10px;`

---

## 5. Official Visual Assets & Media Inventory

All visual assets have been extracted, cataloged, and stored in [`discovery/archive/snapshots/live_site_content/assets/`](live_site_content/assets):

1. **Official High-Res Crest Logo ([`uwc_crest_logo_highres.png`](live_site_content/assets/uwc_crest_logo_highres.png)):**
   * Transparent circular crest badge.
   * Top arch: Crimson background with world map halftone texture.
   * Center: Distressed industrial stencil typography spelling **`UWC`** on a dark charcoal ribbon with `"UNITED WRESTLING CLUB"`.
   * Base: Crimson arena circle featuring two wrestlers in live collegiate/freestyle takedown action.
   * Border: Triple concentric racing/mat boundary rings in crimson and white.
2. **Horizontal Navbar Logo ([`logo.png`](live_site_content/assets/logo.png)):**
   * Optimized horizontal asset for fixed header navigation.
3. **Leadership Portraits:**
   * **Founder Karim Zemaryalai:** [`founder.jpg`](live_site_content/assets/founder.jpg) (Mat-side competition coaching).
   * **Co-Founder Rashad Rahimi:** [`co-founder.jpg`](live_site_content/assets/co-founder.jpg) (International competition portrait).
   * **Head Coach Naweed Zemaryalai:** [`head-coach.jpg`](live_site_content/assets/head-coach.jpg) (Collegiate coaching stance).
4. **Facility Media:**
   * **Mat Arena Photo:** [`uwc_place.webp`](live_site_content/assets/uwc_place.webp) (Wide interior view of 30139 Industrial Pkwy SW Unit C).
   * **Hero Background Video:** [`/UWC.mp4`](../../../UWC.mp4) (17.72 MB raw uncompressed video loop; scheduled for 2.2 MB WebM/MP4 compression).
5. **Community & Technique Media Vault ([`assets/facebook/`](live_site_content/assets/facebook)):**
   * 10 high-res photos and video stills including clinic action with 2024 Olympic Champion Magomed Ramazanov and Karim Zemaryalai.

---

## 6. Technical Design Debt & Elevation Opportunities for the Rebuild

| Area | Current Live Implementation | Rebuild Target Spec | Impact |
| :--- | :--- | :--- | :--- |
| **CSS Architecture** | Runtime `styled-components@5.3.11` (1,639 duplicate declarations, 100% unused on initial paint) | **Tailwind CSS v4** (using extracted `@theme` tokens in `unitedwrestlingclub-com-tailwind-v4.css`) | Drops CSS bundle size from ~180 KB to < 12 KB; zero runtime JS styling |
| **Hero Media** | **17.72 MB uncompressed `.mp4`** blocking mobile First Contentful Paint | **2.2 MB WebM/MP4** + WebP video poster with lazy loading | Mobile LCP drops from 4.2s to < 1.1s |
| **Interactive Modals** | Redirects users away to raw WrestlingIQ session URLs | **Native 1-Click Trial Pass Modal** with athlete selector & media opt-out | 6–10% conversion rate on local search traffic |
| **Schedule Grid UI** | Broken table with duplicated 7:30 PM & 8:00 PM rows; static desktop-only view | **Filterable dynamic grid** with category pills (`Kids`, `Adult`, `BJJ`, `Boxing`) + swipeable mobile card stack | Eliminates parent confusion and booking friction |
| **Social Proof Integration** | Buried text-only credentials; 0 video proofs | **Lightweight Video Wall** showcasing Olympic Champion Magomed Ramazanov clinic and Knee Tap tutorials | Instant high-credibility proof above the fold |

---

## 7. Tailwind CSS v4 Theme Token Mapping

The rebuild can directly import these extracted tokens into `tailwind.config.ts` or the Tailwind v4 `@theme` block:

```css
@theme {
  --color-uwc-primary: #902524;
  --color-uwc-black: #000000;
  --color-uwc-charcoal: #191919;
  --color-uwc-card: #232323;
  --color-uwc-slate: #282828;
  --color-uwc-muted: #cacaca;
  --color-uwc-white: #ffffff;

  --font-montserrat: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 15px;
  --radius-pill: 30px;

  --shadow-glow: 0px 4px 15px 0px rgba(144, 37, 36, 0.4);
  --shadow-ambient: 0px 0px 20px 0px rgba(144, 37, 36, 0.2);
  --shadow-card: 0px 4px 18px 0px rgba(0, 0, 0, 0.18);
  --shadow-modal: 0px 10px 30px -10px rgba(0, 0, 0, 0.3);
}
```
