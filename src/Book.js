import React from "react";

const Book = ({ item }) => {
  const { id, name, author } = item;

  return (
    <div className='single-book-container'>
      <div className='single-item-container'>
        <h3>
          <span>Name: </span>
          {name}
        </h3>

        <h4>
          <span>Author: </span>
          {author}
        </h4>
      </div>
      <button className='single-book-btn'>NOT READ YET</button>
    </div>
  );
};

export default Book;
