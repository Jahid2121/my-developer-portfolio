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
        'artificialLightPeach': '#89B9AD',
        'artificialPastel': '#C7DCA7',
        'artificialPeach': '#FFEBD8',
        'artificialPink': '#FFC5C5'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

