import React from 'react';
import { Button } from '../ui/button';
import { montserrat } from '@/app/fonts';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function ButtonMenu() {
  return (
    <div className='flex flex-col pt-4 sm:flex-row sm:flex-nowrap md:pl-10'>
      <Link href='/shop'>
        <Button
          className={`${montserrat.className} -z-0 mb-4 w-full rounded-lg bg-logo text-white drop-shadow-lg hover:bg-yellow-700`}
        >
          Buy now
        </Button>
      </Link>
      <Link href='/about'>
        <Button
          className={`${montserrat.className} w-full rounded-lg bg-logo text-white drop-shadow-lg hover:bg-yellow-700 sm:ml-4`}
        >
          Explore more
          <FaArrowRight className='ml-2' />
        </Button>
      </Link>
    </div>
  );
}
