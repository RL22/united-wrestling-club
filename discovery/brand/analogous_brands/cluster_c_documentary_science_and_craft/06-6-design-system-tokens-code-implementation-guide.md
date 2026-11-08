---
type: dossier
status: current
group: brand
owner: "Rodney Lewis (Sprintz)"
date: 2026-10-31
last_reviewed: 2026-10-31
sources: []
shard_of: "discovery/brand/analogous_brands/cluster_c_documentary_science_and_craft.md"
part: "6 of 6"
---

> Part 6 of 6 of [cluster_c_documentary_science_and_craft](../cluster_c_documentary_science_and_craft.md). Text is verbatim from the original; only links were rewritten.

## 6. Design System Tokens & Code Implementation Guide

To enable frontend engineers or Webflow/Next.js developers to implement this exact aesthetic in the 2027 rebuild, use the following production-ready design tokens.

### CSS Custom Properties (Design Tokens)

```css
:root {
  /* ========================================================
     BRAND IDENTITY: DOCUMENTARY SCIENCE & PRECISION CRAFT
     ======================================================== */

  /* Surface & Ground Tokens */
  --uwc-bg-canvas: #F9F8F5;          /* Heavy uncoated book paper (TSJ/Cereal) */
  --uwc-bg-surface: #FFFFFF;         /* Crisp white card surface */
  --uwc-bg-subtle: #F2EFE9;          /* Washed canvas & linen tint */
  --uwc-bg-dark: #121212;            /* Leica Wetzlar vulcanite matte black */
  --uwc-bg-dark-surface: #18191C;    /* LMNT carbon slate card surface */

  /* Ink & Typography Tokens */
  --uwc-text-primary: #1C1D1F;       /* Printer's carbon ink */
  --uwc-text-secondary: #5A5D62;     /* Muted lead / 35mm film grain tone */
  --uwc-text-muted: #8A8883;         /* Archival date stamp / footnote grey */
  --uwc-text-light: #F7F6F2;         /* Off-white text on dark surfaces */

  /* Precision Brand Accents */
  --uwc-accent-oxblood: #782020;     /* UWC Heritage oxblood letterpress */
  --uwc-accent-leica-red: #E3001B;   /* Surgical 1px red-dot / active indicator */
  --uwc-accent-citrus: #FF5722;      /* LMNT elemental metabolic amber */
  --uwc-accent-cyan: #2EC4B6;        /* LMNT osmotic kinesiology cyan */
  --uwc-accent-brass: #D4A017;       /* IronMind cast brass inspection gold */

  /* Structural Metal & Border Tokens */
  --uwc-border-hairline: #E5E1D8;    /* 0.5px - 1px paper-edge hairline rule */
  --uwc-border-chrome: #C8C7C3;      /* Leica satin chrome precision border */
  --uwc-border-steel: #3D444D;       /* IronMind dark gunmetal divider */

  /* Typography Stacks */
  --uwc-font-display: 'DIN Pro', 'DIN 1451 Mittelschrift', -apple-system, sans-serif;
  --uwc-font-editorial: 'Adobe Caslon Pro', 'Newsreader', 'Cormorant Garamond', Georgia, serif;
  --uwc-font-mono: 'Space Mono', 'Courier Prime', SFMono-Regular, Menlo, monospace;
  --uwc-font-sans: 'Public Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  /* Elevation & Borders */
  --uwc-radius-none: 0px;            /* Unapologetic mechanical precision */
  --uwc-radius-tight: 2px;           /* Subtle industrial stamp corner */
  --uwc-radius-card: 4px;            /* Maximum card radius; never rounded pill shapes */
}
```

### Production Component Examples (Tailwind / HTML / CSS)

