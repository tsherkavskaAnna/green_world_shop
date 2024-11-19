'use client';
import React from 'react';
import { Slider } from './ui/slider';
import { montserrat } from '@/app/fonts';

function SliderPrice() {
  const [priceRange, setPriceRange] = React.useState([100, 500]);

  const handlePriceChange = (newValue: any) => {
    setPriceRange(newValue);
  };
  return (
    <div>
      <div className={`${montserrat.className} py-4 text-slate-500`}>
        <p>
          Price: <span className='ml-4 text-link'>{priceRange[0]} €</span>
        </p>
      </div>
      <div className='flex flex-nowrap items-baseline gap-1'>
        <span className={`${montserrat.className} text-link`}>0</span>
        <Slider
          defaultValue={priceRange}
          max={500}
          step={1}
          onValueChange={handlePriceChange}
        />
        <span className={`${montserrat.className} text-link`}>400€</span>
      </div>
    </div>
  );
}

export default SliderPrice;
