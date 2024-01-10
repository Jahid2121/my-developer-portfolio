/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'customPoppins': 'Poppins, sans-serif',
        'customGaramond': "'Cormorant Garamond', serif"
      },
      colors: {
        'artificialDarkGray': '#262734',
        'artificialCoolGray': '#858792',
        'artificialBlue': '#6978D1',
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
],
}

