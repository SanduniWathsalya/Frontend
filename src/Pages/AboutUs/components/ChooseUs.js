import React, { useState, useEffect } from "react";
import "./ChooseUs.css";

function ChooseUs() {
  const sentences = [
    "Choosing Frithcode means partnering with a company that understands the intricacies of school management.",
    "Our systems are designed to be user-friendly, reliable, and secure.",
    "We offer comprehensive support and training to ensure that our clients can make the most of our solutions.",
    "With Frithcode, you can be confident that you are getting a product that is tailored to your needs and backed by a team that is dedicated to your success.",
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 5000); // Change sentence every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="choose-us">
      <div className="choosediv">
        <h2>Why Choose Us?</h2>
        <div className="sentence-container">
          <p key={currentSentenceIndex} className="animated-text">
            {sentences[currentSentenceIndex]}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
