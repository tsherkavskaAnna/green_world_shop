'use client';
import React from 'react';
import { Command } from '@/components/ui/command';
import { useRouter } from 'next/navigation';
import { Input } from '../ui/input';

function SearchQuery() {
  const router = useRouter();

  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    if (query.length > 2) {
      router.push(`?search=${query}`, { scroll: false });
    }
  }, [query, router]);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className='flex w-full justify-center'>
      <form className='border-1 mt-4 w-full text-slate-500 lg:mt-0 lg:w-1/2'>
        <Command className=''>
          <Input
            placeholder='Search'
            value={query}
            onChange={handleQueryChange}
            className='focus-visible:bg-slate-50 focus-visible:ring-0'
          />
        </Command>
      </form>
    </div>
  );
}

export default SearchQuery;
