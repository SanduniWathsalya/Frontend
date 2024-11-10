import React from 'react';
import './teacherlogin.css';
import { Link } from 'react-router-dom';

function LoginFormTeacher() {
  return (
    <section className= "loginFormSection3">
      <h2>TEACHER LOGIN</h2>

      <form className="loginForm3">
        <div className="inputGroup3">
        <label htmlFor="teacherId" className="inputLabel3">Teacher Id</label>
        <input type="text" id="teacherId" className="inputField3" />
        </div>
        <div className="inputGroup3">
          <label htmlFor="password" className="inputLabel3">Password</label>
          <input type="password" id="password" className="inputField3" />
        </div>
        <div className="rememberMe3">
          <input type="checkbox" id="rememberMe" className="checkbox3" />
          <label htmlFor="rememberMe" className="checkboxLabel3">REMEMBER ME</label>
        </div>
       <button type="submit" className="signInButton3">
       SIGN IN
        </button>
      </form>
    </section>
  );
}

export default LoginFormTeacher;