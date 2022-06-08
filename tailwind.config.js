const defaultColors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  backgroundImage: {
    "main-bgImage": "url('./src/assets/images/backgroundImage.jpg')",
  },
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        primary: "#111720",
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
