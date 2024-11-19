import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { Button } from './ui/button';

const GoogleSignInButton = () => {
  const handleSubmit = () => {
    signIn('google', { callbackUrl: '/dashboard' });
  };
  return (
    <>
      <Button
        className='rounded-[8px] bg-white font-medium shadow-xl hover:bg-white'
        onClick={handleSubmit}
      >
        <Image src='/logo/google.png' width={30} height={30} alt='google' />
        Sign In with Google
      </Button>
    </>
  );
};

export default GoogleSignInButton;
