import React, { useState } from 'react';
import './App.css';
import Characters from './components/Characters';
import NavBar from './components/NavBar';
import LoginModal from './components/LoginModal';
import AuthService from './components/AuthService';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(!AuthService.isAuthenticated);

  const handleLogout = () => {
    AuthService.logout();
    setShowLoginModal(true);
  };

  const handleLoginClose = () => {
    setShowLoginModal(false);
  };

  return (
    <div className="App">
      <NavBar onLogout={handleLogout} />
      {showLoginModal && <LoginModal onClose={handleLoginClose} />}
      {AuthService.isAuthenticated && <Characters />}
    </div>
  );
}

export default App;