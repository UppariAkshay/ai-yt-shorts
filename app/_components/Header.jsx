"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Authentication from './Authentication'
import { useAuthContext } from '../provider'

function Header() {
  const {user} = useAuthContext()

  return (
    <div className='flex justify-between items-center mt-10'>
        <div className='flex items-center'>
            <Image src={'/logo.svg'} width={50} height={50} alt='logo'/>
            <h1 className='text-4xl ml-3'>Video Gen</h1>
        </div>
       {
        !user ? <Authentication>
                  <Button>Get Started</Button>
                </Authentication> 
              : <div className='flex items-center gap-4'>
                    <Button>Dashboard</Button>  
                    <Image src={user.photoURL} alt="user logo" width={40} height={40} className='rounded-full' />
                </div>
       } 
        
        
    </div>
  )
}

export default Header