"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type AuthorStateType = {
  authors: [];
};

const initialState: AuthorStateType = {
  authors: [],
};

export const authorSlice = createSlice({
  name: "authors",

  initialState,
  reducers: {
    addAuthor: (state, action: PayloadAction<any>) => {},
    removeAuthor: (state, action: PayloadAction<string>) => {},
  },
});

export const { addAuthor, removeAuthor } = authorSlice.actions;

export const selectAuthors = (state: RootState) => state.author.authors;

export default authorSlice.reducer;
