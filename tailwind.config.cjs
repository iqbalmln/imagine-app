/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-brand-primary': '#0569a2',
        'blue-brand-secondary': '#237bad',
        'blue-brand-tertiary': '#68a4c7',
      }
    },
  },
  plugins: [],
}
