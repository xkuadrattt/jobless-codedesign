/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#001AFF",
      },
      dropShadow: {
        "2xl": "0 15px 30px rgba(0, 26, 255, .2)",
        section: "0 30px 60px rgba(0, 26, 255, .1)",
      },
    },
  },
  plugins: [],
};
