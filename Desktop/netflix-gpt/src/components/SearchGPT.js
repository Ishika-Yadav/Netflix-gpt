import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
 import netflixbackground from '../images/login_page_background.jpg';


const SearchGPT = () => {
  return (
    <div>
        <div className='absolute -z-10'>
          <img 
            src={netflixbackground} alt="background">
            </img>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>

    
  )
}

export default SearchGPT;