'use client';
import { FaRegUser } from 'react-icons/fa';

import { montserrat } from '@/app/fonts';
import Link from 'next/link';
import React from 'react';

import { usePathname } from 'next/navigation';
import UserNav from '../user-nav';

export default function Nav() {
  const currentPath = usePathname();
  return (
    <nav className='flex space-x-4'>
      <Link
        href='/'
        className={`${montserrat.className} ${currentPath === '/' ? 'border-b-4 border-nav' : ''} rounded-md px-4 py-2 text-lg text-primary transition-colors duration-300 hover:text-button`}
      >
        Home
      </Link>
      <Link
        href='/shop'
        className={`${montserrat.className} ${currentPath === '/shop' ? 'border-b-4 border-nav' : ''} rounded-md px-4 py-2 text-lg text-primary transition-colors duration-300 hover:text-button`}
      >
        Shop
      </Link>
      <Link
        href='/about'
        className={`${montserrat.className} ${currentPath === '/about' ? 'border-b-4 border-nav' : ''} rounded-md px-4 py-2 text-lg text-primary transition-colors duration-300 hover:text-button`}
      >
        About us
      </Link>
      <Link
        href='/dashboard'
        className={`${montserrat.className} rounded-md px-7 py-3 text-sm text-primary transition-colors duration-300 hover:text-button`}
      >
        My section
      </Link>
    </nav>
  );
}
