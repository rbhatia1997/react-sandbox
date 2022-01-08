import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // Used for work outside of a component.
  // Runs after every render!
  // CANNOT CALL HOOKS IN CONDITIONAL.
  useEffect(() => {
    if (value > 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);
  // Usually you add what's changing.
  // the array above is the array of dependencies.
  // If blank, this will only run on the initial run.

  // Use Effect runs after every render!

  console.log("render component");
  return (
    <>
      <h1> {value} </h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me!
      </button>
    </>
  );
};

export default UseEffectBasics;
