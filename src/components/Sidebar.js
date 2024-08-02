import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-light col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
          <div>
            <Link
              className="text-decoration-none text-dark d-none d-sm-inline d-flex align-items-center ms-3 mt-2"
              to="/"
            >
              <span className="ms-1 fs-4 d-none d-sm-inline">
                ERPT - UNISAN
              </span>
            </Link>
            <hr className="text-secondary d-none d-sm-block" />
            <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
              <li className="nav-item text-dark fs-4 my-1 py-2 py-sm-0">
                <Link
                  to="/overview"
                  className="nav-link text-dark fs-5 text-center text-sm-start"
                  aria-current="page"
                >
                  <i className="bi bi-columns-gap custom-icon"></i>
                  <span className="ms-3 d-none d-sm-inline fs-6">Overview</span>
                </Link>
              </li>
              <li className="nav-item text-dark fs-4 my-1 py-2 py-sm-0">
                <Link
                  to="/payments"
                  className="nav-link text-dark fs-5 text-center text-sm-start"
                  aria-current="page"
                >
                  <i className="bi bi-credit-card custom-icon"></i>
                  <span className="ms-3 d-none d-sm-inline fs-6">Payments</span>
                </Link>
              </li>
              <li className="nav-item text-dark fs-4 my-1 py-2 py-sm-0">
                <Link
                  to="/account"
                  className="nav-link text-dark fs-5 text-center text-sm-start"
                  aria-current="page"
                >
                  <i className="bi bi-person custom-icon"></i>
                  <span className="ms-3 d-none d-sm-inline fs-6">Account</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown open">
            <Link
              className="text-decoration-none text-dark dropdown-toggle p-3"
              to="#"
              role="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bi bi-person-circle"></i>{" "}
              <span className="ms-2 d-none d-sm-inline">
                Efraym John Valler
              </span>
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
      </div>
    </div>
  );
};

export default Sidebar;
