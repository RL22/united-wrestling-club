---
status: superseded
group: archive
---

# United Wrestling Club Concept 03 (v03) Visual & Layout Enhancements Specification

> **Status: Superseded.** Written for an earlier homepage concept. The production site is the Astro build (`decisions/ADR-20261106-astro-design-system.md`). Kept as design history. Do not implement from it.
## Component Redesigns, CSS Rules, and HTML Structures

> **Document Code:** `UWC-V03-VISUAL-SPEC-001`  
> **Role:** Visual & Layout Stylist (Antigravity Design Engine)  
> **Target File:** `v03/index.html`  
> **Date:** November 2026  
> **Status:** Production-Ready Blueprint & Implementation Guide  

---

## 1. Executive Summary & Visual Audit

Recent client review of Concept 03 identified five high-priority visual misalignments and content opportunities across the desktop and mobile viewports:

1. **Karim Card Image Sizing & Layout Mismatch:** Asymmetrical card containers (`.9fr 1.1fr`), desktop `margin-top: 3rem/4rem` drop on Karim's card, differing photo aspect ratios (`16/11` vs `4/3`), and an uneven visual container (Naweed has a full crimson card container while Karim has none).
2. **Pricing Grid Floats & Price Misalignment:** Non-featured plans rely on an outdated CSS `float: right;` with stacked `<small>` text, detaching `$15` from the card title and creating an awkward gap and uneven column heights.
3. **Social Proof Authority Banner:** Low-contrast plain bullet text in `.authority` that fails to leverage UWC's quantitative strengths (5.0 rating, 1:6 ratio, 2x daily sanitization, 3,000 sq ft).
4. **Missing "Excellence / Discipline / Champions" (EDC) Creed Section:** The core motto exists only in the footer without an architectural section establishing the three pillars of the club.
5. **Single Coaching Row:** The staff grid only shows Karim and Naweed, omitting the broader coaching staff (Rashad Rahimi, Sandeep Singh Gosal, Steve Siroy, and Farid Siddiq).

This specification details the exact CSS rules, HTML markup structures, and responsive behaviors to resolve all five areas.

---

## 2. Component 1: Karim & Naweed Primary Coach Cards Standardization

### 2.1 Visual Diagnosis
In the existing implementation (`v03/index.html:162-173`, `284-286`, `326-327`):
- `article:first-child` (Karim) is given `margin-top: 3rem` at 640px and `margin-top: 4rem` at 900px, artificially staggering the card tops.
- `article:last-child` (Naweed) receives `background: var(--red); padding: 1rem; border-radius: 2px;`, while Karim's card has no background or border, creating an unbalanced "floating photo" on the left and a "solid card" on the right.
- Karim's photo is constrained to `aspect-ratio: 16/11` while Naweed's is overridden to `aspect-ratio: 4/3`.
- The grid columns are unevenly sized at `.9fr 1.1fr`.

### 2.2 Design Solution
- **Equal Grid Columns:** `grid-template-columns: 1fr 1fr;` with `align-items: stretch;` and `margin-top: 0;`.
- **Symmetric Structural Architecture:** Both cards use a structured card enclosure. Karim receives a dark charcoal/ink container with a subtle dark border (`border: 1px solid var(--dark-line); background: oklch(24% .01 25); padding: 1.25rem; border-radius: 3px; display: flex; flex-direction: column;`), while Naweed receives the featured crimson container (`background: var(--red); border: 1px solid oklch(49% .16 25); padding: 1.25rem; border-radius: 3px; display: flex; flex-direction: column;`).
- **Unified Photo Aspect Ratio:** Both images use `aspect-ratio: 4/3; object-fit: cover; border-radius: 2px;`.
- **Sticky Footers:** `.coach-credentials` uses `margin-top: auto;` so credential bars align across both cards regardless of bio length.

### 2.3 HTML Markup Structure
```html
<div class="coach-grid coach-grid-primary">
  <!-- Card 1: Karim Zemaryalai -->
  <article class="coach-card coach-card-legacy">
    <div class="coach-photo">
      <img 
        src="../video_assets/stills_selected/still_35_naweed_father_1980_moscow_olympic_delegation.jpg" 
        alt="Founder Karim Zemaryalai 1980 Moscow Olympic singlet and official Afghan Olympic delegation document" 
        loading="lazy" 
        width="1920" 
        height="1080">
      <span class="image-label">The Foundation / Moscow 1980</span>
    </div>
    <div class="coach-info">
      <span class="eyebrow">Founder &amp; Olympic Legacy</span>
      <h3>Karim Zemaryalai</h3>
      <p>1980 Moscow Olympic qualifier and Ali Aliyev International Tournament medalist in Dagestan. His world-stage freestyle technique established UWC’s technical standard for over four decades.</p>
      <div class="coach-credentials">1980 Olympic Qualifier · Ali Aliyev Medalist · UWC Founder</div>
    </div>
  </article>

  <!-- Card 2: Naweed Zemaryalai -->
  <article class="coach-card coach-card-lead">
    <div class="coach-photo">
      <img 
        src="../video_assets/stills_selected/still_31_naweed_headshot_united_wall.jpg" 
        alt="Head Coach Naweed Zemaryalai under the United Wrestling Club wall in Hayward" 
        loading="lazy" 
        width="1920" 
        height="1080">
      <span class="image-label">Your Corner / Head Coach</span>
    </div>
    <div class="coach-info">
      <span class="eyebrow">Head Wrestling Coach</span>
      <h3>Naweed Zemaryalai</h3>
      <p>Olympic heritage combined with modern biomechanics. Naweed pairs a B.S. in Kinesiology from San Francisco State with his collegiate coaching at Chabot College to build technically sound, resilient athletes.</p>
      <div class="coach-credentials">SFSU Kinesiology B.S. · Chabot College Coach</div>
    </div>
  </article>
</div>
```

