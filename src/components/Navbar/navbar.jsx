import React from 'react';
import logo from '../../assets/logo.png';
import { FaAngleDown } from 'react-icons/fa'; // Importing dropdown icon
import './Navbar.css'; // Importing CSS file

const Navbar = () => {
  return (
    <header className='header headefixed'>
      <div className='container'>
        <div className='navbar-container'>
          <div className='logo-container'>
            <a href='/'>
              <img src={logo} alt='Logo' className='logo hauto' loading='lazy' width='102' height='46' />
            </a>
          </div>
          <div className='nav-container'>
            <div className='collapse navbar-collapse' id='navbar-collapse'>
              <ul className='nav core-menu'>
                <li className='drop'>
                  <a href='#couRses' className='with-icon '> 
                    Courses
                    <FaAngleDown className='dropdown-icon' /> 
                  </a>
                  <ul className='dropdown'>
                    <li className='drop-item'>VFX</li>
                    <li className='drop-item'>AR & VR</li>
                    <li className='drop-item'>UX Design</li>
                    <li className='drop-item'>Interior Design</li>
                    <li className='drop-item'>Fashion Design</li>
                    <li className='drop-item'>Gaming Design & Art</li>
                    <li className='drop-item'>Game Development</li>
                    <li className='drop-item'>Digital Marketing</li>
                  </ul>
                </li>
                <li><a href='#ourProcess' className='nav-links'>Internships</a></li>
                <li><a href='#whyChoose' className='nav-links'>ShowCase</a></li>
                <li><a href='#camPus' className='nav-links'>Campus</a></li>
                <li><a href='#conTact' className='nav-links'>Contact</a></li>
                <li className='login' >Login</li>
                <li className='start'>Start Now</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
