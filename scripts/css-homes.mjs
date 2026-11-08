#!/usr/bin/env node
// css-homes: every selector that has an @media override in the reference CSS (git show d78a5da:site/src/styles/global.css)
// must live, with its override, in exactly one current file (src/styles/**/*.css plus <style> blocks of src/components/**/*.astro),
// together with its base rule, with the override after the base rule and identical declarations.
// Usage: node scripts/css-homes.mjs [--list]   Exit 1 on any failure.
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import postcss from 'postcss';
import selParser from 'postcss-selector-parser';

const REF_COMMIT = 'd78a5da';
const SITE = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const refCss = execSync(`git show ${REF_COMMIT}:site/src/styles/global.css`, { cwd: SITE, maxBuffer: 1 << 26 }).toString();

const ws = (s) => s.replace(/\s+/g, ' ').trim();
const normMedia = (p) => ws(p).replace(/\s*:\s*/g, ':').replace(/\(\s+/g, '(').replace(/\s+\)/g, ')').toLowerCase();
const normSel = (s) => {
  s = s.replace(/:global\(([^)]*)\)/g, '$1');
  try { return ws(selParser((x) => {}).processSync(s)); } catch { return ws(s); }
};

// Returns rules: { sel, media (string, '' = none), decls: Map(prop -> 'value[ !important]'), pos (sequence), file }
function parse(css, file, startSeq = 0) {
  const rules = [];
  let seq = startSeq;
  let root;
  try { root = postcss.parse(css, { from: file }); } catch (e) { console.error(`parse error in ${file}: ${e.message}`); process.exit(2); }
  root.walkRules((rule) => {
    const chain = [];
    let skip = false;
    for (let p = rule.parent; p && p.type !== 'root'; p = p.parent) {
      if (p.type === 'atrule') {
        if (/keyframes$/i.test(p.name) || p.name === 'font-face') skip = true;
        if (p.name === 'media') chain.unshift(normMedia(p.params));
        else if (p.name !== 'layer') chain.unshift('@' + p.name + ' ' + normMedia(p.params));
      }
    }
    if (skip) return;
    const decls = new Map();
    rule.walkDecls((d) => decls.set(d.prop.toLowerCase(), ws(d.value) + (d.important ? ' !important' : '')));
    for (const raw of rule.selectors) rules.push({ sel: normSel(raw), media: chain.join(' && '), decls, pos: seq, file });
    seq++;
  });
  return rules;
}

function listFiles(dir, ext) {
  const out = [];
  for (const e of fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }) : []) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...listFiles(p, ext)); else if (ext.test(e.name)) out.push(p);
  }
  return out;
}

const ref = parse(refCss, 'REF');
const cur = [];
for (const f of listFiles(path.join(SITE, 'src/styles'), /\.css$/)) cur.push(...parse(fs.readFileSync(f, 'utf8'), path.relative(SITE, f)));
for (const f of listFiles(path.join(SITE, 'src/components'), /\.astro$/)) {
  const text = fs.readFileSync(f, 'utf8');
  const rel = path.relative(SITE, f);
  let n = 0;
  for (const m of text.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/g)) cur.push(...parse(m[1], `${rel}#style${n++}`, 0));
}
// a "file" is the .css path or the .astro path (all <style> blocks of a component count as one file; order = block order then position)
const fileOf = (r) => r.file.replace(/#style\d+$/, '');
const orderKey = (r) => { const m = r.file.match(/#style(\d+)$/); return (m ? Number(m[1]) : 0) * 1e7 + r.pos; };

const refMediaSels = new Set(ref.filter((r) => r.media).map((r) => r.sel));
const mergedDecls = (rules) => { const m = new Map(); for (const r of rules.sort((a, b) => orderKey(a) - orderKey(b))) for (const [k, v] of r.decls) m.set(k, v); return m; };
const fails = [];
let checked = 0;

for (const sel of [...refMediaSels].sort()) {
  const refBase = ref.filter((r) => r.sel === sel && !r.media);
  const refMedia = ref.filter((r) => r.sel === sel && r.media);
  const mediaConds = [...new Set(refMedia.map((r) => r.media))];
  for (const cond of mediaConds) {
    checked++;
    const rRules = refMedia.filter((r) => r.media === cond);
    const curRules = cur.filter((r) => r.sel === sel && r.media === cond);
    const files = [...new Set(curRules.map(fileOf))];
    const tag = `${sel}  @media ${cond}`;
    if (files.length !== 1) { fails.push(`${tag}: found in ${files.length} files (${files.join(', ') || 'none'})`); continue; }
    const file = files[0];
    const inFile = (r) => fileOf(r) === file;
    if (refBase.length && !cur.some((r) => r.sel === sel && !r.media && inFile(r))) { fails.push(`${tag}: base rule missing from ${file}`); continue; }
    const baseOrder = Math.max(-1, ...cur.filter((r) => r.sel === sel && !r.media && inFile(r)).map(orderKey));
    const firstMedia = Math.min(...curRules.map(orderKey));
    // the reference order decides what "after" means: only enforce when the reference has the override after its base
    const refBaseLast = Math.max(-1, ...refBase.map((r) => r.pos));
    const refMediaFirst = Math.min(...rRules.map((r) => r.pos));
    if (refBase.length && refMediaFirst > refBaseLast && !(firstMedia > baseOrder)) { fails.push(`${tag}: override before base rule in ${file}`); continue; }
    const a = mergedDecls([...rRules]), b = mergedDecls(curRules.filter(inFile));
    const diffs = [];
    for (const k of new Set([...a.keys(), ...b.keys()])) if (a.get(k) !== b.get(k)) diffs.push(`${k}: ${a.get(k) ?? '(none)'} -> ${b.get(k) ?? '(none)'}`);
    if (diffs.length) fails.push(`${tag}: declarations differ in ${file}: ${diffs.join('; ')}`);
  }
}
if (process.argv.includes('--list')) console.log(`reference @media selectors: ${refMediaSels.size}`);
for (const f of fails) console.log('FAIL ' + f);
console.log(`css-homes: ${checked} selector/media pairs checked, ${fails.length} failures`);
process.exit(fails.length ? 1 : 0);
