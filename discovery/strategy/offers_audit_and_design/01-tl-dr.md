---
type: dossier
status: current
group: strategy
owner: "Sprintz Growth OS (`offers` Discovery Phase)"
date: 2026-10-30
last_reviewed: 2026-10-30
sources: ["discovery/archive/snapshots/live_site_content/pricing.json", "discovery/site/website_rebuild_spec.md", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=6327&show_registration=true&team_id=513", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=2664&show_registration=true&team_id=513", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=1087&show_registration=true&team_id=513", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=4981&show_registration=true&team_id=513", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=2286&show_registration=true&team_id=513", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=3574&show_registration=true&team_id=513", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=1084&show_registration=true&team_id=513", "https://www.wrestlingiq.com/users/sign_up?paid_session_id=9536&show_registration=true&team_id=513"]
shard_of: "discovery/strategy/offers_audit_and_design.md"
part: "1 of 3"
---

> Part 1 of 3 of [offers_audit_and_design](../offers_audit_and_design.md). Text is verbatim from the original; only links were rewritten.


# Offer Design & Value Architecture: United Wrestling Club (UWC)

> **Client:** Naweed Zemaryalai & Karim Zemaryalai  
> **Brand:** United Wrestling Club (`unitedwrestlingclub.com`)  
> **Address:** `30139 Industrial Pkwy SW Ste C, Hayward, CA 94544` | **Phone:** `(510) 303-4869`  
> **Prepared By:** Sprintz Growth OS (`offers` Discovery Phase)  
> **Date:** October 30, 2026 (Updated for 32-Route Rebuild Architecture)  

---

## TL;DR
- UWC's pricing ($89.99 to $150 per month) sits 35% to 45% below typical Bay Area BJJ and MMA academies ($225 to $275 per month).
- The digital offer converts poorly because it reads as a raw utility checkout, not a transformation offer; the value-equation baseline is 19 of 40.
- Trial messaging conflicts across the homepage ($15 3-day trial), /pricing ($15 drop-in), and the FAQ ('free trial sessions').
- The proposed entry is 'The Olympic Roots 2-Class Assessment Pass' with an express $15 3-day option, routed to the /register modal.
- Part II proposes a B2B offer, 'The 30-Day Full-Mat Growth Engine', packaging Sprintz's SEO, programmatic pages, llms.txt, and SMS automation for the club.

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

Below is the verified inventory of all **8 live WrestlingIQ Team 513 session IDs** extracted from [`discovery/archive/snapshots/live_site_content/pricing.json`](../../archive/snapshots/live_site_content/pricing.json):

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
* **2. Program Detail Link:** [`/classes/kid-wrestling`](../../site/website_rebuild_spec.md#L75) (Route #4)
* **3. Schedule Verification Link:** [`/schedule`](../../site/website_rebuild_spec.md#L87) (Route #13)
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
* **2. Program Detail Link:** [`/classes/youth-wrestling`](../../site/website_rebuild_spec.md#L76) (Route #5)
* **3. Schedule Verification Link:** [`/schedule`](../../site/website_rebuild_spec.md#L87) (Route #13)
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
* **2. Program Detail Links:** [`/classes/adult-wrestling`](../../site/website_rebuild_spec.md#L78) (Route #6) · [`/classes/nogi-jiu-jitsu`](../../site/website_rebuild_spec.md#L79) (Route #7) · [`/classes/gi-jiu-jitsu`](../../site/website_rebuild_spec.md#L80) (Route #8) · [`/classes/sambo`](../../site/website_rebuild_spec.md#L81) (Route #9) · [`/classes/boxing-fundamentals`](../../site/website_rebuild_spec.md#L82) (Route #10) · [`/classes/open-mat`](../../site/website_rebuild_spec.md#L85) (Route #11)
* **3. Schedule Verification Link:** [`/schedule`](../../site/website_rebuild_spec.md#L87) (Route #13)
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
* **2. Program Detail Link:** [`/classes/womens-self-defense`](../../site/website_rebuild_spec.md#L84) (Route #12 — `[✨ NEW]`)
* **3. Schedule Verification Link:** [`/schedule`](../../site/website_rebuild_spec.md#L87) (Route #13)
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