### 2.4 CSS Specifications
```css
/* --- Primary Coach Grid (Karim & Naweed) --- */
.coach-grid-primary {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2.5rem;
}

.coach-card {
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  overflow: hidden;
  transition: transform .24s var(--ease), box-shadow .24s var(--ease);
}

.coach-card-legacy {
  background: oklch(24% .01 25);
  border: 1px solid var(--dark-line);
  padding: 1.25rem;
}

.coach-card-lead {
  background: var(--red);
  border: 1px solid oklch(49% .16 25);
  padding: 1.25rem;
}

.coach-photo {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: 2px;
  background: var(--ink);
}

.coach-photo img {
  width: 100%;
  height: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  object-position: center 25%;
  display: block;
}

.coach-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1.5rem .25rem .5rem;
}

.coach-info .eyebrow {
  margin-bottom: .5rem;
  color: var(--paper);
  opacity: .85;
}

.coach-card-lead .coach-info .eyebrow {
  opacity: .95;
}

.coach-info h3 {
  font-family: var(--display);
  text-transform: uppercase;
  font-size: clamp(2rem, 3.2vw, 2.75rem);
  font-weight: 400;
  line-height: 1.05;
  color: var(--paper);
  margin-bottom: .75rem;
}

.coach-info p {
  font-size: .9375rem;
  line-height: 1.6;
  color: var(--on-dark);
  margin: 0 0 1.25rem;
}

.coach-card-lead .coach-info p {
  color: var(--paper);
}

.coach-credentials {
  margin-top: auto;
  font-size: .8125rem;
  font-weight: 600;
  letter-spacing: .02em;
  border-top: 1px solid var(--dark-line);
  padding-top: .85rem;
  color: var(--paper);
}

.coach-card-lead .coach-credentials {
  border-top-color: oklch(96% .008 25 / .35);
}

@media (min-width: 640px) {
  .coach-grid-primary {
    grid-template-columns: repeat(2, 1fr);
    align-items: stretch;
    gap: 2rem;
  }
}

@media (min-width: 900px) {
  .coach-grid-primary {
    gap: 2.5rem;
    margin-top: 3.5rem;
  }
}
```

---

## 3. Component 2: Pricing Cards Flex/Grid Architecture (No Float Hacks)

### 3.1 Visual Diagnosis
In `v03/index.html:329-336`:
```css
.pricing-grid { grid-template-columns: 1.2fr 1fr; gap: 0 3rem; align-items: start; }
.plan.featured { grid-column: 1; grid-row: 1 / 3; padding: 2.5rem; align-self: stretch; }
.plan:not(.featured) { grid-column: 2; padding-block: 1.75rem; }
.plan:not(.featured) .plan-price { float: right; margin: -.25rem 0 .5rem 1rem; }
.plan:not(.featured) .plan-price small { display: block; font-size: .875rem; text-align: right; }
```
- The 2-column layout smashes "3-Day Mat Pass" and "Single Mat Drop-In" into the right column.
- The `float: right;` pulls `$15` away from the plan title and stacks the cadence (`/ once`, `/ visit`) underneath, creating a broken visual baseline.
- Card CTA buttons on the side plans are squished and left-aligned (`align-self: flex-start; width: auto;`).

### 3.2 Design Solution
- **Side-by-Side 3-Column Desktop Grid:** 3 equal columns (`grid-template-columns: repeat(3, 1fr);`) with the center "Unlimited Training" card prominent and commanding.
- **Flexbox Price Lockup:** Replace floats with a clean, semantic flex baseline lockup.
- **Clear Eyebrow Badges:**
  - Card 1: `<span class="eyebrow red-text">Start Here</span>`
  - Card 2: `<span class="plan-marker">The Bedrock Standard</span>` + `<span class="eyebrow">Most Popular</span>`
  - Card 3: `<span class="eyebrow red-text">Keep It Flexible</span>`
- **Cadence Formatting:**
  - `$15` with inline `<span>/ once</span>`
  - `$139.99` with inline `<span>/ mo</span>`
  - `$15` with inline `<span>/ visit</span>`
- **Flex Column Stretching:** All three cards stretch to equal height. Feature bullet lists expand (`flex-grow: 1`), keeping CTA buttons aligned on the bottom row.

### 3.3 HTML Markup Structure
```html
<div class="pricing-grid">
  <!-- Plan 1: 3-Day Mat Pass -->
  <article class="plan">
    <div class="plan-header">
      <span class="eyebrow red-text">Start Here</span>
      <h3 class="plan-title">3-Day Mat Pass</h3>
      <p class="plan-tagline">Three introductory practices for new athletes.</p>
    </div>
    <div class="plan-price">
      <span class="price-currency">$</span>
      <span class="price-val">15</span>
      <span class="price-cadence">/ once</span>
    </div>
    <p class="plan-description">Three age-appropriate practices, gear fitting, and a 1-on-1 technique assessment with Coach Naweed.</p>
    <ul class="plan-features">
      <li>3 consecutive practices</li>
      <li>Any age-appropriate class (Youth, Varsity, Adult)</li>
      <li>Gear fitting included</li>
      <li>1-on-1 technique assessment</li>
      <li>Zero obligation to join</li>
    </ul>
    <div class="plan-cta">
      <a class="btn outline full" href="https://www.wrestlingiq.com/users/sign_up?paid_session_id=6327&amp;show_registration=true&amp;team_id=513" data-offer="trial">Get My Mat Pass <span class="arrow" aria-hidden="true">↗</span></a>
    </div>
  </article>

  <!-- Plan 2: Unlimited Training (Featured) -->
  <article class="plan featured">
    <div class="plan-header">
      <div class="plan-marker">The Bedrock Standard</div>
      <span class="eyebrow">Make It Your Routine</span>
      <h3 class="plan-title">Unlimited Training</h3>
      <p class="plan-tagline">Full access for committed competitors &amp; families.</p>
    </div>
    <div class="plan-price">
      <span class="price-currency">$</span>
      <span class="price-val">139.99</span>
      <span class="price-cadence">/ mo</span>
    </div>
    <p class="plan-description">All practices, all week long. The fastest way to build real confidence, conditioning, and mat mastery.</p>
    <ul class="plan-features">
      <li>Unlimited weekly training across all sessions</li>
      <li>Free Saturday Open Mat included ($60/mo value)</li>
      <li>15% family / sibling discount</li>
      <li>Zero initiation fees &amp; no long-term contracts</li>
      <li>Direct corner coaching at sanctioned tournaments</li>
    </ul>
    <div class="plan-cta">
      <a class="btn light full" href="https://www.wrestlingiq.com/uwc/register" data-offer="membership">Start Unlimited Training <span class="arrow" aria-hidden="true">↗</span></a>
    </div>
  </article>

  <!-- Plan 3: Single Mat Drop-In -->
  <article class="plan">
    <div class="plan-header">
      <span class="eyebrow red-text">Keep It Flexible</span>
      <h3 class="plan-title">Single Mat Drop-In</h3>
      <p class="plan-tagline">For visiting grapplers &amp; open mat rounds.</p>
    </div>
    <div class="plan-price">
      <span class="price-currency">$</span>
      <span class="price-val">15</span>
      <span class="price-cadence">/ visit</span>
    </div>
    <p class="plan-description">One full practice session or Saturday Open Mat. Open to all Bay Area affiliations and visiting competitors.</p>
    <ul class="plan-features">
      <li>One full practice or 2-hour Saturday Open Mat</li>
      <li>Collegiate and BJJ cross-training welcome</li>
      <li>No membership commitment</li>
      <li>Full access to 3,000 sq ft Dollamur mats</li>
      <li>Train with the East Bay wrestling community</li>
    </ul>
    <div class="plan-cta">
      <a class="btn outline full" href="https://www.wrestlingiq.com/users/sign_up?paid_session_id=2664&amp;show_registration=true&amp;team_id=513" data-offer="dropin">Book a Drop-In <span class="arrow" aria-hidden="true">↗</span></a>
    </div>
  </article>
</div>
```

