'use client';
import { montserrat } from '@/app/fonts';
import React from 'react';
import { Checkbox } from './ui/checkbox';
import { getCategories } from '@/services/getCategories';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Categories = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [categoryFilter, setCategoryFilter] = React.useState(
    searchParams.get('category') || ''
  );

  // Render di tutti categorie che arrivano dal backend
  React.useEffect(() => {
    const fetchCategory = getCategories();
    fetchCategory.then((data) => setCategories(data));
  }, []);

  React.useEffect(() => {
    setCategoryFilter(searchParams.get('category') || '');
  }, [searchParams]);

  const handleSearch = useDebouncedCallback((selectedCategory: string) => {
    const params = new URLSearchParams(searchParams);
    if (selectedCategory === categoryFilter) {
      params.delete('category');
      setCategoryFilter('');
    } else {
      params.set('category', selectedCategory);
      setCategoryFilter(selectedCategory);
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <>
      {categories
        ? categories.map((cat: Category) => (
            <div
              className={`${montserrat.className} flex flex-nowrap text-link`}
              key={cat.id}
            >
              <Checkbox
                id={`category-${cat.id}`}
                className='mr-3 rounded-3xl'
                key={cat.id}
                checked={categoryFilter === cat.name}
                onCheckedChange={() => handleSearch(cat.name)}
              />
              <label
                htmlFor={`category-${cat.id}`}
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
