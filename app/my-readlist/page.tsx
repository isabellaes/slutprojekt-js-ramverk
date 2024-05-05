"use client";

import { useSelector } from "react-redux";
import { selectBooks } from "@/app/lib/features/books/bookSlice";

export default function Page() {
  const books = useSelector(selectBooks);
  return (
    <>
      <h1>Readlist books</h1>
      {books.myReadList.map((b) => (
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
