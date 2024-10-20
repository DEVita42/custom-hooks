import React from "react";
import UseCounter from "./UseCounter";

function Counter() {
  const { count, increment, decrement, reset } = UseCounter(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
