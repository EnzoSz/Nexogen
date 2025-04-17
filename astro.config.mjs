import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      // Configuración opcional: asegúrate de que Tailwind se aplique correctamente
      applyBaseStyles: true,
    }),
  ],
  // Configuración para desarrollo
  server: {
    port: 4321,
    host: true
  },
  // Configuración de i18n
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});