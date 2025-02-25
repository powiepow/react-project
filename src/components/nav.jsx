import React from 'react';
import { Link } from 'react-router-dom';
import Initial from"../assets/initial-white.png"

const Nav = () => {
  return (
      <nav className='nav'>
        <div className='nav-img'>
            <img src={Initial} alt="" />
        </div>

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#">Skill</a></li>
          <li><a href="#">Work</a></li>
        </ul>

        <div className='resume'>
          <button>Download resume</button>
        </div>

      </nav>
  );
};

export default Nav;
