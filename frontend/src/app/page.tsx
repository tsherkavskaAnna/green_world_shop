import Clients from '@/components/Clients/Clients';
import Hero from '@/components/Hero/Hero';
import ServicesPart from '@/components/Benefits/services';
import dynamic from 'next/dynamic';
import PromoGifts from '@/components/Promo/promo';

const DynamicHero = dynamic(
  () => import('../components/BuisnessHero/BuisnessHero'),
  {
    loading: () => <p>Loading...</p>,
  }
);
export default function Home() {
  return (
    <>
      <main className='pt-16 md:pt-32'>
        <Hero />
        <PromoGifts />
        <ServicesPart />
        <DynamicHero />
        <Clients />
      </main>
    </>
  );
}
