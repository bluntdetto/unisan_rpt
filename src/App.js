import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Overview from "./pages/Overview";
import Payments from "./pages/Payments";
import Account from "./pages/Account";

const App = () => {
  const location = useLocation();

  // Define paths where the Sidebar should not be displayed
  const authPaths = ["/auth/login", "/auth/register"];
  // Define paths where the Navbar should not be displayed
  const noNavbarPaths = ["/", "/payments", "/account"];

  return (
    <div className="App">
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      {authPaths.includes(location.pathname) ? (
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      ) : (
        <div className="d-flex">
          <Sidebar />
          <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/account" element={<Account />} />
              <Route path="/auth/register" element={<Register />} />
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
