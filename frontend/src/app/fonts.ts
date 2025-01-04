import { Baskervville, Blinker, Inter, Montserrat } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-main',
});
export const baskervvile = Baskervville({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-logo',
});

export const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600'],
  variable: '--font-primary',
});

export const blinker = Blinker({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-secondary',
});
