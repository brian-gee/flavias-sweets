import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';
import react from '@astrojs/react';
import image from '@astrojs/image';

// https://as/*  */tro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), image()],
  output: 'server',
  adapter: netlify(),
});
