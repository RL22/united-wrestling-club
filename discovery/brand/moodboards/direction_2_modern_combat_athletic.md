---
status: reference
group: brand
---

# United Wrestling Club (UWC) — Brand Direction 2: "Modern Combat Athleticism & East Bay Grit"
## Comprehensive Visual Identity, UI Component Specification & Design System

> **Document:** `discovery/brand/moodboards/direction_2_modern_combat_athletic.md`  
> **Interactive Visual Moodboard:** [`direction_2_modern_combat_athletic.html`](direction_2_modern_combat_athletic.html)  
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

## 3. Typography System & Font Pairings

The typographic architecture fuses **raw geometric power** with **aerospace-grade technical precision**.

### 3.1 Typeface Family Selection
1. **Primary Display & Headings:** `Space Grotesk` (Google Font)
   * *Weights:* 600 (SemiBold), 700 (Bold)
   * *Character:* Angular, futuristic, sharp geometric cuts in characters like `K`, `R`, `M`, and `W`. Evokes high-performance sports engineering and aggressive collegiate discipline.
2. **Impact Display & Hero Anchor:** `Montserrat` (Google Font)
   * *Weights:* 900 (Black, All-Caps)
   * *Role:* Preserves UWC's established high-contrast brand recognition for mega-titles (`UNITED WRESTLING CLUB`, `OLYMPIC LINEAGE`), styled with tight letter-spacing (`-0.03em`) and uppercase commanding presence.
3. **Telemetry & Combat HUD:** `JetBrains Mono` or `Geist Mono` (Google Font / System Mono)
   * *Weights:* 500 (Medium), 700 (Bold)
   * *Role:* Timestamps, coordinate markers, class capacity meters, schedule slots, category tags, athlete weight classes, and schema breadcrumbs. Tabular figures ensure clean column alignment.
4. **Body Text & Ergonomics:** `Space Grotesk` (Body 400/500) paired with `Inter` / System Sans
   * *Weights:* 400 (Regular), 500 (Medium)
   * *Letter Spacing:* `-0.01em` on body text for modern editorial density; line-height set to `1.65` for effortless scanning by busy parents and high schoolers.

### 3.2 Typographic Scale Matrix

| Element | Font Family | Size (px / rem) | Weight | Line Height | Tracking | Case | Application |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Hero Display H1** | `Montserrat` | `64px / 4.0rem` | `900` | `1.05` | `-0.03em` | UPPERCASE | Homepage hero title, major landing headlines |
| **Section H2** | `Space Grotesk` | `36px / 2.25rem` | `700` | `1.15` | `-0.02em` | Title Case | Section titles (`"The Combat Laboratory"`, `"Schedule"`) |
| **Card Header H3** | `Space Grotesk` | `22px / 1.375rem`| `600` | `1.25` | `-0.01em` | Title Case | Class titles, coach names, pricing tier names |
| **HUD Sub-Header** | `JetBrains Mono` | `13px / 0.8125rem`| `700` | `1.4` | `+0.12em` | UPPERCASE | Category labels, telemetry coordinates, section tags |
| **Lead Paragraph** | `Space Grotesk` | `18px / 1.125rem`| `400` | `1.6` | `-0.01em` | Sentence | Hero introductory text, program executive summaries |
| **Body Standard** | `Space Grotesk` / Sans| `15px / 0.9375rem`| `400` | `1.65` | `normal` | Sentence | Syllabus descriptions, FAQ responses, coach bios |
| **Telemetry Metric** | `JetBrains Mono` | `28px / 1.75rem` | `700` | `1.0` | `+0.02em` | Normal | Key stats (`42+`, `5-STAR`, `100%`, `3,800 SQ FT`) |
| **Badge / Button Label** | `JetBrains Mono` | `12px / 0.75rem` | `700` | `1.0` | `+0.08em` | UPPERCASE | Filter tabs, CTA buttons, status indicator tags |

---

## 4. UI Component Treatment & Micro-Interactions

### 4.1 Button Hierarchy & States

