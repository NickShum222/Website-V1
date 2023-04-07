/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");


module.exports = withMT ({
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/background.svg')",
      },
      boxShadow: {
        'border': '0 0px 75px -15px rgba(0, 0, 0, 0.9)',
        
      },
      colors: {
        grey: '#151515',
        primary: '#060C1D',
        
        secondary: '#001d3d',
        tertiary: '#003566',
        highlight: '#00C6BE',
        semiwhite: '#BFBFBF',
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
});
