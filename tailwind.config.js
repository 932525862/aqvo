

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "about-hero": "url(./src/assets/about.jpg)"
      },
      colors: {
        color1: "#d1ab7d"
      }
    },
  },
  plugins: [],
}
