import Image from 'next/image';
import React from 'react';

function ServicesPart() {
  return (
    <div className='flex h-96 flex-nowrap justify-center bg-white p-8'>
      <div className='p-8'>
        <Image
          src='/icons/quality.png'
          width={80}
          height={80}
          alt='quality'
          className='mb-4'
        />
        <span className='text-link'>
          Unbeatable quality We source directly from top-rated growers, so we
          can sell the finest quality plants at the very best prices.
        </span>
      </div>
      <div className='p-8'>
        <Image
          src='/icons/hand.png'
          width={80}
          height={80}
          alt='hand'
          className='mb-4'
        />
        <span className='text-link'>
          Want hands-on plant expertise IRL? Stop by one of our stores in NYC
          and Bethesda to explore more plants, planters, & care accessories.
        </span>
      </div>
      <div className='p-8'>
        <Image
          src='/icons/smile.png'
          width={80}
          height={80}
          alt='smile'
          className='mb-4'
        />
        <span className='text-link'>
          Our team preps, prunes, & carefully packs every order—meaning lots of
          care goes into every step. If your plant arrives damaged or unhealthy,
          we replace it for free.
        </span>
      </div>
    </div>
  );
}

export default ServicesPart;
