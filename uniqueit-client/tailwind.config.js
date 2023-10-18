/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22015B",
        "title-color": "#1C1D1B",
        secondary: "#CA334F",
      },
      maxWidth: {
        standard: "90rem",
        secondary: "40rem",
        large: "125rem",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
