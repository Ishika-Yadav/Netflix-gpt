import users from "./userData";

const ValidateUser= ( email ,password)=>{

    // check if the user exist in the data 

    const response= users.find((user)=>{
        return  email === user.email && password === user.password
    });
    // console.log(response);

    if(response) return " welcome user"; else return window.alert("UserId/Password incoorect");
   

}
export default ValidateUser;