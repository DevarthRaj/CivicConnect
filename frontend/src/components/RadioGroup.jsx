import React from "react";
import "./RadioGroup.css";

const RadioGroup = ({ options, name, value, onChange, className = "" }) => (
  <div className={`custom-radio-group ${className}`}>
    {options.map((opt) => (
      <label key={opt.value} className="custom-radio-label">
        <input
          type="radio"
          name={name}
          value={opt.value}
          checked={value === opt.value}
          onChange={onChange}
          className="custom-radio"
        />
        <span className="custom-radio-text">{opt.label}</span>
      </label>
    ))}
  </div>
);

export default RadioGroup;