import React from 'react'
import Image from 'next/image'
import phoneCameya from '@/assets/first_screen_cameya.png'
import myServicesScreen from '@/assets/my_services_cameya.png'

export default function Cameya() {
  return (
    <div className='p-7 group'>
      <div className='relative h-60 flex'>
        <div className='absolute left-[120px] group-hover:-top-4'>
          <Image src={myServicesScreen} height={360} alt={"Phone service screen Cameya"} quality={100}/>
        </div>
        <div className='absolute top-2 group-hover:top-4'>
          <Image src={phoneCameya} height={360} alt={"Phone screen Cameya"} quality={100}/>
        </div>
      </div>
    </div>
  )
}
