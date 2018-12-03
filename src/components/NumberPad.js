import React from "react";

const NumberPad = ({ handleOperation }) => (
  <div>
    <button onClick={() => handleOperation(0)}>0</button>
    <button onClick={() => handleOperation(1)}>1</button>
    <button onClick={() => handleOperation(2)}>2</button>
    <button onClick={() => handleOperation(3)}>3</button>
    <button onClick={() => handleOperation(4)}>4</button>
    <button onClick={() => handleOperation(5)}>5</button>
    <button onClick={() => handleOperation(6)}>6</button>
    <button onClick={() => handleOperation(7)}>7</button>
    <button onClick={() => handleOperation(8)}>8</button>
    <button onClick={() => handleOperation(9)}>9</button>
  </div>
);

export default NumberPad;
