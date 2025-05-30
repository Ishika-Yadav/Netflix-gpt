import React from 'react'
import { useSelector } from 'react-redux'
import MovieTrailer from './MovieTrailer';
import TrailerDetail from './TrailerDetail';

const BodyMainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovie);
//     how it this wroking
    if (!movies || movies.length === 0) return <div>Loading...</div>;// early return
    // console.log(movies[0]);
    const trailerMovie=movies[0];
    
    const original_title = trailerMovie?.original_title;
    const overview = trailerMovie?.overview;
    const movie_id =trailerMovie?.id;
    // console.log(movie_id);
    

    //  const {original_title,overview} = trailerMovie;

    //  console.log( original_title);
    //  if(!movie_id) return null;
  return (
    <div className='w-screen'>
        {/* movie trailer  from Redux store*/}
        {/* how it this working */}
        <TrailerDetail title={original_title} discription={overview}/>
        <MovieTrailer movieId={movie_id} />
    </div>
  )
}

export default BodyMainContainer