import React, { useState } from "react";
import "./index.css";

function ToggleSwitch({ onChange, defaultSelect = false }) {
  const [isChecked, setChecked] = useState(defaultSelect);

  const handleToggle = () => {
    setChecked(!isChecked);
    onChange(isChecked);
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className="slider"></span>
    </label>
  );
}

export default ToggleSwitch;
