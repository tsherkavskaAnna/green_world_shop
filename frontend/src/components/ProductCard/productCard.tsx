import React from 'react';

import { htmlToText } from 'html-to-text';
import StarRating from '../StarRating';
import ImageGallery from '../ImageGallery/ImageGallery';
import { Review } from '@/interface/product';
import Counter from '../Counter';
import { getProductBySlug } from '@/services/getProductBySlug';
import NewReview from '../NewReview/NewReview';

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const product = await getProductBySlug(params.slug);
  const images = product.image || [];

  const comments = (product.reviews || []).sort(
    (a: { createdAt: Date }, b: { createdAt: Date }) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const rating = product?.reviews
    ? product.reviews.map((rev: Review) => rev.rating)
    : [];
  const averageRating =
    rating.reduce((acc: string, val: string) => acc + val, 0) / rating.length;

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
        <div className='flex flex-col justify-between rounded-lg bg-roundedButton px-6 py-8'>
          <div className='flex flex-col gap-4'>
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
              <p>{<StarRating rating={Number(averageRating.toFixed(0))} />}</p>
            </div>
            <p className='font-baskervvile text-primary'>{plainDescription}</p>
          </div>
          <div className='mt-6 w-full'>
            <Counter
              id={product.id}
              documentId={product.documentId}
              slug={params.slug}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          </div>
        </div>
      </div>
      {/* Recensioni */}
      <div className='mt-8 rounded-lg bg-slate-100 p-4 font-montserrat'>
        <h2 className='text-center font-montserrat text-2xl font-bold text-accessColor'>
          Customer Reviews
        </h2>
        {/* Checkbox nascosto */}
        <input type='checkbox' id='toggleReview' className='peer hidden' />

        {/* Label che funge da bottone */}
        <label
          htmlFor='toggleReview'
          className='inline-block cursor-pointer rounded-lg bg-accessColor px-4 py-2 text-white hover:border-white hover:bg-accessColor hover:text-link hover:shadow-lg'
        >
          Add review
        </label>
        <NewReview productId={product.id} strapiToken={''} />
      </div>

      <div className='mt-2 rounded-lg bg-slate-100 p-4'>
        {comments.length > 0 ? (
          comments.map((comment: Review) => (
            <div key={comment.id} className='mt-4'>
              <StarRating rating={comment.rating} />
              <p className='font-baskervvile text-sm text-link'>
                {comment.author}
              </p>
              <div
                className='mt-2 font-blinker text-sm text-gray-600'
                dangerouslySetInnerHTML={{ __html: comment.comment }}
              />
            </div>
          ))
        ) : (
          <p className='text-center text-slate-400'>No reviews yet</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
