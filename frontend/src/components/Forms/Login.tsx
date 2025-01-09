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
import { signIn } from 'next-auth/react';
import GoogleSignInButton from '@/components/SignInButton';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn('credentials', {
      email,
      password,
      callbackUrl: '/dashboard',
    });
  };

  return (
    <div className='py-6'>
      <div className='grid h-screen content-center justify-center bg-hero-image bg-cover bg-right-top bg-no-repeat'>
        <Card className='w-[550px] bg-slate-100 px-7 py-4 font-montserrat'>
          <CardHeader>
            <CardTitle className='text-nav'>Sign in </CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-6'>
                <GoogleSignInButton />
                <div className='flex w-[450px] flex-nowrap items-center'>
                  <Separator className='ml-1 w-2/5' />
                  <p className='px-6'>OR</p>
                  <Separator className='w-2/5' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name' className='ml-1 text-link'>
                    Email
                  </Label>
                  <Input
                    id='email'
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
                  <Checkbox id='terms' />
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
          <CardFooter className='flex justify-end'>
            <Button className='mr-4 rounded-[8px] bg-button font-montserrat text-white'>
              Cancel
            </Button>
            <Button
              className='mr-4 rounded-[8px] bg-button font-montserrat text-white'
              onClick={onSubmit}
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
