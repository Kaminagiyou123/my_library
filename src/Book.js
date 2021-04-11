import React from "react";
import { useProductsContext } from "./Context";
const Book = ({ item }) => {
  const { id, name, author, status } = item;
  const { removeBook, changeExistingStatus } = useProductsContext();
  const remove = (e) => {
    e.preventDefault();
    removeBook(parseInt(e.target.parentElement.dataset.id));
  };
  const changeStatus = (e) => {
    e.preventDefault();
    changeExistingStatus(parseInt(e.target.parentElement.dataset.id));
  };

  return (
    <div className='single-book-container' data-id={id}>
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
      <button
        className={status ? "single-book-btn" : "single-book-btn-alert"}
        onClick={changeStatus}
      >
        {status ? "READING COMPLETE" : "NOT READ YET"}
      </button>
      <button className='remove-book-btn' onClick={remove}>
        REMOVE BOOK
      </button>
    </div>
  );
};

export default Book;
