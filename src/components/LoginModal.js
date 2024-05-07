import React, { useState } from 'react';
import AuthService from './AuthService';
import './LoginModal.scss';

const LoginModal = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');
    const success = await AuthService.login(username, password);
    if (success) {
      onClose();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="modal login-modal">
      <div className="modal-content">
        <h2>Login</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default LoginModal;
