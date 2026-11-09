---
type: dossier
status: current
group: brand
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/brand/moodboards/direction_2_modern_combat_athletic.html", "discovery/archive/snapshots/live_site_content/assets/uwc_crest_logo_highres.png", "discovery/archive/snapshots/live_site_content/assets/founder.jpg", "discovery/archive/snapshots/live_site_content/assets/head-coach.jpg", "discovery/archive/snapshots/live_site_content/assets/co-founder.jpg", "discovery/archive/snapshots/live_site_content/assets/uwc_place.webp", "discovery/archive/snapshots/live_site_content/assets/facebook/fb_photo_01.jpg"]
shard_of: "discovery/brand/moodboards/direction_2_modern_combat_athletic.md"
part: "2 of 3"
---

> Part 2 of 3 of [direction_2_modern_combat_athletic](../direction_2_modern_combat_athletic.md). Text is verbatim from the original; only links were rewritten.

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
