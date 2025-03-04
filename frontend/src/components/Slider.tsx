'use client';
import React from 'react';
import { Slider } from './ui/slider';
import { montserrat } from '@/app/fonts';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function SliderPrice() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const maxPriceFromParams = searchParams.get('maxPrice');
  const [maxPrice, setMaxPrice] = React.useState(
    maxPriceFromParams ? Number(maxPriceFromParams) : 500
  );

  React.useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('maxPrice', maxPrice.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [maxPrice, router, pathname, searchParams]);

  return (
    <div>
      <div className={`${montserrat.className} py-4 text-link`}>
        <p>
          Price: <span className='ml-4'>{maxPrice} €</span>
        </p>
      </div>
      <div className='flex flex-nowrap items-baseline gap-1'>
        <span className={`${montserrat.className}`}>0</span>
        <Slider
          max={500}
          step={1}
          defaultValue={[maxPrice]}
          onValueChange={(newValue) => setMaxPrice(newValue[0])}
        />
        <span className={`${montserrat.className} `}>500€</span>
      </div>
    </div>
  );
}

export default SliderPrice;
