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
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/51ZSpMl1-LL._SX379_BO1,204,203,200_.jpg",
    title: "Designing Data Intensive Applications in Python",
    author: "Martin Kleppmann",
  },
];
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

const Book = ({ img, title, author }) => {
  // let's say that I don't want to write props, I could do this...
  // const {img, title, author} = props
  // You'd replace props above with ({})
  // children prop is a unchanged name but useful if you don't define a prop name.

  // const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="bookcover" />
      <h1> {title} </h1>
      <h4>{author}</h4>
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
