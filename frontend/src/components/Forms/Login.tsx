'use client';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { signIn, useSession } from 'next-auth/react';
import GoogleSignInButton from '@/components/SignInButton';
import { toast } from 'sonner';

import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(true);
  const [loggedIn, setLoggetIn] = React.useState(false);
  const route = useRouter();

  const { status } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoggetIn(true);
    const result = await signIn('credentials', {
      email: email,
      password: password,
      redirect: false,
    });
    if (result?.ok) {
      route.push('/cart');
    } else {
      setTimeout(() => {
        toast.error('Invalid email or password. Please try again.');
      }, 500);

      setLoggetIn(false);
    }
  };

  React.useEffect(() => {
    if (status === 'authenticated') {
      toast.success('You are signed in successfully');
      route.push('/cart');
    }
  }, [status, loggedIn, route]);

  return (
    <div className='pt-16 md:pt-10'>
      <div className='grid h-screen content-center justify-center bg-cover bg-right-top bg-no-repeat sm:bg-hero-image'>
        <Card className='bg-slate-100 px-7 py-4 font-montserrat md:w-[550px]'>
          <CardHeader>
            <CardTitle className='text-nav'>Sign in </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className='grid w-full items-center gap-6'>
                <GoogleSignInButton />
                <div className='flex flex-nowrap items-center md:w-[450px]'>
                  <Separator className='w-1/3 md:w-2/5' />
                  <p className='px-6'>OR</p>
                  <Separator className='w-1/3 md:w-2/5' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name' className='ml-1 text-link'>
                    Email
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='Enter your email'
                    className='rounded-[8px] shadow-xl'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='password' className='ml-1 text-link'>
                    Password
                  </Label>
                  <Input
                    id='password'
                    placeholder='Enter your password'
                    className='rounded-[8px] shadow-xl'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='ml-2 flex items-center space-x-2 text-link'>
                  <Checkbox
                    id='terms'
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked === true)
                    }
                  />
                  <label
                    htmlFor='terms'
                    className='ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    Remember me
                  </label>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className='grid w-full gap-4 sm:flex sm:justify-end'>
            <Button className='rounded-[8px] bg-button font-montserrat text-white'>
              Cancel
            </Button>
            <Button
              className='rounded-[8px] bg-button font-montserrat text-white'
              onClick={handleSubmit}
            >
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
