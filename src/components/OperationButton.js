import React from "react";
import "./OperationButton.css";

const OperationButton = ({ handleOperation, value }) => (
  <button className="operation-button" onClick={() => handleOperation(value)}>
    {value}
  </button>
);
export default OperationButton;
