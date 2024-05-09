"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Review, Book } from "../../utils/types";

type BookStateType = {
  favouriteBooks: Book[];
  readList: Book[];
};

const initialState: BookStateType = {
  favouriteBooks: [],
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
            revies: {
              key: action.payload.key,
              rating: action.payload.rating,
              text: action.payload.text,
            },
          };
        } else {
          return r;
        }
      });
    },
    addToReadList: (state, action: PayloadAction<Book>) => {
      const exists = state.readList.find((b) => b.key === action.payload.key);
      if (!exists) {
        state.readList.push(action.payload);
      }
    },

    removeBookFromReadList: (state, action: PayloadAction<string>) => {
      state.readList = state.readList.filter((b) => b.key != action.payload);
    },
  },
});

export const {
  addToFavouriteBook,
  removeBookFromFavourite,
  addReview,
  addToReadList,
  removeBookFromReadList,
} = bookSlice.actions;

export const selectBooks = (state: RootState) => state.book;

export default bookSlice.reducer;
