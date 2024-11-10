import React from 'react';
import './massregister.css';


function RegisterFormMass() {
  return (
    <section className= "MIFormSection">
      <h2>Register As A Mass Institute </h2>

      <form className="MIRegisterForm">
        <div className="MIinputGroup">
        <label htmlFor="name" className="MIinputLabel">Institute Name</label>
        <input type="text" id="name" className="MIinputField" />
        </div>
        <div className="MIinputGroup">
        <label htmlFor="address" className="MIinputLabel">Address</label>
        <input type="text" id="address" className="MIinputField" />
        </div>
        <div className="MIinputGroup">
        <label htmlFor="email" className="MIinputLabel">Email</label>
        <input type="email" id="email" className="MIinputField" />
        </div>
        <div className="MIinputGroup">
          <label htmlFor="password" className="MIinputLabel">Password</label>
          <input type="password" id="password" className="MIinputField" />
        </div>
       
       <button type="submit" className="MIRegisterButton">REGISTER
        </button>
      </form>
    </section>
  );
}

export default RegisterFormMass;