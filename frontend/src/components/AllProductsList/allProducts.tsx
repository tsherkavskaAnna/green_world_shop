'use client';
import React from 'react';
import CardProduct from '@/components/Card/card';
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '@/services/getAllProducts';
import { getQuery } from '@/services/getQuery';
import { PaginationMeta, Product } from '@/interface/product';
import { getFilters } from '@/services/getFilters';

export interface UrlParamsProps {
  query: string;
  category: string;
  tags: string[];
  maxPrice: number;
  size: string;
  locale: string;
  pageSize: number;
  page: number;
}

function ProductsList({ searchParams }: { searchParams: UrlParamsProps }) {
  const PRODUCT_PER_PAGE = 8;
  const query = searchParams.query || '';
  const size = searchParams.size || '';
  const category = searchParams.category || '';
  const tags = searchParams.tags || [];
  const maxPrice = searchParams.maxPrice || 0;
  const [currentPage, setCurrentPage] = React.useState(1);

  const hasFilters = size || category || tags.length > 0 || maxPrice;
  const hasQuery = !!query;

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const { data: allProductsData } = useQuery<
    { data: Product[]; pagination: PaginationMeta },
    Error
  >({
    queryKey: ['allProducts', currentPage, 'en'],
    queryFn: () => getAllProducts(currentPage, PRODUCT_PER_PAGE),
  });

  // Fetch dei prodotti filtrati

  const {
    data: filteredProducts,
    isLoading,
    isError,
  } = useQuery<{ data: Product[]; pagination: PaginationMeta }, Error>({
    queryKey: [
      'products',
      query,
      size,
      category,
      tags.length > 0,
      maxPrice,
      'en',
      currentPage,
      PRODUCT_PER_PAGE,
    ],
    queryFn: async () => {
      if (hasQuery) {
        const result = await getQuery(query);
        return (
          result || {
            data: [],
            pagination: { page: 0, pageSize: 0, pageCount: 0 },
          }
        );
      }
      if (hasFilters) {
        const result = await getFilters(
          size,
          category,
          tags,
          maxPrice,
          'en',
          currentPage,
          PRODUCT_PER_PAGE
        );
        return (
          result || {
            data: [],
            pagination: { page: 0, pageSize: 0, pageCount: 0 },
          }
        );
      }
      return {
        data: [],
        pagination: { page: 0, pageSize: 0, pageCount: 0 },
      };
    },
  });

  // Prodotti da visualizzare
  const isFiltersAttive = hasFilters || hasQuery;

  const productsToDisplay = isFiltersAttive
    ? filteredProducts?.data || []
    : allProductsData?.data || [];

  // Determina la paginazione
  const pagination = isFiltersAttive
    ? filteredProducts?.pagination
    : allProductsData?.pagination;

  const totalProducts = pagination?.total || 0;
  const pageCount = Math.ceil(totalProducts / PRODUCT_PER_PAGE);

  return (
    <div className='flex min-h-screen flex-col justify-between'>
      {isLoading && (
        <p className='text-start font-montserrat text-slate-400'>
          Caricamento...
        </p>
      )}
      {isError && (
        <p className='text-start font-montserrat text-red-400'>
          Error from server
        </p>
      )}
      {/* Products grid */}
      <div className='flex-grow'>
        <div className='grid-row mb-3 grid gap-4 py-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {productsToDisplay.length > 0 ? (
            productsToDisplay.map((product: Product) => (
              <CardProduct product={product} key={product.id} />
            ))
          ) : (
            <div className='text-start font-montserrat text-slate-400'>
              No products found.
            </div>
          )}
        </div>
      </div>
      {/* Pagination with button */}
      <div className='mt-auto'>
        {pagination && (
          <div className='mb-4 mt-6 flex items-center justify-center gap-2'>
            <button
              className='rounded-md border bg-gray-200 px-4 py-2 hover:bg-gray-300 disabled:opacity-50'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ← Prev
            </button>
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                className={`rounded-md border px-4 py-2 ${
                  currentPage === i + 1
                    ? 'bg-nav text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className='rounded-md border bg-gray-200 px-4 py-2 hover:bg-gray-300 disabled:opacity-50'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pageCount}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsList;
