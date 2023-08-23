import React, { useEffect, useState } from 'react'
import './RowPoster.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Constants/Constants'
import YouTube from 'react-youtube'


function RowPoster(props) {
  const [movie, setMovie] = useState([])
  const [urlMovie, setUrlMovie] = useState('')
  const opts = {
      height: '390',
      width: '100%',
      
    }
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results)
    })
  }, [])

  const handleMovieTrailer = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(resp=>{
      if(resp.data.results.length!==0){
        setUrlMovie(resp.data.results[0])
      }
      else{
        alert("No trialer available")
        return
      }
        
      
    })
  }

  
  return (
    <div className='row'>
        <h2 className="title">{props.title}</h2>
      <div className="posters">
      {movie.map((obj)=>{
        
        return <img src={`${imageUrl+obj.backdrop_path}`} alt="movie poster" className='poster' onClick={()=>handleMovieTrailer(obj.id)}/>
      })}
        

      </div>
      {urlMovie &&  <YouTube videoId={urlMovie.key} opts={opts}  />}
    </div>
    
  )
}

export default RowPoster
