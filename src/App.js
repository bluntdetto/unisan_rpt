import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Arptc from "./pages/employee/Arptc";
import UserManagement from "./pages/employee/UserManagement";
import Overview from "./pages/Overview";
import Payments from "./pages/Payments";
import Account from "./pages/Account";
import EmployeeSidebar from "./components/EmployeeSidebar";
import EmployeeManagement from "./pages/admin/EmployeeManagement";

const App = () => {
  const location = useLocation();

  // Paths where each component should be displayed
  const employeeSidebarPaths = ["/arptc", "/users", "/employees"];
  const navbarPaths = [
    "/auth/login",
    "/auth/register",
    "/auth/forgot-password",
  ];
  const sidebarPaths = ["/", "/payments", "/account"];

  return (
    <div className="App">
      {employeeSidebarPaths.includes(location.pathname) && (
        <div className="d-flex">
          <EmployeeSidebar />
          <div className="flex-grow-1">
            <Routes>
              <Route path="/arptc" element={<Arptc />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/employees" element={<EmployeeManagement />} />
            </Routes>
          </div>
        </div>
      )}

      {navbarPaths.includes(location.pathname) && <Navbar />}
      {sidebarPaths.includes(location.pathname) && (
        <div className="d-flex">
          <Sidebar />
          <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </div>
        </div>
      )}

      {/* Add a fallback route for undefined paths if needed */}
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
