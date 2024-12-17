'use client';
import React from 'react';
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
import ProductCard from '@/components/ProductCard/productCard';

const SingleProductPage = ({ params }: { params: { id: string } }) => {
  const { product } = getSingleProduct(params.id);
  console.log(product);

  return (
    <>
      <div className='flex min-h-screen'>
        <aside className='w-60 border-r-2 border-text py-32 pr-4'>
          <FiltersSidebar />
        </aside>
        <main className='flex-1 pl-12 pt-28'>
          <div className='pt-4'>
            <Breadcrumb className='font-montserrat text-slate-500'>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href='/shop'>Shop</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href='/shop'>Plants</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>{product.name}</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div>{<ProductCard params={params} />}</div>
        </main>
      </div>
    </>
  );
};
export default SingleProductPage;
