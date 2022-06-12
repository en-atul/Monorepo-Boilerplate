/** @type {import('tailwindcss').Config} */
const path = require("path");

module.exports = {
  content: [path.join(__dirname, "./packages/**/*.{js,ts,jsx,tsx}")],
  theme: {
    extend: {
      colors: {
        primary: "#315eff",
        secondary: "#7e5bef",
        tertiary: "#ff49db"
      },
      notification: {
        green: "#6E9887",
        yellow: "",
        red: ""
      }
    }
  },
  plugins: [],
}
