
import { useState } from 'react';
import netflixLogo from '../images/Netflix_Logo.png';
import userIcon from '../images/userIcon.png'
import signout from '../utils/signout.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineAssignmentInd } from "react-icons/md";
import useMaintainUser from './useMaintainUser .js';



const  Header =  () => {
    //  THE CODE INSIDE THIS IS A CODE FOR UPDATING USER SIGN IN.UP.OUT IN FIREBASE AND IN REDUX STORE
    useMaintainUser();

    const [dropDownVisible,setdropDownVisible]=useState(false);

    const userDetail=  useSelector(store=>store.user);
    // console.log("selector"+ userDetail?.displayName);

    const navigate=useNavigate();


    const dropDown =()=>{
        setdropDownVisible(!dropDownVisible);
    }
    const handleSingoutButton =()=>{
        // console.log("singout button clicked");
        const response =signout();
        // console.log(response);
        response?navigate("/"):navigate("/error");
    }
  return (
    <div className="absolute  w-screen  border-2  z-10 flex justify-between">

      <img className="w-44 bg-gradient-to-b from-black"  
      src={netflixLogo} alt='logo'></img>

      <div className='flex'>
        <img className="w-20  p-4 "  
      src={userIcon} alt='logo'></img>
      <button className='p-0' onClick={dropDown}> <IoIosArrowForward size={25}  className="text-white "  /></button>
      

       {
        // when dropDownVisible state will be true then only it will be visible
         dropDownVisible && (
          <div className="absolute right-0 top-full mt-2 bg-black border rounded shadow-md flex flex-col text-left w-45">
            <button className="px-4 py-2 text-amber-50  hover:bg-red-700 ">Favourte</button>
            <button className="px-4 py-2 text-amber-50  hover:bg-red-700">
              <MdOutlineAssignmentInd size={32}  className=' inline ms-2'/>
              {userDetail?.displayName}
            </button>
            <button className="px-4 py-2 text-amber-50  hover:bg-red-700" >Search</button>
            <button className="px-4 py-2 text-amber-50  hover:bg-red-700">Profile</button>
            {/* <img src={userDetail} alt='profilephoto'> </img> */}
            <button className="px-4 py-2 font-bold text-amber-50 hover:bg-red-700 border-spacing-0.5 border-t-2 " onClick={handleSingoutButton}> Sign Out Of Netflix</button>
          </div>

        )}
     
        
      </div>
      
    </div>
    
  
);}

export default Header;