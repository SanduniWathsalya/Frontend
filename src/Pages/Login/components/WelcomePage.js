// Main.js
import React from 'react';
import './WelcomePage.css';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <section className="content">
      <h1>WELCOME TO ABC SCHOOL</h1>
      <h2>Are you,</h2>
      <div className="login-options">
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
    </section>
  );
};

export default WelcomePage;
