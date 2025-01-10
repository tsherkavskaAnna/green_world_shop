'use client';
import React from 'react';
//import { ImageStrapi } from '../ImageStrapi';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageProduct } from '@/interface/product';
import 'react-photo-view/dist/react-photo-view.css';

import { urlBase } from '@/lib/urlBase';

interface ImageGalleryProps {
  images: ImageProduct[];
  productName: string;
}

function ImageGallery({ images, productName }: ImageGalleryProps) {
  const mainImage = images[0];
  const sideImages = images.slice(1, 5);
  const url = mainImage.url;

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
          <PhotoView src={`${urlBase}${url}`}>
            <img
              key={mainImage.id}
              src={`${urlBase}${url}`}
              alt={mainImage.alternativeText || productName}
              height={1000}
              width={1000}
              className='h-[500px] w-full cursor-pointer rounded-md object-cover'
            />
          </PhotoView>
        )}
        {/* Immagini piccole */}
        <div className='grid-row grid gap-2 md:grid-cols-4'>
          {sideImages.map((image, index) => (
            <PhotoView key={index} src={`${urlBase}${image.url}`}>
              <img
                src={`${urlBase}${image.url}`}
                alt={image.alternativeText || productName}
                height={200}
                width={200}
                className='h-full w-full cursor-pointer rounded-md object-cover'
              />
            </PhotoView>
          ))}
        </div>
      </div>
    </PhotoProvider>
  );
}

export default ImageGallery;
