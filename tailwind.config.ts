import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  corePlugins: {
    container: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      midxl: { min: "1200px" },
      ...defaultTheme.screens,
      "min-aspect": { raw: "(min-aspect-ratio: 1/1)" },
    },

    extend: {
      screens: {
        xxs: "381px",
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
  plugins: [
    // @ts-ignore
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "100%",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@screen md": {
            maxWidth: "100%",
          },
          "@screen lg": {
            maxWidth: "100%",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
          "@screen 2xl": {
            maxWidth: "1536px",
          },
          "@screen 3xl": {
            maxWidth: "1920px",
            paddingLeft: "8.75rem",
            paddingRight: "8.75rem",
          },
        },
      });
    },
  ],
};
export default config;
