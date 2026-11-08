---
type: dossier
status: current
group: brand
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/brand/moodboards/direction_3_community_family_academy.html"]
shard_of: "discovery/brand/moodboards/direction_3_community_family_academy.md"
part: "2 of 5"
---

> Part 2 of 5 of [direction_3_community_family_academy](../direction_3_community_family_academy.md). Text is verbatim from the original; only links were rewritten.

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
