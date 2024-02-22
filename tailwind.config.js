/** @type {import('tailwindcss').Config} */

export default {

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        roboto : ["Roboto"],
      },
      colors: {
        black: "#222222",
        "gray-600": "#717171", // Using the gray color palette
        "dblue":"#100e47"
      },
    },
  },
  plugins: [],
};
