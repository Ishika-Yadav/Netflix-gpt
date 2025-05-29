// Note always remember to name the comp 1st letter capital so that Babel can identify it 
import { useState,useRef } from "react";

import LoginPageHeader from "./LoginPageHeader";
import netflixbackground from '../images/login_page_background.jpg';
import ValidateUser from "../utils/Validate";
import CreateUser from "../utils/CreateUser";
import { useNavigate } from "react-router-dom";

const Login = () => {

    // usestate for toggle feature of form sign in /sign up 
    const [isSignInForm, setIsSignInForm]=useState(true);
    
    // useRef for getting inputbox value ->  in input box write this to access the value ref={emailValue}
    const emailFormValue = useRef("");
    const passwordFormValue = useRef("");
    const nameFormValue= useRef("");

    const[ErrorMsg,setErroMsg]=useState("");

    // const navigate= useNavigate(); // for navigation from 1 route to another 


    const toggleToSignUp = ()=>{
        // maintainting the state of singin and sign up 
        setIsSignInForm(!isSignInForm);
    }

   
    
  const checkUserValidation = async () => {

    // we will be using useRef to get email and password over here or else use useSate 
    const email = emailFormValue?.current?.value;
    const password = passwordFormValue?.current?.value;
    const name = nameFormValue?.current?.value;

    const response = isSignInForm ? await ValidateUser(email, password) : await CreateUser(email, password, name);

    // console.log("Response:", response);

    // response===null?navigate("/browse"):setErroMsg("hey please try again,Email/password incorrect");

//   if (response === null) {
//     navigate("/browse");
//   } else {
//     if (isSignInForm) {
//       setErroMsg(response); // error in login
//     } else {
//       window.alert(`${name}, your ID is created. Please login.`);
//       setIsSignInForm(true); // move to login screen after signup
//     }
//   }
}



    
    return(

        <div className="relative" >
            <LoginPageHeader/>
            <div   >
                <img 
                 src={netflixbackground} alt="background">
                 </img>
            </div>
            <div className="h-auto w-4/12  bg-neutral-950/85  absolute bottom-4/12 left-4/12     flex items-center justify-center">
         
                <form className=" text-white cursor-pointer "  onSubmit={(e)=> e.preventDefault()}>

                    <h1 className=" text-4xl font-bold  m-2 pb-2">{isSignInForm?"Sign In":"Sign Up"}</h1>

                    {
                        ErrorMsg &&<div className="bg-amber-400 p-2 m-3">
                            <p>{ErrorMsg}</p>
                        </div>
                    }

                    {
                      !isSignInForm && <input className=" bg-gray-800 block border-2 my-4 p-4  w-full rounded-l" 
                       ref={nameFormValue}
                         type="type" 
                         placeholder="Full Name"
                      />
                    }

                    <input className=" bg-gray-800 block border-2 my-4 p-4  w-full rounded-l" 
                    ref={emailFormValue}
                    type="email" 
                    placeholder="abc@gmail.com"
                    />

                    <input className=" bg-gray-800 block border-2 p-4 my-1 w-full rounded-l" 
                    ref={passwordFormValue}
                    type="password" 
                    placeholder="xxxxxxxxxxxxxxx"
                    />

                    <button className="bg-red-900 rounded-lg p-4 my-4 w-full rounded-l  hover:bg-amber-950"  onClick={checkUserValidation}>

                        {isSignInForm?"Sign In":"Sign Up"}
                    </button>
                    <p className="py-4  text-l hover:underline hover:text-blue-400 " onClick={toggleToSignUp} >
                         {isSignInForm?"New to Netflix?Sign up now.":"Already Registered? Sign in"}  
                    </p>
                </form>
            </div>
        </div>
    
    );

}

export default Login;