import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import { montserrat } from '@/app/fonts';
import Link from 'next/link';

function BuisnessHero() {
  return (
    <div className='grid-col grid min-h-screen place-content-center bg-cover bg-no-repeat font-montserrat md:mb-8 md:bg-hero-background md:px-32 md:py-10 lg:grid-cols-2'>
      <div className=''>
        <Card className='bg-white md:h-96 md:w-96'>
          <CardHeader>
            <CardTitle className='font-montserrat text-link'>
              Plants for your business
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className='text-primary'>
            <p>
              From creating an office jungle to sending an unusual gift, there’s
              plenty of ways to turn your workplace green.
            </p>
            <br></br>
            <p>
              We design, install and maintain plants for businesses. Our
              floristry department creates flower arrangements for workspaces
              and the hospitality industry.
            </p>
          </CardContent>
          <CardFooter>
            <p>
              <Link href='/about'>
                <Button
                  className={`${montserrat.className} rounded-lg bg-button text-white`}
                >
                  Get in touch
                </Button>
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default BuisnessHero;
