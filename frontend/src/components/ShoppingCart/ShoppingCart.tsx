import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

function ShoppingCart() {
  return (
    <div className='grid w-full justify-center gap-8 rounded-md bg-border px-16 py-10 pl-4 text-center'>
      <h1 className='font-baskervvile text-3xl font-bold text-nav'>
        Your cart is empty
      </h1>
      <p className='font-montserrat text-link'>
        There are no items in your cart
      </p>
      <Button className='ease-custom-ease h-11 w-full cursor-pointer rounded-full border-2 bg-accessColor p-5 font-montserrat text-white transition delay-150 duration-300 hover:border-accessColor hover:bg-white hover:text-accessColor'>
        <Link href='/shop'>Return to shop</Link>
      </Button>
    </div>
  );
}

export default ShoppingCart;
