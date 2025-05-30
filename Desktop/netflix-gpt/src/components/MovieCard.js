import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'
const MovieCard = ({movie}) => {
    // every movie list will have multiple cards
    // for movie img path -> tmdb doc-> guides-> basics-> images then cdn link

  return (
    <div className=' w-56'>
        <img className=' pr-6'
            alt="movieImg"
            src={IMG_CDN_URL+movie?.poster_path}>     
        </img>
    </div>
  )
}

export default MovieCard