'use client'
import React from 'react'
import InfiniteCarousel from '@/components/Home/InfiniteCarousel'
import PersonalInformation from '@/components/Home/PersonalInformation'
import Projects from '@/components/Home/Projects'

export default function index() {
  return (
    <>
      <div className='flex flex-col gap-3'>
        <PersonalInformation/>
        <InfiniteCarousel/>
        <Projects/>
      </div>
    </>
  )
}
