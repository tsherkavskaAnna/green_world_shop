import React from 'react';

import { htmlToText } from 'html-to-text';
import { Button } from '../ui/button';
import { LuHeart } from 'react-icons/lu';
import StarRating from '../StarRating';
import { getProductById } from '@/services/getProductById';
import ImageGallery from '../ImageGallery/ImageGallery';
import { Review } from '@/interface/product';
import Counter from '../Counter';
//import { PhotoProvider, PhotoView } from 'react-photo-view';

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await getProductById(params.id);

  const images = product.image || [];
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
      {/* Layout principale */}
      <div className='grid gap-6 lg:grid-cols-2'>
        {/* Sezione Galleria */}
        <ImageGallery images={images} productName={product.name} />
        {/* Sezione Descrizione */}
        <div className='flex flex-col gap-3 rounded-lg bg-roundedButton p-6 text-start'>
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
            <Counter id={params.id} name={product.name} price={product.price} />
            <Button className='mt-4 w-full bg-accessColor font-inter text-white transition delay-150 duration-300 ease-custom-ease hover:border-white hover:bg-accessColor hover:text-link hover:shadow-lg'>
              <LuHeart className='mr-2' /> Wishlist
            </Button>
          </div>
        </div>
      </div>

      {/* Recensioni */}
      <div className='mt-8 rounded-lg bg-border p-4'>
        <StarRating rating={rating} />
        {comments.length > 0 &&
          comments.map((comment: Review) => (
            <div key={comment.id} className='mt-4'>
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
  );
};

export default ProductPage;
