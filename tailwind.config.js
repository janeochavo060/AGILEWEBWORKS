const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-black": "#323232",
        "dim-black": "#282828",
      },
      fontFamily: {
        lato: ["lato", ...defaultTheme.fontFamily.sans],
        jomolhari: ["jomolhari"],
      },
    },
    screens: {
      xs: "375px",
      "1xs": "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.4)", // Custom shadow
        },
        ".text-shadow-lg": {
          "text-shadow": "4px 4px 6px rgba(0, 0, 0, 0.5)", // Larger shadow
        },
        ".text-shadow-none": {
          "text-shadow": "none", // No shadow
        },
      });
    },
  ],
};
