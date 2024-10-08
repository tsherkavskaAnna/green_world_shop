'use client';
import { Button } from '@/components/ui/button';
import { TfiShoppingCart } from 'react-icons/tfi';
import { useSession, signIn, signOut } from 'next-auth/react';
import { montserrat } from '@/app/fonts';
import Link from 'next/link';

export default function UserNav() {
  const { data: session, status } = useSession();

  if (session) {
    return (
      <div className='flex flex-nowrap items-center pl-10 font-montserrat text-link'>
        <p>{session.user?.name}</p>
        <Link href='/dashboard'>
          <Button
            className={`${montserrat.className} bg-trasparent ml-4 hover:bg-transparent`}
          >
            <div className='absolute rounded-full border-2 border-slate-100 bg-white p-4 hover:bg-slate-200'>
              <TfiShoppingCart size={20} />
            </div>
            <div className='relative bottom-3 right-7 rounded-full border-2 border-red-500 bg-red-500 text-white'>
              <span className='w-full p-2'>1</span>
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
      <div className='flex flex-nowrap items-center pl-10 font-montserrat text-link'>
        <p>User</p>
        <Link href='/dashboard'>
          <Button
            className={`${montserrat.className} bg-trasparent ml-4 hover:bg-transparent`}
          >
            <div className='absolute rounded-full border-2 border-slate-100 bg-white p-4 hover:bg-slate-200'>
              <TfiShoppingCart size={20} />
            </div>
            <div className='relative bottom-3 right-7 rounded-full border-2 border-red-500 bg-red-500 text-white'>
              <span className='w-full p-2'>1</span>
            </div>
          </Button>
        </Link>
      </div>
    );
  }
}
