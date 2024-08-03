import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/auth/Login";
import Overview from "./pages/Overview";
import Payments from "./pages/Payments";
import Account from "./pages/Account";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/auth/login" element={<Login />} />

        <Route path="/overview" element={<Overview />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
