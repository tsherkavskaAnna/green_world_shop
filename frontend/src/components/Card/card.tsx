import React from 'react';
import { ImageStrapi } from '@/components/ImageStrapi';
import StarRating from '@/components/StarRating';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { Product } from '@/interface/product';

interface CardProps {
  product: Product;
}

const CardProduct: React.FC<CardProps> = ({ product }) => {
  const cardImageUrl =
    product.image?.[0]?.formats?.large?.url || product.image?.[0]?.url;
  const cardImageAlt =
    product.image[0]?.alternativeText || product.name || 'product image';

  const calculateAverageRating = (reviews: { rating: number }[]) => {
    if (!reviews.length) return 0;
    const total = reviews.reduce((acc, review) => acc + review.rating, 0);
    return Math.round(total / reviews.length);
  };

  return (
    <>
      <Card className='p-none flex h-full flex-col text-start'>
        <CardContent className='relative h-64'>
          <ImageStrapi
            src={cardImageUrl}
            alt={cardImageAlt}
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
          <Button className='rounded-xl bg-link text-white'>Add to card</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardProduct;
