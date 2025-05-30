import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const MovieTrailer = ({movieId}) => {
     const trailerClip = useSelector((store) => store?.movies?.trailerVideo);
    //  calling custumhooks
    // console.log(movieId);
     useMovieTrailer(movieId);
   



  return (
    <div className="w-screen">
       {/* {trailerClip?.key} */}
       {/* ?&autoplay=1&mute=1 to make video auto play add this  */}
        <iframe
        className="w-screen aspect-video"
         src={"https://www.youtube.com/embed/"+trailerClip?.key + "?&autoplay=1&mute=1"}
         title="YouTube video player"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

        </iframe>
  
        {/* <iframe
  className="w-screen aspect-video"
  src={`https://www.youtube.com/embed/${trailerClip?.key}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=${trailerClip?.key}`}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
/> */}

    </div>
  )
}

export default MovieTrailer