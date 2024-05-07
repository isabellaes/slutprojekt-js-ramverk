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
import "./statistics.scss";

export default function Page() {
  const books = useSelector(selectBooks);
  const { open, toggle } = useToggleModal(false);

  function calculateTotalNumberOfPages(): number {
    return books.readList.reduce((total, book) => {
      return total + book.numberOfPages;
    }, 0);
  }

  return (
    <div className="statistics">
      <Container>
        <h1>Statistics</h1>

        <p>Number of books read: {books.readList.length}</p>
        <p>Total pages: {calculateTotalNumberOfPages()} </p>

        <h1>Finished books</h1>
        <List direction="row">
          {books.readList.map((b) => (
            <div className="list-item">
              <Card key={b.key} title={b.title} img={b.covers[0]} />
              {/*  <p>{b.numberOfPages}</p> */}
              {b.comment && b.rating ? (
                <div className="review">
                  <h2>Review</h2>
                  <p>Comment: {b.comment}</p>
                  <p>Rating: {b.rating}/10</p>
                </div>
              ) : (
                <Button handleOnClick={() => toggle()} title="Add review" />
              )}

              {open ? (
                <Modal>
                  <Form id={b.key} handleClose={() => toggle()}></Form>
                </Modal>
              ) : (
                <></>
              )}
            </div>
          ))}
        </List>
      </Container>
    </div>
  );
}
