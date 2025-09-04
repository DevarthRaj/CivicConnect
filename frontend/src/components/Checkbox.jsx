import React from "react";
import "./Checkbox.css";

const Checkbox = ({ checked, onChange, label, className = "", ...props }) => (
  <label className={`custom-checkbox-label ${className}`}>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="custom-checkbox"
      {...props}
    />
    <span className="custom-checkbox-text">{label}</span>
  </label>
);

export default Checkbox;