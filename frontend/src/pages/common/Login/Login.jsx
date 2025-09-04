import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your actual authentication logic
    if (!emailOrPhone || !password) {
      setError("Please enter both email/phone and password.");
      return;
    }
    setError("");
    // Call your login function here
    if (onLogin) onLogin(emailOrPhone, password);
  };

  return (
    <div className="login-container">
      <h2>CivicConnect Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Email or Phone
          <input
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            placeholder="Enter your email or phone"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </label>
        {error && <div className="login-error">{error}</div>}
        <button type="submit" className="login-btn">Login</button>
        <div className="login-links">
          <a href="/register">Register as Citizen</a>
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;