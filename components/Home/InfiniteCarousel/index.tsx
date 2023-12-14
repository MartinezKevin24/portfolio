import React from 'react'
import nextjs from '@/public/icons/nextjs.svg'
import css from '@/public/icons/css.svg'
import js from '@/public/icons/js.svg'
import html5 from '@/public/icons/html5.svg'
import react from '@/public/icons/react.svg'
import git from '@/public/icons/git.svg'
import express from '@/public/icons/express.svg'
import mongodb from '@/public/icons/mongodb.svg'
import tailwind from '@/public/icons/tailwind.svg'
import redux from '@/public/icons/redux.svg'
import typescript from '@/public/icons/typescript.svg'
import sql from '@/public/icons/sql.svg'
import wordpress from '@/public/icons/wordpress.svg'
import Image from 'next/image'

export default function Index() {

  const logos = [
    {
      name: 'Next Js',
      image: nextjs
    },
    {
      name: 'CSS 3',
      image: css
    },
    {
      name: 'Javascript',
      image: js
    },
    {
      name: 'Html 5',
      image: html5
    },
    {
      name: 'React Js',
      image: react
    },
    {
      name: 'Git',
      image: git
    },
    {
      name: 'Express',
      image: express
    },
    {
      name: 'MongoDB',
      image: mongodb
    },
    {
      name: 'Tailwind CSS',
      image: tailwind
    },
    {
      name: 'Redux',
      image: redux
    },
    {
      name: 'Typescript',
      image: typescript
    },
    {
      name: 'SQL',
      image: sql
    },
    {
      name: 'WordPress',
      image: wordpress
    }
  ]

  return (
    <div className='flex flex-row h-full overflow-hidden absolute'>
      {
        logos.map((tech, i)=>
          <div className='h-full w-60 bg-gray-800 border-white border-2 flex justify-center items-center'>
            <Image src={tech.image} alt={tech.name} width={80} height={80}/>
          </div>
        ) 
      }
    </div>
  )
}