import { OPERATION_NAMES, FUNCTIONS, isValidOperation } from "./operations";

export default function calculate(input) {
  if (!isValidInput(input)) {
    return ["ERROR"];
  }

  if (input.length === 1) {
    return input;
  }

  const hasMultiplication = input.includes(OPERATION_NAMES.MULTIPLY);
  const hasDivision = input.includes(OPERATION_NAMES.DIVIDE);
  const hasMultiplicationOrDivision = hasMultiplication || hasDivision;

  if (hasMultiplicationOrDivision) {
    return calculate(doSingleMultiplicationOrDivisionOnFullArray(input));
  }

  // only addition and subtraction operations in array
  return calculate(doSingleAdditionOrSubtractionOnFullArray(input));
}

export function isValidInput(input) {
  const hasCorrectAmountOfOperands = input.length % 2 !== 0;
  const operandsAndOperationsAlternate = input.reduce((hasFailed, next, i) => {
    if (hasFailed) {
      return hasFailed;
    }

    if (i % 2 === 0) {
      return typeof next === "number";
    } else {
      return isValidOperation(next);
    }
  }, false);

  return hasCorrectAmountOfOperands && operandsAndOperationsAlternate;
}

export function doSingleMultiplicationOrDivisionOnFullArray(input) {
  const firstIndexOfMultiplicationOrDivision = getIndexOfFirstMultiplicationOrDivision(
    input
  );

  return doSingleOperationOnFullArray(
    input,
    firstIndexOfMultiplicationOrDivision
  );
}

export function doSingleAdditionOrSubtractionOnFullArray(input) {
  // input has form [1, "+", 5, ...]
  return doSingleOperationOnFullArray(input, 1);
}

export function doSingleOperationOnFullArray(input, indexOfOperation) {
  const isOperation = isValidOperation(input[indexOfOperation]);
  if (!isOperation) {
    throw new Error("input[index] is not a valid operation");
  }

  const endOfFirstHalf = indexOfOperation - 1;
  const startOfSecondHalf = indexOfOperation + 2;

  const firstHalf = input.slice(0, endOfFirstHalf);
  const operation = input.slice(endOfFirstHalf, startOfSecondHalf);
  const secondHalf = input.slice(startOfSecondHalf);

  const resultOfOperation = simpleCalculationOnSubarray(operation);
  return [...firstHalf, resultOfOperation, ...secondHalf];
}

// when this function is called we can be sure
// that there is a multiplication / division because it is checked before
export function getIndexOfFirstMultiplicationOrDivision(input) {
  const multiplicationIndex = input.indexOf(OPERATION_NAMES.MULTIPLY);
  const divisionIndex = input.indexOf(OPERATION_NAMES.DIVIDE);

  if (multiplicationIndex !== -1 && divisionIndex !== -1) {
    return Math.min(multiplicationIndex, divisionIndex);
  }

  // one or both are -1, therefore the other index is the first "real" index
  return Math.max(multiplicationIndex, divisionIndex);
}

export function simpleCalculationOnSubarray(input) {
  if (input.length !== 3) {
    throw new Error("input has to have length of 3");
  }

  const [first, operationName, second] = input;
  return FUNCTIONS[operationName](first, second);
}
