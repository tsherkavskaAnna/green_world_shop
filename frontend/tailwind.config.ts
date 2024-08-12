
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,js,jsx,mdx}',
    './components/**/*.{ts,tsx,js,jsx,mdx}',
    './app/**/*.{ts,tsx,js,jsx,mdx}',
    './src/**/*.{ts,tsx,js,jsx,mdx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "4rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-main)'],
        baskervvile: ['var(--font-logo)'], 
        montserrat: ['var(--font-primary)'],
        blinker: ['var(--font-secondary)'],
      },
       backgroundImage: {
        'hero-image': "url('/images/monsterra.jpeg')"
      },
      theme: {
        backgroundSize: {
          'auto': 'auto',
          'cover': 'cover',
          'contain': 'contain',
          '50%': '50%',
          '16': '4rem',
        }
      },
      colors: {
        primary: '#12372A',
        button: '#138808',
        logo: '#A98467',
        nav: '#A98467',
        link: '#436850',
        text: '#ADBC9F',
        border: '#D9D9D9',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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