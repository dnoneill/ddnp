import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), react(), tailwind(), mdx(), image()],
  vite: {
    // define: {
    //   global: 'window',
    // }
  },
});
