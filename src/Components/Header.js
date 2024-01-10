import React from 'react';
import LOGO from '../Assets/Images/MyflixGPT-logo.png';

const Header = () => {
  return (
    <div className='w-100 bg-[rgba(0,0,0,0.3)] flex justify-between fixed left-0 right-0 top-0'>
        <div className='container mx-auto'>
          <div className='w-40 overflow-hidden py-2'>
              <img src={LOGO} alt="logo" />
          </div>
        </div>
    </div>
  )
}

export default Header