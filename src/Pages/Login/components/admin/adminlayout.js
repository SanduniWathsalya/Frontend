
// ./src/components/AdminLayout.js
import React from 'react';
import Header2 from './Headerblue';
import Sidebar from './sidebar';
import Dashboard from './admindashboard';

import './adminlayout.css';


const AdminLayout = () => {
  return (
    <div className="app">
      <Header2/>
      <Sidebar />
      <Dashboard />
      
    </div>
  );
};

export default AdminLayout;

