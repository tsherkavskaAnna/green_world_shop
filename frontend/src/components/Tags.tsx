'use client';
import React from 'react';
import { Checkbox } from './ui/checkbox';
import { montserrat } from '@/app/fonts';
import { getTags } from '@/services/getTags';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Tags = () => {
  const [tags, setTags] = React.useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  React.useEffect(() => {
    const fetchData = getTags();
    fetchData.then((data) => setTags(data));
  }, []);

  React.useEffect(() => {
    const categoryFilter = searchParams.get('tags');
    if (categoryFilter) {
      setSelectedTags(categoryFilter.split(','));
    }
  }, [searchParams]);

  const handleSearch = useDebouncedCallback((tag: string) => {
    let newSelectedTags = [...selectedTags];
    if (newSelectedTags.includes(tag)) {
      // Se il tag è già selezionato, rimuovilo
      newSelectedTags = newSelectedTags.filter((t) => t !== tag);
    } else {
      // Se non è selezionato, aggiungilo
      newSelectedTags.push(tag);
    }

    setSelectedTags(newSelectedTags);

    const params = new URLSearchParams(searchParams);
    if (newSelectedTags.length > 0) {
      params.set('tags', newSelectedTags.join(','));
    } else {
      params.delete('tags');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <>
      {tags && tags.length > 0
        ? tags.map((tag: Tag) => (
            <div
              className={`${montserrat.className} flex flex-nowrap text-link`}
              key={tag.id}
            >
              <Checkbox
                id={`tag-${tag.id}`}
                className='mr-3 rounded-3xl'
                key={tag.id}
                onCheckedChange={() => handleSearch(tag.name)}
                checked={selectedTags.includes(tag.name)}
              />
              <label
                htmlFor={`tag-${tag.id}`}
                className='text-sm font-medium capitalize leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                {tag.name}
              </label>
            </div>
          ))
        : null}
    </>
  );
};

export default Tags;

interface Tag {
  id: string;
  documentId: string;
  name: string;
}
