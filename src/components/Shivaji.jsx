import React, { useState } from "react";

export default function Shivaji() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        style={{ height: "40px", width: "150px" }}
        onClick={() => setCount(count + 1)}
      >
        count{count}
      </button>
      <button
        style={{ height: "40px", width: "150px", margin: "2px 4px 2px 4px " }}
      >
        {count % 2 === 0 ? "even no" : " odd no"}
      </button>
    </div>
  );
}
