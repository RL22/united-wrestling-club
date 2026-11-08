import type { APIRoute } from 'astro';
import { routes } from '../data/routes';
import { facts } from '../data/facts';
import { LAUNCHED } from '../data/indexing';

type Section = { heading: string; lines: string[] };

// Facts per route path. Only routes listed here get fact sections. The Google review figure (KB-17) is excluded: it is usable only on /reviews/.
const sectionsByPath: Record<string, Section[]> = {
  '/': [
    {
      heading: 'Address',
      lines: [`${facts.address.line1}, ${facts.address.city}, ${facts.address.region} ${facts.address.postal}`, facts.address.mapsUrl],
    },
    { heading: 'Phone', lines: [facts.phone.display] },
    { heading: 'Email', lines: [facts.email] },
    {
      heading: 'Hours',
      lines: [
        ...facts.hours.rows.filter((r) => !r.days.includes('Saturday')).map((r) => `${r.days}: ${r.time}`),
        facts.hours.footnote,
      ],
    },
    {
      heading: 'Programs',
      lines: [facts.programs.youth, facts.programs.varsity, facts.programs.adult, facts.programs.openMat].map(
        (p) => `${p.name}`,
      ),
    },
    {
      heading: 'Trial',
      lines: [`${facts.trialPass.name}: ${facts.trialPass.price}. ${facts.trialPass.blurb}`, facts.booking.howTo, facts.booking.payment.note],
    },
    { heading: 'Membership', lines: [`${facts.membership.price} ${facts.membership.period}. ${facts.membership.terms}`] },
    { heading: 'Drop-in', lines: [`${facts.dropIn.price} per ${facts.dropIn.per}. ${facts.dropIn.note}`] },
    { heading: 'Media release', lines: [facts.media.note] },
    { heading: 'Coaches', lines: facts.coaches.map((c) => `${c.name}, ${c.role}`) },
  ],
};

// Full text of every built route, with its facts. Same route set as llms.txt.
export const GET: APIRoute = ({ site }) => {
  if (!LAUNCHED) {
    return new Response('United Wrestling Club site preview. Not yet launched.\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  }
  const blocks = routes
    .filter((r) => r.status === 'built')
    .map((r) => {
      const lines = [`## ${r.title}`, `URL: ${new URL(r.path, site).href}`, ''];
      for (const s of sectionsByPath[r.path] ?? []) {
        lines.push(`### ${s.heading}`, ...s.lines, '');
      }
      return lines.join('\n');
    });

  const body = ['# United Wrestling Club: full text', '', ...blocks].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
