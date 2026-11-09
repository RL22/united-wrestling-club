---
type: dossier
status: current
group: brand
owner: "Rodney Lewis (Sprintz)"
date: 2026-10-31
last_reviewed: 2026-10-31
sources: ["https://unitedwrestlingclub.com/classes/adult-wrestling", "https://schema.org", "https://unitedwrestlingclub.com/#organization", "https://unitedwrestlingclub.com", "https://unitedwrestlingclub.com/images/uwc-crest.svg", "https://unitedwrestlingclub.com/stills/still_16_naweed_adult_collar_tie.jpg", "https://unitedwrestlingclub.com/classes/adult-wrestling#course", "https://schema.org/InStock", "https://schema.org/Tuesday", "https://schema.org/Thursday", "https://schema.org/Saturday", "https://unitedwrestlingclub.com/classes/adult-wrestling#breadcrumbs", "https://unitedwrestlingclub.com/classes", "https://unitedwrestlingclub.com/classes/adult-wrestling#faq"]
shard_of: "discovery/brand/moodboards/iteration_AC_2_bedrock_standard.md"
part: "2 of 4"
---

> Part 2 of 4 of [iteration_AC_2_bedrock_standard](../iteration_AC_2_bedrock_standard.md). Text is verbatim from the original; only links were rewritten.

## 2. Visual & Token Architecture

Iteration AC-2 preserves the high-contrast aesthetic of Direction AC (pitch void, acid slate, bloodline red, Olympic royal blue, and vintage bone) while introducing monolithic structural discipline.

### 2.1 Color Palette & Material Hierarchy

```
[ PITCH VOID: #090A0D ]        [ ACID SLATE: #14161B ]       [ BASALT BORDER: #2A2F3A ]
Absorbing Matte Void          450 GSM Heavyweight Slab       1px Monolithic Boundary

[ BLOODLINE RED: #BA1C1C ]     [ OLYMPIC BLUE: #1D4ED8 ]     [ VINTAGE BONE: #F4F1EA ]
Arterial Primary Action        USA Wrestling Sanction        Archival Unbleached Text
```

| Swatch Token | CSS Variable | Hex Code | Role in UI Hierarchy | Emotional / Physical Anchor |
| :--- | :--- | :--- | :--- | :--- |
| **Pitch Void** | `--uwc-pitch-void` | `#090A0D` | Canvas & Root Page Background | The dark warehouse void; eliminates eye strain, focuses 100% of visual weight on mat action. |
| **Acid Slate** | `--uwc-acid-slate` | `#14161B` | Card Surfaces & Monolithic Modules | Distressed 450 GSM heavyweight cotton slab; industrial cast-basalt surface. |
| **Basalt Border** | `--uwc-basalt-border` | `#2A2F3A` | Structural Card Boundaries & Grid Dividers | 1px razor-sharp geological boundary; separates training modules without soft dropshadows. |
| **Bloodline Red** | `--uwc-bloodline-red` | `#BA1C1C` | Primary Action, Active States & Live Indicators | Arterial blood, singlet accent, sweat-earned sacrifice; calls the eye to primary CTAs. |
| **Olympic Royal Blue** | `--uwc-olympic-blue` | `#1D4ED8` | RTC Sanction Badges & Collegiate Lineage | The authentic mat perimeter blue of USA Wrestling and the Olympic Games. |
| **Vintage Bone** | `--uwc-vintage-bone` | `#F4F1EA` | Primary Display & Body Typography | Unbleached canvas and 1980 archival print stock; provides high contrast without modern LED glare. |
| **Monolith Grey** | `--uwc-monolith-grey` | `#8E95A5` | Secondary Telemetry, Labels & Specs | Weathered steel; conveys dimensional precision, class duration, and scheduling metadata. |
| **Medal Brass** | `--uwc-medal-brass` | `#C5A059` | Lineage Seals, Olympic Qualification Emblems | 1980 Moscow qualification foil and Ali Aliyev Dagestan medalist archival crest. |

---

### 2.2 Typography Stack & Hierarchical Pairing
The typography combines visceral condensed display with classical Olympic heritage serif and industrial monospaced telemetry:

