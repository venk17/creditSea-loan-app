import React from 'react';
import { useAppDispatch } from '../../utils/hooks';
import change from '../../redux/slices/menuSlice';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isUser, isVerifier }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  let role;
  if (isUser) {
    role = "User";
  } else if (isVerifier) {
    role = "Verifier";
  } else {
    role = "Admin";
  }

  const handleMenu = () => {
    dispatch(change());
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <span className="app-name">CREDIT APP</span>
        {!isUser && (
          <button className="menu-toggle" onClick={handleMenu}>
            ☰
          </button>
        )}
        {isUser && (
          <div className="user-nav-icons">
            <button onClick={() => handleNavigation('/user')}>🏠</button>
            <button onClick={() => handleNavigation('/payments')}>💳</button>
            <button onClick={() => handleNavigation('/budget')}>📊</button>
            <button onClick={() => handleNavigation('/cards')}>💳</button>
          </div>
        )}
      </div>
      <div className="nav-right">
        <button className="nav-icon">🔔</button>
        <button className="nav-icon">✉️</button>
        <button className="nav-icon">👤</button>
        <span className="user-role">{role}</span>
        <button className="nav-icon">⚙️</button>
      </div>
    </div>
  );
};

export default Navbar;
