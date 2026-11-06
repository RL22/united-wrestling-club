---
type: dossier
status: current
group: brand
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-01
last_reviewed: 2026-11-01
sources: ["video_assets/edc_motto_option_a_triblock.svg", "video_assets/edc_motto_option_b_brutalist_contour.svg", "video_assets/edc_motto_option_c_tactical_octagon.svg"]
---

# Architectural Specification: UWC Triple Pillar Motto & EDC Monogram System
## Production-Grade SVG Graphic Treatments for United Wrestling Club (Hayward, CA)

> **Document Code:** `UWC-GRAPHIC-ARCH-EDC-001`  
> **Lead Visual Identity & SVG Graphic Architect:** Argon  
> **Brand / Client:** United Wrestling Club (Hayward, CA • Sanctioned USA Wrestling RTC #513)  
> **Core Pillars:** “EXCELLENCE, DISCIPLINE, CHAMPIONS”  
> **Monogram Integration:** “EDC” (Collegiate / Brutalist / Combat Octagon)  
> **Date:** November 1, 2026  
> **Status:** Production-Ready Vector Assets Generated & Validated  

---

## 1. Executive Summary & Design Token System

To translate United Wrestling Club’s authentic Olympic lineage (1980 Moscow Olympian Karim Zemaryalai, Head Coach Naweed Zemaryalai) into a world-class athletic identity, we architected three distinct production-grade SVG graphic treatments for the club’s triple pillar motto: **“EXCELLENCE, DISCIPLINE, CHAMPIONS”** and the unified **“EDC”** monogram.

Each treatment satisfies every technical and aesthetic constraint:
1. **Extra-bold display typography** (athletic collegiate block, raw industrial brutalism, and military stencil).
2. **Dual-contour outline variations** (varsity jacket trims, chamfered bevels, and combat offset strokes).
3. **100% transparent knockout masks** (allowing underlying dark mat textures, live video feeds, or photography to bleed cleanly through the letterforms).
4. **Procedural mat scuff & vintage screenprint grit** (`<feTurbulence>`, `<feColorMatrix>`, `<feComposite>` filters combined with hard vector notch fallbacks).
5. **Integrated 'EDC' monogram** as an authoritative mark of excellence.

### Master Color Tokens

| Token Role | Hex Code | Purpose & Application |
| :--- | :--- | :--- |
| **Primary Crimson** | `#902524` | Authentic UWC brand heritage crimson, heavy block fills. |
| **Accent Crimson** | `#BA1C1C` | High-energy border strokes, tactical nodes, corner bevels. |
| **Championship Gold** | `#C5A059` | Outer contour trim lines, Olympic qualification stars, metadata rules. |
| **Bone White** | `#F5F5F0` | High-visibility block typography, hollow stroke outlines, highlight accents. |
| **Mat Charcoal** | `#0B0B0C` | Deep gym mat shadow, interior counterwells, container backplates. |
| **Hardware Border** | `#262626` | Technical hairline separators, barcode rules, tactical coordinate tags. |

---

## 2. Option A: 'THE HEAVYWEIGHT EDC TRI-BLOCK'

```
+-----------------------------------------------------------------------------------+
|               UNITED WRESTLING CLUB • USA RTC #513 • HAYWARD CA                   |
|                                                                                   |
|     +-----------+             +-----------+             +-----------+             |
|     |  EEEEEEE  |             |  DDDDDD   |             |  CCCCCCC  |  <- Gold    |
|   ==|===E=======|=============|==D====D===|=============|==C========|==<- Cutout 1|
|     |  EEEEE    |             |  D    D   |             |  C        |             |
|   ==|===E=======|=============|==D====D===|=============|==C========|==<- Cutout 2|
|     |  EEEEEEE  |             |  DDDDDD   |             |  CCCCCCC  |             |
|     +-----------+             +-----------+             +-----------+             |
|                                                                                   |
|     [EXCELLENCE]              [DISCIPLINE]              [CHAMPIONS]               |
|                                                                                   |
|  [ // FOUNDED BY 1980 MOSCOW OLYMPIAN KARIM ZEMARYALAI // HAYWARD INDUSTRIAL // ] |
+-----------------------------------------------------------------------------------+
```

### Visual Concept & Form
The **Heavyweight EDC Tri-Block** evokes heavy vintage collegiate athletic varsity lettering, championship tournament banners, and 400 GSM heavyweight gym apparel back-prints. Three massive chamfered block letters (**E**, **D**, **C**) stand in monolithic alignment, severed by twin horizontal cutout channels and distressed by combat mat scuffs.

### Architectural & Coordinate Specifications
* **Asset Path:** `video_assets/edc_motto_option_a_triblock.svg`
* **Coordinate Space:** `viewBox="0 0 1280 720"`, `preserveAspectRatio="xMidYMid meet"`
* **Monogram Letter Geometry:**
  * **Height:** 380px (`Y = 130` to `Y = 510`).
  * **Chamfer Angle:** 45° athletic cuts (30px corner cuts).
  * **Letter E:** `X = 130` to `390` (Width 260px). Chamfered upper arm, center spur, and lower base.
  * **Letter D:** `X = 470` to `750` (Width 280px). Chamfered shoulder and hip with 100x200px counter cutout.
  * **Letter C:** `X = 830` to `1130` (Width 300px). Chamfered jaws and recessed inner bay.
* **Contour Strokes:**
  * **Outer Varsity Trim:** 3.5px `#C5A059` (Championship Gold) contour offset 8px outward from letter bodies (`#outer-contours`).
  * **Inner Bevel Stroke:** 2.0px `#FFFFFF` at 32% opacity for three-dimensional varsity patch depth.
  * **Solid Perimeter Stroke:** 4.0px `#BA1C1C` bevel stroke.

### Knockout & Distress Architecture
* **Mask ID:** `#triblock-knockout-mask`
  * **Stripe 1 (Upper Channel):** `x="0" y="236" width="1280" height="22" fill="#000000"`
  * **Stripe 2 (Lower Channel):** `x="0" y="382" width="1280" height="22" fill="#000000"`
  * **Hard Vector Grit Fallback:** 12 polygon cutouts along letter perimeter edges + 3 horizontal 2.5px micro-abrasion slits.
* **SVG Procedural Grit Filter (`#uwc-mat-grit-a`):**
  ```xml
  <filter id="uwc-mat-grit-a" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.045 0.85" numOctaves="4" seed="42" result="noise" />
    <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -7.5" in="noise" result="gritMask" />
    <feComposite in="SourceGraphic" in2="gritMask" operator="in" />
  </filter>
  ```

### Motto Pillar Anchorage
* **Subterranean Foundation Badges (`Y = 568`):**
  * `EXCELLENCE` anchored at `X = 260` directly centered under **E** in `#BA1C1C` pill.
  * `DISCIPLINE` anchored at `X = 610` directly centered under **D** in `#FFFFFF` bordered pill.
  * `CHAMPIONS` anchored at `X = 980` directly centered under **C** in `#C5A059` gold bordered pill.
* **Base Anchorage Bar (`Y = 650`):** Full 1080px wide industrial bar stamped with:  
  `FOUNDED BY 1980 MOSCOW OLYMPIAN KARIM ZEMARYALAI // HAYWARD INDUSTRIAL MATS`.

---

## 3. Option B: 'THE BRUTALIST CONTOUR STACK'

```
+--------------------------------------------------------------------+--------------+
|                                                                    |   UWC // RTC |
|   EXCELLENCE                                                       |     +----+   |
|   // TIER 01: TECHNICAL MASTERY & OLYMPIC CALIBER MOTOR PRECISION  |    / E  /|   |
|                                                                    |   +----+ |   |
|   D I S C I P L I N E  [ 100% HOLLOW STROKE TRANSPARENT FILL ]     |     :    |   |
|   // TIER 02: 100% HOLLOW STROKE • UNCOMPROMISING DAILY CRUCIBLE   |     +----+   |
|                                                                    |    / D  /|   |
|   CHAMPIONS                                                        |   +----+ |   |
|   // TIER 03: STATE QUALIFIERS • NATIONAL PODIUMS • CIF/NCAA READY |     :    |   |
|                                                                    |     +----+   |
|   --------------------------------------------------------------   |    / C  /|   |
|   UNITED WRESTLING CLUB • USA RTC #513 • 30139 INDUSTRIAL PKWY     |   +----+ |   |
|                                                                    |   EST.1980   |
+--------------------------------------------------------------------+--------------+
```

### Visual Concept & Form
The **Brutalist Contour Stack** draws inspiration from high-intensity combat athletics, brutalist typography, and contemporary cult-tribe athletic aesthetics (DARC Sport / Gymshark / Olympic RTC posters). It features an asymmetric 3-tier vertical typographic ladder where the middle pillar (**DISCIPLINE**) is an extra-bold 100% hollow outline that allows background photography, video feeds, or dark canvas to bleed straight through the letter interiors. On the right flank sits a vertical tactical EDC monolith badge.

### Architectural & Coordinate Specifications
* **Asset Path:** `video_assets/edc_motto_option_b_brutalist_contour.svg`
* **Coordinate Space:** `viewBox="0 0 1440 820"`, `preserveAspectRatio="xMidYMid meet"`
* **Typographic Stack Structure (Left Column, `X = 80` to `1160`):**
  * **Typeface:** `Barlow Condensed`, `Montserrat Black`, `Impact` (Size: 168px, Weight: 900, Line-height: 0.85).
  * **Tier 1 (EXCELLENCE, `Y = 210`):** Solid brand crimson (`#902524`), with 2.0px `#BA1C1C` contour and drop-shadow underlay.
  * **Tier 2 (DISCIPLINE, `Y = 420`):**  
    * **Fill:** `none` (100% transparent counterfill).
    * **Stroke:** 6.0px `#FFFFFF` (Bone White), `stroke-linejoin: bevel`.
    * **Kinetic Chromatic Ghost:** Secondary 4.0px `#BA1C1C` stroke shifted `dx=7, dy=5` at 45% opacity to evoke combat vibration.
  * **Tier 3 (CHAMPIONS, `Y = 630`):** Ultra-heavy solid Bone White (`#F5F5F0`) with deep charcoal drop shadow (`#000000` at 90%).

### Right-Flank Tactical EDC Monolith Badge
* **Dimensions:** 140px wide × 680px tall (`X = 1220` to `1360`, `Y = 70` to `750`).
* **Geometry:** Chamfered rectangular vertical pill with 2.5px `#BA1C1C` border.
* **Three Stacked Monogram Nodes:**
  1. **Node E (Excellence, `Y = 135`):** Solid Crimson 48px chamfered diamond node with white monogram **E**.
  2. **Node D (Discipline, `Y = 315`):** Hollow outline 48px chamfered diamond node with hollow white stroke monogram **D**.
  3. **Node C (Champions, `Y = 495`):** Charcoal and Championship Gold 48px diamond node with `#C5A059` monogram **C**.
* **Base Coordinate Hardware:** USA RTC #513 inspection barcode and `EST. 1980` coordinate stamp.

### Knockout & Stencil Mask Architecture
* **Mask ID:** `#speed-stencil-mask`
  * Five diagonal 45° speed-stencil notches (`polygon points="..."`) cutting through solid tiers 1 and 3.
  * Two 3px to 4px horizontal abrasion slits cutting across text baselines.
* **SVG Procedural Grit Filter (`#uwc-mat-grit-b`):**
  * Turbulence frequency `0.05 0.95`, 4 octaves, seed 88.

---

## 4. Option C: 'THE TACTICAL COMBAT OCTAGON SEAL'

```
                        /=========================\
                       /   EXCELLENCE • DISCIPLINE \
                      /   /-----------------------\ \
                     /   /   UNITED WRESTLING CLUB \ \
                    |   |                           | |
                    |EST|      +-------------+      |RTC
                    |1980     /   E D C     /|      |513
                    |   |    +-------------+ |      | |
                    |   |    |  [KNOCKOUT] | |      | |
                    \   \    +-------------+/       / /
                     \   \  FOLK • FREE • GRECO    / /
                      \   \-----------------------/ /
                       \        ★ CHAMPIONS ★      /
                        \=========================/
```

### Visual Concept & Form
The **Tactical Combat Octagon Seal** is an authoritative, chamfered combat crest modeled after the 8-sided geometry of modern combat athletics and Olympic wrestling mat zones. Along its circular perimeter rings, the triple pillar motto curves gracefully in arched typography. At the heart of the seal sits a chamfered diamond combat shield featuring a **100% transparent knockout 'EDC' monogram**, backed by an ethereal silhouette of Karim Zemaryalai locked in a combat collar tie.

### Architectural & Coordinate Specifications
* **Asset Path:** `video_assets/edc_motto_option_c_tactical_octagon.svg`
* **Coordinate Space:** `viewBox="0 0 960 960"`, `preserveAspectRatio="xMidYMid meet"` (Square circular crest).
* **Center Origin:** `(480, 480)`.
* **Outer Octagonal Perimeter:**
  * Regular 8-sided chamfered octagon: `points="295,60 665,60 900,295 900,665 665,900 295,900 60,665 60,295"`.
  * **Stroke:** 8.0px `#902524` (Brand Crimson), inner 2.5px `#C5A059` gold track.
  * **8 Perimeter Mat Hardware Nodes:** 5px `#BA1C1C` rivets at each vertex representing Olympic wrestling boundary zones.

### Circular Arched Motto Typography
* **Upper Arch (`#path-top-arch`):**
  * **Path Definition:** `d="M 167.3 334.2 A 345 345 0 0 1 792.7 334.2"` (Radius 345px, 130° clockwise arc).
  * **Text Content:** `EXCELLENCE  •  DISCIPLINE`
  * **Type Specs:** 34px Montserrat Black, letter-spacing 0.24em, `#FFFFFF` fill.
* **Lower Arch (`#path-bottom-arch`):**
  * **Path Definition:** `d="M 167.3 625.8 A 345 345 0 0 0 792.7 625.8"` (Radius 345px, counter-clockwise arc ensuring upright reading from left to right).
  * **Text Content:** `★  CHAMPIONS  ★`
  * **Type Specs:** 34px Montserrat Black, letter-spacing 0.24em, `#C5A059` Championship Gold fill.

### Central Combat Shield & Knockout Monogram
* **Inner Shield Geometry:** 8-sided chamfered diamond shield (`points="370,270 590,270 700,380 700,580 590,690 370,690 260,580 260,380"`), fill `#902524`, stroke 3.0px `#BA1C1C`.
* **Knockout Mask (`#octagon-knockout-mask`):**
  * Carves exact vector negative cutouts of **E**, **D**, **C** through the crimson shield.
  * Underlying canvas, gym photo, or background mat completely bleeds through the letter counters!
  * **Ghost Wrestling Silhouette:** Karim Zemaryalai Olympic collar tie positioned at 22% opacity behind the cutout.
  * **Sharp 1.5px White Outlines:** Frame the letter apertures for razor-sharp legibility at all scales.

---

## 5. Comparative Architectural Matrix

| Attribute | Option A: Heavyweight Tri-Block | Option B: Brutalist Contour Stack | Option C: Tactical Octagon Seal |
| :--- | :--- | :--- | :--- |
| **Aesthetic Archetype** | Vintage Collegiate / Heavy Merch | Kinetic Industrial Brutalism | Military / Combat RTC Crest |
| **Aspect Ratio** | 16:9 (`1280 × 720`) | ~16:9 Wide (`1440 × 820`) | 1:1 Square (`960 × 960`) |
| **Typography Style** | Chamfered Collegiate Slab 900 | Ultra-Condensed 900 Display | Arched Circular Tracked Black |
| **Primary Knockout** | Dual 22px horizontal racing channels | 100% hollow stroke on DISCIPLINE | Negative EDC monogram cutout |
| **Distress Filter** | Screenprint mat grit (`seed=42`) | Diagonal stencils + heavy scuffs | Circular rotational combat grit |
| **Contour Treatments** | Dual varsity patch gold offset | Kinetic chromatic ghost echo | Double octagonal perimeter wire |
| **Monogram Role** | Giant primary hero letters | Tactical vertical monolith badge | Central shield negative core |
| **Best Production Use** | Merch back-prints, mat wall banners | Hero banner, video motion title cards | Club crest, patches, avatar, ring mat |

---

## 6. Implementation & Integration Guide

### 1. Native Inline SVG Usage (Hero Section)
```html
<!-- Example: Embedding Option B with Transparent Background Over Hero Video -->
<div class="relative w-full h-[600px] overflow-hidden bg-[#0B0B0C]">
  <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover opacity-25">
    <source src="UWC_silent.mp4" type="video/mp4" />
  </video>
  <div class="relative z-10 flex items-center justify-center p-8">
    <object type="image/svg+xml" data="video_assets/edc_motto_option_b_brutalist_contour.svg" class="w-full max-w-5xl"></object>
  </div>
</div>
```

### 3. Laser Cutting / Vinyl Mat Decal Fallback
Because all knockout channels and perimeter distress notches are hardcoded as vector `<polygon>` and `<rect>` elements inside the `<mask id="...">`, these SVGs can be flattened directly to single-compound paths in Adobe Illustrator or Inkscape for plotters, vinyl cutters, screenprint separations, or CNC embroidery without losing a single millimeter of grunge detail.
