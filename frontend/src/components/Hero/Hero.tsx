import { baskervvile } from '@/app/fonts';
import React from 'react';
import ButtonMenu from '../ButtonMenu/ButtonMenu';
import Examples from '../ExamplesHome/examples';

export default function Hero() {
  return (
    <div className='min-h-screen bg-hero-image bg-right-top bg-no-repeat px-8 pb-10 pt-10 lg:bg-cover'>
      <div className=''>
        <div
          className={`${baskervvile.className} pt-10 text-center text-4xl font-semibold sm:pt-16 md:pl-10 md:text-start md:text-6xl`}
        >
          <h1>Green Planet</h1>
        </div>
        <div
          className={`${baskervvile.className} pt-2 text-center text-xl text-button md:pl-20 md:text-start md:text-3xl`}
        >
          <h2>
            Let's make this world more
            <br></br>beautiful together
          </h2>
        </div>
        <div className={`${baskervvile.className} pt-2 md:pl-10`}>
          <h3>
            Harmony by NurtureSystem provides everything you need <br></br> to
            achieve healthy, luscious growth for your tropical houseplants.
            <br></br>Harmony is well-suited to Monstera, Philodendron,
            Syngonium, Epipremnum,
            <br></br> Alocasia, Anthurium and many more aroid varieties, in
            addition to your other plants.
          </h3>
        </div>
        <ButtonMenu />
      </div>
      <Examples />
    </div>
  );
}
