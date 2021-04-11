const reducer = (state, action) => {
  if (action.type === "SET_TITLE") {
    return { ...state, newBookName: action.payload };
  }
  if (action.type === "SET_AUTHOR") {
    return { ...state, newBookAuthor: action.payload };
  }
  if (action.type === "SET_AUTHOR") {
    return { ...state, newBookAuthor: action.payload };
  }
  if (action.type === "SET_STATUS") {
    return { ...state, newBookRead: !state.newBookRead };
  }
  if (action.type === "ADD_BOOK") {
    let newBook = {
      id: state.bookList.length + 1,
      name: state.newBookName,
      author: state.newBookAuthor,
      status: state.newBookRead,
    };
    let newBookList = [...state.bookList, newBook];
    return {
      ...state,
      bookList: newBookList,
      newBookName: "",
      newBookAuthor: "",
      newBookRead: false,
    };
  }
  if (action.type === "REMOVE_BOOK") {
    let newBookList = state.bookList.filter(
      (book) => book.id !== action.payload
    );
    return { ...state, bookList: newBookList };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
