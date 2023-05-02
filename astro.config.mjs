import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';
<<<<<<< HEAD
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  site: 'https://flavias-sweets.netlify.app',
  integrations: [tailwind(), sitemap(), netlify()],
  output: 'server',
});
=======

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: netlify()
});
>>>>>>> parent of db10358 (updating with lighthouse improvements)
