import { baskervvile } from '@/app/fonts';
import Image from 'next/image';
import React from 'react';

function ServicesPart() {
  return (
    <div className='h-auto bg-white p-8 md:flex md:flex-nowrap md:justify-items-center lg:h-96'>
      <div className='text-link md:p-8'>
        <Image
          src='/icons/quality.png'
          width={80}
          height={80}
          alt='quality'
          className='z-0 mb-4'
          style={{
            filter:
              'invert(30%) sepia(60%) saturate(600%) hue-rotate(85deg) brightness(80%) contrast(90%)',
          }}
        />
        <h2 className='mb-3 font-baskervvile text-xl font-semibold md:text-3xl'>
          Unbeatable quality
        </h2>
        <span className={`${baskervvile.className}`}>
          We source directly from top-rated growers, so we can sell the finest
          quality plants at the very best prices.
        </span>
      </div>
      <div className='text-link md:p-8'>
        <Image
          src='/icons/hand.png'
          width={80}
          height={80}
          alt='hand'
          className='mb-4'
          style={{
            filter:
              'invert(30%) sepia(60%) saturate(600%) hue-rotate(85deg) brightness(80%) contrast(90%)',
          }}
        />
        <h2
          className={`${baskervvile.className} mb-3 text-xl font-semibold md:text-3xl`}
        >
          Next level service
        </h2>
        <span className={`${baskervvile.className}`}>
          Want hands-on plant expertise IRL? Stop by one of our stores in NYC
          and Bethesda to explore more plants, planters, & care accessories.
        </span>
      </div>
      <div className='text-link md:p-8'>
        <Image
          src='/icons/smile.png'
          width={80}
          height={80}
          alt='smile'
          className='mb-4 text-center'
          style={{
            filter:
              'invert(30%) sepia(60%) saturate(600%) hue-rotate(85deg) brightness(80%) contrast(90%)',
          }}
        />
        <h2
          className={`${baskervvile.className} mb-3 text-xl font-semibold md:text-3xl`}
        >
          Free care instructions
        </h2>
        <span className={`${baskervvile.className}`}>
          Our team preps, prunes, & carefully packs every order—meaning lots of
          care goes into every step. If your plant arrives damaged or unhealthy,
          we replace it for free.
        </span>
      </div>
    </div>
  );
}

export default ServicesPart;
