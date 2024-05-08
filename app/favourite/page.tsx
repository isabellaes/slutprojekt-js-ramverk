"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  removeBookFromFavourite,
  selectBooks,
} from "@/app/lib/features/books/bookSlice";
import List from "@/app/components/list/List";
import Card from "@/app/components/card/Card";
import Container from "@/app/components/container/Container";
import Button from "@/app/components/button/Button";
import { AppDispatch } from "@/app/lib/features/store";
import {
  removeAuthor,
  selectAuthors,
} from "../lib/features/authors/authorSlice";

export default function Page() {
  const books = useSelector(selectBooks);
  const authors = useSelector(selectAuthors);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Container>
      <h1>Fav books</h1>
      <List direction="column">
        {books.favouriteBooks.map((b) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Card key={b.key} title={b.title} img={b.cover}></Card>
            <Button
              handleOnClick={() => dispatch(removeBookFromFavourite(b.key))}
              title="Remove"
            ></Button>
          </div>
        ))}
      </List>
      <h1>Fav Authors</h1>
      <List direction="column">
        {authors.map((a) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Card key={a.key} title={a.name} img={a.photo}></Card>
            <Button
              handleOnClick={() => dispatch(removeAuthor(a.key))}
              title="Remove"
            ></Button>
          </div>
        ))}
      </List>
    </Container>
  );
}
