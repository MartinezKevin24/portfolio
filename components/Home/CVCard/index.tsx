import React from 'react'
import Image from 'next/image'
import workingMemoji from '@/public/working_memoji.webp'
import Link from 'next/link'

export default function Index() {
  return (
    <Link href={"https://drive.google.com/file/d/1Scwcmr9KEzIFD7tnhyv8G8hpt_TYuC-q/view?usp=sharing"}>
      <div className='flex justify-center items-end h-full px-2 pt-2'>
        <div className='flex justify-center flex-col items-center sm:gap-5'>
          <h1 className='text-2xl sm:text-3xl font-black'>CV/Resume</h1>
          <Image alt={"Kevin working memoji"} src={workingMemoji} width={150} height={150} style={{objectFit: 'contain'}}/>
        </div>
      </div>
    </Link>
  )
}
