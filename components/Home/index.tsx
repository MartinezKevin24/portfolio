'use client'
import React from 'react'
import PresentationCard from '@/components/Home/PresentationCard'
import CVCard from '@/components/Home/CVCard'
import MapCard from '@/components/Home/MapCard'

export default function index() {
  return (
    <>
      <div className='grid sm:grid-cols-3 sm:grid-rows-2 gap-5 sm:h-[550px]'>
        <div className='bg-[#fd2e2ead] col-span-1 row-span-2 sm:col-span-1 transition ease-out hover:scale-[1.02] duration-200 delay-100 hover:shadow-xl rounded-3xl overflow-hidden'>
          <PresentationCard/>
        </div>
        <div className='bg-[#BCCEFB] col-span-8 sm:col-span-1 transition ease-out hover:scale-[1.02] duration-200 delay-100 hover:shadow-xl rounded-3xl overflow-hidden'>
          <CVCard/> 
        </div>
        <div className='bg-[#e4a23faf] sm:col-span-1 col-span-1 transition ease-out hover:scale-[1.02] duration-200 delay-100 hover:shadow-xl rounded-3xl overflow-hidden'>
          <MapCard/>
        </div>
        <div className='bg-[#1b2b67af] sm:col-span-1 col-span-1 transition ease-out hover:scale-[1.02] duration-200 delay-100 hover:shadow-xl rounded-3xl overflow-hidden'>
          <span className=''/>
        </div>
        <div className='bg-[#e4a23faf] sm:col-span-1 col-span-1 transition ease-out hover:scale-[1.02] duration-200 delay-100 hover:shadow-xl rounded-3xl overflow-hidden'>
          Location
        </div>
      </div>
    </>
  )
}
