import React from 'react';
import ButtonMenu from '../ButtonMenu/ButtonMenu';

//import Examples from '../ExamplesHome/examples';

export default function Hero() {
  return (
    <div className='h-fit bg-hero-image bg-no-repeat lg:bg-cover'>
      <div className='px-6 py-10 text-base/8 md:container md:px-0'>
        <div className='pt-10 text-center font-baskervvile sm:pt-16 md:pl-10 md:text-start'>
          <h1 className='font-virnature text-5xl font-bold text-nav lg:text-7xl'>
            Green Planet
          </h1>
        </div>
        <div className='pt-2 text-center font-baskervvile text-2xl text-button md:pl-28 md:text-start md:text-5xl'>
          <h2 className='text-xl md:text-4xl'>Bringing Nature to Your Home</h2>
        </div>
        <div className='pt-2 font-baskervvile md:pl-10'>
          <h3 className='text-lg text-primary md:text-xl lg:text-2xl'>
            Harmony by NurtureSystem provides everything you need <br></br> to
            achieve healthy, luscious growth for your houseplants.
            <br></br>Harmony is well-suited to Monstera, Philodendron,
            Syngonium, Epipremnum,
            <br></br> Alocasia, Anthurium and many more aroid varieties, in
            addition to your other plants.
          </h3>
        </div>
        <ButtonMenu />
      </div>
    </div>
  );
}
