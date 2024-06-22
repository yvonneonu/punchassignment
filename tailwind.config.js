const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      swit: ["Switzer-Light", "sans-serif"],
      switMed: ["Switzer-Medium", "sans-serif"],
      switBold: ["Switzer-Bold", "sans-ser"],
      switReg: ["Switzer-Regular", "sans-serif"],
      switSbold: ["Switzer-Semibold", "sans-serif"],
    },
    extend: {
      colors: {
        rwilt: {
          "tone-50": "#525AA0",
          "tone-60": "#202229",
          "tone-70": "#959595",
          "tone-80": "#F8F8F8",
          "tone-90": "#C7F4C2",
          "tone-100": "#D2D2D2",
          "tone-101": "#EDEFFF",
          "tone-102": "#FFBE2E",
          "tone-103": "#FDDD8B",
          "tone-104": "#F3F3F3",
          "tone-105": "#BFB5FF",
          "tone-106": "#D6D6D6",
          "tone-107": "#0C0C0C",
          "tone-108": "#292B34",
          "tone-109": "#E8E8E8",
        },
      },
    },
  },

  plugins: [],
});
