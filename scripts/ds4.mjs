#!/usr/bin/env node
// DS-4: distribute src/styles/split/*.css and the merged component <style> blocks into
//   tokens/base/shell/buttons/sections/cards/forms/overlays/disclosure.css (global) and section components (scoped).
// Every selector lives in exactly one destination. Rule order inside a destination follows the original source order.
// Run once from site/ on the DS-3 tree (restore with git stash or manual revert to rerun). Flags: --dry (report only).
import fs from 'node:fs';
import path from 'node:path';
import postcss from 'postcss';
import selParser from 'postcss-selector-parser';

const DRY = process.argv.includes('--dry');
const GLOBAL_FILES = ['tokens', 'base', 'shell', 'buttons', 'sections', 'cards', 'forms', 'overlays', 'disclosure'];
const SECTION_COMPONENTS = ['Hero', 'Programs', 'Coaches', 'Testimonials', 'Safety', 'Pricing', 'CtaBanner', 'Schedule'];
const ALL_COMPONENTS = ['Hero', 'Programs', 'Coaches', 'Testimonials', 'Safety', 'Pricing', 'CtaBanner', 'Schedule', 'Faq', 'SiteHeader', 'SiteFooter', 'TrialModal'];
const ws = (s) => s.replace(/\s+/g, ' ').trim();
const ns = (s) => { try { return ws(selParser(() => {}).processSync(s)); } catch { return ws(s); } };

const CLASS_RULES = [
  [/^btn-(trial-submit|wiq)$/, 'overlays'],
  [/^hero-|^trial-callout/, 'Hero'],
  [/^card-/, 'cards'],
  [/^program-card$|^programs-/, 'Programs'],
  [/^coach|^lineage|^floating-badge/, 'Coaches'],
  [/^testimonials-/, 'Testimonials'],
  [/^testimonial-(feature|list|item)/, 'Testimonials'],
  [/^testimonial-(meta|text|stars|card|grid|source)/, 'cards'],
  [/^review-quote$/, 'cards'],
  [/^safety-/, 'Safety'],
  [/^pricing-|^price-|^featured-tag$/, 'Pricing'],
  [/^cta-banner/, 'CtaBanner'],
  [/^faq-/, 'disclosure'],
  [/^schedule-tab/, 'disclosure'],
  [/^(tab|tab-list|tab-count)$/, 'disclosure'],
  [/^reviews-toolbar$/, 'disclosure'],
  [/^schedule-/, 'Schedule'],
  [/^(top-bar|site-nav|nav-|brand-|mobile-|hamburger-|desktop-nav|drawer-|site-footer|footer-)/, 'shell'],
  [/^(noise-bg|container|skip-link|visually-hidden)$/, 'base'],
  [/^btn/, 'buttons'],
  [/^(section-|text-brand|text-accent|page-hero|page-title|eyebrow-tight|edc-|pillar-)/, 'sections'],
  [/^(modal-|success-icon|pass-summary|clipboard-|copied-badge|redirect-card)/, 'overlays'],
  [/^(trust-|platform-grid-3|platform-card)/, 'cards'],
  [/^(form-|tcpa-|newsletter-|contact-|star-|dropzone|preview-|platform-grid$|platform-checkbox|platform-info|required$|register-grid|hours-list|steps-list)/, 'forms'],
];
const TAG_RULES = [[/^(html|body|h[1-6]|p|li|blockquote|img|video|a|button|\*)$/, 'base'], [/^(header|nav|footer)$/, 'shell'], [/^(input|select|textarea|label|form)$/, 'forms']];

function destOf(sel) {
  const classes = [], tags = [];
  let hasRoot = false, hasFocusVisible = false;
  try {
    selParser((r) => {
      r.walk((n) => {
        if (n.type === 'class') classes.push(n.value);
        else if (n.type === 'tag') tags.push(n.value);
        else if (n.type === 'universal') tags.push('*');
        else if (n.type === 'pseudo' && n.value === ':root') hasRoot = true;
        else if (n.type === 'pseudo' && n.value === ':focus-visible') hasFocusVisible = true;
      });
    }).processSync(sel);
  } catch {}
  if (hasRoot) return 'tokens';
  if (/\bbtn-nav-cta\b|^\.site-nav\b/.test(sel)) return 'shell';
  for (const c of classes) for (const [re, d] of CLASS_RULES) if (re.test(c)) return d;
  if (!classes.length) { for (const t of tags) for (const [re, d] of TAG_RULES) if (re.test(t)) return d; if (hasFocusVisible) return 'base'; }
  return null;
}