### 3.4 CSS Specifications
```css
/* --- Pricing Grid Redesign --- */
.pricing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
  margin-top: 2.5rem;
}

.plan {
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 2rem 1.5rem;
  position: relative;
  transition: transform .24s var(--ease), box-shadow .24s var(--ease);
}

.plan-header {
  margin-bottom: .5rem;
}

.plan-header .eyebrow {
  margin-bottom: .5rem;
  font-size: .6875rem;
  letter-spacing: .12em;
}

.plan-title {
  font-family: var(--display);
  font-size: 2rem;
  text-transform: uppercase;
  line-height: 1.1;
  color: var(--ink);
  margin: 0 0 .35rem;
}

.plan-tagline {
  font-size: .8125rem;
  color: var(--muted);
  margin: 0;
}

/* Flexbox Price Presentation - Zero Float */
.plan-price {
  display: flex;
  align-items: baseline;
  gap: .2rem;
  margin: 1.25rem 0 .75rem;
  font-family: var(--display);
  line-height: 1;
  color: var(--ink);
}

.plan-price .price-currency {
  font-size: 2rem;
  font-weight: 400;
  vertical-align: super;
}

.plan-price .price-val {
  font-size: clamp(3.25rem, 5vw, 4.25rem);
  letter-spacing: -.02em;
}

.plan-price .price-cadence {
  font-family: var(--body);
  font-size: .9375rem;
  font-weight: 600;
  color: var(--muted);
  letter-spacing: 0;
  margin-left: .25rem;
  text-transform: lowercase;
}

.plan-description {
  font-size: .9375rem;
  line-height: 1.5;
  color: var(--muted);
  margin: 0 0 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--line);
}

.plan-features {
  margin: 0 0 2rem;
  padding: 0;
  list-style: none;
  flex-grow: 1;
}

.plan-features li {
  font-size: .875rem;
  padding: .6rem 0;
  border-bottom: 1px solid oklch(91% .009 25);
  display: flex;
  align-items: flex-start;
  gap: .6rem;
  color: var(--ink);
}

.plan-features li::before {
  content: '✓';
  color: var(--red);
  font-weight: 800;
  flex-shrink: 0;
}

.plan-cta {
  margin-top: auto;
}

.plan .btn {
  width: 100%;
}

/* Featured Plan (Unlimited Training) Styling */
.plan.featured {
  background: var(--red);
  border-color: var(--red-bright);
  color: var(--paper);
  box-shadow: 0 16px 36px oklch(43.5% .145 25 / .22);
}

.plan.featured .plan-marker {
  display: inline-block;
  background: var(--paper);
  color: var(--red);
  padding: .25rem .6rem;
  margin-bottom: .85rem;
  font-size: .6875rem;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: .08em;
  border-radius: 2px;
}

.plan.featured .plan-header .eyebrow {
  color: oklch(96% .008 25 / .85);
}

.plan.featured .plan-title {
  color: var(--paper);
}

.plan.featured .plan-tagline {
  color: oklch(96% .008 25 / .85);
}

.plan.featured .plan-price {
  color: var(--paper);
}

.plan.featured .plan-price .price-cadence {
  color: oklch(96% .008 25 / .85);
}

.plan.featured .plan-description {
  color: oklch(96% .008 25 / .9);
  border-bottom-color: oklch(96% .008 25 / .3);
}

.plan.featured .plan-features li {
  color: var(--paper);
  border-bottom-color: oklch(96% .008 25 / .2);
}

.plan.featured .plan-features li::before {
  color: var(--paper);
}

/* Responsive Breakpoints */
@media (min-width: 768px) and (max-width: 1023px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .plan.featured {
    grid-column: 1 / -1;
  }
}

@media (min-width: 1024px) {
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
    gap: 1.75rem;
  }
  .plan.featured {
    transform: translateY(-8px);
    padding: 2.5rem 1.75rem;
  }
}
```

---

## 4. Component 3: Elevated Social Proof Callout Banner (4 Catchy Numbers)

### 4.1 Visual Diagnosis
In `v03/index.html:104-107`, `524-529`:
The current `.authority` container displays small plain bullet items ("Close coaching / 1:6 coach-to-athlete focus") that blend into the dark band without punch or athletic personality.

### 4.2 Design Solution
Replace the low-contrast text with four prominent quantitative proof metrics:
1. **`5.0 ★`** — 5-Star Community Trust · Hayward & Bay Area Grappler & Parent Trust
2. **`1:6`** — Coach-to-Athlete Ratio · Dedicated In-Practice Technique Correction
3. **`2x / Day`** — Sanitized Daily · Hospital-Grade Antimicrobial Dollamur Mats
4. **`3,000`** — Sq Ft Mat Space · Seamless Olympic & Folkstyle Training Facility

#### Typographic Treatment:
- Numbers are displayed in extra-bold condensed typography (`Impact / var(--display)`).
- Styled with high-contrast outlined transparent stroke:
  `-webkit-text-stroke: 1.5px var(--red-bright); color: transparent;` with fallback to `var(--paper)`.
- On mobile devices, a 2x2 grid maintains balance without horizontal scrolling.

