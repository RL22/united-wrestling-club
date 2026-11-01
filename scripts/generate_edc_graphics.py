#!/usr/bin/env python3
"""
United Wrestling Club (UWC) — Motto Graphic Suite Generator (V2 Enhanced)
Architect: Argon, Lead Visual Identity & SVG Graphic Architect
Task: Generate 3 Production-Grade Graphic Treatments for:
      "EXCELLENCE, DISCIPLINE, CHAMPIONS" & "EDC" Monogram
"""

import os
import math

OUTPUT_DIR = "/Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/assets"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# -----------------------------------------------------------------------------
# OPTION A: THE HEAVYWEIGHT EDC TRI-BLOCK
# -----------------------------------------------------------------------------
def generate_option_a():
    svg = """<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <title>UWC Motto Treatment — Option A: The Heavyweight EDC Tri-Block</title>
  <desc>Collegiate distressed block monogram 'E D C' with transparent masked cutout stripes, housing the full words EXCELLENCE, DISCIPLINE, CHAMPIONS.</desc>
  
  <defs>
    <!-- Procedural Mat Scuff & Vintage Screenprint Grit Filter -->
    <filter id="uwc-mat-grit-a" x="-10%" y="-10%" width="120%" height="120%" filterUnits="userSpaceOnUse">
      <feTurbulence type="fractalNoise" baseFrequency="0.045 0.85" numOctaves="4" seed="42" result="noise" />
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -7.5" in="noise" result="gritMask" />
      <feComposite in="SourceGraphic" in2="gritMask" operator="in" />
    </filter>

    <!-- Linear Chamfered Drop Shadow for Athletic Block Depth -->
    <filter id="block-shadow" x="-5%" y="-5%" width="120%" height="120%">
      <feDropShadow dx="8" dy="12" stdDeviation="0" flood-color="#000000" flood-opacity="0.8" />
    </filter>

    <!-- Knockout Mask: Carves Horizontal Negative Channels & Grit Through Letters -->
    <mask id="triblock-knockout-mask">
      <!-- Base white fill = 100% opaque -->
      <rect width="100%" height="100%" fill="#FFFFFF" />
      
      <!-- Negative Cutout Channel 1: Upper Racing Stripe -->
      <rect x="0" y="236" width="1280" height="22" fill="#000000" />
      
      <!-- Negative Cutout Channel 2: Lower Racing Stripe -->
      <rect x="0" y="382" width="1280" height="22" fill="#000000" />

      <!-- Built-in Vector Mat Scuffs & Wear Slits -->
      <!-- Letter E Distress Notches -->
      <polygon points="170,138 200,138 190,154 160,154" fill="#000000" />
      <polygon points="360,160 395,160 382,182 347,182" fill="#000000" />
      <polygon points="128,308 158,308 150,326 120,326" fill="#000000" />
      <polygon points="285,475 330,475 318,502 273,502" fill="#000000" />
      
      <!-- Letter D Distress Notches -->
      <polygon points="515,134 550,134 542,152 507,152" fill="#000000" />
      <polygon points="718,278 748,278 736,306 706,306" fill="#000000" />
      <polygon points="476,338 506,338 498,356 468,356" fill="#000000" />
      <polygon points="675,468 712,468 698,498 661,498" fill="#000000" />

      <!-- Letter C Distress Notches -->
      <polygon points="865,142 902,142 890,166 853,166" fill="#000000" />
      <polygon points="1088,188 1124,188 1112,216 1076,216" fill="#000000" />
      <polygon points="836,328 872,328 864,346 828,346" fill="#000000" />
      <polygon points="1065,446 1112,446 1094,476 1047,476" fill="#000000" />

      <!-- Horizontal Mat Scuff Lines -->
      <rect x="220" y="188" width="850" height="2.5" fill="#000000" opacity="0.85" />
      <rect x="150" y="308" width="980" height="3" fill="#000000" opacity="0.9" />
      <rect x="200" y="440" width="880" height="2.5" fill="#000000" opacity="0.85" />
    </mask>

    <style>
      .collegiate-header { font-family: 'Montserrat', 'Impact', sans-serif; font-size: 15px; font-weight: 900; letter-spacing: 0.38em; fill: #C5A059; text-anchor: middle; }
      .pillar-subtext { font-family: 'Montserrat', 'Arial Black', sans-serif; font-size: 26px; font-weight: 900; letter-spacing: 0.18em; fill: #FFFFFF; text-anchor: middle; }
      .meta-tag { font-family: 'Montserrat', monospace, sans-serif; font-size: 13px; font-weight: 800; letter-spacing: 0.3em; fill: #A0A0A0; text-anchor: middle; }
    </style>
  </defs>

  <!-- Graphic Root Container -->
  <g id="option-a-tri-block">
    
    <!-- TOP INDUSTRIAL METADATA STRIP -->
    <g id="top-meta" transform="translate(640, 68)">
      <!-- Left & Right Accent Ticks -->
      <line x1="-540" y1="-5" x2="-340" y2="-5" stroke="#C5A059" stroke-width="2" stroke-dasharray="16 6" />
      <line x1="340" y1="-5" x2="540" y2="-5" stroke="#C5A059" stroke-width="2" stroke-dasharray="16 6" />
      <text x="0" y="0" class="collegiate-header">UNITED WRESTLING CLUB • USA RTC #513 • HAYWARD CA</text>
    </g>

    <!-- ======================================================== -->
    <!-- LAYER 1: OUTER OFFSET CONTOUR STROKES (Collegiate Jacket Trim) -->
    <!-- ======================================================== -->
    <g id="outer-contours" fill="none" stroke="#C5A059" stroke-width="3.5" stroke-linejoin="miter" opacity="0.85">
      <!-- Letter E Contour Box -->
      <polygon points="120,160 152,120 368,120 398,150 398,206 364,228 298,228 280,244 280,266 298,282 356,282 378,304 378,336 356,358 298,358 280,374 280,396 298,412 364,412 398,434 398,490 368,520 152,520 120,480" />
      
      <!-- Letter D Contour Box -->
      <polygon points="460,160 492,120 678,120 760,202 760,438 678,520 492,520 460,480" />
      
      <!-- Letter C Contour Box -->
      <polygon points="1108,120 1140,152 1140,216 1104,238 976,238 934,276 934,364 976,402 1104,402 1140,424 1140,488 1108,520 862,520 820,476 820,164 862,120" />
    </g>

    <!-- ======================================================== -->
    <!-- LAYER 2: PRIMARY HEAVYWEIGHT MONOGRAM BLOCK (E D C)      -->
    <!-- Masked with horizontal knockout strips & mat distress      -->
    <!-- ======================================================== -->
    <g id="triblock-letters" mask="url(#triblock-knockout-mask)" filter="url(#uwc-mat-grit-a)">
      
      <!-- LETTER E (Chamfered Athletic Collegiate Block) -->
      <g id="letter-e" filter="url(#block-shadow)">
        <polygon points="130,160 160,130 360,130 390,160 390,200 360,220 290,220 270,240 270,270 290,290 350,290 370,310 370,330 350,350 290,350 270,370 270,400 290,420 360,420 390,440 390,480 360,510 160,510 130,480"
                 fill="#902524" stroke="#BA1C1C" stroke-width="4" stroke-linejoin="bevel" />
        <!-- Inner Contrast Bevel Accent -->
        <polygon points="144,166 168,142 352,142 376,166 376,194 352,210 282,210 258,234 258,276 282,300 342,300 356,314 356,326 342,340 282,340 258,364 258,406 282,430 352,430 376,446 376,474 352,498 168,498 144,474"
                 fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.32" />
      </g>

      <!-- LETTER D (Chamfered Athletic Collegiate Block with Counter) -->
      <g id="letter-d" filter="url(#block-shadow)">
        <!-- Outer Solid Shell -->
        <polygon points="470,160 500,130 670,130 750,210 750,430 670,510 500,510 470,480"
                 fill="#902524" stroke="#BA1C1C" stroke-width="4" stroke-linejoin="bevel" />
        <!-- Inner Counter Cutout (Window) -->
        <polygon points="560,220 630,220 660,250 660,390 630,420 560,420"
                 fill="#0B0B0C" opacity="0.96" />
        <!-- Inner Contrast Bevel Accent -->
        <polygon points="484,166 508,142 662,142 736,216 736,424 662,498 508,498 484,474"
                 fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.32" />
      </g>

      <!-- LETTER C (Chamfered Athletic Collegiate Block) -->
      <g id="letter-c" filter="url(#block-shadow)">
        <polygon points="1100,130 1130,160 1130,210 1100,230 970,230 930,270 930,370 970,410 1100,410 1130,430 1130,480 1100,510 870,510 830,470 830,170 870,130"
                 fill="#902524" stroke="#BA1C1C" stroke-width="4" stroke-linejoin="bevel" />
        <!-- Inner Contrast Bevel Accent -->
        <polygon points="1092,142 1118,168 1118,202 1092,220 962,220 918,264 918,376 962,420 1092,420 1118,438 1118,472 1092,498 878,498 842,462 842,178 878,142"
                 fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.32" />
      </g>

    </g>

    <!-- ======================================================== -->
    <!-- LAYER 3: PILLAR WORDS ANCHORED DIRECTLY BENEATH EACH MONO -->
    <!-- ======================================================== -->
    <g id="pillar-labels" transform="translate(0, 568)">
      <!-- Label 1: EXCELLENCE (under E) -->
      <g id="label-excellence" transform="translate(260, 0)">
        <rect x="-120" y="-30" width="240" height="42" fill="#0E0E0E" rx="2" stroke="#BA1C1C" stroke-width="1.5" />
        <text x="0" y="0" class="pillar-subtext">EXCELLENCE</text>
      </g>

      <!-- Label 2: DISCIPLINE (under D) -->
      <g id="label-discipline" transform="translate(610, 0)">
        <rect x="-120" y="-30" width="240" height="42" fill="#0E0E0E" rx="2" stroke="#FFFFFF" stroke-width="1.5" />
        <text x="0" y="0" class="pillar-subtext">DISCIPLINE</text>
      </g>

      <!-- Label 3: CHAMPIONS (under C) -->
      <g id="label-champions" transform="translate(980, 0)">
        <rect x="-120" y="-30" width="240" height="42" fill="#0E0E0E" rx="2" stroke="#C5A059" stroke-width="1.5" />
        <text x="0" y="0" class="pillar-subtext" style="fill: #C5A059;">CHAMPIONS</text>
      </g>
    </g>

    <!-- ======================================================== -->
    <!-- LAYER 4: BOTTOM FOUNDATION ANCHOR BAR                   -->
    <!-- ======================================================== -->
    <g id="bottom-anchor" transform="translate(640, 650)">
      <rect x="-540" y="-18" width="1080" height="36" fill="#141414" stroke="#262626" stroke-width="1.5" />
      <text x="0" y="6" class="meta-tag">FOUNDED BY 1980 MOSCOW OLYMPIAN KARIM ZEMARYALAI // HAYWARD INDUSTRIAL MATS</text>
      
      <!-- Tactical Chevron End Caps -->
      <polygon points="-540,-18 -520,0 -540,18" fill="#BA1C1C" />
      <polygon points="540,-18 520,0 540,18" fill="#BA1C1C" />
    </g>

  </g>
</svg>
"""
    with open(os.path.join(OUTPUT_DIR, "edc_motto_option_a_triblock.svg"), "w") as f:
        f.write(svg)
    print("Option A (Enhanced) written.")

