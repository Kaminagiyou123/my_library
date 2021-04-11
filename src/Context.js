import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
const initialState = {
  bookList: [],
  newBookName: "",
  newBookAuthor: "",
  newBookRead: false,
};
const ProductsContext = React.createContext();
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        setNewBookName,
        setNewBookAuthor,
        setReadStatues,
        addToLibrary,
        removeBook,
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
