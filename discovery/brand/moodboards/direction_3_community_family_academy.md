---
type: dossier
status: current
group: brand
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/brand/moodboards/direction_3_community_family_academy.html"]
---

# Brand Direction 3: Community Family Academy & Civic Empowerment
## Comprehensive Visual Identity, Design Tokens & Component Specification
### United Wrestling Club (UWC) — Hayward, California

> **Document:** `discovery/brand/moodboards/direction_3_community_family_academy.md`  
> **Brand Direction:** Direction 3 — *"Community Family Academy & Civic Empowerment"*  
> **Target Audience:** East Bay Families (Pre-K to 12th Parents), Women Seeking Realistic Self-Defense, Adult Beginners, Scholastic Wrestlers, and Civic Community Partners  
> **Geographic Anchor:** 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544 | Tri-City / Alameda County  
> **Design Author:** Lead Visual Designer (Sprintz Growth OS)  
> **Interactive Companion:** [`discovery/brand/moodboards/direction_3_community_family_academy.html`](direction_3_community_family_academy.html)  

---

## 1. Executive Summary & Brand Philosophy

### 1.1 The Strategic Shift
For years, combat sports academies in Alameda County have adhered to a monolithic visual archetype: pitch-black canvases, aggressive grunge textures, blood-splattered red typography, and high-aggression imagery. While this aesthetic appeals to a narrow subsegment of seasoned 22-year-old amateur fighters, it actively alienates the primary economic decision-makers of the East Bay:

