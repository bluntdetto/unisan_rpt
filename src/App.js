import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Overview from "./pages/Overview";
import Payments from "./pages/Payments";
import Account from "./pages/Account";
import Contact from "./pages/Contact";

const App = () => {
  const location = useLocation();

  // Define paths where the Sidebar should not be displayed
  const noSidebarPaths = ["/auth/login", "/auth/register", "/auth/forgot-password", "/contact"];
  // Define paths where the Navbar should not be displayed
  const noNavbarPaths = ["/", "/payments", "/account"];

  return (
    <div className="App">
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      {noSidebarPaths.includes(location.pathname) ? (
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      ) : (
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
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
