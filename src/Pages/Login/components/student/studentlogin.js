import React from 'react';
import './studentlogin.css';
import LoginForm from './LoginFormStudent';
import Header from '../../../Home/components/Header'


function StudentLogin() {
  return (
    <div className="studentlogin">
    <Header/> 
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
