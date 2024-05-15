const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    flowbite.content(),
  ],

  theme: {
    extend: {
      colors: {
        "xmu-blue": {
          100: "#003D87",
          80: "#33639F",
          70: "#4D77AB",
          10: "#E6EBF3",
        },
      },
      screens: {
        "ml": "896px",
      },
    },
  },

  plugins: [
    flowbite.plugin(),
  ],
}
