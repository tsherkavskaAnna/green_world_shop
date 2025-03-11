import Image from 'next/image';
import Link from 'next/link';
export default function PromoGifts() {
  return (
    <div className='bg-[#f9f7f7] px-4 py-16 text-center font-montserrat'>
      <h2 className='text-2xl font-bold text-link lg:text-4xl'>
        🌿 New!{' '}
        <span className='font-montserrat'>
          Personalized Gift Kit for You 🌿
        </span>
      </h2>
      <p className='font-monserrat mx-auto mt-3 max-w-2xl text-lg text-primary'>
        Whether you're a beginner, a pet owner, or looking for cleaner air, we
        have the perfect plant kit for you! Explore our unique selection.
      </p>

      <div className='mt-6 flex justify-center'>
        <Image
          src='/images/kit.png'
          alt='Kit Regalo Piante'
          width={600}
          height={600}
          className='w-full max-w-xl rounded-lg shadow-lg'
        />
      </div>

      <div className='mt-8'>
        <Link
          href='/gifts'
          className='transition-discrete rounded-xl bg-nav px-6 py-3 text-lg text-white shadow-md hover:border-2 hover:border-nav hover:bg-inherit hover:text-nav'
        >
          Discover More
        </Link>
      </div>
    </div>
  );
}
