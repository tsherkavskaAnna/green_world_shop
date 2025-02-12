'use client';
import { Search } from 'lucide-react';

import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '../ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function SearchQuery() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [searchQuery, setSearchQuery] = React.useState(
    searchParams.get('query') || ''
  );

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className='flex w-full justify-center'>
      <form className='border-1 mt-4 flex w-full text-slate-500 lg:mt-0 lg:w-1/2'>
        <Input
          placeholder='Search'
          className='font-montserrat focus-visible:bg-slate-50 focus-visible:ring-0'
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleSearch(e.target.value);
          }}
        />
        <button type='submit' className='relative right-14'>
          <Search color='#e5e7eb' />
        </button>
      </form>
    </div>
  );
}

export default SearchQuery;
