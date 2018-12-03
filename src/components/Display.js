import React from "react";
import "./Display.css";

const Display = ({ value }) => (
  <div className="result-display">
    <h2>{value}</h2>
  </div>
);
export default Display;
