import { useRef, useState } from "react";
import { validateData } from "../utils/validateData";
import {auth} from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";
import Header from "./Header";

const Login =()=>{
    const [isSigninForm,setIsSigninForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const fullname = useRef(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleToggle = ()=>{
        setIsSigninForm(!isSigninForm);
    }

    const handleSignIn = ()=>{
        const errorMessage = isSigninForm ? validateData(email.current.value,password.current.value) : validateData(email.current.value,password.current.value,fullname.current.value);
        setErrorMessage(errorMessage);

        if(!errorMessage){
            isSigninForm ? signIn(email.current.value,password.current.value) : createUser(email.current.value,password.current.value,fullname.current.value);
        }
    }

    const createUser= (email,password,displayName)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: displayName, photoURL: "https://avatars.githubusercontent.com/u/51444023?v=4&size=64"
              }).then(() => {
                const {uid,email,displayName,photoURL} = auth.currentUser;
                console.log(displayName);
                dispatch(adduser({uid,email,displayName,photoURL}))
                navigate("/browse");
              }).catch((error) => {
                
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+" "+errorMessage)
        });
    }

    const signIn = (email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/browse")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+" "+errorMessage)
        });
    }

    return(
        <div className="flex">
            <Header/>
            <div className="absolute px-8 py-12 left-0 right-0  m-auto w-3/12 bg-black/90 flex flex-col rounded-lg self-center">
                <h1 className="font-bold text-white text-3xl mb-8">{isSigninForm? "Sign In" : "Sign Up"}</h1>
                <form onSubmit={(e)=>e.preventDefault()}>
                    {!isSigninForm && <input ref={fullname} className="h-12 p-2 w-full bg-gray-800 mb-12 text-white" type="text" placeholder="Full Name"/>} 
                    <input ref={email} className="h-12 p-2 w-full bg-gray-800 mb-12 text-white" type="text" placeholder="Email Address"/>
                    <input ref={password} className="h-12 p-2 w-full bg-gray-800 mb-12 text-white" type="password" placeholder="Password"/>
                    <h2 className="text-red-700 p-2 text-lg">{errorMessage}</h2>
                    <button className="bg-red-800 p-2 h-12 w-full rounded-lg mb-4" onClick={handleSignIn}>{isSigninForm? "Sign In" : "Sign Up"}</button>
                    <h2 className="cursor-pointer text-md text-white" onClick={handleToggle}> {isSigninForm? "New to Netflix? Sign up now." : "Already registered. Please Sign In"}</h2>
                </form>
            </div> 
        </div>
    )
}

export default Login;