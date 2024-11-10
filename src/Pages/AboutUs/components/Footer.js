import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="logo.png" alt="ABC School" />
        </div>
        <div className="footer-direction-info">
          <p>12th street, <br/>
          Kumarathunga Mawatha, <br/>
           Colombo 07 <br/>
           Sri Lanka <br/><br/>
           <a href="#directions">Directions :</a></p> 
        
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about-us">About Us</a>
          <a href="#login">Login</a>
          <a href="#register">Register</a>
        </div>
        <div className="footer-contact-info">
          <p>School Office: (011) 234 5567 <br/>
              Email: abc@gmail.com <br/><br/>
          <a href="#contact">Contact :</a></p>
         
        </div>
      </div>
      <div className="footer-bottom">
  <div className="footer-left">
    <p>© ABC School 2011 | All Rights Reserved</p>
  </div>
  <div className="footer-right">
    <p>Website by: Team 1 Fifthcode Training Programme</p>
  </div>
</div>

    </footer>
  );
}

export default Footer;
