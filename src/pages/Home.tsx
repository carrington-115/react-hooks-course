import { useEffect, useState } from "react";
import styled from "styled-components";

export default function componentName() {
  const [value, setValue] = useState<number>(0);
  const [incrementValue, setIncrementValue] = useState<number>(1);

  const handleAddValue = () => {
    setValue((prev) => {
      return incrementValue === 0 ? (prev += 1) : (prev += incrementValue);
    });
  };

  const handleReduceValue = () => {
    setValue((prev) => {
      return incrementValue === 0 ? (prev -= 1) : (prev -= incrementValue);
    });
  };

  useEffect(() => {}, []);
  return (
    <>
      <CounterContainer>
        <h2>counter Application</h2>
        <section>
          <button onClick={handleAddValue}>Add</button>
          <span>{value}</span>
          <button onClick={handleReduceValue}>Minus</button>
        </section>
        <form action="">
          <fieldset>
            <label htmlFor="by-value">Increacse by value:</label>
            <input
              type="number"
              value={incrementValue}
              onChange={(e) => setIncrementValue(Number(e.target.value))}
            />
          </fieldset>
        </form>
      </CounterContainer>
    </>
  );
}

const CounterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  section {
    display: flex;
    gap: 10px;
  }
`;
