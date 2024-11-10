import React from 'react';
import './adminsignup.css';
import SignUpForm from './Signup';  


function AdminLogin() {
  return (
    <div className="adminsignup">
      <main className="mainContent4">
        <div className="contentWrapper4">
          <SignUpForm/>
          <div className="signupimage">
         </div>
        </div>
      </main>
    </div>
  );
}

export default AdminLogin;