import React, { useState, useEffect } from 'react';
import './Events.css';

function Events() {
  const images = [
    "event1.jpg",
    "event2.jpg",
    "event3.jpg",
    "event4.jpg",
    "event5.jpg",
    "event6.jpg",
    "event7.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    );
  };

  // Automatic image slider (every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="events-section">
      <h2>Thorough Us ...</h2>
      <div className="event-item">
        <img src={images[currentIndex]} alt={`Event ${currentIndex + 1}`} />
        {/* Left Arrow */}
        <button className="arrow left-arrow" onClick={prevImage}>
          &#8249;
        </button>
        {/* Right Arrow */}
        <button className="arrow right-arrow" onClick={nextImage}>
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Events;
