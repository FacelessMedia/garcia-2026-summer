import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
      colors: {
        cream: {
          50: "#fdfaf3",
          100: "#f9f1df",
          200: "#f3e3bd",
        },
        forest: {
          50: "#f1f6f1",
          100: "#dbe8db",
          500: "#3f6b46",
          600: "#345a3a",
          700: "#2a4a30",
          900: "#1a2e1f",
        },
        sand: {
          100: "#f5ecd9",
          300: "#e2c98a",
          500: "#c79e4a",
          700: "#8a6a2a",
        },
        ink: {
          700: "#2a2a2a",
          900: "#161616",
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,20,20,0.04), 0 8px 24px rgba(20,20,20,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
