import type { APIRoute } from 'astro';
import { builtRoutes } from '../data/routes';
import { LAUNCHED } from '../data/indexing';

// One <url> per route with status 'built' in routes.ts. Redirects, planned and omitted routes are left out.
// Before launch (data/indexing.ts) the file lists no URLs.
export const GET: APIRoute = ({ site }) => {
  const urls = builtRoutes()
    .filter((r) => LAUNCHED && r.status === 'built')
    .map((r) => `  <url>\n    <loc>${new URL(r.path, site).href}</loc>\n  </url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
