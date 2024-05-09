"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Author } from "../../utils/types";

type AuthorStateType = {
  authors: Author[];
};

const initialState: AuthorStateType = {
  authors: [],
};

export const authorSlice = createSlice({
  name: "authors",

  initialState,
  reducers: {
    addAuthor: (state, action: PayloadAction<Author>) => {
      state.authors.push(action.payload);
    },
    removeAuthor: (state, action: PayloadAction<string>) => {
      state.authors = state.authors.filter((a) => a.key != action.payload);
    },
  },
});

export const { addAuthor, removeAuthor } = authorSlice.actions;

export const selectAuthors = (state: RootState) => state.author.authors;

export default authorSlice.reducer;
