/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/App.js','./src/Cards.js'], // Adjust the path based on your project structure
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Example custom colors
        primary: '#FF6347',
        secondary: '#6495ED',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
  