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
import { baskervvile, montserrat } from '@/app/fonts';
function BuisnessHero() {
  return (
    <div className='bg-hero-background mb-8 grid min-h-screen grid-cols-2 place-content-center bg-cover bg-no-repeat px-32 py-10'>
      <div className=''>
        <Card className='h-96 w-96 bg-white'>
          <CardHeader>
            <CardTitle className={`${montserrat.className}`}>
              Plants for your business
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className={`${montserrat.className}`}>
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
              <Button
                className={`${montserrat.className} rounded-full text-white`}
              >
                Get in touch
              </Button>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default BuisnessHero;
