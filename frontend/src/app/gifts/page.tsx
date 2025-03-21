import GiftsKit from '@/components/GiftsKit/GiftsKit';
import React from 'react';

export const metadata = {
  title: 'Gift Kits - Green Planet',
};

const GiftsPage = () => {
  return (
    <div className='min-h-screen flex-col bg-[#f9f7f7] px-6 pb-6 pt-36 text-center font-montserrat lg:p-40'>
      <div className='py-10 text-xl font-semibold text-nav lg:px-20'>
        <p className='text-lg'>
          Looking for the perfect gift for a friend, family member, or even
          yourself? Our exclusive Plant Gift Kits are the ideal way to bring
          greenery into any home! Whether you're a beginner, a pet owner, a
          kitchen enthusiast, or love surprises, we have the perfect kit for you
          all for just <span className='text-accessColor'> €49.99</span>
        </p>
        <GiftsKit />
      </div>
    </div>
  );
};

export default GiftsPage;
