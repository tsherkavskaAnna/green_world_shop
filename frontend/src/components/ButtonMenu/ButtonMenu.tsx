import React from 'react';
import { Button } from '../ui/button';
import { montserrat } from '@/app/fonts';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function ButtonMenu() {
  return (
    <div className='mt-8 flex flex-col pt-4 sm:flex-row sm:flex-nowrap md:ml-10'>
      <Link href='/products'>
        <Button
          size='lg'
          className={`${montserrat.className} -z-0 mb-4 w-full rounded-lg border-2 border-nav bg-inherit text-nav drop-shadow-lg transition delay-150 duration-300 ease-custom-ease hover:bg-nav hover:text-white`}
        >
          Buy now
        </Button>
      </Link>
      <Link href='/about'>
        <Button
          size='lg'
          className={`${montserrat.className} w-full rounded-lg border-2 border-nav bg-inherit text-nav drop-shadow-lg transition delay-150 duration-300 ease-custom-ease hover:bg-nav hover:text-white sm:ml-4`}
        >
          Explore more
          <FaArrowRight className='ml-2' />
        </Button>
      </Link>
    </div>
  );
}
