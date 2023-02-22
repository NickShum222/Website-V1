/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: '#060C1D',
        secondary: '#001d3d',
        tertiary: '#003566',
        semiWhite: '#F5F5F5',
      },
    },
  },
  plugins: [

  ],
}
