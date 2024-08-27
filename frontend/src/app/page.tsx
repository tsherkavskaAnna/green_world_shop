import BuisnessHero from '@/components/BuisnessHero/BuisnessHero';
import Hero from '@/components/Hero/Hero';
import ServicesPart from '@/components/Services/services';
import dynamic from 'next/dynamic';

const DynamicHero = dynamic(
  () => import('../components/BuisnessHero/BuisnessHero'),
  {
    loading: () => <p>Loading...</p>,
  }
);
export default function Home() {
  return (
    <>
      <main className='bg-hero-image bg-cover bg-right-top bg-no-repeat pt-32'>
        <Hero />
      </main>
      <ServicesPart />
      <DynamicHero />
    </>
  );
}
