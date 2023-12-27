import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import PlayBtn from '@/components/Misc/SpotifyList/components/PlayBtn'

type ImageTrack = {
  height: number,
  url: string,
  width: number
}

type Data = {
  name: string,
  artist: string,
  href: string,
  image: ImageTrack
  preview: string
}

export default function Index() {

  const [play, setPlay] = useState<boolean>(false)
  const [data, setData] = useState<Data>({
    name: "",
    artist: "",
    href: "",
    preview: "",
    image: {
      height: 0,
      url: "",
      width: 0
    }
  })

  useEffect(()=>{

    const sourceAuth = axios.CancelToken.source();

    const spotifyRequest = async () => {

      try{

        const {data} = await axios.post('https://accounts.spotify.com/api/token', {
            grant_type: "client_credentials",
            client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
          },{
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            cancelToken: sourceAuth.token
          })

        const {data: track} = await axios.get('https://api.spotify.com/v1/tracks/0lBOxYabLsCS8Hg5ZRaz7p',{
            headers:{ "Authorization": `Bearer ${data.access_token}`}
          })

        setData({
          name: track.name,
          artist: track.artists[0].name,
          href: track.external_urls.spotify,
          image: track.album.images[1],
          preview: track.preview_url
        })

      }catch(e){
        console.log(e)
      }

    }

    spotifyRequest()

    return () => {
      sourceAuth.cancel();
    };

  },[])

  if(data?.name !== ""){

    const song = document.getElementById("songPreview") as HTMLAudioElement | null

    song?.addEventListener('ended',()=>{
      setPlay(false)
    }, false)

    return (
      <div className='relative m-8 w-full flex flex-col gap-8 group'>
        <div className='flex flex-col gap-2'>
            <span className='icon-spotify text-4xl text-[#1db954]'/>
            <div className='w-fit'>
              <Link href={data.href} target='_blank'>
                <h1 className='text-3xl font-bold hover:text-gray-600 w-fit'>{`"${data.name}"`}</h1>
              </Link>
              <h2 className='text-lg'>{`${data.artist}`}</h2>
            </div>
        </div>
        <div className='bg-black hover:bg-gray-800 rounded-full flex justify-center items-center w-8 h-8'>
          <PlayBtn play={play} song={song} setPlay={setPlay}/>
        </div>
        <audio src={data.preview} id='songPreview'></audio>
        <div className='absolute bottom-0 right-0'>
          <Image src={data.image.url} alt={data.name} width={130} height={130}/>
        </div>
      </div>
    )
  }

  return (
    <></>
  )
}
