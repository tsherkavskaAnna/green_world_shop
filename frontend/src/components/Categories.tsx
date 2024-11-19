'use client';
import { montserrat } from '@/app/fonts';
import { getCategories } from '@/hook/getCategories';
import React from 'react';
import { Checkbox } from './ui/checkbox';

function Categories() {
  const { categories } = getCategories();
  const [selectedCategory, setSelectedCategory] = React.useState('');
  return (
    <>
      {categories.map((cat: Category) => (
        <div className={`${montserrat.className} flex flex-nowrap text-link`}>
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
}

export default Categories;

interface Category {
  id: string;
  name: string;
}
