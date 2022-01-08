import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Essentially placing all our functionality in the root here.
// Everything is created in the App.js and export it.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