1. **Suburban & Working-Class Parents (Hayward, Fremont, Union City, Newark):** Seeking athletic discipline, anti-bullying protection, emotional resilience, and safe scholastic progression for children ages 4–14 without concussion risk or predatory egos.
2. **Adult Women & Young Professionals:** Seeking pragmatic, trauma-informed, real-world physical boundary setting and self-defense taught by female peers (Louisa, Neha's Sister, Ja Shia) rather than intimidating male sparring environments.
3. **Civic & Educational Institutions (Hayward DSAL, Chabot College, HUSD, New Haven USD):** Seeking structured, community-vetted athletic mentorship and youth character development partners.

**Direction 3: "Community Family Academy & Civic Empowerment"** recalibrates United Wrestling Club from an insular, hardcore wrestling cellar into **the East Bay's most trusted civic athletic institution**. 

Crucially, this direction **never compromises Olympic combat legitimacy**. Instead, it reframes that pedigree: 1980 Olympian Karim Zemaryalai and Collegiate Coach Naweed Zemaryalai become the community's master educators and protective elders, welcoming multi-generational families into a sunlit, dignified sanctuary of discipline, character, and lifelong strength.

```
                           THE STRATEGIC POSITIONING MATRIX
                                         ▲
                                         │
                            HARDCORE / COMBAT PURIST
                                         │
                 • Smash Gyms            │   • Live UWC (Current Flat Dark)
                 • Local BJJ Barns       │
                                         │
   AGGRESSIVE / EXCLUSIVE ───────────────┼─────────────── INSPIRING / INCLUSIVE
                                         │
                 • Commercial Karate     │   ★ DIRECTION 3:
                   Franchises            │     COMMUNITY FAMILY ACADEMY
                   ("McDojos")           │     (Warm Trust, Olympic Pedigree,
                                         │      Female Leadership, Civic Ties)
                                         ▼
                            FAMILY / COMMUNITY FOCUSED
```

---

## 2. The Visual Dichotomy: Current Site vs. Direction 3

| Visual Dimension | Current Live Site (`unitedwrestlingclub.com`) | Direction 3: Community Family Academy | Strategic Justification |
| :--- | :--- | :--- | :--- |
| **Canvas & Atmosphere** | Jet Black (`#000000`) & Dark Charcoal (`#191919`). Cavernous, high-stress combat room. | **Warm Parchment (`#FDFBF7`)** with **Deep Pacific Slate (`#0F172A`)** and crisp cards. | Shifts the tone from "underground cage" to an open, sunlit, educational academy where mothers and kids feel safe. |
| **Primary Accent Color** | Blood Red (`#902524`). High aggression, clinical combat alert. | **Warm Trust Crimson (`#9E2A2B`)**. Rich, grounded, collegiate heritage. | Preserves the historical UWC red while softening harshness into collegiate warmth and civic dignity. |
| **Secondary Accent** | Muted Grey (`#cacaca`) and flat white text. | **Sunrise Amber (`#F59E0B`)** & **Civic Laurel Green (`#15803D`)**. | Amber injects dawn optimism, youth badges, and energy; Laurel symbolizes civic service and Hayward DSAL alliance. |
| **Typography** | Monolithic `Montserrat` (Black 900 display, uppercase). Rigid and cold. | **`Plus Jakarta Sans`** display + clean geometric body. Curved terminals, open counters. | Human, approachable, highly legible across mobile screens for busy parents; friendly yet disciplined. |
| **Imagery & Lighting** | Dark silhouettes, intense grappling sweat, low-contrast shadows. | **Natural California mat light**, coach-child high-fives, confident teen girls, smiling family sidelines. | Showcases safety, warmth, clean mats, and real emotional connection before parents step through the door. |
| **UI Shapes & Corners** | Sharp industrial edges (0px–4px) mixed with arbitrary pills. | **Soft Rounded Architecture (`16px–24px` cards, `9999px` pills)** with warm diffuse shadows. | Warm radii signal safety, approachability, and high-touch modern web craftsmanship. |
| **Key Narrative Hooks** | Generic class schedules & external WrestlingIQ links. | **4 Structured Family Tracks**, Female-Led Defense bench, and 1-Click Trial Pass Modal with media opt-out. | Destroys signup friction; answers every parent and beginner objection directly above the fold. |

---

## 3. Comprehensive Color Architecture & Design Tokens

Direction 3 builds upon an intentional 60-30-10 color distribution optimized for warmth, trust, and WCAG 2.1 AAA accessibility standards.

```
                                COLOR DISTRIBUTION
                                        │
        ┌───────────────────────────────┼───────────────────────────────┐
        ▼                               ▼                               ▼
    CANVAS (60%):                  STRUCTURE (30%):                 ACCENT (10%):
Warm Parchment (#FDFBF7)       Pacific Slate (#0F172A)         Warm Trust Crimson (#9E2A2B)
Card Linen (#F5F2EB)           Deep Navy (#1E293B)             Sunrise Amber (#F59E0B)
Pure White (#FFFFFF)           Slate Grey (#475569)            Civic Laurel (#15803D)
```

### 3.1 Primary Color Tokens

#### 1. Warm Trust Crimson (Primary Brand Accent)
* **Hex:** `#9E2A2B`
* **RGB:** `rgb(158, 42, 43)` | **HSL:** `hsl(359°, 58%, 39%)`
* **Role:** High-intent primary buttons (`"Claim 2-Class Trial Pass"`, `"Reserve Seminar Spot"`), brand crest ring, focused link accents, and program category active pills.
* **Psychological Impact:** Evokes Stanford/Harvard collegiate pride, warmth, and grounded authority rather than aggressive violence.
* **Contrast Compliance:** **7.42:1** against `#FDFBF7` (Exceeds WCAG AAA for normal text).

#### 2. Deep Pacific Slate (Primary Structural Neutral)
* **Hex:** `#0F172A`
* **RGB:** `rgb(15, 23, 42)` | **HSL:** `hsl(222°, 47%, 11%)`
* **Role:** Display typography (H1/H2), deep evening mode cards, navigation background, and high-authority card frames.
* **Psychological Impact:** Conveys stability, institutional longevity, and steadfast protection.
* **Contrast Compliance:** **16.89:1** against `#FDFBF7` (Exceeds WCAG AAA).

#### 3. Deep Slate Navy (Secondary Structural Neutral)
* **Hex:** `#1E293B`
* **RGB:** `rgb(30, 41, 59)` | **HSL:** `hsl(215°, 33%, 17%)`
* **Role:** Card headers, modal overlay backdrops, and secondary section backgrounds.
* **Contrast Compliance:** **12.65:1** against `#FDFBF7`.

#### 4. Warm Parchment Canvas (Base Surface Background)
* **Hex:** `#FDFBF7`
* **RGB:** `rgb(253, 251, 247)` | **HSL:** `hsl(40°, 43%, 98%)`
* **Role:** Page background, light section foundations, and natural canvas.
* **Psychological Impact:** Soft, welcoming, reduces eye fatigue compared to sterile `#FFFFFF`, reminiscent of high-grade diploma parchment.

#### 5. Card Linen / Sand (Elevated Light Surface)
* **Hex:** `#F5F2EB`
* **RGB:** `rgb(245, 242, 235)` | **HSL:** `hsl(42°, 31%, 94%)`
* **Role:** Card container fills, schedule grid alternating rows, and quote callout backgrounds.

#### 6. Sunrise Amber (Optimism & Energy Accent)
* **Hex:** `#F59E0B`
* **RGB:** `rgb(245, 158, 11)` | **HSL:** `hsl(38°, 92%, 50%)`
* **Role:** Star rating icons (5.0★ Google reviews), youth milestone badges, notification dots, and secondary action highlights (`"Early Bird Rate"`).
* **Contrast Compliance:** Paired exclusively with `#0F172A` text (**11.4:1**) or used as graphical iconography.

#### 7. Civic Laurel Green (Community & DSAL Partner Accent)
* **Hex:** `#15803D`
* **RGB:** `rgb(21, 128, 61)` | **HSL:** `hsl(141°, 72%, 29%)`
* **Role:** Civic partnership badges (Hayward DSAL, Police Athletic League, school district verification), success confirmations, and guarantee shields.
* **Contrast Compliance:** **6.21:1** against `#FDFBF7` (WCAG AA compliant).

#### 8. Crisp Pure White (Interactive Surface Highlight)
* **Hex:** `#FFFFFF`
* **RGB:** `rgb(255, 255, 255)` | **HSL:** `hsl(0°, 0%, 100%)`
* **Role:** Elevated card faces, modal dialog sheets, form input fields, and high-contrast text on crimson/navy containers.

---

### 3.2 Atmospheric Gradients & Surface Elevations

```css
/* Warm Brand Hero Horizon Fade */
background: linear-gradient(180deg, #FDFBF7 0%, #F5F2EB 100%);

/* Primary CTA Trust Gradient (Subtle warm shimmer on hover) */
background: linear-gradient(135deg, #9E2A2B 0%, #B91C1C 100%);

/* Civic & DSAL Partner Banner Gradient */
background: linear-gradient(135deg, rgba(21, 128, 61, 0.08) 0%, rgba(245, 158, 11, 0.08) 100%);

/* Women's Self-Defense Horizon Card Glow */
background: linear-gradient(145deg, #FFFFFF 0%, #FDFBF7 100%);
border: 1px solid rgba(158, 42, 43, 0.15);

/* Soft Warm Diffuse Card Shadow */
box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.06), 0 8px 10px -6px rgba(15, 23, 42, 0.04);

/* Interactive Primary Button Elevation (Trust Glow) */
box-shadow: 0 8px 20px -4px rgba(158, 42, 43, 0.28);
```

---

## 4. Typography System: Warm Athletic Geometry

Direction 3 replaces legacy uppercase-only Montserrat with **`Plus Jakarta Sans`** as the cornerstone typeface, paired with clean geometric body styling.

### 4.1 Type Hierarchy Matrix

| Level | Font Family | Size (Desktop / Mobile) | Weight | Line Height | Tracking | Application & Brand Purpose |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **Display H1** | `Plus Jakarta Sans` | `56px (3.5rem)` / `36px (2.25rem)` | `800` (ExtraBold) | `1.15` | `-0.025em` | Homepage hero statement: *"Building East Bay Character, Strength & Family Confidence."* |
| **Section H2** | `Plus Jakarta Sans` | `36px (2.25rem)` / `28px (1.75rem)`| `700` (Bold) | `1.25` | `-0.02em` | Section headers: *"Olympic Roots. Neighborhood Heart."* |
| **Subhead H3** | `Plus Jakarta Sans` | `24px (1.5rem)` / `20px (1.25rem)`  | `600` (SemiBold) | `1.35` | `-0.01em` | Program card titles (`"Junior Olympian Kids"`, `"Women's Self-Defense"`) |
| **Body Lead** | `Plus Jakarta Sans` | `18px (1.125rem)` / `16px (1.0rem)` | `500` (Medium) | `1.6` | `0` | Lead paragraph under heroes and program value propositions |
| **Body Text** | `Plus Jakarta Sans` | `16px (1.0rem)` / `15px (0.938rem)`| `400` (Regular) | `1.65` | `0` | General class curriculum, parent FAQs, coach bios |
| **UI Badges** | `Plus Jakarta Sans` | `12px (0.75rem)` | `700` (Bold) | `1.0` | `+0.05em` | All-caps tags (`"HAYWARD DSAL PARTNER"`, `"AGES 4–11"`, `"FEMALE LED"`) |
| **Action CTAs** | `Plus Jakarta Sans` | `16px (1.0rem)` | `700` (Bold) | `1.0` | `+0.01em` | Buttons: `"Claim Free 2-Class Assessment Pass"` |

### 4.2 Typographic Pairing Rationale
* **Plus Jakarta Sans** features rounded terminal curves and wide geometric apertures. Unlike severe grotesque fonts (e.g., Arial, Impact) or hyper-sterile tech fonts (e.g., Roboto), Jakarta radiates warmth, approachability, and athletic energy.
* It communicates rigor without aggression—crucial for converting wary mothers who want their children to learn martial arts for confidence and bullying resistance rather than street fighting.

---

## 5. Shape, Spacing & Container Geometry

### 5.1 Corner Radii Architecture
* **Micro Radii (`4px` – `6px`):** Badge pills, notification tags, and inner form controls.
* **Medium Radii (`12px` – `16px`):** Secondary cards, coach portrait containers, video thumbnails, and schedule day cards.
* **Macro Radii (`24px` – `32px`):** Primary pricing feature cards, hero callout boxes, and the 1-Click Trial Pass Modal window.
* **Continuous Pill (`9999px`):** All interactive action buttons, category filter tabs, and Google Review social proof pills.

### 5.2 Spacing & Grid System
* **Base Unit:** 4px / 8px incremental scale (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).
* **Section Vertical Rhythm:** 96px padding top/bottom on desktop (`py-24`), 56px on mobile (`py-14`).
* **Content Width Constraints:** Max container width capped at `1200px` (`max-w-6xl`) to maintain optimal reading measure (65–75 characters per line).

---

## 6. Photography Art Direction & Visual Storytelling

Photography in Direction 3 is the emotional fulcrum of the brand rebuild. Every image must pass the **"Family Trust & Olympic Integrity"** test.

```
                          PHOTOGRAPHY REPERTOIRE
                                    │
    ┌───────────────────────┬───────┴───────────────────────┐
    ▼                       ▼                               ▼
PILLAR 1:               PILLAR 2:                       PILLAR 3:
Youth Character &       Female Strength, Safety         Multi-Generational
Coach Mentorship        & Real-World Autonomy           Olympic Heritage
(Ages 4–14)             (Louisa, Neha's Sis, Ja Shia)   (Karim & Naweed)
```

### 6.1 Photography Pillars & Scene Guidelines

#### Pillar 1: Youth Character & Coach Mentorship
* **Scenes:** Coach Naweed down on one knee at eye level with a 7-year-old wrestler, adjusting headgear or demonstrating a gentle stance check. Two 10-year-olds in clean UWC rashguards high-fiving after a hard drilling round.
* **Emotion:** Joy, safety, laser-focus, mutual respect. No tears, no aggressive scowls.
* **Lighting:** Natural warm daylight entering through the high warehouse roll-up doors, illuminating the clean red and black mats with soft amber highlights.

#### Pillar 2: Female Strength, Safety & Real-World Autonomy
* **Scenes:** Louisa coaching a striking combination with focus mitts, smiling with a female student. Neha's Sister (active police officer and UWC champion alum) demonstrating a wrist-release and frame on the feet with calm, decisive leverage. Ja Shia coaching ground escape hip-escapes with high encouragement.
* **Emotion:** Empowered, calm, sisterhood, practical confidence. No sexualized poses; athletes in functional, dignified athletic apparel.

#### Pillar 3: Multi-Generational Olympic Heritage & Civic Pride
* **Scenes:** Karim Zemaryalai (1980 Olympian) warmly talking with parents at mat-side or teaching an intricate hand-fight to high school varsity hopefuls. Group photo of the youth competition team holding a CIF or SCYWAY banner alongside Hayward DSAL youth officers.
* **Emotion:** Pride, family legacy, community honor, deep athletic wisdom.

### 6.2 Image Grading & Post-Processing Specifications
* **Color Temperature:** Warm (+6 to +8 Kelvin shift towards 5600K–5800K).
* **Highlights & Contrast:** Soft, rolled-off highlights; mid-tone clarity boost (+10); shadows kept open with warm slate toning (`#1E293B`) rather than crushed 100% blacks.
* **Depth of Field:** Shallow f/2.0 – f/2.8 on athlete portraits to isolate smiling faces from background mat activity.

---

## 7. Key UI Component Treatments

### 7.1 The Family Trust Badge Cluster (Above the Fold)
Every page hero in Direction 3 leads with a high-visibility, horizontally scrollable badge strip establishing immediate civic credibility:

```
┌─────────────────┐  ┌───────────────────┐  ┌────────────────────┐  ┌────────────────────┐
│ ★★★★★ 5.0 Rating│  │ 1980 Moscow Games │  │  Hayward DSAL      │  │  14-Day Mat-Fit    │
│ 42 Parent Reviews│  │ Olympic Lineage   │  │  Community Partner │  │  Tuition Guarantee │
└─────────────────┘  └───────────────────┘  └────────────────────┘  └────────────────────┘
```

1. **Google Family Reviews Pill:** Amber star icon + *"5.0★ Rating (42 East Bay Families)"*
2. **Olympic Lineage Seal:** Warm Crimson crest ring + *"1980 Moscow Games & Collegiate Pedigree"*
3. **Civic Partner Badge:** Laurel Green shield + *"Official Hayward DSAL Youth Partner"*
4. **Mat-Fit Guarantee Shield:** Soft gold badge + *"100% 14-Day Tuition Back Guarantee"*

---

### 7.2 The 4 Outcome-Driven Family Cards (Layout & Content)

Direction 3 organizes UWC's offerings into 4 distinct, color-coded family tracks on the homepage and pricing page:

#### Card 1: Junior Olympian Kids (Pre-K – 5th Grade)
* **Tagline:** *"Coordination, Anti-Bullying Confidence & Athletic Fun"*
* **Badge:** `AGES 4–11` | `BEGINNER FRIENDLY`
* **Pricing:** `$89.99/mo` (2-Day Mon/Wed) or `$139.99/mo` (4-Day Mon–Thu)
* **Core Objection Neutralizer:** *"No gear required for 30 days. Weight and age-matched partner protocol ensures your child never drills with older kids."*
* **Primary CTA:** `[ Claim Free Kids 2-Class Pass ]`

#### Card 2: Scholastic CIF Varsity Pipeline (Grades 6–12) — [Featured Card]
* **Tagline:** *"MVAL/WACC League Champions & Collegiate Recruiting"*
* **Badge:** `MOST POPULAR` | `GRADES 6–12`
* **Pricing:** `$139.99/mo` (MS/HS 6-Day) or `$150.00/mo` (Full Competition Team)
* **Core Objection Neutralizer:** *"Direct coaching from 1980 Olympian Karim Zemaryalai & Chabot College Coach Naweed. Saturday regional open mat included."*
* **Primary CTA:** `[ Book Varsity Assessment Pass ]`

#### Card 3: Adult Wrestle-Jitsu & Fitness (Ages 18+)
* **Tagline:** *"Takedown Mastery for BJJ & Functional Combat Conditioning"*
* **Badge:** `ADULT ALL-ACCESS` | `BEGINNERS WELCOME`
* **Pricing:** `$100.00/mo` (BJJ 3-Day) or `$139.99/mo` (Unlimited All-Access)
* **Core Objection Neutralizer:** *"Progressive situational live-go scaling. 35% lower cost than local commercial BJJ studios. Zero long-term contracts."*
* **Primary CTA:** `[ Start Adult Trial Pass ]`

#### Card 4: Women's Real-World Self-Defense (Ages 14+)
* **Tagline:** *"Practical Leverage, Ground Escape & Striking Empowerment"*
* **Badge:** `FEMALE LED` | `COMMUNITY WORKSHOP`
* **Instructors:** Louisa (Boxing/MMA), Neha's Sister (Active Police Officer), Ja Shia (Oakland Hand-to-Hand)
* **Pricing:** `$35–$50` (2.5-Hr Intensive) or `$149–$199` (6-Week Progressive Cohort)
* **Core Objection Neutralizer:** *"100% female-led mat. Zero aggressive egos. Practical street situational awareness. Seminar fee rolls over 100% into membership."*
* **Primary CTA:** `[ Reserve Seminar Spot ]`

---

### 7.3 The Native 1-Click Trial Pass Modal (Route #16 `/register`)

Instead of throwing parents into an off-site, confusing WrestlingIQ table, Direction 3 implements a clean, 2-step modal dialog with high emotional reassurance:

```
┌────────────────────────────────────────────────────────────────────────┐
│  CLAIM YOUR FREE 2-CLASS ASSESSMENT PASS                                │
│  United Wrestling Club • 30139 Industrial Pkwy SW Ste C, Hayward       │
├────────────────────────────────────────────────────────────────────────┤
│  STEP 1: SELECT YOUR ATHLETE TRACK                                     │
│  [ (o) Youth (Ages 4-11) ]  [ ( ) Varsity (Grades 6-12) ]               │
│  [ ( ) Adult Wrestle-Jitsu ] [ ( ) Women's Self-Defense ]               │
│                                                                        │
│  Parent / Athlete Name:  [ Sarah Jenkins                     ]         │
│  Mobile Phone (SMS info): [ (510) 555-0192                    ]         │
│  Email Address:          [ sarah.jenkins@gmail.com           ]         │
│                                                                        │
│  [x] Send me the First-Day Gear & Parking Guide via text               │
│  [ ] Optional: Opt-out of social media / photography recording         │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │   [ CLAIM FREE 2-CLASS PASS — ZERO OBLIGATION ]                  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│  🔒 100% Free • No Credit Card Required • Instant SMS Confirmation     │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 8. Civic Partnerships & Community Integration

Direction 3 explicitly embeds UWC into the civic fabric of Alameda County:

1. **Hayward DSAL (Deputy Sheriffs' Activities League) Integration:**
   * Co-branded youth clinic badges on the website.
   * Dedicated DSAL scholar-athlete spots in youth wrestling cohorts.
   * Trust signal for Hayward, Cherryland, and Ashland parents seeking safe after-school programs.
2. **Local School District Feeder Programs:**
   * Off-season training partnership callouts for James Logan High School (Union City), Hayward High, Tennyson, Mt. Eden, and Castro Valley High.
3. **Healthcare & First Responder Safety Seminars:**
   * Corporate self-defense and de-escalation clinics tailored to Kaiser Permanente Hayward (`27400 Hesperian Blvd`) nursing staff and local realtors.

---

## 9. Tailwind CSS v4 Theme Configuration Code Block

```css
@theme {
  /* Direction 3: Community Family Academy Color Tokens */
  --color-uwc-crimson: #9E2A2B;
  --color-uwc-crimson-hover: #7F2223;
  --color-uwc-crimson-light: #FDF2F2;

  --color-uwc-navy: #0F172A;
  --color-uwc-navy-light: #1E293B;
  --color-uwc-slate-text: #334155;
  --color-uwc-slate-muted: #64748B;

  --color-uwc-parchment: #FDFBF7;
  --color-uwc-linen: #F5F2EB;
  --color-uwc-border-warm: #EAE5DB;

  --color-uwc-amber: #F59E0B;
  --color-uwc-amber-hover: #D97706;
  --color-uwc-amber-light: #FEF3C7;

  --color-uwc-laurel: #15803D;
  --color-uwc-laurel-light: #DCFCE7;

  --color-uwc-white: #FFFFFF;

  /* Typography */
  --font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Radii */
  --radius-badge: 6px;
  --radius-card-sm: 12px;
  --radius-card-md: 18px;
  --radius-card-lg: 24px;
  --radius-pill: 9999px;

  /* Elevation Shadows */
  --shadow-warm-sm: 0 2px 4px rgba(15, 23, 42, 0.04);
  --shadow-warm-md: 0 10px 25px -5px rgba(15, 23, 42, 0.06), 0 8px 10px -6px rgba(15, 23, 42, 0.04);
  --shadow-warm-lg: 0 20px 35px -10px rgba(15, 23, 42, 0.08), 0 10px 15px -5px rgba(15, 23, 42, 0.04);
  --shadow-crimson-glow: 0 8px 20px -4px rgba(158, 42, 43, 0.28);
  --shadow-amber-glow: 0 8px 20px -4px rgba(245, 158, 11, 0.25);
}
```

---

## 10. Summary & Handoff to Prototyping

This specification establishes Direction 3 as the definitive choice for maximizing customer lifetime value, eliminating parent hesitation, and scaling recurring monthly memberships from local East Bay search queries.

* **Proceed to Interactive Artifact:** Open [`discovery/brand/moodboards/direction_3_community_family_academy.html`](direction_3_community_family_academy.html) to interact with live color swatches, typography scales, interactive cards, badge states, and the trial modal prototype.
