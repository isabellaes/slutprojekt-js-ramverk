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
import style from "./author.module.scss";

export default function Page() {
  const [author, setAuthor] = useState<Author>();
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const authors = useSelector(selectAuthors);

  useEffect(() => {
    const fetchData = async () => {
      const data: Author = await fetchAuthorById(params.id);
      setAuthor(data);
    };
    fetchData();
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

  if (!author) {
    return <p>Loading...</p>;
  }
  return (
    <div className={style.author}>
      <Container>
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
            <FavouriteButton
              checkIfFavourite={() => checkIfFavourite(author.key)}
              handleAddToFavourite={() => handleAddToFavourite(author)}
              handleRemoveFavourite={() => handleRemoveFavourite(author.key)}
            />
          </div>
          <div>
            <h1>{author.name}</h1>
            <p>{author.personal_name}</p>
            {author.bio ? (
              <>
                {typeof author.bio === "string" ? (
                  <p>{author.bio}</p>
                ) : (
                  <p>{author.bio.value}</p>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
