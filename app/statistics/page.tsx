"use client";

import { useDispatch, useSelector } from "react-redux";
import { selectBooks } from "@/app/lib/features/books/bookSlice";
import Container from "../components/container/Container";
import List from "../components/list/List";
import Button from "../components/button/Button";
import Modal from "../components/Modal/Modal";
import Form from "../components/form/Form";
import { useToggle } from "../lib/hooks/useToggle";
import {
  calculateAverage,
  calculateTotal,
  extractPageNumbersFromArray,
  filterBooksWithReviews,
} from "../lib/utils/functions";
import { AppDispatch } from "@/app/lib/features/store";
import { removeBookFromReadList } from "../lib/features/books/bookSlice";
import { useState } from "react";
import Counter from "../components/counter/Counter";
import style from "./statistics.module.scss";
import Link from "next/link";
import Rating from "@mui/material/Rating";

export default function Page() {
  const [selected, setSelected] = useState<string>("");
  const books = useSelector(selectBooks);
  const { open, toggle } = useToggle(false);

  const booksWithReviews = filterBooksWithReviews(books.readList);
  const pageNumbersArray = extractPageNumbersFromArray(books.readList);
  const dispatch = useDispatch<AppDispatch>();

  function calculateAverageRating(): number {
    const total = booksWithReviews.reduce((total, book) => {
      if (book.review) {
        return total + book.review.rating;
      } else {
        return total;
      }
    }, 0);

    return calculateAverage(total, booksWithReviews.length);
  }

  return (
    <div className={style.statistics}>
      <Container>
        <h1 className={style.title}>Statistics</h1>
        <div className={style.counters}>
          <Counter number={books.readList.length} title="Read books"></Counter>
          <Counter
            number={calculateTotal(pageNumbersArray)}
            title="Total Pages"
          />

          <Counter number={booksWithReviews.length} title="Reviews"></Counter>
          <Counter
            number={
              calculateAverage(
                calculateTotal(pageNumbersArray),
                books.readList.length
              ) || 0
            }
            title="Average pages"
          ></Counter>
          <Counter
            number={calculateAverageRating() || 0}
            title="Average rating"
          ></Counter>
        </div>

        <h1 className={style.title}>
          Read books{" "}
          <span className={style.lightText}>({books.readList.length})</span>
        </h1>

        {books.readList.map((b) => (
          <List>
            <div className={style.column}>
              <Link href={b.key} className={style.link}>
                <img src={b.img_url} alt="" />
                <div className={style.text}>
                  <h3>{b.title}</h3>
                  <p>Pages: {b.number_of_pages}</p>
                </div>
              </Link>
            </div>
            {b.review?.rating ? (
              <div className={style.review}>
                <h3>Review</h3>
                <p>"{b.review.text}"</p>
                <Rating name="read-only" value={b.review.rating} readOnly />
              </div>
            ) : (
              <></>
            )}

            <div className={style.buttons}>
              {b.review === undefined ? (
                <Button
                  handleOnClick={() => {
                    setSelected(b.key);
                    toggle();
                  }}
                  title="Add review"
                />
              ) : (
                <></>
              )}

              <Button
                title="Remove"
                color="error"
                handleOnClick={() => dispatch(removeBookFromReadList(b.key))}
              ></Button>
            </div>
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
