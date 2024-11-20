import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminlogin.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      fetch('http://localhost:5000/api/LoginFormAdmin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            navigate('/admindashboard'); // Redirect to admin dashboard
          } else {
            setErrors({ general: data.message });
          }
        })
        .catch((error) => {
          console.error('Error during login:', error);
          setErrors({ general: 'Login failed. Please try again.' });
        });
    }
  };

  return (
    <section className="loginFormSection2">
      <h2>Admin Login</h2>
      <form className="loginForm2" onSubmit={handleSubmit}>
        <div className="inputGroup2">
          <label htmlFor="email" className="inputLabel2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="inputField2"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="inputGroup2">
          <label htmlFor="password" className="inputLabel2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="inputField2"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="rememberMe2">
          <input type="checkbox" id="rememberMe" className="checkbox2" />
          <label htmlFor="rememberMe" className="checkboxLabel2">Remember Me</label>
        </div>
        <button type="submit" className="signInButton2">Login</button>
        {errors.general && <p className="error">{errors.general}</p>}
        <p className="signupPrompt2">
          Don't have an account? <a href="/adminsignup" className="signupLink2">Sign up now</a>
        </p>
      </form>
    </section>
  );
}

export default LoginForm;
