import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
        if(username.length < 4 && username.length > 0){
            setNameError("Name must be more than 4 characters")
            setHasBeenSubmitted( false );
        }
        if(email.length < 3 && email.length > 0){
            setEmailError("Email must be more than 3 characters")
            setHasBeenSubmitted( false );
        }
        if(password.length < 5 && password.length > 0){
            setPasswordError("Password must be 3 characters")
            setHasBeenSubmitted( false );
        }
        if(password !== confirmPassword){
            setConfirmPasswordError("Passwords must match")
            setHasBeenSubmitted( false );
        }

    };
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for submitting the form!";
	} else {
	    return "Welcome, please submit the form";
	}
    };

    
    return (
        <form onSubmit={ createUser }>
            <h3>{ formMessage() }</h3>
	    <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } />
                {
                    nameError ?
                    <p>{nameError}</p> : ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                {
                    emailError ?
                    <p>{emailError}</p> : ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />

                {
                    passwordError ?
                    <p>{passwordError}</p> : ''
                }
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value)}/>
                {
                    confirmPasswordError ?
                    <p>{confirmPasswordError}</p> : ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;
