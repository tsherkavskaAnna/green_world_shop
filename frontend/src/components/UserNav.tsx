'use client';
import { Button } from '@/components/ui/button';
import { TfiShoppingCart } from 'react-icons/tfi';
import { useSession, signOut } from 'next-auth/react';
import { montserrat } from '@/app/fonts';
import Link from 'next/link';
import useCartStore from '@/store/useCartStore';

export default function UserNav() {
  const { data: session } = useSession();
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  if (session) {
    return (
      <div className='flex flex-wrap items-center py-4 font-montserrat text-link lg:mt-0 lg:flex-nowrap lg:py-0 lg:pl-10'>
        <div>
          <p>{session.user?.name}</p>
        </div>
        <Link href='/cart'>
          <Button
            className={`${montserrat.className} bg-trasparent ml-4 hover:bg-transparent`}
          >
            <div className='absolute rounded-full border-2 border-slate-100 bg-white p-4 hover:bg-slate-200'>
              <TfiShoppingCart size={20} />
            </div>
            <div className='relative bottom-3 right-7 rounded-full border-2 border-red-500 bg-red-500 text-white'>
              <span className='w-full p-2'>{cartCount}</span>
            </div>
          </Button>
        </Link>
        <Button
          className='bg-trasparent hover:bg-transparent'
          onClick={() => signOut()}
        >
          Logout
        </Button>
      </div>
    );
  } else {
    return (
      <div className='flex flex-nowrap items-center py-4 pl-0 font-montserrat text-link lg:px-0 lg:py-0 lg:pl-0'>
        <Link href='/dashboard'>Sign-In</Link>
        <Link href='/cart'>
          <Button
            className={`${montserrat.className} bg-trasparent ml-4 hover:bg-transparent`}
          >
            <div className='absolute rounded-full border-2 border-slate-100 bg-white p-4 hover:bg-slate-200'>
              <TfiShoppingCart size={20} />
            </div>
          </Button>
        </Link>
      </div>
    );
  }
}
