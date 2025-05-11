import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (role) => {
    navigate(`/${role}`);
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Choose your profile</h1>
        <div className="profile-buttons">
          <button 
            className="profile-btn user-btn"
            onClick={() => handleNavigation('user')}
          >
            User
          </button>
          <button 
            className="profile-btn verifier-btn"
            onClick={() => handleNavigation('verifier')}
          >
            Verifier
          </button>
          <button 
            className="profile-btn admin-btn"
            onClick={() => handleNavigation('admin')}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;