1. **Display & Primary Headers (H1, H2, Key Metrics):**  
   * **Font:** `Barlow Condensed` (Black 900)  
   * **Attributes:** Uppercase, tracking `-0.02em`, leading `0.92–0.98`.  
   * **Visual Effect:** Immovable, dense, architectural. Emulates vintage Soviet sports posters and heavyweight industrial signage.
2. **Heritage & Lineage Subheads (Olympic Pedigree & Quotes):**  
   * **Font:** `Newsreader` (600 SemiBold Italic)  
   * **Attributes:** Proportional lining, tracking `+0.01em`, leading `1.3`.  
   * **Visual Effect:** Lends classical historical gravitas and international prestige, counteracting raw combat grit with intellectual pedigree.
3. **Telemetry, Timestamps, Class Metadata & Badges:**  
   * **Font:** `Space Mono` (700 Bold & 400 Regular)  
   * **Attributes:** Uppercase, tracking `+0.08em`, leading `1.1`.  
   * **Visual Effect:** Exact technical readouts, facility coordinates, session runtimes, and sanction codes.
4. **Body & Educational Copy:**  
   * **Font:** `Public Sans` (400 Regular & 500 Medium)  
   * **Attributes:** Neutral geometric clarity, line-height `1.6`, color `--uwc-vintage-bone` (90% opacity).  
   * **Visual Effect:** Highly legible across desktop and mobile; reassuring and transparent for adults and parents.

---

### 2.3 Layout Geometry & Badge Systems
- **The Monolithic Slab System:** All content containers are rendered as sharp-cornered slabs (border-radius: `0px` or `2px`). Cards do not use floaty blurred dropshadows; they use solid 1px borders (`#2A2F3A`) with optional deep hard offset shadows (`box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.8)`).
- **Archival Credential Badges:** Every section incorporates technical telemetry stamps:
  - `[ USAW RTC SANCTION #100234 // REGION 8 ]`
  - `[ MOSCOW 1980 OLYMPIC LINEAGE // KARIM ZEMARYALAI ]`
  - `[ SFSU KINESIOLOGY DIRECTED // INJURY MITIGATION PROTOCOL ]`
  - `[ EAST BAY ADULT MAT CADRE // 20990 CABOT BLVD, HAYWARD CA ]`

---

## 3. Page Wireframe & Copy Specification: `/classes/adult-wrestling`

*URL Silo Target:* `https://unitedwrestlingclub.com/classes/adult-wrestling`  
*Meta Title:* Adult Wrestling Classes & BJJ Takedown Academy | United Wrestling Club Hayward  
*Meta Description:* Master collegiate wrestling, takedown defense, and wrestle-jitsu in the East Bay. Direct 1980 Olympic lineage, SFSU kinesiology coaching, transparent $139.99/mo tuition. Claim your 2-class assessment.  

