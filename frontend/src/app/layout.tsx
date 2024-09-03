import type { Metadata } from 'next';
import { inter, baskervvile, blinker, montserrat } from './fonts';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SessionProvider from '@/context/sessionProvider';

export const metadata: Metadata = {
  title: 'Green World',
  description: 'Plants shop',
  icons: {
    icon: '/favicon/plants-48.png',
  },
};

export default async function MainLayout({
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
        <Header />
        <main className='z-0 px-12'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
