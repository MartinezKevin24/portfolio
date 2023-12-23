'use client'
import React from 'react'
import PresentationCard from '@/components/Home/PresentationCard'
import CVCard from '@/components/Home/CVCard'
import MapCard from '@/components/Home/MapCard'
import InfiniteCarousel from '@/components/Home/InfiniteCarousel'
import SpotifyList from '@/components/Misc/SpotifyList'
import Cameya from '@/components/Projects/Cameya'
import Link from 'next/link'

export default function index() {
  return (
    <>
      <div className='flex flex-col gap-3'>
        <div className='grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-5 sm:h-[600px]'>
          <div className='bg-[#c297d9] flex items-end sm:row-span-2 sm:col-span-1 transition ease-out hover:scale-[1.02] duration-200 delay-100 hover:shadow-xl rounded-3xl overflow-hidden'>
            <PresentationCard/>
          </div>
          <div className='grid sm:col-span-2 sm:row-span-2 grid-cols-2 sm:grid-rows-2 gap-5'>
            <div className='bg-[#BCCEFB] col-span-1 sm:col-span-1 transition ease-out hover:scale-[1.02] duration-200 delay-100 hover:shadow-xl rounded-3xl overflow-hidden'>
              <CVCard/> 
            </div>
            <div className='bg-[#e4a23faf] col-span-1 transition ease-out hover:scale-[1.02] duration-200 delay-100 hover:shadow-xl rounded-3xl overflow-hidden'>
              <MapCard/>
            </div>
            <div className='bg-[#050505af] col-span-1 transition ease-out hover:scale-[1.02] hover:bg-[#000000d0] duration-200 delay-100 hover:shadow-xl rounded-3xl overflow-hidden'>
              <Link href={'https://github.com/MartinezKevin24'}>
                <div className='flex justify-center group items-center h-full'>
                  <span className='icon-github text-[160px] md:text-[200px] group-hover:text-[#7989c2bb] text-white p-3'/>
                </div>
              </Link>
            </div>
            <div className='bg-[#18349baf] col-span-1 transition ease-out hover:scale-[1.02] hover:bg-[#18349b88] duration-200 delay-100 hover:shadow-xl rounded-3xl overflow-hidden'>
              <Link href={'https://www.linkedin.com/in/kevin-daniel-mart%C3%ADnez-acevedo-956333149/'}>
                <div className='flex group justify-center items-center h-full'>
                  <span className='icon-linkedin2 text-[160px] md:text-[200px] group-hover:text-[#4b427a] text-white p-3'/>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <InfiniteCarousel/>
        <div>
          <div className='bg-[#BCCEFB] col-span-1 sm:col-span-1 hover:shadow-xl rounded-3xl overflow-hidden transition ease-out'>
            <Cameya/>
          </div>
        </div>
        <SpotifyList/>
      </div>
    </>
  )
}
