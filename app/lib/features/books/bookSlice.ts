"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Review, Root } from "../../utils/types";

type BookStateType = {
  favouriteBooks: Root[];
  myReadList: Root[];
  reviews: Review[];
};

const initialState: BookStateType = {
  favouriteBooks: [],
  myReadList: [],
  reviews: [],
};

export const bookSlice = createSlice({
  name: "books",

  initialState,
  reducers: {
    addToFavouriteBook: (state, action: PayloadAction<Root>) => {
      state.favouriteBooks.push(action.payload);
    },
    addToReadListBook: (state, action: PayloadAction<Root>) => {
      state.myReadList.push(action.payload);
    },
    removeBookFromFavourite: (state, action: PayloadAction<string>) => {
      state.favouriteBooks = state.favouriteBooks.filter(
        (b) => b.key != action.payload
      );
    },
    addReview: (state, action: PayloadAction<Review>) => {
      state.reviews.push(action.payload);
    },
  },
});

export const {
  addToFavouriteBook,
  addToReadListBook,
  removeBookFromFavourite,
  addReview,
} = bookSlice.actions;

export const selectBooks = (state: RootState) => state.book;

export default bookSlice.reducer;