### 4.3 HTML Markup Structure
```html
<section class="authority" aria-label="United Wrestling Club verified standards">
  <div class="wrap authority-inner">
    
    <!-- Stat 1: 5-Star Reviews -->
    <div class="authority-stat">
      <div class="stat-figure stat-figure-stroke">5.0<span class="stat-symbol">★</span></div>
      <div class="stat-text">
        <strong class="stat-heading">5-Star Community Trust</strong>
        <span class="stat-label">Hayward &amp; Bay Area Parent Reviews</span>
      </div>
    </div>

    <!-- Stat 2: Coach Ratio -->
    <div class="authority-stat">
      <div class="stat-figure stat-figure-stroke">1:6</div>
      <div class="stat-text">
        <strong class="stat-heading">Coach-to-Athlete Ratio</strong>
        <span class="stat-label">Dedicated Individual Correction</span>
      </div>
    </div>

    <!-- Stat 3: Daily Sanitization -->
    <div class="authority-stat">
      <div class="stat-figure stat-figure-stroke">2x<small class="stat-cadence">/day</small></div>
      <div class="stat-text">
        <strong class="stat-heading">Sanitized Daily</strong>
        <span class="stat-label">Hospital-Grade Antimicrobial Mats</span>
      </div>
    </div>

    <!-- Stat 4: Mat Space -->
    <div class="authority-stat">
      <div class="stat-figure stat-figure-stroke">3,000</div>
      <div class="stat-text">
        <strong class="stat-heading">Sq Ft Mat Space</strong>
        <span class="stat-label">Seamless Dollamur Training Room</span>
      </div>
    </div>

  </div>
</section>
```

### 4.4 CSS Specifications
```css
/* --- Elevated Social Proof Authority Banner --- */
.authority {
  background: var(--ink);
  color: var(--paper);
  border-block: 1px solid var(--dark-line);
}

.authority-inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem 1rem;
  padding-block: 2rem;
}

.authority-stat {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  border-left: 2px solid var(--dark-line);
  padding-left: 1rem;
}

.stat-figure {
  font-family: var(--display);
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  line-height: .95;
  letter-spacing: .02em;
  text-transform: uppercase;
  color: var(--paper);
  display: flex;
  align-items: baseline;
}

/* Subtle Athletic Stroke Effect */
.stat-figure-stroke {
  color: var(--paper);
  -webkit-text-stroke: 1.5px var(--red-bright);
  text-shadow: 0 0 12px oklch(43.5% .145 25 / .25);
}

.stat-symbol {
  font-size: .65em;
  color: #C5A059; /* Championship Gold accent */
  -webkit-text-stroke: 0;
  margin-left: 3px;
}

.stat-cadence {
  font-family: var(--body);
  font-size: .38em;
  font-weight: 700;
  letter-spacing: 0;
  color: var(--on-dark);
  -webkit-text-stroke: 0;
  margin-left: 4px;
}

.stat-text {
  display: flex;
  flex-direction: column;
  gap: .2rem;
}

.stat-heading {
  font-size: .875rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--paper);
  letter-spacing: .01em;
}

.stat-label {
  font-size: .75rem;
  line-height: 1.4;
  color: var(--on-dark);
}

@media (min-width: 640px) {
  .authority-inner {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .authority-stat {
    padding-left: 1.25rem;
  }
}

@media (min-width: 900px) {
  .authority-inner {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding-block: 2.25rem;
  }
  .authority-stat {
    border-left: 2px solid oklch(35% .01 25);
    padding-left: 1.5rem;
  }
}
```

---

## 5. Component 4: New Section — "EXCELLENCE / DISCIPLINE / CHAMPIONS" (EDC Creed)

### 5.1 Architecture & Page Flow
- **Placement:** Placed strategically between `#programs` and `#coaches`.
- **Purpose:** Serves as the philosophical bridge between what training is offered (Programs) and who teaches it (Coaches), elevating UWC from a typical local gym into a dedicated combat institution.
- **Visual Design:** Monolithic dark athletic band (`background: var(--ink); color: var(--paper);`), anchored by a monumental typography banner across the top and a 3-column pillar breakdown.

### 5.2 The Three Pillars Content
1. **EXCELLENCE (Technical Mastery):** Olympic-rooted fundamentals, biomechanical precision, Dagestani chaining, and collegiate craft.
2. **DISCIPLINE (Relentless Work Ethic):** Accountability on the mat, stance and motion, respect for the grind, and daily sweat equity.
3. **CHAMPIONS (Character in the Circle):** Sportsmanship, mental toughness, humility in victory, poise under pressure, and character that carries beyond the mat.

### 5.3 HTML Markup Structure
```html
<section class="section edc-creed" id="creed" aria-labelledby="creed-heading">
  <div class="wrap">
    
    <!-- Manifesto Top Banner -->
    <div class="edc-banner">
      <div class="edc-badge-pill">USA Wrestling Regional Training Center #513</div>
      <h2 id="creed-heading" class="edc-motto-display">
        <span class="motto-word">Excellence</span>
        <span class="motto-divider" aria-hidden="true">/</span>
        <span class="motto-word">Discipline</span>
        <span class="motto-divider" aria-hidden="true">/</span>
        <span class="motto-word">Champions</span>
      </h2>
      <p class="edc-lead">The three standards etched into every practice at United Wrestling Club. We don't just build tournament medalists; we forge unbreakable character for life.</p>
    </div>

    <!-- 3-Column Pillar Cards -->
    <div class="edc-pillars">
      
      <!-- Pillar 1 -->
      <article class="edc-pillar">
        <div class="pillar-marker">
          <span class="pillar-num">01</span>
          <span class="pillar-tag">The Standard</span>
        </div>
        <h3 class="pillar-title">Excellence</h3>
        <h4 class="pillar-subtitle">Technical Mastery</h4>
        <p class="pillar-body">Wrestling is physics under pressure. Rooted in Karim Zemaryalai's 1980 Olympic lineage and Naweed's Kinesiology foundation, we drill the micro-details: 2-on-1 Russian ties, explosive level changes, and hip control that give you an indisputable competitive edge.</p>
        <div class="pillar-quote">"Technique is the great equalizer on the mat."</div>
      </article>

      <!-- Pillar 2 -->
      <article class="edc-pillar">
        <div class="pillar-marker">
          <span class="pillar-num">02</span>
          <span class="pillar-tag">The Grind</span>
        </div>
        <h3 class="pillar-title">Discipline</h3>
        <h4 class="pillar-subtitle">Relentless Work Ethic</h4>
        <p class="pillar-body">No shortcuts. No excuses. Discipline means showing up when you're tired, maintaining stance when your legs burn, and holding yourself accountable to your training partner. We teach young athletes how to embrace discomfort as the catalyst for growth.</p>
        <div class="pillar-quote">"How you do anything is how you do everything."</div>
      </article>

      <!-- Pillar 3 -->
      <article class="edc-pillar">
        <div class="pillar-marker">
          <span class="pillar-num">03</span>
          <span class="pillar-tag">The Outcome</span>
        </div>
        <h3 class="pillar-title">Champions</h3>
        <h4 class="pillar-subtitle">Character in the Circle</h4>
        <p class="pillar-body">A true champion is defined before the whistle blows and long after the hand is raised. We build humble winners, resilient competitors, and respectful leaders who carry the quiet confidence of the mat into the classroom and the community.</p>
        <div class="pillar-quote">"Once you've wrestled, everything else in life is easy."</div>
      </article>

    </div>

    <!-- Subterranean Motto Stamped Bar -->
    <div class="edc-footer-stamp">
      <span>Hayward Industrial Mats</span>
      <span class="stamp-dot">•</span>
      <span>1980 Moscow Olympic Roots</span>
      <span class="stamp-dot">•</span>
      <span>All Bay Area Grapplers Welcome</span>
    </div>

  </div>
</section>
```

