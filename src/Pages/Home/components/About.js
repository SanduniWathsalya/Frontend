import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-section">
      <div className="about-image">
        <img src="About.jpg" alt="Students" />
      </div>
      <div className="about-content">
    <h2>
      <span style={{ color: ' rgba(20, 12, 115, 0.96)' }}><strong>BRILLIENTSTAR</strong></span> 
     <span style={{ color: ' rgba(84, 76, 173, 0.96)' }}> Schools</span> 
     </h2>
  
               <p><strong>Our System's mission is</strong></p>
        <div className="about-para">
        
        "Our mission is to empower educational institutions <strong>both schools and institutes</strong> with a versatile, all-in-one Student Information System that simplifies student management and payment processes. By offering customizable solutions tailored to the unique needs of each institution, we aim to streamline administrative tasks, enhance communication, and provide seamless financial transactions. Our platform is designed to foster efficiency, transparency, and growth, enabling institutions to focus on delivering quality education while ensuring students and parents have an engaging, user-friendly experience."
        <br/>
        <button>See more</button>
        </div>
    </div>
    </div>

  );
}

export default About;
