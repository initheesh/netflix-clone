import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/Constants'

function Banner() {
  const rand = Math.floor(Math.random()*19)
    useEffect(() => {
      axios.get(`/trending/movie/day?api_key=${API_KEY}`).then((response)=>{
        setMovie(response.data.results[rand])
      })
    }, [])

    const [movie, setMovie] = useState()
    
  return (
    <div className='banner' style={
      {
        backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`
      }
    }
    >
      <div className="content">
        <h1 className="title">{movie?movie.title:""}</h1>
        <div className="banner-btns">
            <button className="btn">Play</button>
            <button className="btn">My LIst</button>
        </div>
        <div className="description">{movie?movie.overview:""}</div>
      </div>
      <div className="fade-banner"></div>
    </div>
  )
}

export default Banner
