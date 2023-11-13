import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaymentEntry from './PaymentEntry';
import PaymentEntriesList from './PaymentEntriesList';
import SignUp from './SignUp';
import Login from './Login';
import LogoutButton from './LogoutButton';
import './styles.css';
import HomePage from './HomePage';
import './HomePage.css';
import logoImage from './assets/logo.png';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userId, setUserId] = useState(localStorage.getItem('user_id'));  

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem('token'));
      setUserId(localStorage.getItem('user_id'));
    };

    // Listen to storage events
    window.addEventListener('storage', handleStorageChange);

    return () => {
      // Clean up the event listener
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Router>
      <div id="app-container">
        <nav className="navbar">
          <div className="navbar__logo">
          <img src={logoImage} alt="Budget Buddy Logo" />
          </div>
          { token ? (
            // If user is authenticated
            <>
              <LogoutButton setToken={setToken} setUserId={setUserId}/>
              <Link to="/PaymentEntry">
                <button>Payment Entries</button>
              </Link>
              <Link to="/PaymentEntriesList">
                <button className='button_payments'>View Records</button>
              </Link>
            </>
          ) : (
            // If user is not authenticated
            <>
            <Link to="/PaymentEntry">
                <button className='button_payments'>Add Payment</button>
              </Link>
            <Link to="/PaymentEntriesList">
                <button className='button_payments'>View Records</button>
              </Link>
            <Link to ="/Login">
              <button className='button_login'>Join</button>
              </Link>
            </>
          )}
        </nav>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} index />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/PaymentEntry" element={<PaymentEntry userId={userId} />} />
            <Route path="/PaymentEntriesList" element={<PaymentEntriesList userId={userId} />} />
          </Routes>
        </div>
        <footer className="footer">
          &copy; Budget Buddy by <a href="https://github.com/Linda-Njau" className="github-link">Linda-Njau</a>
        </footer>
      </div>
    </Router>
  );  
}

export default App;
