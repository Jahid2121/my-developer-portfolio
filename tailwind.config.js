/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-background': '#0F1624'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

