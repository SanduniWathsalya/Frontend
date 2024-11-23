import React, { useEffect, useState } from 'react';
import './Vision.css';

function Vision() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["vision1.jpeg", "vision2.jpeg", "vision3.jpeg", "vision4.jpeg"]; // Array of image names

  // Change image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="vision">
      <div className='para2'>
      <h2>Our Vision</h2>
      <div className="vision-statement">
        To empower businesses by delivering innovative, scalable, and user-centric web solutions that drive digital transformation and foster growth, while maintaining a commitment to quality, creativity, and client success.
      </div>
      </div>
      <div className="vision-slider">
        <div className="slider-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Vision Image ${index}`}
              className={index === currentIndex ? 'active' : ''}
            />
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default Vision;
