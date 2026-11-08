---
type: dossier
status: current
group: brand
owner: "Rodney Lewis (Sprintz)"
date: 2026-10-31
last_reviewed: 2026-10-31
sources: ["https://unitedwrestlingclub.com/classes/adult-wrestling", "https://schema.org", "https://unitedwrestlingclub.com/#organization", "https://unitedwrestlingclub.com", "https://unitedwrestlingclub.com/images/uwc-crest.svg", "https://unitedwrestlingclub.com/stills/still_16_naweed_adult_collar_tie.jpg", "https://unitedwrestlingclub.com/classes/adult-wrestling#course", "https://schema.org/InStock", "https://schema.org/Tuesday", "https://schema.org/Thursday", "https://schema.org/Saturday", "https://unitedwrestlingclub.com/classes/adult-wrestling#breadcrumbs", "https://unitedwrestlingclub.com/classes", "https://unitedwrestlingclub.com/classes/adult-wrestling#faq"]
shard_of: "discovery/brand/moodboards/iteration_AC_2_bedrock_standard.md"
part: "4 of 4"
---

> Part 4 of 4 of [iteration_AC_2_bedrock_standard](../iteration_AC_2_bedrock_standard.md). Text is verbatim from the original; only links were rewritten.

## 5. Technical SEO, Schema.org & Internal Linking Architecture

### 5.1 JSON-LD Schema.org Architecture for `/classes/adult-wrestling`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SportsClub",
      "@id": "https://unitedwrestlingclub.com/#organization",
      "name": "United Wrestling Club",
      "url": "https://unitedwrestlingclub.com",
      "logo": "https://unitedwrestlingclub.com/images/uwc-crest.svg",
      "image": "https://unitedwrestlingclub.com/stills/still_16_naweed_adult_collar_tie.jpg",
      "telephone": "+1-510-736-2342",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "20990 Cabot Blvd",
        "addressLocality": "Hayward",
        "addressRegion": "CA",
        "postalCode": "94545",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.6688,
        "longitude": -122.0808
      },
      "priceRange": "$$"
    },
    {
      "@type": "Course",
      "@id": "https://unitedwrestlingclub.com/classes/adult-wrestling#course",
      "name": "Adult Collegiate Wrestling & Wrestle-Jitsu",
      "description": "Collegiate folkstyle wrestling, takedown defense, and scramble mechanics engineered for adult martial artists, BJJ competitors, and beginner grapplers. Taught by SFSU Kinesiology coaches with 1980 Olympic lineage.",
      "provider": {
        "@id": "https://unitedwrestlingclub.com/#organization"
      },
      "offers": {
        "@type": "Offer",
        "price": "139.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2027-01-01",
        "category": "Monthly Unlimited Tuition"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "OnSite",
        "location": {
          "@id": "https://unitedwrestlingclub.com/#organization"
        },
        "schedule": {
          "@type": "Schedule",
          "byDay": [
            "https://schema.org/Tuesday",
            "https://schema.org/Thursday",
            "https://schema.org/Saturday"
          ],
          "startTime": "19:00",
          "endTime": "20:15"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://unitedwrestlingclub.com/classes/adult-wrestling#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://unitedwrestlingclub.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Classes",
          "item": "https://unitedwrestlingclub.com/classes"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Adult Wrestling",
          "item": "https://unitedwrestlingclub.com/classes/adult-wrestling"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://unitedwrestlingclub.com/classes/adult-wrestling#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can beginners with no wrestling experience join adult wrestling classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our adult wrestling program is specifically calibrated for adult beginners, BJJ practitioners, and returning scholastic wrestlers. Coach Naweed Zemaryalai (SFSU Kinesiology) teaches progressive, injury-preventative drilling so you learn stance, leverage, and takedowns safely without reckless live slams."
          }
        },
        {
          "@type": "Question",
          "name": "How does adult wrestling training help Brazilian Jiu-Jitsu practitioners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wrestling gives Jiu-Jitsu grapplers total control over where the match occurs. You learn collegiate collar ties, underhooks, low-risk sweep singles, and front headlock control that prevent guard pulling and score takedowns while keeping your neck safe from submission counters."
          }
        },
        {
          "@type": "Question",
          "name": "What equipment do I need for my first adult wrestling class at UWC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You only need clean athletic shorts or spats (no zippers, pockets, or buttons), a fitted athletic t-shirt or rashguard, and either wrestling shoes or clean bare feet. A mouthguard is recommended."
          }
        },
        {
          "@type": "Question",
          "name": "How much does adult wrestling cost at United Wrestling Club?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tuition is $139.99/month for unlimited adult wrestling and grapple training with zero registration fees or long-term contracts. Drop-in Saturday open mat passes are also available for $15."
          }
        }
      ]
    }
  ]
}
```

---

### 5.2 Internal Link Distribution (Authority Flow)
To ensure `/classes/adult-wrestling` ranks #1 for high-volume adult search queries across the East Bay, the page connects into the global authority graph:

- **Upstream Inbound Links:**
  - Homepage (`/`): Anchor `"Adult Wrestling & Wrestle-Jitsu"` in the primary classes grid.
  - Classes Hub (`/classes`): Hero feature card with `still_16_naweed_adult_collar_tie.jpg`.
> Superseded 2026-11-08: The guides hub and its five guide pages are omitted from the 21 built pages, so these guide links are not on the site. Old text: [archive](../../../archive/stale-2026-11-08/iteration_AC_2_bedrock_standard.md).
- **Downstream Outbound Links:**
  - Saturday Open Mat (`/classes/open-mat`): Weekly live sparring feeder.
  - No-Gi Jiu-Jitsu (`/classes/nogi-jiu-jitsu`): Cross-discipline grappling integration.
  - Coaches & Olympic Pedigree (`/about`): Deep dive on Karim and Naweed Zemaryalai.
  - Trial Registration (`/register`): Direct booking engine for the 2-Class Assessment Pass.

---

## 6. Synthesis: Why Iteration AC-2 Dominates the Competitive Field

| Dimension | Typical Commercial Gym (Smash Gyms / Strip-Mall BJJ) | AC-1 (Animal/Wolfpack Metaphor) | **AC-2: The Bedrock Standard & The Unbroken Line** |
| :--- | :--- | :--- | :--- |
| **Cultural Metaphor** | Commercial fitness club, generic belt rank progression. | Tribal pack / wolfpack brotherhood, high-intensity streetwear. | **Geological/monolithic weight, immutable physics, unbroken Olympic lineage.** |
| **Adult grappler appeal** | Low (few pure takedown classes, guard-pulling emphasis). | Moderate (some adults find wolf imagery juvenile or overly aggressive). | **Maximum (serious craft, biomechanics, kinesiology safety, pure collegiate skill).** |
| **Pricing Transparency** | Hidden behind sales rep calls, $200+ signup fees, 12-month lock-in. | Moderate. | **100% Transparent: $139.99/mo, no contracts, published online.** |
| **Pedigree Proof** | Generic black belt certificate on wall. | Olympic references, but overshadowed by wolfpack branding. | **Dominant: 1980 Moscow Olympian Karim + SFSU Kinesiology Naweed + USAW RTC #100234.** |
| **Safety for Adults (30+)** | High injury rate in uncontrolled scrambles. | High intensity, risk of intimidation. | **Kinesiology-calibrated warmups, controlled situational drilling, zero ego pressure.** |

---
*Report produced by Team 2 Creative Director & Metaphor Architect for United Wrestling Club.*
