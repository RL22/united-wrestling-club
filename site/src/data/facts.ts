// Verified facts from discovery/knowledge_base/uwc_kb_v1.md. Pages take every fact from here, never from prose.
// Never add KB-11, 12, 14, 15, 18, 19, 20, 21, or 22 retention here. KB-13 and KB-16 credentials are not facts for new copy.
export const facts = {
  /** KB-01 */
  address: {
    id: 'KB-01',
    line1: '30139 Industrial Pkwy SW, Suite C',
    line1Short: '30139 Industrial Pkwy SW Ste C',
    city: 'Hayward',
    region: 'CA',
    postal: '94544',
    mapsUrl: 'https://maps.google.com/?q=30139+Industrial+Pkwy+SW+Ste+C+Hayward+CA+94544',
  },
  /** KB-02. Say "Call". "Text" appears only in forms/ConsentSms.astro. */
  phone: { id: 'KB-02', display: '(510) 303-4869', tel: 'tel:5103034869', digits: '5103034869' },
  email: 'unitedwrestlingclub@gmail.com',
  /** KB-03. The Saturday end time is unconfirmed (D1, D2). Hours appear on a page only through ui/FactList. */
  hours: {
    id: 'KB-03',
    rows: [
      { days: 'Mon–Fri', time: '6:00 AM – 10:00 PM' },
      { days: 'Saturday', time: '10:00 AM – 12:00 PM', note: 'open mat' },
      { days: 'Sunday', time: 'Closed' },
    ],
    footnote: 'Times can shift around holidays and tournaments.',
  },
  /** KB-05. Use grade labels instead of unconfirmed age bands (OC-14). */
  programs: {
    id: 'KB-05',
    youth: { name: 'Youth Wrestling Academy', ages: 'Kids and youth' },
    varsity: { name: 'Varsity and Scholastic Prep', ages: 'Middle and high school' },
    adult: { name: 'Adult Wrestling and Wrestle-Jitsu', ages: 'Adults' },
    openMat: { name: 'Saturday Open Mat', ages: 'Drop-in' },
  },
  /** KB-06 */
  trialPass: { id: 'KB-06', name: '3-Day Mat Pass', price: '$15', priceValue: 15, blurb: 'Three practices to see if the room fits. New members only.' },
  /** KB-07 and KB-10 */
  booking: {
    id: 'KB-07',
    howTo: 'Fill in the trial form on the website, or call (510) 303-4869.',
    payment: { id: 'KB-10', where: 'WrestlingIQ (Team #513)', note: 'Payment and the waiver are completed on WrestlingIQ (Team #513).' },
  },
  /** KB-08 */
  membership: { id: 'KB-08', price: '$139.99', priceValue: 139.99, period: 'per month', terms: 'Month to month. No contract. No cancellation fee.' },
  /** KB-09 */
  dropIn: { id: 'KB-09', price: '$15', priceValue: 15, per: 'visit', note: 'Saturday open mat is included with a monthly membership.' },
  /** KB-23 */
  media: { id: 'KB-23', note: 'Media release is included by default. To opt out, check the box on the trial form or tell staff at check-in.' },
  /** KB-16, names and roles only. No credentials. */
  coaches: [
    { name: 'Karim Zemaryalai', role: 'Founder' },
    { name: 'Naweed Zemaryalai', role: 'Head coach' },
    { name: 'Rashad Rahimi', role: 'Co-founder' },
    { name: 'Sandeep Singh Gosal', role: 'Youth competition' },
    { name: 'Farid Siddiq', role: 'Boxing' },
  ],
} as const;

/** KB-17 Google figure. Client-confirmed, not Verified. Usable only on /reviews/ (plan 5.10, D13). */
export const reviewsGoogle = {
  id: 'KB-17',
  rating: '5.0',
  count: 42,
  label: '5.0 across 42 reviews on Google',
  basis: 'client-confirmed; ADR-20261104 item 3',
  onlyOn: '/reviews/',
} as const;
