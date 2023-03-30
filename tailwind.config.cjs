const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: ['sm:block sm:hidden block hidden'],
  theme: {
    extend: {
      boxShadow: {
        firm: ['0 15px 15px rgba(0, 0, 0, 0.25)', '0 20px 25px rgba(0, 0, 0, 0.15)'],
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        page: '1200px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
