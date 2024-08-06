import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session data if needed (e.g., remove tokens)
    // localStorage.removeItem('userToken');
    // Redirect to the register page
    navigate("/auth/register");
  };

  return (
    <div className="bg col-auto col-md-2 min-vh-100 d-flex flex-column justify-content-between p-2">
      <div>
        <Link
          className="text-decoration-none text-dark d-flex align-items-center ms-3 mt-2"
          to="/"
        >
          <img
            src="/ERPT logo 1.png"
            alt="ERPT Unisan Logo"
            className="sidebar-logo d-none d-sm-block"
          />
        </Link>
        <hr className="text-secondary d-none d-sm-block" />
        <ul className="nav nav-pills flex-column mt-3">
          <li className="nav-item my-1">
            <Link
              to="/"
              className="nav-link text-dark fs-5 d-flex align-items-center"
              aria-current="page"
            >
              <i className="bi bi-columns-gap custom-icon "></i>
              <span className="ms-3 d-none d-sm-inline fs-6 ">Overview</span>
            </Link>
          </li>
          <li className="nav-item my-1">
            <Link
              to="/payments"
              className="nav-link text-dark fs-5 d-flex align-items-center"
              aria-current="page"
            >
              <i className="bi bi-credit-card custom-icon"></i>
              <span className="ms-3 d-none d-sm-inline fs-6">Payments</span>
            </Link>
          </li>
          <li className="nav-item my-1">
            <Link
              to="/account"
              className="nav-link text-dark fs-5 d-flex align-items-center"
              aria-current="page"
            >
              <i className="bi bi-person custom-icon"></i>
              <span className="ms-3 d-none d-sm-inline fs-6">Account</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="dropdown open p-3">
        <Link
          className="text-decoration-none text-dark dropdown-toggle d-flex align-items-center"
          to="#"
          role="button"
          id="triggerId"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="bi bi-person-circle"></i>
          <span className="ms-2 d-none d-sm-inline">Efraym John Valler</span>
        </Link>
        <div className="dropdown-menu" aria-labelledby="triggerId">
          <Link className="dropdown-item" to="/profile">
            Profile
          </Link>
          <Link className="dropdown-item" to="/logout">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
