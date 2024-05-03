"use client";

import { UseSelector, useSelector } from "react-redux";
import { RootState } from "@/app/lib/store";
import { selectBooks } from "@/app/lib/features/books/bookSlice";

export default function Page() {
  const books = useSelector(selectBooks);

  return (
    <>
      <h1>Fav books</h1>
      {books.map((b) => (
        <>
          <p>{b.title}</p>
          {b.covers ? (
            <img
              src={`https://covers.openlibrary.org/b/id/${b.covers[0]}-M.jpg`}
              alt="cover"
            />
          ) : (
            <img></img>
          )}
        </>
      ))}
    </>
  );
}