```
┌──────────────────────────────────────┐     ┌──────────────────────────────────────┐
│  [⚡ CLAIM 3-DAY TRIAL PASS  →]       │     │  [ 📅 EXPLORE MAT SCHEDULE ]         │
│  Fill: #E11D48 + Glow Shadow         │     │  Border: 1px #2A2D37 + Glass Fill   │
│  Radius: 6px | Font: JetBrains Mono  │     │  Hover: Crimson Border Accent        │
└──────────────────────────────────────┘     └──────────────────────────────────────┘
```

1. **Primary Kinetic Action (High-Voltage Crimson):**
   * *Normal:* Background `#E11D48`, text `#FFFFFF`, border `1px solid rgba(255, 255, 255, 0.15)`, radius `6px`, box-shadow `0 0 20px rgba(225, 29, 72, 0.45)`.
   * *Hover:* Background `#FF385C`, transform `translateY(-2px)`, box-shadow `0 0 30px rgba(225, 29, 72, 0.75)`.
   * *Active:* Transform `translateY(0)`, opacity `0.92`.
2. **Secondary Tactical Action (Machined Steel):**
   * *Normal:* Background `rgba(31, 33, 40, 0.85)`, border `1px solid #2A2D37`, text `#E2E8F0`, backdrop-filter `blur(8px)`.
   * *Hover:* Border `1px solid #E11D48`, text `#FFFFFF`, background `rgba(42, 45, 55, 0.95)`, box-shadow `0 0 15px rgba(225, 29, 72, 0.2)`.
3. **Ghost / Tertiary Utility Link:**
   * *Normal:* Background `transparent`, text `#94A3B8`, icon arrow transition.
   * *Hover:* Text `#06B6D4`, icon shifts `+4px` horizontally.

### 4.2 High-Performance Card Container Language
* **Base Structure:** `#1F2128` background with an internal subtle radial light gradient coming from top-left.
* **Border Treatment:** High-precision `1px solid #2A2D37` with micro-chamfered corners or sharp 8px corner radii.
* **HUD Corner Marks:** Top-right and bottom-left subtle 4px L-bracket corner notches in `#E11D48` or `rgba(255, 255, 255, 0.2)` indicating tactical laboratory instrumentation.
* **Telemetry Header:** Every card starts with a mono tracking code: e.g. `[MOD.01 // YOUTH FOUNDATION]`, `[INTENSITY: HIGH]`, `[COACH: NAWEED]`.

### 4.3 Technical Badges & Live Status Indicators
* **Pulsing Live Dot:** 6px green circle (`#10B981`) with an expanding concentric CSS ripple ring (`@keyframes pulse`) indicating active mat registration, live schedule status, or open mat availability.
* **Discipline Color-Coded Badges:**
  * *Wrestling (Adult / Youth):* Crimson border & text (`#E11D48`, bg `rgba(225, 29, 72, 0.12)`)
  * *No-Gi Wrestle-Jitsu / BJJ:* Cyan border & text (`#06B6D4`, bg `rgba(6, 182, 212, 0.12)`)
  * *Combat Sambo & Boxing:* Amber border & text (`#F59E0B`, bg `rgba(245, 158, 11, 0.12)`)
  * *Women's Self-Defense:* Rose / Platinum accent (`#FB7185`, bg `rgba(251, 113, 133, 0.12)`)

### 4.4 The Interactive Schedule Grid (Resolving Current Site Bugs)
* **The Bug Being Fixed:** The live site has duplicate 7:30 PM & 8:00 PM rows and zero category filtering.
* **Direction 2 Schedule Treatment:**
  * Interactive filter tabs powered by `JetBrains Mono` badges: `[ ALL ]`, `[ KIDS 4-11 ]`, `[ COMP YOUTH K-12 ]`, `[ ADULT WRESTLING ]`, `[ WRESTLE-JITSU / BJJ ]`, `[ COMBAT SAMBO / BOXING ]`.
  * Grid cells rendered as **Machined Tactical Cards** displaying:
    1. Time Range & Total Mat Duration (`7:30 PM – 9:00 PM • 90 MIN`)
    2. Discipline Badge (`[ADULT WRESTLING]`)
    3. Coach In Charge (`Coach Karim Zemaryalai (Olympian)`)
    4. Target Audience (`Scholastic, Collegiate & MMA Grapplers`)
    5. Action Hook (`[CLAIM SESSION PASS →]`)

