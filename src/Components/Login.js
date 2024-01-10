import React, { useState } from 'react';
import log_img from '../Assets/Images/log.png';
import Header from './Header';

const Login = () => {
    const[isSignedIn, setIsSignedIn] = useState(true)

    const signFormHandler = () =>{
        setIsSignedIn(!isSignedIn)
    }
  return (
   <>
    <Header/>
    <div className="bg-[url('Assets/Images/login.jpg')] h-screen flex justify-between items-center ">
        <div className='w-1/2 mx-auto flex items-center rounded-md shadow-sm shadow-slate-800 overflow-hidden min-h-96'>
            <div className='w-1/2 bg-[rgba(29,27,49,0.9)] p-5 min-h-96 flex items-center'>
                <img src={log_img} alt='log' className=''/>                
            </div>
            <div className='w-1/2 bg-black bg-opacity-75 p-5 min-h-96 flex items-center'>
               <div className='w-full'>
               <h2 className='text-3xl font-bold text-green-600 font-sans text-center'>{isSignedIn ? 'Sign In' : 'Sign Up'}</h2>                
                <from className='mt-5 block'>
                    {!isSignedIn && 
                        <div className='mb-3'>
                            <input type='text' placeholder='Full Name' className='w-full text-slate-200 bg-gray-700 p-2 rounded-sm focus-visible:outline-0'/>
                        </div>}
                    <div className='mb-3'>
                        <input type='email' placeholder='Email Address' className='w-full text-slate-200 bg-gray-700 p-2 rounded-sm focus-visible:outline-0'/>
                    </div>
                    <div className='mb-3'>
                        <input type='password' placeholder='Password' className='w-full text-slate-200 bg-gray-700 p-2 rounded-sm focus-visible:outline-0'/>
                    </div>
                    <button className='bg-green-600 text-white w-full p-2 mt-3 rounded-sm'>{isSignedIn ? 'Sign in' : 'Sign up'}</button>
                    <div className='flex justify-between mt-1 items-center'>
                       <div>
                        <input type='checkbox' className='focus-visible:outline-0'/>
                        <label className='text-slate-300 text-sm ms-1'>Remember me</label>
                       </div>
                       <a href='' className='text-slate-300 text-sm'>Need Help?</a>
                    </div>
                    <h5 className='text-md text-green-600 text-center cursor-pointer mt-3' onClick={signFormHandler}>
                    {isSignedIn ? 'New to MyflixGPT? Sign Up' : 'Already registered? Sign In'}</h5>
                </from>
               </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Login