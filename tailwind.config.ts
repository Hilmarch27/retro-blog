import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        'retro-sm': '3px 3px 0px 0px rgba(0, 0, 0)',  // Small shadow
        'retro-md': '5px 5px 0px 0px rgba(0, 0, 0)',  // Medium shadow (default)
        'retro-lg': '8px 8px 0px 0px rgba(0, 0, 0)',  // Large shadow
        'retro': '5px 5px 0px 0px rgba(0, 0, 0)',     // Default shadow (alias for retro-md)
      },
      colors: {
        primary: {
          DEFAULT: '#FFC72C',  // Warna saat light mode
          dark: '#2563EB',   // Warna saat dark mode
        },
        secondary: {
          light: '#9333EA',
          dark: '#7C3AED',
        },
        text: {
          light: '#111827',
          dark: '#F9FAFB',
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config



export default config