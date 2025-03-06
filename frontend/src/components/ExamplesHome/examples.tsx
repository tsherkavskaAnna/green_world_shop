import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';

function Examples() {
  return (
    <div className='container hidden md:flex'>
      <div className='z-10 flex cursor-pointer flex-nowrap pt-44'>
        <div className='mr-8 h-20 w-72 rounded-full bg-slate-400 drop-shadow-xl'>
          <Image
            src='/images/mon.png'
            alt='plant'
            width={500}
            height={500}
            className='absolute bottom-4 right-20'
          />
          <span className='absolute left-28 top-4'>
            Plants for <br></br> Healthy
          </span>
          <div className='absolute left-52 top-4 rounded-full bg-white p-4'>
            <FaArrowRightLong size={20} />
          </div>
        </div>
        <div className='mr-8 h-20 w-72 cursor-pointer rounded-full bg-slate-400 drop-shadow-xl'>
          <Image
            src='/images/peace-lily.png'
            alt='plant'
            width={160}
            height={160}
            className='absolute bottom-3 right-36'
          />
          <span className='absolute left-28 top-4'>
            Plants for <br></br>Interior
          </span>
          <div className='absolute left-52 top-4 rounded-full bg-white p-4'>
            <FaArrowRightLong size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Examples;
