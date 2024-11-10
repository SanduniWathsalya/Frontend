import React from 'react';
import './adminlogin.css';
import LoginForm2 from './LoginFormAdmin';


function AdminLogin() {
  return (
    <div className="adminlogin">
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