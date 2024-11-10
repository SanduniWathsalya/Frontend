import React, { useEffect, useState } from 'react';
import './Headerblue.css';
import { Link, NavLink } from 'react-router-dom';

function Header2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    <Link to="/" onClick={toggleMobileMenu} className="nav-link">Home</Link>,
    <NavLink to="/About" onClick={toggleMobileMenu} className="nav-link">About Us</NavLink>,
    <NavLink to="/Login" onClick={toggleMobileMenu} className="nav-link">Login</NavLink>,
    <NavLink to="/Register" onClick={toggleMobileMenu} className="nav-link">Register</NavLink>
  ];

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header2');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header2">
      <div className="navbar-logo2">
        <img src="starlogo-removebg-preview.png" alt="ABC School Logo" className="logo2" />
        <h1 className="school-name2">BRILLIENTSTAR</h1>
        <h2 className="school-subtitle2">S C H O O L S</h2>
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
        <div className="mobile-menu2">
          {navigationItems.map((item, index) => (
            <div key={index} className="mobile-nav-item">
              {item}
            </div>
          ))}
          <button className="contact-btn2-mobile" onClick={() => setIsMobileMenuOpen(false)}>
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}

export default Header2;
