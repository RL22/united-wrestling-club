// Navigation as it is on the homepage today. Interior pages turn `#anchor` hrefs into `/#anchor` with forPage().
export type NavItem = { label: string; href: string; id?: string; optional?: boolean };

export const primaryNav: NavItem[] = [
  { id: 'classes', label: 'Classes', href: '/classes/' },
  { id: 'schedule', label: 'Schedule', href: '/schedule/' },
  { id: 'coaches', label: 'Coaches', href: '/#coaches', optional: true },
  { id: 'reviews', label: 'Reviews', href: '/reviews/' },
  { id: 'pricing', label: 'Pricing', href: '/pricing/' },
];

export const mobileNav: NavItem[] = [
  { label: 'Classes', href: '/classes/' },
  { label: 'Schedule', href: '/schedule/' },
  { label: 'Coaches', href: '/#coaches' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'FAQ', href: '/faqs/' },
  { label: 'Find Us', href: '/locations/hayward-ca/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerPrograms: NavItem[] = [
  { label: 'Youth Wrestling (Ages 5–13)', href: '#programs' },
  { label: 'Varsity Scholastic Prep (14–18)', href: '#programs' },
  { label: 'Adult Wrestling & Grappling', href: '#programs' },
  { label: 'Combat Sambo & BJJ', href: '#programs' },
  { label: 'Saturday Open Mat ($15)', href: '#programs' },
];

export const footerAcademy: NavItem[] = [
  { label: 'Our heritage', href: '#lineage' },
  { label: 'Our standards', href: '/about/' },
  { label: 'Coach Naweed Zemaryalai', href: '#lineage' },
  { label: 'Karim Zemaryalai', href: '#lineage' },
  { label: 'Mat Room & Safety', href: '#safety' },
  { label: 'Tuition & Pricing', href: '#pricing' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'FAQ', href: '#faq' },
];

/** On the homepage anchors stay as they are; elsewhere they point back at the homepage. */
export const forPage = (items: NavItem[], isHome: boolean): NavItem[] =>
  items.map((i) => (!isHome && i.href.startsWith('#') ? { ...i, href: `/${i.href}` } : i));
