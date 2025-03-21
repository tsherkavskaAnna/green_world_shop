'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import useCartStore from '@/store/useCartStore';
import { Trash } from 'lucide-react';
import { ImageStrapi } from '../ImageStrapi';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';
import { useSession } from 'next-auth/react';
import { createUserCart } from '@/services/getUserCart';
import { toast } from 'sonner';
import React from 'react';
import { Progress } from '../ui/progress';

function ShoppingCart() {
  const { items, removeItem, updateItemQuantity } = useCartStore();
  const { data: session } = useSession();
  const userId = session?.user.strapiUserId as string;
  const strapiToken = session?.user.strapiToken as string;

  const FREE_SHIPPING_THRESHOLD = 100;
  const deliveryPay = 5.0;

  const subTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subTotal * 0.02;
  const total = subTotal + tax + deliveryPay;
  const progress = Math.min((total / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const amountRemaining = Math.max(FREE_SHIPPING_THRESHOLD - total, 0);

  const cardImageUrls = items.map((item) => {
    if (Array.isArray(item.image)) {
      return (
        item.image[0]?.formats?.small?.url ||
        item.image[0]?.formats?.medium?.url ||
        item.image[0]?.formats?.large?.url ||
        item.image[0]?.url
      );
    } else if (item.image) {
      return (
        item.image.formats?.small?.url ||
        item.image.formats?.medium?.url ||
        item.image.formats?.large?.url ||
        item.image.url
      );
    }
    return null;
  });

  const handleCheckout = async () => {
    if (!session) return;
    try {
      // Sincronizza il carrello con Strapi
      await createUserCart(
        userId,
        items.map((item) => ({ ...item, product: item })),
        strapiToken
      );
      toast.success('All products saved in your cart with success!');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      new Error('Error during checkout:');
    }
  };

  const handlePaySubmit = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('Unable to retrieve checkout URL');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('An error occurred during checkout.');
    }
  };

  return (
    <div className='container'>
      <h1 className='text-center text-xl font-bold text-nav lg:text-3xl'>
        Your shopping cart
      </h1>
      <div className='mb-4 grid gap-8 pt-4 lg:grid-cols-3 lg:pt-10'>
        <div className='px-2 lg:col-span-2'>
          <Table className=''>
            <TableHeader>
              <TableRow className='bg-slate-100'>
                <TableHead className='text-lg font-semibold'>Product</TableHead>
                <TableHead className='text-lg font-semibold'>
                  Quantity
                </TableHead>
                <TableHead className='text-lg font-semibold'>Price</TableHead>
                <TableHead className='text-lg font-semibold'></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className='flex flex-nowrap items-center gap-4 py-4 font-medium'>
                    <ImageStrapi
                      src={cardImageUrls[index]}
                      alt={item.name}
                      width={50}
                      height={50}
                      className='hidden rounded-lg sm:block'
                    />
                    {item.name}
                  </TableCell>
                  <TableCell className='text-left'>
                    <div className='mt-2 flex items-center'>
                      <Button
                        variant='outline'
                        size='sm'
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </Button>
                      <span className='mx-2'>{item.quantity}</span>
                      <Button
                        variant='outline'
                        size='sm'
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className='text-left'>{item.price}</TableCell>
                  <TableCell className='text-end'>
                    <Button className='bg-white py-3 hover:bg-white'>
                      <Trash
                        className='w-full text-red-500'
                        onClick={() => removeItem(item.id)}
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} className='text-end font-semibold'>
                  Total:
                </TableCell>
                <TableCell className='text-end'>
                  €{subTotal.toFixed(2)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
        <div>
          <Card>
            <CardHeader>
              <h2 className='text-start text-xl font-bold text-primary'>
                Order summary{' '}
              </h2>
              <div className='t rounded-lg bg-orderBg px-4 py-4 text-center font-montserrat text-orderButton'>
                {amountRemaining > 0 ? (
                  <>
                    <p>
                      <span>🚚 </span>Add €{amountRemaining.toFixed(2)} more for
                      FREE shipping
                    </p>
                    <Progress value={progress} className='my-2' />
                  </>
                ) : (
                  <p>
                    <span>🚚 </span>
                    Shipping is free for your order
                  </p>
                )}
              </div>
            </CardHeader>
            <CardContent className='grid grid-cols-1 gap-5'>
              <div className='flex flex-nowrap justify-between'>
                <p>Subtotal</p>
                <p>€{subTotal.toFixed(2)}</p>
              </div>
              <div className='flex flex-nowrap justify-between'>
                <p>Tax</p>
                <p>€{tax.toFixed(2)}</p>
              </div>
              <div className='flex flex-nowrap justify-between'>
                <p>Delivery Charges</p>
                {amountRemaining === 0 ? (
                  <p>Free delivery</p>
                ) : (
                  <p>€{deliveryPay.toFixed(2)}</p>
                )}
              </div>
              <Separator className='my-4' />
              <div className='flex flex-nowrap justify-between'>
                <p>Total</p>
                <p>€{total.toFixed(2)}</p>
              </div>
            </CardContent>
            <CardFooter className='flex flex-wrap gap-2'>
              <Button
                className='w-full rounded-lg bg-[#6c669e] text-white hover:bg-[#908fc5]'
                type='submit'
                onClick={handleCheckout}
              >
                Save products in cart
              </Button>
              <Button
                className='w-full rounded-lg bg-[#c470a9] text-white hover:bg-[#d492c2]'
                type='submit'
                onClick={handlePaySubmit}
              >
                Pay with card
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
