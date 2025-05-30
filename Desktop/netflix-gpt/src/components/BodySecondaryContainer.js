import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const BodySecondaryContainer = () => {
  const movies=useSelector((store)=>store?.movies);
  if(!movies)return null;
  return (
    <div className='  bg-black'> 
      <div className='pl-10 -mt-30 relative z-20'>
        
          <MovieList title={"Now PLaying"} movies={movies.nowPlayingMovie}/>
          <MovieList title={"Top Rated"} movies={movies.topRatedMovie}/>
          <MovieList title={"Popular"} movies={movies.popularMovie}/>    
          <MovieList title={"Up Coming Movie"} movies={movies.upcomingMovie}/>

      </div>

    </div>
  )
}

export default BodySecondaryContainer