'use client'
import React from 'react'
import Image from 'next/image'
import memoji from '../../../public/memoji.webp'
import partyMemoji from '@/public/party_memoji.webp'

export default function Index() {
  return (
    <div className='flex flex-col p-8 sm:p-6 gap-2 sm:gap-4'>
      <div>
        <span className=''/>
      </div>
      <div className='relative flex items-center'>
        <div className='flex z-10 sm:justify-start justify-center group-hover:z-0 group-hover:blur-3xl transition-all duration-300'>
          <Image src={memoji} alt={"Kevin heart memoji"} width={150} height={150} style={{objectFit: 'contain'}}/>
        </div>
        <div className='sm:justify-start absolute justify-center blur-3xl group-hover:blur-0 transition-all duration-300'>
          <Image src={partyMemoji} alt={"Kevin Party memoji"} width={150} height={150} style={{objectFit: 'contain'}}/>
        </div>
      </div>
      <div className='flex flex-col justify-end gap-2 sm:p-6'>
        <h1 className='font-black text-center text-3xl sm:text-left'>Aló. Welcome!</h1>
        <p className='font-normal'>I am <span className='text-lg font-extrabold text-gray-800'>Kevin Martínez</span>, a front-end developer. I love upbeat music, dancing, board games, and video games.</p>
      </div>
    </div>
  )
}
