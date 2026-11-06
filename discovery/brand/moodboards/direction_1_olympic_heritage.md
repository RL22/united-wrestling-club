---
type: dossier
status: current
group: brand
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/brand/moodboards/direction_1_olympic_heritage.html"]
---

# Brand Direction 1: The Olympic Heritage & Dagestan Gold
## Design Specification, Visual Identity & Art Direction

> **Client:** United Wrestling Club (UWC)  
> **Location:** Hayward / East Bay, Northern California  
> **Target Directory:** `discovery/brand/moodboards/`  
> **Interactive Companion:** [`direction_1_olympic_heritage.html`](direction_1_olympic_heritage.html)  
> **Version:** 1.0.0 (Production Specification)  
> **Date:** October 2026  

---

## 1. Executive Concept & Brand Philosophy

```
═══════════════════════════════════════════════════════════════════════════════════
                      UNITED WRESTLING CLUB — BRAND DIRECTION 1
                   "THE OLYMPIC HERITAGE & DAGESTAN GOLD"
═══════════════════════════════════════════════════════════════════════════════════

       [ 1980 MOSCOW OLYMPICS ]          [ MAKHACHKALA, DAGESTAN ]
          Karim Zemaryalai                  Ali Aliyev Tournament
          Olympic Qualifier                     Silver Medal
                  │                                   │
                  └─────────────────┬─────────────────┘
                                    ▼
                     [ 2024 PARIS OLYMPIC GOLD ]
                  Magomed Ramazanov Clinic & Ties
                                    │
                                    ▼
                    [ UNITED WRESTLING CLUB (UWC) ]
                 East Bay's Sovereign Wrestling Lineage
```

### 1.1 Brand Narrative & Vision
United Wrestling Club is not a commercial strip-mall fitness franchise or a casual recreational day-camp. It is Northern California's sovereign home for **pure, uncompromised wrestling lineage**. 

Direction 1 anchors the entire digital and physical experience in an irreplaceable historical reality:
1. **The Olympic Origin:** Founder **Karim Zemaryalai** qualified for the **1980 Moscow Olympic Games** and earned a prestigious silver medal at the world-renowned **Ali Aliyev International Tournament** in Makhachkala, Dagestan — the cradle of world wrestling dominance.
2. **The Living Lineage:** UWC maintains direct training ties and hosts clinics with reigning international royalty, including **2024 Paris Olympic Freestyle Champion Magomed Ramazanov (86kg)** and international medalist Ermak Kardanov.
3. **The Multi-Generational Legacy:** Head Coach **Naweed Zemaryalai** carries his father's international master-of-sport standards forward with collegiate kinesiology expertise and Bay Area youth mentorship.

### 1.2 Aesthetic Tone & Emotional Matrix
* **Tone:** Regal athletic dignity, quiet championship gravitas, archival martial heritage, and uncompromising technical standard.
* **Emotional Impact on Visitors:** 
  * *Scholastic Athletes & Parents:* Immediate realization that this club teaches wrestling at a higher, internationally proven standard than any local high school room.
  * *Adult Beginners & BJJ Grapplers:* Utmost respect for the coaches; certainty that their wrestling takedown instruction is authentic, injury-conscious, and world-class.
  * *Championship Aspirants:* A sense of belonging to an elite international fraternity of combat masters.

---

## 2. Complete Semantic Color Architecture

