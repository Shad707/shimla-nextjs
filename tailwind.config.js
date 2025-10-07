/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        shimlaBlue: "#1E3A8A",
        shimlaGold: "#FACC15"
      }
    }
  },
  plugins: [],
};
