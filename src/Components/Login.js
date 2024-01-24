import { Form, useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import log_img from "../Assets/Images/log.png";
import Header from "./Header";
import { checkValidateSignInData, checkValidateSignUpData } from "../Utils/Validate";
import { auth } from "../Utils/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { user_avtar } from "../Utils/Constant";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch =  useDispatch(); 
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");

  //Use a hook here for getting references to the inputs
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const signFormHandler = () => {
    setIsSignedIn(!isSignedIn);
  };
  const handleSubmit = () =>{
    const Message = !isSignedIn ? checkValidateSignUpData(name.current.value, email.current.value, password.current.value) : 
    checkValidateSignInData(email.current.value, password.current.value)
    setErrMessage(Message)
    // !isSignedIn ? console.log(name, email, password) : console.log( email, password)

    if(Message) return null;

    if(!isSignedIn){
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {          
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: user_avtar
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser( { uid: uid, email: email, displayName: displayName, photoURL: photoURL})); 
            //navigate("/browse");  
          }).catch((error) => {
            setErrMessage(error.message);
          });
          console.log("User signup", user);                  
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage)
      });

    }else{
      //Sign In Logic
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signin", user)
          //navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage)
      });
    }
  }
  return (
    <>
      <Header />
      <div className="bg-[url('Assets/Images/login.jpg')] h-screen flex justify-between items-center ">
        <div className="w-1/2 mx-auto flex items-center rounded-md shadow-sm shadow-slate-800 overflow-hidden min-h-96">
          <div className="w-1/2 bg-[rgba(29,27,49,0.9)] p-5 min-h-96 flex items-center">
            <img src={log_img} alt="log" className="" />
          </div>
          <div className="w-1/2 bg-black bg-opacity-75 p-5 min-h-96 flex items-center">
            <div className="w-full">
              <h2 className="text-3xl font-bold text-green-600 font-sans text-center">
                {isSignedIn ? "Sign In" : "Sign Up"}
              </h2>

              <Form className="mt-5 block" onSubmit={(e) => e.preventDefault()}>
                {!isSignedIn && (
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full text-slate-200 bg-gray-700 p-2 rounded-sm focus-visible:outline-0"
                      ref={name}
                    />
                  </div>
                )}
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="w-full text-slate-200 bg-gray-700 p-2 rounded-sm focus-visible:outline-0"
                    ref={email}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full text-slate-200 bg-gray-700 p-2 rounded-sm focus-visible:outline-0"
                    ref={password}
                  />
                </div>
                <p className="text-sm text-red-600 font-bold">{errMessage}</p>
                <button className="bg-green-600 text-white font-bold w-full p-2 mt-3 transition ease-in-out delay-450
                border-1 border-green-800 rounded-sm hover:bg-white hover:text-green-800" onClick={handleSubmit}>
                  {isSignedIn ? "Sign in" : "Sign up"}
                </button>
                <div className="flex justify-between mt-1 items-center">
                  <div>
                    <input
                      type="checkbox"
                      className="focus-visible:outline-0"
                    />
                    <label className="text-slate-300 text-sm ms-1">
                      Remember me
                    </label>
                  </div>
                  <a href="" className="text-slate-300 text-sm">
                    Need Help?
                  </a>
                </div>
                <h5
                  className="text-md text-green-600 text-center cursor-pointer mt-3"
                  onClick={signFormHandler}
                >
                  {isSignedIn
                    ? "New to MyflixGPT? Sign Up"
                    : "Already registered? Sign In"}
                </h5>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
