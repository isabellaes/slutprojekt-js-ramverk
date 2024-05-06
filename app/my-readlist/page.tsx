"use client";

import { useSelector } from "react-redux";
import { selectBooks } from "@/app/lib/features/books/bookSlice";
import Container from "../components/container/Container";
import List from "../components/list/List";
import Card from "../components/card/Card";
import Button from "../components/button/Button";
import Modal from "../components/Modal/Modal";
import Form from "../components/form/Form";
import { useToggleModal } from "../lib/hooks/useToggleModal";
import { useState } from "react";

export default function Page() {
  const [selectedBook, setSelectedBook] = useState<string>();
  const books = useSelector(selectBooks);
  const { open, toggle } = useToggleModal(false);
  function handleAddReview(key: string) {
    toggle();
    setSelectedBook(key);
  }
  return (
    <Container size="100vw">
      <h1>Readlist books</h1>
      <List direction="row">
        {books.myReadList.map((b) => (
          <>
            <Card key={b.key} title={b.title} img={b.covers[0]} />
            <Button
              handleOnClick={() => handleAddReview(b.key)}
              title="Add review"
            />
          </>
        ))}
      </List>
      {open && selectedBook ? (
        <Modal>
          <Form key={selectedBook}></Form>
        </Modal>
      ) : (
        <></>
      )}
    </Container>
  );
}
