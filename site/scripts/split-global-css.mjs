#!/usr/bin/env node
// DS-2: cut src/styles/global.css into 25 numbered slices in styles/split/ (plan 1.5), assert byte-identical concatenation,
// then rewrite global.css as 25 @imports in order. Run once on the d78a5da global.css (restore it from git first to rerun).
import fs from 'node:fs';
import { execSync } from 'node:child_process';
const GLOBAL = 'src/styles/global.css', DIR = 'src/styles/split';
const SLICES = [
  ['00-tokens', null], ['01-base', '/* Global focus'], ['02-topbar', 'TOP ANNOUNCEMENT / INFINITE SCROLLING TRUST MARQUEE'],
  ['03-nav', 'STICKY NAVIGATION WITH OFFICIAL EMBLEM'], ['04-drawer', 'MOBILE MENU TOGGLE & ACCESSIBLE DRAWER OVERLAY'],
  ['05-buttons', '    /* Buttons */'], ['06-hero', 'HERO SECTION WITH 1080P VIDEO'], ['07-creed', 'EDC CREED SECTION'],
  ['08-coaches-grid', 'SECONDARY COACHING STAFF 4-COLUMN GRID'], ['09-reviews-home', 'GOOGLE REVIEWS: feature review + ruled list'],
  ['10-headings', 'SECTION HEADINGS & UTILITIES'], ['11-programs', 'PROGRAM SILOS SECTION'], ['12-lineage', 'OLYMPIC PEDIGREE & COACHING MOAT SECTION'],
  ['13-safety', 'FACILITY SAFETY & PARENT ASSURANCE BLOCK'], ['14-pricing', 'MEMBERSHIP & PRICING TRANSPARENCY'], ['15-faq', 'FAQ ACCORDION'],
  ['16-cta', 'PRE-FOOTER CALL TO ACTION BANNER'], ['17-footer', 'COMPREHENSIVE FOOTER & LOCAL NAP'], ['18-modal', 'NATIVE 1-CLICK TRIAL MODAL'],
  ['19-responsive', '/* Responsive Grid Controls to Prevent Layout Orphans'], ['20-schedule-tabs', '/* Schedule tabs (section tab nav)'],
  ['21-trim', '/* Trim pass:'], ['22-interior', 'INTERIOR-PAGE COMPONENTS (reviews and other pages)'],
  ['23-shell-classes', '/* Shell classes (replace inline styles'], ['24-forms', 'FORMS: status, success, and layouts'],
];
const src = fs.readFileSync(GLOBAL, 'utf8');
const lines = src.split(/(?<=\n)/); // keep line endings
const starts = SLICES.map(([name, a]) => {
  if (a === null) return 0;
  const hits = lines.map((l, i) => (l.includes(a) ? i : -1)).filter(i => i >= 0);
  if (hits.length !== 1) { console.error(`anchor ${JSON.stringify(a)} matched ${hits.length} times`); process.exit(1); }
  const i = hits[0];
  return i > 0 && /^\s*\/\* ={5,}/.test(lines[i - 1]) ? i - 1 : i; // banner start directly above a title line
});
for (let k = 1; k < starts.length; k++) if (starts[k] <= starts[k - 1]) { console.error('anchors out of order at ' + SLICES[k][0]); process.exit(1); }
fs.mkdirSync(DIR, { recursive: true });
const parts = SLICES.map(([name], k) => lines.slice(starts[k], k + 1 < starts.length ? starts[k + 1] : undefined).join(''));
SLICES.forEach(([name], k) => fs.writeFileSync(`${DIR}/${name}.css`, parts[k]));
const joined = parts.join('');
if (joined !== src) { console.error('concatenation differs from original'); process.exit(1); }
console.log(`ok: ${SLICES.length} slices, concatenation identical (${src.length} bytes)`);
fs.writeFileSync(GLOBAL, SLICES.map(([name]) => `@import './split/${name}.css';\n`).join(''));
