---
type: dossier
status: current
group: brand
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/brand/moodboards/direction_1_olympic_heritage.html"]
shard_of: "discovery/brand/moodboards/direction_1_olympic_heritage.md"
part: "1 of 3"
---

> Part 1 of 3 of [direction_1_olympic_heritage](../direction_1_olympic_heritage.md). Text is verbatim from the original; only links were rewritten.


# Brand Direction 1: The Olympic Heritage & Dagestan Gold
## Design Specification, Visual Identity & Art Direction

> **Client:** United Wrestling Club (UWC)  
> **Location:** Hayward / East Bay, Northern California  
> **Target Directory:** `discovery/brand/moodboards/`  
> **Interactive Companion:** [`direction_1_olympic_heritage.html`](../direction_1_olympic_heritage.html)  
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
