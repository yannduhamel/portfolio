/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        migra: ["Migra Extrabold"],
        inter: ["Inter"],
      },
      colors: {
        current: "currentColor",
        saffron: "#F3CA40",
      },
    },
  },
  plugins: [],
};
