import type { APIRoute } from 'astro';
import { routes } from '../data/routes';
import { facts } from '../data/facts';
import { LAUNCHED } from '../data/indexing';

// Short index of built routes plus the core verified facts. Saturday hours are left out until the owner confirms them (D1, D2).
export const GET: APIRoute = ({ site }) => {
  if (!LAUNCHED) {
    return new Response('United Wrestling Club site preview. Not yet launched.\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  }
  const pages = routes
    .filter((r) => r.status === 'built')
    .map((r) => `- ${r.title}: ${new URL(r.path, site).href}`);

  const hours = facts.hours.rows
    .filter((r) => !r.days.includes('Saturday'))
    .map((r) => `- ${r.days}: ${r.time}`);

  const programs = [facts.programs.youth, facts.programs.varsity, facts.programs.adult, facts.programs.openMat]
    .map((p) => `- ${p.name}`);

  const { address } = facts;
  const lines = [
    'United Wrestling Club',
    '',
    'Pages',
    ...pages,
    '',
    'Address',
    `${address.line1}, ${address.city}, ${address.region} ${address.postal}`,
    '',
    'Phone',
    facts.phone.display,
    '',
    'Hours',
    ...hours,
    facts.hours.footnote,
    '',
    'Programs',
    ...programs,
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
