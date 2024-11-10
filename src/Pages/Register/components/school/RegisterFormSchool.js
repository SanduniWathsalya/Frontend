import React from 'react';
import './schoolregister.css';


function RegisterFormSchool() {
  return (
    <section className= "SchoolFormSection1">
      <h2>Register As A School </h2>

      <form className="SchoolRegisterForm1">
        <div className="SchoolinputGroup1">
        <label htmlFor="name" className="SchoolinputLabel1">School Name</label>
        <input type="text" id="name" className="SchoolinputField1" />
        </div>
        <div className="SchoolinputGroup1">
        <label htmlFor="address" className="SchoolinputLabel1">Address</label>
        <input type="text" id="address" className="SchoolinputField1" />
        </div>
        <div className="SchoolinputGroup1">
        <label htmlFor="email" className="SchoolinputLabel1">Email</label>
        <input type="email" id="email" className="SchoolinputField1" />
        </div>
        <div className="SchoolinputGroup">
          <label htmlFor="password" className="SchoolinputLabel">Password</label>
          <input type="password" id="password" className="SchoolinputField1" />
        </div>
       
       <button type="submit" className="SchoolRegisterButton">REGISTER
        </button>
      </form>
    </section>
  );
}

export default RegisterFormSchool;