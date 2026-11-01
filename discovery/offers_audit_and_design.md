# Offer Design & Value Architecture: United Wrestling Club (UWC)

> **Client:** Naweed Zemaryalai & Karim Zemaryalai  
> **Brand:** United Wrestling Club (`unitedwrestlingclub.com`)  
> **Address:** `30139 Industrial Pkwy SW Ste C, Hayward, CA 94544` | **Phone:** `(510) 303-4869`  
> **Prepared By:** Sprintz Growth OS (`offers` Discovery Phase)  
> **Date:** October 30, 2026 (Updated for 32-Route Rebuild Architecture)  

---

## 1. Executive Summary: The Offer Bottleneck

United Wrestling Club holds the strongest combat sports credential stack in the East Bay—led by 1980 Moscow Olympic qualifier and Dagestan Ali Aliyev medalist **Karim Zemaryalai**, Chabot College Coach **Naweed Zemaryalai**, Asian Games Silver Medalist **Rashad Rahimi**, and James Logan alumnus **Sandeep Singh Gosal**. Furthermore, UWC's pricing ($89.99–$150.00/mo) is **35%–45% below** typical Bay Area BJJ and MMA academies ($225–$275/mo).

Despite having higher authority and lower prices than every local competitor, UWC's digital offer converts poorly because **it is structured as a raw utility checkout rather than a high-value transformation offer.**

This discovery document executes the complete **Offer Design Diagnostic** across two layers:
1. **Part I: UWC Athlete & Parent Offers (B2C)** — Auditing and rebuilding UWC's front-end trial offer, the locked Route #14 (`/pricing`) page architecture, and 4 core membership tracks (Youth Development, Scholastic CIF Competition, Adult Wrestle-Jitsu, and Women's Self-Defense) so parents and athletes convert immediately.
2. **Part II: Sprintz Growth OS Proposal Offer (B2B)** — Packaging Sprintz's technical SEO, programmatic landing pages, `llms.txt` AI readiness, and WrestlingIQ SMS automation into an irresistible B2B offer for Naweed and Karim.

---

## PART I: UWC Athlete & Parent Offer Architecture (B2C)

### 2. Diagnostic of Current UWC Offers & Complete 8-Session Database Audit

