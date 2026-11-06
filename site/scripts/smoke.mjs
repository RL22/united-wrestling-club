#!/usr/bin/env node
// Smoke test for built routes (plan 6.3).
// Usage: node scripts/smoke.mjs --base http://localhost:4340 (--routes /a/,/b/ | --all) [--widths 375,600,...] [--out output/ds/smoke]
// Per route and width: no horizontal overflow, no console.error / pageerror, no failed local requests, header and footer
// fingerprints equal to the homepage's (ignoring href, and the computed style of nav links because the current page's link is styled as active), header and footer PNGs written to <out>.
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf('--' + n); return i < 0 ? d : (args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true); };
const base = String(opt('base', '')).replace(/\/$/, '');
const out = opt('out', 'output/ds/smoke');
const widths = String(opt('widths', '375,600,768,900,1024,1100,1240,1248')).split(',').map(Number);
if (!base) { console.error('need --base'); process.exit(2); }
let routes;
if (args.includes('--all')) {
  const ts = fs.readFileSync(new URL('../src/data/routes.ts', import.meta.url), 'utf8').split('machineFiles')[0];
  routes = [...ts.matchAll(/\{\s*path:\s*'([^']+)'[^}]*?status:\s*'(\w+)'/g)].filter((m) => m[2] === 'built').map((m) => m[1]);
} else routes = String(opt('routes', '/')).split(',');
const slug = (r) => (r === '/' ? 'home' : r.replace(/^\/|\/$/g, '').replace(/\//g, '-'));
const ROOTS = { topbar: 'aside.top-bar', nav: 'header.site-nav', drawer: '#mobileNavDrawer', footer: '#visit' };
const PROPS = ['display', 'position', 'width', 'height', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'margin-top', 'margin-bottom', 'color', 'background-color', 'font-family', 'font-size', 'font-weight', 'letter-spacing', 'text-transform', 'border-top-width', 'border-bottom-width', 'border-top-color', 'border-bottom-color', 'opacity', 'visibility', 'gap', 'flex-direction', 'justify-content', 'align-items', 'grid-template-columns'];

function collect({ roots, props }) {
  const res = {};
  for (const [name, sel] of Object.entries(roots)) {
    const root = document.querySelector(sel);
    if (!root) { res[name] = null; continue; }
    const rows = [];
    const walk = (el, depth) => {
      const cs = getComputedStyle(el); const r = el.getBoundingClientRect();
      const cls = [...el.classList].filter((c) => c !== 'active' && !/^astro-|^data-astro/.test(c)).join(' ');
      rows.push({ d: depth, t: el.tagName, c: cls, w: Math.round(r.width * 2) / 2, h: Math.round(r.height * 2) / 2, s: (el.classList.contains('nav-link') || el.getAttribute('aria-current')) ? '' : props.map((p) => cs.getPropertyValue(p)).join('|'), x: el.children.length === 0 ? (el.textContent || '').trim() : '' });
      for (const ch of el.children) walk(ch, depth + 1);
    };
    walk(root, 0);
    res[name] = rows;
  }
  return res;
}
const normalize = (fp) => JSON.stringify(fp, (k, v) => v);

const browser = await chromium.launch({ args: ['--disable-gpu', '--disable-gpu-rasterization', '--disable-lcd-text', '--font-render-hinting=none', '--force-color-profile=srgb', '--disable-partial-raster'] });
let failures = 0;
const fail = (m) => { console.log('FAIL ' + m); failures++; };
fs.mkdirSync(out, { recursive: true });
try {
  for (const w of widths) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
    let homeFp = null;
    for (const route of ['/', ...routes.filter((r) => r !== '/')]) {
      const page = await ctx.newPage();
      const errors = [], failed = [];
      page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
      page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
      page.on('requestfailed', (r) => { // streaming media that the page aborts on close is not a failure
        if (r.url().startsWith(base) && !(r.resourceType() === 'media' && /ERR_ABORTED/.test(r.failure()?.errorText ?? ''))) failed.push(r.url()); });
      page.on('response', (r) => { if (r.url().startsWith(base) && r.status() >= 400) failed.push(`${r.status()} ${r.url()}`); });
      await page.goto(base + route, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(300);
      const tag = `${route} @${w}`;
      const over = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
      if (over.sw > over.iw) fail(`${tag}: horizontal overflow scrollWidth ${over.sw} > innerWidth ${over.iw}`);
      // console errors from the Google Fonts CDN are ignored only if the request is not local (they are not listed in `failed`)
      const localErrors = errors.filter((e) => !/fonts\.(googleapis|gstatic)\.com/.test(e));
      if (localErrors.length) fail(`${tag}: ${localErrors.length} console errors: ${localErrors.slice(0, 2).join(' | ')}`);
      if (failed.length) fail(`${tag}: failed local requests: ${failed.slice(0, 3).join(', ')}`);
      const fp = await page.evaluate(collect, { roots: ROOTS, props: PROPS });
      if (route === '/') homeFp = fp;
      else for (const k of Object.keys(ROOTS)) if (normalize(fp[k]) !== normalize(homeFp?.[k])) fail(`${tag}: ${k} fingerprint differs from the homepage`);
      for (const [name, sel] of [['header', 'header.site-nav'], ['footer', '#visit']]) {
        const el = await page.$(sel);
        if (el) await el.screenshot({ path: path.join(out, `${slug(route)}-${w}-${name}.png`) });
        else fail(`${tag}: ${sel} not found`);
      }
      console.log(`ok   ${tag}`);
      await page.close();
    }
    await ctx.close();
  }
} finally { await browser.close(); }
console.log(`smoke: ${widths.length} widths, routes ${['/', ...routes.filter((r) => r !== '/')].join(' ')}, ${failures} failures`);
process.exit(failures ? 1 : 0);
