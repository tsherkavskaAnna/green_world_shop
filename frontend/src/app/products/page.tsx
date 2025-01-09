import CardProduct from '@/components/Card/card';
import { Product } from '@/interface/product';
import { getAllProducts } from '@/services/getAllProducts';
//import Image from 'next/image';

import React from 'react';

const ProductsPage = async () => {
  const products = await getAllProducts();

  return (
    <div className='grid-row mb-3 grid gap-4 py-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      {products.length > 0 ? (
        products.map((product: Product) => (
          <CardProduct product={product} key={product.id} />
        ))
      ) : (
        <div className='text-center'>No products found.</div>
      )}
    </div>
  );
};

export default ProductsPage;
