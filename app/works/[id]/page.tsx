"use client";

import Container from "@/app/components/container/Container";
import style from "../workpage.module.scss";
import Button from "@/app/components/button/Button";
import { useParams } from "next/navigation";
import useFetchWork from "@/app/lib/hooks/useFetchWork";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/lib/features/store";
import {
  addToFavouriteBook,
  addToReadList,
  selectBooks,
  removeBookFromFavourite,
} from "@/app/lib/features/books/bookSlice";
import { Book } from "@/app/lib/utils/types";
import defalaultImg from "../../images/No-Image-Placeholder.svg.png";
import FavouriteButton from "@/app/components/favourite/FavouriteButton";
import CardSkeleton from "@/app/components/skeletons/CardSkeleton";
import ContentSkeleton from "@/app/components/skeletons/ContentSkeleton";
import Snackbar from "@mui/material/Snackbar";
import { useToggle } from "@/app/lib/hooks/useToggleModal";

export default function Page() {
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector(selectBooks);

  const { book, pages } = useFetchWork(params.id);
  const { open, toggle } = useToggle(false);

  function handleAddToReadList(book: Book) {
    let photosrc;
    if (book.covers != undefined) {
      photosrc = `https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`;
    } else {
      photosrc = defalaultImg.src;
    }
    const bookToAdd: Book = {
      ...book,
      img_url: photosrc,
      number_of_pages: pages || 199,
    };

    dispatch(addToReadList(bookToAdd));
  }

  function checkIfFavourite(key: string): boolean {
    const exists = books.favouriteBooks.find((b) => b.key === key);
    if (exists) {
      return true;
    }
    return false;
  }

  function handleRemoveFavourite(key: string) {
    dispatch(removeBookFromFavourite(key));
  }

  function handleAddToFavourite(book: Book) {
    let photosrc;
    if (book.covers != undefined) {
      photosrc = `https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`;
    } else {
      photosrc = defalaultImg.src;
    }

    const favBook: Book = {
      ...book,
      img_url: photosrc,
      number_of_pages: pages,
    };

    dispatch(addToFavouriteBook(favBook));
  }

  return (
    <div className={style.workpage}>
      <Container>
        {book ? (
          <div className={style.row}>
            <div className={style.item}>
              {book.covers ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}
                  alt="cover"
                />
              ) : (
                <img src={defalaultImg.src}></img>
              )}
              <div className={style.buttons}>
                <FavouriteButton
                  checkIfFavourite={() => checkIfFavourite(book.key)}
                  handleAddToFavourite={() => handleAddToFavourite(book)}
                  handleRemoveFavourite={() => handleRemoveFavourite(book.key)}
                />

                <Button
                  handleOnClick={() => {
                    handleAddToReadList(book);
                    toggle();
                  }}
                  title="Mark as finished"
                />
              </div>
            </div>
            <div className={style.item}>
              <h1>{book.title}</h1>
              <p className={style.description}>
                <span className={style.bold}>Description: </span>
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
                <span className={style.bold}>Published: </span>{" "}
                {book.first_publish_date}
              </p>
              <p>
                <span className={style.bold}>First sentence: </span>
                {book.first_sentence?.value}
              </p>
              <p>
                <span className={style.bold}> Pages: </span>{" "}
                {pages != 0 ? `${pages}` : "199"}
              </p>

              <p>
                <span className={style.bold}>Subjects:</span> {book.subjects[0]}
              </p>
            </div>
          </div>
        ) : (
          <div className={style.row}>
            <CardSkeleton />
            <ContentSkeleton />
          </div>
        )}
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={toggle}
          message="Book added to readlist"
        />
      </Container>
    </div>
  );
}
