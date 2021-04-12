import React, { useState } from "react";
import { useProductsContext } from "./Context";
const Search = () => {
  const url = "https://www.googleapis.com/books/v1/volumes?q=";
  const [searchResult, setSearchResult] = useState([]);
  const [data, setData] = useState({ totalItems: 0 });
  const { addSearch } = useProductsContext();

  const searchBooks = async () => {
    const response = await fetch(`${url}${searchResult}`);
    const data = await response.json();
    setData(data);
    return data;
  };
  return (
    <div className='content-container'>
      <form className='book-input'>
        <input
          type='text'
          placeholder='Enter Keyword'
          className='book-search-box'
          value={searchResult}
          onChange={(e) => setSearchResult(e.target.value)}
        ></input>
        <button
          className='search-btn'
          onClick={(e) => {
            e.preventDefault();
            searchBooks();
          }}
        >
          Search
        </button>
      </form>
      <h3>Searh Results</h3>
      <div className='book-container'>
        {data.totalItems === 0 ? (
          <h3> Sorry no book matches the keyword</h3>
        ) : (
          <div className='book-list'>
            {data?.items.map((item) => {
              const { title, authors } = item.volumeInfo;

              const author = authors ? authors[0] : "N/A";
              const id = item.id;
              const bookUrl = `https://books.google.com/ebooks?id=${id}`;
              return (
                <div
                  className='single-book-container'
                  data-title={title}
                  data-author={author}
                >
                  <button
                    className='add_to'
                    onClick={(e) => {
                      e.preventDefault();
                      const title = e.target.parentElement.dataset.title;
                      const author = e.target.parentElement.dataset.author;
                      addSearch({ title, author });
                    }}
                  >
                    Add to my Library
                  </button>
                  <div className='single-item-container'>
                    <h3>
                      <span>Name: </span>
                      {title.substring(0, 30)}
                      {title.length > 30 && "..."}
                    </h3>
                    <h4>
                      <span>Author: </span>
                      {author}
                    </h4>
                  </div>
                  <a
                    href={bookUrl}
                    alt='/'
                    className='remove-book-btn'
                    target='_blank'
                  >
                    More Details in Google
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
