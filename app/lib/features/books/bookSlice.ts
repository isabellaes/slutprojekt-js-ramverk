"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { Root } from "../../types";

type BookStateType = {
  books: Root[];
};

const initialState: BookStateType = {
  books: [],
};

export const bookSlice = createSlice({
  name: "books",

  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Root>) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((b) => b.key != action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export const selectBooks = (state: RootState) => state.book.books;

export default bookSlice.reducer;
