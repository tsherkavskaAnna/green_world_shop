'use client';
import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

function UserDashboard() {
  const { data: session, status } = useSession();

  if (status === 'unauthenticated') {
    return (
      <div className='min-h-screen pt-48 text-center font-montserrat'>
        <h2>This is personal user section.</h2>
        <p>
          Please{' '}
          <Link href='/signin' className='text-link'>
            Login{' '}
          </Link>
          <span>or </span>
          <Link href='/signup' className='text-link'>
            Register
          </Link>
        </p>
      </div>
    );
  }

  if (status === 'authenticated') {
    return (
      <div className='min-h-screen pt-36 text-center font-montserrat'>
        <p>Welcome, {session.user?.name}</p>
        <p>
          <Link href='/auth/logout' className='text-link'>
            Logout
          </Link>
        </p>
      </div>
    );
  }
}

export default UserDashboard;
