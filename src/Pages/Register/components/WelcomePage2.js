// Main.js
import React,{useRef} from 'react';
import './WelcomePage2.css';
import { Link } from 'react-router-dom';

const WelcomePage2 = () => {
  const scrollRef=useRef(null);

  const scrollleft=() => {
    scrollRef.current.scrollBy({
      left:-300, // Adjust scroll distance as needed
      behavior:'smooth',
    });
  };

  const scrollright=() => {
    scrollRef.current.scrollBy({
      left:300, // Adjust scroll distance as needed
      behavior:'smooth',
    });
  };

  
  return (
    <section className="content2">
      <h1>WELCOME TO BRILLIENTSTAR Schools</h1>
      <h2>You can register with us according  to  following options</h2>
      <div className="card-section2">
      <button className="scroll-btn2 left" onClick={scrollleft}>‹</button>
      <div className="register-options" ref={scrollRef}>
        <div className="register-card">
          <img src='school.jpg' alt="Student" />
          <h3>As a School</h3>
          <Link to="/schoolregister">
            <button>REGISTER</button>
          </Link>
        </div>
        <div className="register-card">
          <img src='tuition-920.jpg' alt="Teacher" />
          <h3>As a Small Institute</h3>
          <Link to="/smallregister">
          <button>REGISTER</button>
          </Link>
        </div>
        <div className="register-card">
          <img src='image_a4413c64dd.jpg' alt="Admin" />
          <h3>As a Mass Institute</h3>
          <Link to="/massregister">
          <button>REGISTER</button>
          </Link>
          </div>
      </div>
      <button className="scroll-btn2 right" onClick={scrollright}>›</button>
      </div>
    </section>
  );
};

export default WelcomePage2;
