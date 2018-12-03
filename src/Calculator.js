import React, { Component } from "react";

import {
  OPERATION_NAMES,
  OPERATION_SYMBOLS,
  isValidOperation
} from "./lib/operations";
import newArrayAfterOperation from "./lib/newArrayAfterOperation";
import calculate from "./lib/calculate";

export default class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      operations: []
    };
  }

  handleOperation = nextOperation => {
    this.setState(({ operations }) => ({
      operations: newArrayAfterOperation(operations, nextOperation)
    }));
  };

  calculateResult = () => {
    this.setState(({ operations }) => ({ operations: calculate(operations) }));
  };

  reset = () => {
    this.setState(() => ({ operations: [] }));
  };

  render() {
    const { operations = [] } = this.state;
    const displayString = operations
      .map(op => (isValidOperation(op) ? OPERATION_SYMBOLS[op] : op))
      .join(" ");

    return (
      <>
        <h1>Calculator</h1>
        <h2>{displayString}</h2>
        <div>
          <button onClick={() => this.handleOperation(OPERATION_NAMES.ADD)}>
            ADD
          </button>
          <button
            onClick={() => this.handleOperation(OPERATION_NAMES.SUBTRACT)}
          >
            SUBTRACT
          </button>
          <button
            onClick={() => this.handleOperation(OPERATION_NAMES.MULTIPLY)}
          >
            MULTIPLY
          </button>
          <button onClick={() => this.handleOperation(OPERATION_NAMES.DIVIDE)}>
            DIVIDE
          </button>
          <button onClick={() => this.calculateResult()}>
            CALCULATE RESULT
          </button>
          <button onClick={() => this.reset()}>RESET</button>
        </div>

        <div>
          <button onClick={() => this.handleOperation(0)}>0</button>
          <button onClick={() => this.handleOperation(1)}>1</button>
          <button onClick={() => this.handleOperation(2)}>2</button>
          <button onClick={() => this.handleOperation(3)}>3</button>
          <button onClick={() => this.handleOperation(4)}>4</button>
          <button onClick={() => this.handleOperation(5)}>5</button>
          <button onClick={() => this.handleOperation(6)}>6</button>
          <button onClick={() => this.handleOperation(7)}>7</button>
          <button onClick={() => this.handleOperation(8)}>8</button>
          <button onClick={() => this.handleOperation(9)}>9</button>
        </div>
      </>
    );
  }
}
