import React from 'react';
import './massregister.css';
import RegisterForm3 from './RegisterFormMI';
import Header from '../../../Home/components/Header'

function MIRegister() {
  return (
    <div className="MIlogin">
     <Header/>  
      <main className="MImainContent">
        <div className="MIcontentWrapper">
          <RegisterForm3 />
          <div className="MIImage">
         
          </div>
        </div>
      
      </main>
   
    </div>
    
  );
}

export default MIRegister;
