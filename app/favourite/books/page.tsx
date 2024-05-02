"use client";

import { UseSelector, useSelector } from "react-redux";
import { RootState } from "@/app/lib/store";
import { selectBooks } from "@/app/lib/features/books/bookSlice";

export default function Page() {
  const books = useSelector(selectBooks);
  console.log(books);
  return (
    <>
      <h1>Fav books</h1>
      {books.map((b) => (
        <p>{b.title}</p>
      ))}
    </>
  );
}