### 5.4 CSS Specifications
```css
/* --- EDC Creed & Manifesto Section --- */
.edc-creed {
  background: var(--ink);
  color: var(--paper);
  border-block: 2px solid oklch(35% .01 25);
  position: relative;
  overflow: hidden;
}

.edc-creed::before {
  content: 'EDC';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--display);
  font-size: clamp(14rem, 28vw, 32rem);
  font-weight: 900;
  color: oklch(24% .01 25 / .35);
  letter-spacing: .08em;
  pointer-events: none;
  z-index: 0;
  user-select: none;
}

.edc-banner {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 3.5rem;
}

.edc-badge-pill {
  display: inline-block;
  background: oklch(24% .01 25);
  border: 1px solid var(--dark-line);
  color: #C5A059; /* Championship Gold */
  font-size: .6875rem;
  font-weight: 750;
  letter-spacing: .12em;
  text-transform: uppercase;
  padding: .35rem .85rem;
  border-radius: 2px;
  margin-bottom: 1.25rem;
}

.edc-motto-display {
  font-family: var(--display);
  font-size: clamp(2.5rem, 6vw, 4.75rem);
  text-transform: uppercase;
  line-height: 1.05;
  letter-spacing: .03em;
  color: var(--paper);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: .5rem 1rem;
  margin: 0 0 1.25rem;
}

.edc-motto-display .motto-word {
  color: var(--paper);
}

.edc-motto-display .motto-divider {
  color: var(--red);
  font-weight: 300;
  opacity: .9;
}

.edc-lead {
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--on-dark);
  max-width: 65ch;
  margin-inline: auto;
}

/* 3-Column Pillar Layout */
.edc-pillars {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
}

.edc-pillar {
  background: oklch(23% .01 25);
  border: 1px solid var(--dark-line);
  border-radius: 3px;
  padding: 2.25rem 1.75rem;
  display: flex;
  flex-direction: column;
  transition: transform .24s var(--ease), border-color .24s var(--ease);
}

.edc-pillar:hover {
  transform: translateY(-4px);
  border-color: var(--red);
}

.pillar-marker {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  padding-bottom: .75rem;
  border-bottom: 1px solid var(--dark-line);
}

.pillar-num {
  font-family: var(--display);
  font-size: 2rem;
  color: var(--red-bright);
  line-height: 1;
}

.pillar-tag {
  font-size: .6875rem;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: var(--on-dark);
  font-weight: 700;
}

.pillar-title {
  font-family: var(--display);
  font-size: 2.25rem;
  text-transform: uppercase;
  letter-spacing: .02em;
  color: var(--paper);
  margin: 0 0 .25rem;
  line-height: 1;
}

.pillar-subtitle {
  font-size: .875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .06em;
  color: var(--red-bright);
  margin: 0 0 1rem;
}

.pillar-body {
  font-size: .9375rem;
  line-height: 1.6;
  color: var(--on-dark);
  margin: 0 0 1.5rem;
  flex-grow: 1;
}

.pillar-quote {
  font-size: .8125rem;
  font-style: italic;
  color: oklch(96% .008 25 / .7);
  border-left: 2px solid var(--red);
  padding-left: .75rem;
  margin-top: auto;
}

.edc-footer-stamp {
  position: relative;
  z-index: 1;
  margin-top: 3.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--dark-line);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: .5rem 1rem;
  font-size: .75rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--on-dark);
  font-weight: 600;
}

.stamp-dot {
  color: var(--red);
}

@media (min-width: 640px) {
  .edc-pillars {
    grid-template-columns: repeat(2, 1fr);
  }
  .edc-pillar:last-child {
    grid-column: 1 / -1;
  }
}

@media (min-width: 1024px) {
  .edc-pillars {
    grid-template-columns: repeat(3, 1fr);
  }
  .edc-pillar:last-child {
    grid-column: auto;
  }
}
```

---

## 6. Component 5: Second 4-Column Row in Coaches Section

### 6.1 Architecture & Coaching Roster
Below the primary Karim & Naweed 2-card row in `#coaches`, introduce a secondary coaching staff tier displaying four coaches who contribute to UWC's program:
1. **Coach Rashad Rahimi:** Co-Founder & Olympic Veteran Coach (1980 Olympic Qualifier, Asian Games Silver Medalist).
2. **Coach Sandeep Singh Gosal:** Youth Competition & Scholastic Coach (James Logan Alum, CIF State Placer, Fresno State & SF State NCAA D-I).
3. **Coach Steve Siroy:** Coaching Advisor & Lineage Mentor (California Wrestling Hall of Fame, 40+ year Chabot College Head Coach).
4. **Coach Farid Siddiq:** Striking & Boxing Fundamentals Coach (Combat Sports Stance, Slip Counters & Boxing Mechanics).

### 6.2 Responsive Grid Breakdown
- **Desktop (`>= 1024px`):** 4 equal columns (`grid-template-columns: repeat(4, 1fr);`).
- **Tablet (`640px` to `1023px`):** 2 columns (`grid-template-columns: repeat(2, 1fr);`).
- **Mobile (`< 640px`):** 1 column (`grid-template-columns: 1fr;`).

