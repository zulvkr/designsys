import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import Unfonts from "unplugin-fonts/astro";
import svgr from "vite-plugin-svgr";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    Unfonts({
      google: {
        families: [
          {
            name: "Plus Jakarta Sans",
            styles: "ital,wght@0,400;0,500;0,700;1,400;1,500;1,700",
          }
        ]
      }
    })],
  vite: {
    plugins: [svgr()],
  }
});