---

## 5. Imagery & Photography Art Direction

### 5.1 The Photography Mandate: "Authentic East Bay Combat"
Direction 2 bans generic, smiling stock photography in sterile white rooms. Every visual must communicate **sweat, grit, technical biomechanics, and champion mentorship**.

### 5.2 Technical Camera & Lighting Specs
* **Shutter Speed:** High-speed shutter (`1/1000s` or faster) to freeze airborne high-crotch takedowns, chalk dust bursting from hands, and sweat droplets flying during scrambles.
* **Lighting Ratios:** Low-key dramatic rim lighting. Deep obsidian shadows in the mat perimeter, high-contrast overhead arena lighting illuminating musculature, ear guards, and mat surface texture.
* **Color Grading:**
  * Crushed blacks with rich carbon undertones (`#111215`).
  * Desaturated background elements (`-15%` saturation) with boosted red/crimson accents on singlets, rash guards, and wrestling shoes (`+20%` vibrance).
  * Skin tones remain warm, athletic, and authentic.
* **Textures & Overlays:**
  * High-traction vinyl mat surface grain.
  * Subtle industrial beam reflections from Hayward’s Industrial Parkway facility.
  * Micro carbon fiber weave pattern overlays at `4%` opacity on dark hero sections.

### 5.3 Concrete Asset Allocation from Live Vault

| Live Vault Asset Path | Direction 2 Placement | Visual Crop & Post-Processing |
| :--- | :--- | :--- |
| `discovery/archive/snapshots/live_site_content/assets/uwc_crest_logo_highres.png` | Fixed Navbar, Hero Backing Crest, Footer Watermark | Rendered at 48px in header; 600px watermark at 8% opacity with crimson ambient glow |
| `discovery/archive/snapshots/live_site_content/assets/founder.jpg` | Olympic Lineage Module (`/about` & Homepage) | Duotone black-and-silver treatment with crimson rim light overlay; badge: `FOUNDER // OLYMPIAN` |
| `discovery/archive/snapshots/live_site_content/assets/head-coach.jpg` | Head Coach Profile (`/about`) | High-contrast black & graphite portrait; caption: `NAWEED ZEMARYALAI // KINESIOLOGY & HEAD COACH` |
| `discovery/archive/snapshots/live_site_content/assets/co-founder.jpg` | International Pedigree Card | High-speed freestyle action crop; HUD callout: `INT'L MEDALIST` |
| `discovery/archive/snapshots/live_site_content/assets/uwc_place.webp` | Facility Laboratory Section | Wide cinematic crop, desaturated concrete, illuminated red mat boundary lines |
| `discovery/archive/snapshots/live_site_content/assets/facebook/fb_photo_01.jpg`–`09.jpg` | Interactive Social Video Wall & Clinician Reels | 16:9 and 9:16 vertical crop cards featuring Olympic Champion Magomed Ramazanov clinic drills |

---

## 6. Layout Architecture & Wireframe Schematics

