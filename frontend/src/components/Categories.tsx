'use client';
import { montserrat } from '@/app/fonts';
import React from 'react';
import { Checkbox } from './ui/checkbox';
import { getCategories } from '@/services/getCategories';

const Categories = () => {
  const [category, setCategory] = React.useState<Category[]>([]);

  React.useEffect(() => {
    const fetchCategory = getCategories();
    fetchCategory.then((data) => setCategory(data));
  }, []);

  return (
    <>
      {category
        ? category.map((cat: Category) => (
            <div
              className={`${montserrat.className} flex flex-nowrap text-link`}
              key={cat.id}
            >
              <Checkbox
                id='category'
                className='mr-3 rounded-3xl'
                key={cat.id}
              />
              <label
                htmlFor='category'
                className='text-sm font-medium capitalize leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                {cat.name}
              </label>
            </div>
          ))
        : null}
    </>
  );
};

export default Categories;

interface Category {
  id: string;
  name: string;
}
