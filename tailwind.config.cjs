/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ddnpblue: "#6d9fd7",
        ddnptaupe: "#cec6a5",
        ddnpgrey: "#506859",
        ddnpgreen: "#b5d0b6",
      },
      backgroundImage: {
        hero: "url('https://upload.wikimedia.org/wikipedia/commons/4/44/Dickens_dream.jpg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
// const { blue } = require("tailwindcss/colors");

// 6d9fd7 - blue
// cec6a5 - taupe background
// 506859 - grey green
// b5d0b6 - green from wix