The palette fuses deep archival pigments (Heritage Crimson, Obsidian Canvas) with metallic victory accents (Olympic Gold) and warm historical parchment tones.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           COLOR TOKEN PALETTE                               │
├──────────────┬──────────────┬──────────────┬──────────────┬─────────────────┤
│   CRIMSON    │     GOLD     │   OBSIDIAN   │  PARCHMENT   │   MUTED SLATE   │
│   #7A1C1B    │   #D4AF37    │   #0A0A0C    │   #F5F3EF    │     #2A2B30     │
│ Heritage Mat │ Olympic Foil │ Arena Depth  │ Typography   │ Container Slate │
└──────────────┴──────────────┴──────────────┴──────────────┴─────────────────┘
```

### 2.1 Primary Color Tokens

| Token Name | Hex Code | RGB Values | HSL Values | Role & Psychological Function | WCAG Ratio vs Canvas (`#0A0A0C`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--uwc-crimson` | `#7A1C1B` | `rgb(122, 28, 27)` | `hsl(1°, 64%, 29%)` | **Primary Brand Heritage:** Deep tournament mat crimson; seal borders, crest badges, and secondary high-intent accents. | `2.4:1` (UI border / background only) |
| `--uwc-crimson-deep` | `#4D1010` | `rgb(77, 16, 16)` | `hsl(0°, 66%, 18%)` | **Shadow & Vignette:** Deep blood claret for atmospheric radial gradients and card backing layers. | `1.4:1` (Decorative scrim) |
| `--uwc-gold` | `#D4AF37` | `rgb(212, 175, 55)` | `hsl(46°, 65%, 52%)` | **Olympic Victory Accent:** The definitive color of Olympic qualification, medal laurels, primary button fills, and metallic foil text. | **`9.8:1` (AAA Pass)** |
| `--uwc-gold-light` | `#F3E5AB` | `rgb(243, 229, 171)` | `hsl(48°, 75%, 81%)` | **Specular Gold Highlight:** Edge highlights on metallic buttons, star icons, and active pill focus rings. | **`15.8:1` (AAA Pass)** |
| `--uwc-gold-dark` | `#997D20` | `rgb(153, 125, 32)` | `hsl(46°, 65%, 36%)` | **Gold Shadow & Shading:** Metallic gradients, badge relief, and bevel borders. | **`4.8:1` (AA Pass)** |
| `--uwc-obsidian` | `#0A0A0C` | `rgb(10, 10, 12)` | `hsl(240°, 9%, 4%)` | **Canvas Floor:** Monolithic dark arena backdrop; provides unmatched contrast for gold and white typography. | *Canvas Base* |
| `--uwc-surface-1` | `#141418` | `rgb(20, 20, 24)` | `hsl(240°, 9%, 9%)` | **Primary Surface:** Elevated card containers, modals, schedule tables, and navigation header. | `1.1:1` (Surface lift) |
| `--uwc-surface-2` | `#1E1F24` | `rgb(30, 31, 36)` | `hsl(230°, 9%, 13%)` | **Secondary Surface:** Hover states, inactive schedule slots, and badge containers. | `1.5:1` (Surface lift) |
| `--uwc-slate` | `#2A2B30` | `rgb(42, 43, 48)` | `hsl(230°, 7%, 18%)` | **Muted Structural Slate:** Card borders, divider rules, subtle grid outlines, and disabled button states. | `2.1:1` (UI border pass) |
| `--uwc-parchment` | `#F5F3EF` | `rgb(245, 243, 239)` | `hsl(40°, 24%, 95%)` | **Primary Typography (Alabaster):** High-readability display headlines and body text; avoids harsh artificial pure white. | **`18.5:1` (AAA Pass)** |
| `--uwc-parchment-muted` | `#C8C5BD` | `rgb(200, 197, 189)` | `hsl(44°, 9%, 76%)` | **Secondary Typography:** Subtitles, metadata tags, coach credentials, and helper text. | **`11.6:1` (AAA Pass)** |

### 2.2 Atmospheric Gradients & Metallic Foil Formulas

```css
/* 1. Olympic Gold Foil Surface (Primary CTA & Emblems) */
background: linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #997D20 100%);
box-shadow: 0px 4px 20px rgba(212, 175, 55, 0.35), inset 0px 1px 1px rgba(255, 255, 255, 0.4);

/* 2. Heritage Crimson Mat Vignette (Hero Background Scrim) */
background: radial-gradient(circle at 50% 20%, rgba(122, 28, 27, 0.28) 0%, rgba(10, 10, 12, 0.95) 75%),
            linear-gradient(180deg, rgba(10, 10, 12, 0.7) 0%, #0A0A0C 100%);

/* 3. Archival Obsidian Card Elevation */
background: linear-gradient(165deg, rgba(30, 31, 36, 0.8) 0%, rgba(14, 14, 18, 0.95) 100%);
border: 1px solid rgba(212, 175, 55, 0.2);
box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(212, 175, 55, 0.15);

/* 4. Metallic Gold Border Shimmer */
border-image: linear-gradient(to right, #997D20, #F3E5AB, #D4AF37, #997D20) 1;
```

---

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

*Review the live, interactive prototype at [`direction_1_olympic_heritage.html`](direction_1_olympic_heritage.html).*
