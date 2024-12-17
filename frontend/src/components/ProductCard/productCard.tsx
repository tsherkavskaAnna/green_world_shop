import React from 'react';
import { getSingleProduct } from '@/hook/getSingleProduct';
import { ImageStrapi } from '../ImageStrapi';
import { ImageProduct, Review } from '@/interface/product';
import Image from 'next/image';
import { htmlToText } from 'html-to-text';
import { Button } from '../ui/button';
import { LuHeart } from 'react-icons/lu';
import StarRating from '../StarRating';

export default function ProductPage({ params }: { params: { id: string } }) {
  const { product } = getSingleProduct(params.id);

  const images = product.image || [];
  const mainImage = images[0];
  const sideImages = images.slice(1, 4);
  const comments = product.reviews || [];
  const rating = product?.reviews
    ? product.reviews.map((rev: Review) => rev.rating)
    : [];

  const plainDescription = htmlToText(product.description || '', {
    wordwrap: 130,
    preserveNewlines: true,
    decodeEntities: true,
  });

  return (
    <div className='mx-auto py-6'>
      <div className='grid-row grid gap-5 md:grid-cols-3 xl:grid-cols-5'>
        <div className='col-span-2 gap-4'>
          <div className='flex h-full w-full flex-col gap-3'>
            {mainImage && (
              <ImageStrapi
                key={mainImage.id}
                src={mainImage.formats.large.url}
                alt={mainImage.alternativeText || product.name}
                height={1000}
                width={1000}
                className='w-full rounded-md object-cover'
              />
            )}
            <div className='rounded-lg bg-roundedButton p-3'>
              <StarRating rating={rating} />
              {comments.length > 0 &&
                comments.map((comment: Review) => (
                  <div>
                    <p className='font-baskervvile text-sm text-link'>
                      {comment.author}
                    </p>
                    <div
                      className='mt-2 font-blinker text-sm text-gray-600'
                      dangerouslySetInnerHTML={{ __html: comment.comment }}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className='col-span-1 flex flex-col gap-2'>
          {sideImages.length > 0 ? (
            sideImages.map((image: ImageProduct) => (
              <ImageStrapi
                key={image.id}
                src={image.formats.medium.url}
                alt={image.alternativeText || product.name}
                height={300}
                width={300}
                className='w-full rounded-md'
              />
            ))
          ) : (
            <div className='flex flex-col justify-between gap-4 rounded-lg'>
              <Image
                src='/images/default2.jpg'
                width={300}
                height={300}
                alt='Picture of default'
                className='rounded-lg'
              />
              <Image
                src='/images/default3.jpg'
                width={300}
                height={300}
                alt='Picture of default'
                className='rounded-lg'
              />
            </div>
          )}
        </div>
        <div className='col-span-3 flex flex-col gap-3 rounded-lg bg-roundedButton p-6 text-start xl:col-span-2'>
          <h1 className='font-blinker text-4xl font-bold text-accessColor'>
            {product.name}
          </h1>
          <p className='font-montserrat text-sm text-nav'>
            {'('}
            {product.nickname}
            {')'}
          </p>
          <div className='flex flex-nowrap justify-between'>
            <p className='font-blinker text-xl font-bold text-primary'>
              € {product.price} EUR
            </p>
            <p>{<StarRating rating={rating} />}</p>
          </div>
          <p className='font-baskervvile text-primary'>{plainDescription}</p>
          <div className='mt-6 w-full flex-1'>
            <div className='flex flex-nowrap'>
              <div className='mr-2 flex flex-nowrap content-center items-baseline justify-center gap-3 rounded-lg bg-white hover:bg-white'>
                <Button className='rounded-lg bg-white font-bold text-link hover:bg-white'>
                  -
                </Button>
                <span className='text-link'>0</span>
                <Button className='rounded-lg bg-white font-bold text-link hover:bg-white'>
                  +
                </Button>
              </div>
              <Button className='w-[80%] rounded-md bg-link px-4 py-2 font-inter text-white'>
                Add to Card
              </Button>
            </div>
            <Button className='mt-4 w-full border-2 border-accessColor bg-roundedButton font-inter text-accessColor hover:bg-transparent hover:opacity-70'>
              <LuHeart className='mr-2' /> Wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
