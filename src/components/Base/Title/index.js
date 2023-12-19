import React from "react";
import "./index.css";

function Title({ children, className }) {
  return <p className={`${className} title`}>{children}</p>;
}

export default Title;