### 6.3 HTML Markup Structure
```html
<div class="coaches-secondary-wrap">
  <div class="coaches-secondary-header">
    <span class="eyebrow">The Corner / East Bay Coaching Staff</span>
    <h3 class="coaches-secondary-title">Decades of Mat Mastery Across Every Discipline</h3>
  </div>

  <div class="coach-grid coach-grid-secondary">
    
    <!-- Coach 1: Rashad Rahimi -->
    <article class="coach-card-secondary">
      <div class="coach-photo-secondary">
        <img 
          src="../live_site_content/assets/co-founder.jpg" 
          alt="Coach Rashad Rahimi, UWC Co-Founder and 1980 Olympic Qualifier" 
          loading="lazy" 
          width="800" 
          height="600">
        <span class="image-label">Asian Games Silver</span>
      </div>
      <div class="coach-info-secondary">
        <span class="coach-role">Co-Founder &amp; Olympic Veteran</span>
        <h4 class="coach-name">Rashad Rahimi</h4>
        <p class="coach-bio">Competed at the pinnacle of international freestyle wrestling. Rashad brings world-class technical precision and old-school mental resilience to forge disciplined contenders.</p>
        <div class="coach-pill">1980 Olympic Qualifier · Asian Games Silver</div>
      </div>
    </article>

    <!-- Coach 2: Sandeep Singh Gosal -->
    <article class="coach-card-secondary">
      <div class="coach-photo-secondary">
        <img 
          src="../video_assets/stills_selected/still_09_coach_community_mat.jpg" 
          alt="Coach Sandeep Singh Gosal working with competitive youth wrestlers at United Wrestling Club" 
          loading="lazy" 
          width="800" 
          height="600">
        <span class="image-label">James Logan / NCAA D-I</span>
      </div>
      <div class="coach-info-secondary">
        <span class="coach-role">Youth Competition &amp; Scholastic Coach</span>
        <h4 class="coach-name">Sandeep Singh Gosal</h4>
        <p class="coach-bio">Union City standout and James Logan powerhouse. Wrestled Division I at Fresno State and SF State. Decades coaching competitive youth and MVAL/CIF contenders.</p>
        <div class="coach-pill">CIF State Placer · Fresno State / SFSU D-I</div>
      </div>
    </article>

    <!-- Coach 3: Steve Siroy -->
    <article class="coach-card-secondary">
      <div class="coach-photo-secondary">
        <img 
          src="../video_assets/stills_selected/still_38_coach_steve_siroy_chabot_pedigree.jpg" 
          alt="Hall of Fame Coach Steve Siroy with the Chabot College championship wrestling team" 
          loading="lazy" 
          width="800" 
          height="600">
        <span class="image-label">Hall of Fame</span>
      </div>
      <div class="coach-info-secondary">
        <span class="coach-role">Coaching Advisor &amp; Lineage Mentor</span>
        <h4 class="coach-name">Steve Siroy</h4>
        <p class="coach-bio">A four-decade Northern California coaching dynasty. As Chabot College head coach, Siroy mentored countless champions and shaped Coach Naweed's coaching philosophy.</p>
        <div class="coach-pill">CA Wrestling Hall of Fame · 40+ Yr Chabot Head Coach</div>
      </div>
    </article>

    <!-- Coach 4: Farid Siddiq -->
    <article class="coach-card-secondary">
      <div class="coach-photo-secondary">
        <img 
          src="../video_assets/stills_selected/still_49_sergio_gomez_striking_usa_wrestling_olympic_banner.jpg" 
          alt="Coach Farid Siddiq coaching stand-up striking and boxing fundamentals" 
          loading="lazy" 
          width="800" 
          height="600">
        <span class="image-label">Striking Specialist</span>
      </div>
      <div class="coach-info-secondary">
        <span class="coach-role">Boxing &amp; Striking Fundamentals</span>
        <h4 class="coach-name">Farid Siddiq</h4>
        <p class="coach-bio">Explores the foundations of stance, head movement, slip counters, and mechanical striking. Equips grapplers and combat athletes with complete standing discipline.</p>
        <div class="coach-pill">Boxing Fundamentals · Combat Movement Specialist</div>
      </div>
    </article>

  </div>
</div>
```

### 6.4 CSS Specifications
```css
/* --- Secondary Coaching Roster (4-Column Grid) --- */
.coaches-secondary-wrap {
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid var(--dark-line);
}

.coaches-secondary-header {
  margin-bottom: 2rem;
}

.coaches-secondary-header .eyebrow {
  color: var(--red-bright);
  margin-bottom: .4rem;
}

.coaches-secondary-title {
  font-family: var(--display);
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  text-transform: uppercase;
  color: var(--paper);
  line-height: 1.1;
  margin: 0;
}

.coach-grid-secondary {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.coach-card-secondary {
  background: oklch(24% .01 25);
  border: 1px solid var(--dark-line);
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform .24s var(--ease), border-color .24s var(--ease);
}

.coach-card-secondary:hover {
  transform: translateY(-4px);
  border-color: var(--red-bright);
}

.coach-photo-secondary {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: var(--ink);
}

.coach-photo-secondary img {
  width: 100%;
  height: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  object-position: center 25%;
  display: block;
}

.coach-info-secondary {
  padding: 1.25rem 1.15rem 1.15rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.coach-role {
  font-size: .6875rem;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: var(--on-dark);
  font-weight: 700;
  margin-bottom: .35rem;
}

.coach-name {
  font-family: var(--display);
  font-size: 1.5rem;
  text-transform: uppercase;
  line-height: 1.1;
  color: var(--paper);
  margin: 0 0 .65rem;
}

.coach-bio {
  font-size: .84375rem;
  line-height: 1.5;
  color: var(--on-dark);
  margin: 0 0 1.25rem;
  flex-grow: 1;
}

.coach-pill {
  margin-top: auto;
  padding: .5rem .65rem;
  background: oklch(19% .008 25);
  border-left: 2px solid var(--red-bright);
  font-size: .6875rem;
  font-weight: 600;
  letter-spacing: .02em;
  color: var(--paper);
  border-radius: 0 2px 2px 0;
}

@media (min-width: 640px) {
  .coach-grid-secondary {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .coach-grid-secondary {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
}
```

---

## 7. Turnkey CSS Patch for `v03/index.html`

To implement these enhancements directly into `v03/index.html`, replace existing conflicting lines and append the new rules as follows:

