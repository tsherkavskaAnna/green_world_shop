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
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import GoogleSignInButton from '@/components/SignInButton';
import axios from 'axios';

export interface User {
  username: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [acceptTerms, setAcceptTerms] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const route = useRouter();

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validazione dei Terms and Conditions
    if (!acceptTerms) {
      setErrorMessage('You must accept the terms and conditions to register.');
      return;
    }

    const registerInfo = {
      username,
      email,
      password,
    };

    try {
      const register = await axios.post(
        'http://localhost:1337/api/auth/local/register',
        registerInfo,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      const registerResponse = await register.data;
      alert('Registration successful!');
      route.push('/login');

      if (registerResponse.success) {
        alert('Registration successful!');
        setUsername('');
        setEmail('');
        setPassword('');
        setAcceptTerms(false);
        setErrorMessage('');
        route.push('/login');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      new Error('Error with registration new user');
    }
  };

  return (
    <div className='py-6'>
      <div className='grid h-screen content-center justify-center bg-hero-image bg-cover bg-right-top bg-no-repeat'>
        <Card className='w-[550px] bg-slate-100 px-7 py-4 font-montserrat shadow-xl'>
          <CardHeader>
            <CardTitle className='text-nav'>Create your account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister}>
              <div className='grid w-full items-center gap-6'>
                <GoogleSignInButton />
                <div className='flex w-[450px] flex-nowrap items-center'>
                  <Separator className='ml-1 w-2/5' />
                  <p className='px-6'>OR</p>
                  <Separator className='w-2/5' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name' className='ml-1 text-link'>
                    Username
                  </Label>
                  <Input
                    id='username'
                    placeholder='Enter your username'
                    className='rounded-[8px] shadow-xl'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='username' className='ml-1 text-link'>
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
                  <Checkbox
                    id='terms'
                    checked={acceptTerms}
                    onCheckedChange={(checked) =>
                      setAcceptTerms(checked as boolean)
                    }
                  />
                  <label
                    htmlFor='terms'
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    Accept terms and conditions
                  </label>
                </div>
                {errorMessage && (
                  <p className='text-sm text-red-600'>{errorMessage}</p>
                )}
              </div>
            </form>
          </CardContent>
          <CardFooter className='flex justify-end'>
            <Button
              className='mr-4 rounded-[8px] bg-button font-montserrat text-white'
              onClick={() => route.push('/')}
            >
              Cancel
            </Button>
            <Button
              className='mr-4 rounded-[8px] bg-button font-montserrat text-white'
              type='submit'
              onClick={handleRegister}
            >
              Register
            </Button>
          </CardFooter>
          <CardContent className='text-center'>
            Already have an account?{' '}
            <Link href='/login' className='cursor-pointer text-nav'>
              Sign in
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterForm;
