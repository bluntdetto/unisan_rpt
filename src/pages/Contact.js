import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-item">
          <label>Email:</label>
          <p>contact@example.com</p>
        </div>
        <div className="contact-item">
          <label>Contact Number:</label>
          <p>+123 456 7890</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
