import React from 'react';
import "../assets/profile.png"

const Hero = () => {
  return (
    <>
    <main className='home'>
      <div className='l-con'>
        <h1>Hi,</h1>
        <h1>I'm <span>Pawpatrol</span></h1>
        <p>Frontend Developer</p>
      <div className='contact-btn'>
        <button>Contact Me</button>
      </div>
      </div>


      <div className='r-con'>
        <div className='profile'>
          <img src="../assets/profile.png" alt="" />
        </div>
      </div>

      <div className='social'>
        <div className='horizontal-line'></div>
        <div className='social-icon'>
           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
        </div>
      </div>

    </main>
    </>
  );
};

export default Hero;
