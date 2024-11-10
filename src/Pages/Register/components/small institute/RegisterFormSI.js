import React from 'react';
import './smallregister.css';


function RegisterFormSmall() {
  return (
    <section className= "SIFormSection">
      <h2>Register As A Small Institute </h2>

      <form className="SIRegisterForm">
        <div className="SIinputGroup">
        <label htmlFor="name" className="SIinputLabel">Institute Name</label>
        <input type="text" id="name" className="SIinputField" />
        </div>
        <div className="SIinputGroup">
        <label htmlFor="address" className="SIinputLabel">Address</label>
        <input type="text" id="address" className="SIinputField" />
        </div>
        <div className="SIinputGroup">
        <label htmlFor="email" className="SIinputLabel">Email</label>
        <input type="email" id="email" className="SIinputField" />
        </div>
        <div className="SIinputGroup">
          <label htmlFor="password" className="SIinputLabel">Password</label>
          <input type="password" id="password" className="SIinputField" />
        </div>
       
       <button type="submit" className="SIRegisterButton">REGISTER
        </button>
      </form>
    </section>
  );
}

export default RegisterFormSmall;