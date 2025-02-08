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
import { Card, CardHeader } from '../ui/card';
//import { ImageStrapi } from '../ImageStrapi';

function ShoppingCart() {
  const { items, getTotalPrice, removeItem } = useCartStore();

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

  const totalPrice = getTotalPrice();

  return (
    <>
      <h1 className='text-center text-3xl font-bold text-nav'>
        Your shopping cart
      </h1>
      <div className='grid grid-cols-3 gap-8 pt-10'>
        <div className='col-span-2'>
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
                      className='rounded-lg'
                    />
                    {item.name}
                  </TableCell>
                  <TableCell className=''>{item.quantity}</TableCell>
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
            <TableFooter className=''>
              <TableRow>
                <TableCell colSpan={3} className='font-semibold'>
                  Total
                </TableCell>
                <TableCell className='text-end'>
                  {totalPrice.toFixed(2)} €
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
        <div>
          <Card>
            <CardHeader>
              <h2 className='text-lg font-medium'>Order summary </h2>
              <span>€{totalPrice}</span>
              <p className='text-sm font-medium'>
                Please note that delivery and payment options may vary based on
                your location.
              </p>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
