import React from "react";
import "./Input.css";

const Input = ({ type = "text", value, onChange, placeholder, className = "", ...props }) => (
  <input
    className={`custom-input ${className}`}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    {...props}
  />
);

export default Input;