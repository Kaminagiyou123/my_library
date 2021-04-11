import React from "react";
import Book from "./Book";
import { data } from "./data";

const Home = () => {
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
        ></input>
        <input
          type='text'
          placeholder='book-author'
          className='input-box'
        ></input>
        <button className='read-btn-alert'> NOT READ YET</button>
        <button className='add-btn'> ADD TO LIBRARY</button>
      </form>
      <div className='book-container'>
        <h3>Book List</h3>
        <div className='book-list'>
          {data.map((item) => {
            return <Book item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
