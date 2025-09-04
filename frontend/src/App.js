import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/common/Home/Home";
import Login from "./pages/common/Login/Login";
import Register from "./pages/common/Register/Register";
import Profile from "./pages/common/Profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/register" element={<Register />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
