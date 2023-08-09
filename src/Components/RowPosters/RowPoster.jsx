import React, { useEffect, useState } from 'react'
import './RowPoster.css'
import axios from '../../axios'
import {imageUrl} from '../../Constants/Constants'


function RowPoster(props) {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results)
    })
  }, [])

  
  return (
    <div className='row'>
        <h2 className="title">{props.title}</h2>
      <div className="posters">
      {movie.map((obj)=>{
        return <img src={`${imageUrl+obj.backdrop_path}`} alt="movie poster" className='poster' />
      })}
        

      </div>
    </div>
  )
}

export default RowPoster
