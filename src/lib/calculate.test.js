import { OPERATION_NAMES } from "./operations";

import calculate, {
  isValidInput,
  simpleCalculationOnSubarray,
  getIndexOfFirstMultiplicationOrDivision,
  doSingleOperationOnFullArray,
  doSingleAdditionOrSubtractionOnFullArray,
  doSingleMultiplicationOrDivisionOnFullArray
} from "./calculate";

const { ADD, SUBTRACT, MULTIPLY, DIVIDE } = OPERATION_NAMES;

describe("calculate(input)", () => {
  it("returns the correct result", () => {
    const testArray = [100, ADD, 5, SUBTRACT, 2, MULTIPLY, 5];
    expect(calculate(testArray)).toEqual([95]);
  });

  it("returns the first element when input length is 1", () => {
    const testArray = [100];
    expect(calculate(testArray)).toEqual([100]);
  });

  it("returns 'ERROR' if input length is divisible by 2", () => {
    const testArray1 = [];
    const testArray2 = [100, ADD];
    const testArray3 = [100, ADD, 5, SUBTRACT];
    expect(calculate(testArray1)).toEqual(["ERROR"]);
    expect(calculate(testArray2)).toEqual(["ERROR"]);
    expect(calculate(testArray3)).toEqual(["ERROR"]);
  });
});

describe("isValidInput(input)", () => {
  it("returns true for correct input", () => {
    const testArray = [100, ADD, 5, SUBTRACT, 2, MULTIPLY, 5];
    expect(isValidInput(testArray)).toBe(true);
  });

  it("returns true for input of length 1", () => {
    const testArray = [100];
    expect(isValidInput(testArray)).toBe(true);
  });

  it("returns true for input of length 3", () => {
    const testArray = [100, MULTIPLY, 5];
    expect(isValidInput(testArray)).toBe(true);
  });

  it("returns false for input of length 0", () => {
    const testArray = [];
    expect(isValidInput(testArray)).toBe(false);
  });

  it("returns false for input of length 2", () => {
    const testArray = [100, ADD];
    expect(isValidInput(testArray)).toBe(false);
  });

  it("returns false for input where two numbers follow each other", () => {
    const testArray = [100, 50, ADD, 20];
    expect(isValidInput(testArray)).toBe(false);
  });

  it("returns false for input where two operands follow each other", () => {
    const testArray = [100, SUBTRACT, ADD, 20];
    expect(isValidInput(testArray)).toBe(false);
  });

  it("returns false for input that starts with operand", () => {
    const testArray = [SUBTRACT, 50, ADD, 20];
    expect(isValidInput(testArray)).toBe(false);
  });

  it("returns false for input that ends with operand", () => {
    const testArray = [100, SUBTRACT, 50, ADD, 20, DIVIDE];
    expect(isValidInput(testArray)).toBe(false);
  });
});

describe("doSingleMultiplicationOrDivisionOnFullArray(input)", () => {
  it("returns an array with correct result instead of first multiplication", () => {
    const testArray = [100, ADD, 5, SUBTRACT, 20, MULTIPLY, 5];
    expect(doSingleMultiplicationOrDivisionOnFullArray(testArray)).toEqual([
      100,
      ADD,
      5,
      SUBTRACT,
      100
    ]);
  });

  it("returns an array with correct result instead of first division", () => {
    const testArray = [100, ADD, 5, SUBTRACT, 20, DIVIDE, 5];
    expect(doSingleMultiplicationOrDivisionOnFullArray(testArray)).toEqual([
      100,
      ADD,
      5,
      SUBTRACT,
      4
    ]);
  });
});

describe("doSingleAdditionOrSubtractionOnFullArray(input)", () => {
  it("returns an array with correct result instead of addition", () => {
    const testArray = [100, ADD, 5, SUBTRACT, 20];
    expect(doSingleAdditionOrSubtractionOnFullArray(testArray)).toEqual([
      105,
      SUBTRACT,
      20
    ]);
  });

  it("returns an array with correct result instead of subtraction", () => {
    const testArray = [100, SUBTRACT, 5, ADD, 20];
    expect(doSingleAdditionOrSubtractionOnFullArray(testArray)).toEqual([
      95,
      ADD,
      20
    ]);
  });
});

