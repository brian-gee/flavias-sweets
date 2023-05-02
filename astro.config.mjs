import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'https://flavias-sweets.netlify.app',
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});
