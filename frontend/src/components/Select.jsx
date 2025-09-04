import React from "react";
import "./Select.css";

const Select = ({ options, value, onChange, className = "", ...props }) => (
  <select
    className={`custom-select ${className}`}
    value={value}
    onChange={onChange}
    {...props}
  >
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);

export default Select;