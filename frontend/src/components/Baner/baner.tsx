import { blinker } from '@/app/fonts';
import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';

function Baner() {
  return (
    <div className='z-50 h-10 w-full bg-link'>
      <div className='flex h-full items-center justify-center'>
        <h1
          className={`${blinker.className} tracking-wide text-white antialiased`}
        >
          Free shipping in Italy above 50€ and EU above 100€
        </h1>
        <TbTruckDelivery className='ml-3 text-white' size={20} />
      </div>
    </div>
  );
}

export default Baner;
