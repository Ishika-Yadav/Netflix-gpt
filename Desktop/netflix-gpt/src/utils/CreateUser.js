
 import users from './userData';
const CreateUser = ( email, password ,name) => {
    console.log(email,password);
    //  using Reges to check if the syntax or rule are been followed email and password
    const isEmailSytaxValid =/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;;
    isEmailSytaxValid.test(email);

    const isPasswordSyntaxValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gim;
    isPasswordSyntaxValid.test(password);
    console.log(!isEmailSytaxValid); //priting false
    console.log(!isPasswordSyntaxValid); //printing false 

    const createUserObject = {
        email: email,
        password: password,
        username: name
       }
    console.log(createUserObject);

    console.log(users.push(createUserObject))
    return isEmailSytaxValid && isPasswordSyntaxValid ?users.push(createUserObject):window.alert("PLease enter proper mail and password");

}

export default CreateUser