import React, {useState} from 'react'
import {logos} from '@/constants/Carousel/techCarousel'
import classNames from 'classnames'

export default function Index() {

  const [pause, setPause] = useState(false)

  const pauseCarousel = () : void => {
    setPause(!pause)
  }

  return (
    <div className='overflow-hidden relative h-32 group/pause'>
      <div 
        className={classNames([
          'bg-black rounded-full right-2 flex justify-center items-center hover:cursor-pointer hover:bg-gray-800 h-8 w-8 absolute z-10',
          {'transition-opacity group-hover/pause:opacity-100 opacity-0 duration-200 ease-out delay-100' : !pause}
        ])}
        onClick={pauseCarousel}>
        <span className={classNames([
          'text-white text-sm p-2',
          {'icon-play3' : pause},
          {'icon-pause2' : !pause}
        ])}/>
      </div>
      <div className={classNames([
        'flex flex-row h-full overflow-hidden gap-5 absolute animate-slideLeft hover:animate-pause py-2',
        {'animate-pause': pause}
      ])}>
        {
          [logos, logos].flat().map((tech, i)=>
            <div key={i} className='h-full group w-60 bg-[#245757] flex justify-center items-center rounded-2xl hover:scale-[1.08] duration-200 delay-100 cursor-default'>
              <div className='transition-opacity group-hover:opacity-0 opacity-100 duration-300 ease-out delay-75'>
                <span className={`${tech.image} text-5xl text-white`}/>
              </div>
              <h1 className='text-white text-3xl font-bold absolute transition-opacity group-hover:opacity-100 opacity-0 duration-500 ease-out delay-100'>
                {tech.name}
              </h1>
            </div>
          ) 
        }
      </div>
    </div>
  )
}
