//   import {  signInWithEmailAndPassword } from "firebase/auth";
//   import { auth } from "./firebase";
// const ValidateUser= ( email ,password)=>{

//     // // check if the user exist in the data 

//     // const response= users.find((user)=>{
//     //     return  email === user.email && password === user.password
//     // });
//     // // console.log(response);

//     // if(response) return true; else return ;
//     // //  window.alert("UserId/Password incoorect");

    

//     // const auth = getAuth();
//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         console.log(user);
//         return user;
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//          console.log(errorCode+ "-"+errorMessage);
//         return errorCode+ "-"+errorMessage;
//     });
   

// }
// export default ValidateUser;

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const ValidateUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("valide user" +user);
    return null; // null = success (as per your code logic)
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + "-" + errorMessage);
    return errorCode + " - " + errorMessage;
  }
};

export default ValidateUser;