const chainOf = (n) => { const c = []; for (let p = n.parent; p && p.type !== 'root'; p = p.parent) if (p.type === 'atrule') c.unshift({ name: p.name, params: ws(p.params) }); return c; };
const chainKey = (c) => c.map((x) => `@${x.name} ${x.params.replace(/\s*:\s*/g, ':').toLowerCase()}`).join('|');

// piece: { dest, chain, rule(cloned, selectors subset), comments[], origin }
function piecesOf(root, origin) {
  const pieces = []; let pending = [];
  root.walk((n) => {
    if (n.type === 'comment' && n.parent.type === 'root') { pending.push(n.text); return; }
    if (n.type !== 'rule') return;
    if (n.parent.type === 'atrule' && /keyframes$/.test(n.parent.name)) { console.error('keyframes unsupported'); process.exit(1); }
    const groups = new Map();
    for (const s of n.selectors) { const d = destOf(ns(s)); if (!d) { console.error(`UNCLASSIFIED (${origin}): ${ns(s)}`); process.exitCode = 3; continue; } (groups.get(d) ?? groups.set(d, []).get(d)).push(s); }
    let first = true;
    for (const [d, sels] of groups) {
      const clone = n.clone(); clone.selectors = sels;
      pieces.push({ dest: d, chain: chainOf(n), rule: clone, comments: first ? pending : [], origin }); first = false;
    }
    pending = [];
  });
  return pieces;
}

// ---- read inputs
const sliceDir = 'src/styles/split';
const globalPieces = [];
for (const f of fs.readdirSync(sliceDir).sort()) globalPieces.push(...piecesOf(postcss.parse(fs.readFileSync(`${sliceDir}/${f}`, 'utf8')), `split/${f}`));
const compText = {}, compStyle = {}, compPieces = {};
for (const c of ALL_COMPONENTS) {
  const file = `src/components/${c}.astro`; const t = fs.readFileSync(file, 'utf8'); compText[c] = t;
  const m = t.match(/<style\b[^>]*>([\s\S]*?)<\/style>/); if (!m) { compPieces[c] = []; continue; }
  compStyle[c] = m; compPieces[c] = piecesOf(postcss.parse(m[1]), c);
}
if (process.exitCode === 3) process.exit(3);

// ---- merge. dest lists: entries in order
const winnerMerge = (target, incoming, incomingIsScoped) => {
  // target: rule node already in dest; incoming: rule node. scoped beats global except global !important vs non-important.
  const got = []; 
  incoming.each((d) => {
    if (d.type !== 'decl') return;
    let found = null; target.each((x) => { if (x.type === 'decl' && x.prop.toLowerCase() === d.prop.toLowerCase()) found = x; });
    if (!found) { const c = d.clone(); c.raws = {}; target.append(c); return; }
    // winner today: scoped over global unless global important and scoped not
    const incomingWins = incomingIsScoped ? !(found.important && !d.important) : (d.important && !found.important);
    if (incomingWins) { found.value = d.value; found.important = d.important; }
  });
};
const keyOf = (p) => `${chainKey(p.chain)} || ${ns(p.rule.selector)}`;

const dests = {}; for (const d of [...GLOBAL_FILES, ...SECTION_COMPONENTS]) dests[d] = [];
const index = {}; for (const d of Object.keys(dests)) index[d] = new Map(); // key -> last entry
const add = (dest, piece, { front = false } = {}) => { const e = piece; (front ? dests[dest].unshift(e) : dests[dest].push(e)); index[dest].set(keyOf(piece), e); };

