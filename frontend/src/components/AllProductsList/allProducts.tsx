'use client';
import React from 'react';
import CardProduct from '@/components/Card/card';
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '@/services/getAllProducts';
import { getQuery } from '@/services/getQuery';
import { Product } from '@/interface/product';
import { getFilters } from '@/services/getFilters';

export interface UrlParamsProps {
  query: string;
  category: string;
  tags: string[];
  maxPrice: number;
  size: string;
}

function ProductsList({ searchParams }: { searchParams: UrlParamsProps }) {
  const query = searchParams.query || '';
  const size = searchParams.size || '';
  const category = searchParams.category || '';
  const tags = searchParams.tags || [];
  const maxPrice = searchParams.maxPrice || 0;

  // Fetch di tutti i prodotti
  const {
    data: allProducts,
    isLoading: isLoadingAll,
    isError: isErrorAll,
  } = useQuery<Product[], Error>({
    queryKey: ['allProducts'],
    queryFn: getAllProducts,
  });

  // Fetch dei prodotti filtrati
  const {
    data: filteredProducts,
    isLoading: isLoadingFiltered,
    isError: isErrorFiltered,
  } = useQuery<Product[], Error>({
    queryKey: ['filteredProducts', query, size, category, tags, maxPrice],
    queryFn: async () => {
      let data = allProducts || [];

      if (query) {
        data = await getQuery(query);
      }

      if (size || category || tags.length > 0 || maxPrice) {
        data = await getFilters(size, category, tags, maxPrice);
      }

      return data;
    },
    enabled: !!allProducts,
  });

  const isLoading = isLoadingAll || isLoadingFiltered;
  const isError = isErrorAll || isErrorFiltered;

  // Prodotti da visualizzare
  const productsToDisplay = filteredProducts || allProducts || [];

  return (
    <div>
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
  );
}

export default ProductsList;
