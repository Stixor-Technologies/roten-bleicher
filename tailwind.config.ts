import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-purple": "#BAB2FF",
        "medium-purple": "#9288E6",
        red: "#A02710",
      },
      fontFamily: {
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
