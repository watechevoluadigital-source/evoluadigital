import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

/** Local: base '/'. GitHub Actions define ASTRO_SITE + ASTRO_BASE para Pages. */
const site = process.env.ASTRO_SITE ?? 'https://evoluadigital.onrender.com';
const base = process.env.ASTRO_BASE ?? '/';

export default defineConfig({
  integrations: [tailwind()],
  site,
  base,
  devToolbar: {
    enabled: false,
  },
});
