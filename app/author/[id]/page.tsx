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
import Image from "next/image";
import "./authorpage.scss";

export default function Page() {
  const [data, setData] = useState<Author>();
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      const data: Author = await fetchAuthorById(params.id);
      setData(data);
    };
    fetchData();
  }, [params.id]);

  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <div className="author">
      <Container>
        <div className="row">
          {data.photos ? (
            <img
              src={`https://covers.openlibrary.org/a/id/${data.photos[0]}-L.jpg`}
              alt=""
            />
          ) : (
            <img src={blankprofile.src} alt="" />
          )}
          <div>
            <h1>{data.name}</h1>
            <p>{data.personal_name}</p>
            <p>{data.bio}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
