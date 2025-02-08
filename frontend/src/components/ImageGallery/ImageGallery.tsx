'use client';
import React from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageProduct } from '@/interface/product';
import 'react-photo-view/dist/react-photo-view.css';

interface ImageGalleryProps {
  images: ImageProduct[];
  productName: string;
}

function ImageGallery({ images, productName }: ImageGalleryProps) {
  if (!images || images.length === 0) {
    return <p>No images available</p>;
  }

  const mainImage =
    images[0]?.formats?.large?.url ||
    images[0]?.formats?.medium?.url ||
    images[0]?.formats?.small?.url ||
    images[0]?.formats?.thumbnail?.url ||
    images[0]?.url;

  return (
    <PhotoProvider
      maskOpacity={0.8}
      speed={() => 600}
      easing={(type) =>
        type === 2
          ? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
          : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    >
      <div className='flex flex-col gap-3'>
        {/* Immagine principale */}
        {mainImage && (
          <PhotoView src={mainImage}>
            <img
              key={images[0].id}
              src={mainImage}
              alt={productName}
              height={1000}
              width={1000}
              className='h-[500px] w-full cursor-pointer rounded-md object-cover'
            />
          </PhotoView>
        )}
        {/* Immagini piccole */}
        <div className='grid-row grid gap-2 md:grid-cols-4'>
          {images.slice(1, 5).map((image) => {
            const imageUrl =
              image.formats.large?.url ||
              images[0]?.formats?.medium?.url ||
              images[0]?.formats?.small?.url ||
              images[0]?.formats?.thumbnail?.url ||
              images[0]?.url;
            return (
              <PhotoView key={image.id} src={imageUrl}>
                <img
                  src={imageUrl}
                  alt={image.alternativeText || productName}
                  height={200}
                  width={200}
                  className='h-full w-full cursor-pointer rounded-md object-cover'
                />
              </PhotoView>
            );
          })}
        </div>
      </div>
    </PhotoProvider>
  );
}

export default ImageGallery;
