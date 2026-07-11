import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm terracotta ramp — replaces the default sky-blue "primary" so
        // existing components inherit the new brand instead of blue.
        primary: {
          50: "#FBF0EB",
          100: "#F5DCCF",
          200: "#EABBA1",
          300: "#DE9873",
          400: "#D0744A",
          500: "#C0562E",
          600: "#9A421F",
          700: "#7E3A1C",
          800: "#5A2914",
          900: "#3E1C0E",
        },
        // Semantic design tokens (see DESIGN.md)
        terracotta: "#C0562E",
        "terracotta-deep": "#9A421F",
        ochre: "#CA8A47",
        ink: "#1C1917",
        graphite: "#44403C",
        stone: "#78716C",
        "stone-light": "#A8A29E",
        hairline: "#E7E5E4",
        surface: "#FFFFFF",
        canvas: "#FBFAF8",
        "canvas-sunk": "#F4F1EC",
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
        serif: ["var(--font-spectral)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        lift: "0 8px 24px -8px rgba(28, 25, 23, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
