import React from 'react'
import Image from 'next/image'
import phoneSlafes from '@/assets/slafesxxv_mobile.png'
import desktopSlafes from '@/assets/slafesxxv_desktop.png'
import Link from 'next/link'

export default function Cameya() {
  return (
    <div className='relative group'>
      <Link href={'https://slafesxxv.sue-caribe.org/venue'} target='_blank'>
        <div className='p-3 hover:cursor-pointer right-6 z-10 top-6 hover:border-8 transition-all duration-200 ease-out bg-white rounded-full flex absolute justify-center items-center'>
          <span className='icon-arrow-up-right2'/>
        </div>
      </Link>
      <div className='p-8 md:px-16 grid grid-cols-1 sm:grid-cols-3 w-full'>
        <div className='col-span-1 order-2 sm:order-1 sm:col-span-2 sm:ml-11 flex flex-col justify-center gap-4'>
          <h1 className='font-bold text-4xl'>Slafes XXV</h1>
          <p className='md:max-w-[550px]'>This is a website in development that will be used for a scientific event focused on applied physics at the University of the Atlantic, 
            featuring international guests.</p>
          <div className='flex gap-3 items-start flex-col '>
            <h2 className='font-bold'>Technologies used:</h2>
            <div className='flex gap-3'>
              <span className='icon-html-five text-2xl'/>
              <span className='icon-css3 text-2xl'/>
              <span className='icon-database text-2xl'/>
              <span className='icon-next-dot-js text-2xl'/>
              <span className='icon-javascript text-2xl'/>
              <span className='icon-react text-2xl'/>
              <span className='icon-express text-2xl'/>
              <span className='icon-tailwindcss text-2xl'/>
            </div>
          </div>
        </div>
        <div className='relative col-span-1 order-2 sm:order-2 h-60 flex sm:col-span-1'>
          <div className='relative w-full flex justify-center h-[400px]'>
            <div className='relative left-5 z-10 shadow-xl top-[50px] rounded-lg overflow-hidden sm:top-[30px] group-hover:-rotate-12 transition-transform duration-500'>
              <Image src={phoneSlafes} height={600} alt={"Phone screen Slafes"} quality={100}/>
            </div>
            <div className='relative right-5 shadow-xl top-10 sm:top-0 rounded-lg overflow-hidden group-hover:-translate-y-4 group-hover:rotate-12 transition-transform duration-500'>
              <Image src={desktopSlafes} height={600} alt={"Phone venue screen Slafes"} quality={100}/>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}
