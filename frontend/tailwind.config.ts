import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx,js,jsx,mdx}',
    './components/**/*.{ts,tsx,js,jsx,mdx}',
    './app/**/*.{ts,tsx,js,jsx,mdx}',
    './src/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '4rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
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
        'hero-image': "url('/images/monstera.jpeg')",
        'hero-background': "url('/images/shop.jpg')",
      },
      theme: {
        backgroundSize: {
          auto: 'auto',
          cover: 'cover',
          contain: 'contain',
          '50%': '50%',
          '16': '4rem',
        },
      },
      colors: {
        primary: '#12372A',
        button: '#138808',
        logo: '#A98467',
        nav: '#A98467',
        link: '#436850',
        text: '#ADBC9F',
        border: '#D9D9D9',
        roundedButton: '#E5D9B6',
        accessColor: '#FF9100',
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
        large: '12px',
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  
} satisfies Config;

export default config;
