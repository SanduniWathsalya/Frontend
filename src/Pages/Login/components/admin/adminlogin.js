import React from 'react';
import './adminlogin.css';
import LoginForm2 from './LoginFormAdmin';
import Header from '../../../Home/components/Header'


function AdminLogin() {
  return (
    
    <div className="adminlogin">
      <Header/>
      <main className="mainContent2">
        <div className="contentWrapper2">
          <LoginForm2 />
          <div className="loginImage2">
         </div>
        </div>
      </main>
    </div>
  );
}

export default AdminLogin;