'use client';
import React from 'react';
import { Button } from './ui/button';
import useCartStore from '@/store/useCartStore';
import countStore from '@/store/countStore';
import { toast } from 'sonner';
import { ImageProduct } from '@/interface/product';

interface PropsCounter {
  id: string | number;
  name: string;
  price: number;
  image: ImageProduct;
  quantity: number;
}
function Counter({ id, name, price, quantity, image }: PropsCounter) {
  const { incrementCounter, decrementCounter, count, resetCounter } =
    countStore((state) => state);
  const { addItem } = useCartStore();

  const handleAddProduct = () => {
    if (count > 0) {
      toast.success(`Added ${name} to your cart!`);
      addItem({ id, name, price, quantity, image }, count);
      resetCounter();
    }
  };

  return (
    <div className='flex w-full flex-col justify-between gap-3 md:flex-row md:flex-nowrap'>
      <div className='mr-2 flex content-center items-baseline gap-3 rounded-lg bg-white lg:w-1/2 xl:w-1/3'>
        <Button
          className='w-full rounded-lg bg-white font-bold text-link hover:bg-white'
          onClick={() => incrementCounter()}
        >
          +
        </Button>
        <span className='text-link'>{count}</span>
        <Button
          className='w-full rounded-lg bg-white font-bold text-link hover:bg-white'
          onClick={() => decrementCounter()}
          disabled={count === 0}
        >
          -
        </Button>
      </div>
      <Button
        className='w-full rounded-md border-2 border-link bg-link px-4 py-2 font-inter text-white transition delay-150 duration-300 ease-custom-ease hover:bg-link hover:text-accessColor hover:shadow-xl lg:w-1/2 xl:w-2/3'
        onClick={() => handleAddProduct()}
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default Counter;
