/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontSize: {
        '6xl': '5.5rem',
        '7xl': '6.5rem',
      },
    },
  },
  plugins: [],
};
