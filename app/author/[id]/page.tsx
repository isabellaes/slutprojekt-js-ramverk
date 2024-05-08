"use client";

import Container from "@/app/components/container/Container";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/lib/features/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchAuthorById } from "@/app/lib/utils/api";
import { Author, FavAuthor } from "@/app/lib/utils/types";
import Button from "@/app/components/button/Button";
import blankprofile from "../../images/blank-profile-picture-973460_640.png";
import "./authorpage.scss";
import { addAuthor } from "@/app/lib/features/authors/authorSlice";

export default function Page() {
  const [author, setAuthor] = useState<Author>();
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

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
    const authorToAdd: FavAuthor = {
      name: author.name,
      title: author.title,
      bio: author.bio,
      photo: photosrc,
      personal_name: author.personal_name,
      birth_date: author.birth_date,
      key: author.key,
      fuller_name: author.fuller_name,
    };
    dispatch(addAuthor(authorToAdd));
  }

  if (!author) {
    return <p>Loading...</p>;
  }
  return (
    <div className="author">
      <Container>
        <div className="row">
          <div>
            {author.photos ? (
              <img
                src={`https://covers.openlibrary.org/a/id/${author.photos[0]}-L.jpg`}
                alt=""
              />
            ) : (
              <img src={blankprofile.src} alt="" />
            )}
            <Button
              handleOnClick={() => handleAddToFavourite(author)}
              title={"Add to favourite"}
            ></Button>
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
