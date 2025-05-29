import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer =(movieId) =>{

     // Fetch trailer video using api and passing d updating the store with trailer video and then fetching the data from store movie
         const dispatch= useDispatch();
    
     
        const getTrailerVideo = async ()=>{
         
            // console.log(movieId);
        //    issue
            const response = await fetch("https://api.themoviedb.org/3/movie/"+ 552524+"/videos?language=en-US", API_OPTION);
            const videosJson = await response.json();
            // note : this trailerVideo variable contains a lot of vidoe but we only need tailer video 
              console.log(videosJson);
            const filterTrailer= videosJson?.results.filter((video)=>{
                return video.type === 'Trailer'
            });
            // so if no trailer take the first video
            const trailer =filterTrailer.length ? filterTrailer[0]:videosJson.results[0];
            // console.log(trailer);
            dispatch(addTrailerVideo(trailer));
            // now we have got the trailer yet the video is available on youtube so with key availabe we will get the video
        //    console.log(trailer);
    
        }
    
        useEffect(()=>{
             
            
            getTrailerVideo();
             // IF YOU MISS THE [] IT WILL GO IN INFINITY LOOP
        },[]);
       
    
    

}
export default useMovieTrailer;