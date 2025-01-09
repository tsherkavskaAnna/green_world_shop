import { baskervvile } from '@/app/fonts';
import React from 'react';
import Image from 'next/image';

function Clients() {
  return (
    <div className='px-14 py-4 lg:h-80'>
      <h1
        className={`${baskervvile.className} text-center text-2xl text-logo md:px-4 md:py-2 md:text-3xl`}
      >
        Some of our trusted clients
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-4 md:mt-5 lg:flex-nowrap'>
        <div className='md:mr-10'>
          <Image src='/logo/zinus.png' width={320} height={120} alt='Client' />
        </div>
        <div className='md:mr-10'>
          <Image
            src='/logo/primrose.png'
            width={320}
            height={320}
            alt='Client'
          />
        </div>
        <div className='md:mr-10'>
          <Image
            src='/logo/waifair.png'
            width={320}
            height={120}
            alt='Client'
          />
        </div>
        <div className='md:mr-10'>
          <Image
            src='/logo/decorpad.png'
            width={320}
            height={120}
            alt='Client'
          />
        </div>
      </div>
    </div>
  );
}

export default Clients;
