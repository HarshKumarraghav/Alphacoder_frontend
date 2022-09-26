/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["Patua One", "cursive"],
        main: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#171717",
        "primary-light": "#212121",
        "primary-color": "#008672",
        text: "#EEEEEE",
        "primary-box": "#3E3E3E",
      },
      boxShadow: {
        "light-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        glass: "0 0 1rem 0 rgba(0, 0, 0, .2)",
      },
      height: {
        card: "300px",
        button: "40px",
      },
      width: {
        card: "250px",
        button: "100px",
      },
    },
  },
  plugins: [],
};
