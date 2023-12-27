import React from 'react'
import SpotifyList from '@/components/Misc/SpotifyList'
import Cameya from '@/components/Projects/Cameya'
import VintageStock from '@/components/Projects/VintageStock'

export default function Projects() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-5 sm:h-[600px]'>
      <div className='bg-[#b3eec8] flex col-span-1 hover:shadow-2xl rounded-3xl  transition ease-out'>
        <SpotifyList/>
      </div>
      <div className='bg-[#f8f3b2] overflow-hidden flex col-span-1 sm:col-span-2 hover:shadow-2xl rounded-3xl  transition ease-out'>
        <VintageStock/>
      </div>
      <div className='bg-[#BCCEFB] col-span-1 sm:col-span-3 hover:shadow-2xl rounded-3xl overflow-hidden transition ease-out'>
        <Cameya/>
      </div>
    </div>
  )
}
