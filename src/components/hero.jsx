import React from 'react';
import Profile from"../assets/profile.png";
import AboutMe from"../assets/aboutme.png";

const Hero = () => {
  return (
    // home
    <>
    <section id='home'>
      <div className='home-name'>
          <h1>Hi <span className="wave-hand">👋</span>,<br /><span>I'm</span><span className='nickname'>Pawpatrol</span></h1>
          <p>Frontend Developer</p>
        <div className='contact-btn'>
          <button>Contact Me</button>
        </div>
      </div>

      <div className='home-profile'>
          <img src={Profile} alt="" />
      </div>

      <div className='home-social'>
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
    </section>

    <section id='about'>
      <div className='about-container'>
          <div className="about-img">
              <img src={AboutMe} alt="" />
          </div>

          <div className="about-txt">
              <h1>ABOUT ME</h1>
              <h2>PADWA TINGKASAN - FRONTEND DEVELOPER</h2>
              <p> A frontend developer who enjoys building user-friendly and visually appealing web applications. I’m still learning and improving my skills, but I have experience working with HTML, CSS, JavaScript, and some frontend framework like React Js.
              <br /><br />I love exploring new technologies and figuring out how to create better user experiences. Right now, I’m focused on improving my understanding of responsive design, performance optimization, and accessibility.
              <br /> <br />I’m always open to learning new things and growing as a developer. Looking forward to working on exciting projects and gaining more experience along the way!
              </p>
          </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
