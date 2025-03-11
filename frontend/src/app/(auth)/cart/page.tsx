'use client';
import ShoppingCart from '@/components/ShoppingCart/ShoppingCart';
import Swiper from '@/components/Swiper/Swiper';
import { Button } from '@/components/ui/button';
import useCartStore from '@/store/useCartStore';

import Link from 'next/link';
import React from 'react';

const UserCart = () => {
  const { items } = useCartStore();

  return (
    <div className='min-h-screen pt-36 text-center font-montserrat lg:pt-52'>
      {items.length > 0 ? (
        <ShoppingCart />
      ) : (
        <>
          <div className='grid w-full justify-center gap-8 rounded-md bg-[#f3eeed] px-16 py-16 pl-4 text-center'>
            <h1 className='font-baskervvile text-3xl font-bold text-nav'>
              Your cart is empty
            </h1>
            <p className='font-montserrat text-link'>
              There are no items in your cart
            </p>
            <Button className='h-11 w-full cursor-pointer rounded-xl bg-[#c59fe1] p-5 font-montserrat text-white hover:bg-[#dbc4ee]'>
              <Link href='/products'>Return to shop</Link>
            </Button>
          </div>
          <div className='mt-4'>
            <Swiper />
          </div>
        </>
      )}
    </div>
  );
};

export default UserCart;
