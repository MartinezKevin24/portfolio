import React from 'react'
import {logos} from '@/constants/Carousel/techCarousel'
import Image from 'next/image'

export default function Index() {

  return (
    <div className='flex flex-row h-full overflow-hidden gap-5 absolute animate-slideLeft hover:animate-pause py-2'>
      {
        [logos, logos].flat().map((tech, i)=>
          <div key={i} className='h-full group w-60 bg-[#245757] flex justify-center items-center rounded-2xl hover:scale-[1.08] duration-200 delay-100 cursor-default'>
            <div className='transition-opacity group-hover:opacity-0 opacity-100 duration-300 ease-out delay-75'>
              <Image src={tech.image} alt={tech.name} width={60} height={60}/>
            </div>
            <h1 className='text-white text-4xl font-bold absolute transition-opacity group-hover:opacity-100 opacity-0 duration-500 ease-out delay-100'>
              {tech.name}
            </h1>
          </div>
        ) 
      }
    </div>
  )
}
