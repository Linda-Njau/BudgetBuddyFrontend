import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { postData } from './httpService';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                email: email,
                password: password,
                username: username,
            };
            const response = await postData('/users', payload);
            console.log('User Creation Response:', response);
          } catch (error) {
             console.error('User Creation Error:', error);
             if (error.response?.data?.error) {
               const errorData = error.response.data.error;
               const errorMessages = errorData.split(';').map(msg => msg.trim());
             console.log('this is the error data', errorData);
             console.log('this are the error messages', errorMessages);
             
             setPasswordError('');
             setUsernameError('');
             setEmailError('');
             
             if (errorMessages.includes('Password must be at least 8 characters long')) {
                 setPasswordError('Password must be at least 8 characters long');
             } if (errorMessages.includes('Username already in use')) {
                 setUsernameError('Username already in use.');
             } if (errorMessages.includes('Email address already in use')) {
                 setEmailError('Email already in use.');
             }
           
         }
     
   }
};
return (
  <div className="form-container">
<form className="form-box" onSubmit={handleSubmit}>
  <label className="form-label">
    Email:
    <input 
      className="form-input"
      type="email" 
      value={email} 
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <span className="error-message">{emailError}</span>
  </label>
  <label className="form-label">
    Username:
    <input 
      className="form-input"
      type="text" 
      value={username} 
      onChange={(e) => setUsername(e.target.value)}
      required
    />
     <span className="error-message">{usernameError}</span>
  </label>
  <label className="form-label">
    Password:
    <input 
      className="form-input"
      type="password" 
      value={password} 
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <span className="error-message">{passwordError}</span>
  </label>
  <button className="form-button" type="submit">Create Account</button>
  
  <p className="signup-link">
      already have an account? <Link to="/Login">Login</Link>
    </p>
</form>
</div>
);
};
export default SignUp;
