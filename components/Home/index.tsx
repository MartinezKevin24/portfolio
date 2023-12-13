'use client'
import React from 'react'
import PresentationCard from '@/components/Home/PresentationCard'

export default function index() {
  return (
    <>
      <div className='grid sm:grid-cols-8 gap-5 auto-rows-[250px]'>
        <div className='bg-[#f18053d2] col-span-8 sm:col-span-5 rounded-3xl overflow-hidden hover:shadow-2xl'>
          <PresentationCard/>
        </div>
        <div className='bg-[#BCCEFB] col-span-8 sm:col-span-3 rounded-3xl overflow-hidden'>
          CV
        </div>
        <div className='bg-[#e4a23faf] sm:col-span-full col-span-8 rounded-3xl overflow-hidden'>
          Location
        </div>
      </div>
    </>
  )
}
