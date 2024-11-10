import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const navigationItems = [<Link to="/" >Home</Link>,
  <Link to="/About" >About Us</Link>,
  <Link to="/Login" >Login</Link>
];

window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) { // Adjust the scroll distance as needed
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


function Header() {
  return (
    <header className="header">
      <div className="navbar-logo">
        <img src="logo.png" alt="ABC School Logo" className="logo" />
        <h1 className="school-name">ABC School</h1>
      </div>
      <nav className="navbar-links">
      {navigationItems.map((item, index) => (
        <button key={index} className="navItem">{item}</button>
        
      ))}
      </nav>
      <div className="navbar-contact">
        <button className="contact-btn">Contact Us</button>
        <span className="contact-number">(011) 2345 567</span>
      </div>
    </header>
  );
}

export default Header;