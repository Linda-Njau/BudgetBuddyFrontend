import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { postData } from './httpService';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import './FormStyles.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const[loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = { username, password };
            const response = await postData('/login', payload);
            localStorage.setItem('token', response.access_token);
            localStorage.setItem('user_id', response.user_id);

            window.dispatchEvent(new Event('storage'));
            
            navigate('/PaymentEntry');
        } catch (error) {
            setLoginError('Invalid username or password. please try again');
        }
    };
    return (
      <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <label className="form-label">
          Username:
          <input 
            className="form-input"
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="form-label">
          Password:
          <input 
            className="form-input"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="form-button" type="submit">Login</button>
        {loginError && <p className="error-message">{loginError}</p>}
        <p className="signup-link">
        No account? <Link to="/signUp">Sign up</Link>
      </p>
      </form>
    </div>    
    );
  };
  
export default Login;
