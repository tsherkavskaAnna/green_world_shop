'use client';

import { useSearchParams } from 'next/navigation';

export default function GoogleSignInError() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  if (!error) return null;
  return (
    <div className='min-h-screen'>
      <div className='mt-56 p-2 text-center text-red-600'>
        <p>Something went wrong! {error}</p>
      </div>
    </div>
  );
}
