/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["coolGray"];
delete colors["blueGray"];
delete colors["trueGray"];
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      ...colors,
      black_thm_1: "#0F172A",
      white_thm_1: "#f8fafc",
      sage: "#bad2c0",
    },
    extend: {},
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "5rem",
        xl: "10rem",
        "2xl": "10rem",
      },
    },
  },
  plugins: [],
};
