import React from 'react';

export default function Counter({ count, setCount, handleAdd }) {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <button onClick={() => setCount(c => Math.max(0, c - 1))}>-</button>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
