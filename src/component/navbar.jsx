import React from 'react'
import logo from '../assets/mylogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
const Navbar = () => {
  return (
   <nav className='mb-20 flex items-center justify-between py-6  '>
    <div className='flex flex-shrink-0 items-center'>
        <img className='h-11 w-auto' src= {logo} alt="logo" />
    </div>
    <div className='mb-4 flex items-center justify-center gap-5 text-2xl '>

    <a href="https://www.linkedin.com/in/aditya-gupta-682859238/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="align-middle"/>
        </a>

       <a href="https://github.com/Adigup13" target="_blank" rel="noopener noreferrer">
          <FaGithub className="align-middle"/>
        </a>

        <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="align-middle"/>
        </a>

    </div>
   </nav>
  )
}

export default Navbar