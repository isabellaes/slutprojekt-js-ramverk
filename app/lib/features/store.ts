"use client";

import { configureStore } from "@reduxjs/toolkit";
import authorReducer from "./authors/authorSlice";
import bookReducer from "./books/bookSlice";

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
