import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here (e.g., API call)
    console.log('Login attempt', { emailOrPhone, password });

    // Redirect to another page after successful login
    navigate('/');
  };

  return (
    <>
    
      <div className="login-container">
        <div className="login-logo">
          <img src="/ERPT logo.png" alt="Logo" />
        </div>
        <h2>Sign in to eRPT-Unisan</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email/Phone no.:</label>
            <input
              type="text"
              placeholder="Email / Phone No."
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <div className="login-button-container">
            <button type="submit" className="login-button">Login</button>
          </div>
        </form>
        <div className="signup-link">
          <p>Verify your email/mobile no. <a href="/auth/register">Sign up</a></p>
        </div>
      </div>
    </>
  );
}

export default Login;
