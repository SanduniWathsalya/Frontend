import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-container">
       <div className="hero">
     <img src="Homepage.jpg" alt="Students Learning" ></img>
     </div>
      {/* Hero Section */}
      <div className="hero-text">
        <h1>Faith,<br/> Community And <br/>Excellence</h1>
        <p>Education is an environment of faith and virtue.</p>
      </div>

      {/* Content Section */}
      <div className="content-section">
      
        <div className="content-item">
          <img src="OIP (1).jpg" alt="School Building" />
          <Link to="/About" className="aboutus-link">Who we are →</Link>
         
        </div>
        <div className="content-item">
          <img src="download.jpg" alt="Students Learning" />
          <a href="#" className="content-link">Academic →</a>
        </div>
        <div className="content-item">
          <img src="community.jpg" alt="Community" />
          <a href="#" className="content-link">Community →</a>
        </div>
        
      </div>
    </div>
  );
}

export default HomePage;
