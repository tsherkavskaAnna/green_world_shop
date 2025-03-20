'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import aloe from '/public/images/aloe.png';
import calathea from '/public/images/calathea.png';
import lily from '/public/images/peace-lily.png';
import monsteraSm from '/public/images/monstera-small.png';
import zzPlant from '/public/images/zz-plant.png';
import snake from '/public/images/snake.png';
import snakeWhite from '/public/images/snake-plant-white-pot.png';
import fig from '/public/images/fiddle-leaf-fig-plant-pot.png';
import spear from '/public/images/african-spear-plant-pot.png';
import red from '/public/images/red-anthurium-plant-gray-pot.png';

const images = [
  { id: 1, src: aloe, alt: 'aloe vera' },
  { id: 2, src: calathea, alt: 'calathea' },
  { id: 3, src: lily, alt: 'peace lily' },
  { id: 4, src: monsteraSm, alt: 'monstera' },
  { id: 5, src: zzPlant, alt: 'zz plant' },
  { id: 6, src: snake, alt: 'snake plant' },
  { id: 7, src: snakeWhite, alt: 'snake plant white pot' },
  { id: 8, src: fig, alt: 'fiddle leaf fig plant pot' },
  { id: 9, src: spear, alt: 'african spear plant pot' },
  { id: 10, src: red, alt: 'red anthurium plant gray pot' },
];

const SwiperPage = () => {
  return (
    <div className='mb-4 hidden md:flex'>
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        navigation
        pagination={{ type: 'bullets' }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination]}
        className='h-96 w-full rounded-lg'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='flex h-full w-full items-center justify-center'>
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={300}
                className='block h-full w-full object-cover'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperPage;
