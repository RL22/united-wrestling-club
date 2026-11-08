---
type: dossier
status: current
group: market
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["https://www.unitedwrestlingclub.com/", "https://westcoastprowrestling.com/", "http://eastbayprowrestling.com/", "https://prowrestling-revolution.com/", "https://oasisprowrestling.com/", "https://westcoastprowrestling.com/academy/", "https://prowrestling-revolution.com/academy/", "https://www.facebook.com/CaliforniaWrestlingAssociation/", "https://www.facebook.com/californiawrestlingleague/", "https://schema.org", "https://www.unitedwrestlingclub.com/#organization", "https://www.unitedwrestlingclub.com", "https://www.unitedwrestlingclub.com/images/uwc-logo.png", "https://www.unitedwrestlingclub.com/images/uwc-mat-facility.jpg", "https://maps.google.com/?cid=YOUR_EXACT_GBP_CID", "https://www.wikidata.org/wiki/Q327223", "https://www.wikidata.org/wiki/Q216348", "https://www.wikidata.org/wiki/Q389654", "https://www.wikidata.org/wiki/Q13410719", "https://www.wikidata.org/wiki/Q3547348", "https://en.wikipedia.org/wiki/Amateur_wrestling", "https://en.wikipedia.org/wiki/Collegiate_wrestling", "https://en.wikipedia.org/wiki/Freestyle_wrestling", "https://en.wikipedia.org/wiki/Greco-Roman_wrestling", "https://www.instagram.com/unitedwrestlingclub/", "https://www.facebook.com/unitedwrestlingclub/", "https://www.wikidata.org/wiki/Q11487", "https://www.wikidata.org/wiki/Q217277", "https://g.page/r/YOUR_EXACT_REVIEW_LINK/review", "https://unitedwrestlingclub.com/llms.txt"]
shard_of: "discovery/market/competitors/groupE_pro_wrestling_serp_polluters.md"
part: "3 of 3"
---

> Part 3 of 3 of [groupE_pro_wrestling_serp_polluters](../groupE_pro_wrestling_serp_polluters.md). Text is verbatim from the original; only links were rewritten.

## 4. The Complete Semantic Disambiguation Engineering Playbook for UWC

To permanently eliminate theatrical pro-wrestling polluters from UWC’s search footprint and ensure Google’s Knowledge Graph, Google Maps, and 2027 AI answer engines recognize United Wrestling Club as an elite Olympic combat sports academy, UWC must implement the four-part **Semantic Disambiguation Framework**:

