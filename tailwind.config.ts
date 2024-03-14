import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      midxl: { min: "1200px" },
      ...defaultTheme.screens,
    },

    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },

      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "4rem",
        "3xl": "8.75rem",
      },
    },

    extend: {
      screens: {
        "3xl": "1920px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-purple": "#BAB2FF",
        "medium-purple": "#A69DF0",
        "dark-purple": "#9288E6",
        red: "#A02710",
        "smoke-red": "#8E210D",
        "light-gray": "#EAEAEA",
      },
      fontFamily: {
        "gibson-medium": ["var(--font-gibson-medium)"],
        area: ["var(--font-area)"],
        "area-thin": ["var(--font-area-thin)"],
        "area-light": ["var(--font-area-light)"],
        "area-medium": ["var(--font-area-medium)"],
        "area-semibold": ["var(--font-area-semibold)"],
        "area-bold": ["var(--font-area-bold)"],
        "area-extrabold": ["var(--font-area-extrabold)"],
      },
    },
  },
  plugins: [],
};
export default config;
