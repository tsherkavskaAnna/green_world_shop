'use client';
import React, { useEffect, useState } from 'react';
import CardProduct from '@/components/Card/card';

import { getAllProducts } from '@/services/getAllProducts';
import { getQuery } from '@/services/getQuery';
import { Product } from '@/interface/product';
import { getFilters } from '@/services/getFilters';

export interface UrlParamsProps {
  query: string;
  category: string;
  tags: string[];
  minPrice: number;
  maxPrice: number;
  size: string;
}

function ProductsList({ searchParams }: { searchParams: UrlParamsProps }) {
  const [product, setProduct] = React.useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const query = searchParams.query || '';
  const size = searchParams.size || '';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getAllProducts();
        setProduct(data);
        setFilteredProducts(data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Errore nel caricamento dei prodotti.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchFilteredProduct = async () => {
      if (query) {
        setIsLoading(true);
        try {
          const data = await getQuery(query);
          setFilteredProducts(data);

          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          setError('Errore nel caricamento dei prodotti.');
        } finally {
          setIsLoading(false);
        }
      } else {
        setFilteredProducts(product);
      }
    };
    fetchFilteredProduct();
  }, [query, product]);

  useEffect(() => {
    const fetchFilteredProduct = async () => {
      if (size) {
        setIsLoading(true);
        try {
          const data = await getFilters(size);
          setFilteredProducts(data);

          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          setError('Errore nel caricamento dei prodotti.');
        } finally {
          setIsLoading(false);
        }
      } else {
        setFilteredProducts(product);
      }
    };
    fetchFilteredProduct();
  }, [size, product]);

  return (
    <div>
      {isLoading && (
        <p className='text-start font-montserrat text-slate-400'>
          Caricamento...
        </p>
      )}
      {error && (
        <p className='text-start font-montserrat text-red-400'>{error}</p>
      )}
      <div className='grid-row mb-3 grid gap-4 py-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {(filteredProducts.length > 0 ? filteredProducts : product).length >
        0 ? (
          (filteredProducts.length > 0 ? filteredProducts : product).map(
            (product: Product) => (
              <CardProduct product={product} key={product.id} />
            )
          )
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
