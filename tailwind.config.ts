import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
      },
      colors: {
        // Chicago flag palette + Lake Michigan + architectural neutrals
        chicago: {
          sky: "#B3DDF2",      // flag blue (Pantone 290)
          blue: "#2C5C9C",     // deeper accent blue
          deep: "#1A3D6E",     // Lake Michigan depth
          navy: "#0B2845",     // night sky over the lake
          red: "#D8232A",      // flag red (Pantone 199)
          crimson: "#9E1217",  // deeper red shadow
          cream: "#F7F1E1",    // warm white
          paper: "#FDFAF6",    // background paper
          gold: "#C28A2C",     // architectural brass
          sand: "#E9D8AE",     // soft sand
          stone: "#2A2A2A",    // body ink
          slate: "#475569",    // muted text
          mist: "#E7EEF6",     // pale blue tint
        },
        // Aliases used by older components — keep for backward compat
        cream: {
          50: "#FDFAF6",
          100: "#F7F1E1",
          200: "#E9D8AE",
        },
        ink: {
          700: "#2A2A2A",
          900: "#0F1620",
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,40,69,0.04), 0 8px 24px rgba(11,40,69,0.08)",
        lift: "0 10px 30px -10px rgba(11,40,69,0.25), 0 2px 6px rgba(11,40,69,0.05)",
        starGlow: "0 0 0 4px rgba(216,35,42,0.15)",
      },
      keyframes: {
        floatIn: {
          "0%": { opacity: "0", transform: "translateY(8px) scale(0.97)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        floatIn: "floatIn 180ms ease-out",
        shimmer: "shimmer 1.6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
