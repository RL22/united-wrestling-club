#!/usr/bin/env node
// Computed-style + geometry fingerprint (Playwright / Chromium). Plan v4 section 2.1.
//   node scripts/fingerprint.mjs --url <url> [--widths 375,600,...] [--sections home|interior] [--passes default,reduced,focus,hover] [--shots] --out <prefix>
//   node scripts/fingerprint.mjs --url <url> --text --out <prefix>      -> <prefix>-text.json (innerText per section root, 1248px)
// Writes <prefix>-<width>.json per width; --shots also writes <prefix>-shots/<section>-<width>.png (default pass, frozen).
// Fonts load from Google, so a run needs network.
import { chromium } from 'playwright';
// Port-independent captures: any http://localhost:<port> becomes a fixed token, so the same baseline passes on any port.
const normPort = (t) => t.replace(/http:\/\/localhost:\d+/g, 'http://localhost:PORT');
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf('--' + n); return i < 0 ? d : (args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true); };
const url = opt('url');
const out = opt('out');
const textMode = args.includes('--text');
const shots = args.includes('--shots');
const widths = String(opt('widths', '375,600,768,900,1024,1100,1240,1248')).split(',').map(Number);
const passes = String(opt('passes', 'default,reduced,focus,hover')).split(',');
const sectionsName = opt('sections', 'home');
if (!url || !out) { console.error('need --url and --out'); process.exit(2); }

const HOME = {
  topbar: 'aside.top-bar', nav: 'header.site-nav', drawer: '#mobileNavDrawer', hero: '.hero-section',
  programs: '#programs', schedule: '#schedule', coaches: '#coaches', pricing: '#pricing',
  testimonials: '#testimonials', safety: '#safety', faq: '#faq', cta: '.cta-banner', footer: '#visit', modal: '#trialModal',
};
const SIDES = ['top', 'right', 'bottom', 'left'];
const PROPS = ['display','position','top','right','bottom','left','z-index','width','height','max-width','min-height',
  ...SIDES.flatMap(s => [`margin-${s}`, `padding-${s}`, `border-${s}-width`, `border-${s}-style`, `border-${s}-color`]),
  'border-top-left-radius','border-top-right-radius','border-bottom-right-radius','border-bottom-left-radius',
  'color','background-color','background-image','background-size','background-position','font-family','font-size','font-weight','font-style',
  'line-height','letter-spacing','text-transform','text-align','white-space','text-decoration-line','text-shadow','opacity','visibility','pointer-events',
  'overflow-x','overflow-y','box-shadow','transform','filter','outline-style','outline-width','outline-color','outline-offset','fill',
  'grid-template-columns','grid-template-rows','gap','row-gap','column-gap','flex-direction','flex-wrap','flex-basis',
  'justify-content','align-items','object-fit','transition-property','transition-duration','cursor'];
const PSEUDO_PROPS = ['content','background-image','background-color','opacity','width','height'];
const FOCUS_PROPS = ['outline-style','outline-width','outline-offset','outline-color','box-shadow','color','background-color', ...SIDES.map(s => `border-${s}-color`)];
const HOVER_PROPS = ['color','background-color', ...SIDES.map(s => `border-${s}-color`), 'box-shadow','transform','text-decoration-line','opacity'];
const HOVER_SEL = '.btn, .nav-link, .mobile-nav-link, .footer-links a, .card-link';
const FONTS = [['Montserrat', 400], ['Montserrat', 700], ['Montserrat', 900], ['Space Grotesk', 700]];

