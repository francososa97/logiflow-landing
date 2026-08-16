import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://logiflow-landing.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
