import { baskervvile } from '@/app/fonts';
import React from 'react';
import Image from 'next/image';

function Clients() {
  return (
    <div className='h-80 px-14'>
      <h1
        className={`${baskervvile.className} px-4 py-2 text-center text-3xl text-logo`}
      >
        Some of our trusted clients
      </h1>
      <div className='mt-5 flex flex-nowrap items-center justify-center'>
        <div className='mr-10 flex-shrink-0'>
          <Image src='/logo/zinus.png' width={320} height={320} alt='Client' />
        </div>
        <div className='mr-10'>
          <Image
            src='/logo/primrose.png'
            width={220}
            height={320}
            alt='Client'
          />
        </div>
        <div className='mr-10'>
          <img src='/logo/waifair.png' width={220} height={120} alt='Client' />
        </div>
        <div className='mr-10'>
          <img src='/logo/viyar.jpeg' width={220} height={120} alt='Client' />
        </div>
      </div>
    </div>
  );
}

export default Clients;
