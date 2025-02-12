'use client';
import React from 'react';
import { Checkbox } from './ui/checkbox';
import { montserrat } from '@/app/fonts';
import { getTags } from '@/services/getTags';

const Tags = () => {
  //const [selectedTag, setSelectedTag] = React.useState('');
  const [tags, setTags] = React.useState<Tag[]>([]);

  React.useEffect(() => {
    const fetchData = getTags();
    fetchData.then((data) => setTags(data));
  }, []);

  return (
    <>
      {tags && tags.length > 0
        ? tags.map((tag: Tag) => (
            <div
              className={`${montserrat.className} flex flex-nowrap text-link`}
              key={tag.id}
            >
              <Checkbox id='tag' className='mr-3 rounded-3xl' key={tag.id} />
              <label
                htmlFor='tag'
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
