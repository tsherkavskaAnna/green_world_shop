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
import { Button } from '@/components/ui/button';

const ShopPage = () => {
  return (
    <>
      <div className='flex min-h-screen'>
        <aside className='w-60 border-r-2 border-text py-32 pr-4'>
          <FiltersSidebar />
        </aside>
        <main className='flex-1 pl-12 pt-28 text-center'>
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
          <div>
            <ProductsPage />
          </div>
          <Button className='mb-10 bg-link p-5 text-center text-white hover:bg-text'>
            Load more...
          </Button>
        </main>
      </div>
    </>
  );
};
export default ShopPage;
