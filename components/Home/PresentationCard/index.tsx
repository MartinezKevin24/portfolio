import React from 'react'
import Image from 'next/image'
import memoji from '@/public/memoji.webp'

export default function index() {
  return (
    <div className='bg-red-400 h-full flex justify-start px-4 py-6'>
      <Image src={memoji} alt={"memoji"} width={150} height={150} style={{objectFit: 'contain'}}/>
      <div className='flex flex-col justify-end gap-2 py-6'>
        <h1 className='font-bold text-2xl'>Aló. Welcome!</h1>
        <p>I am Kevin Martinez, a front-end developer with over 2 years of experience. I have a passion for upbeat music, dancing, and video games.</p>
      </div>
    </div>
  )
}
