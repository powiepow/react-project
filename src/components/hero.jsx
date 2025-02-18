import React from 'react';

const Hero = () => {
  return (
    <>
    <main id='home-sec' className='container mx-auto h-full flex items-center justify-between space-x-10 text-center'>

      <div id='l-content' className='flex-col text-left space-y-5 text-[#D9D9D9] font-bold text-[23px] pl-20 pt-20'>
        <h1 className="">Hi,</h1>
        <h1 className=''>I'm <span className='text-[#D8871A]'>Pawpatrol</span></h1>
        <p className='font-light text-lg'>Frontend Developer</p>
        <div id='contact-btn' className='flex justify-left border-none pt-5 '>
          <a href="#contact-sec"><button className='bg-transparent border-2 border-[#D8871A] text-[#D8871A] text-lg py-2 px-2 hover:border-[#D9D9D9] hover:text-[#D9D9D9]'>Contact Me</button></a>
        </div>
      </div>

      <div id='r-content' className='flex flex-row items-end justify-between h-full flex-1'>
        <div id='profile' className='w-[35rem] h-[35rem] flex justify-center items-center '>
          <img src="/public/profile.png" className='w-full h-full object-cover opacity-50' />
        </div>

        <div id='social' className='flex flex-col justify-center mr-20 items-center pb-20'>
          
          <div className="w-[4px] h-40 bg-[#D8871A] mb-4"></div>

          <div className="flex flex-col space-y-4 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook text-[#D9D9D9] hover:text-[#D8871A]"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-[#D9D9D9] hover:text-[#D8871A]"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-[#D9D9D9] hover:text-[#D8871A]"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-[#D9D9D9] hover:text-[#D8871A]"></i>
            </a>
          </div>

        </div>

      </div>
    </main>
    </>
  );
};

export default Hero;
