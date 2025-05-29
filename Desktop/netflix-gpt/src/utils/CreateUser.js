
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";

import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './userSlice';


const CreateUser = async (email, password, name) => {

  //  const dispatch = useDispatch();
  // console.log(email, password);

  // Email & password syntax validation
  const isEmailSyntaxValid = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  const isPasswordSyntaxValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gim;

  if (!isEmailSyntaxValid.test(email) || !isPasswordSyntaxValid.test(password)) {
    return "Follow ProperSyntax";
  }

  try {
    // Create user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update user profile
    await updateProfile(user, {
      displayName: name,
      photoURL: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png",
       
    });
    
    // disptach action here later as user is created but updateing displayname tsking time  esi lea user ka nam nahi dikh rsha
    //   dispatch(addUser({
    //   uid: user.uid,
    //   email: user.email,
    //   displayName: name,
    //   photo: user.photoURL,
    // }));


    // console.log("User Created & Profile Updated:", user.displayName);
    return null; // Success
  } catch (error) {
    // console.log("Error Creating User:", error.message);
    return `${error.code} - ${error.message}`; // Error message
  }
};

export default CreateUser;





// import {createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebase";
// import { useNavigate } from "react-router-dom";
// // import { getAuth } from "firebase/auth";

// const CreateUser = ( email, password ,name) => {
//     const navigate=useNavigate();
//     console.log(email,password);
   
//     //  using Reges to check if the syntax or rule are been followed email and password
//     const isEmailSytaxValid =/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;;
//     const mailSyntaxCheck=isEmailSytaxValid.test(email);

//     const isPasswordSyntaxValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gim;
//     const passSyntaxCheck=isPasswordSyntaxValid.test(password);

//     if(!mailSyntaxCheck || !passSyntaxCheck )return "Follow ProperSyntax";


//     // Adding user using Frirebase API
    
//     // const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//           // Signed up 
//           const user = userCredential.user;
//           console.log(user);
//           return null;
    
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorMessage);
//           return errorMessage+errorCode;

//         // ..
//       }); 


      
    
      
    
// }

// export default CreateUser




// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebase";
// import { updateProfile } from "firebase/auth";


// // No need for useNavigate here — handle navigation in the caller
// const CreateUser = async (email, password, name) => {
//   console.log(email, password);

//   // Regex validations
//   const isEmailSytaxValid = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
//   const mailSyntaxCheck = isEmailSytaxValid.test(email);

//   const isPasswordSyntaxValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gim;
//   const passSyntaxCheck = isPasswordSyntaxValid.test(password);

//   if (!mailSyntaxCheck || !passSyntaxCheck) return "Follow ProperSyntax";

//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;
//     //  after creating user update the user profile with the name
//       updateProfile(auth.user, {
//           displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
//         }).then(() => {
//           // Profile updated!
//           // ...
//         }).catch((error) => {
//           // An error occurred
//           // ...
//         });
    
//     console.log("User Created:", user);
//     return null; // success
//   } catch (error) {
//     console.log("Error Creating User:", error.message);
//     return `${error.code} - ${error.message}`; // error
//   }
// };

// export default CreateUser;
