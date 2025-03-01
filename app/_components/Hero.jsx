"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import Authentication from './Authentication'

function Hero() {
  return (
    <div className='text-center mt-40'>
        <h1 className='text-[80px]'>Ai Youtube short video Generator</h1>
        <p className='text-gray-500 text-2xl mb-5'>Ai generates scipts, videos, images and voiceovers within seconds. Create, Edit, Publish with ease in seconds.</p>
        <div className='flex flex-row items-center justify-center gap-5'>
          <Button className='h-15 w-40 text-xl rounded-2xl cursor-pointer bg-red-600 text-white hover:bg-red-700'>Explore</Button>
          <Authentication>
              <Button className='h-15 w-40 text-xl rounded-2xl cursor-pointer'>Get Started</Button>
          </Authentication>
        </div>
        
        
    </div>
  )
}

export default Hero