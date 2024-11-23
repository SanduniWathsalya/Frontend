import React from 'react';
import './Team.css';

function Team() {
  return (
    <section className="team">
      <h2>Our Team</h2>
      <p>
      Our team is our greatest asset. Comprising skilled professionals from diverse backgrounds, we bring together expertise in software development, education, and customer support. Each member of our team is dedicated to our mission and works tirelessly to ensure that our clients receive the best possible service and support.
      </p>
      <div class="team-section">
        <div class="team-container">
            <div class="team-member">
                <div class="image-container">
                    <img src="/ceo.jpg" alt="Founder & CEO"/>
                </div>
                <h3>James Bond</h3>
                <p>Founder & CEO</p>
            </div>
            <div class="team-member">
                <div class="image-container">
                    <img src="/ceo.jpg" alt="Creative Director"/>
                </div>
                <h3>James Bond</h3>
                <p>Creative Director</p>
            </div>
            <div class="team-member">
                <div class="image-container">
                    <img src="/ceo.jpg" alt="Head of Marketing"/>
                </div>
                <h3>James Bond</h3>
                <p>Head of Marketing</p>
            </div>
            
        </div>
    </div>
    
    </section>
  );
}

export default Team;
