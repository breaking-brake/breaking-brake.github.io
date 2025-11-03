import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://breaking-brake.github.io',
  integrations: [
    react(),
    sitemap(),
  ],
  output: 'static',
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});