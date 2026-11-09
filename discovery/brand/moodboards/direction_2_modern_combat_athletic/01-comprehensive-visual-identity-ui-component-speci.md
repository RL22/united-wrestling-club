---
type: dossier
status: current
group: brand
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/brand/moodboards/direction_2_modern_combat_athletic.html", "discovery/archive/snapshots/live_site_content/assets/uwc_crest_logo_highres.png", "discovery/archive/snapshots/live_site_content/assets/founder.jpg", "discovery/archive/snapshots/live_site_content/assets/head-coach.jpg", "discovery/archive/snapshots/live_site_content/assets/co-founder.jpg", "discovery/archive/snapshots/live_site_content/assets/uwc_place.webp", "discovery/archive/snapshots/live_site_content/assets/facebook/fb_photo_01.jpg"]
shard_of: "discovery/brand/moodboards/direction_2_modern_combat_athletic.md"
part: "1 of 3"
---

> Part 1 of 3 of [direction_2_modern_combat_athletic](../direction_2_modern_combat_athletic.md). Text is verbatim from the original; only links were rewritten.


# United Wrestling Club (UWC) — Brand Direction 2: "Modern Combat Athleticism & East Bay Grit"
## Comprehensive Visual Identity, UI Component Specification & Design System

> **Document:** `discovery/brand/moodboards/direction_2_modern_combat_athletic.md`  
> **Interactive Visual Moodboard:** [`direction_2_modern_combat_athletic.html`](../direction_2_modern_combat_athletic.html)  
> **Target Audience:** Competitive High School & Youth Grapplers, Collegiate & Adult Wrestlers, BJJ Practitioners seeking takedown mastery, Combat Sports Athletes, and Performance-Focused Parents in the East Bay (Hayward, Union City, Fremont, Newark, Castro Valley).  
> **Design Lead:** Lead Visual Designer — Direction 2  
> **Version:** 1.0 (Production-Ready Spec)  
> **Date:** October 2026  

---

## 1. Brand Philosophy & Aesthetic Vision

### 1.1 The Concept: "The High-Performance Combat Laboratory"
United Wrestling Club (UWC) is not a recreational strip-mall daycare or an antiquated, dim gym from the 1980s. It is **the East Bay’s premier high-performance grappling laboratory**. Located along the industrial corridor of Hayward (`30139 Industrial Pkwy SW`), UWC operates at the intersection of **Olympic Freestyle lineage** (Founder Karim Zemaryalai, 2024 Olympic Champion Magomed Ramazanov clinic host) and **ruthless modern combat athleticism** (Wrestle-Jitsu, aggressive folkstyle takedowns, combat sambo, and industrial conditioning).

### 1.2 Aesthetic Tone & Archetype
* **Keywords:** Electric, Hyper-Modern, Raw, Disciplined, Industrial, High-Cadence, Kinetic, Uncompromising.
* **Inspirations:**
  * **Ten Thousand & Onx Sports:** Stripped-back technical utility, hyper-functional typography, matte carbon textures, disciplined performance data.
  * **Gymshark & Reign Wrestling Club:** High-contrast athletic lighting, high-speed shutter action freezes, sweat droplets, chalk dust, aggressive silhouette cuts.
  * **American Kickboxing Academy (AKA) & Dagestani Training Camps:** Industrial East Bay grit fused with world-class international combat pedigree.
* **The Contrast Engine:**
  Direction 2 intentionally avoids flat black-and-grey generic gym tropes. Instead, it pairs a **Carbon Fiber Deep Matte Black canvas (`#111215`)** with a **High-Voltage Crimson pulse (`#E11D48`)** and **Technical Cyan telemetry accents (`#06B6D4`)**, framed by **ultra-precise 1px micro-borders** and **heads-up display (HUD) combat metadata**.

---

## 2. Color System & Token Architecture

The color system meets **WCAG 2.1 Level AAA** standards for display and body text while introducing an electric, high-cadence athletic glow for CTAs and interactive states.

```
                              DIRECTION 2 COLOR SYSTEM
                                         │
        ┌────────────────────────────────┼────────────────────────────────┐
        ▼                                ▼                                ▼
  ELECTRIC CRIMSON                CARBON / STEEL                   TELEMETRY / DATA
#E11D48 (High-Voltage)         #111215 (Carbon Canvas)          #06B6D4 (HUD Cyan)
#902524 (Heritage Crimson)     #1F2128 (Steel Graphite)         #E2E8F0 (Silver Frost)
#FF385C (Hover Glow)           #2A2D37 (Surface Border)         #FFFFFF (Pure Light)
```

