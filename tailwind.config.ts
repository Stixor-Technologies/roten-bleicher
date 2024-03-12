import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      // screens: {
      //   sm: "100%",
      //   // md: "100%",
      //   // lg: "100%",
      //   // xl: "100%",
      // },

      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "4rem",
        "3xl": "8.8rem",
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
