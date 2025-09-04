import React from "react";
import "./Button.css";

const Button = ({ children, onClick, type = "button", className = "" }) => (
  <button className={`custom-btn ${className}`} type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;