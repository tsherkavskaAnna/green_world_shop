import React from 'react';
import dynamic from 'next/dynamic';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import FiltersSidebar from '@/components/Filters/filters';

import { getProductBySlug } from '@/services/getProductBySlug';
import { Metadata } from 'next';

const ProductCard = dynamic(
  () => import('@/components/ProductCard/productCard'),
  { ssr: false }
);

interface ProductProps {
  params: { slug: string };
}

export const generateMetadata = ({ params }: ProductProps): Metadata => {
  return {
    title: `Product - ${params.slug}`,
  };
};
export default async function SingleProductPage({ params }: ProductProps) {
  const product = await getProductBySlug(params.slug);

  return (
    <>
      <div className='flex min-h-screen px-10'>
        <aside className='hidden w-60 border-r-2 border-text py-32 pr-4 sm:block'>
          <FiltersSidebar />
        </aside>
        <main className='flex-1 px-10 pt-28 sm:pl-12'>
          <div className='pt-4'>
            <Breadcrumb className='font-montserrat text-slate-500'>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href='/products'>Shop</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href='/products'>Plants</BreadcrumbLink>
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
}