```
========================================================================================
                                WIREFRAME OVERVIEW: /classes/adult-wrestling
========================================================================================
[ GLOBAL NAV: LOGO | CLASSES | SCHEDULE | LINEAGE | PRICING | CTA: CLAIM 2-CLASS PASS ]
----------------------------------------------------------------------------------------
1. HERO SECTION:
   - Telemetry Badge: [ USA WRESTLING SANCTIONED RTC ] [ HAYWARD, CA ]
   - H1: THE BEDROCK STANDARD: COLLEGIATE WRESTLING & WRESTLE-JITSU FOR ADULTS
   - Subhead (Newsreader Italic): "Where Olympic lineage meets modern grappling craft."
   - Value Matrix: Zero guard-pulling · Kinesiology-backed safety · Live adult cohort
   - Dual CTAs: [ CLAIM 2-CLASS ASSESSMENT PASS ($0 DUE TODAY) ] [ VIEW CLASS RUNTIME ]
   - Visual: still_16_naweed_adult_collar_tie.jpg (Coach Naweed collar-tie combat profile)
----------------------------------------------------------------------------------------
2. THE ADULT GRAPPLER'S DILEMMA: "WHY TOPSOIL GRAPPLING FAILS"
   - 3-Column Diagnostic:
     * Card 1: The BJJ Takedown Deficit (Giving up 2 points and bottom position)
     * Card 2: The Injury Fear Myth (Wild scramble risks vs. collegiate posture control)
     * Card 3: The Adult Mat Void (Where do grapplers over 21 train real wrestling?)
----------------------------------------------------------------------------------------
3. THE BEDROCK CURRICULUM (3 PHASES OF MAT DOMINANCE):
   - Visual Banner: still_10_stance_mural_lines.jpg (Squad charging in stance lines)
   - Phase 1: Neutral Dominance (Collegiate collar ties, 2-on-1 Russian ties, underhooks)
   - Phase 2: High-Percentage Penetration (Single legs, doubles, ankle picks for BJJ)
   - Phase 3: Mat Authority & Short Offense (Sprawl-and-crossface, front headlock, ride time)
----------------------------------------------------------------------------------------
4. THE 75-MINUTE SESSION ARCHITECTURE (SFSU KINESIOLOGY CALIBRATED):
   - 10 Min: Joint Preparation & Neck/Spine Mechanics (Zero cold snapping)
   - 25 Min: Micro-Technical Drilling & Biomechanical Leverage
   - 20 Min: Situational Live Wrestling (Positional starts from ties and front headlocks)
   - 20 Min: Controlled Live Rounds or Positional Grappling (Grouped by weight & rank)
----------------------------------------------------------------------------------------
5. THE UNBROKEN LINE: OLYMPIC PEDIGREE MEETS EAST BAY WAREHOUSE
   - Visual: still_01_olympic_flag.jpg (USAW banner & match clock) + Karim 1980 archival stamp
   - Narrative: Karim Zemaryalai (1980 Moscow) & Coach Naweed (SFSU Kinesiology)
----------------------------------------------------------------------------------------
6. THE MAT CADRE: EARNED BROTHERHOOD (COMMUNITY PROOF):
   - Visual: still_18_full_team_45plus_portrait.jpg (45+ Roster portrait)
   - Member Profiles: Tradesmen, software engineers, active MMA fighters, BJJ black belts
----------------------------------------------------------------------------------------
7. TRANSPARENT BEDROCK TUITION & THE FIRST-CLASS CHARTER:
   - Pricing Card: $139.99/mo Unlimited (No contracts, no belt fees, no cancellation penalties)
   - Drop-In Card: $15 Saturday Open Mat
   - The "First-Class Onboarding" Guarantee: How we welcome beginners without injury
----------------------------------------------------------------------------------------
8. CLOSING PRE-FOOTER:
   - Visual Backdrop: still_20_champions_family_outro.jpg (Team flex under gym mural)
   - H2: STEP ONTO THE BEDROCK.
   - Final CTA: [ CLAIM YOUR 2-CLASS ASSESSMENT PASS ] (No Credit Card Required)
========================================================================================
```

---

### 3.1 Complete Copywriting & Micro-Copy Specification

#### [HERO SECTION]
- **Telemetry Bar:**  
  `[ USA WRESTLING SANCTIONED RTC #100234 ] // [ SFSU KINESIOLOGY COACHING ] // [ HAYWARD, CA ]`
- **H1 Header (Barlow Condensed Black 900):**  
  `THE BEDROCK STANDARD: COLLEGIATE WRESTLING & WRESTLE-JITSU FOR ADULTS`
- **Subhead (Newsreader 600 SemiBold Italic):**  
  *“Stop conceding top position. Built for Brazilian Jiu-Jitsu practitioners, MMA fighters, and adult grapplers who demand real collegiate takedowns without the collegiate meathead culture.”*
- **Bullet Proofpoints (Public Sans 500 Medium):**  
  - **No Guard-Pulling:** Master collegiate collar ties, underhooks, and explosive level changes.
  - **Kinesiology-Calibrated:** Run by Coach Naweed Zemaryalai (SFSU Kinesiology). High intensity, zero reckless slams.
  - **Direct Olympic Lineage:** Founded by 1980 Moscow Olympic qualifier Karim Zemaryalai.
- **Primary Call to Action:**  
  `[ CLAIM 2-CLASS ASSESSMENT PASS — $0 DUE TODAY ]`  
  *(Subtext under button: Instant digital pass. No credit card required. Clean mat shoes or bare feet on regulation Dollamur mats.)*
