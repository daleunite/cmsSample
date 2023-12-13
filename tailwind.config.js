/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
      colors: {
        'primary': '#5E9AD7'
      }
    },
  },
  plugins: [],
}