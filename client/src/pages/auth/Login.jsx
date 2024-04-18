// AuthPage.jsx

import React, { useState } from 'react';
import './login.css'

export const AuthPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username or Email:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {/* Optional: Uncomment below for "Forgot Password" link */}
        {/* <a href="/forgot-password">Forgot Password?</a> */}
        {/* Optional: Uncomment below for "Sign Up" button */}
        {/* <button type="button" onClick={() => history.push('/signup')}>Sign Up</button> */}
      </form>
    </div>
  );
};

