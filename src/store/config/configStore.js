import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
import books from "../modules/bookSlice";
import infos from "../modules/infosSlice";

// const rootReducer = combineReducers({
//   books: books,
// });

const store = configureStore({
  reducer: {
    books,
    infos,
  },
});

export default store;
