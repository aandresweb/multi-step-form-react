import React from "react";
import "./index.css";

function Input({ label, error, ...props }) {
  return (
    <div className={`inputWrapper ${error ? "hasError" : ""}`}>
      <div className="inputHeader">
        {label != "" ? <label className="label">{label}</label> : <></>}
        {error != "" ? (
          <label className="label errorLabel">{error}</label>
        ) : (
          <></>
        )}
      </div>
      <input {...props} className="input" />
    </div>
  );
}

export default Input;
