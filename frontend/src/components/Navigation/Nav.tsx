'use client';

import { montserrat } from '@/app/fonts';
import Link from 'next/link';
import React from 'react';

import { usePathname } from 'next/navigation';
import UserNav from '../UserNav';

export default function Nav() {
  const currentPath = usePathname();

  const closeMenu = () => {
    const menuToggle = document.getElementById(
      'menu-toggle'
    ) as HTMLInputElement;
    if (menuToggle) {
      menuToggle.checked = false;
    }
  };
  return (
    <nav className='flex flex-col gap-2 lg:flex-row lg:space-x-4'>
      <Link
        href='/'
        onClick={closeMenu}
        className={`${montserrat.className} ${
          currentPath === '/' ? 'border-b-4 border-nav' : ''
        } rounded-none py-2 text-lg text-primary transition-colors duration-300 hover:text-button lg:px-4`}
      >
        Home
      </Link>
      <Link
        href='/products'
        onClick={closeMenu}
        className={`${montserrat.className} ${
          currentPath === '/products' ? 'border-b-4 border-nav' : ''
        } rounded-none py-2 text-lg text-primary transition-colors duration-300 hover:text-button lg:px-4`}
      >
        Shop
      </Link>
      <Link
        href='/about'
        onClick={closeMenu}
        className={`${montserrat.className} ${
          currentPath === '/about' ? 'border-b-4 border-nav' : ''
        } rounded-none py-2 text-lg text-primary transition-colors duration-300 hover:text-button lg:px-4`}
      >
        About us
      </Link>
      <UserNav />
    </nav>
  );
}
