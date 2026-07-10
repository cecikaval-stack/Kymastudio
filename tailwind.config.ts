import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          white: "#FAF8F4",
        },
        mediterranean: {
          DEFAULT: "#3F78A8",
          blue: "#3F78A8",
        },
        sea: {
          DEFAULT: "#6DA8C9",
          blue: "#6DA8C9",
        },
        sand: "#E7DCCF",
        stone: "#CFC8BE",
        charcoal: "#222222",
        olive: {
          DEFAULT: "#8A8B6E",
          light: "#A8A990",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        editorial: "72rem",
        narrow: "42rem",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(34, 34, 34, 0.06)",
        lift: "0 12px 40px -8px rgba(34, 34, 34, 0.1)",
        inner: "inset 0 1px 0 rgba(255, 255, 255, 0.6)",
      },
      borderRadius: {
        organic: "2rem",
        "organic-lg": "3rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      animation: {
        "wave-drift": "wave-drift 12s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        "wave-drift": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-2%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
