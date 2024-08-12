import type { Metadata } from 'next';
import { inter, baskervvile, blinker, montserrat } from './fonts';
import './globals.css';
import Nav from '@/components/Navigation/Nav';

export const metadata: Metadata = {
  title: 'Green World',
  description: 'Plants shop',
  icons: {
    icon: '/favicon/plants-48.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${baskervvile.variable} ${montserrat.variable} ${blinker.variable}`}
      >
        <link rel='icon' href='/favicon/plants-96.png' sizes='any' />
        {children}
      </body>
    </html>
  );
}
