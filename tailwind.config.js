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
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.9)',
      },
      colors: {
        primary: '#060C1D',
        secondary: '#001F54',
        tertiary: '#034078',
        semiWhite: '#F5F5F5',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ['Lato', "sans-serif"],
      },
    },
  },
  plugins: [],
}
