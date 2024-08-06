import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const navigate = useNavigate();

  const handleSendOTP = (e) => {
    e.preventDefault();
    // Implement OTP sending logic here
    // Example: sendOTP(emailOrPhone);
    navigate('/auth/verify-otp', { state: { emailOrPhone } });
  };

  return (
    <>
      <div className="forgot-password-container">
        <div className="forgot-password-logo">
          <img src="/ERPT logo.png" alt="Logo" />
        </div>
        <h2>Forgot Password</h2>
        <p>Please enter your email or phone number to receive a verification code.</p>
        <form onSubmit={handleSendOTP}>
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
          <div className="forgot-password-button-container">
            <button type="submit" className="forgot-password-button">Send OTP</button>
          </div>
        </form>
        <div className="back-to-login-link">
          <p>Remembered your password? <a href="/auth/login">Sign in</a></p>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
