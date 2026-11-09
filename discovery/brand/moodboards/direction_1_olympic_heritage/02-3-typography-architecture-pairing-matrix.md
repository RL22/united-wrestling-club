---
type: dossier
status: current
group: brand
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/brand/moodboards/direction_1_olympic_heritage.html"]
shard_of: "discovery/brand/moodboards/direction_1_olympic_heritage.md"
part: "2 of 3"
---

> Part 2 of 3 of [direction_1_olympic_heritage](../direction_1_olympic_heritage.md). Text is verbatim from the original; only links were rewritten.

## 3. Typography Architecture & Pairing Matrix

Direction 1 uses a **tri-tier typographic system** designed to balance imperial Roman inscriptional gravitas, industrial athletic punch, and pristine digital legibility.

```
   CINZEL (Imperial Display Serif)
   "THE DAGESTAN GOLD STANDARD"
              │
              ▼
   OSWALD (Condensed Athletic Sans)
   "OLYMPIC FREESTYLE & FOLKSTYLE ACADEMY"
              │
              ▼
   MONTSERRAT (Modern Geometric Sans)
   "Founded by 1980 Olympic Qualifier Karim Zemaryalai..."
```

### 3.1 Type Hierarchy Specification

| Level | Family | Weight | Size (Desktop / Mobile) | Line Height | Tracking | Application |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display (H1)** | `Cinzel` | `700` (Bold) | `64px / 40px` | `1.1` | `+0.05em` (`2.5px`) | Sovereign page titles, hero manifesto statement, Olympic credential callout |
| **Section Title (H2)** | `Cinzel` | `600` (SemiBold) | `36px / 28px` | `1.2` | `+0.08em` (`2.8px`) | Major section headers (`OUR LEGACY`, `OLYMPIC ROSTER`, `CLASS REGIME`) |
| **Athletic Banner / Tag** | `Oswald` | `700` (Bold) | `22px / 18px` | `1.1` | `+0.12em` (`2.6px`) | Weight classes, schedule times, badge titles (`1980 MOSCOW OLYMPIAN`) |
| **Subheading (H3)** | `Montserrat` | `700` (Bold) | `20px / 18px` | `1.3` | `+0.02em` (`0.4px`) | Card titles, coach names, class titles |
| **Lead Paragraph** | `Montserrat` | `500` (Medium) | `18px / 16px` | `1.6` | `0` | Lead editorial text, introductory philosophy blocks |
| **Body Paragraph** | `Montserrat` | `400` (Regular) | `16px / 15px` | `1.65` | `+0.01em` | Standard text, class descriptions, biographical notes |
| **Badge & Button Label** | `Oswald` | `600` (SemiBold) | `15px / 14px` | `1.0` | `+0.15em` (`2.2px`) | Primary CTAs (`CLAIM FREE TRIAL PASS`), category filter pills |
| **Technical Metadata** | `JetBrains Mono` | `500` (Medium) | `13px / 12px` | `1.4` | `+0.05em` | Geo-coordinates (`37.6688° N`), timestamp records, bout duration counters |

### 3.2 Font Loading & Fallback Stacks
```css
--font-display-serif: 'Cinzel', 'Cinzel Decorative', Georgia, 'Times New Roman', serif;
--font-athletic-sans: 'Oswald', 'Bebas Neue', Impact, sans-serif;
--font-body-sans: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-mono-meta: 'JetBrains Mono', 'SFMono-Regular', Consolas, monospace;
```

---

## 4. UI Component Design Specifications

### 4.1 The Olympic Credential Badge System
Badges represent the high-water marks of UWC’s pedigree and must feel like minted, tactile metallic tokens rather than flat web tags.

1. **Badge Archetype: The Olympic Qualifier Seal**
   * **Container:** Elliptical capsule or circular crest with a `1px` inner gold border (`#D4AF37`) and radial background.
   * **Typography:** `Oswald`, `700` weight, `13px`, uppercase with `letter-spacing: 2.5px`.
   * **Iconography:** Subtle laurel wreath framing or 5-point victory star in `#F3E5AB`.
   * **Shadow:** Ambient golden back-glow `0 0 15px rgba(212, 175, 55, 0.25)`.

2. **Badge Archetype: The Ali Aliyev Dagestan Medal Crest**
   * **Border:** Dual concentric rings in `#7A1C1B` (outer) and `#D4AF37` (inner).
   * **Pill Treatment:** `background: rgba(122, 28, 27, 0.25); border: 1px solid rgba(212, 175, 55, 0.4);`
   * **Text:** `"ALI ALIYEV MEDALIST · MAKHACHKALA, DAGESTAN"`

### 4.2 Interactive Button Suite

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            BUTTON DESIGN SYSTEM                             │
├────────────────────────────────┬────────────────────────────────────────────┤
│ PRIMARY ACTION (Olympic Gold)  │ [ CLAIM FREE TRIAL PASS → ]                │
│                                │ Fill: Metallic Gold Foil Gradient          │
│                                │ Text: Obsidian Black (#0A0A0C), Oswald 700 │
│                                │ Glow: 0 4px 25px rgba(212, 175, 55, 0.4)   │
├────────────────────────────────┼────────────────────────────────────────────┤
│ SECONDARY ACTION (Heritage)    │ [ EXPLORE OLYMPIC LINEAGE ]                │
│                                │ Fill: Transparent with #7A1C1B Background  │
│                                │ Border: 1px solid #D4AF37                  │
│                                │ Text: Warm Parchment (#F5F3EF)             │
├────────────────────────────────┼────────────────────────────────────────────┤
│ GHOST ACTION (Archival Slate)  │ [ VIEW CLASS SCHEDULE ]                    │
│                                │ Fill: rgba(42, 43, 48, 0.4)                │
│                                │ Border: 1px solid rgba(255, 255, 255, 0.1) │
│                                │ Text: Warm Parchment Muted (#C8C5BD)       │
└────────────────────────────────┴────────────────────────────────────────────┘
```

#### Micro-Interactions & Hover Dynamics:
* **Hover:** Button scales `1.025`, gold shadow expands from `15px` to `28px`, and a diagonal metallic light-sweep (`linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.4) 50%, transparent 80%)`) sweeps across the surface over `600ms`.
* **Active / Pressed:** Scales to `0.98`, shadow snaps inward to `0 2px 8px rgba(212, 175, 55, 0.6)`.
* **Focus-Visible:** `outline: 2px solid #F3E5AB; outline-offset: 3px;`.

### 4.3 Hero Showcase Card: "The Sovereign Mat Master"
A museum-grade biographical credential card spotlighting Founder Karim Zemaryalai:
* **Dimensions:** `480px × 620px` card with `16px` border-radius.
* **Backdrop:** Archival chiaroscuro photography with a custom dual-stop gradient that melts the base into Obsidian Black.
* **Overlays:**
  * Top Right: Minted gold foil seal `"1980 MOSCOW OLYMPIC QUALIFIER"`.
  * Bottom Third: Frosted dark acrylic scrim (`rgba(10, 10, 12, 0.85)` with `backdrop-filter: blur(12px)`).
  * Gold leaf divider accent line (`height: 2px; width: 60px; background: #D4AF37`).
  * Headline: `"KARIM ZEMARYALAI"` in `Cinzel` (`28px`, Bold).
  * Subtitle: `"Founder & Master of Sport · Dagestan Silver Medalist"` in `Montserrat` (`14px`, `#C8C5BD`).

---
