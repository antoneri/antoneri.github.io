const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["index.html", "main.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors,
    extend: {
      scale: {
        99: ".99",
        101: "1.01",
      },
    },
    nightwind: {
      typography: true,
    },
  },
  variants: {
    extend: {
      translate: ["group-hover"],
      scale: ["group-hover"],
    },
  },
  plugins: [require("nightwind"), require("@tailwindcss/typography")],
};
