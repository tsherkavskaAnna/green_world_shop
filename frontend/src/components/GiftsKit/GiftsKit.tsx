'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getKits } from '@/services/getKits';
import { useQuery } from '@tanstack/react-query';
import { Kit } from '@/interface/kit';

import useCartStore from '@/store/useCartStore';
import { toast } from 'sonner';

function GiftsKit() {
  // Fetch di tutti i prodotti
  const {
    data: allKits,
    isLoading: isLoadingAll,
    isError: isErrorAll,
  } = useQuery<Kit[], Error>({
    queryKey: ['allKits'],
    queryFn: getKits,
  });
  const { addItem } = useCartStore();
  const handleAddToCart = (product: Kit) => {
    addItem(
      {
        id: product.id,
        documentId: product.id.toString(),
        slug: product.name.toLowerCase().replace(/\s+/g, '-'),
        name: product.name,
        price: product.price,
        image: product.image[0],
      },
      1
    );
    toast.success(`${product.name} added to cart!`, {
      description: 'Go to your cart to complete the purchase.',
      duration: 5000,
    });
  };
  return (
    <div>
      {isLoadingAll && (
        <p className='mt-6 text-center font-montserrat text-slate-400'>
          Loading...
        </p>
      )}
      {isErrorAll && (
        <p className='mt-6 text-center font-montserrat text-red-400'>
          Error from server
        </p>
      )}
      <div className=''>
        {/* Kits Grid */}
        <div className='grid grid-cols-1 gap-6 xl:container xl:grid-cols-2'>
          {allKits?.map((product: Kit) => (
            <div key={product.id}>
              <h2 className='my-4 font-blinker text-xl font-semibold text-accessColor'>
                {product.name}
              </h2>
              <div className='group relative aspect-video cursor-pointer overflow-hidden rounded-t-xl'>
                <div className='absolute inset-x-0 -bottom-0 z-10 flex cursor-pointer items-end rounded-t-xl bg-gradient-to-t from-primary via-[#339041]/60 to-[#D8DFCA]/90 pt-4 text-white opacity-0 backdrop-blur-md transition duration-300 ease-in-out group-hover:opacity-100'>
                  <div>
                    <div className='max-h-60 translate-y-4 transform space-y-3 overflow-y-auto p-4 pb-10 text-xl transition duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100'>
                      <div
                        className='text-sm opacity-100 xl:text-base 2xl:text-lg'
                        dangerouslySetInnerHTML={{
                          __html: product.description,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <Image
                  alt=''
                  className='w-full object-cover transition duration-300 ease-in-out group-hover:scale-110'
                  src={product.image[0].url || ''}
                  width={1000}
                  height={1000}
                />
                <div className='p-4 text-left'>
                  <h3 className='text-lg font-semibold text-nav'>
                    {product.name}
                  </h3>
                  <p className='text-base font-bold text-accessColor'>
                    €{product.price}
                  </p>
                </div>
              </div>
              <Button
                className='w-full rounded-b-xl rounded-t-none bg-primary px-4 py-6 text-sm font-semibold text-white transition hover:bg-primary hover:text-accessColor'
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GiftsKit;
