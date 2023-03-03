const theme = require("tailwindcss/defaultTheme");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--playfair-display)", ...fontFamily.serif],
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      lineHeight: {
        1.75: "1.75",
      },
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
