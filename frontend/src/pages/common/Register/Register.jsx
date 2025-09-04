import React, { useState } from "react";
import "./Register.css";

const Register = ({ onRegister }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    // Call your registration logic here
    if (onRegister) onRegister(form);
  };

  return (
    <div className="register-container">
      <h2>Citizen Registration</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </label>
        <label>
          Address
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
        </label>
        {error && <div className="register-error">{error}</div>}
        <button type="submit" className="register-btn">Register</button>
        <div className="register-links">
          <a href="/login">Already have an account? Login</a>
        </div>
      </form>
    </div>
  );
};

export default Register;