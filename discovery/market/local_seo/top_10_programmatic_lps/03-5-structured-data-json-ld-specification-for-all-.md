---
type: dossier
status: current
group: market
owner: "Rodney Lewis (Sprintz)"
date: 2026-10-30
last_reviewed: 2026-10-30
sources: ["https://united-wrestling-club.vercel.app/register", "https://united-wrestling-club.vercel.app/classes", "https://united-wrestling-club.vercel.app/pricing", "https://united-wrestling-club.vercel.app/about", "https://united-wrestling-club.vercel.app/schedule", "https://united-wrestling-club.vercel.app/faqs", "https://united-wrestling-club.vercel.app/rules", "https://united-wrestling-club.vercel.app/locations/fremont-ca", "https://united-wrestling-club.vercel.app/locations/newark-ca", "https://united-wrestling-club.vercel.app/classes/kid-wrestling", "https://united-wrestling-club.vercel.app/guides/youth-wrestling-vs-martial-arts", "https://united-wrestling-club.vercel.app/classes/nogi-jiu-jitsu", "https://united-wrestling-club.vercel.app/classes/gi-jiu-jitsu", "https://united-wrestling-club.vercel.app/classes/womens-self-defense", "https://united-wrestling-club.vercel.app/locations", "https://united-wrestling-club.vercel.app/contact", "https://schema.org", "https://www.unitedwrestlingclub.com/#organization", "https://www.unitedwrestlingclub.com", "https://www.unitedwrestlingclub.com/locations", "https://www.unitedwrestlingclub.com/locations/fremont-ca"]
shard_of: "discovery/market/local_seo/top_10_programmatic_lps.md"
part: "3 of 3"
---

> Part 3 of 3 of [top_10_programmatic_lps](../top_10_programmatic_lps.md). Text is verbatim from the original; only links were rewritten.

## 5. Structured Data (JSON-LD) Specification for All 10 Pages

Every page template will automatically inject standardized Schema.org JSON-LD linking `SportsClub`, `BreadcrumbList`, and `FAQPage`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SportsClub",
      "@id": "https://www.unitedwrestlingclub.com/#organization",
      "name": "United Wrestling Club",
      "url": "https://www.unitedwrestlingclub.com",
      "telephone": "+1-510-303-4869",
      "email": "unitedwrestlingclub@gmail.com",
      "priceRange": "$15 - $150",
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
        "latitude": 37.6091918,
        "longitude": -122.0673447
      },
      "areaServed": [
        {"@type": "City", "name": "Hayward"},
        {"@type": "City", "name": "Fremont"},
        {"@type": "City", "name": "Union City"},
        {"@type": "City", "name": "Newark"},
        {"@type": "City", "name": "Castro Valley"},
        {"@type": "City", "name": "San Leandro"},
        {"@type": "AdministrativeArea", "name": "Alameda County"}
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.unitedwrestlingclub.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Locations",
          "item": "https://www.unitedwrestlingclub.com/locations"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Fremont Wrestling & Combat Sports",
          "item": "https://www.unitedwrestlingclub.com/locations/fremont-ca"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do beginners or kids need prior experience to join?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No prior experience is necessary. Our coaches specialize in teaching foundational athletic movement, stance, and basic techniques in a controlled, supportive environment."
          }
        },
        {
          "@type": "Question",
          "name": "What should I wear to my first free trial class?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Athletic shorts (without zippers or pockets) and a clean t-shirt or rashguard. Wrestling shoes or bare feet on the mats. Bring a water bottle."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the gym located and how do I contact the coaches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "United Wrestling Club is located at 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544, right off I-880. For questions, call or text Coach Naweed directly at (510) 303-4869."
          }
        }
      ]
    }
  ]
}
</script>
```

### Breadcrumb Canonical Rules
To maintain search engine silo purity, breadcrumbs strictly follow one of two active sitemap hierarchies:
1. **Location Feeder Pages:** `Home (/) → Locations (/locations) → [City Name] (/locations/[city-slug]-ca)`
2. **Discipline Program Pages:** `Home (/) → Classes (/classes) → [Program Name] (/classes/[discipline-slug])`

### Active Internal Linking Silo Rules
All internal page links across all 10 templates must resolve strictly to active sitemap routes:
* **Discipline & Program Hub:** [`/classes`](https://united-wrestling-club.vercel.app/classes)
* **Location Feeder Hub:** [`/locations`](https://united-wrestling-club.vercel.app/locations)
* **Class Schedule & Booking:** [`/schedule`](https://united-wrestling-club.vercel.app/schedule)
* **Tuition & Memberships:** [`/pricing`](https://united-wrestling-club.vercel.app/pricing)
* **Free Trial & Registration:** [`/register`](https://united-wrestling-club.vercel.app/register)
* **Olympic Pedigree & Coaches:** [`/about`](https://united-wrestling-club.vercel.app/about)
* **Facility & Contact:** [`/contact`](https://united-wrestling-club.vercel.app/contact)
* **Club Rules & Mat Hygiene:** [`/rules`](https://united-wrestling-club.vercel.app/rules)
* **Frequently Asked Questions:** [`/faqs`](https://united-wrestling-club.vercel.app/faqs)

---

## 6. Implementation Rollout Schedule

```
Phase 1 (Week 1): Deploy Core Feeder & Youth Pipeline:
  - /locations/hayward-ca
  - /classes/kid-wrestling
  - /classes/youth-wrestling

Phase 2 (Week 2): Deploy Tri-City Feeder Corridor:
  - /locations/union-city-ca
  - /locations/fremont-ca
  - /locations/newark-ca

Phase 3 (Week 3): Deploy Adult Grappling & Specialized Disciplines:
  - /classes/adult-wrestling
  - /classes/nogi-jiu-jitsu
  - /classes/womens-self-defense

Phase 4 (Week 4): Deploy Eden Area Feeder & Trial Pipeline:
  - /locations/castro-valley-ca
  - Connect automated SMS trial confirmations via (510) 303-4869
  - Final verification of native /register intake endpoints
```
