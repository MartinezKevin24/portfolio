'use client'
import React from 'react'
import Image from 'next/image'
import memoji from '../../../public/memoji.webp'

export default function Index() {
  return (
    <div className='flex flex-col p-8 sm:p-6 gap-2 sm:gap-4'>
      <div>
        <span/>
      </div>
      <div className='flex sm:justify-start justify-center'>
        <Image src={memoji} alt={"Kevin heart memoji"} width={150} height={150} style={{objectFit: 'contain'}}/>
      </div>
      <div className='flex flex-col justify-end gap-2 sm:p-6'>
        <h1 className='font-black text-center text-3xl sm:text-left'>Aló. Welcome!</h1>
        <p className='font-normal'>I am Kevin Martínez, a front-end developer. I love upbeat music, dancing, board games, and video games.</p>
      </div>
    </div>
  )
}
