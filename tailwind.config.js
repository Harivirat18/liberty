/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '992px',
        xl: '1240px',
      },
      colors: {
        tcolor: {
          bg: "#7453fc",
          white: "#fff",
          solid: "#404245", 
          bgdark: "#282b2f",
          sky:"#3cf"
        },
      }
    },
  },
  plugins: [],
}