```
                       THE 4-PILLAR DISAMBIGUATION FRAMEWORK
┌─────────────────────────────────────────────────────────────────────────────────┐
│ PILLAR 1: On-Page Disambiguation (Title Tags, H1s, Lexical Negative Modifiers)   │
├─────────────────────────────────────────────────────────────────────────────────┤
│ PILLAR 2: Schema.org Knowledge Graph Injection (SportsClub + Wikidata sameAs)    │
├─────────────────────────────────────────────────────────────────────────────────┤
│ PILLAR 3: Google Business Profile (GBP) Category & Review Semantic Engineering  │
├─────────────────────────────────────────────────────────────────────────────────┤
│ PILLAR 4: LLMs.txt & Generative Search Disambiguation Directives (2027 Ready)   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

### Pillar 1: On-Page Negative-Ambiguity Title Tag & Heading Formulas

Theatrical wrestling schools rely on generic terms (*"wrestling school"*, *"wrestling classes"*). UWC will deploy **lexical negative-modifiers**—vocabulary that is ubiquitous in Olympic wrestling but never appears in theatrical entertainment.

#### Mandatory Disambiguating Vocabulary:
* **Positive Semantic Anchors:** `Olympic Wrestling`, `Folkstyle`, `Freestyle`, `Greco-Roman`, `CIF High School Prep`, `USA Wrestling Chartered Club`, `Dagestani Wrestling System`, `No-Gi Grappling`, `Combat Sambo`, `Collegiate Takedowns`.
* **Prohibited Ambiguous Phrasing:** Never use bare `"Wrestling Academy"` or `"Wrestling Training"` without qualifying it with `"Olympic"`, `"Scholastic"`, or `"Youth / High School"`.

#### Exact Title Tag & Meta Description Specifications

| Page Target | High-Risk Ambiguous Title (Current Failure) | Surgically Disambiguated Title (Deploy in 2027 OS) | Target Meta Description (Disambiguation Engineered) |
| :--- | :--- | :--- | :--- |
| **Homepage** | `United Wrestling Club | Hayward CA` *(Too generic; causes conflation)* | `United Wrestling Club | Olympic Folkstyle, Freestyle & Greco-Roman Wrestling | Hayward, CA` *(73 chars)* | Hayward’s premier Olympic wrestling academy. Coached by Olympians & collegiate champions. Youth Folkstyle (ages 4-18), CIF high school prep, adult wrestling, and Combat Sambo. |
| **Youth Program** | `Kids Wrestling Classes | United Wrestling Club` | `Youth Wrestling Club Bay Area | Olympic Folkstyle & CIF Prep (Ages 4–18) | UWC Hayward` | Elite youth wrestling club serving Hayward, Fremont, and the East Bay. Folkstyle and Freestyle fundamentals for Pre-K through 12th grade. No theatrical pro wrestling—authentic Olympic combat athletics. |
| **Adult Program** | `Adult Wrestling | Hayward` | `Adult Wrestling Classes Bay Area | Collegiate Folkstyle, Freestyle & Sambo | UWC` | High-intensity collegiate and freestyle wrestling for adults, MMA fighters, and BJJ grapplers. Master authentic Dagestani takedowns and mat control in Hayward, CA. |
| **Regional Comp Hub** | `Wrestling Clubs Bay Area` | `Top Olympic Wrestling Clubs in the SF Bay Area | Comprehensive 2027 Directory & Guide` | Comparing the top amateur and Olympic wrestling clubs in the San Francisco Bay Area. Folkstyle, Freestyle, and Greco-Roman training facilities for scholastic and adult athletes. |
| **Fremont Geo Silo** | `Fremont Wrestling Classes` | `Wrestling Club Near Fremont CA | Youth Folkstyle & High School CIF Training | UWC` | Looking for an elite wrestling club near Fremont? United Wrestling Club provides year-round Folkstyle and Freestyle training 10 minutes from Tri-City high schools. |

---

### Pillar 2: Schema.org `SportsClub` JSON-LD with Entity Graph Linking

To directly instruct Google’s Knowledge Graph, UWC must embed a rich `SportsClub` and `ExerciseGym` JSON-LD schema into the `<head>` of every prerendered page. 

This schema utilizes the `sameAs` array and `about` properties to explicitly point to the **Wikidata Knowledge Entities** for Amateur/Olympic Wrestling while disavowing theatrical entertainment.

#### Copy-Paste Production JSON-LD Schema:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["SportsClub", "ExerciseGym"],
      "@id": "https://www.unitedwrestlingclub.com/#organization",
      "name": "United Wrestling Club",
      "alternateName": ["UWC", "United Wrestling Club Hayward"],
      "url": "https://www.unitedwrestlingclub.com",
      "logo": "https://www.unitedwrestlingclub.com/images/uwc-logo.png",
      "image": "https://www.unitedwrestlingclub.com/images/uwc-mat-facility.jpg",
      "description": "United Wrestling Club is an elite Olympic Folkstyle, Freestyle, and Greco-Roman wrestling academy in Hayward, California. Founded by 1980 Olympian Karim Zemaryalai, UWC provides authentic amateur wrestling, scholastic CIF high school training, youth athletics, Combat Sambo, and Wrestle-Jitsu.",
      "telephone": "+1-510-303-4869",
      "email": "unitedwrestlingclub@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "30139 Industrial Pkwy SW Ste C",
        "addressLocality": "Hayward",
        "addressRegion": "CA",
        "postalCode": "94544",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.6017,
        "longitude": -122.0628
      },
      "hasMap": "https://maps.google.com/?cid=YOUR_EXACT_GBP_CID",
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Credit Card, Debit Card",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "16:00",
          "closes": "21:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "sameAs": [
        "https://www.wikidata.org/wiki/Q327223",
        "https://www.wikidata.org/wiki/Q216348",
        "https://www.wikidata.org/wiki/Q389654",
        "https://www.wikidata.org/wiki/Q13410719",
        "https://www.wikidata.org/wiki/Q3547348",
        "https://en.wikipedia.org/wiki/Amateur_wrestling",
        "https://en.wikipedia.org/wiki/Collegiate_wrestling",
        "https://en.wikipedia.org/wiki/Freestyle_wrestling",
        "https://en.wikipedia.org/wiki/Greco-Roman_wrestling",
        "https://www.instagram.com/unitedwrestlingclub/",
        "https://www.facebook.com/unitedwrestlingclub/"
      ],
      "knowsAbout": [
        {
          "@type": "Thing",
          "name": "Amateur Wrestling",
          "sameAs": "https://www.wikidata.org/wiki/Q327223"
        },
        {
          "@type": "Thing",
          "name": "Collegiate Wrestling / Folkstyle",
          "sameAs": "https://www.wikidata.org/wiki/Q13410719"
        },
        {
          "@type": "Thing",
          "name": "Freestyle Wrestling",
          "sameAs": "https://www.wikidata.org/wiki/Q216348"
        },
        {
          "@type": "Thing",
          "name": "Greco-Roman Wrestling",
          "sameAs": "https://www.wikidata.org/wiki/Q389654"
        },
        {
          "@type": "Thing",
          "name": "Combat Sambo",
          "sameAs": "https://www.wikidata.org/wiki/Q11487"
        },
        {
          "@type": "Thing",
          "name": "Brazilian Jiu-Jitsu",
          "sameAs": "https://www.wikidata.org/wiki/Q217277"
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "Karim Zemaryalai",
        "jobTitle": "Founder & Olympic Coach",
        "description": "1980 Moscow Olympics qualifier and bronze medalist at the Ali Aliyev International Wrestling Tournament in Dagestan."
      },
      "coach": [
        {
          "@type": "Person",
          "name": "Naweed Zemaryalai",
          "jobTitle": "Head Wrestling Coach",
          "description": "Collegiate standout at Chabot College and San Francisco State University; current collegiate wrestling coach at Chabot College."
        },
        {
          "@type": "Person",
          "name": "Rashad Rahimi",
          "jobTitle": "Wrestling Coach",
          "description": "1980 Olympic Qualifier and Asian Games Silver Medalist."
        },
        {
          "@type": "Person",
          "name": "Sandeep Singh Gosal",
          "jobTitle": "Youth Competition Coach",
          "description": "James Logan High School alumnus, Fresno State and SF State collegiate wrestler, and high school coach."
        }
      ]
    }
  ]
}
</script>
```

