---
type: dossier
status: current
group: market
owner: "Rodney Lewis (Sprintz)"
date: 2026-10-30
last_reviewed: 2026-10-30
sources: ["https://www.themat.com", "https://www.themat.com/membership/athletes/find-a-club", "https://www.usawmembership.com", "https://www.usawmembership.com/state_clubs/CA", "https://www.unitedwrestlingclub.com/", "http://www.ca-usaw.org/", "https://www.scwaywrestling.org/", "https://biz.yelp.com", "https://biz.yelp.com/signup", "https://www.unitedwrestlingclub.com", "https://www.calgrappler.com", "https://www.berkeleyparentsnetwork.org/recommend/classes/wrestling", "https://www.berkeleyparentsnetwork.org/subscribe", "https://www.thecaliforniawrestler.com"]
shard_of: "discovery/market/competitors/groupA_directories_and_governing_bodies.md"
part: "2 of 3"
---

> Part 2 of 3 of [groupA_directories_and_governing_bodies](../groupA_directories_and_governing_bodies.md). Text is verbatim from the original; only links were rewritten.

## 3. Deep-Dive Action Playbooks for Each of the Top 5

---

### Gatekeeper 1: USA Wrestling (`themat.com` Marketing Site + `usawmembership.com` Backend Portal)

* **Public Marketing Website:** `https://www.themat.com` (Public *"Find a Club"* Locator: `https://www.themat.com/membership/athletes/find-a-club`)
* **Backend Login / Charter Portal:** `https://www.usawmembership.com` (Root is a member login portal; Google also indexes its public state database view at `https://www.usawmembership.com/state_clubs/CA`)
* **Organic Search Authority (OpenSEO):**
  * `themat.com`: **382,141 monthly visits** · **11,704 ranked keywords**
  * `usawmembership.com`: **89,681 monthly visits** · **6,980 ranked keywords**
* **Target SERP Positions Owned:**
  * **#2 Organic** for `"best wrestling clubs in california"` (`usawmembership.com/state_clubs/CA`)
  * **#4 Organic** for `"wrestling clubs bay area"` (`themat.com/membership/athletes/find-a-club`)
  * **#6 & #11 Organic** for `"wrestling clubs bay area"` / `"california wrestling clubs"` (`usawmembership.com/state_clubs/CA`)
* **Governing Body Role:** National Governing Body (NGB) for the sport of wrestling in the United States under the United States Olympic & Paralympic Committee (USOPC).

```
   ┌────────────────────────────────────────────────────────────────────────┐
   │ USA Wrestling Dual-Domain Architecture (One Admin Action → Two SERPs)  │
   │                                                                        │
   │  [Admin Login at usawmembership.com]                                   │
   │            │                                                           │
   │            ├──► Populates Public Locator on Marketing Site:            │
   │            │    https://www.themat.com/membership/athletes/find-a-club │
   │            │    (Ranks #4 Organic Bay Area)                            │
   │            │                                                           │
   │            └──► Populates Indexed State Club Table:                    │
   │                 https://www.usawmembership.com/state_clubs/CA          │
   │                 (Ranks #2 Organic California / #6 Bay Area)            │
   └────────────────────────────────────────────────────────────────────────┘
```

