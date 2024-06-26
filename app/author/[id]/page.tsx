"use client";

import Container from "@/app/components/container/Container";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/lib/features/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchAuthorById } from "@/app/lib/utils/api";
import { Author } from "@/app/lib/utils/types";
import blankprofile from "../../images/blank-profile-picture-973460_640.png";
import {
  addAuthor,
  removeAuthor,
  selectAuthors,
} from "@/app/lib/features/authors/authorSlice";
import FavouriteButton from "@/app/components/favourite/FavouriteButton";
import style from "../author.module.scss";
import CardSkeleton from "@/app/components/skeletons/CardSkeleton";
import ContentSkeleton from "@/app/components/skeletons/ContentSkeleton";

export default function Page() {
  const [author, setAuthor] = useState<Author>();
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const authors = useSelector(selectAuthors);

  useEffect(() => {
    const fetchData = async () => {
      const data: Author = await fetchAuthorById(params.id);
      if (!ignore) {
        setAuthor(data);
      }
    };
    let ignore = false;
    fetchData();
    return () => {
      ignore = true;
    };
  }, [params.id]);

  function handleAddToFavourite(author: Author) {
    let photosrc;
    if (author.photos != undefined) {
      photosrc = `https://covers.openlibrary.org/a/id/${author.photos[0]}-L.jpg`;
    } else {
      photosrc = blankprofile.src;
    }
    const authorToAdd: Author = {
      ...author,
      img_url: photosrc,
    };
    dispatch(addAuthor(authorToAdd));
  }

  function checkIfFavourite(key: string): boolean {
    const exists = authors.find((a) => a.key === key);
    if (exists) {
      return true;
    }
    return false;
  }

  function handleRemoveFavourite(key: string) {
    dispatch(removeAuthor(key));
  }

  return (
    <div className={style.author}>
      <Container>
        {author ? (
          <div className={style.row}>
            <div className={style.column}>
              {author.photos ? (
                <img
                  src={`https://covers.openlibrary.org/a/id/${author.photos[0]}-L.jpg`}
                  alt=""
                />
              ) : (
                <img src={blankprofile.src} alt="" />
              )}
              <div className={style.buttons}>
                <FavouriteButton
                  checkIfFavourite={() => checkIfFavourite(author.key)}
                  handleAddToFavourite={() => handleAddToFavourite(author)}
                  handleRemoveFavourite={() =>
                    handleRemoveFavourite(author.key)
                  }
                />
              </div>
            </div>
            <div>
              <h1>{author.name}</h1>
              <p>
                <span className={style.bold}>Personal name: </span>{" "}
                {author.personal_name}
              </p>
              <p>
                <span className={style.bold}>Birth date: </span>{" "}
                {author.birth_date}
              </p>
              {author.bio ? (
                <>
                  {typeof author.bio === "string" ? (
                    <p>
                      <span className={style.bold}>Bio: </span> {author.bio}
                    </p>
                  ) : (
                    <p>
                      <span className={style.bold}>Bio: </span>{" "}
                      {author.bio.value}
                    </p>
                  )}
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : (
          <div className={style.row}>
            <CardSkeleton />
            <ContentSkeleton />
          </div>
        )}
      </Container>
    </div>
  );
}
