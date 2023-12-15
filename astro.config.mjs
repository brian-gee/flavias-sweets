import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://flaviasweets.web.app/',
  integrations: [tailwind(), sitemap(), netlify(), react()],
  vite: {
    ssr: {
      noExternal: ['react-icons'],
    },
  },
});
