import React, { useState, useEffect } from 'react';
import './HomePage.css';

const heroTexts = [
  {
    h1: ["Faith,", "Community And", "Excellence"],
    p: "Education is an environment of faith and virtue."
  },
  {
    h1: ["Better", "Education", "for an amazing world"],
    p: "Shaping the future with knowledge and values."
  },
  {
    h1: ["Best", "place to", "manage your institute"],
    p: "Experience the excellence of modern education."
  }
];

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
    }, 4500); // Change text every 4.5 seconds (matching animation)
    
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  
  const currentText = heroTexts[currentIndex];

  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          {currentText.h1.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>
        <p>{currentText.p}</p>
      </div>
    </div>
  );
}

export default HomePage;
