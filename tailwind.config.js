
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
      },
      screens: {
        ms: "360px",
        ss: "480px",
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
}
