import React from 'react';
import './studentlogin.css';
import LoginForm from './LoginFormStudent';


function StudentLogin() {
  return (
    <div className="studentlogin">
      
      <main className="mainContent">
        <div className="contentWrapper">
          <LoginForm />
          <div className="loginImage">
         
          </div>
        </div>
      
      </main>
   
    </div>
    
  );
}

export default StudentLogin;
