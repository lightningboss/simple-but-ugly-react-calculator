import React, { Component } from "react";

import { OPERATION_SYMBOLS, isValidOperation } from "./lib/operations";
import newArrayAfterOperation from "./lib/newArrayAfterOperation";
import calculate from "./lib/calculate";

import Header from "./components/Header";
import Display from "./components/Display";
import NumberPad from "./components/NumberPad";
import OperationPad from "./components/OperationPad";

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
      <>
        <Header />
        <Display value={displayString} />
        <OperationPad
          handleOperation={this.handleOperation}
          handleCalculateResult={this.handleCalculateResult}
          handleReset={this.handleReset}
        />
        <NumberPad handleOperation={this.handleOperation} />
      </>
    );
  }
}
