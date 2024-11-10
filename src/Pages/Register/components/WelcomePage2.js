// Main.js
import React from 'react';
import './WelcomePage2.css';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <section className="content2">
      <h1>WELCOME TO BRILLIENTSTAR Schools</h1>
      <h2>You can register with us according  to  following options</h2>
      <div className="register-options">
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
    </section>
  );
};

export default WelcomePage;
