/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        mainYellow: "#f9ea85",
        mainBlack: "#2e2e2e",
        mainPurple: "#bb85f9",
        mainGreen: "#6cc25b",
        mainRed: "#f98585",
      },
    },
  },
  plugins: [],
};
