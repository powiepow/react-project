import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='w-full top-0 fixed'>
      <div id='initial' className='container flex justify-between items-center mx-auto py-4'>
        <div id='init-img' className='justify-center items-center '>
          <img src="/public/initial whiye.webp" className='w-22 h-20' alt="Logo" />
        </div>
        
        <ul className='flex justify-between items-center space-x-10 text-lg cursor-pointer'>
          <li><Link className='text-gray-400 hover:text-white' to="/">Home</Link></li>
          <li><Link className='text-gray-400 hover:text-white' to="/about">About</Link></li>
          <li><Link className='text-gray-400 hover:text-white' to="/skills">Skills</Link></li>
          <li><Link className='text-gray-400 hover:text-white' to="/works">Works</Link></li>
        </ul>

        <div id='resume' className='flex border-none'>
          <button className='bg-[#D8871A] border-none text-gray-200 hover:bg-[#D9D9D9] hover:text-[#2B292F] text-[15px]'>
            My Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
