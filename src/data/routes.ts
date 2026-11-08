// Every route in the sitemap (discovery/site/website_rebuild_spec.md section 5, plus /reviews/). Plan 4.2:
//  built     the page exists in site/src/pages
//  planned   a group owns it and has not merged yet (allowed only with a `group`)
//  omitted   not built until the owner decision named in `unlock` (D0); 404s and nothing links to it
//  redirect  a redirect page
export type RouteStatus = 'built' | 'planned' | 'omitted' | 'redirect';
export type Route = { path: string; title: string; group?: string; status: RouteStatus; reason?: string; unlock?: string };

export const routes: Route[] = [
  { path: '/', title: 'Home', status: 'built' },
  { path: '/about/', title: 'About', group: 'G1', status: 'built' },
  { path: '/classes/', title: 'Classes', group: 'G2', status: 'built' },
  { path: '/classes/kid-wrestling/', title: 'Kid Wrestling', group: 'G2', status: 'built' },
  { path: '/classes/youth-wrestling/', title: 'Youth Wrestling', group: 'G2', status: 'built' },
  { path: '/classes/adult-wrestling/', title: 'Adult Wrestling', group: 'G2', status: 'built' },
  { path: '/classes/nogi-jiu-jitsu/', title: 'No-Gi Jiu-Jitsu', group: 'G3', status: 'built' },
  { path: '/classes/gi-jiu-jitsu/', title: 'Gi Jiu-Jitsu', group: 'G3', status: 'built' },
  { path: '/classes/sambo/', title: 'Sambo', status: 'built' },
  { path: '/classes/boxing-fundamentals/', title: 'Boxing Fundamentals', group: 'G3', status: 'built' },
  { path: '/classes/open-mat/', title: 'Open Mat', group: 'G3', status: 'built' },
  { path: '/classes/womens-self-defense/', title: "Women's Self-Defense", status: 'omitted', reason: 'KB-19 unconfirmed; no waitlist endpoint.', unlock: 'D4' },
  { path: '/schedule/', title: 'Schedule', group: 'G4', status: 'built' },
  { path: '/pricing/', title: 'Pricing', group: 'G4', status: 'built' },
  { path: '/events/', title: 'Events', status: 'built' },
  { path: '/register/', title: 'Register', group: 'G1', status: 'built' },
  { path: '/contact/', title: 'Contact', group: 'G1', status: 'built' },
  { path: '/faqs/', title: 'FAQs', group: 'G4', status: 'built' },
  { path: '/rules/', title: 'Rules', status: 'built' },
  { path: '/donate/', title: 'Donate', status: 'omitted', reason: 'No donation details, policy, or endpoint (F5).', unlock: 'D6' },
  { path: '/locations/', title: 'Locations', group: 'G5', status: 'built' },
  { path: '/locations/hayward-ca/', title: 'Hayward, CA', group: 'G5', status: 'built' },
  { path: '/locations/union-city-ca/', title: 'Union City, CA', status: 'omitted', reason: 'Drive times and school claims are not in the KB; doorway page risk.', unlock: 'D11' },
  { path: '/locations/fremont-ca/', title: 'Fremont, CA', status: 'omitted', reason: 'Same as Union City.', unlock: 'D11' },
  { path: '/locations/newark-ca/', title: 'Newark, CA', status: 'omitted', reason: 'Same as Union City.', unlock: 'D11' },
  { path: '/locations/castro-valley-ca/', title: 'Castro Valley, CA', status: 'omitted', reason: 'Same as Union City.', unlock: 'D11' },
  { path: '/guides/', title: 'Guides', status: 'omitted', reason: 'Needs a sourced brief and an author.', unlock: 'D12' },
  { path: '/guides/adult-wrestling-bay-area/', title: 'Adult Wrestling in the Bay Area', status: 'omitted', reason: 'Needs sources outside the KB.', unlock: 'D12' },
  { path: '/guides/youth-wrestling-vs-martial-arts/', title: 'Youth Wrestling vs Martial Arts', status: 'omitted', reason: 'Needs sources outside the KB.', unlock: 'D12' },
  { path: '/guides/wrestling-for-bjj-takedowns/', title: 'Wrestling for BJJ Takedowns', status: 'omitted', reason: 'Needs sources outside the KB.', unlock: 'D12' },
  { path: '/guides/high-school-off-season-wrestling/', title: 'High School Off-Season Wrestling', status: 'omitted', reason: 'Needs sources outside the KB.', unlock: 'D12' },
  { path: '/guides/dsal-hayward-wrestling-pathway/', title: 'DSAL Hayward Wrestling Pathway', status: 'omitted', reason: 'Needs sources outside the KB.', unlock: 'D12' },
  { path: '/reviews/', title: 'Reviews', group: 'G1', status: 'built' },
];

/** Machine files, owned by group G6. */
export const machineFiles: Route[] = [
  { path: '/robots.txt', title: 'robots.txt', group: 'G6', status: 'built' },
  { path: '/sitemap.xml', title: 'sitemap.xml', group: 'G6', status: 'built' },
  { path: '/llms.txt', title: 'llms.txt', group: 'G6', status: 'built' },
  { path: '/llms-full.txt', title: 'llms-full.txt', group: 'G6', status: 'built' },
];

export const routeByPath = (path: string): Route | undefined => routes.find((r) => r.path === path);
export const builtRoutes = (): Route[] => routes.filter((r) => r.status === 'built' || r.status === 'redirect');
