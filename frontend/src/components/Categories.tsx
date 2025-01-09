import { montserrat } from '@/app/fonts';
import React from 'react';
import { Checkbox } from './ui/checkbox';
import { getCategories } from '@/services/getCategories';

const Categories = async () => {
  const categories = await getCategories();
  return (
    <>
      {categories.map((cat: Category) => (
        <div
          className={`${montserrat.className} flex flex-nowrap text-link`}
          key={cat.id}
        >
          <Checkbox id='category' className='mr-3 rounded-3xl' key={cat.id} />
          <label
            htmlFor='category'
            className='text-sm font-medium capitalize leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            {cat.name}
          </label>
        </div>
      ))}
    </>
  );
};

export default Categories;

interface Category {
  id: string;
  name: string;
}
