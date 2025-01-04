import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';

async function UserDashboard() {
  const session = await getServerSession();
  //const { data: session, status } = useSession();

  if (!session || !session?.user) {
    return (
      <div className='min-h-screen pt-48 text-center font-montserrat'>
        <h2>This is personal user section.</h2>
        <p>
          Please{' '}
          <Link href='/login' className='text-link'>
            Login{' '}
          </Link>
          <span>or </span>
          <Link href='/register' className='text-link'>
            Register
          </Link>
        </p>
      </div>
    );
  } else {
    return (
      <div className='min-h-screen pt-36 text-center font-montserrat'>
        <p>Welcome, {session.user.email}</p>
      </div>
    );
  }
}

export default UserDashboard;