// ---- page-side helpers (installed once per page as window.__fp) ----
function installHelpers({ map }) {
  const r05 = (n) => Math.round(n * 2) / 2;
  const clean = (c) => c.split(/\s+/).filter(x => x && !/^astro-/.test(x) && !/^data-astro-cid-/.test(x)).join(' ');
  const isWrap = (el) => el.tagName === 'MAIN' && el.id === 'main-content';
  const nth = (el) => { let n = 0; for (const s of el.parentElement.children) { if (s.tagName === el.tagName) { n++; if (s === el) break; } } return n; };
  const roots = () => Object.entries(map).map(([k, sel]) => [k, document.querySelector(sel)]);
  const keyOf = (el, root) => {
    const segs = [];
    for (let n = el; n && n !== root; n = n.parentElement) if (!isWrap(n)) segs.unshift(`${n.tagName.toLowerCase()}:${nth(n)}`);
    return [root.tagName.toLowerCase(), ...segs].join('>');
  };
  const sectionOf = (el) => { for (const [k, r] of roots()) if (r && r.contains(el)) return [k, r]; return null; };
  const style = (el, props, pprops, withRect, rr) => {
    const cs = getComputedStyle(el);
    const rec = { css: {} };
    if (withRect) {
      const rect = el.getBoundingClientRect();
      rec.cls = clean(typeof el.className === 'string' ? el.className : (el.getAttribute('class') || ''));
      rec.rect = [r05(rect.x - rr.x), r05(rect.y - rr.y), r05(rect.width), r05(rect.height)];
    }
    for (const p of props) rec.css[p] = cs.getPropertyValue(p);
    if (pprops) for (const ps of ['::before', '::after']) {
      const pc = getComputedStyle(el, ps);
      const c = pc.getPropertyValue('content');
      if (c === 'none' || c === 'normal' || c === '') continue;
      for (const p of pprops) rec.css[ps + ' ' + p] = pc.getPropertyValue(p);
    }
    return rec;
  };
  const collect = (keys, props, pprops) => {
    const res = {};
    for (const [key, root] of roots()) {
      if (keys && !keys.includes(key)) continue;
      if (!root) { res[key] = null; continue; }
      const rr = root.getBoundingClientRect();
      const recs = {};
      const walk = (el, pkey) => {
        recs[pkey] = style(el, props, pprops, true, rr);
        for (const ch of el.children) {
          const t = ch.tagName.toLowerCase();
          if (t === 'script' || t === 'style') continue;
          walk(ch, isWrap(ch) ? pkey : `${pkey}>${t}:${nth(ch)}`);
        }
      };
      walk(root, root.tagName.toLowerCase());
      res[key] = recs;
    }
    return res;
  };
  const settle = () => document.getAnimations().forEach(a => {
    if (a.constructor.name === 'CSSTransition') { try { a.finish(); } catch {} } else { a.pause(); a.currentTime = 0; }
  });
  const sample = (el, props) => {
    const hit = sectionOf(el);
    const [sec, root] = hit || ['_other', document.body];
    return { sec, key: keyOf(el, root), rec: style(el, props, null, false) };
  };
  window.__fp = { collect, settle, sample, keyOf, sectionOf, roots };
}

