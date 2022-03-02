const defaultColors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        primary: "#FDC413",
        primaryLight: "#8A2BE2",
        secondary: "#000000",
        secondaryGray: "#95A3A4",
      },
    },
  },
  plugins: [],
};
