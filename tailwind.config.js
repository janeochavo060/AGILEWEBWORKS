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
        josefin: ["josefin"],
        jost: ["jost"],
        angkor: ["angkor"],
      },
      keyframes: {
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-30px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(-30px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        gradientMove: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
      },
      animation: {
        fadeInLeft: "fadeInLeft 0.9s ease-out",
        fadeInRight: "fadeInLeft 0.9s ease-out",
        "gradient-move": "gradientMove 2s linear infinite",
      },
      backgroundImage: {
        "animated-gradient": "linear-gradient(130deg, #FF6700 20%, #004CE4 47%, #CB5200 63%)",
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
