import type { Metadata } from 'next';
import { inter, baskervvile, blinker, montserrat } from './fonts';
import '../styles/global.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getServerSession } from 'next-auth/next';
import SessionProvider from '@/context/sessionProvider';
import { authOptions } from './api/auth/[...nextauth]/authOptions';
import { Toaster } from 'sonner';

import 'react-photo-view/dist/react-photo-view.css';
import React from 'react';
import ReactQueryProvider from '@/context/queryProvider';

export const metadata: Metadata = {
  title: 'Green Planet',
  description: 'Plants shop',
  icons: {
    icon: '/favicon/pianta-da-vaso-48.png',
  },
};

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${baskervvile.variable} ${montserrat.variable} ${blinker.variable}`}
      >
        <ReactQueryProvider>
          <Toaster
            position='top-center'
            toastOptions={{
              classNames: {
                error: 'bg-red-400',
                success: 'text-green-400',
                warning: 'text-yellow-400',
                info: 'bg-blue-400',
              },
            }}
          />
          <SessionProvider session={session}>
            <link
              rel='icon'
              href='/favicon/pianta-da-vaso-96.png'
              sizes='any'
            />
            <Header />
            <main className='z-0'>{children}</main>
            <Footer />
          </SessionProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