async function prep(page) {
  await page.goto(url, { waitUntil: 'load' });
  const guard = await page.evaluate(async (fonts) => {
    await Promise.all(fonts.map(([f, w]) => document.fonts.load(`${w} 16px "${f}"`).catch(() => [])));
    await document.fonts.ready;
    const faces = [...document.fonts].map(f => ({ family: f.family.replace(/["']/g, ''), weight: String(f.weight), status: f.status }));
    const covers = (wt, want) => { const p = wt.split(/\s+/).map(Number); return p.length === 2 ? p[0] <= want && want <= p[1] : p[0] === want; };
    const missing = fonts.filter(([f, w]) => !faces.some(x => x.family === f && covers(x.weight, w) && x.status === 'loaded'));
    return { n: faces.length, missing };
  }, FONTS);
  if (guard.n < 4 || guard.missing.length) {
    console.error(`ABORT font guard: ${guard.n} declared faces; not loaded: ${JSON.stringify(guard.missing)}`);
    process.exit(3);
  }
  await page.evaluate(async () => {
    document.querySelectorAll('img[loading="lazy"]').forEach(i => { i.loading = 'eager'; });
    await Promise.all([...document.images].map(i => i.decode().catch(() => {})));
    for (const v of document.querySelectorAll('video')) {
      v.pause();
      if (v.readyState > 0) await new Promise(res => { v.addEventListener('seeked', res, { once: true }); setTimeout(res, 1500); v.currentTime = 0; });
    }
    document.getAnimations().forEach(a => { a.pause(); a.currentTime = 0; });
    scrollTo({ top: 0, behavior: 'instant' });
  });
  await page.waitForTimeout(300);
}

async function buildMap(page) {
  if (sectionsName === 'home') return HOME;
  if (sectionsName !== 'interior') { console.error('unknown --sections ' + sectionsName); process.exit(2); }
  const n = await page.evaluate(() => document.querySelectorAll('main > section').length);
  const map = { topbar: 'aside.top-bar', nav: 'header.site-nav', drawer: '#mobileNavDrawer' };
  for (let i = 1; i <= n; i++) map[`main-section-${i}`] = `main > section:nth-of-type(${i})`;
  return Object.assign(map, { cta: '.cta-banner', footer: '#visit', modal: '#trialModal' });
}

async function newPage(browser, w, reduce) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1, reducedMotion: reduce ? 'reduce' : 'no-preference' });
  const page = await ctx.newPage();
  await prep(page);
  const map = await buildMap(page);
  await page.evaluate(installHelpers, { map });
  await page.evaluate(() => window.__fp.settle());
  return { ctx, page, map };
}

const ensureDir = (f) => fs.mkdirSync(path.dirname(f), { recursive: true });

async function runDefault(browser, w, data) {
  const { ctx, page, map } = await newPage(browser, w, false);
  const states = {};
  const full = (keys) => page.evaluate(({ keys, props, pprops }) => window.__fp.collect(keys, props, pprops), { keys, props: PROPS, pprops: PSEUDO_PROPS });
  const capture = async (name, keys) => {
    await page.waitForTimeout(600);
    await page.evaluate(() => window.__fp.settle());
    states[name] = await full(keys);
  };
  states.default = await full(null);

  if (shots) {
    const dir = `${out}-shots`;
    fs.mkdirSync(dir, { recursive: true });
    await page.addStyleTag({ content: '*,*::before,*::after{transition:none !important;animation:none !important;caret-color:transparent !important}', }).then(h => h.evaluate(el => { el.setAttribute('data-capture-only', ''); }));
    const freezeFrame = () => page.evaluate(async () => {
      await document.fonts.ready;
      for (const v of document.querySelectorAll('video')) {
        v.pause();
        if (v.currentTime !== 0 || v.seeking) await new Promise(res => { v.addEventListener('seeked', res, { once: true }); setTimeout(res, 1500); v.currentTime = 0; });
        if (v.requestVideoFrameCallback) await new Promise(res => { v.requestVideoFrameCallback(() => res()); setTimeout(res, 500); v.currentTime = 0.001; v.currentTime = 0; });
      }
      document.getAnimations().forEach(a => { a.pause(); a.currentTime = 0; });
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    });
    for (const [key, sel] of Object.entries(map)) {
      await freezeFrame();
      const loc = page.locator(sel).first();
      try {
        const bb = await loc.boundingBox({ timeout: 1000 });
        if (!bb || bb.width < 1 || bb.height < 1) continue;
        const vis = await loc.evaluate(el => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return s.visibility !== 'hidden' && s.display !== 'none' && r.right > 0 && r.left < innerWidth && r.bottom > -1e5; });
        if (!vis) continue;
        await loc.screenshot({ path: path.join(dir, `${key}-${w}.png`), animations: 'allow', timeout: 4000 });
      } catch { /* not capturable (fixed/offscreen); fingerprint still covers it */ }
      await page.evaluate(() => { window.__fp.settle(); scrollTo({ top: 0, behavior: 'instant' }); });
    }
    await page.evaluate(() => document.querySelectorAll('style[data-capture-only]').forEach(e => e.remove()));
  }

  if (w < 1024 && await page.$('#mobileMenuToggle')) {
    await page.evaluate(() => document.getElementById('mobileMenuToggle').click());
    await capture('drawer-open', ['drawer', 'nav']);
    await page.evaluate(() => { const c = document.getElementById('mobileNavClose'); c && c.click(); });
    await page.waitForTimeout(600);
    await page.evaluate(() => window.__fp.settle());
  }
  if (await page.$('.open-trial-modal') && await page.$('#trialModal')) {
    await page.evaluate(() => document.querySelector('.open-trial-modal').click());
    await capture('modal-open', ['modal']);
    await page.evaluate(() => { const m = document.getElementById('modalCloseBtn'); m && m.click(); });
    await page.waitForTimeout(600);
    await page.evaluate(() => window.__fp.settle());
  }
  if (await page.$('.faq-item')) {
    await page.evaluate(() => { const i = document.querySelector('.faq-item'); if (!i.classList.contains('active')) i.querySelector('.faq-question').click(); });
    await capture('faq-first-open', ['faq']);
  }
  for (const id of await page.$$eval('.schedule-tab', els => els.map(e => e.id))) {
    await page.evaluate((id) => document.getElementById(id).click(), id);
    await capture(`schedule-${id}`, ['schedule']);
  }
  data.passes.default = states;
  await ctx.close();
}

async function runReduced(browser, w, data) {
  const { ctx, page } = await newPage(browser, w, true);
  data.passes.reduced = { default: await page.evaluate(({ props, pprops }) => window.__fp.collect(null, props, pprops), { props: PROPS, pprops: PSEUDO_PROPS }) };
  await ctx.close();
}

async function runFocus(browser, w, data) {
  const { ctx, page } = await newPage(browser, w, false);
  const res = {};
  await page.evaluate(() => document.activeElement && document.activeElement.blur());
  const seen = new Set();
  for (let i = 0; i < 300; i++) {
    await page.keyboard.press('Tab');
    const r = await page.evaluate((props) => {
      const el = document.activeElement;
      if (!el || el === document.body || el === document.documentElement) return null;
      window.__fp.settle();
      return window.__fp.sample(el, props);
    }, FOCUS_PROPS);
    if (!r) break;
    const id = r.sec + '|' + r.key;
    if (seen.has(id)) break;
    seen.add(id);
    (res[r.sec] = res[r.sec] || {})[r.key] = r.rec;
  }
  data.passes.focus = { default: res };
  await ctx.close();
}

async function runHover(browser, w, data) {
  const { ctx, page } = await newPage(browser, w, false);
  const res = {};
  const n = await page.evaluate((sel) => document.querySelectorAll(sel).length, HOVER_SEL);
  for (let i = 0; i < n; i++) {
    await page.mouse.move(0, 0);
    const pt = await page.evaluate(({ sel, i }) => {
      const el = document.querySelectorAll(sel)[i];
      el.scrollIntoView({ block: 'center', behavior: 'instant' });
      const r = el.getBoundingClientRect();
      if (r.width < 1 || r.height < 1) return null;
      const x = r.x + r.width / 2, y = r.y + r.height / 2;
      const top = document.elementFromPoint(x, y);
      return top && (top === el || el.contains(top)) ? { x, y } : null;
    }, { sel: HOVER_SEL, i });
    const info = await page.evaluate(({ sel, i }) => {
      const el = document.querySelectorAll(sel)[i];
      const hit = window.__fp.sectionOf(el); const [sec, root] = hit || ['_other', document.body];
      return { sec, key: window.__fp.keyOf(el, root) };
    }, { sel: HOVER_SEL, i });
    let rec = { skipped: true };
    if (pt) {
      await page.mouse.move(pt.x, pt.y);
      rec = await page.evaluate(({ sel, i, props }) => { window.__fp.settle(); return window.__fp.sample(document.querySelectorAll(sel)[i], props).rec; }, { sel: HOVER_SEL, i, props: HOVER_PROPS });
    }
    (res[info.sec] = res[info.sec] || {})[info.key] = rec;
  }
  await page.mouse.move(0, 0);
  data.passes.hover = { default: res };
  await ctx.close();
}

async function main() {
  const browser = await chromium.launch({ args: ['--disable-gpu', '--disable-gpu-rasterization', '--disable-lcd-text', '--font-render-hinting=none', '--force-color-profile=srgb', '--disable-partial-raster'] });
  try {
    if (textMode) {
      const { ctx, page, map } = await newPage(browser, 1248, false);
      const sections = await page.evaluate((map) => Object.fromEntries(Object.entries(map).map(([k, sel]) => {
        const el = document.querySelector(sel);
        return [k, el ? el.innerText.replace(/\s+/g, ' ').trim() : null];
      })), map);
      const f = `${out}-text.json`;
      ensureDir(f);
      fs.writeFileSync(f, normPort(JSON.stringify({ kind: 'text', url, width: 1248, sections }, null, 1)) + '\n');
      console.log(`wrote ${f}`);
      await ctx.close();
      return;
    }
    for (const w of widths) {
      const data = { url, width: w, sections: sectionsName, passes: {} };
      if (passes.includes('default')) await runDefault(browser, w, data);
      if (passes.includes('reduced')) await runReduced(browser, w, data);
      if (passes.includes('focus')) await runFocus(browser, w, data);
      if (passes.includes('hover')) await runHover(browser, w, data);
      const f = `${out}-${w}.json`;
      ensureDir(f);
      fs.writeFileSync(f, normPort(JSON.stringify(data)) + '\n');
      console.log(`wrote ${f}`);
    }
  } finally { await browser.close(); }
}
main().catch(e => { console.error(e); process.exit(1); });