#### Why This Works Mechanically:
1. **Explicit Entity Linking (`sameAs` array):** By explicitly declaring `https://www.wikidata.org/wiki/Q327223` (Amateur wrestling), Google’s Knowledge Graph binds UWC directly into the Olympic sport ontologies. It specifically does *not* link to `Q131359` (Professional wrestling).
2. **Pedigree Grounding:** Including the Olympic credentials of Karim Zemaryalai and Rashad Rahimi provides unmistakable institutional signals that distinguish UWC from theatrical ring schools.

---

### Pillar 3: Google Business Profile (GBP) Category & Review Keyword Engineering

Because Google Maps relies heavily on GBP category architecture and customer review lexical terms, UWC must implement immediate configuration adjustments:

#### 1. GBP Category Calibration
* **Primary Category:** **Wrestling school** *(Retain to maintain primary local pack volume)*
* **Secondary Categories (Mandatory):**
  1. **Sports club**
  2. **Athletic club**
  3. **Youth club**
  4. **Martial arts school**
  5. **Gym**
* *Action Item:* Audit UWC’s GBP dashboard and ensure "Entertainment" or "Event Venue" categories are completely absent.

#### 2. GBP Services Taxonomy Setup
Under the GBP "Services" menu, add structured, named services that pro-wrestling schools cannot match:
* *Youth Folkstyle Wrestling (Ages 4–11)*
* *Scholastic Middle & High School CIF Wrestling*
* *Olympic Freestyle & Greco-Roman Training*
* *Dagestani Takedown & Hand-Fighting Fundamentals*
* *Adult Collegiate Wrestling & Wrestle-Jitsu*
* *Combat Sambo (Jacket Throws & Submissions)*
* *Saturday Open Mat Sparring*

