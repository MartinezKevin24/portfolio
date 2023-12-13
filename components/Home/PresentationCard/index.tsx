'use client'
import React from 'react'
import Image from 'next/image'
import memoji from '../../../public/memoji.webp'

export default function Index() {
  return (
    <div className='flex h-full justify-end flex-col p-8 gap-4'>
      <Image src={memoji} alt={"Kevin heart memoji"} width={150} height={150} style={{objectFit: 'contain'}}/>
      <div className='flex flex-col justify-end gap-2 py-6'>
        <h1 className='font-black text-3xl'>Aló. Welcome!</h1>
        <p className='font-normal'>I am Kevin Martinez, a front-end developer with over 2 years of experience. I have a passion for upbeat music, dancing, and video games.</p>
      </div>
    </div>
  )
}
