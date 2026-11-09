// Validate the default deployable build. Preview builds are deliberately separate.
import { readFile, access, readdir } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const site = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(site, 'dist');
if (process.env.UWC_INCLUDE_HELD === 'true') {
  throw new Error('Use npm run build:held-preview for held pages; never package them from dist.');
}
const routes = (await readFile(path.join(site, 'src/data/routes.ts'), 'utf8')).split('export const machineFiles')[0];
const parsed = [...routes.split('export const machineFiles')[0].matchAll(/\{\s*path:\s*'([^']+)'[^}]*?status:\s*'(built|planned|held|omitted|redirect)'/g)];
if (!parsed.some(([, route]) => route === '/')) throw new Error('Unable to parse page routes from route metadata.');
const held = parsed.filter(([, , status]) => status === 'held' || status === 'omitted');
const exists = async (p) => access(p, constants.F_OK).then(() => true, () => false);
const htmlFiles = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map((e) => e.isDirectory() ? htmlFiles(path.join(dir, e.name)) : e.name.endsWith('.html') ? [path.join(dir, e.name)] : []));
  return nested.flat();
};
const pages = await htmlFiles(dist);
const built = [...routes.matchAll(/\{\s*path:\s*'([^']+)'[^}]*?status:\s*'built'/g)];
for (const [, route] of built) {
  const output = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html');
  if (!(await exists(output))) throw new Error(`Built route missing from dist: ${route}`);
}
for (const [, route] of held) {
  if (await exists(path.join(dist, route.slice(1), 'index.html'))) throw new Error(`Held or omitted route is present in dist: ${route}`);
  const escaped = route.replace(/\/$/, '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const href = new RegExp(`\\bhref=["']${escaped}/?(?:[?#][^"']*)?["']`);
  for (const page of pages) {
    if (href.test(await readFile(page, 'utf8'))) throw new Error(`Held or omitted route linked from ${path.relative(dist, page)}: ${route}`);
  }
}
console.log(`check-publish: ${held.length} held or omitted routes excluded from dist and internal links`);
