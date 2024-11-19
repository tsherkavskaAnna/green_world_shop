'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getAllProducts } from '@/hook/getAllProducts';
import Link from 'next/link';

import React from 'react';

const ProductsPage = () => {
  const { products, error, isLoading } = getAllProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className='grid-row grid gap-4 py-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
      {products.map((product: Product) => (
        <Card className='flex h-full flex-col' key={product.id}>
          <CardHeader>
            <Link href={`/products/${product.id}`}>
              <CardTitle className='text-logo'>{product.name}</CardTitle>
            </Link>
            <CardDescription className='font-blinker text-slate-400'>
              {product.nickname}
            </CardDescription>
          </CardHeader>
          <CardContent className='flex-grow'></CardContent>
          <CardFooter className='flex content-end justify-between'>
            <p>{product.price} €</p>
            <Button className='rounded-xl bg-link text-white'>
              Add to card
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductsPage;

interface Product {
  id: number;
  name: string;
  nickname: string;
  description: string;
  price: number;
  image: string;
  size: string;
  category: string;
}
