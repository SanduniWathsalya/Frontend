// Main.js
import React,{useRef} from 'react';
import './WelcomePage.css';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
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
    <section className="content">
      <h1>WELCOME TO BRILLIENTSTAR</h1>
      <h2>Are you,</h2>
      <div className="card-section">
      <button className="scroll-btn left" onClick={scrollleft}>‹</button>
      <div className="login-options" ref={scrollRef}>

        <div className="login-card">
          <img src='studentlogin.jpg' alt="Student" />
          <h3>STUDENT</h3>
          <Link to="/studentlogin">
            <button>LOGIN</button>
          </Link>
        </div>
        
        <div className="login-card">
          <img src='teacherlogin.jpg' alt="Teacher" />
          <h3>TEACHER</h3>
          <Link to="/teacherlogin">
          <button>LOGIN</button>
          </Link>
        </div>
        <div className="login-card">
          <img src='adminlogin.jpg' alt="Admin" />
          <h3>ADMIN</h3>
          <Link to="/adminlogin">
          <button>LOGIN</button>
          </Link>
        </div>
        
      </div>
      <button className="scroll-btn right" onClick={scrollright}>›</button>
      </div>
    </section>
  );
};

export default WelcomePage;
