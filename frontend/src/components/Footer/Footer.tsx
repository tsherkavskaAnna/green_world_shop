import { montserrat } from '@/app/fonts';
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
import { Separator } from '../ui/separator';

function Footer() {
  return (
    <>
      <div className='z-50 grid h-auto w-full grid-cols-1 bg-link py-4 text-center sm:grid-cols-2 md:px-32 md:py-12 md:text-start xl:h-96 xl:grid-cols-4'>
        <div className={`${montserrat.className} text-white`}>
          <div className='grid-rows grid gap-3'>
            <Link href=''>About us</Link>
            <Link href=''>Plant care</Link>
            <Link href=''>FAQ</Link>
            <Link href=''>Shipping & handling</Link>
            <Link href=''>Return and delivery</Link>
          </div>
        </div>
        <div className='grid-rows px-4 pt-6 sm:pt-0'>
          <h4 className='font-montserrat text-nav'>
            Be part of our community be subscribing to our newsletters!
          </h4>
          <Input
            placeholder='Email address'
            className='mt-6 font-mono text-nav'
          />
          <Button className='mt-6 w-full bg-nav font-mono text-white hover:bg-nav'>
            Subscribe
          </Button>
          <div className='mt-8 flex flex-nowrap gap-4 text-white'>
            <FaTwitter size={35} />
            <FaFacebookF size={35} />
            <FaInstagramSquare size={35} />
          </div>
        </div>
        <div className='grid-rows mt-4 sm:col-span-2 lg:mt-0'>
          <h2
            className={`${montserrat.className} pb-4 pl-4 text-2xl font-semibold text-nav xl:pl-32`}
          >
            Contact Details
          </h2>
          <div className='pb-2 pl-4 text-white xl:pl-32'>
            <a
              className='flex flex-nowrap items-baseline'
              href='tel:+39 (098) 3743746564'
              target='_blank'
              rel='noreferrer'
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
              rel='noreferrer'
            >
              <MdOutlineAlternateEmail />
              <p className='ml-4'>harmony_shop@gmail.com</p>
            </a>
          </div>
          <div className='pb-2 pl-4 text-white xl:pl-32'>
            <a className='flex flex-nowrap items-baseline'>
              <FaMapMarker />
              <p className='ml-4'>
                Table Bay Mall, Corner of Berkshire Boulevard and R27
                Sunningdale, 7441
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
      <div className='px-10 py-2 font-montserrat text-sm text-nav'>
        <div className='text-end'>
          <Link href='/terms-and-conditions'>Terms and Conditions</Link>
          <span className='mx-2'>|</span>
          <Link href='/privacy-policy'>Privacy Policy</Link>
          <span className='mx-2'>|</span>
          <Link href='/privacy-policy'>Cookies</Link>
        </div>
        <Separator className='color-nav mb-2 mt-2' />
        <p className='text-center font-montserrat text-nav'>
          © 2024 Patch Harmony Ltd
        </p>
      </div>
    </>
  );
}

export default Footer;
