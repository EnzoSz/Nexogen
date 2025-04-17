/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'nexogen-blue': '#3D5AFE',
        'nexogen-magenta': '#FF4081',
        'nexogen-dark': '#2E2E2E',
        // Nuevos colores para modo claro
        'light-bg': '#F5F7FA',        // Fondo principal claro
        'light-text': '#1A1A1A',      // Texto principal en modo claro
        'light-accent': '#B0BEC5',    // Acentos suaves, bordes
        'light-hover': '#E3F2FD',     // Color para hover states
        'light-shadow': 'rgba(61, 90, 254, 0.1)', // Sombras sutiles
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'light-btn': '0 4px 6px rgba(61, 90, 254, 0.1)', // Sombra sutil para botones
      }
    },
  },
  plugins: [],
}