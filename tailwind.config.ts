import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./data/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}", "./content/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        accent: "#f97316",
        soft: "#f8fafc",
        slate: "#334155",
        success: "#22c55e",
        warning: "#facc15"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"]
      },
      boxShadow: {
        card: "0px 14px 30px -15px rgba(15, 23, 42, 0.45)"
      }
    }
  },
  plugins: [],
};

export default config;
