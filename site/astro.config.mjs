import { defineConfig } from 'astro/config';

// Static output. The site is served from the root of its host.
export default defineConfig({
  output: 'static',
  build: { format: 'file' },
});
