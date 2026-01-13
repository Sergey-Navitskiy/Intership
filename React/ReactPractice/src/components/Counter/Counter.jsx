import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const incrementClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementClick = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <p>Value: {count}</p>
      <button onClick={incrementClick}>+</button>
      <button onClick={decrementClick}>-</button>
    </div>
  );
}
