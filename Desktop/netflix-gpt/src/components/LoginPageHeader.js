import React from 'react'
 import netflixLogo from '../images/Netflix_Logo.png';
 import useMaintainUser from './useMaintainUser ';
 

const LoginPageHeader = () => {
 
  useMaintainUser();
  return (
    <div className="absolute z-10">

      <img className="w-46"  
      src={netflixLogo} alt='logo'></img>
      
    </div>
    
  
);}

export default LoginPageHeader