#### Current UWC Status & Diagnosis
* **Current Status:** Not actively resolving in the public `themat.com` geo-locator for Hayward/Fremont zip codes (`94544` / `94538`) or the `usawmembership.com/state_clubs/CA` public table.
* **Root Cause:** While UWC operates as a legitimate wrestling facility and trains athletes for USAW and SCWAY sanctioned tournaments, the annual club charter inside the `usawmembership.com` login portal either has *"Publish to National Club Locator / State Directory"* unchecked, has lapsed, or is registered without the `30139 Industrial Pkwy SW` facility address.
* **Strategic Consequence:** Because one backend setting inside `usawmembership.com` feeds **both** `themat.com` (#4 Bay Area) and `usawmembership.com/state_clubs/CA` (#2 California), fixing this single toggle immediately places UWC inside two of the top 6 organic search results in Northern California.

#### Step-by-Step Claim & Configuration Action Plan
1. **Log into the USA Wrestling Backend Portal (`usawmembership.com`):**
   * Log into Coach Naweed Zemaryalai's administrative account at `https://www.usawmembership.com`.
2. **Verify / Renew Annual Club Charter:**
   * Under *My Clubs*, confirm or renew the **USA Wrestling Club Charter** ($150–$175 annual fee) with **Naweed Zemaryalai** designated as Club Director / Head Coach.
3. **Toggle Public Directory Visibility (Feeds Both Domains):**
   * Under Club Profile Settings, enable **"Publish to National Club Locator (`themat.com`)"** and **"Allow Club Contact Information to appear on State Association public directory (`usawmembership.com/state_clubs/CA`)"**.
   * Exact Facility Address: `30139 Industrial Pkwy SW Ste C, Hayward, CA 94544`.
   * Primary Contact Phone: `(510) 303-4869`.
   * Official Web Link: `https://www.unitedwrestlingclub.com/`.

#### Exact Profile Copy & Metadata Template
```text
Club Name: United Wrestling Club (UWC)
Physical Facility: 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544
Primary Phone: (510) 303-4869
Website: https://www.unitedwrestlingclub.com/
Contact Email: unitedwrestlingclub@gmail.com
Club Director / Head Coach: Naweed Zemaryalai (Chabot College Coach, SF State Kinesiology)
Founder & Technical Advisor: Karim Zemaryalai (1980 Olympian, Dagestan Ali Aliyev Medalist)
Assistant Coaches: Rashad Rahimi (Olympic Qualifier, Asian Games Silver Medalist), Sandeep Singh Gosal (Fresno State / SF State, James Logan HS)
Disciplines Offered: Folkstyle, Freestyle, Greco-Roman, Combat Sambo, Wrestle-Jitsu
Programs: Youth Pre-K to 5th Grade (Ages 4–11), Middle & High School (Grades 6–12 / CIF Prep), Adult & Collegiate (18+)
Schedule: Monday through Saturday year-round (6 days/week)
```

#### 2027 Co-Ranking & Displacing Strategy
* **Schema Alignment:** On `unitedwrestlingclub.com`, embed JSON-LD `SportsClub` markup linking to the public marketing site `https://www.themat.com`:
  ```json
  "memberOf": {
    "@type": "SportsOrganization",
    "name": "USA Wrestling",
    "url": "https://www.themat.com"
  }
  ```

---

### Gatekeeper 2: California USA Wrestling (`ca-usaw.org`) & SCWAY (`scwaywrestling.org`)

* **Primary Domains:** `ca-usaw.org` (State Olympic Freestyle/Greco Association) & `scwaywrestling.org` (State of California Wrestling Alliance for Youth — Folkstyle)
* **Direct URLs:** `http://www.ca-usaw.org/` and `https://www.scwaywrestling.org/`
* **Organic Search Authority (OpenSEO):**
  * `ca-usaw.org`: **6,709 monthly visits** · **662 ranked keywords**
  * `scwaywrestling.org`: **121 monthly visits** · **28 ranked keywords**
* **State & Zone Leadership:**
  * **CA-USAW State Director:** Duane Morgan (`duanemorgan6@icloud.com` | 831-595-4338) · **Membership Director:** Rob Valerio (`calusarob@aol.com` | 559-275-9478)
  * **SCWAY Zone 3 (Bay Area, Salinas & Gilroy):** Governs all Bay Area youth scholastic Folkstyle qualifiers and novice/open tournaments.

#### Step-by-Step State Association & SCWAY Zone 3 Integration
1. **CA-USAW Bay Area Section Verification:**
   * Confirm with CA-USAW Membership Director Rob Valerio that United Wrestling Club is listed under the **Bay Area / Central Coast Section** on `ca-usaw.org`.
2. **SCWAY Zone 3 Club Charter (`scwaywrestling.org`):**
   * Register UWC in **SCWAY Zone 3 (Bay Area)** ($100–$150/yr, renews Sept 1).
   * **Direct Offer Bonus for UWC Parents:** When UWC is an active SCWAY Zone 3 club, UWC youth wrestlers pay only **$30 for their annual SCWAY card** instead of the $50 unattached athlete fee—saving parents $20 per child and placing "United Wrestling Club (Hayward)" directly in the SCWAY registration dropdown.

---

### Gatekeeper 3: Yelp Local Category Directories (`yelp.com`)

* **Primary Domain:** `yelp.com`
* **Direct Portal URL:** `https://biz.yelp.com`
* **Organic Search Authority (OpenSEO):** **100M+ monthly visits**; commands **Positions #1–#3 Organic** for virtually every `"Top 10 Best Wrestling Clubs in [City]"` and `"Top 10 Kids Martial Arts [City]"` query in Northern California.
* **Ecosystem Role:** In addition to its own web and app search, **Yelp is the primary native data supplier for Apple Maps, Apple Intelligence, Siri voice search, and DuckDuckGo**.

```
   ┌────────────────────────────────────────────────────────────────────────┐
   │ Yelp Local Aggregator Ecosystem Impact                                  │
   │                                                                        │
   │  [biz.yelp.com Listing] ──► [yelp.com Top 10 Best Listicles (#1 SERP)] │
   │            │                                                           │
   │            ├──► [Apple Maps Local POI Pin]                             │
   │            │                                                           │
   │            ├──► [Siri Voice Search: "Find wrestling gyms near me"]     │
   │            │                                                           │
   │            └──► [Apple Intelligence / Siri Knowledge Graph]            │
   └────────────────────────────────────────────────────────────────────────┘
```

#### Current UWC Status & Diagnosis: A Critical Competitive Blind Spot
* **Current Status: COMPLETELY UNCLAIMED / NO ACTIVE YELP LISTING.**
* **The Blind Spot:** While UWC has an exceptional 5.0★ Google profile with 42 reviews and Birdeye syndication, **United Wrestling Club does not have an active, claimed profile on Yelp at 30139 Industrial Pkwy SW.**
* **The Revenue Cost:**
  1. Whenever an iPhone user asks Siri *"Find wrestling clubs near me"* or searches Apple Maps in Hayward, Fremont, or Union City, Apple cannot locate UWC. Instead, Apple routes the user to commercial MMA gyms like *Mindset Martial Arts* or *Smash Gyms*.
  2. For the high-intent query `"Top 10 Best Wrestling Clubs in Hayward, CA"` (which ranks #1 on Google Organic), Yelp displays zero pure wrestling gyms and lists boxing/BJJ studios instead. UWC is losing an estimated 30–50 qualified prospective leads per month purely due to this single absence.

#### Step-by-Step Yelp Claiming & Optimization Walkthrough
1. **Initiate Business Creation:**
   * Go to `https://biz.yelp.com/signup`.
   * Search for "United Wrestling Club" at "30139 Industrial Pkwy SW Ste C, Hayward, CA 94544".
   * Click **"Add your business to Yelp"**.
2. **Category Selection (Critical for Search Surfacing):**
   * Primary Category: **Martial Arts**
   * Secondary Category: **Gyms / Physical Fitness**
   * Tertiary Category: **Sports Clubs** (or **Boxing** / **Trainers**)
   * *Note:* Yelp does not have an isolated root category named "Wrestling", so selecting **Martial Arts** while embedding "Wrestling Club" in the business title and specialty description is the proven method to dominate Yelp's internal search algorithm.
3. **Phone Verification:**
   * Complete automated PIN verification via UWC's primary phone line: `(510) 303-4869`.
4. **Visual Asset Uploads (Minimum 25 High-Res Photos):**
   * 5 photos of clean, sanitized mat surfaces and facility interior.
   * 8 photos of youth wrestlers drilling Folkstyle/Freestyle techniques with coaches.
   * 5 photos of adult grapple/Wrestle-Jitsu/Combat Sambo sparring.
   * 3 photos of head coaches Naweed Zemaryalai and Karim Zemaryalai (with Olympic/international credentials).
   * 4 photos of exterior signage, entrance, and ample parking lot at 30139 Industrial Pkwy SW.

#### Exact Yelp Profile Copy & Architecture
```text
Business Name: United Wrestling Club
Address: 30139 Industrial Pkwy SW, Ste C, Hayward, CA 94544
Phone: (510) 303-4869
Website: https://www.unitedwrestlingclub.com
Categories: Martial Arts, Gyms, Sports Clubs

Specialties (From the Business):
United Wrestling Club (UWC) is the premier Olympic Folkstyle, Freestyle, and Greco-Roman wrestling academy in the East Bay, serving Hayward, Union City, Fremont, Newark, and Castro Valley. 

Founded by 1980 Olympian and Ali Aliyev International Tournament Medalist Karim Zemaryalai, and led by Chabot College coach Naweed Zemaryalai, UWC provides elite, year-round athletic development for all ages:
• Youth Wrestling (Pre-K to 5th Grade / Ages 4–11): Coordination, discipline, stance, takedowns, and anti-bullying confidence.
• Middle & High School (Grades 6–12): Advanced collegiate chaining, hand-fighting, mat returns, and CIF State tournament preparation.
• Adult Wrestling & Wrestle-Jitsu (18+): Authentic collegiate takedowns, Combat Sambo, and top-control grappling for adults, former wrestlers, and BJJ players wanting superior takedown skills.
• Boxing & Conditioning: Technical striking and high-intensity metabolic conditioning.

We operate 6 days a week with 100% transparent pricing ($89.99–$150/mo, no long-term contracts, $15 drop-in). First-time athletes can book a free introductory assessment session!

History (Established in 2020):
Founded by Olympic qualifier Karim Zemaryalai to bring authentic international Dagestani-style wrestling technique, rigorous conditioning, and character development to Northern California youth and competitive grapplers.

Meet the Manager / Head Coach:
Coach Naweed Zemaryalai is a former collegiate wrestler at Chabot College and San Francisco State University (B.S. in Kinesiology) and current wrestling coach at Chabot College.
```

#### Review Generation Campaign (The 14-Day Seed)
* Never buy reviews or directly solicit Yelp reviews via email blast (which triggers Yelp's aggressive review filter).
* **Ethical Playbook:** Identify 10–15 existing UWC parents or adult grapplers who are already active Yelp users or Yelp Elite squad members. Place a subtle "Find Us on Yelp" window decal at the check-in desk and add a Yelp footer link on `unitedwrestlingclub.com`. When athletes share positive feedback in person, verbally say: *"We just launched our official Yelp page—if you use Yelp, we'd love your honest feedback on our coaching!"*

---

### Gatekeeper 4: CalGrappler (`calgrappler.com`) & Regional Wrestling Portals (`ca-usaw.org` / `scway.org`)

* **Primary Domain:** `calgrappler.com`
* **Direct URL:** `https://www.calgrappler.com`
* **Organic Search Authority (OpenSEO):** **13,933 monthly visits** · **819 ranked keywords**
* **SERP Positions Owned:** **#12 Organic** for `"best wrestling clubs in california"`, #1 authority destination for all California High School State Rankings, Section Rankings (NCS, CCS, SJS), and Community College (CCCAA) wrestling coverage.
* **Associated Regional Portals:**
  * California USA Wrestling: `http://www.ca-usaw.org/`
  * SCWAY Youth Wrestling: `https://www.scwaywrestling.org/` (Zone 3: Bay Area)

```
   ┌────────────────────────────────────────────────────────────────────────┐
   │ CalGrappler Authority & High School Pipeline Ecosystem                │
   │                                                                        │
   │  [CIF State High School Wrestlers / Parents / Coaches]                  │
   │            │                                                           │
   │            ▼                                                           │
   │  [calgrappler.com State Rankings & Team Directory]                     │
   │            │                                                           │
   │            ├──► [Dofollow Editorial Backlink to unitedwrestlingclub.com]│
   │            │                                                           │
   │            └──► [Direct Funnel to UWC High School Off-Season Program]  │
   └────────────────────────────────────────────────────────────────────────┘
```

#### Current UWC Status & Diagnosis
* **Current Status:** CalGrappler maintains an authoritative **"CA Team Websites & Club Directory"** linking to high school and private wrestling club programs throughout California. United Wrestling Club is currently missing from this directory.
* **The Opportunity:** CalGrappler is the daily reading material of every serious high school wrestling coach, CIF state medalist, and wrestling parent from Redding to San Diego. A single contextual link from CalGrappler carries immense topical relevance in Google's athletic entity graph, directly proving to search engines that UWC is a legitimate, recognized California wrestling institution.

#### Step-by-Step Submission & Relationship Outreach Playbook
1. **Submission to CalGrappler "CA Team Websites" Directory:**
   * Send an editorial submission email to the CalGrappler editorial team (`calgrappler@gmail.com` / webmaster contact):
     ```text
     Subject: Add United Wrestling Club (Hayward / East Bay) to CA Club Directory

     Hi CalGrappler Team,

     Could you please add United Wrestling Club to the California Club Directory page under North Coast Section / Bay Area?

     Club Name: United Wrestling Club (UWC)
     Location: Hayward, CA (serving East Bay / Alameda County)
     Website: https://www.unitedwrestlingclub.com/
     Head Coach: Naweed Zemaryalai (Chabot College Coach / SF State)
     Founder: Karim Zemaryalai (1980 Olympian)
     Focus: Year-round Folkstyle, Freestyle, and Greco-Roman training for youth, middle school, high school CIF competitors, and college/adults.

     Thanks for all you do for California wrestling!
     Coach Naweed Zemaryalai
     ```
2. **Leverage Coach Naweed's Chabot College Connection:**
   * CalGrappler regularly publishes CCCAA (California Community College Athletic Association) wrestling rankings and dual meet results.
   * By having Coach Naweed actively submit Chabot College match results and dual recaps to CalGrappler, UWC establishes a direct editorial relationship with the site administrator.
3. **SCWAY Zone 3 Web Portal Listing:**
   * Ensure UWC is selectable in the dropdown menu on `scwaywrestling.org` so that when youth parents in Zone 3 (Bay Area) register for SCWAY tournaments, UWC appears as an official club choice.

---

### Gatekeeper 5: The California Wrestler (`thecaliforniawrestler.com`) & Berkeley Parents Network (`berkeleyparentsnetwork.org`)

* **Primary Domains:** `berkeleyparentsnetwork.org` (BPN) & `thecaliforniawrestler.com` (TCW)
* **Direct URLs:**
  * BPN Wrestling Category: `https://www.berkeleyparentsnetwork.org/recommend/classes/wrestling`
  * BPN Subscription Portal: `https://www.berkeleyparentsnetwork.org/subscribe`
  * The California Wrestler: `https://www.thecaliforniawrestler.com`
* **Organic Search Authority (OpenSEO):**
  * **Berkeley Parents Network:** **292,732 monthly visits** · **61,767 ranked keywords** (Ranks **#6 Organic** for `"youth wrestling clubs bay area"`)
  * **The California Wrestler:** **8,337 monthly visits** · **388 ranked keywords** (Ranks **#5 Organic** for `"best wrestling clubs in california"`)

```
   ┌────────────────────────────────────────────────────────────────────────┐
   │ Berkeley Parents Network (BPN) High-Income Funnel                      │
   │                                                                        │
   │  [High-Income East Bay Parents in Berkeley, Oakland, Alameda, CV]     │
   │            │                                                           │
   │            ▼                                                           │
   │  [Search: "Youth Wrestling / Martial Arts Classes Bay Area"]           │
   │            │                                                           │
   │            ▼                                                           │
   │  [BPN Ranks #6 Organic: /recommend/classes/wrestling]                  │
   │            │                                                           │
   │            ├── Currently lists: Pacific Ring Sports (General Boxing)    │
   │            │                                                           │
   │            └── ACTION: Claim UWC Business Page + Seed 3 Parent Reviews │
   │                      ▼                                                 │
   │            [Captures 100% of High-LTV Youth Registrations]            │
   └────────────────────────────────────────────────────────────────────────┘
```

#### Current UWC Status & Diagnosis: The East Bay Parent Vacuum
* **Current Status:** UWC is **completely absent from Berkeley Parents Network**.
* **The High-Income Parent Dynamic:**
  * Berkeley Parents Network is the most trusted, heavily trafficked parenting and youth sports directory in the entire East Bay, covering Alameda and Contra Costa counties.
  * When parents in Oakland, Berkeley, Alameda, San Leandro, and Castro Valley search for athletic programs, martial arts, or youth wrestling, they trust BPN recommendations above traditional Google ads.
  * Currently, BPN's `/recommend/classes/wrestling` category contains zero pure wrestling clubs—only general fitness/boxing gyms (like Pacific Ring Sports) and discussions about childhood rough-and-tumble play.
  * **UWC has an immediate open lane to become the #1 recommended youth wrestling program on BPN.**

#### Step-by-Step BPN Infiltration & Listing Walkthrough
1. **Acquire a BPN Business Subscription:**
   * Navigate to `https://www.berkeleyparentsnetwork.org/subscribe`.
   * Purchase a **Community Business Subscription** ($45–$75/year or tiered listing).
   * This authorizes UWC to have an official verified organization profile, post class announcements, and respond to parent inquiries.
2. **Establish the UWC Profile in the BPN Directory:**
   * Category: **Classes & Activities > Martial Arts, Boxing & Wrestling**
   * Link: `https://www.unitedwrestlingclub.com/`
   * Target Age Group: Pre-K through 12th Grade (Ages 4–18).
3. **Mobilize 3 Existing East Bay Parents for Unsolicited Recommendations:**
   * Identify 3 current UWC parents residing in Alameda County (Castro Valley, Hayward, Oakland, or San Leandro) who are registered BPN community members.
   * Have them navigate to UWC's new BPN profile and click the green **"Post a review"** button, sharing their authentic experience regarding:
     * Focus on safety, character, and discipline over violence.
     * Cleanliness and hygiene of the Hayward facility.
     * Exceptional patience and pedagogical skill of Coach Naweed and Coach Karim.
     * How their child gained confidence, athleticism, and mental focus.

#### Exact Copy Blueprint for Berkeley Parents Network
```text
Organization Name: United Wrestling Club (Youth Athletic Development)
Facility Location: 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544
Phone: (510) 303-4869
Website: https://www.unitedwrestlingclub.com/
Ages Served: 4–18 (Pre-K through High School)

Program Description for Parents:
United Wrestling Club provides authentic Olympic Folkstyle and Freestyle wrestling instruction in a safe, structured, and family-oriented environment. Unlike commercial martial arts belt-factories that charge hidden testing fees, UWC focuses on real athletic fundamentals: balance, body awareness, core strength, agility, mental discipline, and sportsmanship.

Led by collegiate coach Naweed Zemaryalai (Chabot College / SF State Kinesiology) and 1980 Olympian Karim Zemaryalai, our youth curriculum is tailored specifically for growing bodies:
• Little Champions (Ages 4–7 / Pre-K – 1st Grade): Motor coordination, spatial discipline, gymnastic tumbling, and basic wrestling games.
• Junior Grapplers (Ages 8–11 / 2nd – 5th Grade): Stance, motion, takedown mechanics, escapes, and anti-bullying self-confidence.
• Scholastic Champions (Middle & High School): Off-season conditioning, collegiate techniques, and tournament competition.

Tuition is month-to-month ($89.99/mo for 2 days/wk; $139.99/mo for 4 days/wk) with zero long-term contracts. Free trial assessment sessions available for new families.
```

---
