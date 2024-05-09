"use client";

import Container from "@/app/components/container/Container";
import "../workpage.scss";
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
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function Page() {
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector(selectBooks);

  const { book, pages } = useFetchWork(params.id);

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
              <img src={defalaultImg.src}></img>
            )}
            <div className="buttons">
              {checkIfFavourite(book.key) ? (
                <FavoriteIcon
                  color="error"
                  onClick={() => handleRemoveFavourite(book.key)}
                />
              ) : (
                <FavoriteBorderOutlinedIcon
                  onClick={() => handleAddToFavourite(book)}
                />
              )}

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
              <span className="bold">First sentence: </span>
              {book.first_sentence?.value}
            </p>
            <p>
              <span className="bold"> Pages: </span>{" "}
              {pages != 0 ? `${pages}` : "199"}
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
