import { baskervvile, montserrat } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from "@/components/ui/button"

export default function Nav() {
  return (
    <div className='flex items-center justify-between space-x-4 '>
      <div className='flex flex-nowrap'>
        <Image src='/logo/logo-1.png' width={55} height={45} alt='Logo' />
        <h1
        className={`${baskervvile.className} rounded-md px-4 py-2 text-3xl transition-colors duration-300 text-logo`}>harmony</h1>
     </div>
      <nav className='flex space-x-4'>
        <Link
          href='/'
          className={`${montserrat.className} rounded-md px-4 py-2 text-lg text-primary transition-colors duration-300 hover:text-button`}
        >
          Home
        </Link>
        <Link
          href='/shop'
          className={`${montserrat.className} rounded-md px-4 py-2 text-lg text-primary transition-colors duration-300 hover:text-button`}
        >
          Shop
        </Link>
        <Link
          href='/about'
          className={`${montserrat.className} rounded-md px-4 py-2 text-lg text-primary transition-colors duration-300 hover:text-button`}
        >
          About us
        </Link>
        <Button className={`${montserrat.className} rounded-full text-xl bg-button p-4 hover:bg-green-700 text-white`}>Follow us</Button>
      </nav>
    </div>
  );
}
