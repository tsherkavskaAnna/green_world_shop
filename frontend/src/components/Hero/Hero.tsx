import { baskervvile, blinker } from '@/app/fonts';
import React from 'react';
import ButtonMenu from '../ButtonMenu/ButtonMenu';
import CarouselMenu from '../CarouselMenu/Carousel';
import Examples from '../ExamplesHome/examples';

export default function Hero() {
  return (
    <div className='min-h-screen px-8 pb-10 pt-10'>
      <div className=''>
        <div
          className={`${baskervvile.className} pl-10 pt-16 text-6xl font-semibold`}
        >
          <h1>Green Planet</h1>
        </div>
        <div
          className={`${baskervvile.className} pl-20 pt-2 text-3xl text-button`}
        >
          <h2>
            Let's make this world more
            <br></br>beautiful together
          </h2>
        </div>
        <div className={`${baskervvile.className} pl-10 pt-2`}>
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
