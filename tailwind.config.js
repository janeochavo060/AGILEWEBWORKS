/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00AAE8", // light blue
        "accent-1": "#B2272D", // red
        "accent-2": "#386EC1", // blue
        "dim-black": "#353535",
      },
      maxWidth: {
        content: "1210px",
        "95p": "95%",
      },
      borderRadius: {
        xxl: "32px",
      },
      keyframes: {
        "scale-in": {
          from: {
            transform: "scale(0)",
          },
          to: {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "scale-in": "scale-in 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
