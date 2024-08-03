import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Overview from "./pages/Overview";
import Payments from "./pages/Payments";
import Account from "./pages/Account";

const App = () => {
  const location = useLocation();
  
  // Define paths where the Sidebar should not be displayed
  const authPaths = ["/auth/login", "/auth/register"];

  return (
    <div className="App">
      {!authPaths.includes(location.pathname) && <Sidebar />}
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/" element={<Overview />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/account" element={<Account />} />
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
