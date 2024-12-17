'use client';
import { ImageStrapi } from '@/components/ImageStrapi';
import StarRating from '@/components/StarRating';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from '@/components/ui/card';
import { getAllProducts } from '@/hook/getAllProducts';
import { Product } from '@/interface/product';
//import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

const ProductsPage = () => {
  const { products, error, isLoading } = getAllProducts();

  const calculateAverageRating = (reviews: { rating: number }[]) => {
    if (!reviews.length) return 0;
    const total = reviews.reduce((acc, review) => acc + review.rating, 0);
    return Math.round(total / reviews.length);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className='grid-row mb-3 grid gap-4 py-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
      {products.map((product: Product) => (
        <Card
          className='p-none flex h-full flex-col text-start'
          key={product.id}
        >
          <CardContent className='relative h-64'>
            <ImageStrapi
              src={product.image[0].formats.large.url}
              alt={product.image[0].alternativeText || product.name}
              width={300}
              height={300}
              className='h-full w-full object-cover pt-6'
            />
          </CardContent>
          <CardHeader className='flex-grow'>
            <Link href={`/products/${product.id}`}>
              <CardTitle className='text-logo'>{product.name}</CardTitle>
            </Link>
            <CardDescription className='font-blinker text-slate-400'>
              {product.nickname}
            </CardDescription>
          </CardHeader>
          <CardFooter className='flex content-end justify-between'>
            <div>
              <p>{product.price} €</p>
              <StarRating rating={calculateAverageRating(product.reviews)} />
            </div>
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