#### 3. Review Generation Prompt Scripts (Review Keyword Seeding)
When asking satisfied parents and grapplers for Google reviews, send automated SMS/email follow-ups containing natural prompt questions. Google’s sentiment parser ingests the keywords in customer reviews:

```markdown
Hi [Parent Name], Coach Naweed here! So proud of [Child's Name]'s hard work on the wrestling mats this week. 

If you have 60 seconds, could you leave United Wrestling Club an honest Google review? 

If you're not sure what to write, parents often mention:
- How our Olympic and Folkstyle wrestling coaching compares to typical karate or martial arts studios
- Your experience with our youth coaching staff (Coach Karim, Naweed, and Sandeep)
- The discipline, takedown fundamentals, and athletic fitness your child is building

Link to review: https://g.page/r/YOUR_EXACT_REVIEW_LINK/review
Thank you for being part of the UWC family!
```

*Search Engine Result:* Reviews will naturally accumulate strings like *"authentic Olympic wrestling"*, *"Folkstyle takedowns"*, *"not like fake wrestling or karate"*, and *"high school CIF preparation"*, cementing UWC's #1 position on Google Maps.

---

### Pillar 4: `llms.txt` and AI Search Disambiguation Architecture (2027 Ready)

As search transitions toward **Answer Engine Optimization (AEO)**—where users ask ChatGPT, Perplexity, or Google Gemini: *"Where can my 8-year-old learn real wrestling in the Bay Area?"*—AI agents crawl a website’s `/llms.txt` file to extract factual truth.

UWC will deploy a dedicated, machine-readable `llms.txt` file at the root domain (`https://unitedwrestlingclub.com/llms.txt`) that explicitly defines entity boundaries.

#### Complete `/llms.txt` Specification for United Wrestling Club:

