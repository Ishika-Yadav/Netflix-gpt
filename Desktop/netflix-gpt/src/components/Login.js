// Note always remember to name the comp 1st letter capital so that Babel can identify it 

import LoginPageHeader from "./LoginPageHeader";
import netflixbackground from '../images/login_page_background.jpg';
import { useState } from "react";

const Login = () => {

     const [isSignInForm, setIsSignInForm]=useState(true);

    const toggleToSignUp = ()=>{

        setIsSignInForm(!isSignInForm);

    }
    
    return(

        <div class="relative" >
            <LoginPageHeader/>
            <div class=" z-0"  >
                <img 
                 src={netflixbackground} alt="background">
                 </img>
            </div>
            <div class="h-auto w-4/12  bg-neutral-950/85  absolute bottom-4/12 left-4/12     flex items-center justify-center">
         
                <form class=" text-white cursor-pointer " >

                    <h1 class=" text-4xl font-bold  m-2">{isSignInForm?"Sign In":"Sign Up"}</h1>

                    {
                      !isSignInForm && <input class=" bg-gray-800 block border-2 my-4 p-4  w-full rounded-l" 
                         type="type" 
                         placeholder="Full Name"
                      />
                    }

                    <input class=" bg-gray-800 block border-2 my-4 p-4  w-full rounded-l" 
                    type="email" 
                    placeholder="abc@gmail.com"
                    />

                    <input class=" bg-gray-800 block border-2 p-4 my-4 w-full rounded-l" 
                    type="password" 
                    placeholder="xxxxxxxxxxxxxxx"
                    />

                    <button class="bg-red-900 rounded-lg p-4 my-4 w-full rounded-l">
                        {isSignInForm?"Sign In":"Sign Up"}
                    </button>
                    <p class="py-4  text-l" onClick={toggleToSignUp}>
                         {isSignInForm?"New to Netflix?Sign up now.":"Already Registered? Sign Up"}  
                    </p>
                </form>
            </div>
        </div>
    
    );

}

export default Login;