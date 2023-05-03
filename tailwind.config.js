/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "whiteColor":"#f9f7f3",
        "yellowColor":"#ffcf00",
        "blackColor":"#252422",
        "shdowColor":"#cfd7c7"
      }
    },
  },
  plugins: [],
}

