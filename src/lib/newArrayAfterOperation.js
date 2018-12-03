import { isValidOperation } from "./operations";

// TODO add support for decimal numbers

export default function newArrayAfterOperation(input, operation) {
  const oldArray = input.slice(0, input.length - 1);
  const lastElement = input[input.length - 1];

  if (isValidOperation(operation)) {
    if (isValidOperation(lastElement)) {
      return [...oldArray, operation];
    }

    return [...oldArray, lastElement, operation];
  }

  if (typeof operation === "number") {
    if (typeof lastElement === "number") {
      const newLastElement = lastElement * 10 + operation;
      return [...oldArray, newLastElement];
    }

    if (isValidOperation(lastElement)) {
      return [...oldArray, lastElement, operation];
    }
  }

  return ["SHOULD NOT REACH"];

  // cases
  // operation oneof add, mu, sub, div
  //  check that lastElement is not an operation
  // operation === '.'
  //  if lastElement is number add decimal point
  // operation is number
  //  if lastElement is a number append operation
  //  if lastElement is an operation add number to array
}