- **Secondary Action:**  
  `[ VIEW TUESDAY / THURSDAY CLASS SCHEDULE ↓ ]`

---

#### [SECTION 2: THE ADULT GRAPPLER'S DILEMMA — "WHY TOPSOIL GRAPPLING FAILS"]
- **Section Kicker (Space Mono 700):** `// DIAGNOSTIC AUDIT`
- **H2 Header (Barlow Condensed Black 900):**  
  `THE BJJ TAKEDOWN PARADOX: WHY MOST ADULTS NEVER LEARN TO WRESTLE`
- **Editorial Lead (Newsreader 600 SemiBold Italic):**  
  *“Most commercial martial arts gyms treat takedowns as a 5-minute afterthought before sitting on the floor. At United Wrestling Club, we build the foundation from the feet up.”*
- **The Three Structural Realities (Card Grid):**
  1. **The Guard-Pulling Epidemic:**  
     *The Reality:* Jiu-Jitsu tournaments are frequently lost before the athlete ever touches the mat. Conceding the takedown costs two points, surrenders momentum, and places you underneath an aggressive passer.  
     *The Bedrock Fix:* We drill low-risk, high-percentage takedowns engineered specifically for submission grappling: sweep singles, knee taps, duck-unders, and body locks that keep your neck protected from the guillotine.
  2. **The High-School Room Trauma:**  
     *The Reality:* Many adults who wrestled as teenagers stopped because traditional rooms operate with reckless disregard for adult bodies: 18-year-old state finalists throwing reckless headlocks onto concrete-like surfaces.  
     *The Bedrock Fix:* SFSU Kinesiology programming. Every practice begins with spine mobilization, active neck bridging, and partner-drilling protocols that allow 35-year-old engineers and tradesmen to show up to work uninjured the next morning.
  3. **The Strip-Mall Belt Factory:**  
     *The Reality:* Commercial gyms sell belts, stripes, and false confidence. You pay $220/month plus testing fees, yet cannot take down an untrained athlete of equal weight.  
     *The Bedrock Fix:* Wrestling has no belts, no robes, and no politics. Either your hips are lower than your opponent’s or they aren’t. Our adult room is pure truth.

---

#### [SECTION 3: THE BEDROCK CURRICULUM — 3 PHASES OF MAT DOMINANCE]
- **Section Kicker (Space Mono 700):** `// 16-WEEK SYSTEMIC PROGRESSION`
- **H2 Header (Barlow Condensed Black 900):**  
  `COLLEGIATE TECHNIQUE ADAPTED FOR NO-GI, MMA & SUBMISSION GRAPPLING`
- **Phase Breakdown (Monolithic Slabs):**
  - **Phase 01: Neutral Hand-Fighting & Posture Breaking (Weeks 1–5)**  
    *Core Techniques:* Heavy collegiate collar ties, inside bicep control, the Russian 2-on-1, underhook shucks, and snap-down-to-front-headlock transitions.  
    *Grappler Application:* Neutralize aggressive scramblers and dictate the pace without wasting aerobic energy.
  - **Phase 02: High-Percentage Penetration & Finishes (Weeks 6–10)**  
    *Core Techniques:* Low-risk sweep singles, head-inside single legs, sweep doubles, ankle picks, and misdirection blast doubles.  
    *Grappler Application:* Learn how to shoot without driving your neck straight into front chokes, guillotines, or kimura traps.
  - **Phase 03: Short Offense, Mat Returns & Top Control (Weeks 11–16)**  
    *Core Techniques:* Sprawl-and-spin, go-behinds, cradle locks, spiral rides, claw rides, and Olympic mat return mechanics.  
    *Grappler Application:* Keep opponents pinned to the mat, flatten out their base, and eliminate turtle escapes.

---

#### [SECTION 4: THE 75-MINUTE SESSION ARCHITECTURE]
- **Section Kicker (Space Mono 700):** `// CALIBRATED RUNTIME PROTOCOL`
- **H2 Header (Barlow Condensed Black 900):**  
  `HOW WE TRAIN: 75 MINUTES OF ZERO-WASTE ATHLETIC RIGOR`
