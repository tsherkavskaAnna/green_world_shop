'use client';
import React, { FormEvent } from 'react';
import { Input } from '@/components/ui/input';

import { Button } from '@/components/ui/button';
import { Textarea } from './ui/textarea';
import { Community } from '@/interface/community';
import { createNewCommunity } from '@/services/createCommunity';
import { toast } from 'sonner';

function CommunityForm() {
  const [formData, setFormData] = React.useState<Community>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await createNewCommunity(formData);

      if (response) {
        toast.success('Thank you for contacting us!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
        setIsLoading(false);
      } else {
        throw new Error('An error occurred while sending your message...');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div className='flex flex-nowrap gap-2'>
          <Input
            type='text'
            placeholder='First Name'
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className='focus:ring-primary-500 w-full rounded-md border border-gray-300 px-4 py-2 focus-visible:ring-button focus-visible:ring-opacity-45'
          />
          <Input
            type='text'
            placeholder='Last Name'
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className='focus:ring-primary-500 w-full rounded-md border border-gray-300 px-4 py-2 focus-visible:ring-button focus-visible:ring-opacity-45'
          />
        </div>
        <Input
          type='email'
          placeholder='Email'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className='focus:ring-primary-500 mt-4 w-full rounded-md border border-gray-300 px-4 py-2 focus-visible:ring-button focus-visible:ring-opacity-45'
        />
        <Input
          type='text'
          placeholder='Phone'
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className='focus:ring-primary-500 mt-4 w-full rounded-md border border-gray-300 px-4 py-2 focus-visible:ring-button focus-visible:ring-opacity-45'
        />
        <Textarea
          className='my-4 rounded-md border-gray-300 bg-white focus-visible:ring-button focus-visible:ring-opacity-45'
          placeholder='Message'
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <Button
          className='w-full bg-button text-white hover:bg-button hover:bg-opacity-80'
          type='submit'
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
}

export default CommunityForm;
