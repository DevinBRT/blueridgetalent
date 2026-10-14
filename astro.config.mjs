import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.blueridgetalent.us',
  // Keep Squarespace-style addresses: /about, not /about/
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you') && !page.includes('/404'),
    }),
  ],
});
