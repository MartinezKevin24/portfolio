import React, { useEffect } from 'react'
import axios from 'axios'

export default function Index() {

  useEffect(()=>{
    const spotifyRequest = async () => {

      const response = await axios.post('https://accounts.spotify.com/api/token', {
        grant_type: "client_credentials",
        client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
      },{
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })

      const { access_token } = response.data

      console.log(access_token)

      const topSongs = await axios.get('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50&offset=0',{
        headers:{
          "Authorization": `Bearer ${access_token}`
        }
      })

      console.log(topSongs)
    }

    spotifyRequest()
  },[])

  return (
    <div>
      Spotify Kevin
    </div>
  )
}
