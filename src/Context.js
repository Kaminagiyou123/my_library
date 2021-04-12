import userEvent from "@testing-library/user-event";
import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
const getLocalRecord = () => {
  let record = localStorage.getItem("bookList");
  if (record) {
    return JSON.parse(localStorage.getItem("bookList"));
  } else {
    return [];
  }
};
const initialState = {
  bookList: [...getLocalRecord()],
  newBookName: "",
  newBookAuthor: "",
  newBookRead: false,
  user: "",
};

const ProductsContext = React.createContext();
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setUser = (user) => {
    dispatch({ type: "SET_USER", payload: user });
  };

  const setNewBookName = (title) => {
    dispatch({ type: "SET_TITLE", payload: title });
  };
  const setNewBookAuthor = (author) => {
    dispatch({ type: "SET_AUTHOR", payload: author });
  };
  const setReadStatues = () => {
    dispatch({ type: "SET_STATUS" });
  };
  const addToLibrary = () => {
    dispatch({ type: "ADD_BOOK" });
  };
  const removeBook = (item) => {
    dispatch({
      type: "REMOVE_BOOK",
      payload: item,
    });
  };
  const changeExistingStatus = (item) => {
    dispatch({
      type: "CHANGE_EXISTING",
      payload: item,
    });
  };

  const addSearch = (item) => {
    dispatch({
      type: "ADD_SEARCH",
      payload: item,
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        setNewBookName,
        setNewBookAuthor,
        setReadStatues,
        addToLibrary,
        removeBook,
        changeExistingStatus,
        setUser,
        addSearch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
