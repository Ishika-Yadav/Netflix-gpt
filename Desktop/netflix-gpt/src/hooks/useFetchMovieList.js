
import {API_OPTION} from '../utils/constant.js'
import { useEffect } from "react";
// import { addNowPlayingMovie , addPopularMovie} from "../utils/movieSlice.js";
import { useDispatch } from "react-redux";

// hook are just normal function 
const useFetchMovieList= (reducerFunction,movieType)=>{
     //  dispatch action to add movie to movie slice
      const dispatch = useDispatch();
      console.log(movieType);
  
      // API CALL TO FETCH CURRENT PLAYING MOVIE
      const getNOwPlayingMovie =async()=>{
        try{
        const response = await fetch("https://api.themoviedb.org/3/movie/"+movieType+"?language=en-US&page=1", API_OPTION);

        const data = await response.json();
        console.log("hey its popular movie");
        console.log(data?.results);
        
        dispatch(reducerFunction(data?.results))

         }
         catch{
          // console.log('error')
         }
      }
        // useeefect to make API CALL
      useEffect(()=>{
        //  console.log("Fetching now playing movies...");
        getNOwPlayingMovie();
  
      },[]);


}
 export default useFetchMovieList;