const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/background.png')",
        "hero-pattern-mobile": "url('/src/assets/background_mobile.png')",
      },
      colors: {
        "green-500": "#10B981",
        "blue-dark": "#1B1C57",
        "gray-500": "#6B7280",
        "gray-primary": "#626687",
        "gray-secondary": "#68799F",
        "shade-02": "#222",
        "neutral-07": "#777777",
        "neutral-08": "#5E5E5E",
        "neutral-80": "#333",
      },
      fontFamily: {
        lexend: "Lexend, sans-serif",
        "open-sans": "Open Sans, sans-serif",
      },
      screens: {
        // prettier-ignore
        "xxs": { "max": "639px" },
        ...defaultTheme.screens,
      },
    },
  },

  plugins: [],
};
