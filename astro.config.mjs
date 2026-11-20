import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Held pages are for explicit preview builds, never the normal production artifact.
const heldPreview = process.env.UWC_INCLUDE_HELD === 'true';
if (heldPreview && process.env.VERCEL_ENV === 'production') {
  throw new Error('Held pages cannot be built in a Vercel production environment.');
}

// Static output. The site is served from the root of its host.
export default defineConfig({
  site: 'https://www.unitedwrestlingclub.com',
  output: 'static',
  outDir: heldPreview ? './output/held-preview/' : './dist/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  vite: {
    plugins: [tailwindcss()],
  },
});
