import React from "react";

const OperationButton = ({ handleOperation, value }) => (
  <button className="button" onClick={() => handleOperation(value)}>
    {value}
  </button>
);
export default OperationButton;
