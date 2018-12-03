import React from "react";
import { OPERATION_NAMES } from "../lib/operations";

const OperationPad = ({
  handleOperation,
  handleCalculateResult,
  handleReset
}) => (
  <div>
    <button onClick={() => handleOperation(OPERATION_NAMES.ADD)}>ADD</button>
    <button onClick={() => handleOperation(OPERATION_NAMES.SUBTRACT)}>
      SUBTRACT
    </button>
    <button onClick={() => handleOperation(OPERATION_NAMES.MULTIPLY)}>
      MULTIPLY
    </button>
    <button onClick={() => handleOperation(OPERATION_NAMES.DIVIDE)}>
      DIVIDE
    </button>
    <button onClick={() => handleCalculateResult()}>CALCULATE RESULT</button>
    <button onClick={() => handleReset()}>RESET</button>
  </div>
);

export default OperationPad;
