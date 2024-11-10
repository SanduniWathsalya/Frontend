// ./src/components/Sidebar.js
import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
      <div className="avatar">
      <img src="ceo.jpg" alt="Profile Avatar"/>
      </div>
        <h3 className="name">Team 1</h3>
        <p className="role">Super Admin</p>
      </div>
      <div className="menu">
        <h4>Data</h4>
        <p>Managing Team</p>
        <p>Students' Info</p>
        <p>Teachers' Info</p>
        <p>Invoices</p>
        <h4>Pages</h4>
        <p>Home Page</p>
        <p>About Us</p>
        <p>Register</p>
        <p>Login</p>
        <h4>Tasks</h4>
        <p>Student Registration</p>
        <p>Update student activation</p>
        <p>Teacher Registration</p>
        <p>Update teacher activation</p>
        <p>Payment invoices</p>
      </div>
    </div>
  );
};

export default Sidebar;
