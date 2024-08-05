import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSendOTP = (e) => {
    e.preventDefault();
    // Implement OTP sending logic here
    // Example: sendOTP(email);
    navigate('/auth/verify-otp', { state: { email } });
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-header">
          <img src="/ERPT logo.png" alt="ERPT Unisan Logo" className="logo" />
        </div>
        <h2>Verify your Email / Mobile no.</h2>
        <form className="signup-form" onSubmit={handleSendOTP}>
          <div className="input-container">
            <h6>Email / Phone No.:</h6>
            <input 
              type="email" 
              placeholder="Email / Phone No." 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <button type="submit">Send OTP</button>
        </form>
        <p>
          Already have an account? <a href="/auth/login">Sign in</a>
        </p>
      </div>
    </>
  );
};

export default Register;
