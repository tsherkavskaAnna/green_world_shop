'use client';
import React from 'react';
import { Button } from './ui/button';
import useCartStore from '@/store/useCartStore';
import useCounterStore from '@/store/countStore';
import { toast } from 'sonner';

interface PropsCounter {
  id: string;
  name: string;
  price: number;
}
function Counter({ id, name, price }: PropsCounter) {
  const { addItem } = useCartStore();
  const { incrementCounter, decrementCounter, count, resetCounter } =
    useCounterStore();

  const handleAddToCart = () => {
    if (count === 0) {
      toast.warning('You must add a quantity of product to the cart.');
      return;
    }
    addItem({ id, name, price });
    toast.success('Added product in your cart successfully');
    resetCounter();
  };
  return (
    <div className='flex flex-nowrap'>
      <div className='mr-2 flex flex-nowrap content-center items-baseline justify-center gap-3 rounded-lg bg-white'>
        <Button
          className='rounded-lg bg-white font-bold text-link hover:bg-white'
          onClick={() => decrementCounter()}
        >
          -
        </Button>
        <span className='text-link'>{count}</span>
        <Button
          className='rounded-lg bg-white font-bold text-link hover:bg-white'
          onClick={() => incrementCounter()}
        >
          +
        </Button>
      </div>
      <Button
        className='w-[80%] rounded-md border-2 border-link bg-link px-4 py-2 font-inter text-white transition delay-150 duration-300 ease-custom-ease hover:bg-link hover:text-accessColor hover:shadow-xl'
        onClick={() => handleAddToCart()}
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default Counter;
