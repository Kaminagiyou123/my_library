import React from "react";
import Book from "./Book";
import { useProductsContext } from "./Context";

const Home = () => {
  const {
    bookList,
    setNewBookName,
    setNewBookAuthor,
    setReadStatues,
    addToLibrary,
    newBookName,
    newBookAuthor,
    newBookRead,
  } = useProductsContext();
  return (
    <div className='content-container'>
      <div className='heading-container'>
        <h1>My Library</h1>
      </div>
      <form className='book-input'>
        <input
          type='text'
          placeholder='book-name'
          className='input-box'
          value={newBookName}
          onChange={(e) => {
            setNewBookName(e.target.value);
          }}
        ></input>
        <input
          type='text'
          placeholder='book-author'
          className='input-box'
          value={newBookAuthor}
          onChange={(e) => {
            setNewBookAuthor(e.target.value);
          }}
        ></input>
        <button
          className={newBookRead ? "read-btn" : "read-btn-alert"}
          onClick={(e) => {
            e.preventDefault();
            setReadStatues();
          }}
        >
          {" "}
          {newBookRead ? "COMPLETE READING" : "NOT READ YET"}
        </button>
        <button
          className='add-btn'
          onClick={(e) => {
            e.preventDefault();
            addToLibrary();
          }}
        >
          {" "}
          ADD TO LIBRARY
        </button>
      </form>
      <div className='book-container'>
        <h3>Book List</h3>
        <div className='book-list'>
          {bookList?.map((item) => {
            return <Book item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
