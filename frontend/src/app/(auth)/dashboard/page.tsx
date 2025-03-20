import ShoppingCart from '@/components/ShoppingCart/ShoppingCart';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';

async function UserDashboard() {
  const session = await getServerSession();

  if (!session || !session?.user) {
    return (
      <div className='min-h-screen content-center justify-center bg-hero-image bg-cover bg-no-repeat font-montserrat text-xl'>
        <div className='ml-10 mt-40 sm:ml-60 lg:ml-96 lg:mt-20'>
          <h2>This is personal user section.</h2>
          <p>
            Please{' '}
            <Link href='/login' className='text-link'>
              Login{' '}
            </Link>
            <span>or </span>
            <Link href='/register' className='text-link'>
              Register
            </Link>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className='min-h-screen justify-center bg-cover bg-right-top bg-no-repeat pt-36 font-montserrat'>
        <div className='px-16'>
          <Breadcrumb className='font-montserrat text-slate-500'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href='/shop'>Shop</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href='/dashboard'>
                  Your Shopping Cart
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className='mb-10 mt-10'>
          <ShoppingCart />
        </div>
      </div>
    );
  }
}

export default UserDashboard;
