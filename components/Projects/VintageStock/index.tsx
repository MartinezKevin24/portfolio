import React from 'react'
import Image from 'next/image'
import phoneVintage from '@/assets/vintage_mobile.png'
import desktopVintage from '@/assets/vintage_desktop.png'
import Link from 'next/link'

export default function VintageStock() {
  return (
    <div className='relative group flex items-center'>
      <Link href={'https://vintagestock.com/'} target='_blank'>
        <div className='p-3 hover:cursor-pointer right-6 top-6 hover:border-8 transition-all duration-200 ease-out bg-white rounded-full flex absolute justify-center items-center'>
          <span className='icon-arrow-up-right2'/>
        </div>
      </Link>
      <div className='p-8 sm:p-6 grid grid-cols-1 sm:grid-cols-3 w-full gap-3'>
        <div className='relative col-span-1 order-2 top-2 sm:top-0 sm:left-5 sm:order-1 flex items-center sm:col-span-1'>
          <div className='relative sm:absolute sm:-left-24 shadow-xl'>
            <Image src={desktopVintage} height={300} alt={"Phone screen Cameya"} quality={100}/>
          </div>
          <div className='absolute z-10 -bottom-28 right-3 sm:-bottom-32 shadow-xl group-hover:-translate-y-6 transition-transform duration-500'>
            <Image src={phoneVintage} height={300} alt={"Phone service screen Cameya"} quality={100}/>
          </div>
        </div> 
        <div className='col-span-1 order-1 sm:order-2 sm:col-span-2 sm:ml-11 flex flex-col justify-center gap-4'>
          <h1 className='font-bold text-3xl sm:text-2xl'>VintageStock</h1>
          <p className='md:max-w-[550px] text-base sm:text-sm'>Currently, I'm working on restructuring the vintageStock website, which is a collectibles and entertainment store based in Missouri, United States.</p>
          <div className='flex gap-3 items-start flex-col '>
            <h2 className='font-bold'>Technologies used:</h2>
            <div className='flex gap-3'>
              <span className='icon-html-five text-2xl sm:text-xl'/>
              <span className='icon-css3 text-2xl sm:text-xl'/>
              <span className='icon-next-dot-js text-2xl sm:text-xl'/>
              <span className='icon-javascript text-2xl sm:text-xl'/>
              <span className='icon-react text-2xl sm:text-xl'/>
              <span className='icon-typescript text-2xl sm:text-xl'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
