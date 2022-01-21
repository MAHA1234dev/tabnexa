import React, { useState } from "react";

export default function Page1({ counter, onDelete }) {
  const [count, setCount] = useState(counter.value);

  const formCount = () => {
    return count === 0 ? "Zero" : count;
  };

  return (
    <div>
      <span>{formCount()}</span>
      <button className="mb-3" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => onDelete(counter.id)}>Delete</button>
    </div>
  );
}
