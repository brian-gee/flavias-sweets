import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";
import deno from "@astrojs/deno";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: netlify()
});