// 1. component-own scoped pieces first (they are authoritative for their own section)
for (const c of SECTION_COMPONENTS) for (const p of compPieces[c]) if (p.dest === c) add(c, p);
// 2. global pieces in source order
const stats = { moved: {}, dupDropped: 0, merged: 0 };
const frontQueue = Object.fromEntries(SECTION_COMPONENTS.map((c) => [c, []]));
for (const p of globalPieces) {
  stats.moved[p.dest] = (stats.moved[p.dest] ?? 0) + 1;
  const ex = index[p.dest].get(keyOf(p));
  if (SECTION_COMPONENTS.includes(p.dest)) {
    if (ex) { winnerMerge(ex.rule, p.rule, false); stats.merged++; } else { frontQueue[p.dest].push(p); }
  } else add(p.dest, p);
}
for (const c of SECTION_COMPONENTS) { const q = frontQueue[c]; const seen = new Set(); const uniq = []; for (const p of q) { const k = keyOf(p); if (seen.has(k)) { const prev = uniq.find((u) => keyOf(u) === k); winnerMerge(prev.rule, p.rule, false); } else { seen.add(k); uniq.push(p); } } dests[c].unshift(...uniq); for (const p of uniq) index[c].set(keyOf(p), p); }
// 3. scoped pieces that belong elsewhere (global files or another component): merge by key (scoped wins) or append
for (const c of ALL_COMPONENTS) for (const p of compPieces[c]) {
  if (SECTION_COMPONENTS.includes(c) && p.dest === c) continue;
  const ex = index[p.dest]?.get(keyOf(p));
  if (!dests[p.dest]) { console.error(`no destination ${p.dest} for ${c}`); process.exit(1); }
  if (ex) { winnerMerge(ex.rule, p.rule, true); stats.merged++; } else { add(p.dest, p); stats.appended = (stats.appended ?? 0) + 1; }
}

// ---- serialize
const clean = (piece) => {
  const r = piece.rule.clone();
  let node = r;
  for (const a of [...piece.chain].reverse()) { const at = postcss.atRule({ name: a.name, params: a.params }); at.append(node); node = at; }
  const fmt = (n, depth) => {
    n.raws = {};
    if (depth > 0) n.raws.before = '\n' + '  '.repeat(depth);
    if (n.type === 'decl') { n.raws.between = ': '; return; }
    if (n.type === 'comment') return;
    n.raws.between = ' '; n.raws.after = '\n' + '  '.repeat(depth); n.raws.semicolon = true;
    n.each((c) => fmt(c, depth + 1));
  };
  fmt(node, 0);
  return node;
};
const render = (list) => {
  const root = postcss.root(); let last = null;
  for (const p of list) {
    for (const c of p.comments) { const cn = postcss.comment({ text: c }); cn.raws.before = '\n\n'; root.append(cn); }
    const node = clean(p);
    // reuse the previous at-rule when the chain is identical (keeps override blocks together)
    if (node.type === 'atrule' && last && last.type === 'atrule' && last.name === node.name && ws(last.params) === ws(node.params) && !p.comments.length) { node.each((c) => last.append(c.clone())); continue; }
    node.raws.before = '\n\n'; root.append(node); last = node;
  }
  const s = root.toString().replace(/^\s+/, '');
  return s.endsWith('\n') ? s : s + '\n';
};
const header = { tokens: 'Design tokens (:root).', base: 'Base: focus ring, reduced-motion guard, reset, typography, container, utilities.', shell: 'Shell: top bar, sticky nav, nav CTA, drawer, brand lockup, footer.', buttons: 'Buttons.', sections: 'Section primitives: block, eyebrow, title, lead, page hero.', cards: 'Card slots used on more than one page.', forms: 'Forms, consent, status, newsletter, contact.', overlays: 'Modal and overlay patterns.', disclosure: 'Tabs and accordion.' };
if (DRY) { for (const d of Object.keys(dests)) console.log(d.padEnd(12), dests[d].length, 'rules'); console.log(JSON.stringify(stats)); process.exit(0); }
for (const d of GLOBAL_FILES) fs.writeFileSync(`src/styles/${d}.css`, `/* ${header[d]} A selector lives in exactly one file, with every @media override after its base rule. */\n\n` + render(dests[d]));
fs.writeFileSync('src/styles/global.css', GLOBAL_FILES.map((d) => `@import './${d}.css';\n`).join(''));
for (const c of ALL_COMPONENTS) {
  const t = compText[c], m = compStyle[c]; if (!m) continue;
  const list = SECTION_COMPONENTS.includes(c) ? dests[c] : [];
  const styleOpen = t.match(/<style\b[^>]*>/)[0];
  const start = t.indexOf(styleOpen), end = t.lastIndexOf('</style>') + '</style>'.length;
  const body = list.length ? `${styleOpen}\n${render(list).replace(/^/gm, '  ').replace(/[ ]+$/gm, '')}</style>` : '';
  fs.writeFileSync(`src/components/${c}.astro`, (t.slice(0, start) + body + t.slice(end)).replace(/\n{3,}$/, '\n'));
}
console.log(JSON.stringify(stats));
