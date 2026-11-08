---
type: dossier
status: current
group: brand
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: []
shard_of: "discovery/brand/analogous_brands/cluster_a_heavy_equipment_and_field_gear.md"
part: "4 of 4"
---

> Part 4 of 4 of [cluster_a_heavy_equipment_and_field_gear](../cluster_a_heavy_equipment_and_field_gear.md). Text is verbatim from the original; only links were rewritten.

## Architectural UI Implementation Plan for UWC 2027

To integrate Cluster A's design DNA into UWC's Next.js / Tailwind CSS rebuild, apply these concrete layout guidelines:

### 1. Global CSS Design Tokens (`globals.css`)
```css
:root {
  /* Surface & Background Tokens */
  --uwc-surface-base: #0B0D0F;       /* Pitch industrial warehouse base */
  --uwc-surface-card: #14171B;       /* Elevated matte steel container */
  --uwc-surface-spec: #1A1E24;       /* High-density spec readout background */
  --uwc-border-subtle: #262B33;      /* 1px steel structural gridlines */

  /* Brand Accents */
  --uwc-accent-crimson: #902524;     /* Heritage Afghan/Olympic Crimson */
  --uwc-accent-crimson-hover: #AA2C2B;
  --uwc-accent-brass: #C59B27;       /* Eleiko-style calibrated bronze */
  --uwc-accent-telemetry: #8D9A88;   /* Concept2 PM5 monochromatic green */

  /* Text Hierarchy */
  --uwc-text-primary: #F9FAFB;      /* Crisp white technical readouts */
  --uwc-text-muted: #9CA3AF;        /* Gunmetal secondary specifications */
  --uwc-text-stamp: #6B7280;        /* Archival metadata & copyright stamps */
}
```

### 2. Component Blueprint: The "Industrial Spec" Program Card
```html
<!-- UWC High School CIF Contender Card (Rogue + Eleiko + Concept2 Hybrid) -->
<div class="relative bg-[#14171B] border border-[#262B33] p-6 hover:border-[#902524] transition-colors duration-150">
  <!-- Top Technical Header -->
  <div class="flex justify-between items-center pb-4 mb-4 border-b border-[#262B33]">
    <span class="font-mono text-xs uppercase tracking-widest text-[#C59B27]">SPEC // CIF-01</span>
    <span class="font-mono text-xs text-[#9CA3AF]">MAX MAT LOAD: 24 ATHLETES</span>
  </div>

  <!-- Title & Lineage -->
  <h3 class="font-sans font-black text-2xl uppercase tracking-tight text-white mb-1">
    High School & College Prep
  </h3>
  <p class="text-xs uppercase tracking-wider text-[#9CA3AF] mb-4">
    Folkstyle Scramble Architecture & Collegiate Periodization
  </p>

  <!-- Technical Specs Grid (Concept2 Telemetry Style) -->
  <div class="grid grid-cols-2 gap-2 bg-[#0B0D0F] p-3 border border-[#1E232B] mb-5 font-mono text-xs">
    <div>
      <span class="text-[#6B7280] block text-[10px]">SCHEDULE:</span>
      <span class="text-white font-medium">MON-THU 7:30-9:00 PM</span>
    </div>
    <div>
      <span class="text-[#6B7280] block text-[10px]">LEAD COACH:</span>
      <span class="text-white font-medium">NAWEED ZEMARYALAI (CHABOT)</span>
    </div>
    <div>
      <span class="text-[#6B7280] block text-[10px]">MAT DISINFECT:</span>
      <span class="text-emerald-400 font-medium">HOSPITAL-GRADE 2X/DAY</span>
    </div>
    <div>
      <span class="text-[#6B7280] block text-[10px]">CREDENTIALS:</span>
      <span class="text-white font-medium">USAW CLUB #513</span>
    </div>
  </div>

  <!-- Utilitarian CTA (Rogue Style) -->
  <button class="w-full bg-[#902524] hover:bg-[#AA2C2B] text-white font-sans font-bold text-sm uppercase tracking-wider py-3 px-4 transition-colors">
    Claim 1-Day Trial Pass ($15)
  </button>
</div>
```

---

## Summary of Strategic Takeaways for the Pitch Deck

When presenting this rebuild strategy to Naweed and Karim Zemaryalai, frame the design overhaul around this core business argument:

1. **You Are an East Bay Industrial Treasure, Not a Mall Dojo:** UWC's location in an industrial park on Industrial Parkway is not a limitation—it is its greatest brand asset. Borrowing design cues from Rogue, YETI, Concept2, and Eleiko transforms the warehouse into an **elite athletic sanctuary**.
2. **Attracting the Right Parents:** Wealthier, high-intent parents from Fremont, Castro Valley, and Hayward avoid flashy combat gyms because they fear injuries, cultish environments, and sleazy contracts. The quiet, calibrated aesthetic of Eleiko and Concept2 communicates safety, sports science, and world-class character development.
3. **Standing Out from Local Competitors:** Every local competitor (Combat Sports Academy, Tri-Valley, Yard Dogs) uses generic black-and-red MMA templates or dated blue WordPress themes. A Rogue/YETI-inspired aesthetic instantly sets UWC apart as the only true Olympic wrestling laboratory in Northern California.
