import React from 'react'
import Image from 'next/image'
import workingMemoji from '@/public/working_memoji.webp'

export default function Index() {
  return (
    <div className='flex justify-center items-end h-full'>
      <div className='flex justify-center flex-col items-center gap-5'>
        <h1 className='text-3xl font-bold'>CV/Resume</h1>
        <Image alt={"Kevin working memoji"} src={workingMemoji} width={150} height={150} style={{objectFit: 'contain'}}/>
      </div>
    </div>
  )
}
