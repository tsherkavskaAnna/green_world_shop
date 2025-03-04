import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';

function Baner() {
  return (
    <div className='block h-10 w-full bg-link'>
      <div className='flex h-full items-center justify-center'>
        <h1 className='md:text-md font-blinker text-sm tracking-wide text-white antialiased'>
          Free shipping in EU on orders over 100€
        </h1>
        <TbTruckDelivery className='ml-3 text-white' size={20} />
      </div>
    </div>
  );
}

export default Baner;