```css
/* ==========================================================================
   UWC CONCEPT 03 VISUAL FIXES PATCH (turnkey drop-in)
   ========================================================================== */

/* 1. Authority Social Proof Redesign */
.authority {
  background: var(--ink);
  color: var(--paper);
  border-block: 1px solid var(--dark-line);
}
.authority-inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem 1rem;
  padding-block: 2rem;
}
.authority-stat {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  border-left: 2px solid var(--dark-line);
  padding-left: 1rem;
}
.stat-figure {
  font-family: var(--display);
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  line-height: .95;
  letter-spacing: .02em;
  text-transform: uppercase;
  color: var(--paper);
  display: flex;
  align-items: baseline;
}
.stat-figure-stroke {
  color: var(--paper);
  -webkit-text-stroke: 1.5px var(--red-bright);
  text-shadow: 0 0 12px oklch(43.5% .145 25 / .25);
}
.stat-symbol {
  font-size: .65em;
  color: #C5A059;
  -webkit-text-stroke: 0;
  margin-left: 3px;
}
.stat-cadence {
  font-family: var(--body);
  font-size: .38em;
  font-weight: 700;
  letter-spacing: 0;
  color: var(--on-dark);
  -webkit-text-stroke: 0;
  margin-left: 4px;
}
.stat-text {
  display: flex;
  flex-direction: column;
  gap: .2rem;
}
.stat-heading {
  font-size: .875rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--paper);
}
.stat-label {
  font-size: .75rem;
  line-height: 1.4;
  color: var(--on-dark);
}

/* 2. EDC Creed Section */
.edc-creed {
  background: var(--ink);
  color: var(--paper);
  border-block: 2px solid oklch(35% .01 25);
  position: relative;
  overflow: hidden;
}
.edc-creed::before {
  content: 'EDC';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--display);
  font-size: clamp(14rem, 28vw, 32rem);
  font-weight: 900;
  color: oklch(24% .01 25 / .35);
  letter-spacing: .08em;
  pointer-events: none;
  z-index: 0;
  user-select: none;
}
.edc-banner {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 3.5rem;
}
.edc-badge-pill {
  display: inline-block;
  background: oklch(24% .01 25);
  border: 1px solid var(--dark-line);
  color: #C5A059;
  font-size: .6875rem;
  font-weight: 750;
  letter-spacing: .12em;
  text-transform: uppercase;
  padding: .35rem .85rem;
  border-radius: 2px;
  margin-bottom: 1.25rem;
}
.edc-motto-display {
  font-family: var(--display);
  font-size: clamp(2.5rem, 6vw, 4.75rem);
  text-transform: uppercase;
  line-height: 1.05;
  letter-spacing: .03em;
  color: var(--paper);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: .5rem 1rem;
  margin: 0 0 1.25rem;
}
.edc-motto-display .motto-divider { color: var(--red); font-weight: 300; }
.edc-lead {
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--on-dark);
  max-width: 65ch;
  margin-inline: auto;
}
.edc-pillars {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
}
.edc-pillar {
  background: oklch(23% .01 25);
  border: 1px solid var(--dark-line);
  border-radius: 3px;
  padding: 2.25rem 1.75rem;
  display: flex;
  flex-direction: column;
  transition: transform .24s var(--ease), border-color .24s var(--ease);
}
.edc-pillar:hover { transform: translateY(-4px); border-color: var(--red); }
.pillar-marker {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  padding-bottom: .75rem;
  border-bottom: 1px solid var(--dark-line);
}
.pillar-num { font-family: var(--display); font-size: 2rem; color: var(--red-bright); line-height: 1; }
.pillar-tag { font-size: .6875rem; text-transform: uppercase; letter-spacing: .1em; color: var(--on-dark); font-weight: 700; }
.pillar-title { font-family: var(--display); font-size: 2.25rem; text-transform: uppercase; letter-spacing: .02em; color: var(--paper); margin: 0 0 .25rem; line-height: 1; }
.pillar-subtitle { font-size: .875rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--red-bright); margin: 0 0 1rem; }
.pillar-body { font-size: .9375rem; line-height: 1.6; color: var(--on-dark); margin: 0 0 1.5rem; flex-grow: 1; }
.pillar-quote { font-size: .8125rem; font-style: italic; color: oklch(96% .008 25 / .7); border-left: 2px solid var(--red); padding-left: .75rem; margin-top: auto; }
.edc-footer-stamp {
  position: relative;
  z-index: 1;
  margin-top: 3.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--dark-line);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: .5rem 1rem;
  font-size: .75rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--on-dark);
  font-weight: 600;
}
.stamp-dot { color: var(--red); }

/* 3. Primary Coaches Standardization */
.coach-grid-primary {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2.5rem;
}
.coach-card {
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  overflow: hidden;
}
.coach-card-legacy {
  background: oklch(24% .01 25);
  border: 1px solid var(--dark-line);
  padding: 1.25rem;
}
.coach-card-lead {
  background: var(--red);
  border: 1px solid oklch(49% .16 25);
  padding: 1.25rem;
}
.coach-photo {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: 2px;
  background: var(--ink);
}
.coach-photo img {
  width: 100%;
  height: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  object-position: center 25%;
  display: block;
}
.coach-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1.5rem .25rem .5rem;
}
.coach-info .eyebrow { margin-bottom: .5rem; color: var(--paper); opacity: .85; }
.coach-card-lead .coach-info .eyebrow { opacity: .95; }
.coach-info h3 {
  font-family: var(--display);
  text-transform: uppercase;
  font-size: clamp(2rem, 3.2vw, 2.75rem);
  font-weight: 400;
  line-height: 1.05;
  color: var(--paper);
  margin-bottom: .75rem;
}
.coach-info p {
  font-size: .9375rem;
  line-height: 1.6;
  color: var(--on-dark);
  margin: 0 0 1.25rem;
}
.coach-card-lead .coach-info p { color: var(--paper); }
.coach-credentials {
  margin-top: auto;
  font-size: .8125rem;
  font-weight: 600;
  letter-spacing: .02em;
  border-top: 1px solid var(--dark-line);
  padding-top: .85rem;
  color: var(--paper);
}
.coach-card-lead .coach-credentials { border-top-color: oklch(96% .008 25 / .35); }

/* 4. Secondary Coaches 4-Column Grid */
.coaches-secondary-wrap {
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid var(--dark-line);
}
.coaches-secondary-header { margin-bottom: 2rem; }
.coaches-secondary-header .eyebrow { color: var(--red-bright); margin-bottom: .4rem; }
.coaches-secondary-title {
  font-family: var(--display);
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  text-transform: uppercase;
  color: var(--paper);
  line-height: 1.1;
  margin: 0;
}
.coach-grid-secondary {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
.coach-card-secondary {
  background: oklch(24% .01 25);
  border: 1px solid var(--dark-line);
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform .24s var(--ease), border-color .24s var(--ease);
}
.coach-card-secondary:hover { transform: translateY(-4px); border-color: var(--red-bright); }
.coach-photo-secondary {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: var(--ink);
}
.coach-photo-secondary img {
  width: 100%;
  height: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  object-position: center 25%;
  display: block;
}
.coach-info-secondary {
  padding: 1.25rem 1.15rem 1.15rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.coach-role {
  font-size: .6875rem;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: var(--on-dark);
  font-weight: 700;
  margin-bottom: .35rem;
}
.coach-name {
  font-family: var(--display);
  font-size: 1.5rem;
  text-transform: uppercase;
  line-height: 1.1;
  color: var(--paper);
  margin: 0 0 .65rem;
}
.coach-bio {
  font-size: .84375rem;
  line-height: 1.5;
  color: var(--on-dark);
  margin: 0 0 1.25rem;
  flex-grow: 1;
}
.coach-pill {
  margin-top: auto;
  padding: .5rem .65rem;
  background: oklch(19% .008 25);
  border-left: 2px solid var(--red-bright);
  font-size: .6875rem;
  font-weight: 600;
  letter-spacing: .02em;
  color: var(--paper);
  border-radius: 0 2px 2px 0;
}

/* 5. Pricing Grid Clean Model (No Floats) */
.pricing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
  margin-top: 2.5rem;
}
.plan {
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 2rem 1.5rem;
  position: relative;
  transition: transform .24s var(--ease), box-shadow .24s var(--ease);
}
.plan-header { margin-bottom: .5rem; }
.plan-header .eyebrow { margin-bottom: .5rem; font-size: .6875rem; letter-spacing: .12em; }
.plan-title {
  font-family: var(--display);
  font-size: 2rem;
  text-transform: uppercase;
  line-height: 1.1;
  color: var(--ink);
  margin: 0 0 .35rem;
}
.plan-tagline { font-size: .8125rem; color: var(--muted); margin: 0; }
.plan-price {
  display: flex;
  align-items: baseline;
  gap: .2rem;
  margin: 1.25rem 0 .75rem;
  font-family: var(--display);
  line-height: 1;
  color: var(--ink);
}
.plan-price .price-currency { font-size: 2rem; font-weight: 400; vertical-align: super; }
.plan-price .price-val { font-size: clamp(3.25rem, 5vw, 4.25rem); letter-spacing: -.02em; }
.plan-price .price-cadence {
  font-family: var(--body);
  font-size: .9375rem;
  font-weight: 600;
  color: var(--muted);
  letter-spacing: 0;
  margin-left: .25rem;
  text-transform: lowercase;
}
.plan-description {
  font-size: .9375rem;
  line-height: 1.5;
  color: var(--muted);
  margin: 0 0 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--line);
}
.plan-features {
  margin: 0 0 2rem;
  padding: 0;
  list-style: none;
  flex-grow: 1;
}
.plan-features li {
  font-size: .875rem;
  padding: .6rem 0;
  border-bottom: 1px solid oklch(91% .009 25);
  display: flex;
  align-items: flex-start;
  gap: .6rem;
  color: var(--ink);
}
.plan-features li::before {
  content: '✓';
  color: var(--red);
  font-weight: 800;
  flex-shrink: 0;
}
.plan-cta { margin-top: auto; }
.plan .btn { width: 100%; }

.plan.featured {
  background: var(--red);
  border-color: var(--red-bright);
  color: var(--paper);
  box-shadow: 0 16px 36px oklch(43.5% .145 25 / .22);
}
.plan.featured .plan-marker {
  display: inline-block;
  background: var(--paper);
  color: var(--red);
  padding: .25rem .6rem;
  margin-bottom: .85rem;
  font-size: .6875rem;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: .08em;
  border-radius: 2px;
}
.plan.featured .plan-header .eyebrow { color: oklch(96% .008 25 / .85); }
.plan.featured .plan-title { color: var(--paper); }
.plan.featured .plan-tagline { color: oklch(96% .008 25 / .85); }
.plan.featured .plan-price { color: var(--paper); }
.plan.featured .plan-price .price-cadence { color: oklch(96% .008 25 / .85); }
.plan.featured .plan-description {
  color: oklch(96% .008 25 / .9);
  border-bottom-color: oklch(96% .008 25 / .3);
}
.plan.featured .plan-features li {
  color: var(--paper);
  border-bottom-color: oklch(96% .008 25 / .2);
}
.plan.featured .plan-features li::before { color: var(--paper); }

/* --- Media Queries --- */
@media (min-width: 640px) {
  .coach-grid-primary {
    grid-template-columns: repeat(2, 1fr);
    align-items: stretch;
    gap: 2rem;
  }
  .coach-grid-secondary {
    grid-template-columns: repeat(2, 1fr);
  }
  .edc-pillars {
    grid-template-columns: repeat(2, 1fr);
  }
  .edc-pillar:last-child {
    grid-column: 1 / -1;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .plan.featured {
    grid-column: 1 / -1;
  }
}

@media (min-width: 900px) {
  .authority-inner {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding-block: 2.25rem;
  }
  .authority-stat {
    border-left: 2px solid oklch(35% .01 25);
    padding-left: 1.5rem;
  }
  .coach-grid-primary {
    gap: 2.5rem;
    margin-top: 3.5rem;
  }
}

@media (min-width: 1024px) {
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
    gap: 1.75rem;
  }
  .plan.featured {
    transform: translateY(-8px);
    padding: 2.5rem 1.75rem;
  }
  .edc-pillars {
    grid-template-columns: repeat(3, 1fr);
  }
  .edc-pillar:last-child {
    grid-column: auto;
  }
  .coach-grid-secondary {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
}
```

