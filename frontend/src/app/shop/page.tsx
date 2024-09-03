import Header from '@/components/Header/Header';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import { montserrat } from '../fonts';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

function ShopPage() {
  return (
    <>
      <div className='flex min-h-screen'>
        <aside className='h-screen w-60 border-r-2 border-text pr-4 pt-32'>
          <div className=''>
            <p className={`${montserrat.className} mb-3 text-primary`}>
              Filters
            </p>
            <Separator className='bg-text' />
          </div>
          <div>
            <p className={`${montserrat.className} mb-3 mt-4 text-primary`}>
              Categories
            </p>
            <div
              className={`${montserrat.className} mb-3 ml-4 mt-4 flex items-center space-x-2 text-link`}
            >
              <Checkbox id='bulbs' className='rounded-3xl' />
              <label
                htmlFor='bulbs'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Bulbs
              </label>
            </div>
            <div
              className={`${montserrat.className} mb-3 ml-4 mt-4 flex items-center space-x-2 text-link`}
            >
              <Checkbox id='plants' className='rounded-3xl' />
              <label
                htmlFor='plants'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Plants
              </label>
            </div>
            <div
              className={`${montserrat.className} mb-3 ml-4 mt-4 flex items-center space-x-2 text-link`}
            >
              <Checkbox id='seeds' className='rounded-3xl' />
              <label
                htmlFor='seeds'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Seeds
              </label>
            </div>
            <div
              className={`${montserrat.className} mb-3 ml-4 mt-4 flex items-center space-x-2 text-link`}
            >
              <Checkbox id='gardening' className='rounded-3xl' />
              <label
                htmlFor='gardening'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Gardening
              </label>
            </div>
            <Separator className='bg-text' />
          </div>
          <div>
            <p className={`${montserrat.className} mb-3 mt-4 text-primary`}>
              Size
            </p>
            <div className='flex flex-nowrap px-2 py-4 text-link'>
              <Button className='mr-2 rounded-full bg-roundedButton hover:bg-roundedButton'>
                S
              </Button>
              <Button className='mr-2 rounded-full bg-roundedButton hover:bg-roundedButton'>
                M
              </Button>
              <Button className='mr-2 rounded-full bg-roundedButton hover:bg-roundedButton'>
                L
              </Button>
              <Button className='mr-2 rounded-full bg-roundedButton hover:bg-roundedButton'>
                XL
              </Button>
            </div>
            <Separator className='bg-text' />
          </div>
          <div>
            <p className={`${montserrat.className} mb-3 mt-4 text-primary`}>
              Price
            </p>
            <div className='pb-7 pt-4'>
              <Slider defaultValue={[33]} max={100} step={1} />
            </div>
            <Separator className='bg-text' />
          </div>
          <div className='ml-1 pt-4'>
            <div
              className={`${montserrat.className} mb-3 ml-4 mt-4 flex items-center space-x-2 text-link`}
            >
              <Checkbox id='petsFriendly' className='rounded-3xl' />
              <label
                htmlFor='petsFriendly'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Pets Friendly
              </label>
            </div>
            <div
              className={`${montserrat.className} mb-3 ml-4 mt-4 flex items-center space-x-2 text-link`}
            >
              <Checkbox id='airPurifier' className='rounded-3xl' />
              <label
                htmlFor='airPurifier'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Air Purifier
              </label>
            </div>
            <div
              className={`${montserrat.className} mb-3 ml-4 mt-4 flex items-center space-x-2 text-link`}
            >
              <Checkbox id='easyCare' className='rounded-3xl' />
              <label
                htmlFor='easyCare'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Easy Care
              </label>
            </div>
          </div>
        </aside>
        <main className='flex-1 pl-12 pt-28'>
          <div className='pt-4'>
            <Breadcrumb className={`${montserrat.className} text-slate-500`}>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href='/shop'>Shop</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href='/shop'>Plants</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </main>
      </div>
    </>
  );
}
export default ShopPage;
