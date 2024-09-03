import { baskervvile, blinker, montserrat } from '@/app/fonts';
import Link from 'next/link';
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FaMapMarker } from 'react-icons/fa';

import Image from 'next/image';
function Footer() {
  return (
    <div className='md: z-50 grid h-96 w-full bg-link px-32 py-12 md:grid-cols-3 xl:grid-cols-4'>
      <div className={`${montserrat.className} text-white`}>
        <div className='grid-rows grid gap-3'>
          <Link href=''>About us</Link>
          <Link href=''>Plant care</Link>
          <Link href=''>FAQ</Link>
          <Link href=''>Shipping & handling</Link>
          <Link href=''>Return and delivery</Link>
        </div>
      </div>
      <div>
        <Input placeholder='Email address' />
        <Button className='mt-6 w-full bg-nav text-white hover:bg-nav'>
          Sign up
        </Button>
        <div className='mt-8 grid grid-cols-3 px-10 text-white'>
          <FaTwitter size={35} />
          <FaFacebookF size={35} />
          <FaInstagramSquare size={35} />
        </div>
        <p className={`${blinker.className} mt-20 text-center text-white`}>
          © 2024 Patch Harmony Ltd
        </p>
      </div>
      <div className='grid-rows col-span-1 xl:col-span-2'>
        <h2
          className={`${montserrat.className} pb-4 pl-4 text-2xl font-semibold text-white xl:pl-32`}
        >
          Contact Details
        </h2>
        <div className='pb-2 pl-4 text-white xl:pl-32'>
          <a
            className='flex flex-nowrap items-baseline'
            href='tel:+39 (098) 3743746564'
            rel='noopener'
            target='_blank'
          >
            <FaPhone />
            <p className='ml-4'>+39 (098) 3743746564</p>
          </a>
        </div>
        <div className='pb-2 pl-4 text-white xl:pl-32'>
          <a
            className='flex flex-nowrap items-baseline'
            href='mailto:harmony_shop@gmail.com'
            target='_blank'
            rel='noopener'
          >
            <MdOutlineAlternateEmail />
            <p className='ml-4'>harmony_shop@gmail.com</p>
          </a>
        </div>
        <div className='pb-2 pl-4 text-white xl:pl-32'>
          <a className='flex flex-nowrap items-baseline'>
            <FaMapMarker />
            <p className='ml-4'>
              Table Bay Mall, Corner of Berkshire Boulevard and R27 Sunningdale,
              7441
            </p>
          </a>
        </div>
        <span
          className={`${montserrat.className} pl-4 uppercase text-nav xl:pl-32`}
        >
          7 days a week
        </span>
        <p
          className={`${montserrat.className} pl-4 text-sm text-white xl:pl-32`}
        >
          Monday to Saturday: 9am to 19.00pm
        </p>
        <p
          className={`${montserrat.className} pl-4 text-sm text-white xl:pl-32`}
        >
          Sunday: 9am to 18.00pm
        </p>
      </div>
    </div>
  );
}

export default Footer;
