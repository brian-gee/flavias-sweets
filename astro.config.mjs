import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: 'https://flavias-sweets.netlify.app',
  integrations: [tailwind(), sitemap(), netlify(), image()],
  output: "server",
  adapter: netlify()
});