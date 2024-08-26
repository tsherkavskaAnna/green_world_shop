'use client';
import { FaRegUser } from 'react-icons/fa';

import { montserrat } from '@/app/fonts';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { TfiShoppingCart } from 'react-icons/tfi';
import { usePathname } from 'next/navigation';

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
        href='/login'
        className={`${montserrat.className} rounded-md px-7 py-3 text-sm text-primary transition-colors duration-300 hover:text-button`}
      >
        Login
      </Link>
      <Button
        className={`${montserrat.className} bg-trasparent hover:bg-transparent`}
      >
        <div className='absolute rounded-full border-2 border-slate-100 bg-white p-4 hover:bg-slate-200'>
          <TfiShoppingCart size={20} />
        </div>
        <div className='relative bottom-3 right-7 rounded-full border-2 border-red-500 bg-red-500 text-white'>
          <span className='w-full p-2'>1</span>
        </div>
      </Button>
    </nav>
  );
}
