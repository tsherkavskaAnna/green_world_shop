import Hero from '@/components/Hero/Hero';
import Nav from '@/components/Navigation/Nav';
import Image from 'next/image';

export default function Home() {
  return (
	  <main className='min-h-screen w-full px-12 py-4'>
		  <Nav />
		  <Hero />
    </main>
  );
}
