// Note always remember to name the comp 1st letter capital so that Babel can identify it 
import { useState,useRef } from "react";

import LoginPageHeader from "./LoginPageHeader";
import netflixbackground from '../images/login_page_background.jpg';
import ValidateUser from "../utils/Validate";
import CreateUser from "../utils/CreateUser";

const Login = () => {

    // usestate for toggle feature of form sign in /sign up 
    const [isSignInForm, setIsSignInForm]=useState(true);
    
    // useRef for getting inputbox value ->  in input box write this to access the value ref={emailValue}
    const emailFormValue = useRef("");
    const passwordFormValue = useRef("");
    const nameFormValue= useRef("");

    


    const toggleToSignUp = ()=>{

        setIsSignInForm(!isSignInForm);

    }

    const checkUserValidation =() =>{
        // we will be using useRef to get emial and password over here or else use useSate 

        

        // console.log( emailValue);
        const email= emailFormValue?.current?.value;
        const password= passwordFormValue?.current?.value;
        const name=nameFormValue?.current?.value;
        isSignInForm?ValidateUser(email,password):CreateUser(email,password,name);

        // const message =ValidateUser(email,password);
        // console.log(message);

    
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
                      !isSignInForm && <input class=" bg-gray-800 block border-2 my-4 p-4  w-full rounded-l" 
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

                    <input className=" bg-gray-800 block border-2 p-4 my-4 w-full rounded-l" 
                    ref={passwordFormValue}
                    type="password" 
                    placeholder="xxxxxxxxxxxxxxx"
                    />

                    <button className="bg-red-900 rounded-lg p-4 my-4 w-full rounded-l  hover:bg-amber-950"  onClick={checkUserValidation}>

                        {isSignInForm?"Sign In":"Sign Up"}
                    </button>
                    <p className="py-4  text-l hover:underline hover:text-blue-400 " onClick={toggleToSignUp} >
                         {isSignInForm?"New to Netflix?Sign up now.":"Already Registered? Sign Up"}  
                    </p>
                </form>
            </div>
        </div>
    
    );

}

export default Login;