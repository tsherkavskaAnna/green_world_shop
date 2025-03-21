import React from 'react';
import Image from 'next/image';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CommunityForm from '@/components/CommunityForm';

export const metadata = {
  title: 'About us - Green Planet',
};

function AboutPage() {
  return (
    <div className='container min-h-screen flex-col px-6 pt-36 text-center font-montserrat lg:container lg:pt-48'>
      <div className='my-10 flex-col lg:flex lg:flex-row'>
        <Image
          src='/images/workplace.png'
          alt='plant'
          width={400}
          height={400}
          className='w-full object-cover'
        />
        <div className='w-full content-center text-start lg:p-12'>
          <h2 className='my-4 text-xl font-semibold text-accessColor'>
            Plants for Your Workplace
          </h2>
          <p className='tracking-wide'>
            A well-designed workspace is more than just furniture and
            technology—it’s about creating an environment that fosters
            creativity, focus, and well-being. Adding plants to your office can
            significantly enhance both aesthetics and productivity. Studies show
            that greenery in the workplace can reduce stress, boost mood, and
            even increase efficiency. Whether you're looking for a small desk
            plant to keep you company during long work hours or larger statement
            plants to create a welcoming atmosphere in meeting rooms, we have a
            wide range of options to suit your needs. Our collection includes
            low-maintenance plants ideal for busy schedules, as well as
            air-purifying varieties that help keep your workspace fresh and
            energized. Invest in nature and transform your office into a place
            where ideas can flourish!
          </p>
          <Button className='mt-4 bg-nav text-white hover:bg-nav hover:bg-opacity-80'>
            <a href='#contact-form'>Get in touch</a>
          </Button>
        </div>
      </div>
      <div className='flex flex-col-reverse lg:flex-row'>
        <div className='w-full content-center text-start lg:p-12'>
          <h2 className='my-4 text-xl font-semibold text-accessColor'>
            The Benefits of Plants in Your Home
          </h2>
          <p className='tracking-wide'>
            There’s something truly magical about surrounding yourself with
            nature, even indoors. Plants do more than just beautify your
            home—they improve air quality, regulate humidity, and promote
            relaxation. Studies have shown that having plants in your living
            space can lower stress levels, boost creativity, and even contribute
            to better sleep. Whether you’re looking for elegant leafy greens to
            add a touch of serenity to your bedroom, compact succulents to
            decorate your shelves, or lush tropical plants to bring vibrancy to
            your living room, we have the perfect selection to complement your
            home. No matter your experience level, we offer a variety of
            easy-to-care-for plants that fit different lifestyles, helping you
            create a cozy, natural retreat right in your own home.
          </p>
        </div>
        <Image
          src='/images/table-plants.png'
          alt='plant'
          width={400}
          height={400}
          className='w-full object-cover'
        />
      </div>
      <div className='mt-10 flex flex-col lg:flex-row'>
        <Image
          src='/images/close-up-man.png'
          alt='plant'
          width={400}
          height={400}
          className='w-full object-cover'
        />
        <div className='mb-4 w-full content-center text-start lg:p-12'>
          <h2 className='my-4 text-xl font-semibold text-accessColor'>
            The Perfect Green Gift – A Thoughtful and Lasting Surprise
          </h2>
          <p className='tracking-wide'>
            Looking for a thoughtful and unique gift? A plant is a beautiful and
            lasting way to show you care. Whether it’s a birthday, housewarming,
            anniversary, or just a surprise for someone special, our plant shop
            has a wide range of options to suit any occasion. Let us help you
            find the perfect green gift to brighten someone’s day!
          </p>
          <Link href='/gifts'>
            <Button className='mt-4 bg-nav text-white hover:bg-nav hover:bg-opacity-80'>
              Esplore more
            </Button>
          </Link>
          <div className='mt-8 flex flex-nowrap justify-evenly gap-4 text-white'>
            <FaTwitter size={35} />
            <FaFacebookF size={35} />
            <FaInstagramSquare size={35} />
          </div>
        </div>
      </div>
      <div className='pb-2 lg:py-10'>
        <Card className='bg-slate-100 font-montserrat'>
          <CardHeader></CardHeader>
          <CardContent>
            <div className='grid gap-6 lg:grid-cols-2'>
              <div className='col-span-1 content-center text-start'>
                <h2 className='my-6 text-2xl font-bold text-nav'>
                  Connect with us
                </h2>
                <p className='text-link'>
                  Whether you're looking to add a new green friend to your
                  collection, need advice on plant care, or want to know more
                  about our next pop-up event, we're here to help!
                </p>

                <span className='text-link'>
                  Stay connected and follow us social media:
                </span>
                <div className='mt-8 flex flex-nowrap justify-normal gap-6 text-link'>
                  <FaTwitter size={25} className='cursor-pointer' />
                  <FaFacebookF size={25} className='cursor-pointer' />
                  <FaInstagramSquare size={25} className='cursor-pointer' />
                </div>
              </div>
              <div className='col-span-1' id='contact-form'>
                <CommunityForm />
              </div>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default AboutPage;
