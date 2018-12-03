import React from "react";
import OperationButton from "./OperationButton";

import "./NumberPad.css";

const NumberPad = ({ handleOperation }) => (
  <div className="number-pad">
    <div className="number-pad-row">
      <OperationButton value={1} handleOperation={handleOperation} />
      <OperationButton value={2} handleOperation={handleOperation} />
      <OperationButton value={3} handleOperation={handleOperation} />
    </div>
    <div className="number-pad-row">
      <OperationButton value={4} handleOperation={handleOperation} />
      <OperationButton value={5} handleOperation={handleOperation} />
      <OperationButton value={6} handleOperation={handleOperation} />
    </div>
    <div className="number-pad-row">
      <OperationButton value={7} handleOperation={handleOperation} />
      <OperationButton value={8} handleOperation={handleOperation} />
      <OperationButton value={9} handleOperation={handleOperation} />
    </div>
    <div className="number-pad-row">
      <OperationButton value={0} handleOperation={handleOperation} />
    </div>
  </div>
);

export default NumberPad;
