import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className='wrapper'>
      
      <div className='w-full wrapper-height rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 relative'>
        <Image 
          src='/images/rock-climb.jpg' 
          alt="Rock climbing background"
          fill
          className='object-cover z-index-[-1] rounded-xl z-[-1] bg-gradient-to-r from-amber-200 to-amber-400 brightness-75'
          priority
        />
        <div className='absolute bottom-0 p-6 flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-5xl md:text-7xl tracking-tight leading-[90%] text-white'>Experts sign up now to scale <br/> El Capitan and Half Dome.</h1>
            <p className='text-white text-sm md:text-xl leading-[130%]'> Bring your own gear. We'll provide food and <br/> a one hour video on scaling these amazing rocks</p>
          </div>
          <Button className='max-w-50 bg-green-400 hover:bg-green-500 text-black cursor-pointer' >Get Started</Button>
        </div>
      </div>
    </div>
  )
}
