import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import svgr from "vite-plugin-svgr";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    })
  ],
  vite: {
    plugins: [svgr()]
  },
  output: "server",
  adapter: cloudflare()
});