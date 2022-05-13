const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#315eff",
        secondary: "#7e5bef",
        tertiary: "#ff49db",
      },
      notification: {
        green: "#6E9887",
        yellow: "",
        red: "",
      },
    },
  },
  plugins: [],
};
