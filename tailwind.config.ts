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
        background: "var(--background)",
        foreground: "var(--foreground)",
        parchment: {
          light: "#faf5ea",
          DEFAULT: "#f3ead8",
          dark: "#e8dbc0",
          deep: "#d9c6a0",
        },
        ink: {
          DEFAULT: "#2b1d16",
          soft: "#4f3d32",
          muted: "#7d6757",
        },
        bordo: {
          light: "#9c3442",
          DEFAULT: "#7b1e2b",
          dark: "#5a1420",
        },
        gold: "#a8803a",
      },
      fontFamily: {
        serif: ['var(--font-body)', 'Georgia', 'Times New Roman', 'serif'],
        display: ['var(--font-display)', 'var(--font-body)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'Georgia', 'serif'],
      },
      screens: {
        'ultrawide': '1920px',
        '2xl': '1536px',
        '3xl': '2560px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      }
    },
  },
  plugins: [],
};
export default config;