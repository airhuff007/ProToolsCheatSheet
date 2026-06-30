import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["ui-monospace", "JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        surface: {
          DEFAULT: "#111827",
          raised: "#1f2937",
        },
        accent: {
          DEFAULT: "#3b82f6",
          hover: "#2563eb",
        },
        shortcut: {
          bg: "#1e3a5f",
          border: "#3b82f6",
          text: "#93c5fd",
        },
      },
    },
  },
  plugins: [],
};

export default config;
