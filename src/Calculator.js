import React, { Component } from "react";

import { OPERATION_SYMBOLS, isValidOperation } from "./lib/operations";
import newArrayAfterOperation from "./lib/newArrayAfterOperation";
import calculate from "./lib/calculate";

import Display from "./components/Display";
import NumberPad from "./components/NumberPad";
import OperationPad from "./components/OperationPad";

import "./Calculator.css";

const defaultState = {
  operations: []
};

export default class Calculator extends Component {
  state = defaultState;

  handleOperation = nextOperation => {
    this.setState(({ operations }) => ({
      operations: newArrayAfterOperation(operations, nextOperation)
    }));
  };

  handleCalculateResult = () => {
    this.setState(({ operations }) => ({ operations: calculate(operations) }));
  };

  handleReset = () => {
    this.setState(() => ({ ...defaultState }));
  };

  render() {
    const { operations = [] } = this.state;
    const displayString = operations
      .map(op => (isValidOperation(op) ? OPERATION_SYMBOLS[op] : op))
      .join(" ");

    return (
      <div className="calculator">
        <Display value={displayString} />
        <div className="operations-wrapper">
          <NumberPad handleOperation={this.handleOperation} />
          <OperationPad
            handleOperation={this.handleOperation}
            handleCalculateResult={this.handleCalculateResult}
            handleReset={this.handleReset}
          />
        </div>
      </div>
    );
  }
}