- **Timeline Grid (Space Mono Telemetry + Public Sans Body):**
  - `00:00 — 00:12 // PHASE 1: KINESIOLOGY JOINT ACTIVATION`  
    Controlled cervical spine prep, hip capsule mobility, dynamic sprawl sequences, and stance-in-motion footwork drills under Coach Naweed's supervision.
  - `00:12 — 00:40 // PHASE 2: PROGRESSIVE DRILLING & DETAIL ISOLATION`  
    One or two core concepts broken down to microscopic mechanics: head position, lead-leg angle, wrist torque, and follow-through. High repetition with progressive resistance.
  - `00:40 — 01:00 // PHASE 3: SITUATIONAL LIVE SCENARIOS`  
    Timed 60-second micro-rounds starting from specific positions: e.g., you have an underhook and your opponent has a collar tie; or one athlete is locked in a front headlock. Specific goals: score or escape.
  - `01:00 — 01:15 // PHASE 4: CONTROLLED MAT ROUNDS (LIVE GOES)`  
    3-minute live wrestling rounds matched by weight, skill level, and intensity goals. Respect is mandatory: no flying scissors, no reckless slamming, no uncontrolled twisting.

---

#### [SECTION 5: THE UNBROKEN LINE — MOSCOW 1980 TO HAYWARD 2027]
- **Section Kicker (Space Mono 700):** `// PEDIGREE & SANCTION`
- **H2 Header (Barlow Condensed Black 900):**  
  `NOT AN INFLUENCER GYM. AN OLYMPIC LINEAGE.`
- **Body Copy:**  
  *“You cannot fake 40 years of international mat experience. United Wrestling Club was forged by Coach Karim Zemaryalai, who represented his nation at the 1980 Moscow Olympic Games and claimed bronze at the prestigious Ali Aliyev International Tournament in Dagestan—the most unforgiving wrestling proving ground on earth.*  
  *Today, his son Coach Naweed Zemaryalai bridges that international combat heritage with modern sports science from SFSU Kinesiology. When you drill here, you are not learning untested YouTube techniques. You are absorbing an unbroken line of Olympic technical mastery.”*

---

#### [SECTION 6: TRANSPARENT BEDROCK TUITION]
- **Section Kicker (Space Mono 700):** `// ZERO CONTRACTS. ZERO HIDDEN EXPENSES.`
- **H2 Header (Barlow Condensed Black 900):**  
  `HONEST TUITION FOR SERIOUS GRAPPLERS`
- **Tuition Cards:**
  - **Adult Unlimited Wrestling & Grappling:**  
    `$139.99 / Month`  
    - Full access to all Adult Wrestling classes (Tues/Thurs evenings)  
    - Full access to Saturday Open Mat Grappling sessions  
    - USA Wrestling certified coaching and video analysis access  
    - No registration fees · No cancellation fees · Cancel anytime with 7 days' notice  
    - `[ START WITH 2-CLASS ASSESSMENT PASS ]`
  - **Saturday Open Mat Drop-In:**  
    `$15 / Single Mat Pass`  
    - 2 hours of open live wrestling, situational rounds, and drill time  
    - Open to all affiliations, BJJ gyms, and independent competitors  
    - `[ RESERVE OPEN MAT DROP-IN ]`

---

#### [SECTION 7: THE 2-CLASS MAT ASSESSMENT ONBOARDING FLOW]
- **Why It Converts Adult Skeptics:**  
  Adults fear showing up to a combat gym and being fed to aggressive twenty-year-olds. UWC removes this friction with an explicit onboarding contract:
  1. **Claim the Pass Online:** Pick your date (Tuesday or Thursday at 7:00 PM).
  2. **The 10-Minute Pre-Mat Briefing:** Coach Naweed greets you at the door, reviews any past injuries (shoulders, knees, lower back), and pairs you with a designated senior partner.
  3. **First-Day Low-Impact Integration:** You drill movement, stance, and basic hand control. Live sparring is completely optional for your first two classes.
  4. **The Post-Mat Decision:** If UWC is the right fit, activate your membership online. If not, you walk away with real collegiate takedown knowledge and zero sales pressure.

---
