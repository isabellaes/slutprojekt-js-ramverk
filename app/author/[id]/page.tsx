"use client";

import Container from "@/app/components/container/Container";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/lib/features/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchAuthorById } from "@/app/lib/utils/api";
import { Author } from "@/app/lib/utils/types";
import Button from "@/app/components/button/Button";
import blankprofile from "./blank-profile-picture-973460_640.png";
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

  if (!author) {
    return <p>Loading...</p>;
  }
  return (
    <div className="author">
      <Container>
        <div className="row">
          <div>
            {author.photos[0] ? (
              <img
                src={`https://covers.openlibrary.org/a/id/${author.photos[0]}-L.jpg`}
                alt=""
              />
            ) : (
              <img src={blankprofile.src} alt="" />
            )}
            <Button
              handleOnClick={() => dispatch(addAuthor(author))}
              title={"Add to favourite"}
            ></Button>
          </div>
          <div>
            <h1>{author.name}</h1>
            <p>{author.personal_name}</p>
            {typeof author.bio === "string" ? (
              <p>{author.bio}</p>
            ) : (
              <p>{author.bio.value}</p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
