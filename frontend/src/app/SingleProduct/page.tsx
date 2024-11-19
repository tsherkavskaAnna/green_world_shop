'use client';
import React from 'react';
import { montserrat } from '../fonts';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import FiltersSidebar from '@/components/Filters/filters';
import { useRouter } from 'next/router';
import { getSingleProduct } from '@/hook/getSingleProduct';

const SingleProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { product } = getSingleProduct(id as string);
  console.log(product);

  return (
    <>
      <div className='flex min-h-screen'>
        <aside className='w-60 border-r-2 border-text py-32 pr-4'>
          <FiltersSidebar />
        </aside>
        <main className='flex-1 pl-12 pt-28'>
          <div className='pt-4'>
            <Breadcrumb className={`${montserrat.className} text-slate-500`}>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href='/shop'>Shop</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href='/shop'>Plants</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div>{/* <ProductCard /> */}</div>
        </main>
      </div>
    </>
  );
};
export default SingleProductPage;
