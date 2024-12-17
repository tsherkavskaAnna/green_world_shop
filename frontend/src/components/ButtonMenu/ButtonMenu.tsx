import React from 'react';
import { Button } from '../ui/button';
import { montserrat } from '@/app/fonts';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function ButtonMenu() {
  return (
    <div className='flex pl-10 pt-4'>
      <Link href='/shop'>
        <Button
          className={`${montserrat.className} -z-0 rounded-lg bg-logo text-white drop-shadow-lg hover:bg-yellow-700`}
        >
          Buy now
        </Button>
      </Link>
      <Link href='/about'>
        <Button
          className={`${montserrat.className} ml-4 rounded-lg bg-logo text-white drop-shadow-lg hover:bg-yellow-700`}
        >
          Explore more
          <FaArrowRight className='ml-2' />
        </Button>
      </Link>
    </div>
  );
}
