
import { useState } from 'react';
import netflixLogo from '../images/Netflix_Logo.png';
import userIcon from '../images/userIcon.png'
import signout from '../utils/signout.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineAssignmentInd } from "react-icons/md";
import useMaintainUser from './useMaintainUser .js';

import { FaSearch } from "react-icons/fa";
import { toggleGPTSearchView } from '../utils/searchGPTSlice.js';
import { SUPPORTED_LANGUAGES } from '../utils/constant.js';

import { changeLanguage } from '../utils/configSlice.js';
import { MdFavorite } from "react-icons/md";
import { ImProfile } from "react-icons/im";



const  Header =  () => {
    //  THE CODE INSIDE THIS IS A CODE FOR UPDATING USER SIGN IN.UP.OUT IN FIREBASE AND IN REDUX STORE
    useMaintainUser();

    const [dropDownVisible,setdropDownVisible]=useState(false);

    const userDetail=  useSelector(store=>store.user);
    // console.log("selector"+ userDetail?.displayName);

    const navigate=useNavigate();

    const dispatch= useDispatch(); // to toggle gpt search 

    const handleGPTSearchClick = ()=>{
      
      dispatch(toggleGPTSearchView());

    }




    const dropDown =()=>{
        setdropDownVisible(!dropDownVisible);
    }
    const handleSingoutButton =()=>{
        // console.log("singout button clicked");
        const response =signout();
        // console.log(response);
        response?navigate("/"):navigate("/error");
    }

    const handleLanguageSelect =(event)=>{
      // nore you can also use uearaef to get the value 
      //  console.log(event.target.value);
       dispatch(changeLanguage(event.target.value));

    }
         const showGPTSearch =useSelector((store)=>store.gpt.showGPTSearch);
  return (
    <div className="absolute  w-screen  z-10 flex justify-between">

      <img className="w-44 bg-gradient-to-b from-black"  
      src={netflixLogo} alt='logo'></img>

      <div className='flex mr-12'>
     { showGPTSearch&&  (<select className='text-white w-20'  onChange={handleLanguageSelect}>
          {/* lang data stored in Redux store */}
          {SUPPORTED_LANGUAGES.map((lang)=><option className='bg-gray-800 text-white' key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>)}

        <img className="w-20  p-4 "  
      src={userIcon} alt='logo'></img>
      <button className='p-0' onClick={dropDown}> <IoIosArrowForward size={25}  className="text-white "  /></button>
      

       {
        // when dropDownVisible state will be true then only it will be visible
         dropDownVisible && (
          <div className="absolute right-0 top-full mt-2 mr-10 bg-black border rounded shadow-md flex flex-col text-left w-45 justify-between ">
            <button className=" flex justify-between px-4 py-2 text-amber-50  hover:bg-red-700 "> <ImProfile />Profile</button>

            <button className=" flex px-4 py-2 text-amber-50  hover:bg-red-700  justify-between">
              <MdOutlineAssignmentInd size={20}  className=' inline  mr-5 ml-0'/>
              {userDetail?.displayName}
            </button>

            <button className=" flex px-4 py-2 text-amber-50  hover:bg-red-700 justify-between"  onClick={handleGPTSearchClick}>
               <FaSearch  className='ml-0 mr-9'/>
               { showGPTSearch?"Home":"GPT Search"}
            </button>

            <button className=" flex justify-between px-4 py-2 text-amber-50  hover:bg-red-700"> <MdFavorite />Favourite</button>

            {/* <img src={userDetail} alt='profilephoto'> </img> */}

            <button className="px-4 py-2 font-bold text-amber-50 hover:bg-red-700 border-spacing-0.5 border-t-2 " onClick={handleSingoutButton}> Sign Out Of Netflix</button>
          </div>

        )}
     
        
      </div>
      
    </div>
    
  
);}

export default Header;