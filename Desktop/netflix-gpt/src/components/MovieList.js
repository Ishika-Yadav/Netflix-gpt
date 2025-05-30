import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    // for horizontal movie scrool
    // console.log(movies);

    if(!movies)return null;
        
  return (
    <div className='px-2 text-white'>
        <h1 className='text-3xl font-bold py-6 mt-2 ml-4' >{title}</h1>
        <div className='flex p-4 overflow-x-scroll '>
            <div className='flex ' > 
                {Array.isArray(movies) &&  movies.map((movie)=>
                  ( <MovieCard key={movie.id} movie={movie}/>
                ))}
                <MovieCard/>
        
             </div>
        </div>
    </div>
  )
}

export default MovieList