/** @type {import('tailwindcss').Config} */

const theme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
    },
    screens: {
      "2xs": "360px",
      xs: "480px",
      ...theme.screens,
    },
  },
  plugins: [],
};
