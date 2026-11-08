---
type: dossier
status: current
group: brand
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/brand/moodboards/direction_1_olympic_heritage.html"]
shard_of: "discovery/brand/moodboards/direction_1_olympic_heritage.md"
part: "3 of 3"
---

> Part 3 of 3 of [direction_1_olympic_heritage](../direction_1_olympic_heritage.md). Text is verbatim from the original; only links were rewritten.

## 5. Layout Architecture & Wireframe Framework

Direction 1 moves away from generic horizontal stripe layouts in favor of an **Asymmetric Imperial Ledger** with deep visual pacing, monumental typography, and archival grid units.

### 5.1 Hero Viewport Wireframe (Desktop)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [TOP NAV]: UWC CREST LOGO | PHILOSOPHY | PROGRAMS | COACHES | SCHEDULE | [TRIAL CTA]│
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  [LEFT COLUMN: THE PROMISE & PROOF]          [RIGHT COLUMN: THE HERO CARD]  │
│                                                                             │
│  ★ OLYMPIC LINEAGE · EAST BAY CALIFORNIA      ┌───────────────────────────┐ │
│                                               │ [ARCHIVAL MAT PHOTOGRAPHY]│ │
│  THE DAGESTAN                                 │ Karim Zemaryalai          │ │
│  GOLD STANDARD                                │ Moscow 1980 Olympic Seal  │ │
│  ON CALIFORNIAN MATS.                         │                           │ │
│                                               │ ───────────────────────── │ │
│  Founded by 1980 Moscow Olympic Qualifier     │ "Once you've wrestled,   │ │
│  Karim Zemaryalai. Direct clinic ties to      │  everything in life is    │ │
│  2024 Olympic Champion Magomed Ramazanov.     │  easy." — Dan Gable       │ │
│  Youth, Collegiate & Adult Mastery.           └───────────────────────────┘ │
│                                                                             │
│  ┌────────────────────────┐  ┌────────────────────────┐                     │
│  │ CLAIM FREE 1-DAY PASS  │  │ VIEW WEEKLY SCHEDULE   │                     │
│  └────────────────────────┘  └────────────────────────┘                     │
│                                                                             │
│  [PROOF LEDGER]:                                                            │
│  [ 1980 OLYMPICS ]      [ ALI ALIYEV MEDAL ]      [ 2024 PARIS GOLD TIES ]  │
│  Moscow Qualified       Makhachkala, Dagestan     Magomed Ramazanov Clinic  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5.2 Lineage & Credential Bento Grid (Mid-Page)
A three-column asymmetrical proof cluster:
1. **Card 1 (50% Width - Heritage Founder):** Karim Zemaryalai's journey from international competition in the USSR/Eastern Bloc to founding UWC in California. Includes archival newspaper or tournament roster callout.
2. **Card 2 (25% Width - 2024 Olympic Champion Ties):** High-contrast photo of Magomed Ramazanov on UWC mats with clinic highlights and video clip launcher.
3. **Card 3 (25% Width - Collegiate Kinesiology):** Head Coach Naweed Zemaryalai's scientific periodization and youth athlete development system.

---

## 6. Photography & Art Direction Guidelines

### 6.1 The "Dagestan Chiaroscuro" Visual Style
Every photograph on the site must feel like an intentional piece of documentary sports photojournalism rather than a smiling commercial stock photo.

```
       LIGHT SOURCE: HIGH-ANGLE SPECULAR RIM LIGHT (Gold / Warm White)
                               │
                               ▼
                        [ ATHLETE / COACH ]
                      High Muscle Definition
                      Authentic Grip & Strain
                      Sweat Specular Flares
                               │
                               ▼
        SHADOW REGION: DEEP SHADOW & MAT TEXTURE (Obsidian #0A0A0C)
```

1. **Lighting & Contrast:**
   * High-contrast chiaroscuro with deep, crushed blacks in the background and dramatic edge lighting on the athletes' neck, shoulders, and hands.
   * Key light temperature: `4200K` (warm tungsten / antique gymnasium lighting).
   * Rim light temperature: `3200K` (deep golden rim highlight mimicking Olympic medal sheen).
