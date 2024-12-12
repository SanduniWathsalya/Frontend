import React, { useEffect, useState } from 'react';
import './Slider.css';

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["vision1.png", "vision2.png", "vision3.png", "vision4.png"]; // Array of image names

  // Change image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="slider">
      
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

export default Slider;