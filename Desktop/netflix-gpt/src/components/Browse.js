import Header from "./Header";
 import useFetchNowPLayingMovie from '../hooks/useFetchNowplayingMovie'
import BodyMainContainer from "./BodyMainContainer";
import BodySecondaryContainer from "./BodySecondaryContainer";
import {  addPopularMovie, addTopRatedMovie, addUpcomingMovie} from "../utils/movieSlice.js";
import useFetchMovieList from "../hooks/useFetchMovieList.js";
import { useSelector } from "react-redux";
import SearchGPT from "./SearchGPT.js";
const Browse = () => {
    useFetchNowPLayingMovie();
    useFetchMovieList(addPopularMovie,"popular");
    useFetchMovieList(addTopRatedMovie,"top_rated");
    useFetchMovieList(addUpcomingMovie,"upcoming");
     const showGPTSearch =useSelector((store)=>store.gpt.showGPTSearch);


    
    
  return (
    <div className="caret-amber-500">

      <Header/>
      { showGPTSearch? <SearchGPT/> : <>  <BodyMainContainer/>
           <BodySecondaryContainer/>
         </> 
      }

      </div>
  )
}

export default Browse;