"use client";

import { useState, useEffect } from "react";
import Container from "@/app/components/container/Container";
import { fetchWorkById, fetchWorkByIdAndEditions } from "@/app/lib/functions";
import "../workpage.scss";
import Button from "@/app/components/button/Button";
import { useParams } from "next/navigation";
import { Entry, Root } from "@/app/lib/types";

export default function Page() {
  const [data, setData] = useState<Entry>();
  const [work, setWork] = useState<Root>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWorkById(params.id);
      setWork(data);
    };
    fetchData();
  }, [params.id]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWorkByIdAndEditions(params.id);

      setData(data);
    };
    fetchData();
  }, [params.id]);

  if (!work) return <div>Loading...</div>;

  return (
    <div className="work-page">
      <Container size="20vw">
        {work.covers ? (
          <img
            src={`https://covers.openlibrary.org/b/id/${work.covers[0]}-M.jpg`}
            alt="cover"
          />
        ) : (
          <img></img>
        )}

        <p>{work.title}</p>
        <Button work={work}></Button>
        <button>Mark as finished</button>
      </Container>
      <Container size="80vw">
        <h1>{work.title}</h1>

        <p>
          <span className="bold">Subjects:</span> {work.subjects}
        </p>
        <p>
          <span className="bold">Description:</span>
          {typeof work.description === "string" ? (
            <>{work.description}</>
          ) : (
            <>{work.description.value}</>
          )}
        </p>
        <p>
          <span className="bold">Pages:</span> {data?.number_of_pages}
        </p>
        <p>
          <span className="bold">Published:</span> {work.first_publish_date}
        </p>
        <p>
          <span className="bold">First sentence:</span>{" "}
          {work.first_sentence?.value}
        </p>
      </Container>
    </div>
  );
}
