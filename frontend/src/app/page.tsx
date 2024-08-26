import Hero from '@/components/Hero/Hero';
import ServicesPart from '@/components/Services/services';

export default function Home() {
  return (
    <>
      <main className='min-h-screen bg-hero-image bg-cover bg-right-top bg-no-repeat pt-32'>
        <Hero />
      </main>
      <ServicesPart />
    </>
  );
}
