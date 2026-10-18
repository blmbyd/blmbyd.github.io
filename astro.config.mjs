// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  site: 'https://blmbyd.github.io',
  trailingSlash: 'ignore',
  compressHTML: true,
  integrations: [
    sitemap({
      // Drop the OG card (a build-time rendering target, not a page) and the
      // trailing-slash-free duplicate of the home page.
      filter: (page) => !page.includes('/og') && page.endsWith('/'),
    }),
  ],
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [yaml()],
  },
});