---

## 8. Verification & Visual QA Checklist

| Test Item | Verification Criteria | Pass / Fail Condition |
| :--- | :--- | :--- |
| **Karim Card Top Alignment** | Inspect `v03/index.html` at 1440px, 1024px, 768px. Karim's card and Naweed's card have identical `Y` coordinate baselines. | PASS: No `margin-top` offset; tops align perfectly. |
| **Karim Card Container** | Karim card is contained in `oklch(24% .01 25)` charcoal box with border; matches Naweed's structural presence. | PASS: Visual weight balanced 50/50. |
| **Pricing Layout (Zero Floats)** | Check computed CSS for `.plan:not(.featured) .plan-price`. `float` is `none`. | PASS: No float rules exist; flex baseline alignment intact. |
| **Price & Cadence Pairing** | Verify `$15 / once` and `$15 / visit` are inline and directly below plan titles. | PASS: Numbers and cadence remain coupled across all viewport widths. |
| **Authority Numbers Impact** | Authority banner renders 4 statistics (`5.0 ★`, `1:6`, `2x / day`, `3,000`). | PASS: Bold athletic stroke display with readable labels. |
| **EDC Section Architecture** | Section `#creed` sits between `#programs` and `#coaches`. | PASS: 3 pillars render responsively (1-col mobile, 2-col tablet, 3-col desktop). |
| **Secondary Coaches Grid** | 4 coaches render below primary row (Rashad, Sandeep, Siroy, Farid). | PASS: 4 columns on desktop, 2 on tablet, 1 on mobile with photos and pills. |
| **WCAG 2.1 AA Contrast** | All text against red (`var(--red)`) and ink (`var(--ink)`) containers satisfies ≥ 4.5:1 ratio. | PASS: White (`var(--paper)`) and high-opacity tints maintain contrast. |
