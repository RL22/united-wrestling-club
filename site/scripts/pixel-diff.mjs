#!/usr/bin/env node
// Usage: node scripts/pixel-diff.mjs <baseline-shots-dir> <current-shots-dir> [--allow <file>]
// Compares <section>-<width>.png shots with pixelmatch (threshold 0, AA counted). Missing files in either dir fail.
// Allow entries (same exact entries as fingerprint-diff; fields used: section, width, path) name an element whose old or new rect
// may contain differing pixels. Rects come from <prefix>-<width>.json next to each shots dir (<prefix>-shots/), default pass, default state.
// No whole-section exemption: differing pixels outside every listed rect fail. Exit 1 on any unexempted pixel.
import fs from 'node:fs';
import path from 'node:path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const a = process.argv.slice(2);
const ai = a.indexOf('--allow');
const [bdir, cdir] = a.filter((x, i) => !x.startsWith('--') && a[i - 1] !== '--allow');
if (!bdir || !cdir) { console.error('usage: pixel-diff <baseline-dir> <current-dir> [--allow file]'); process.exit(2); }
const allow = ai >= 0 ? JSON.parse(fs.readFileSync(a[ai + 1], 'utf8')) : [];

const jsonFor = (dir, w) => { const d = dir.replace(/\/+$/, ''); return JSON.parse(fs.readFileSync(`${d.replace(/-shots$/, '')}-${w}.json`, 'utf8')); };
const rectOf = (j, sec, p) => j.passes?.default?.default?.[sec]?.[p]?.rect ?? null;
const list = (d) => fs.existsSync(d) ? fs.readdirSync(d).filter(f => f.endsWith('.png')) : [];
const names = new Set([...list(bdir), ...list(cdir)]);
const cache = {};
let fail = 0, total = 0;

for (const name of [...names].sort()) {
  total++;
  const m = name.match(/^(.+)-(\d+)\.png$/);
  const [, sec, w] = m;
  if (!list(bdir).includes(name) || !list(cdir).includes(name)) { console.log(`FAIL ${name}: missing in ${list(bdir).includes(name) ? 'current' : 'baseline'}`); fail++; continue; }
  const A = PNG.sync.read(fs.readFileSync(path.join(bdir, name)));
  const B = PNG.sync.read(fs.readFileSync(path.join(cdir, name)));
  const W = Math.max(A.width, B.width), H = Math.max(A.height, B.height);
  const pad = (img) => { const p = new PNG({ width: W, height: H }); PNG.bitblt(img, p, 0, 0, img.width, img.height, 0, 0); return p; };
  const pa = pad(A), pb = pad(B);
  const count = pixelmatch(pa.data, pb.data, null, W, H, { threshold: 0, includeAA: true });
  const sizeDiff = A.width !== B.width || A.height !== B.height;
  if (count === 0 && !sizeDiff) { console.log(`ok   ${name}`); continue; }
  const rects = [];
  for (const e of allow.filter(e => e.section === sec && String(e.width) === w && e.path)) {
    for (const [dir, key] of [[bdir, 'b'], [cdir, 'c']]) {
      const jj = (cache[dir + w] ??= jsonFor(dir, w));
      const r = rectOf(jj, sec, e.path);
      if (r) rects.push(r);
    }
  }
  const inside = (x, y) => rects.some(([rx, ry, rw, rh]) => x >= Math.floor(rx) - 1 && x < Math.ceil(rx + rw) + 1 && y >= Math.floor(ry) - 1 && y < Math.ceil(ry + rh) + 1);
  let outside = 0, first = null;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 4;
    const ina = x < A.width && y < A.height, inb = x < B.width && y < B.height;
    const differ = ina !== inb || pa.data[i] !== pb.data[i] || pa.data[i + 1] !== pb.data[i + 1] || pa.data[i + 2] !== pb.data[i + 2] || pa.data[i + 3] !== pb.data[i + 3];
    if (differ && !inside(x, y)) { outside++; first ??= [x, y]; }
  }
  if (outside) { console.log(`FAIL ${name}: ${outside} differing px outside allowed rects (first at ${first}); sizes ${A.width}x${A.height} vs ${B.width}x${B.height}`); fail++; }
  else console.log(`ok   ${name}: ${count} px differ, all inside allowed rects`);
}
console.log(`${total} shots, ${fail} failed`);
process.exit(fail ? 1 : 0);
