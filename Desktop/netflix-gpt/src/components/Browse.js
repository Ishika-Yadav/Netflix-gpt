import Header from "./Header";
 import useFetchNowPLayingMovie from '../hooks/useFetchNowplayingMovie'
import BodyMainContainer from "./BodyMainContainer";
import BodySecondaryContainer from "./BodySecondaryContainer";
import {  addPopularMovie, addTopRatedMovie, addUpcomingMovie} from "../utils/movieSlice.js";
import useFetchMovieList from "../hooks/useFetchMovieList.js";
const Browse = () => {
    useFetchNowPLayingMovie();
    console.log("inside browese");
    useFetchMovieList(addPopularMovie,"popular");
    useFetchMovieList(addTopRatedMovie,"top_rated");
     useFetchMovieList(addUpcomingMovie,"upcoming");
      // useFetchMovieList(addTopRatedMovie,"popular")

    
    
  return (
    <div className="caret-amber-500">
      <Header/>
      <BodyMainContainer/>
      <BodySecondaryContainer/>
      
      </div>
  )
}

export default Browse;