import { useState } from "react";

export default function componentName() {
  const [value, setValue] = useState<number>(0);

  const handleAddValue = () => {
    setValue((prev) => {
      return (prev += 1);
    });
  };

  const handleReduceValue = () => {
    setValue((preve) => {
      return (preve -= 1);
    });
  };
  return (
    <>
      <div>
        <h2>counter Application</h2>
        <button onClick={handleAddValue}>Add</button>
        <span>{value}</span>
        <button onClick={handleReduceValue}>Minus</button>
      </div>
    </>
  );
}
