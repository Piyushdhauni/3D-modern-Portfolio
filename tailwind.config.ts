import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        paper: "#f2f1ec",
        acid: "#cdff3d",
        acidDim: "#9fce1f",
        line: "#2b2b2b",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        serifitalic: ["var(--font-cormorant)", "serif"],
        mono: ["var(--font-dmmono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.28em",
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
};

export default config;
