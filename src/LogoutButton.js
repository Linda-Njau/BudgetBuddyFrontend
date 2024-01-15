import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({setToken, setUserId}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');

    setToken(null);
    setUserId(null);
    navigate('/');
  };

  return (
    <button className="button_login" onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
