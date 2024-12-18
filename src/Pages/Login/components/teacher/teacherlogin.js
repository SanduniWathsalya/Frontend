import React from 'react';
import './teacherlogin.css';
import LoginForm from './LoginFormTeacher';
import Header from '../../../Home/components/Header'

function Teacherlogin() {
  return (
    <div className="teacherlogin">
        <Header/>
      <main className="mainContent3">
        <div className="contentWrapper3">
          <LoginForm />
          <div className="loginImage3">
         
          </div>
        </div>
      </main>
    </div>
  );
}

export default Teacherlogin;