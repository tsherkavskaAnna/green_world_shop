'use client';
import React from 'react';
import Image from 'next/image';
import { getKits } from '@/services/getKits';
import { useQuery } from '@tanstack/react-query';
import { Kit } from '@/interface/kit';
import { Button } from '@/components/ui/button';
import useCartStore from '@/store/useCartStore';
import { toast } from 'sonner';

const GiftsPage = () => {
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
    <div className='l min-h-screen flex-col bg-[#f9f7f7] px-6 pb-6 pt-36 text-center font-montserrat lg:p-40'>
      <div className='px-20 py-10 text-xl font-semibold text-nav'>
        <p>
          Looking for the perfect gift for a friend, family member, or even
          yourself? Our exclusive Plant Gift Kits are the ideal way to bring
          greenery into any home! Whether you're a beginner, a pet owner, a
          kitchen enthusiast, or love surprises, we have the perfect kit for you
          all for just <span className='text-accessColor'> €49.99</span>
        </p>
      </div>
      {isLoadingAll && (
        <p className='text-start font-montserrat text-slate-400'>
          Caricamento...
        </p>
      )}
      {isErrorAll && (
        <p className='text-start font-montserrat text-red-400'>
          Error from server
        </p>
      )}
      <div className=''>
        {/* Kits Grid */}
        <div className='container grid grid-cols-1 gap-6 lg:grid-cols-2'>
          {allKits?.map((product: Kit) => (
            <div key={product.id}>
              <h2 className='my-4 font-blinker text-xl font-semibold text-accessColor'>
                {product.name}
              </h2>
              <div className='group relative aspect-video cursor-pointer overflow-hidden rounded-t-xl'>
                <div className='absolute inset-x-0 -bottom-0 z-10 flex cursor-pointer items-end rounded-t-xl bg-gradient-to-t from-primary via-[#339041]/60 to-[#D8DFCA]/90 pt-4 text-white opacity-0 backdrop-blur-md transition duration-300 ease-in-out group-hover:opacity-100'>
                  <div>
                    <div className='translate-y-4 transform space-y-3 p-4 pb-10 text-xl transition duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100'>
                      <div
                        className='text-base opacity-100'
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
};

export default GiftsPage;
