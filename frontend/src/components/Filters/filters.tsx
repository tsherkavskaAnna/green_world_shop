'use client';
import React from 'react';
import { Button } from '@/components/ui/button';

import { Separator } from '@/components/ui/separator';
import { montserrat } from '@/app/fonts';
import Tags from '../Tags';

import SliderPrice from '../Slider';
import Categories from '../Categories';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { SizeArray } from '@/utils/sizeArray';

const FiltersSidebar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [sizeFilter, setSizeFilter] = React.useState(
    searchParams.get('size') || ''
  );

  React.useEffect(() => {
    setSizeFilter(searchParams.get('size') || '');
  }, [searchParams]);

  const handleSearch = useDebouncedCallback((size: string) => {
    const params = new URLSearchParams(searchParams);
    if (size === sizeFilter) {
      params.delete('size');
      setSizeFilter('');
    } else {
      params.set('size', size);
      setSizeFilter(size);
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

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
          {SizeArray.map(({ label, value }) => (
            <Button
              key={label}
              className={`mr-2 rounded-full hover:bg-roundedButton ${
                sizeFilter === value ? 'bg-roundedButton' : 'bg-slate-200'
              }`}
              onClick={() => handleSearch(value)}
            >
              {value}
            </Button>
          ))}
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
