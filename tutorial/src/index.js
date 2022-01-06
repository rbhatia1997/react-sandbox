import React from "react";
import ReactDom from "react-dom";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

// You don't have to do this via a CSS file.

// By running npm-build and then putting your build folder in netlify, you can deploy an app.

// Must capitalize name of component to indicate it's a component to React.
// Good to add prettier & emmet to your Visual Studio Code for easier coding.

// Rules of JSX
// 1) Return a single element
// 2) Don't place everything as div, use section/article/fragment.
// React fragments are React.Fragment or <>
// 3) We need to use camelCase for HTML attribute.

// const author = "Martin Kleppmann";
// const title = "Designing Data Intensive Applications in Python";
// const img =
//   "https://images-na.ssl-images-amazon.com/images/I/51ZSpMl1-LL._SX379_BO1,204,203,200_.jpg";

// You're passing props into the Booklist
// In JS, you use map to deal with the data.

// This method uses book as an object prop.
// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return <Book key={book.id} book={book}></Book>;
//       })}
//     </section>
//   );
// }

// This method uses the spread operator!
// spreads out all the properties in the book!
// If using an unchanging list, you can map over book,index
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

// React, props is short for properties!

// const Image = () => (
//   <img
//     src="https://images-na.ssl-images-amazon.com/images/I/51ZSpMl1-LL._SX379_BO1,204,203,200_.jpg"
//     alt="bookcover"
//   />
// );

// const Title = () => <h1> Designing Data Intensive Applications in Python </h1>;
// const Author = () => (
//   <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
//     {" "}
//     Martin Kleppmann{" "}
//   </h4>
// );

// const Person = () => <h2> John Doe </h2>;
// const Message = () => <p> This is my message </p>;

// What we want to render & where.
ReactDom.render(<BookList />, document.getElementById("root"));
