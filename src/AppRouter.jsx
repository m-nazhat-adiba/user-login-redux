import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
