import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <img
        src="/ERPT logo 1.png"
        alt="ERPT Unisan Logo"
        className="navbar-logo"
      />
      <button className="contact-button" onClick={() => navigate("/contact")}>
        <img
          src="/contact-icon.png"
          alt="Contact Icon"
          className="contact-icon"
        />
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