On the live site (`unitedwrestlingclub.com`), visitors clicking "Register Now" or "Pricing" are dumped into unbranded WrestlingIQ checkout forms before capturing their contact info. Furthermore, trial messaging is heavily fragmented across pages:
* The **Homepage hero** advertises a **"$15.00 for a 3 Day Trial"** (`paid_session_id=6327`).
* The **Pricing page** (`/pricing`) advertises a **"$15.00 DROP IN per day"** (`paid_session_id=2664`).
* The **FAQ page** (`/faqs` Q#5) states: *"Do you offer free trial sessions? Yes we offer trial sessions..."*
* The **Women's Self-Defense program** is completely unlisted on the live site, losing high-margin seminar revenue and leaving a major community vacuum unfilled.

Below is the verified inventory of all **8 live WrestlingIQ Team 513 session IDs** extracted from [`discovery/live_site_content/pricing.json`](live_site_content/pricing.json):

| # | Live Plan Name | Live Price / Period | Live Schedule Rule | WrestlingIQ Session ID (`Team 513`) | Direct Live Checkout URL (`wrestlingiq.com`) | Conversion Diagnosis & Bottleneck |
| :-: | :--- | :--- | :--- | :---: | :--- | :--- |
| **1** | **Special Trial Offer (3-Day Trial)** | $15.00 (3-Day Trial) | New members only | `Session #6327` | `https://www.wrestlingiq.com/users/sign_up?paid_session_id=6327&show_registration=true&team_id=513` | Buried in hero video overlay; clashes with `/faqs` claim of "free trial sessions"; cold checkout drops mobile users. |
| **2** | **DROP IN** | $15.00 / day | Flexible attendance | `Session #2664` | `https://www.wrestlingiq.com/users/sign_up?paid_session_id=2664&show_registration=true&team_id=513` | Charges $15 upfront before a parent knows if their child likes the room; out-of-town visitors have to register full account. |
| **3** | **Kids (Pre-K – 5th) 2 Day** | $89.99 / mo | Monday & Wednesday Only | `Session #1087` | `https://www.wrestlingiq.com/users/sign_up?paid_session_id=1087&show_registration=true&team_id=513` | Framed as mat hours rather than coordination, bully prevention, and confidence; no gear loaner or guarantee stated. |
| **4** | **4 Day Kids** | $139.99 / mo | Monday – Thursday | `Session #4981` | `https://www.wrestlingiq.com/users/sign_up?paid_session_id=4981&show_registration=true&team_id=513` | Sold on `/pricing` but missing from `/schedule` grid (which only showed Mon/Wed Kids); causes parent schedule confusion. |
| **5** | **Middle School / High School** | $139.99 / mo | Monday – Saturday | `Session #2286` | `https://www.wrestlingiq.com/users/sign_up?paid_session_id=2286&show_registration=true&team_id=513` | Fails to highlight off-season MVAL/WACC varsity preparation, freestyle/greco development, and college recruiting. |
| **6** | **Competition Youth (Pre-K – 12th)** | $150.00 / mo | Monday – Saturday | `Session #3574` | `https://www.wrestlingiq.com/users/sign_up?paid_session_id=3574&show_registration=true&team_id=513` | Live site's only `featured: true` plan, but fails to showcase tournament coaching, travel duals, or Karim's Olympic pedigree. |
| **7** | **ADULT / COLLEGE / HIGHSCHOOL** | $139.99 / mo | Monday – Saturday | `Session #1084` | `https://www.wrestlingiq.com/users/sign_up?paid_session_id=1084&show_registration=true&team_id=513` | Fails to name the "Wrestle-Jitsu" system that East Bay BJJ guard-pullers desperately want; no adult beginner reassurance. |
| **8** | **BJJ / 3 days** | $100.00 / mo | 3 days / week | `Session #9536` | `https://www.wrestlingiq.com/users/sign_up?paid_session_id=9536&show_registration=true&team_id=513` | Incredible price ($100 vs. $225+ at local BJJ academies) completely buried with blank schedule text and zero curriculum details. |

#### Value Equation Baseline Score (Current State: 19 / 40)

$$\text{Value} = \frac{\text{Dream Outcome} \times \text{Perceived Likelihood of Achievement}}{\text{Time Delay} \times \text{Effort \& Sacrifice}}$$

* **Dream Outcome (4 / 10):** Framed as "days per week on the mat" rather than an identity or athletic outcome (e.g., making varsity, winning CIF medals, becoming takedown-proof).
* **Perceived Likelihood (5 / 10):** The 5.0★ Google rating (42 reviews) and Olympic lineage exist, but are disconnected from the pricing cards and WrestlingIQ checkout pages. Zero risk-reversal guarantee is stated.
* **Time Delay (5 / 10):** No structured "First-Day Win" or 30-day onboarding milestone; parents don't know how fast a beginner child will safely integrate.
* **Effort & Sacrifice (5 / 10 — High Friction):** External WrestlingIQ sign-up requires full account creation and credit card entry up front, with no automated SMS instructions on what gear to bring, where to park on Industrial Pkwy, or which door to enter.

---

### 3. Reconstructed Front-End Entry Offer (Trial & Lead Intake Funnel)

To eliminate traffic leaks from the 2,086 monthly organic visitors and the 10 programmatic geo-pages, UWC replaces the cold off-domain checkout buttons with a unified, high-converting front-end entry funnel routed to Route #16 (`/register`).

#### The Core Entry Funnel: **"The Olympic Roots 2-Class Assessment Pass"** (With Express `$15` 3-Day Option)
* **Primary Destination Route:** `/register` (Route #16 — Native 1-Click Trial Pass Modal).
* **Target Audience:** East Bay parents (ages 4–14), High School wrestlers, Adult beginners/BJJ cross-trainers, and Women's Self-Defense students in Hayward, Union City, Fremont, Newark, and Castro Valley.
* **Price Options:**
  1. **Option A (Local Trial): Free 2-Class Assessment Pass** for local East Bay residents (anchored against the $30 value of two drop-in sessions).
  2. **Option B (Official 3-Day Trial): $15.00 for a 3-Day Trial** (`WrestlingIQ Session #6327`) or **$15.00 Drop-In** (`Session #2664`) for visiting/traveling athletes.
* **Core Deliverable:**
  * 2 full introductory classes matched to age, discipline, and experience bracket.
  * 5-minute post-class matside evaluation with Coach Naweed or Coach Sandeep mapping out the athlete's recommended track.
* **Bonus Stack (Delivered Instantly via SMS/Email upon Booking):**
  1. *The First-Practice Readiness Checklist:* Exact parking walkthrough video and map for `30139 Industrial Pkwy SW Ste C`, what to wear (t-shirt, athletic shorts, clean wrestling shoes or barefoot guidelines), and facility check-in instructions.
  2. *Direct Concierge Phone & SMS Line:* Instant contact verification with `(510) 303-4869` so parents can text coaches directly with questions.
  3. *Parent's Guide to Youth Wrestling Safety:* How Olympic Folkstyle/Freestyle teaches safe falling, spatial control, and neck strength without concussive strikes.
* **Default Opt-Out Media Clause (Built into `/register` Modal):**
  > `[ ] Optional: Opt out of photo/video recording. (Note: UWC films classes and events for coaching and promotional use on our website and social media. Media release is included by default unless you check this box or notify check-in staff.)`
* **Guarantee / Risk Reversal:** Zero financial obligation, no credit card required to claim the assessment pass, and zero high-pressure sales pitch.

---

### 4. Reconstructed Core Membership Offers (4 Outcome-Driven Tracks)

Instead of listing disconnected database rows from WrestlingIQ, UWC presents **4 Outcome-Driven Tracks** on `/pricing` and programmatic landing pages, with direct cross-links to detailed program descriptions and schedule verification:

```text
Track 1: Youth Foundation & Character Track  ──> Program: /classes/kid-wrestling    ──> Schedule: /schedule
Track 2: Scholastic Varsity & CIF Pipeline   ──> Program: /classes/youth-wrestling  ──> Schedule: /schedule
Track 3: Adult Takedown & Wrestle-Jitsu      ──> Program: /classes/adult-wrestling  ──> Schedule: /schedule
Track 4: Women's Self-Defense Seminar/Series ──> Program: /classes/womens-self-defense ──> Schedule: /schedule
                                             └── Primary CTA: /register (1-Click Modal)
```

---

#### Offer 1: Youth Foundation & Character Track (Ages 4–11 / Pre-K – 5th Grade)
* **1. Name:** **The Junior Olympian Foundation Program**
* **2. Program Detail Link:** [`/classes/kid-wrestling`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L75) (Route #4)
* **3. Schedule Verification Link:** [`/schedule`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L87) (Route #13)
* **4. Core Deliverable:** 
  * Structured youth wrestling training 2x/week (Mon/Wed 6:30–7:30 PM) or 4x/week (Mon–Thu) teaching stance, motion, level changes, takedown mechanics, safe tumbling, spatial awareness, and athletic discipline.
* **5. Bonus Stack (Objection-Handlers):**
  * *Objection: "Will my beginner child get thrown around by older kids?"* → **Bonus 1: Weight & Age-Matched Pairing Protocol** — Beginners drill exclusively with similar-sized peers under direct coach supervision.
  * *Objection: "I don't want to buy $150 of gear if they quit in a month."* → **Bonus 2: No-Gear First 30 Days** — Start in standard athletic shorts and a t-shirt; loaner headgear/shoes guidance provided before purchasing.
  * *Objection: "How do I know if they're progressing?"* → **Bonus 3: Day-30 Fundamentals Check-In** — Direct feedback from the coaching staff on stance, sprawl, and mat discipline milestones.
* **6. Guarantee (Risk Reversal):** **The 14-Day Mat-Fit Guarantee** — If your child attends their first two weeks of classes and you don't feel the coaching environment builds their confidence, focus, and physical resilience, we cancel and refund 100% of your first month's tuition.
* **7. Scarcity / Urgency (Honest Constraint):** **Coach-to-Athlete Ratio Cap** — To maintain safe mat spacing and direct coach oversight, beginner youth groups are capped at 24 athletes per session.
* **8. Price & WrestlingIQ Session Mapping:** 
  * **2-Day Foundation (Mon & Wed):** **$89.99/mo** → Direct Checkout: `Session #1087` (Month-to-month, no annual contracts vs. $225+/mo at commercial karate/BJJ studios).
  * **4-Day Accelerated (Mon – Thu):** **$139.99/mo** → Direct Checkout: `Session #4981`.
  * **Primary Action Button:** `[Claim Free 2-Class Trial Pass]` → Opens `/register`.

---

#### Offer 2: Scholastic Varsity & CIF Competition Track (Grades 6–12)
* **1. Name:** **The East Bay Varsity & CIF Pipeline (Competition Team)**
* **2. Program Detail Link:** [`/classes/youth-wrestling`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L76) (Route #5)
* **3. Schedule Verification Link:** [`/schedule`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L87) (Route #13)
* **4. Core Deliverable:** 
  * 6-day/week (Mon–Sat) high-pace Folkstyle, Freestyle, and Greco-Roman training designed to turn Middle and High School athletes from Hayward, Fremont, Union City (James Logan), and Newark (MVAL/WACC leagues) into CIF State qualifiers and collegiate recruits.
  * Direct instruction from 1980 Olympian Karim Zemaryalai, Chabot College Coach Naweed Zemaryalai, Asian Games medalist Rashad Rahimi, and James Logan alumnus Sandeep Singh Gosal.
* **5. Bonus Stack (Objection-Handlers):**
  * *Objection: "How does this fit with my high school wrestling season?"* → **Bonus 1: Pre-Season & Off-Season Weight/Peaking Roadmap** — Custom tournament calendar for SCYWAY, USA Wrestling, and CIF scholastic preparation.
  * *Objection: "Will my wrestler get live looks against elite partners?"* → **Bonus 2: Saturday Multi-Discipline Open Mat Access** — Included every Saturday (10:00 AM – 12:00 PM) with high school, collegiate, and adult competitors across the Bay Area.
  * *Objection: "We want to wrestle in college after high school."* → **Bonus 3: Collegiate Pathway Mentorship** — Direct guidance from Coach Naweed (Chabot College wrestling coach) on JuCo/NCAA recruiting readiness and film breakdown.
* **6. Guarantee:** **First-Week Live Room Test** — Try a full week of training; if the technical instruction and partner intensity don't outclass every room in Alameda County, walk away before billing locks in.
* **7. Scarcity / Urgency:** **Seasonal Roster Windows** — Enrollment peaks ahead of the Pre-Season Fall Block (Sept–Nov) and Spring Freestyle/Greco Block (March–June). Travel team tournament cornering is limited to registered UWC Competition Team athletes.
* **8. Price & WrestlingIQ Session Mapping:** 
  * **Middle / High School Unlimited (Mon–Sat):** **$139.99/mo** → Direct Checkout: `Session #2286`.
  * **Full Competition Travel Team (Pre-K – 12th):** **$150.00/mo** → Direct Checkout: `Session #3574` (Less than the cost of two 1-hour private lessons elsewhere in the Bay Area).
  * **Primary Action Button:** `[Book Varsity Evaluation Pass]` → Opens `/register`.

---

#### Offer 3: Adult Wrestling, Wrestle-Jitsu & Combat Sambo Track (Ages 18+)
* **1. Name:** **The Adult Takedown & Wrestle-Jitsu System**
* **2. Program Detail Links:** [`/classes/adult-wrestling`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L78) (Route #6) · [`/classes/nogi-jiu-jitsu`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L79) (Route #7) · [`/classes/gi-jiu-jitsu`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L80) (Route #8) · [`/classes/sambo`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L81) (Route #9) · [`/classes/boxing-fundamentals`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L82) (Route #10) · [`/classes/open-mat`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L85) (Route #11)
* **3. Schedule Verification Link:** [`/schedule`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L87) (Route #13)
* **4. Core Deliverable:** 
  * Unlimited evening access (Mon–Sat) to Adult Olympic Wrestling, No-Gi "Wrestle-Jitsu", Gi BJJ, Combat Sambo (taught by a Kyrgyz master), Boxing Fundamentals, and 12-round HIIT Conditioning.
  * Specifically engineered for adult beginners wanting authentic combat conditioning and BJJ/MMA practitioners tired of guard-pulling gyms who want dominant takedowns, Dagestani top pressure, and mat returns.
* **5. Bonus Stack (Objection-Handlers):**
  * *Objection: "I'm a 30-year-old beginner / BJJ player and I don't want to get injured by 19-year-old college wrestlers."* → **Bonus 1: Progressive Live-Go Scaling** — Technique-first drilling blocks before live situational goes, paired strictly by size, pace, and experience level.
  * *Objection: "Do I have to pay separately for Wrestling, BJJ, Sambo, and Boxing?"* → **Bonus 2: All-Access Multi-Discipline Cross-Training** — One flat membership unlocks Wrestling, Gi/No-Gi BJJ, Sambo, Boxing, and Saturday Open Mat without add-on fees.
  * *Objection: "How do I integrate wrestling into submission grappling?"* → **Bonus 3: The Dagestani Ride & Front-Headlock Curriculum** — Learn the exact chain-wrestling, leg-riding, and hand-fighting systems that bridge collegiate/Olympic wrestling into No-Gi submissions.
* **6. Guarantee:** **Zero Long-Term Contract Lock-In** — Unlike East Bay BJJ academies that lock you into a 12-month auto-billing contract with cancellation fees, UWC memberships are honest month-to-month.
* **7. Scarcity / Urgency:** **Evening Mat Capacity** — Evening adult classes run in dedicated time blocks; trial passes are scheduled per session to maintain safe mat square-footage per pair.
* **8. Price & WrestlingIQ Session Mapping:** 
  * **BJJ Only (3 Days/Week):** **$100.00/mo** → Direct Checkout: `Session #9536`.
  * **Adult Unlimited All-Access (Mon–Sat):** **$139.99/mo** → Direct Checkout: `Session #1084` *(Anchored against $225–$275/mo at neighboring Hayward/Fremont BJJ gyms).*
  * **Saturday Regional Open Mat (Drop-In):** **$15.00/session** → Direct Checkout: `Session #2664`.
  * **Primary Action Button:** `[Claim Adult Trial Pass]` → Opens `/register`.

---

#### Offer 4: Women's Self-Defense Seminar Series & 6-Week Cohort (Ages 14+)
* **1. Name:** **The Women's Real-World Self-Defense & Striking Intensive**
* **2. Program Detail Link:** [`/classes/womens-self-defense`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L84) (Route #12 — `[✨ NEW]`)
* **3. Schedule Verification Link:** [`/schedule`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L87) (Route #13)
* **4. Instructors & Authority Bench:**
  * **Louisa:** Co-Lead Instructor bringing an authentic **Boxing & MMA background** plus her presence as a **badass local entrepreneur** (handling striking mechanics, range control, defensive mindset, and community outreach).
  * **Neha's Sister:** Co-Lead Instructor bringing the ultimate grappling & law-enforcement authority stack as an **Active Police Officer ("the law")**, **UWC Alumna**, and **Women's Collegiate Wrestling Titleholder** (clinch defense, takedown defense, street de-escalation, and real-world leverage).
  * **Ja Shia:** Co-Instructor bringing **Hand-to-Hand Combat (Oakland Instructor)** and **MMA** experience (close-quarters street combatives and practical ground escape).
* **5. Core Deliverable:**
  * Practical 2-Hour Weekend Intensive Workshops or 6-Week Structured Cohorts focused on breaking grips, escaping bottom pins, surviving against larger attackers, defensive footwork, and decisive counter-striking (zero choreographed martial arts fluff).
* **6. Bonus Stack (Objection-Handlers):**
  * *Objection: "I've never done martial arts before; will it be intimidating?"* → **Bonus 1: Women-Only Safe Training Mat** — Taught exclusively in a supportive, female-led environment with zero aggressive male egos.
  * *Objection: "What if I get attacked in a parking lot or transit station?"* → **Bonus 2: Bay Area Transit & Campus Safety Protocol** — Practical situational awareness guides for CSUEB, Chabot College, BART, and parking structures.
  * *Objection: "How do I maintain these skills after the seminar?"* → **Bonus 3: Free 1-Week UWC All-Access Pass** — Includes guest pass access to Boxing Fundamentals and Gi/No-Gi grappling classes.
* **7. Guarantee (Risk Reversal):** **100% Practical Empowerment Guarantee** — If you do not leave the seminar feeling significantly more capable, confident, and prepared to defend yourself, we will issue a full 100% refund on the spot.
* **8. Scarcity / Urgency:** **Mat Safety Headcount Cap** — Seminars and cohort slots are strictly limited to **20 participants** to ensure every woman gets 1-on-1 technique corrections from Louisa, Neha's sister, and Ja Shia.
* **9. Price & Payment Structure:**
  * **High-Margin Weekend Intensive Seminar (2 Hours):** **$35.00 – $50.00 / ticket** (or Free Community Intro Clinic during special club events like the UWC Holiday Mixer).
  * **6-Week Progressive Cohort (1x/week + Open Mat):** **$149.00 – $199.00** (includes branded training wraps, safety guide, and completion certificate).
  * **Seamless Membership Bridge:** $35–$50 seminar fee applies as a direct 100% tuition credit if enrolling into recurring monthly Adult All-Access ($139.99/mo) or BJJ ($100/mo).
  * **Primary Action Button:** `[Reserve Seminar Spot]` → Opens `/register`.

---

## 5. Complete `/pricing` Page Information Architecture & Funnel Specification (Route #14)

The rebuild of Route #14 (`/pricing`) transforms an empty utility table into an educational, high-trust sales engine that routes cold visitors into the **Native 1-Click Trial Pass Modal** while providing verified direct links to all **8 live WrestlingIQ Team 513 sessions** for returning or ready-to-join athletes.

### Architecture & Funnel Routing Matrix

```text
/pricing (Route #14)
│
├── Primary Conversion CTA (Hero, Cards, Sticky Footer)
│   └── Route #16: /register (Native 1-Click Trial Pass Modal ──> Captures Lead First ──> SMS Concierge)
│
├── Program Deep-Dive Verification Links
│   ├── Kids Wrestling (Pre-K–5th):      Route #4  ──> /classes/kid-wrestling
│   ├── Competition Youth (K–12):        Route #5  ──> /classes/youth-wrestling
│   ├── Adult Wrestling (18+):           Route #6  ──> /classes/adult-wrestling
│   ├── Women's Self-Defense:            Route #12 ──> /classes/womens-self-defense
│   ├── Grappling / Sambo / Boxing:      Routes #7–#11 (/classes/nogi-jiu-jitsu, /gi-jiu-jitsu, /sambo, /boxing-fundamentals, /open-mat)
│
├── Schedule & Facility Verification Links
│   ├── Filterable Mat Schedule:         Route #13 ──> /schedule
│   ├── Facility & Parking Location:     30139 Industrial Pkwy SW Ste C, Hayward, CA 94544
│   └── Direct Phone & Text Inquiries:   (510) 303-4869 ──> /contact
│
└── Express Direct Checkout Bypass (All 8 WrestlingIQ Team 513 Sessions)
    ├── Session #6327 ($15 3-Day Trial)
    ├── Session #2664 ($15 Drop-In)
    ├── Session #1087 ($89.99 Kids 2-Day)
    ├── Session #4981 ($139.99 4-Day Kids)
    ├── Session #2286 ($139.99 MS/HS 6-Day)
    ├── Session #3574 ($150.00 Competition Youth)
    ├── Session #1084 ($139.99 Adult All-Access)
    └── Session #9536 ($100.00 BJJ 3-Day)
```

### Section-by-Section Wireframe Specification for `/pricing`

1. **Section 1: Hero & Transparent Pricing Commitment**
   * *H1:* **"Transparent Membership Plans. Zero Long-Term Contracts."**
   * *Subhead:* "Olympic-caliber wrestling, Wrestle-Jitsu, Combat Sambo, and Women's Self-Defense in Hayward, CA. 35%–45% below commercial Bay Area BJJ academies."
   * *Trust Badges:* `[ 1980 Moscow Olympic Lineage ]` · `[ Month-to-Month Tuition ]` · `[ Zero Cancellation Fees ]` · `[ 5.0★ Google Rating ]`
   * *Primary CTA Button:* `[ Claim Free 2-Class Trial Pass ]` (Routes to `/register`) · *Secondary Ghost Button:* `[ View Full Schedule ]` (Routes to `/schedule`).

2. **Section 2: Interactive 4-Track Pricing Grid (The Core Cards)**
   * **Card 1: Junior Olympian Kids (Pre-K – 5th)**
     * *Headline Price:* `$89.99/mo` (2-Day Mon/Wed) or `$139.99/mo` (4-Day Mon–Thu).
     * *Key Bullets:* Weight & age-matched drilling, safe falling mechanics, no gear required for 30 days, 14-day mat-fit guarantee.
     * *Links:* Deep-dive [`/classes/kid-wrestling`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L75) · Schedule [`/schedule#kids`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L87).
     * *Card CTA:* `[ Start Free Kids Trial ]` (`/register`).
   * **Card 2: Varsity & CIF Competition Pipeline (Grades 6–12) — [Featured Card: "Most Popular"]**
     * *Headline Price:* `$139.99/mo` (MS/HS 6-Day) or `$150.00/mo` (Full Competition Travel Team).
     * *Key Bullets:* 6 days/wk Folkstyle/Freestyle/Greco, MVAL/WACC/CIF varsity preparation, Saturday Open Mat access included, Chabot College recruiting mentorship.
     * *Links:* Deep-dive [`/classes/youth-wrestling`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L76) · Schedule [`/schedule#varsity`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L87).
     * *Card CTA:* `[ Book Varsity Assessment ]` (`/register`).
   * **Card 3: Adult Wrestling & Wrestle-Jitsu (Ages 18+)**
     * *Headline Price:* `$100.00/mo` (BJJ 3-Day) or `$139.99/mo` (All-Access Unlimited Mon–Sat).
     * *Key Bullets:* Authentic Olympic takedowns for BJJ guard-pullers, Dagestani top control, Combat Sambo, Boxing, progressive live-go safety scaling.
     * *Links:* Deep-dive [`/classes/adult-wrestling`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L78) · Schedule [`/schedule#adult`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L87).
     * *Card CTA:* `[ Try Adult Wrestle-Jitsu ]` (`/register`).
   * **Card 4: Women's Self-Defense Intensive (Seminar & Cohort Series)**
     * *Headline Price:* `$35–$50` (Weekend Seminar) or `$149–$199` (6-Week Progressive Cohort).
     * *Key Bullets:* Female-led instruction by Louisa, Neha's Sister (police officer & collegiate champion), and Ja Shia. Practical anti-assault leverage, ground escapes, and decisive counter-striking.
     * *Links:* Deep-dive [`/classes/womens-self-defense`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L84) · Schedule [`/schedule#womens-self-defense`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L87).
     * *Card CTA:* `[ Reserve Women's Seminar Spot ]` (`/register`).

3. **Section 3: Transparent WrestlingIQ Team 513 Direct Checkout Table**
   * An accordion or toggle for returning athletes: *"Already know your plan? Click below to complete your direct registration on WrestlingIQ (Team 513)."*
   * Displays the audited table of all 8 sessions (`#6327`, `#2664`, `#1087`, `#4981`, `#2286`, `#3574`, `#1084`, `#9536`) with explicit 1-click checkout links.

4. **Section 4: Schedule Verification & Facility Location Anchor**
   * *Copy:* "Not sure which class fits your family's routine? Check our live mat schedule or stop by our Hayward facility."
   * Direct embed link to [`/schedule`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L87).
   * Exact physical address display: `30139 Industrial Pkwy SW Ste C, Hayward, CA 94544` (with link to Google Maps and parking instructions).
   * Primary phone line display: `(510) 303-4869` with `tel:` and `sms:` links.

5. **Section 5: Transparent Membership FAQs**
   * *Q: Are there annual contracts?* No. All plans are month-to-month.
   * *Q: Do you offer sibling or family discounts?* Yes, sibling and multi-member discounts are available.
   * *Q: Do I have to buy expensive gear before starting?* No, beginners start in t-shirt and athletic shorts.
   * *Q: Can I freeze my membership for high school sports season or injury?* Yes, simple 1-click freeze with zero penalty.

6. **Section 6: Bottom Sticky / Conversion Banner**
   * *Headline:* "Experience the Room First — Free 2-Class Pass."
   * *CTA Button:* `[ Claim Your Pass at /register ]` (Pops modal).

---

## PART II: Sprintz Growth OS Service Offer to UWC (B2B)

### 6. Designing the Sprintz B2B Offer for Coach Naweed & Karim

#### Buyer Sophistication & Constraint Diagnosis
* **Who the Buyers Are:** Coach Naweed Zemaryalai and Karim Zemaryalai—elite wrestling technicians who spend 25+ hours/week on the mat coaching youth, college, and adult athletes.
* **What They Hate:** Marketing jargon, "AI hype", complicated software dashboards they have to manage themselves, or changing their core billing engine (`WrestlingIQ Team 513`).
* **What They Value:** Full mats, committed athletes/parents who show up on time, dominating the East Bay/Tri-City wrestling footprint, and preserving their Olympic reputation without answering phone calls during live wrestling practice.
* **Economic Math:** Average UWC member pays ~$140/month and stays 8–12+ months (**$1,120 – $1,680 LTV per athlete**). Adding just **15 new recurring athletes** generates **$2,100/month ($25,200/year)** in recurring tuition.

---

### 7. The Sprintz B2B Offer Anatomy: "The 30-Day Full-Mat Growth Engine"

| Component | Weak Agency Pitch (What to Avoid) | Sprintz Growth OS Offer (What We Present) |
| :--- | :--- | :--- |
| **5. Name** | "SEO, Web Development & AI Automation Retainer" | **The 30-Day East Bay Mat-Fill & Local Dominance System** |
| **1. Core Deliverable** | "Next.js SSR migration, JSON-LD schema, 10 SEO pages, llms.txt, and SMS webhooks" | **A turnkey local athlete acquisition system that ranks UWC #1 across Hayward & Tri-City (Fremont/Union City/Newark) and books trial athletes onto your mat automatically via SMS while you coach.** |
| **2. Bonus Stack** | None | **4 Done-For-You Bonuses** that eliminate technical work, protect WrestlingIQ, and activate past drop-ins (detailed below). |
| **3. Guarantee** | None | **The "10-Athlete Break-Even" Performance Guarantee** — If the system doesn't generate at least 15 booked trial passes in the first 60 days, we work for free until it does. |
| **4. Scarcity / Urgency** | None | **1-Club-Per-Region Exclusivity + Pre-Season Window** — Sprintz partners with only **one** combat sports academy in Alameda County (either UWC or a competitor like Smash/One World). |
| **6. Price & Structure** | "$3,500 upfront + $1,000/mo" | **Milestone-Split Build** ($1,500 to start, $1,500 only after all 10 geo-pages + SMS concierge go live) OR **Low-Upfront Growth Partner Plan** ($950 setup + $495/mo). |

---

### 8. Complete B2B Bonus Stack (Closing Coach Naweed's Exact Objections)

Each bonus directly neutralizes a specific objection Naweed or Karim will have during the sales conversation:

1. **Objection: *"We already use WrestlingIQ for registrations and payments; we don't want to switch systems."***
   * **Bonus 1: Zero-Disruption WrestlingIQ Integration Bridge ($750 Value)**
   * *What it is:* We keep WrestlingIQ (`Team 513`) untouched for waivers and recurring billing. Our native Trial Pass modal captures the parent's name, child's age, and phone number *first*, sends them an automated text message from Coach Naweed, and seamlessly forwards them into their exact WrestlingIQ session.
2. **Objection: *"We don't have time to write content for 10 city pages or film videos."***
   * **Bonus 2: 10 Pre-Written Tri-City & East Bay Landing Pages ($1,500 Value)**
   * *What it is:* Already researched and blueprinted for Fremont, Union City (James Logan feeder), Newark, Castro Valley, and Hayward across Youth Wrestling, Adult Wrestling, Wrestle-Jitsu, and Combat Sambo. You approve the pages in one 15-minute review; we publish them.
3. **Objection: *"How fast do we see new faces on the mat while SEO ramps up?"***
   * **Bonus 3: Past Drop-In & Inquiry Reactivation Campaign ($500 Value)**
   * *What it is:* In Week 1, we run a polite, personal SMS/email reactivation sequence to every past $15 drop-in and old Formspree inquiry in your history, inviting them back for the new season—typically recovering 4–8 recurring members in the first 10 days before SEO even kicks in.
4. **Objection: *"Why are parents finding karate studios on ChatGPT and Google Maps instead of us?"***
   * **Bonus 4: Google Business Profile & AI-Search (`llms.txt`) Authority Lock ($600 Value)**
   * *What it is:* We fix your Google Maps listing mismatch ("United Wrestling Clubs" → "United Wrestling Club", HTTP → HTTPS), inject Olympic pedigree schema for Karim and Naweed, and install `/llms.txt` so ChatGPT, Perplexity, and Google AI Overviews cite UWC as the #1 Olympic wrestling room in the East Bay.

---

### 9. Value Equation Comparison (Before vs. After Offer Redesign)

| Value Lever | Before (Raw Website / Generic Agency) | After (Reconstructed Offer Architecture) | Score Lift |
| :--- | :--- | :--- | :--- |
| **Dream Outcome** | "Website fixes + SEO pages" (B2B) / "2 days a week mat access" (B2C) | "30+ new East Bay athletes on the mat without answering phones during practice" (B2B) / "Olympian-coached confidence & CIF varsity readiness" (B2C) | **4 → 9** |
| **Perceived Likelihood** | Unproven generic claims; empty HTML shell to crawlers | Backed by live OpenSEO keyword data (#6–#17 rankings ready to jump to Top 3), 5.0★ GBP rating, and 60-day trial-booking guarantee | **5 → 9** |
| **Time Delay** | 3–6 months waiting for organic SEO | **Week 1 win:** Past drop-in SMS reactivation + technical prerender fix + GBP tune-up live in 7 days | **5 → 9** |
| **Effort & Sacrifice** | High parent checkout friction; coaches manually replying to emails | **100% Done-For-You** for coaches; 15-second 1-click SMS trial pass for parents | **5 → 9** |

---

## 10. Recommended Next Execution Steps

1. **Deploy the Rebuilt `/pricing` (Route #14) & `/register` (Route #16) Funnel:**
   * Wire primary CTA buttons across `/pricing` to open the Native 1-Click Trial Pass Modal (`/register`) with lead capture and opt-out recording release.
   * Provide express direct checkout links to all 8 live WrestlingIQ Team 513 session IDs (`#6327`, `#2664`, `#1087`, `#4981`, `#2286`, `#3574`, `#1084`, `#9536`).
   * Anchor all program detail links to the locked routes: [`/classes/kid-wrestling`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L75), [`/classes/youth-wrestling`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L76), [`/classes/adult-wrestling`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L78), and [`/classes/womens-self-defense`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L84), with direct schedule verification at [`/schedule`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/website_rebuild_spec.md#L87).
   * Maintain consistent address (`30139 Industrial Pkwy SW Ste C, Hayward, CA 94544`) and phone line (`(510) 303-4869`).
2. **Pitch the Women's Self-Defense Partnership to Coach Naweed:**
   * Introduce the instructor trio (**Louisa**, **Neha's Sister**, **Ja Shia**) and propose the kickoff clinic at the UWC Holiday Mixer, backed by the $35–$50 weekend workshop and $149–$199 6-week cohort structure.
3. **Use the B2B Offer in Outbound Pitch to Coach Naweed:**
   * Lead with the **Tri-City Market Vacuum** finding (0 wrestling clubs in Fremont/Newark) and offer the **30-Day East Bay Mat-Fill System** with the 1-Club-Per-Region Exclusivity close.
