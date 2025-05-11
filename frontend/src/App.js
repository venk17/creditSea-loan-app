import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './components/Home/Home';
import UserDashboard from './components/UserDashboard/UserDashboard';
import VerifierDashboard from './components/VerifierDashboard/VerifierDashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import './styles.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/verifier" element={<VerifierDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;