import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'

export default function Index() {

  const [data, setData] = useState({
    name: null,
    artist: null,
    href: null,
    image: null
  })

  useEffect(()=>{

    const sourceAuth = axios.CancelToken.source();

    const spotifyRequest = async () => {

      axios.post('https://accounts.spotify.com/api/token', {
        grant_type: "client_credentials",
        client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
      },{
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        cancelToken: sourceAuth.token
      }).then((response) => {
        axios.get('https://api.spotify.com/v1/tracks/0lBOxYabLsCS8Hg5ZRaz7p',{
          headers:{
            "Authorization": `Bearer ${response.data.access_token}`
          }
        }).then(({data}) => {
          setData({
            name: data.name,
            artist: data.artists[0].name,
            href: data.href,
            image: data.album.images[2]
          })
        }).catch((err)=>{
          // console.log(err)
        })
      }).catch((err)=>{
        // console.log(err)
      })

    }

    spotifyRequest()

    return () => {
      sourceAuth.cancel();
    };

  },[])

  console.log(data)

  if(data?.name){
    return (
      <div>
        <h1>{`"${data.name}"`}</h1>
        <h2>{`${data.artist}`}</h2>
        <Image src={data.image.url} alt={data.name} width={data.image.width} height={data.image.height}/>
      </div>
    )
  }

  return (
    <></>
  )
}
