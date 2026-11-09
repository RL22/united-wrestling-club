---
type: dossier
status: current
group: brand
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/brand/moodboards/direction_2_modern_combat_athletic.html", "discovery/archive/snapshots/live_site_content/assets/uwc_crest_logo_highres.png", "discovery/archive/snapshots/live_site_content/assets/founder.jpg", "discovery/archive/snapshots/live_site_content/assets/head-coach.jpg", "discovery/archive/snapshots/live_site_content/assets/co-founder.jpg", "discovery/archive/snapshots/live_site_content/assets/uwc_place.webp", "discovery/archive/snapshots/live_site_content/assets/facebook/fb_photo_01.jpg"]
shard_of: "discovery/brand/moodboards/direction_2_modern_combat_athletic.md"
part: "3 of 3"
---

> Part 3 of 3 of [direction_2_modern_combat_athletic](../direction_2_modern_combat_athletic.md). Text is verbatim from the original; only links were rewritten.

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
