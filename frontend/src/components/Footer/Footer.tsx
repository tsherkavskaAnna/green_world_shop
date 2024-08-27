import { baskervvile, blinker, montserrat } from '@/app/fonts';
import Link from 'next/link';
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import Image from 'next/image';
function Footer() {
  return (
    <div className='grid h-96 w-full grid-cols-5 bg-link px-32 py-12'>
      <div></div>
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
      <div className='grid grid-cols-4 justify-end pl-24'>
        <Image
          src='/logo/logo-1.png'
          width={45}
          height={45}
          alt='Logo'
          className=''
        />
        <h1
          className={`${baskervvile.className} rounded-md text-3xl text-logo transition-colors duration-300`}
        >
          harmony
        </h1>
      </div>
      <div className={`${montserrat.className} ml-2 mt-2 text-white`}>
        <div className='grid-rows grid gap-3'>
          <Link href=''>My account</Link>
          <Link href=''>Wishlist</Link>
          <Link href=''>Orders</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
