import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef5fb",
          100: "#d7e8f4",
          200: "#b5d4e8",
          300: "#86b7d6",
          400: "#5194bd",
          500: "#2f77a3",
          600: "#245f84",
          700: "#214e6c",
          800: "#1f435a",
          900: "#173149",
          950: "#0d2133"
        },
        gold: {
          50: "#fff9e8",
          100: "#fff0bf",
          200: "#ffe28a",
          300: "#ffd054",
          400: "#f8b721",
          500: "#d99b0b",
          600: "#b97806",
          700: "#95590a",
          800: "#7b4710",
          900: "#693b13"
        },
        mist: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 33, 51, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