### 2.1 Complete Color Token Specifications

| Token Name | Hex Code | RGB | HSL | Role & Usage | Contrast vs. Background |
| :--- | :---: | :---: | :---: | :--- | :---: |
| `--uwc-crimson-electric` | `#E11D48` | `rgb(225, 29, 72)` | `hsl(347, 77%, 50%)` | Primary active CTA fill, live session indicators, glow accents | `4.62:1` on `#111215` (Passes AA display) |
| `--uwc-crimson-heritage` | `#902524` | `rgb(144, 37, 36)` | `hsl(1, 60%, 35%)` | Deep heritage red, logo crest match, dark gradient backdrops | Subdued surface layer |
| `--uwc-crimson-glow` | `#FF385C` | `rgb(255, 56, 92)` | `hsl(349, 100%, 61%)` | Hover states, kinetic laser lines, focus rings | Interactive micro-state |
| `--uwc-canvas-carbon` | `#111215` | `rgb(17, 18, 21)` | `hsl(225, 11%, 7%)` | Primary page canvas, dark mode foundation, noise layer | Main root canvas |
| `--uwc-canvas-void` | `#0B0C0E` | `rgb(11, 12, 14)` | `hsl(220, 12%, 5%)` | Under-hero backdrop, deep footer, modal scrim base | Maximum depth |
| `--uwc-surface-graphite` | `#1F2128` | `rgb(31, 33, 40)` | `hsl(227, 13%, 14%)` | Card surface, table rows, elevated HUD modules | Card background |
| `--uwc-surface-elevated` | `#262933` | `rgb(38, 41, 51)` | `hsl(226, 15%, 17%)` | Hover card elevation, dropdowns, sticky navigation pill | +12% lightness above card |
| `--uwc-border-subtle` | `#2A2D37` | `rgb(42, 45, 55)` | `hsl(226, 13%, 19%)` | 1px card borders, grid separator lines, input borders | Subtle definition |
| `--uwc-border-highlight`| `rgba(255, 255, 255, 0.12)` | `rgba(255, 255, 255, 0.12)` | — | Chamfered corner cuts, top card highlights | Glass edge sheen |
| `--uwc-text-primary` | `#FFFFFF` | `rgb(255, 255, 255)` | `hsl(0, 0%, 100%)` | Display headlines (H1/H2), bold metrics, high-intent text | `18.5:1` (AAA compliant) |
| `--uwc-text-silver` | `#E2E8F0` | `rgb(226, 232, 240)`| `hsl(214, 32%, 91%)`| Primary body copy, feature summaries, form labels | `14.8:1` (AAA compliant) |
| `--uwc-text-muted` | `#94A3B8` | `rgb(148, 163, 184)`| `hsl(215, 25%, 65%)`| Subtitles, timestamps, breadcrumbs, inactive state | `7.3:1` (AAA compliant) |
| `--uwc-telemetry-cyan` | `#06B6D4` | `rgb(6, 182, 212)` | `hsl(189, 94%, 43%)` | Technical telemetry badges, HUD coordinates, BJJ/Tech pills | High-tech tactical pop |
| `--uwc-status-amber` | `#F59E0B` | `rgb(245, 158, 11)` | `hsl(38, 92%, 50%)` | Youth Foundation pills, upcoming tournament alert, spot limit | Attention accent |
| `--uwc-status-emerald` | `#10B981` | `rgb(16, 185, 129)` | `hsl(161, 84%, 39%)` | "Mat Ready", Open Mat Drop-in live indicator, verified coach | Operational pulse |

### 2.2 Atmospheric & Dynamic Gradients
```css
/* High-Performance Hero Vignette: Focuses eye toward action clip */
background: radial-gradient(circle at 75% 25%, rgba(225, 29, 72, 0.18) 0%, rgba(17, 18, 21, 0.95) 70%, #111215 100%);

/* Card Surface Sheen: Gives industrial graphite a machined metallic finish */
background: linear-gradient(135deg, rgba(31, 33, 40, 0.9) 0%, rgba(23, 24, 30, 0.95) 100%);

/* Electric Border Beam: Applied on primary CTA containers */
background: linear-gradient(90deg, #E11D48 0%, #06B6D4 100%);

/* Carbon Weave Mesh Overlay */
background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
background-size: 16px 16px;
```

---
