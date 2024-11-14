import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Button } from './ui/button';

const GoogleSignInButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  return (
    <>
      <Button
        className='rounded-[8px] bg-white font-medium shadow-xl hover:bg-white'
        onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
      >
        <Image src='/logo/google.png' width={30} height={30} alt='google' />
        Sign In with Google
      </Button>
    </>
  );
};

export default GoogleSignInButton;
