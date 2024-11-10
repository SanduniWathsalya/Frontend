import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './adminlogin.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Navigation for after sign-in

  const handleChange = (e) => {
    const { email, value } = e.target;
    setFormData({
      ...formData,
      [email]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // ID validation
    if (!formData.email) {
      newErrors.email = 'ID is required';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform API call for login
      fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            // Redirect to the admin dashboard after successful login
            navigate('/admindashboard'); // Update this path to match your route for the Admin Dashboard
          } else {
            // Set an error if login fails
            setErrors({ ...errors, password: 'Invalid Email or Password' });
          }
        })
        .catch(error => {
          console.error('Error during login:', error);
          setErrors({ ...errors, password: 'Login failed. Please try again.' });
        });
    }
  };

  return (
    <section className= "loginFormSection">
      <h2>ADMIN LOGIN</h2>

      <form className="loginForm">
        <div className="inputGroup">
        <label htmlFor="studentId" className="inputLabel">Student Id</label>
        <input type="text" id="studentId" className="inputField" />
        </div>
        <div className="inputGroup">
          <label htmlFor="password" className="inputLabel">Password</label>
          <input type="password" id="password" className="inputField" />
        </div>
        <div className="rememberMe">
          <input type="checkbox" id="rememberMe" className="checkbox" />
          <label htmlFor="rememberMe" className="checkboxLabel">REMEMBER ME</label>
        </div>
        
    
        <Link to="/admindashboard">
            <button  type="submit" className="signInButton">LOGIN</button>
          </Link>
        
      </form>
    </section>
  );
}

export default LoginForm;