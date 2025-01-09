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
//import ProductCard from '@/components/ProductCard/productCard';
import { getProductById } from '@/services/getProductById';
import { Product } from '@/interface/product';

const ProductCard = dynamic(
  () => import('@/components/ProductCard/productCard'),
  { ssr: false }
);

interface ProductProps {
  product: Product;
  params: { id: string };
}
const SingleProductPage: React.FC<ProductProps> = async ({
  params,
}: {
  params: { id: string };
}) => {
  const product = await getProductById(params.id);
  return (
    <>
      <div className='flex min-h-screen'>
        <aside className='hidden w-60 border-r-2 border-text py-32 pr-4 sm:block'>
          <FiltersSidebar />
        </aside>
        <main className='flex-1 px-10 pt-28 sm:pl-12'>
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
