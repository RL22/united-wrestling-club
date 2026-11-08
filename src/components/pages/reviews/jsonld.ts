// JSON-LD for /reviews/, ported from discovery/archive/legacy-site/reviews/index.html without the review[] array: copy_audit cannot exempt quotes inside
// a JSON-LD script (em dashes and one blocked word). Restore review[] from data/reviews.ts if the audit gains that exemption.
const base = {
  "@type": "SportsClub",
  "@id": "https://www.unitedwrestlingclub.com/#sportsclub",
  "name": "United Wrestling Club",
  "alternateName": [
    "UWC",
    "United Wrestling Club Hayward",
    "UWC Wrestling"
  ],
  "url": "https://www.unitedwrestlingclub.com",
  "logo": "https://www.unitedwrestlingclub.com/live_site_content/assets/uwc_lockup_horizontal_white.svg",
  "image": "https://www.unitedwrestlingclub.com/video_assets/stills_selected/still_44_coach_naweed_mat_command_uwc_banner.jpg",
  "telephone": "+1-510-303-4869",
  "email": "info@unitedwrestlingclub.com",
  "priceRange": "$15 - $140",
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
    "latitude": 37.608355,
    "longitude": -122.054236
  },
  "hasMap": "https://maps.google.com/?cid=12271816550742514605",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "42",
    "reviewCount": "42"
  }
};
const others: object[] = [];

export const reviewsJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [base, ...others],
};
