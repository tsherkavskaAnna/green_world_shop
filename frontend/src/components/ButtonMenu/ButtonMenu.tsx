import React from 'react'
import { Button } from '../ui/button'
import { montserrat } from '@/app/fonts'
import { FaArrowRight } from "react-icons/fa";

export default function ButtonMenu() {
  return (
      <div className='pl-10 pt-4 flex'>
          <Button className={`${montserrat.className} rounded-full text-white bg-logo hover:bg-yellow-700`}>Buy now</Button>
          <Button className={`${montserrat.className} rounded-full text-white bg-logo hover:bg-yellow-700 ml-4`}>Explore more
              <FaArrowRight className='ml-2'/>
          </Button>
    </div>
  )
}
