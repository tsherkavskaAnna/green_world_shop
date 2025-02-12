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
import { Product } from '@/interface/product';
import { getProductBySlug } from '@/services/getProductBySlug';

const ProductCard = dynamic(
  () => import('@/components/ProductCard/productCard'),
  { ssr: false }
);

interface ProductProps {
  product: Product;
  params: { slug: string };
}
const SingleProductPage: React.FC<ProductProps> = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const product = await getProductBySlug(params.slug);

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
};
export default SingleProductPage;
