import React from 'react';
import './schoolregister.css';
import RegisterForm1 from './RegisterFormSchool';
import Header from '../../../Home/components/Header'

function SchoolRegister() {
  return (
    <div className="Schoollogin">
     <Header/>  
      <main className="SchoolmainContent">
        <div className="SchoolcontentWrapper">
          <RegisterForm1 />
          <div className="SchoolImage">
         
          </div>
        </div>
      
      </main>
   
    </div>
    
  );
}

export default SchoolRegister;
