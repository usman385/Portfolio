const defaultColors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        primary: "#FCDA69",
        primaryLight: "#8873F0",
        secondary: "#000000",
        secondaryGray: "#FFFFFF",
        bgsecondaryGray: "#F6F6F6",
        darkgray: "#656467",
      },
    },
  },
  plugins: [],
};
