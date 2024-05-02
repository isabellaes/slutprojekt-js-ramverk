import { configureStore } from "@reduxjs/toolkit";
import authorReducer from "../lib/features/authors/authorSlice";
import bookReducer from "./features/books/bookSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      author: authorReducer,
      book: bookReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
