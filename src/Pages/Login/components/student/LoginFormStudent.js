import React from 'react';
import './studentlogin.css';
import { Link } from 'react-router-dom';

function LoginFormStudent() {
  return (
    <section className= "loginFormSection">
      <h2>STUDENT LOGIN</h2>

      <form className="loginForm">
        <div className="inputGroup">
        <label htmlFor="studentId" className="inputLabel">Student Id</label>
        <input type="text" id="studentId" className="inputField" />
        </div>
        <div className="inputGroup">
          <label htmlFor="password" className="inputLabel">Password</label>
          <input type="password" id="password" className="inputField" />
        </div>
        <div className="rememberMe">
          <input type="checkbox" id="rememberMe" className="checkbox" />
          <label htmlFor="rememberMe" className="checkboxLabel">REMEMBER ME</label>
        </div>
        
       <button type="submit" className="signInButton">SIGN IN
        </button>
      </form>
    </section>
  );
}

export default LoginFormStudent;