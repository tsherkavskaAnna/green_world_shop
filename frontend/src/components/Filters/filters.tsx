import React from 'react';
import { Button } from '@/components/ui/button';

import { Separator } from '@/components/ui/separator';
import { montserrat } from '@/app/fonts';
import Tags from '../Tags';
import Categories from '../Categories';
import SliderPrice from '../Slider';

const FiltersSidebar = () => {
  return (
    <div className='hidden sm:block'>
      <div className=''>
        <p className={`${montserrat.className} mb-3 text-primary`}>Filters</p>
        <Separator className='bg-text' />
      </div>
      <div>
        <p className={`${montserrat.className} mt-4 text-primary`}>
          Categories
        </p>
        <div
          className={`${montserrat.className} grid-row mb-3 ml-6 mt-4 grid items-center gap-4`}
        >
          <Categories />
        </div>
        <Separator className='bg-text' />
      </div>
      <div>
        <p className={`${montserrat.className} mb-3 mt-4 text-primary`}>Size</p>
        <div className='flex flex-nowrap px-2 py-4 text-link'>
          <Button className='mr-2 rounded-full bg-roundedButton hover:bg-roundedButton'>
            S
          </Button>
          <Button className='mr-2 rounded-full bg-roundedButton hover:bg-roundedButton'>
            M
          </Button>
          <Button className='mr-2 rounded-full bg-roundedButton hover:bg-roundedButton'>
            L
          </Button>
          <Button className='mr-2 rounded-full bg-roundedButton hover:bg-roundedButton'>
            XL
          </Button>
        </div>
        <Separator className='bg-text' />
      </div>

      <div className='pb-7 pt-4'>
        <SliderPrice />
      </div>
      <Separator className='bg-text' />

      <div
        className={`${montserrat.className} grid-row mb-3 ml-6 mt-4 grid items-center gap-4 pt-4`}
      >
        <Tags />
      </div>
    </div>
  );
};

export default FiltersSidebar;
