import React from 'react';
import Image from 'next/image';
import Nav from '../Navigation/Nav';
import Baner from '../Baner/baner';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';

function Header() {
  return (
    <>
      <nav className='fixed z-50 mb-2 w-full bg-white'>
        <Baner />
        <div className='w-screen-2xl mx-auto flex flex-wrap items-center justify-between px-4 py-4 lg:px-10'>
          <div className='flex flex-nowrap items-center gap-2'>
            <Link href='/'>
              <Image
                src='/logo/logo-2.png'
                alt='Logo'
                width={45}
                height={40}
                className='object-contain'
              />
            </Link>
            <h1 className='font-brisbane hidden rounded-md py-2 text-4xl tracking-wide text-button sm:inline-block'>
              Harmony
            </h1>
          </div>
          {/* Checkbox per toggle menu */}
          <input type='checkbox' id='menu-toggle' className='peer hidden' />

          {/* Pulsante hamburger menu */}
          <label
            htmlFor='menu-toggle'
            className='inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden'
          >
            <MenuIcon className='h-6 w-6' aria-hidden={true} />
          </label>
          <div
            className='hidden w-full peer-checked:block lg:block lg:w-auto'
            id='menu-content'
          >
            <ul className='mt-4 flex flex-col items-center gap-3 rounded-lg bg-gray-50 lg:mt-0 lg:flex-row lg:space-x-8 lg:bg-transparent rtl:space-x-reverse'>
              <Nav />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
