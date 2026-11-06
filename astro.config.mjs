import { defineConfig } from 'astro/config';

// Static output. The site is served from the root of its host.
export default defineConfig({
  site: 'https://www.unitedwrestlingclub.com',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
