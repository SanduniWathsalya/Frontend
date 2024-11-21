import React from 'react';
import './adminsignup.css';
import SignUpForm from './Signup';  
import Header from '../../../Home/components/Header';


function AdminSignUp() {
  return (
    <div className="adminsignup">
      <Header/>
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

export default AdminSignUp;