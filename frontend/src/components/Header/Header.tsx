import React from 'react';
import Image from 'next/image';
import Nav from '../Navigation/Nav';
import Baner from '../Baner/baner';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';

function Header() {
  return (
    <div className='fixed z-50 w-full'>
      <Baner />
      <div className='mx-auto w-full font-baskervvile text-black'>
        {/* Logo e Navigazione Desktop */}
        <div className='flex h-20 flex-nowrap items-center justify-between gap-10 bg-white py-4 sm:px-12'>
          <div className='flex flex-nowrap'>
            <Link href='/'>
              <Image
                src='/logo/logo-1.png'
                alt='Logo'
                width={50}
                height={50}
                className='object-contain'
              />
            </Link>
            <h1 className='rounded-md px-4 py-2 font-baskervvile text-3xl text-logo transition-colors duration-300'>
              Harmony
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex'>
            <Nav />
          </div>

          {/* Hamburger Menu */}
          <div className='relative lg:hidden'>
            <input
              type='checkbox'
              id='menu-toggle'
              className='peer hidden'
              defaultChecked={false}
            />
            <label
              htmlFor='menu-toggle'
              className='cursor-pointer text-2xl text-black'
            >
              <MenuIcon />
            </label>

            {/* Mobile Menu */}
            <div className='absolute right-0 hidden h-screen w-96 flex-col gap-4 bg-white p-4 transition-all duration-300 peer-checked:flex lg:hidden'>
              <Nav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
