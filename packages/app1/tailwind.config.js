/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../../packages/**/*.{js,jsx,ts,tsx}"],
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
  plugins: []
};
