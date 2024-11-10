import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const navigationItems = [
  <Link to="/" className="nav-link">Home</Link>,
  <Link to="/About" className="nav-link">About Us</Link>,
  <Link to="/Login" className="nav-link">Login</Link>,
  <Link to="/Register" className="nav-link">Register</Link>
];



function Header() {
  return (
    <header className="header2">
      <div className="navbar-logo2">
        <img src="starlogo-removebg-preview.png" alt="ABC School Logo" className="logo2" />
        <h1 className="school-name2">BRILLIENTSTAR </h1>
        <h2 className="school-subtitle2">S C H O O L S</h2>
      </div>
      <nav className="navbar-links2">
        {navigationItems.map((item, index) => (
          <div key={index} className="navItem2">{item}</div>
        ))}
      </nav>
      <div className="navbar-contact2">
        <button className="contact-btn2">Contact Us</button>
        
      </div>
    </header>
  );
}

export default Header;
