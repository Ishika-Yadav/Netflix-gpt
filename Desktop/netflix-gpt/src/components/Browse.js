import Header from "./Header";
 import useFetchNowPLayingMovie from '../hooks/useFetchNowplayingMovie'
import BodyMainContainer from "./BodyMainContainer";
import BodySecondaryContainer from "./BodySecondaryContainer";
const Browse = () => {
    useFetchNowPLayingMovie();
    
    
  return (
    <div className="caret-amber-500">
      <Header/>
      <BodyMainContainer/>
      <BodySecondaryContainer/>
      
      </div>
  )
}

export default Browse;