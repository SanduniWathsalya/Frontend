import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    <Link to="/" onClick={toggleMobileMenu} className="nav-link">Home</Link>,
    <NavLink to="/About" onClick={toggleMobileMenu} className="nav-link">About Us</NavLink>,
    <NavLink to="/Login" onClick={toggleMobileMenu} className="nav-link">Login</NavLink>,
    <NavLink to="/Register" onClick={toggleMobileMenu} className="nav-link">Register</NavLink>,
    <NavLink to="/contactus" onClick={toggleMobileMenu} className="nav-link">Contact Us</NavLink>
  ];

  useEffect(() => {
    // Scroll event for changing header background
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className="navbar-logo">
        <img src="starlogo-removebg-preview.png" alt="ABC School Logo" className="logo" />
        <h1 className="school-name">BRILLIENTSTAR</h1>
       
      </div>
      
      <div className="navbar-links">
        {navigationItems.map((item, index) => (
          <div key={index} className="navItem">
            {item}
          </div>
        ))}
      </div>

      <div className="menu-icon2" onClick={toggleMobileMenu}>
        <div className={`bar2 ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar2 ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar2 ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navigationItems.map((item, index) => (
            <div key={index} className="mobile-nav-item">
              {item}
            </div>
          ))}
         
        </div>
      )}
    </header>
  );
}

export default Header;
