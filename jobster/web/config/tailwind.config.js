/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['../web/src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        primary: '#0C4FA0',
        secondary: '#FFC700',
        'light-gray': '#F5F7FA',
      },
      textColor: {
        primary: '#0C4FA0',
        secondary: '#FFC700',
        'dark-gray': '#1F2937',
        'accent-1': '#27A8E0',
        'accent-2': '#FF6347',
        'accent-3': '#36B37E',
      },
    },
  },
  // ...
}
