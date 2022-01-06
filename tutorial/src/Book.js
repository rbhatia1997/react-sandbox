import React from "react";

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver -> these are events, camelCase.

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  // let's say that I don't want to write props, I could do this...
  // const {img, title, author} = props
  // You'd replace props above with ({})
  // children prop is a unchanged name but useful if you don't define a prop name.

  // const { img, title, author } = props.book;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img
        style={({ width: 400 }, { height: 400 })}
        src={img}
        alt="bookcover"
      />
      <h1> {title} </h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Complex Example
      </button>
    </article>
  );
};

export default Book;
