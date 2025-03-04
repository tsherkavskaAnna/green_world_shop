'use client';
import React from 'react';
import { CircleCheck } from 'lucide-react';
import useCartStore from '@/store/useCartStore';

export default function SuccessPage() {
  const { clearCart } = useCartStore();
  React.useEffect(() => {
    clearCart();
  }, []);
  return (
    <div className='flex min-h-screen flex-col flex-wrap items-center justify-center gap-4 font-montserrat'>
      <CircleCheck color='#138808' />
      <h1 className='text-3xl font-bold text-button'>Payment Successful!</h1>
      <p className='text'>Your order has been placed successfully.</p>
    </div>
  );
}
