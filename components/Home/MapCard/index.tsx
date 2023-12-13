'use client'
import React from 'react'
import Image from 'next/image'
import map from '../../../public/Map.jpg'
import memoji from '@/public/nice_memoji.webp'

export default function Index() {
  return (
    <div className='h-full relative flex justify-center items-center'>
      <div className='h-full scale-120 absolute'>
        <Image src={map} alt={"Colombian map"} style={{objectFit: 'cover', height: '100%'}}/>
      </div>
      <div className='flex flex-col absolute justify-center items-center gap-[2px]'>
        <div className='bg-[#60a4d543] backdrop-blur-sm p-2 border-white border-[4px] rounded-full flex items-center justify-center'>
          <Image src={memoji} alt={"Kevin heart memoji"} width={40} height={40} style={{objectFit: 'contain'}}/>
        </div>
        <span className='block bg-[#d93131] rounded-full w-3 h-3'/>
      </div>
    </div>
  )
}
