import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function content() {
  return (
    <div className="content-container">
    <div className="content-section">
  <div className="content-item">
    <img src="OIP (1).jpg" alt="School Building" />
    <Link to="/About" className="aboutus-link">Who we are →</Link>
  </div>
  <div className="content-item">
    <img src="download.jpg" alt="Students Learning" />
    <button className="content-link" onClick={() => console.log('Navigate to Academic')}>Academic →</button>
  </div>
  <div className="content-item">
    <img src="community.jpg" alt="Community" />
    <button className="content-link" onClick={() => console.log('Navigate to Community')}>Community →</button>
  </div>
</div>

    </div>
  );
}


export default content;