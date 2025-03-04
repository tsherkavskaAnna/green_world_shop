// app/cancel/page.tsx
'use client';
import { CircleCheck } from 'lucide-react';
import React from 'react';

export default function CancelPage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <CircleCheck color='#ff2a2a' />
      <h1 className='text-3xl font-bold text-[#ff2a2a]'>Payment Cancelled</h1>
      <p>Your payment was cancelled. Please try again.</p>
    </div>
  );
}
