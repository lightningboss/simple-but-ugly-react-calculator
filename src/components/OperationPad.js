import React from "react";
import { OPERATION_NAMES } from "../lib/operations";

import OperationButton from "./OperationButton";
import "./OperationPad.css";

const OperationPad = ({
  handleOperation,
  handleCalculateResult,
  handleReset
}) => (
  <div className="operation-pad">
    <OperationButton
      handleOperation={handleOperation}
      value={OPERATION_NAMES.ADD}
    />
    <OperationButton
      handleOperation={handleOperation}
      value={OPERATION_NAMES.SUBTRACT}
    />
    <OperationButton
      handleOperation={handleOperation}
      value={OPERATION_NAMES.MULTIPLY}
    />
    <OperationButton
      handleOperation={handleOperation}
      value={OPERATION_NAMES.DIVIDE}
    />
    <div>
      <OperationButton handleOperation={handleReset} value="RESET" />
      <OperationButton
        handleOperation={handleCalculateResult}
        value="CALCULATE RESULT"
      />
    </div>
  </div>
);

export default OperationPad;
