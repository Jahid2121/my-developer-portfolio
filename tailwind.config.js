/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'customPoppins': 'Poppins, sans-serif'
      },
      colors: {
        'artificialNavyBlue': '#0F1624',
        'artificialCyan': '#13ADC7',
        'artificialBlue': '#6978D1',
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
],
}

