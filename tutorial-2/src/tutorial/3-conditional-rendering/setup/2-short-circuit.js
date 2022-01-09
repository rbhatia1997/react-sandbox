import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "hello world"; // if no text, returns helloworld
  const secondValue = text && "hello world"; // if true, returns hw, if not, text

  // JSX has to return a value/expression.

  return (
    <>
      {/* <h1> {firstValue}</h1>
      <h1>value: {secondValue} </h1> */}
      {/* <h1>{text || "John Doe"} </h1> */}
      {/* {text && <h1> hello world </h1>} */}
      <h1> {text || "Testing"} </h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        {" "}
        Toggle Error{" "}
      </button>
      {isError && <h1> Error... </h1>}
      {isError ? (
        <p> There is an error... </p>
      ) : (
        <div>
          {" "}
          <h2> There is no Error </h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
