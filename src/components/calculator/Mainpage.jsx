import React, { useState } from "react";
import Page1 from "./Page1";

export default function Mainpage() {
  const counters = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
  ];
  const [data, setData] = useState(counters);

  const handleDelete = (id) => {
    const temp = data.filter((item) => id !== item.id);
    setData([...temp]);
  };

  return (
    <div>
      {data.map((counter) => {
        return (
          <Page1 key={counter.id} counter={counter} onDelete={handleDelete} />
        );
      })}
    </div>
  );
}
