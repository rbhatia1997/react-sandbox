import React from "react";
import ReactDom from "react-dom";

import "./index.css";

// You don't have to do this via a CSS file.

// Must capitalize name of component to indicate it's a component to React.
// Good to add prettier & emmet to your Visual Studio Code for easier coding.

// Rules of JSX
// 1) Return a single element
// 2) Don't place everything as div, use section/article/fragment.
// React fragments are React.Fragment or <>
// 3) We need to use camelCase for HTML attribute.

// Vars set-up
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51ZSpMl1-LL._SX379_BO1,204,203,200_.jpg",
  title: "Designing Data Intensive Applications in Python",
  author: "Martin Kleppmann",
};

// const author = "Martin Kleppmann";
// const title = "Designing Data Intensive Applications in Python";
// const img =
//   "https://images-na.ssl-images-amazon.com/images/I/51ZSpMl1-LL._SX379_BO1,204,203,200_.jpg";

// You're passing props into the Booklist
function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

// React, props is short for properties!

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="bookcover" />
      <h1> {props.title} </h1>
      <h4>{props.author}</h4>
    </article>
  );
};

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
