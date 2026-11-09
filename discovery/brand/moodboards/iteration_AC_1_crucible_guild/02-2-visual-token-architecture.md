---
type: dossier
status: current
group: brand
owner: "Rodney Lewis (Sprintz)"
date: 2026-10-31
last_reviewed: 2026-10-31
sources: []
shard_of: "discovery/brand/moodboards/iteration_AC_1_crucible_guild.md"
part: "2 of 3"
---

> Part 2 of 3 of [iteration_AC_1_crucible_guild](../iteration_AC_1_crucible_guild.md). Text is verbatim from the original; only links were rewritten.

## 2. Visual & Token Architecture

The AC-1 system synthesizes the deep obsidian void of elite combat spaces with the archival dignity of Olympic heritage and the tactile durability of heavy industrial canvas.

```
                              AC-1 TOKEN ARCHITECTURE
                                         │
        ┌────────────────────────────────┼────────────────────────────────┐
        ▼                                ▼                                ▼
    CANVAS VOID:                     LINEAGE DUO:                    TYPOGRAPHY:
#090A0D (Pitch Void)            #BA1C1C (Bloodline Red)         #F4F1EA (Vintage Bone)
#14161B (Acid Slate)            #1D4ED8 (Olympic Royal)         #C5A059 (Medal Brass)
```

### 2.1 Complete Color Palette Specification

```css
:root {
  /* Canvas Surfaces: Heavy Industrial Void */
  --uwc-pitch-void: #090A0D;      /* Page background; anti-reflective matte black */
  --uwc-acid-slate: #14161B;      /* Card surfaces, elevated modals; weathered slate */
  --uwc-iron-rim: #22262E;        /* Subtle hairline structural borders */
  
  /* Primary Action & Sacred Sacrifice */
  --uwc-bloodline-red: #BA1C1C;   /* Furnace heat, singlet trim, primary CTAs */
  --uwc-furnace-hover: #D92323;   /* Interactive hover state */
  
  /* Heritage & Olympic Sanction */
  --uwc-olympic-blue: #1D4ED8;    /* 1980 Moscow mat blue, USAW sanction badges */
  --uwc-lineage-cobalt: #1E40AF;  /* Secondary technical callouts & tabs */
  
  /* High-Contrast Archival Neutrals */
  --uwc-vintage-bone: #F4F1EA;    /* High-contrast headlines & text; zero eye glare */
  --uwc-anvil-grey: #8E95A5;      /* Subtitles, secondary copy, coordinates */
  --uwc-medal-brass: #C5A059;     /* 1980 qualification foil, master seals */
}
```

| Swatch Name | Role | Hex Code | Visual Reference / Cultural Association |
| :--- | :--- | :--- | :--- |
| **Pitch Void** | Canvas & Background | `#090A0D` | Deep matte carbon black; isolates the mat lighting and frames focus. |
| **Acid Slate** | Container & Card Surface | `#14161B` | 450 GSM weathered fleece texture; cast iron plate with subtle tooth. |
| **Bloodline Red** | Primary Action & Heat | `#BA1C1C` | High-visceral arterial crimson; represents the furnace of the crucible. |
| **Olympic Royal Blue** | Lineage & Sanction | `#1D4ED8` | International Olympic & USA Wrestling mat blue; unassailable technical law. |
| **Vintage Bone** | Primary Typography | `#F4F1EA` | Unbleached heavy canvas, 1980 archival print; warm, readable, glare-free. |
| **Medal Brass** | Archival Badges & Foil | `#C5A059` | 1980 Moscow Olympic qualification & Dagestan medalist metallic accent. |

---

### 2.2 Typography Pairings & Hierarchy

The typography stack balances industrial force with timeless academic stewardship:

1. **Primary Impact Display (H1, Key Figures, Badges):** `Barlow Condensed Black 900`
   * *Style:* All-caps, ultra-tight tracking (`letter-spacing: -0.02em`), compact leading (`line-height: 0.92-0.95`).
   * *Role:* Delivers the raw, heavy, industrial authority of a steel foundry or Olympic stadium scoreboard.
2. **Heritage Editorial Subheads & Master Quotes:** `Newsreader 600 SemiBold Italic`
   * *Style:* Classical serif with open optical spacing (`font-style: italic`, `line-height: 1.35`).
   * *Role:* Confers generational dignity and Olympic gravitas. Transforms marketing copy into a personal testimony from Coach Karim and Naweed.
3. **Curatorial Metadata, Telemetry & Coordinates:** `Space Mono Bold`
   * *Style:* Monospaced uppercase, tracked (`letter-spacing: +0.08em`, `font-size: 0.75rem-0.85rem`).
   * *Role:* Calibrates class times, facility specs, weight categories, and chronological milestones.
4. **Parent-Facing Body & Moral Trust:** `Public Sans (400 Regular & 500 Medium)`
   * *Style:* Modern, humanistic sans-serif with exceptional micro-legibility (`line-height: 1.65`).
   * *Role:* Guarantees that parents can read safety policies, curriculum outlines, and hygiene standards without cognitive fatigue.

---

### 2.3 Textures, Borders & UI Styling

* **Container Architecture:** Hard-cornered or micro-rounded cards (`border-radius: 2px` to `4px`) referencing industrial shipping containers, Olympic archive folios, and heavy mat tape.
* **Dividers & Borders:** 1px hairline rules using `rgba(244, 241, 234, 0.10)` or dual-line rules (1px Olympic Blue paired with 1px Bloodline Red).
* **Atmospheric Light:** Low-key dramatic lighting (`box-shadow: 0 20px 40px -15px rgba(0,0,0,0.85)`) with subtle red/blue ambient rim highlights mimicking warehouse stadium fixtures.
* **Tactile Ground:** Subtly peppered with 3% opacity film grain overlay to eliminate flat corporate sterility.

---
