import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/initial white.webp"

const Nav = () => {
  return (
    <>
      <nav className='nav'>
        <div id='nav-img'>
            <img src="../assets/initial white.webp" alt="" />
        </div>

        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/skill"}>Skill</Link></li>
          <li><Link to={"/work"}>Work</Link></li>
        </ul>

        <div className='resume'>
          <button>My resume</button>
        </div>

      </nav>
    </>
  );
};

export default Nav;
