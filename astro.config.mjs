import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), markdoc()],
  site: 'https://<user>.gitlab.io',
  base: '/<project-name>',
  outDir: 'public',
  publicDir: 'static',
});