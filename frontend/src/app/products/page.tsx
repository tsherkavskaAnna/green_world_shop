import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import FiltersSidebar from '@/components/Filters/filters';

import SearchQuery from '@/components/SearchQuery/search';
import ProductsList, {
  UrlParamsProps,
} from '@/components/AllProductsList/allProducts';

const ProductsPage = ({ searchParams }: { searchParams: UrlParamsProps }) => {
  return (
    <>
      <div className='flex min-h-screen'>
        <aside className='hidden w-60 border-r-2 border-text py-32 pr-4 sm:block'>
          <FiltersSidebar />
        </aside>
        <main className='flex-1 px-10 pt-28 text-center sm:px-0 sm:pl-12'>
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
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div>
            <SearchQuery />
          </div>
          <ProductsList searchParams={searchParams} />
        </main>
      </div>
    </>
  );
};

export default ProductsPage;
