'use client';

import { getTags } from '@/hook/getTags';
import React from 'react';
import { Checkbox } from './ui/checkbox';
import { montserrat } from '@/app/fonts';

const Tags = () => {
  const { tags } = getTags();
  const [selectedTag, setSelectedTag] = React.useState('');

  return (
    <>
      {tags.map((tag: Tag) => (
        <div className={`${montserrat.className} flex flex-nowrap text-link`}>
          <Checkbox id='tag' className='mr-3 rounded-3xl' key={tag.id} />
          <label
            htmlFor='tag'
            className='text-sm font-medium capitalize leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            {tag.name}
          </label>
        </div>
      ))}
    </>
  );
};

export default Tags;

interface Tag {
  id: string;
  documentId: string;
  name: string;
}