# -----------------------------------------------------------------------------
# OPTION B: THE BRUTALIST CONTOUR STACK
# -----------------------------------------------------------------------------
def generate_option_b():
    svg = """<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 820" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <title>UWC Motto Treatment — Option B: The Brutalist Contour Stack</title>
  <desc>Kinetic 3-tier vertical typographic stack: EXCELLENCE (distressed solid crimson), DISCIPLINE (extra-bold hollow stroke outline with 100% transparent counterfill), CHAMPIONS (ultra-heavy distressed white block with EDC tactical side badge).</desc>

  <defs>
    <!-- Heavy Mat-Scuff & Grit Filter -->
    <filter id="uwc-mat-grit-b" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.05 0.95" numOctaves="4" seed="88" result="noise" />
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" in="noise" result="grit" />
      <feComposite in="SourceGraphic" in2="grit" operator="in" />
    </filter>

    <!-- Stencil Speed Notch Mask for Solid Tiers -->
    <mask id="speed-stencil-mask">
      <rect width="100%" height="100%" fill="#FFFFFF" />
      <!-- Diagonal 45 deg tactical stencil slices -->
      <polygon points="280,60 300,60 260,280 240,280" fill="#000000" />
      <polygon points="620,60 640,60 600,280 580,280" fill="#000000" />
      <polygon points="940,60 960,60 920,280 900,280" fill="#000000" />
      
      <!-- Champions Notch Cuts -->
      <polygon points="340,500 360,500 320,740 300,740" fill="#000000" />
      <polygon points="760,500 780,500 740,740 720,740" fill="#000000" />

      <!-- Horizontal abrasion slits -->
      <rect x="80" y="170" width="980" height="3" fill="#000000" opacity="0.85" />
      <rect x="120" y="610" width="940" height="4" fill="#000000" opacity="0.9" />
    </mask>

    <style>
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@900&amp;family=Montserrat:wght@800;900&amp;display=swap');
      .brutalist-title {
        font-family: 'Barlow Condensed', 'Montserrat Black', 'Impact', sans-serif;
        font-size: 168px;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: -0.01em;
        line-height: 0.85;
      }
      .badge-code {
        font-family: 'Montserrat', monospace, sans-serif;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 0.28em;
        fill: #A0A0A0;
      }
      .badge-monogram {
        font-family: 'Montserrat', 'Impact', sans-serif;
        font-size: 54px;
        font-weight: 900;
        text-anchor: middle;
      }
    </style>
  </defs>

  <!-- Root Group -->
  <g id="option-b-contour-stack">

    <!-- ======================================================== -->
    <!-- LEFT SIDE: 3-TIER KINETIC MOTTO TYPOGRAPHIC ENGINE       -->
    <!-- ======================================================== -->
    <g id="typographic-stack" transform="translate(80, 0)">

      <!-- ---------------------------------------------------- -->
      <!-- TIER 1: EXCELLENCE (Solid Distressed Crimson Block)  -->
      <!-- ---------------------------------------------------- -->
      <g id="tier-1-excellence" transform="translate(0, 210)" mask="url(#speed-stencil-mask)" filter="url(#uwc-mat-grit-b)">
        <!-- Ghost Chromatic Underlay -->
        <text x="6" y="6" class="brutalist-title" fill="#000000" opacity="0.5">EXCELLENCE</text>
        <!-- Primary Solid Crimson Block -->
        <text x="0" y="0" class="brutalist-title" fill="#902524" stroke="#BA1C1C" stroke-width="2">EXCELLENCE</text>
      </g>
      <!-- Sub-tier Micro Metadata -->
      <g id="tier-1-meta" transform="translate(6, 235)">
        <text x="0" y="0" class="badge-code" fill="#BA1C1C">// TIER 01: TECHNICAL MASTERY &amp; OLYMPIC CALIBER MOTOR PRECISION</text>
      </g>

      <!-- ---------------------------------------------------- -->
      <!-- TIER 2: DISCIPLINE (Hollow Extra-Bold Stroke Outline) -->
      <!-- 100% Transparent Counterfill lets background bleed    -->
      <!-- ---------------------------------------------------- -->
      <g id="tier-2-discipline" transform="translate(0, 420)">
        <!-- Chromatic Aberration Kinetic Ghost (Crimson Echo) -->
        <text x="7" y="5" class="brutalist-title"
              fill="none" stroke="#BA1C1C" stroke-width="4" stroke-linejoin="bevel" opacity="0.45">DISCIPLINE</text>
        
        <!-- Primary 100% Hollow Outline (Bone White) -->
        <!-- Note: fill is explicitly "none" - complete transparency for background canvas / mat photos -->
        <text x="0" y="0" class="brutalist-title"
              fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linejoin="bevel" stroke-miterlimit="3">DISCIPLINE</text>
        
        <!-- Precision Chamfered Corner Reinforcements -->
        <line x1="0" y1="18" x2="1080" y2="18" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="12 8" opacity="0.6" />
      </g>
      <!-- Sub-tier Micro Metadata -->
      <g id="tier-2-meta" transform="translate(6, 445)">
        <text x="0" y="0" class="badge-code" fill="#FFFFFF">// TIER 02: 100% HOLLOW STROKE • UNCOMPROMISING DAILY CRUCIBLE</text>
      </g>

      <!-- ---------------------------------------------------- -->
      <!-- TIER 3: CHAMPIONS (Ultra-Heavy Distressed White Block)-->
      <!-- ---------------------------------------------------- -->
      <g id="tier-3-champions" transform="translate(0, 630)" mask="url(#speed-stencil-mask)" filter="url(#uwc-mat-grit-b)">
        <!-- Deep Charcoal Shadow -->
        <text x="8" y="8" class="brutalist-title" fill="#000000" opacity="0.9">CHAMPIONS</text>
        <!-- Solid Bone White Heavy Slab -->
        <text x="0" y="0" class="brutalist-title" fill="#F5F5F0">CHAMPIONS</text>
      </g>
      <!-- Sub-tier Micro Metadata -->
      <g id="tier-3-meta" transform="translate(6, 658)">
        <text x="0" y="0" class="badge-code" fill="#C5A059">// TIER 03: STATE QUALIFIERS • NATIONAL PODIUMS • CIF / NCAA READY</text>
      </g>

      <!-- Bottom Brutalist Baseline -->
      <g id="stack-footer" transform="translate(0, 720)">
        <rect x="0" y="0" width="1080" height="2" fill="#BA1C1C" />
        <text x="0" y="24" class="badge-code" fill="#808080">UNITED WRESTLING CLUB • SANCTIONED USA WRESTLING RTC #513 • 30139 INDUSTRIAL PKWY HAYWARD CA</text>
      </g>

    </g>

    <!-- ======================================================== -->
    <!-- RIGHT SIDE: TACTICAL EDC MONOLITH BADGE                  -->
    <!-- Vertical monolith integrating E, D, C nodes & lineage    -->
    <!-- ======================================================== -->
    <g id="tactical-edc-badge" transform="translate(1220, 70)">
      
      <!-- Monolith Chamfered Container (140px x 680px) -->
      <path d="M 20 0 H 120 L 140 20 V 660 L 120 680 H 20 L 0 660 V 20 Z"
            fill="#101010" stroke="#BA1C1C" stroke-width="2.5" />
      
      <!-- Inner Chamfer Inset -->
      <path d="M 24 8 H 116 L 132 24 V 656 L 116 672 H 24 L 8 656 V 24 Z"
            fill="none" stroke="#262626" stroke-width="1.5" />

      <!-- Top Header Tag -->
      <text x="70" y="38" class="badge-code" fill="#C5A059" text-anchor="middle" font-size="11px">UWC // RTC</text>
      <line x1="20" y1="52" x2="120" y2="52" stroke="#BA1C1C" stroke-width="1" />

      <!-- Node 1: E (Excellence) - Solid Crimson Node -->
      <g id="node-e" transform="translate(70, 135)">
        <polygon points="0,-48 48,0 0,48 -48,0" fill="#902524" stroke="#BA1C1C" stroke-width="2" />
        <text x="0" y="19" class="badge-monogram" fill="#FFFFFF">E</text>
        <text x="0" y="62" class="badge-code" fill="#BA1C1C" text-anchor="middle" font-size="8px">EXCELLENCE</text>
      </g>

      <line x1="70" y1="210" x2="70" y2="250" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="4 4" opacity="0.5" />

      <!-- Node 2: D (Discipline) - Hollow Stroke Outline Node -->
      <g id="node-d" transform="translate(70, 315)">
        <polygon points="0,-48 48,0 0,48 -48,0" fill="#0B0B0B" stroke="#FFFFFF" stroke-width="3" />
        <text x="0" y="19" class="badge-monogram" fill="none" stroke="#FFFFFF" stroke-width="2.5">D</text>
        <text x="0" y="62" class="badge-code" fill="#FFFFFF" text-anchor="middle" font-size="8px">DISCIPLINE</text>
      </g>

      <line x1="70" y1="390" x2="70" y2="430" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="4 4" opacity="0.5" />

      <!-- Node 3: C (Champions) - Championship Gold Node -->
      <g id="node-c" transform="translate(70, 495)">
        <polygon points="0,-48 48,0 0,48 -48,0" fill="#181818" stroke="#C5A059" stroke-width="2" />
        <text x="0" y="19" class="badge-monogram" fill="#C5A059">C</text>
        <text x="0" y="62" class="badge-code" fill="#C5A059" text-anchor="middle" font-size="8px">CHAMPIONS</text>
      </g>

      <!-- Bottom Tactical Barcode & RTC Coordinates -->
      <g id="node-footer" transform="translate(25, 595)">
        <line x1="0" y1="0" x2="90" y2="0" stroke="#262626" stroke-width="1" />
        <!-- Micro Barcode lines -->
        <line x1="10" y1="12" x2="10" y2="36" stroke="#FFFFFF" stroke-width="2" />
        <line x1="16" y1="12" x2="16" y2="36" stroke="#FFFFFF" stroke-width="1" />
        <line x1="22" y1="12" x2="22" y2="36" stroke="#FFFFFF" stroke-width="3" />
        <line x1="30" y1="12" x2="30" y2="36" stroke="#FFFFFF" stroke-width="1" />
        <line x1="36" y1="12" x2="36" y2="36" stroke="#FFFFFF" stroke-width="4" />
        <line x1="46" y1="12" x2="46" y2="36" stroke="#FFFFFF" stroke-width="2" />
        <line x1="54" y1="12" x2="54" y2="36" stroke="#FFFFFF" stroke-width="1" />
        <line x1="62" y1="12" x2="62" y2="36" stroke="#FFFFFF" stroke-width="3" />
        <line x1="72" y1="12" x2="72" y2="36" stroke="#FFFFFF" stroke-width="2" />
        <line x1="80" y1="12" x2="80" y2="36" stroke="#FFFFFF" stroke-width="1" />
        <text x="45" y="52" class="badge-code" fill="#666666" text-anchor="middle" font-size="8px">EST. 1980</text>
      </g>

    </g>

  </g>
</svg>
"""
    with open(os.path.join(OUTPUT_DIR, "edc_motto_option_b_brutalist_contour.svg"), "w") as f:
        f.write(svg)
    print("Option B written.")

