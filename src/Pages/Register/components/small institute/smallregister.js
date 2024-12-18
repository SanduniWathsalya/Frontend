import React from 'react';
import './smallregister.css';
import RegisterForm2 from './RegisterFormSI';
import Header from '../../../Home/components/Header'

function SIRegister() {
  return (
    <div className="SIregister">
     <Header/>   
      <main className="SImainContent">
        <div className="SIcontentWrapper">
          <RegisterForm2 />
          <div className="SIImage">
         
          </div>
        </div>
      
      </main>
   
    </div>
    
  );
}

export default SIRegister;
