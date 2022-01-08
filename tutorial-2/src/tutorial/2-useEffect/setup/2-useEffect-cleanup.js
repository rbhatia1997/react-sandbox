import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    // remove event listener
    return () => {
      console.log("remove");
      window.removeEventListener("resize", checkSize);
    };
  });
  // can modify shit as the size of the window changes.
  return (
    <>
      <h1> Window</h1>
      <h2> {size} PX </h2>
    </>
  );
};

export default UseEffectCleanup;
