import React, { useEffect } from 'react';
import LOGO from '../Assets/Images/MyflixGPT-logo.png';
import { signOut } from "firebase/auth";
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { addUser, removeUser } from '../Utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const dispatch =  useDispatch();  

  //Suscribing the store using Selector 
  const user = useSelector((store) => store.user);
  //console.log(user,"sss")
  const handleSignOut = () => {    
      signOut(auth).then(() => {
        navigate('/');
      }).catch((error) => {
        //navigate('/error')
      });
  }

  //Auth state change
  useEffect( () =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {  
      if (user) {        
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser( { uid: uid, email: email, displayName: displayName, photoURL: photoURL}));    
        navigate('/browse')
        // console.log("hh", user)
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    //unsubscribe onAuthStateChanged when component is unmount.
    return () => unsubscribe();
  }, [])

  return (
    <div className='w-full bg-[rgba(0,0,0,0.3)] flex justify-between fixed left-0 right-0 top-0 z-10'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='w-40 overflow-hidden py-2 '>
              <img src={LOGO} alt="logo" />              
          </div>
          {user &&
          <button className='bg-green-600 rounded-full px-4 py-1 flex text-white' onClick={handleSignOut}>
            <img src={user ? user.photoURL : "#"} className='w-8 h-8 rounded-full me-1' alt='user'/>Sign Out</button>
}
        </div>
    </div>
  )
}

export default Header