#### Component A: The Leica-Inspired "Viewfinder" Archival Card
```html
<div class="relative bg-[#121212] text-[#F7F6F2] p-6 border border-[#262626] font-mono">
  <!-- Top Viewfinder Metadata Row -->
  <div class="flex justify-between items-center text-[10px] tracking-widest text-[#8A8883] border-b border-[#262626] pb-3 mb-4">
    <div class="flex items-center space-x-2">
      <span class="inline-block w-2 h-2 rounded-full bg-[#E3001B]"></span>
      <span>HAYWARD ARCHIVE // MAT C</span>
    </div>
    <span>35MM PRIME // ISO 1600</span>
    <span>EST. 1980 LINEAGE</span>
  </div>

  <!-- Main Image with Viewfinder Corner Crops -->
  <div class="relative overflow-hidden mb-4 border border-[#333333]">
    <img src="/images/karim-1980-archive.jpg" alt="Coach Karim Zemaryalai, 1980 Moscow Olympian" class="w-full grayscale contrast-125 brightness-95 object-cover" />
    <div class="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#C8C7C3]/60"></div>
    <div class="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#C8C7C3]/60"></div>
    <div class="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#C8C7C3]/60"></div>
    <div class="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#C8C7C3]/60"></div>
  </div>

  <!-- Narrative Caption -->
  <p class="font-sans text-sm text-[#C8C7C3] leading-relaxed">
    Coach Karim Zemaryalai training under Soviet masters in Dagestan prior to the 1980 Moscow Games. Technique handed down directly across four decades to Hayward youth.
  </p>
</div>
```

#### Component B: The IronMind / LMNT "Facility & Kinesiology Spec Grid"
```html
<div class="bg-[#F9F8F5] border-2 border-[#1C1D1F] p-6 max-w-xl text-[#1C1D1F]">
  <div class="flex justify-between items-end border-b-2 border-[#1C1D1F] pb-3 mb-4">
    <div>
      <span class="block text-[11px] font-mono tracking-widest uppercase text-[#782020]">Verified Operational Protocol</span>
      <h3 class="text-2xl font-bold font-['DIN_Pro'] tracking-tight uppercase">Mat Safety & Rigor Specs</h3>
    </div>
    <span class="font-mono text-xs font-bold bg-[#1C1D1F] text-white px-2 py-1">USAW #513</span>
  </div>

  <table class="w-full text-xs font-mono border-collapse">
    <tbody>
      <tr class="border-b border-[#E5E1D8]">
        <td class="py-2.5 uppercase font-bold text-[#5A5D62]">Impact Attenuation</td>
        <td class="py-2.5 text-right font-bold text-[#1C1D1F]">2.0" High-Density Vinyl / Sprung Matrix</td>
      </tr>
      <tr class="border-b border-[#E5E1D8]">
        <td class="py-2.5 uppercase font-bold text-[#5A5D62]">Microbial Protocol</td>
        <td class="py-2.5 text-right font-bold text-[#1C1D1F]">Dual-Cycle Hospital Grade Disinfection</td>
      </tr>
      <tr class="border-b border-[#E5E1D8]">
        <td class="py-2.5 uppercase font-bold text-[#5A5D62]">Lead Kinesiologist</td>
        <td class="py-2.5 text-right font-bold text-[#1C1D1F]">Naweed Zemaryalai, B.S. (Chabot Coach)</td>
      </tr>
      <tr>
        <td class="py-2.5 uppercase font-bold text-[#5A5D62]">Commercial Belt Fees</td>
        <td class="py-2.5 text-right font-bold text-[#782020]">$0.00 (Zero McDojo Upsells)</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## 7. Strategic Synthesis & Summary for Stakeholders

| ICP | Emotional Hook | Brand Influence Utilized | Conversion Result |
| :--- | :--- | :--- | :--- |
| **East Bay Parents** | *Safety, character, and anti-bullying resilience without the strip-mall hype.* | **Leica** (real, unposed candid photos) + **The Surfer's Journal** (dignified literary essays) + **IronMind** (flawless hygiene specs). | Parents perceive UWC as a premier youth development institute, justifying premium monthly dues and driving long-term family commitment. |
| **Scholastic CIF Athletes** | *Becoming state champions through scientific edge and unyielding mat time.* | **LMNT** (metabolic and kinesiology conditioning breakdowns) + **IronMind** (grip strength standards and the State Placer Honor Roll). | Top high school wrestlers in Hayward, San Leandro, Fremont, and Castro Valley choose UWC over generic gyms for their off-season preparation. |
| **Adult Grapplers** | *Pure technique, multi-generational lineage, and functional physical armor.* | **Leica** (historical Soviet/Olympic archive) + **The Surfer's Journal** (respect for the craft) + **LMNT** (sweat-tested endurance). | Serious adults (software engineers, healthcare professionals, blue-collar workers) treat UWC as their private, authentic wrestling sanctuary. |

By building upon these four masters of documentary truth, performance science, and precision craft, the 2027 United Wrestling Club digital rebuild will establish a category of one: **an uncompromising, industrial sanctuary of physical excellence in the heart of the East Bay.**
