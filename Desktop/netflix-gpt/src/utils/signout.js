import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const  signout= ()=>{
    
    return signOut(auth).then(() => {
        console.log("signout")
    // Sign-out successful.
    }).catch((error) => {
        console.log(error)
    // An error happened.
    });


}

export default signout;