# -----------------------------------------------------------------------------
# OPTION C: THE TACTICAL COMBAT OCTAGON SEAL
# -----------------------------------------------------------------------------
def generate_option_c():
    svg = """<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 960" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <title>UWC Motto Treatment — Option C: The Tactical Combat Octagon Seal</title>
  <desc>Chamfered combat crest with central knockout 'EDC' monogram, flanked by arched stenciled EXCELLENCE / DISCIPLINE / CHAMPIONS and weathered mat-grit distress.</desc>

  <defs>
    <!-- Weathered Mat-Grit & Combat Distress Filter -->
    <filter id="uwc-mat-grit-c" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.06 0.8" numOctaves="4" seed="1980" result="noise" />
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -8.5" in="noise" result="grit" />
      <feComposite in="SourceGraphic" in2="grit" operator="in" />
    </filter>

    <!-- Arched Circular Text Paths Centered at (480, 480) R=345 -->
    <!-- Upper Arch: Clockwise sweep from 205 deg to 335 deg -->
    <path id="path-top-arch" d="M 167.3 334.2 A 345 345 0 0 1 792.7 334.2" fill="none" />
    
    <!-- Lower Arch: Counter-Clockwise sweep from 155 deg to 25 deg (reads left-to-right upright) -->
    <path id="path-bottom-arch" d="M 167.3 625.8 A 345 345 0 0 0 792.7 625.8" fill="none" />

    <!-- Center Monogram Knockout Mask (Lets mat background bleed through EDC letters) -->
    <mask id="octagon-knockout-mask">
      <!-- Base opaque white shield -->
      <rect width="100%" height="100%" fill="#FFFFFF" />
      
      <!-- Central Monogram Cutout (Negative Black Shapes) -->
      <!-- Letter E -->
      <path d="M 330 390 H 420 V 420 H 370 V 438 H 410 V 462 H 370 V 480 H 420 V 510 H 330 Z" fill="#000000" />
      
      <!-- Letter D -->
      <path d="M 440 390 H 490 C 525 390 545 410 545 450 C 545 490 525 510 490 510 H 440 Z M 472 418 V 482 H 490 C 508 482 516 472 516 450 C 516 428 508 418 490 418 Z" fill="#000000" />
      
      <!-- Letter C -->
      <path d="M 630 422 L 606 438 C 596 424 584 418 570 418 C 550 418 540 430 540 450 C 540 470 550 482 570 482 C 584 482 596 476 606 462 L 630 478 C 614 498 594 512 568 512 C 530 512 508 486 508 450 C 508 414 530 388 568 388 C 594 388 614 402 630 422 Z" fill="#000000" />

      <!-- Horizontal Speed Slashes through Center Shield -->
      <rect x="260" y="360" width="440" height="4" fill="#000000" />
      <rect x="260" y="536" width="440" height="4" fill="#000000" />

      <!-- Random Mat Scuffs -->
      <polygon points="380,310 410,310 395,335 365,335" fill="#000000" />
      <polygon points="560,560 590,560 580,585 550,585" fill="#000000" />
    </mask>

    <style>
      .seal-arch-text {
        font-family: 'Montserrat', 'Impact', sans-serif;
        font-size: 34px;
        font-weight: 900;
        letter-spacing: 0.24em;
        text-transform: uppercase;
      }
      .seal-meta {
        font-family: 'Montserrat', monospace, sans-serif;
        font-size: 14px;
        font-weight: 800;
        letter-spacing: 0.32em;
        text-anchor: middle;
      }
      .seal-star {
        fill: #C5A059;
      }
    </style>
  </defs>

  <!-- Seal Root Container -->
  <g id="option-c-tactical-seal" transform="translate(0, 0)">

    <!-- ======================================================== -->
    <!-- LAYER 1: OUTER COMBAT OCTAGON (420px Radius)             -->
    <!-- 8 Chamfered Vertices with Rivet Hardware                 -->
    <!-- ======================================================== -->
    <g id="outer-octagon-perimeter">
      <!-- Outer Heavy Crimson Stroke -->
      <polygon points="295,60 665,60 900,295 900,665 665,900 295,900 60,665 60,295"
               fill="#0E0E0E" stroke="#902524" stroke-width="8" stroke-linejoin="miter" />

      <!-- Inner Championship Gold Accent Track -->
      <polygon points="302,78 658,78 882,302 882,658 658,882 302,882 78,658 78,302"
               fill="none" stroke="#C5A059" stroke-width="2.5" opacity="0.85" />

      <!-- Mat Zone Division Tick Marks (Olympic Wrestling Zone Markings) -->
      <circle cx="295" cy="60" r="5" fill="#BA1C1C" />
      <circle cx="665" cy="60" r="5" fill="#BA1C1C" />
      <circle cx="900" cy="295" r="5" fill="#BA1C1C" />
      <circle cx="900" cy="665" r="5" fill="#BA1C1C" />
      <circle cx="665" cy="900" r="5" fill="#BA1C1C" />
      <circle cx="295" cy="900" r="5" fill="#BA1C1C" />
      <circle cx="60" cy="665" r="5" fill="#BA1C1C" />
      <circle cx="60" cy="295" r="5" fill="#BA1C1C" />
    </g>

    <!-- ======================================================== -->
    <!-- LAYER 2: ARCHED MOTTO TYPOGRAPHY ALONG CIRCULAR RING     -->
    <!-- ======================================================== -->
    <g id="arched-motto-text" filter="url(#uwc-mat-grit-c)">
      
      <!-- Upper Arch: EXCELLENCE • DISCIPLINE -->
      <text class="seal-arch-text" fill="#FFFFFF">
        <textPath href="#path-top-arch" startOffset="50%" text-anchor="middle">
          EXCELLENCE  •  DISCIPLINE
        </textPath>
      </text>

      <!-- Lower Arch: CHAMPIONS (Flanked by Olympic Stars) -->
      <text class="seal-arch-text" fill="#C5A059">
        <textPath href="#path-bottom-arch" startOffset="50%" text-anchor="middle">
          ★  CHAMPIONS  ★
        </textPath>
      </text>

    </g>

    <!-- ======================================================== -->
    <!-- LAYER 3: LATERAL CHEVRON LABELS (EST. 1980 // HAYWARD)   -->
    <!-- ======================================================== -->
    <g id="lateral-tags">
      <!-- Left Ribbon: EST. 1980 -->
      <g transform="translate(170, 480)">
        <polygon points="-50,-18 50,-18 60,0 50,18 -50,18 -40,0" fill="#181818" stroke="#BA1C1C" stroke-width="1.5" />
        <text x="5" y="5" class="seal-meta" fill="#FFFFFF" font-size="11px">EST. 1980</text>
      </g>
      
      <!-- Right Ribbon: USA RTC -->
      <g transform="translate(790, 480)">
        <polygon points="-50,-18 50,-18 60,0 50,18 -50,18 -40,0" fill="#181818" stroke="#BA1C1C" stroke-width="1.5" />
        <text x="5" y="5" class="seal-meta" fill="#FFFFFF" font-size="11px">RTC #513</text>
      </g>

      <!-- Top Center Brand Pill -->
      <g transform="translate(480, 195)">
        <rect x="-140" y="-14" width="280" height="28" fill="#141414" stroke="#262626" stroke-width="1" rx="4" />
        <text x="0" y="5" class="seal-meta" fill="#A0A0A0" font-size="10px">UNITED WRESTLING CLUB</text>
      </g>

      <!-- Bottom Center Brand Pill -->
      <g transform="translate(480, 765)">
        <rect x="-130" y="-14" width="260" height="28" fill="#141414" stroke="#262626" stroke-width="1" rx="4" />
        <text x="0" y="5" class="seal-meta" fill="#A0A0A0" font-size="10px">HAYWARD • CALIFORNIA</text>
      </g>
    </g>

    <!-- ======================================================== -->
    <!-- LAYER 4: CENTRAL COMBAT SHIELD WITH KNOCKOUT EDC MONO   -->
    <!-- Masked with negative EDC cutout allowing background mat  -->
    <!-- canvas to bleed through the letters                      -->
    <!-- ======================================================== -->
    <g id="central-shield-group" transform="translate(0, 0)">
      
      <!-- Inner Octagonal Combat Shield (Solid Crimson with Knockout Mask) -->
      <polygon points="370,270 590,270 700,380 700,580 590,690 370,690 260,580 260,380"
               fill="#902524" stroke="#BA1C1C" stroke-width="3"
               mask="url(#octagon-knockout-mask)"
               filter="url(#uwc-mat-grit-c)" />

      <!-- Outer Bevel Line for Shield -->
      <polygon points="364,262 596,262 708,374 708,586 596,698 364,698 252,586 252,374"
               fill="none" stroke="#C5A059" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.6" />

      <!-- Center Motto Pillar Micro-Stamps (Above & Below Knockout Monogram) -->
      <text x="480" y="340" class="seal-meta" fill="#FFFFFF" font-size="10px" opacity="0.9">MOSCOW 1980 OLYMPIC LINEAGE</text>
      <text x="480" y="565" class="seal-meta" fill="#C5A059" font-size="10px">FOLKSTYLE • FREESTYLE • GRECO</text>

      <!-- Central Wrestlers Silhouette Ghost (Behind Knockout Monogram) -->
      <g id="center-wrestlers-ghost" transform="translate(480, 450) scale(0.045, -0.045) translate(-7500, -3200)" opacity="0.22" fill="#FFFFFF">
        <path d="M7763 5200 c-120 -18 -210 -44 -287 -85 -45 -24 -118 -53 -163 -65 -44 -12 -137 -49 -204 -82 -140 -67 -213 -87 -280 -77 -59 9 -195 78 -253 129 -56 48 -80 50 -121 11 -16 -16 -75 -48 -129 -71 -188 -79 -300 -171 -356 -292 -32 -69 -100 -296 -100 -334 0 -13 11 -34 25 -46 13 -11 34 -49 45 -83 57 -170 185 -288 390 -360 82 -28 117 -36 159 -33 42 2 56 -1 65 -14 8 -14 7 -21 -5 -33 -14 -14 -25 -13 -115 11 -76 21 -123 27 -204 28 -93 0 -136 -6 -385 -62 -394 -87 -445 -104 -580 -195 -131 -88 -198 -158 -400 -422 -105 -137 -348 -375 -415 -407 -311 -148 -347 -168 -407 -222 -74 -68 -112 -139 -119 -222 -8 -96 -10 -99 -86 -155 -75 -55 -180 -146 -382 -331 -64 -59 -147 -128 -184 -154 -97 -68 -115 -87 -208 -211 -110 -146 -158 -178 -259 -176 -65 1 -126 26 -307 125 -171 93 -269 133 -365 149 -107 19 -167 6 -297 -61 -127 -65 -182 -77 -271 -61 -47 9 -65 18 -92 47 Z" />
      </g>

      <!-- Sharp Outline Framing the EDC Cutout for High Definition -->
      <g id="edc-letter-outlines" fill="none" stroke="#FFFFFF" stroke-width="1.5" opacity="0.75">
        <!-- E outline -->
        <path d="M 330 390 H 420 V 420 H 370 V 438 H 410 V 462 H 370 V 480 H 420 V 510 H 330 Z" />
        <!-- D outline -->
        <path d="M 440 390 H 490 C 525 390 545 410 545 450 C 545 490 525 510 490 510 H 440 Z M 472 418 V 482 H 490 C 508 482 516 472 516 450 C 516 428 508 418 490 418 Z" />
        <!-- C outline -->
        <path d="M 630 422 L 606 438 C 596 424 584 418 570 418 C 550 418 540 430 540 450 C 540 470 550 482 570 482 C 584 482 596 476 606 462 L 630 478 C 614 498 594 512 568 512 C 530 512 508 486 508 450 C 508 414 530 388 568 388 C 594 388 614 402 630 422 Z" />
      </g>

    </g>

  </g>
</svg>
"""
    with open(os.path.join(OUTPUT_DIR, "edc_motto_option_c_tactical_octagon.svg"), "w") as f:
        f.write(svg)
    print("Option C (Enhanced) written.")

if __name__ == "__main__":
    generate_option_a()
    generate_option_b()
    generate_option_c()
