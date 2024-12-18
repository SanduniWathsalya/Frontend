import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './studentlogin.css';


function LoginFormStudent() {
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
    <section className= "loginFormSection">
      <h2>STUDENT LOGIN</h2>

      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
        <label htmlFor="email" className="inputLabel">Email</label>
        <input 
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="inputField"
        />
        {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="inputGroup">
          <label htmlFor="password" className="inputLabel">Password</label>
          <input 
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="inputField" 
          />
        {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="rememberMe">
          <input type="checkbox" id="rememberMe" className="checkbox" />
          <label htmlFor="rememberMe" className="checkboxLabel">REMEMBER ME</label>
        </div>
        
       <button type="submit" className="signInButton">Login</button>
       {errors.general && <p className="error">{errors.general}</p>}
      </form>
    </section>
  );
}

export default LoginFormStudent;