'use client';
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '../ui/button';
import Link from 'next/link';
import useCartStore from '@/store/useCartStore';
import { Trash } from 'lucide-react';
import { Card, CardHeader } from '../ui/card';

function ShoppingCart() {
  const { items, getTotalPrice } = useCartStore();

  const totalPrice = getTotalPrice();

  if (items.length > 0) {
    return (
      <>
        <h1 className='text-center text-3xl font-bold text-nav'>
          Your shopping cart
        </h1>
        <div className='grid grid-cols-3 gap-8 pt-10'>
          <div className='col-span-2'>
            <Table className=''>
              <TableHeader>
                <TableRow>
                  <TableHead className=''>Product</TableHead>
                  <TableHead className='text'>Quantity</TableHead>
                  <TableHead className=''>Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className='font-medium'>{item.name}</TableCell>
                    <TableCell className='border-1 border-s-slate-50'>
                      {item.quantity}
                    </TableCell>
                    <TableCell className='text-left'>{item.price}</TableCell>
                    <TableCell className='flex justify-end'>
                      <Trash className='text-red-500' />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter className=''>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className='text-end'>{totalPrice}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
          <div>
            <Card>
              <CardHeader>
                <h2 className='text-lg font-medium'>To Pay</h2>
              </CardHeader>
            </Card>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className='grid w-full justify-center gap-8 rounded-md bg-border px-16 py-10 pl-4 text-center'>
      <h1 className='font-baskervvile text-3xl font-bold text-nav'>
        Your cart is empty
      </h1>
      <p className='font-montserrat text-link'>
        There are no items in your cart
      </p>
      <Button className='h-11 w-full cursor-pointer rounded-full border-2 bg-accessColor p-5 font-montserrat text-white transition delay-150 duration-300 ease-custom-ease hover:border-accessColor hover:bg-white hover:text-accessColor'>
        <Link href='/shop'>Return to shop</Link>
      </Button>
    </div>
  );
}

export default ShoppingCart;
