import React from 'react'
import language from '../utils/languageConstants'
import { useSelector } from 'react-redux'
const GptSearchBar = () => {

   const chossenLangKey=useSelector(store=>store.config?.lang);

  return (
   
    <div className='pt-[10%] flex justify-center  flex-col items-center  '>
      <h1 className='text-white flex text-5xl font-bold mb-10 mr-36'>{language[chossenLangKey].heading}</h1>
        <form className='w-1/2 grid  grid-cols-12'  >
       
            <input type='text' placeholder={language[chossenLangKey].searchPlaceholder} className=' col-span-9  p-6 m-6 bg-white rounded-2xl '></input>
            <button type='submit' className='p-4 col-span-3 bg-purple-900  m-6 rounded-lg text-lg text-white'>{language[chossenLangKey].search}</button>

        </form>
    </div>
  
  )
}

export default GptSearchBar ;