### 6.1 Desktop Hero Section Wireframe (`1440px+`)

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  [UWC CREST]  UNITED WRESTLING CLUB       CLASSES  SCHEDULE  PRICING  ABOUT  EVENTS   │
│  HAYWARD, CA // EST. 2021                (510) 303-4869    [⚡ START TRIAL PASS]      │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│  [SYS.STATUS // MAT-01 LIVE] [HAYWARD HQ] [OLYMPIC PEDIGREE]                           │
│                                                                                        │
│  # FORGED ON THE MAT.                                  ┌─────────────────────────────┐ │
│  # PROVEN IN THE CAGE.                                 │ 📹 HIGH-SPEED ACTION LOOP   │ │
│                                                        │ (Karim Zemaryalai /         │ │
│  The East Bay's premier grappling laboratory for       │  Magomed Ramazanov Clinic)  │ │
│  youth scholastic dominance, UFC-caliber Wrestle-      │                             │ │
│  Jitsu, and elite adult combat athleticism.            │ [HUD // FRAME: 120 FPS]     │ │
│                                                        │ [TECHNIQUE: KNEE TAP]       │ │
│  ┌───────────────────────┐  ┌───────────────────────┐  │                             │ │
│  │ ⚡ CLAIM 3-DAY TRIAL  │  │ 📅 VIEW LIVE SCHEDULE │  └─────────────────────────────┘ │
│  └───────────────────────┘  └───────────────────────┘                                 │
│                                                                                        │
│  ┌──────────────────────┬──────────────────────┬──────────────────────┬──────────────┐ │
│  │ 42+ FIVE-STAR REVIEWS│ 2024 PARIS OLYMPIC   │ 3,800 SQ FT          │ 0% FLUFF     │ │
│  │ 5.0 Google Rating    │ Gold Clinic Pedigree │ Industrial Mats      │ Pure Grapple │ │
│  └──────────────────────┴──────────────────────┴──────────────────────┴──────────────┘ │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 6.2 Mobile Responsive Architecture (`<768px`)
* **Sticky Tactical Header:** 54px compact dark bar with 32px UWC crest logo, click-to-call phone icon (`tel:+15103034869`), and high-voltage crimson `[TRIAL]` pill button.
* **Hero Stack:** Text and primary value proposition render first; hero action video preview loads below with instant tap-to-play modal; stats stack into a 2x2 high-contrast grid.
* **Swipeable Schedule Stack:** Replaces broken 7-column desktop table with day-segmented cards (`MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`), eliminating pinch-to-zoom parent frustration.

---

## 7. Tailwind CSS v4 Production `@theme` Block

Drop this configuration directly into the Next.js rebuild's `app/globals.css` or Tailwind theme definition:

```css
@theme {
  /* Brand Direction 2: Modern Combat Athleticism */
  --color-uwc-crimson: #E11D48;
  --color-uwc-crimson-dark: #902524;
  --color-uwc-crimson-hover: #FF385C;
  --color-uwc-carbon: #111215;
  --color-uwc-void: #0B0C0E;
  --color-uwc-graphite: #1F2128;
  --color-uwc-graphite-light: #262933;
  --color-uwc-border: #2A2D37;
  --color-uwc-silver: #E2E8F0;
  --color-uwc-muted: #94A3B8;
  --color-uwc-cyan: #06B6D4;
  --color-uwc-amber: #F59E0B;
  --color-uwc-emerald: #10B981;

  /* Typography */
  --font-display: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-heading: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-sans: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;

  /* Radii */
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-xl: 16px;
  --radius-pill: 9999px;

  /* Tactical Shadows & Glows */
  --shadow-crimson-glow: 0px 0px 24px 0px rgba(225, 29, 72, 0.45);
  --shadow-crimson-intense: 0px 0px 40px 0px rgba(225, 29, 72, 0.7);
  --shadow-hud-cyan: 0px 0px 20px 0px rgba(6, 182, 212, 0.4);
  --shadow-card-elevated: 0px 12px 32px -8px rgba(0, 0, 0, 0.6);
  --shadow-inset-bevel: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
}
```

---

## 8. Summary of Tactical Advantages for United Wrestling Club

1. **Eliminates Strip-Mall Stigma:** Sharp, carbon-graphite aesthetics immediately communicate serious Olympic & collegiate standards, commanding higher price points (`$139–$150/mo`).
2. **Speaks Directly to Combat Athletes:** Grapplers, high school wrestlers, and BJJ practitioners respect the technical HUD metadata, cage-tested Wrestle-Jitsu positioning, and zero-nonsense layout.
3. **Reassures Performance-Minded Parents:** Shows that their children are learning from Olympic-credentialed athletes in a clean, disciplined, high-performance training environment.
4. **Fixes All Audit Issues:** Unifies phone lines to `(510) 303-4869`, routes intent away from the homepage dump, replaces broken schedule tables with filterable cards, and features Olympic champion video proof.