describe("doSingleOperationOnFullArray(input, indexOfOperation)", () => {
  it("returns a new array with the correct result instead of the operation", () => {
    const testArray = [100, ADD, 5, SUBTRACT, 2, MULTIPLY, 5];
    expect(doSingleOperationOnFullArray(testArray, 1)).toEqual([
      105,
      SUBTRACT,
      2,
      MULTIPLY,
      5
    ]);
    expect(doSingleOperationOnFullArray(testArray, 3)).toEqual([
      100,
      ADD,
      3,
      MULTIPLY,
      5
    ]);
    expect(doSingleOperationOnFullArray(testArray, 5)).toEqual([
      100,
      ADD,
      5,
      SUBTRACT,
      10
    ]);
  });

  it("throws when an invalid index is being passed", () => {
    const testArray = [100, ADD, 5, SUBTRACT, 2, MULTIPLY, 5];

    expect(() => doSingleOperationOnFullArray(testArray, 0)).toThrow();
    expect(() => doSingleOperationOnFullArray(testArray, 2)).toThrow();
    expect(() => doSingleOperationOnFullArray(testArray, 6)).toThrow();
  });
});

describe("getIndexOfFirstMultiplicationOrDivision(input)", () => {
  it("finds a multiplication", () => {
    const testArray = [100, ADD, 5, MULTIPLY, 2];
    expect(getIndexOfFirstMultiplicationOrDivision(testArray)).toBe(3);
  });

  it("finds a division", () => {
    const testArray = [100, ADD, 5, DIVIDE, 2];
    expect(getIndexOfFirstMultiplicationOrDivision(testArray)).toBe(3);
  });

  it("finds the first multiplication", () => {
    const testArray = [100, ADD, 5, MULTIPLY, 2, MULTIPLY, 5];
    expect(getIndexOfFirstMultiplicationOrDivision(testArray)).toBe(3);
  });

  it("returns -1 if no multiplication or division was found", () => {
    const testArray = [100, ADD, 5, SUBTRACT, 2, ADD, 5];
    expect(getIndexOfFirstMultiplicationOrDivision(testArray)).toBe(-1);
  });
});

describe("simpleCalculationOnSubarray(input)", () => {
  describe("addition", () => {
    it("happy path", () => {
      const testArray = [1, ADD, 2];
      expect(simpleCalculationOnSubarray(testArray)).toBe(3);
    });

    it("negative numbers", () => {
      const testArray = [-10, ADD, 5];
      expect(simpleCalculationOnSubarray(testArray)).toBe(-5);
    });

    it("decimal numbers", () => {
      const testArray = [1, ADD, 2.5];
      expect(simpleCalculationOnSubarray(testArray)).toBe(3.5);
    });
  });

  describe("subtraction", () => {
    it("happy path", () => {
      const testArray = [100, SUBTRACT, 50];
      expect(simpleCalculationOnSubarray(testArray)).toBe(50);
    });

    it("negative numbers", () => {
      const testArray = [-10, SUBTRACT, -5];
      expect(simpleCalculationOnSubarray(testArray)).toBe(-5);
    });

    it("decimal numbers", () => {
      const testArray = [10, SUBTRACT, 2.5];
      expect(simpleCalculationOnSubarray(testArray)).toBe(7.5);
    });
  });

  describe("multiplication", () => {
    it("happy path", () => {
      const testArray = [10, MULTIPLY, 5];
      expect(simpleCalculationOnSubarray(testArray)).toBe(50);
    });

    it("negative numbers", () => {
      const testArray = [-10, MULTIPLY, 5];
      expect(simpleCalculationOnSubarray(testArray)).toBe(-50);
    });

    it("decimal numbers", () => {
      const testArray = [10, MULTIPLY, 2.5];
      expect(simpleCalculationOnSubarray(testArray)).toBe(25);
    });
  });

  describe("division", () => {
    it("happy path", () => {
      const testArray = [100, DIVIDE, 2];
      expect(simpleCalculationOnSubarray(testArray)).toBe(50);
    });

    it("negative numbers", () => {
      const testArray = [-100, DIVIDE, 2];
      expect(simpleCalculationOnSubarray(testArray)).toBe(-50);
    });

    it("decimal numbers", () => {
      const testArray = [10, DIVIDE, 2.5];
      expect(simpleCalculationOnSubarray(testArray)).toBe(4);
    });
  });
});
