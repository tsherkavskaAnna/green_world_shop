import { baskervvile, blinker } from '@/app/fonts'
import React from 'react'
import ButtonMenu from '../ButtonMenu/ButtonMenu'

export default function Hero() {
    return (
        <div className='py-6'>
            <div className='h-screen bg-hero-image bg-no-repeat bg-left'>
                <div className={`${baskervvile.className} pt-16 pl-10 font-semibold text-6xl`}>
                    <h1>Green Planet</h1>
                </div>
                <div className={`${baskervvile.className} pt-2 pl-20 text-3xl text-button`}>
                    <h2>Let's make this world more
                        <br>
                        </br>beautiful together</h2>
                </div>
                <div className={`${baskervvile.className} pt-2 pl-10`}>
                    <h3>Harmony by NurtureSystem provides everything you need <br></br> to achieve healthy, luscious growth for your tropical houseplants.
                        <br></br>Harmony is well-suited to Monstera, Philodendron, Syngonium, Epipremnum,
                        <br></br> Alocasia, Anthurium and many more aroid varieties, in addition to your other plants.</h3>
                </div>
                <ButtonMenu />
            </div>
        </div>
  )
}