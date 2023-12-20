import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Index() {

  const [data, setData] = useState({})

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
        axios.get('https://api.spotify.com/v1/playlists/0LI2nbrKuONyG9eoPrPyKo',{
          headers:{
            "Authorization": `Bearer ${response.data.access_token}`
          }
        }).then((res) => {
          setData(res.data)
        }).catch((err)=>{
          console.log(err)
        })
      }).catch((err)=>{
        console.log(err)
      })

    }

    spotifyRequest()

    return () => {
      sourceAuth.cancel();
    };

  },[])

  console.log(data)

  return (
    <div>
      Spotify Kevin
    </div>
  )
}
