import React from 'react';
import { baskervvile } from '@/app/fonts';
import Image from 'next/image';
import Nav from '../Navigation/Nav';
import Baner from '../Baner/baner';

function Header() {
  return (
    <div className='fixed z-50 w-full'>
      <Baner />
      <div className='h-20 bg-white px-10 py-4'>
        <div className='flex items-center justify-between space-x-4 pb-3'>
          <div className='flex flex-nowrap'>
            <Image src='/logo/logo-1.png' width={55} height={45} alt='Logo' />
            <h1
              className={`${baskervvile.className} rounded-md px-4 py-2 text-3xl text-logo transition-colors duration-300`}
            >
              harmony
            </h1>
          </div>
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Header;
