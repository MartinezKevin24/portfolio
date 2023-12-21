import React from 'react'
import Image from 'next/image'
import phoneCameya from '@/assets/first_screen_cameya.png'
import myServicesScreen from '@/assets/my_services_cameya.png'

export default function Cameya() {
  return (
    <div>
      <span className='icon-'/>
      <div className=' p-8 md:px-16 group grid grid-cols-1 sm:grid-cols-3 w-full'>
        <div className='relative col-span-1 order-2 sm:order-1 h-60 flex sm:col-span-1'>
          <div className='relative w-full flex justify-center'>
            <div className='relative left-5 z-10 top-[50px] sm:top-[30px] group-hover:-rotate-12 transition-transform duration-500'>
              <Image src={phoneCameya} height={360} alt={"Phone screen Cameya"} quality={100}/>
            </div>
            <div className='relative right-5 top-10 sm:top-0 group-hover:-translate-y-4 group-hover:rotate-12 transition-transform duration-500'>
              <Image src={myServicesScreen} height={360} alt={"Phone service screen Cameya"} quality={100}/>
            </div>
          </div>
        </div> 
        <div className='col-span-1 order-1 sm:order-2 sm:col-span-2 sm:ml-11 flex flex-col justify-center gap-4'>
          <h1 className='font-bold text-4xl'>CameYa!</h1>
          <p className='md:max-w-[550px]'>Cameya is a website helping find informal jobs in Cartagena de Indias, 
            Colombia, a city with a high demand for this kind of work</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
