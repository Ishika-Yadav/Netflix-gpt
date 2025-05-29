//  this is the body of the App.js
// body is the only comp rendered in app.js and other comp will be render here

import appRoutes from './appRoutes';
import { RouterProvider } from 'react-router-dom';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addUser,removeUser} from '../utils/userSlice'


const Body = () => {
  // const dispatch= useDispatch();

     
  //    useEffect(() =>{
  //       console.log("inside effect");
      
  //         const unsubscribe =onAuthStateChanged(auth, (user) => {
  //         if (user) {
  //             // User is signed in, 
  //             const {uid,email,displayName,photo} = user; //extracting user data 
  //             console.log("insdie on auth change");
  //             // dispatching action to store
  //             dispatch(addUser({uid:uid,email:email,displayName:displayName,photo:photo}));
  //             //  navigate("/browse"); // note wirte path
      
  //         } else {
  //             // User is signed out -> dispatching action to store
  //             dispatch(removeUser());
  //             console.log("hi");
  //             //  navigate("/");
  //         }
  //         });
  //       // unsubscribe when comp unmount 
  //       return ()=>unsubscribe();
  
  //    },[]);


  return (
    <div> 
      {/* instead of explicitly calling comp let the routes decide and call it  */}
        <RouterProvider router={appRoutes }/>
    </div>
        
  );

}

export default Body;