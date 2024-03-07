/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.js',
    './/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/Carousel.js', 
    './src/components/Card.js', 
    './src/components/List.js',
    './src/components/ListControl.js',
    './src/components/ListController.js', 
    './src/components/pages/Film.js'], 
  theme: {
    mytheme: {
      "primary": "#9ca3af",
      "secondary": "#8b5cf6",
      "accent": "#00ffff",
      "neutral": "#9ca3af",
      "base-100": "#374151",
      "info": "#0000ff",
      "success": "#00ff00",
      "warning": "#ff0000",
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
