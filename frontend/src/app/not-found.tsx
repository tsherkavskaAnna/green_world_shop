import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen pt-64 text-center font-blinker'>
      <div className='content-cente grid gap-5'>
        <h2 className='text-2xl font-semibold text-red-600'>Page not found</h2>
        <p>Could not find requested resource</p>
        <p className='text-lg font-semibold text-link'>
          <Link href='/'>Home</Link>
        </p>
      </div>
    </div>
  );
}
