import type { APIRoute } from 'astro';

// Allow all crawlers so they can read the noindex tag. The Sitemap line appears only after launch (data/indexing.ts).
import { LAUNCHED } from '../data/indexing';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('/sitemap.xml', site).href;
  const body = `User-agent: *\nAllow: /\n${LAUNCHED ? `\nSitemap: ${sitemap}\n` : ''}`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