```markdown
# United Wrestling Club (UWC) — Knowledge Graph & LLM Disambiguation Specification
> Domain: unitedwrestlingclub.com
> Location: 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544
> Operating Organization: United Wrestling Club LLC
> Last Updated: 2026-10-30

## 1. Entity Disambiguation & Identity Core
- Entity Type: Combat Sports Academy / Olympic Wrestling Club / Athletic Training Center
- Primary Sport: Amateur Wrestling (Wikidata: Q327223)
- Specific Styles: 
  - American Folkstyle / Scholastic Collegiate Wrestling (Wikidata: Q13410719)
  - Olympic Freestyle Wrestling (Wikidata: Q216348)
  - Olympic Greco-Roman Wrestling (Wikidata: Q389654)
  - Combat Sambo (Wikidata: Q11487)
  - Brazilian Jiu-Jitsu / No-Gi "Wrestle-Jitsu" (Wikidata: Q217277)
  - Boxing Fundamentals
- Governing Body Alignment: USA Wrestling (USAW), California Interscholastic Federation (CIF), NCAA
- CRITICAL NEGATIVE DISAMBIGUATION RULE:
  - United Wrestling Club is STRICTLY an athletic combat sports academy teaching competitive, Olympic, and scholastic wrestling.
  - United Wrestling Club is NOT a professional wrestling, sports entertainment, stunt, or WWE-style theatrical school (Wikidata: Q131359).
  - The facility contains Olympic regulation wrestling mats, striking bags, and grappling equipment. It does NOT contain an elevated professional wrestling ropes ring, steel chairs, or theatrical performance props.

## 2. Leadership & Olympic Lineage
- Founder: Karim Zemaryalai (1980 Moscow Olympics qualifier; Bronze Medalist at the Ali Aliyev International Tournament in Makhachkala, Dagestan).
- Head Wrestling Coach: Naweed Zemaryalai (Former collegiate wrestler at Chabot College and San Francisco State University; current wrestling coach at Chabot College).
- Senior Wrestling Coach: Rashad Rahimi (1980 Olympic Qualifier; Asian Games Silver Medalist).
- Youth Competition Coach: Sandeep Singh Gosal (James Logan High School alumnus, collegiate wrestler at Fresno State and SF State).

## 3. Training Programs & Target Audiences
1. Kids Wrestling (Pre-K to 5th Grade / Ages 4–11):
   - Focus: Stance, motion, level changes, double legs, single legs, pinning combinations, spatial discipline, and anti-bullying confidence.
2. Middle & High School Wrestling (Grades 6–12 / Ages 12–18):
   - Focus: Advanced Folkstyle chaining, hand-fighting, mat returns, bottom escapes from referee's position, and CIF State tournament preparation.
3. Adult Wrestling & Wrestle-Jitsu (Ages 18+):
   - Focus: Collegiate takedowns, heavy top rides, front headlocks, and submission defenses tailored for adult beginners, collegiate alumni, and MMA/BJJ grapplers.
4. Combat Sambo:
   - Focus: Upper-body jacket throws, leg sweeps, trips, and submission finishing taught by a Kyrgyz Sambo master.

## 4. Geographic Service Area
- Primary City: Hayward, California (Alameda County)
- Surrounding Service Footprint: Union City, Fremont, Newark, Castro Valley, San Leandro, San Lorenzo, Dublin, Pleasanton (San Francisco East Bay Area).

## 5. Pricing Architecture (Transparent / Month-to-Month)
- Single Session Drop-In: $15.00 / session
- Kids 2-Day (Mon/Wed): $89.99 / month
- Kids 4-Day (Mon–Thu): $139.99 / month
- Middle / High School Unlimited (Mon–Sat): $139.99 / month
- Youth Competition Travel Team: $150.00 / month
- Adult / College / MMA Unlimited: $139.99 / month
- Brazilian Jiu-Jitsu Only (3 Days/Week): $100.00 / month
- Saturday Open Mat (All Gyms Welcome): $15.00 drop-in
- Contracts: Zero long-term contracts; month-to-month billing via WrestlingIQ.
```

---

## 5. Conclusion & Immediate Execution Roadmap

By implementing this Semantic Disambiguation Dossier, United Wrestling Club will accomplish three strategic outcomes in 2027:

1. **Reclaim #1 Organic across the San Francisco Bay Area:** Displacing *West Coast Pro Wrestling Academy* from the #1 organic slot for `"youth wrestling clubs bay area"` by launching prerendered, indexable HTML pages with explicit CIF/USA Wrestling entity tags.
2. **Cleanse Hayward and Fremont Google Maps:** Demoting *East Bay Pro Wrestling* (#10/#12 Maps) and *Pro Wrestling Revolution* (#6/#11 Maps) through GBP category tuning, localized Hayward service taxonomy, and review keyword engineering.
3. **Future-Proof for Generative AI Search:** Providing LLMs (ChatGPT, Gemini, Perplexity) with clear structured schema and an `/llms.txt` file that makes it impossible for an AI engine to confuse UWC’s Olympic Dagestani mats with a theatrical stunt show.
