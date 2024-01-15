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
            if (error.response?.data?.message) {
              const errorMessage = error.response.data.message;
              if (errorMessage.includes('password')) {
                  setPasswordError('Password is too short!');
              } else if (errorMessage.includes('username')) {
                  setUsernameError('Username already exists. Please choose another.');
              } else if (errorMessage.includes('email')) {
                  setEmailError('Email already exists. Please use a different email.');
              }
          } 
          setPasswordError('');
          setUsernameError('');
          setEmailError('');
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
