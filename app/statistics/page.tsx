"use client";

import { useDispatch, useSelector } from "react-redux";
import { selectBooks } from "@/app/lib/features/books/bookSlice";
import Container from "../components/container/Container";
import List from "../components/list/List";
import Card from "../components/card/Card";
import Button from "../components/button/Button";
import Modal from "../components/Modal/Modal";
import Form from "../components/form/Form";
import { useToggleModal } from "../lib/hooks/useToggleModal";
import "./statistics.scss";
import {
  calculateAverage,
  calculateTotal,
  extractPageNumbersFromArray,
  filterBooksWithReviews,
} from "../lib/utils/functions";
import { AppDispatch } from "@/app/lib/features/store";
import { removeBookFromReadList } from "../lib/features/books/bookSlice";
import { useState } from "react";

export default function Page() {
  const [selected, setSelected] = useState<string>("");
  const books = useSelector(selectBooks);
  const { open, toggle } = useToggleModal(false);

  const booksWithReviews = filterBooksWithReviews(books.readList);
  const numbers = extractPageNumbersFromArray(books.readList);
  const dispatch = useDispatch<AppDispatch>();

  function calculateAverageRating(): number {
    const total = books.readList.reduce((total, book) => {
      if (book.comment && book.rating) {
        return total + Number(book.rating);
      } else {
        return total;
      }
    }, 0);

    return calculateAverage(total, booksWithReviews.length);
  }

  return (
    <div className="statistics">
      <Container>
        <h1>Statistics</h1>

        <p>Number of books read: {books.readList.length}</p>
        <p>Total pages: {calculateTotal(numbers)} </p>
        <p>Number of bookreviews: {booksWithReviews.length}</p>
        <p>
          Average number of pages:{" "}
          {calculateAverage(calculateTotal(numbers), books.readList.length) ||
            0}
        </p>
        <p>Average rating: {calculateAverageRating() || 0}</p>

        <h1>Finished books</h1>

        {books.readList.map((b) => (
          <List space="between">
            <div className="row">
              <img src={b.cover} alt="" />
              <div>
                <h2>{b.title}</h2>
                <p>{b.number_of_pages}</p>
              </div>

              {b.comment && b.rating ? (
                <div className="review">
                  <h2>Review</h2>
                  <p>Comment: {b.comment}</p>
                  <p>Rating: {b.rating}/10</p>
                </div>
              ) : (
                <Button
                  handleOnClick={() => {
                    setSelected(b.key);
                    toggle();
                  }}
                  title="Add review"
                />
              )}
            </div>
            <Button
              title="Remove"
              handleOnClick={() => dispatch(removeBookFromReadList(b.key))}
            ></Button>
          </List>
        ))}

        {open && selected ? (
          <Modal>
            <Form id={selected} handleClose={() => toggle()}></Form>
          </Modal>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
}
