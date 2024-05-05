"use client";

import { useSelector } from "react-redux";
import { selectBooks } from "@/app/lib/features/books/bookSlice";
import List from "@/app/components/list/List";
import Card from "@/app/components/card/Card";
import Container from "@/app/components/container/Container";

export default function Page() {
  const books = useSelector(selectBooks);

  return (
    <Container size="100vw">
      <h1>Fav books</h1>
      <List direction="row">
        {books.favouriteBooks.map((b) => (
          <Card key={b.key} title={b.title} img={b.covers[0]}></Card>
        ))}
      </List>
    </Container>
  );
}
