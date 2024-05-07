import React from 'react';
import './NavBar.scss';
import AuthService from './AuthService';

const NavBar = ({ onLogout }) => {
  const isAuthenticated = AuthService.isAuthenticated;

  return (
    <div className='navBar'>
      <div>Star Wars Characters</div>
      {/* Render data after login */}
      {isAuthenticated && <button onClick={onLogout} className='logout-button'>Logout</button>}
    </div>
  )
}

export default NavBar;