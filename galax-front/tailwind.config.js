/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/App.js','./src/components/Carousel.js', './src/components/Cards.js', './src/components/List.js','./src/components/ListControl.js','./src/components/ListController.js', './src/components/pages/Film.js'], // Adjust the path based on your project structure
  darkMode: true, // or 'media' or 'class'
  theme: {
    mytheme: {
      "primary": "#9ca3af",
      "secondary": "#8b5cf6",
      "accent": "#00ffff",
      "neutral": "#9ca3af",
      "base-100": "#374151",
      "info": "#0000ff",
      "success": "#00ff00",
      "warning": "#ff0000", // Corrected typo here
      "error": "#ff0000",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "galactic-blue": "#3D5A80",
        "nebula-purple": "#955196",
  "supernova-yellow": "#EE964B",
  "celestial-gold": "#F8B400",
  "starlight-white": "#EDF6F9",
  "meteor-orange": "#FF6B6B",
  "comet-green": "#2CA58D",
  "cosmic-red": "#AD4379",
  "interstellar-teal": "#6B7BD9",
  "astral-pink": "#FF7A5A",
  "space-gray": "#616161",
  "stellar-silver": "#C8C8C8",
  "black-hole-black": "#000000",
      },
    },
  },
  variants: {
    extend: {
      width: {
        '43': '170px'
      },
    },
  },
  plugins: [require("daisyui")],
}
