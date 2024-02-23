/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
      colors: {
        black: "#222222",
        "gray-600": "#717171", // Using the gray color palette
        dblue: "#100e47",
      },
      backgroundImage: {
        home1: "url('./assets/home1.jpeg')",
        home2: "url('./assets/home2.jpeg')",
      },
      screens: {
        "2xl": "1685px", // Add your custom breakpoint here
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
