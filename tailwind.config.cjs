/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      sm: "460px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "dark-grey": "hsl(220, 17%, 93%)",
        "light-grey": "hsl(221, 13%, 46%)",
        "hover-grey": "hsl(217, 16%, 84%)",
      },
    },
  },
  plugins: [],
}