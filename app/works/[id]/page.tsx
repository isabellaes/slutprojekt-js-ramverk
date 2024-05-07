"use client";

import Container from "@/app/components/container/Container";
import "../workpage.scss";
import Button from "@/app/components/button/Button";
import { useParams } from "next/navigation";
import useFetchWork from "@/app/lib/hooks/useFetchWork";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/lib/features/store";
import {
  addToFavouriteBook,
  addToReadList,
} from "@/app/lib/features/books/bookSlice";
import { Book, ReadBook } from "@/app/lib/utils/types";

export default function Page() {
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const { book } = useFetchWork(params.id);

  function handleAddToReadList(book: Book) {
    const bookToAdd: ReadBook = {
      key: book.key,
      rating: "",
      comment: "",
      title: book.title,
      covers: book.covers,
      numberOfPages: 278,
    };

    dispatch(addToReadList(bookToAdd));
  }

  if (!book) return <div>Loading...</div>;

  return (
    <div className="work-page">
      <Container>
        <div className="row">
          <div className="item">
            {book.covers ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}
                alt="cover"
              />
            ) : (
              <img></img>
            )}
            <div className="buttons">
              {" "}
              <Button
                handleOnClick={() => dispatch(addToFavouriteBook(book))}
                title="Add to favourite"
              />
              <Button
                handleOnClick={() => handleAddToReadList(book)}
                title="Mark as finished"
              />
            </div>
          </div>

          <div className="item">
            <h1>{book.title}</h1>
            <p className="description">
              <span className="bold">Description: </span>
              {book.description ? (
                <>
                  {typeof book.description === "string" ? (
                    <>{book.description}</>
                  ) : (
                    <>{book.description.value}</>
                  )}
                </>
              ) : (
                ""
              )}
            </p>

            <p>
              <span className="bold">Published: </span>{" "}
              {book.first_publish_date}
            </p>
            <p>
              <span className="bold">First sentence:</span>
              {book.first_sentence?.value}
            </p>

            <p>
              <span className="bold">Subjects:</span> {book.subjects}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
