import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { Work } from "../../types";

type BookStateType = {
  books: Work[];
};

const initialState: BookStateType = {
  books: [],
};

export const bookSlice = createSlice({
  name: "books",

  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Work>) => {
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
