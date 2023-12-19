import React from "react";
import "./index.css";

function Button({ children, className, ...props }) {
  return (
    <button className={`${className} button`} {...props}>
      {children}
    </button>
  );
}

export default Button;
