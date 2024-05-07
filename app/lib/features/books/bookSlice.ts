"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Review, Book, ReadBook } from "../../utils/types";

type BookStateType = {
  favouriteBooks: Book[];
  reviews: Review[];
  readList: ReadBook[];
};

const initialState: BookStateType = {
  favouriteBooks: [],
  reviews: [],
  readList: [],
};

export const bookSlice = createSlice({
  name: "books",

  initialState,
  reducers: {
    addToFavouriteBook: (state, action: PayloadAction<Book>) => {
      const exists = state.favouriteBooks.find(
        (b) => b.key === action.payload.key
      );
      if (!exists) {
        state.favouriteBooks.push(action.payload);
      }
    },

    removeBookFromFavourite: (state, action: PayloadAction<string>) => {
      state.favouriteBooks = state.favouriteBooks.filter(
        (b) => b.key != action.payload
      );
    },
    addReview: (state, action: PayloadAction<Review>) => {
      state.readList = state.readList.map((r) => {
        if (r.key === action.payload.key) {
          return {
            ...r,
            rating: action.payload.rating,
            comment: action.payload.text,
          };
        } else {
          return r;
        }
      });
    },
    addToReadList: (state, action: PayloadAction<ReadBook>) => {
      const exists = state.readList.find((b) => b.key === action.payload.key);
      if (!exists) {
        state.readList.push(action.payload);
      }
    },
  },
});

export const {
  addToFavouriteBook,
  removeBookFromFavourite,
  addReview,
  addToReadList,
} = bookSlice.actions;

export const selectBooks = (state: RootState) => state.book;

export default bookSlice.reducer;
