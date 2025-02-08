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

import ProductsPage from '../products/page';
import FiltersSidebar from '@/components/Filters/filters';

import SearchQuery from '@/components/SearchQuery/search';

const ShopPage = () => {
  return (
    <>
      <div className='flex min-h-screen'>
        <aside className='hidden w-60 border-r-2 border-text py-32 pr-4 sm:block'>
          <FiltersSidebar />
        </aside>
        <main className='flex-1 px-10 pt-28 text-center sm:px-0 sm:pl-12'>
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
          <SearchQuery />
          <div>
            <ProductsPage />
          </div>
        </main>
      </div>
    </>
  );
};
export default ShopPage;