2. **Color Grading & Saturation:**
   * Desaturate skin and gym canvas tones by `-25%` to `-35%` to eliminate distracting blue/green fluorescent gym light.
   * Boost red/crimson channels selectively (`+15%`) so UWC singlets and mat borders register with authoritative punch.
   * Apply subtle warm bronze split-toning in the highlight range (`Hue: 42°, Saturation: 12%`).
3. **Texture & Grain:**
   * Subtle `3%` analogue 35mm film grain overlay across photography containers, evoking the timeless feel of 1980 Moscow archival records.
   * Mat textures: Highlight heavy textured canvas, tape marks, and chalk dust.

### 6.2 Photography Do's and Don'ts

| DO (Mandatory Aesthetic) | DON'T (Strictly Prohibited) |
| :--- | :--- |
| **Authentic wrestling grips:** Front headlocks, collar ties, double legs, high crotches, tight waist breakdowns. | Posed smiling handshakes or arms-crossed "personal trainer" cheesy poses. |
| **Documentary action:** Coaches on knees instructing athletes, chalked hands gripping canvas, sweat glistening under rim light. | Sterile, brightly-lit generic gym environments with fluorescent white lighting. |
| **Archival dignity:** Black-and-white portraits of Karim Zemaryalai with deep character lines and regal composure. | AI-generated fantasy warriors, hyper-stylized comic book art, or low-resolution cell phone blurs. |
| **Youth respect & discipline:** Junior wrestlers intently listening to coaches during drill breakdowns. | Chaotic or cartoonish "kids martial arts" clip art. |

---

## 7. Next.js & Tailwind CSS v4 Code Implementation

Developers can immediately map these tokens into the project's Tailwind CSS v4 `@theme` block:

```css
@theme {
  /* Brand Direction 1: Olympic Heritage & Dagestan Gold */
  --color-uwc-crimson: #7A1C1B;
  --color-uwc-crimson-deep: #4D1010;
  --color-uwc-gold: #D4AF37;
  --color-uwc-gold-light: #F3E5AB;
  --color-uwc-gold-dark: #997D20;
  --color-uwc-obsidian: #0A0A0C;
  --color-uwc-surface-1: #141418;
  --color-uwc-surface-2: #1E1F24;
  --color-uwc-slate: #2A2B30;
  --color-uwc-parchment: #F5F3EF;
  --color-uwc-parchment-muted: #C8C5BD;

  /* Typography Stacks */
  --font-display: 'Cinzel', Georgia, serif;
  --font-athletic: 'Oswald', 'Bebas Neue', Impact, sans-serif;
  --font-sans: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Shadows & Atmospheric Elevation */
  --shadow-gold-glow: 0px 4px 25px 0px rgba(212, 175, 55, 0.35);
  --shadow-gold-ambient: 0px 0px 30px 0px rgba(212, 175, 55, 0.18);
  --shadow-crimson-ambient: 0px 0px 35px 0px rgba(122, 28, 27, 0.3);
  --shadow-card-elevated: 0px 10px 30px -5px rgba(0, 0, 0, 0.85);

  /* Border Radii */
  --radius-badge: 4px;
  --radius-card: 12px;
  --radius-hero-card: 16px;
  --radius-pill: 9999px;
}
```

---

## 8. Summary & Strategic Alignment

Direction 1 elevates United Wrestling Club from a local Hayward martial arts facility into an **internationally certified sanctuary of wrestling excellence**. By celebrating Karim Zemaryalai's 1980 Moscow Olympic qualification and the Dagestani gold standard, the design creates an unassailable moat against local competitors, justifying premium pricing and attracting the Bay Area's most dedicated wrestlers.

*Review the live, interactive prototype at [`direction_1_olympic_heritage.html`](../direction_1_olympic_heritage.html).*
