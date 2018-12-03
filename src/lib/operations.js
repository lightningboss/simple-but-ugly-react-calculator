function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

export const OPERATION_NAMES = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
  MULTIPLY: "MULTIPLY",
  DIVIDE: "DIVIDE"
};

export const OPERATION_SYMBOLS = {
  ADD: "+",
  SUBTRACT: "-",
  MULTIPLY: "*",
  DIVIDE: "/"
};

export const FUNCTIONS = {
  ADD: add,
  SUBTRACT: subtract,
  MULTIPLY: multiply,
  DIVIDE: divide
};

export function isValidOperation(operation) {
  return Object.values(OPERATION_NAMES).includes(operation);
}
