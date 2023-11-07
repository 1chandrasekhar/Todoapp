import React, { useEffect, useRef, useState } from "react";
import App from "./App";
import './SignInSignUp.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
function SignInSignupWithLocalStorage(){
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")
   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   },[])
   const handleClick=()=>{
       if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Account created successfully!!")
        window.location.reload()
        
      }
      else{
        toast("Please Enter All details Correctly");
      }
   }

   const handleSignIn=()=>{ 
    if(email.current.value==localEmail&&password.current.value==localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        toast("Check Your credentails");
    }
   }
    return(
        <div className="chandralogin">
            {showHome?<App/>:
            (show?
                <div className="container">
                        <h1>Hello Welcome back</h1>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <button onClick={handleSignIn}>Sign In</button>
                </div>
                :
                <div className="container">
                        <h1>Signup</h1>
                        <div className="input_space">
                            <input name="d" placeholder="Name" type='text' ref={name} />
                        </div>
                        <div className="input_space">
                            <input name="d" placeholder="Email" type='email' ref={email} />
                        </div>  
                        <div className="input_space">
                            <input name="d" placeholder="Password" type='password' ref={password} />
                        </div>
                        <button onClick={handleClick}>Sign Up</button>
                </div>
                )
            }
            <ToastContainer />
        </div>
    );
}
export default SignInSignupWithLocalStorage;