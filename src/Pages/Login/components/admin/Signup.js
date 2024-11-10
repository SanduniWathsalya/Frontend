import React, { useState } from 'react';
import  './adminsignup.css';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // New loading state
  const [successMessage, setSuccessMessage] = useState('');

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

   

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setLoading(false); // Reset loading state on validation error
    return;
  }

  setLoading(true);
  setSuccessMessage('');

  console.log('Form data before submit:', formData);

  fetch('http://localhost:5000/api/Signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Received data from backend:', data);

      setLoading(false);
      if (data.success) {
        setSuccessMessage('Registration successful!');
        setFormData({ name: '', email: '', password: '' });
        setErrors({});
      } else {
        setErrors({ api: data.message || 'Registration failed!' });
      }
    })
    
    .catch((error) => {
      console.error('Error:', error);
      setLoading(false);
      setErrors({ api: 'Network error. Please try again later.' });
    });
};

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="loginFormSection4 "
     onSubmit={handleSubmit}>
      <h2 className="formTitle">REGISTER</h2>

      {successMessage && <p className="succes">{successMessage}</p>}
      {errors.api && <p className="error">{errors.api}</p>}

      <div className="inputGroup4">
        <label htmlFor="email" className="nameinputLabel ">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="nameinputField"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      
      
      <div className="inputGroup4">
        <label htmlFor="name" className="nameinputLabel ">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="nameinputField"
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

       <div className="inputGroup4">
        <label htmlFor="password" className="nameinputLabel ">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="nameinputField"
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button type="submit" className="signupButton " disabled={loading} >
        {loading ? 'Submitting...' : 'SignUp'}
      </button>
    </form>
  );
}

export default Signup;   