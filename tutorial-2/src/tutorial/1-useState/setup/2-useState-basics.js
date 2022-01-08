import React, { useState } from "react";

// Component has to be uppercase to use Hooks.

const UseStateBasics = () => {
  // console.log(useState("Hello World"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  // Array destructuring method
  // Put the default value inside of useState().
  const [text, setText] = useState("Random Title");

  const handleClick = () => {
    if (text === "random title") {
      setText("Hello World");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        {" "}
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
