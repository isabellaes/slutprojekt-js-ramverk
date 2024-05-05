"use client";

import Container from "@/app/components/container/Container";
import "../workpage.scss";
import Button from "@/app/components/button/Button";
import { useParams } from "next/navigation";
import useFetchWorkAndEditionById from "@/app/lib/hooks/hooks";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/lib/features/store";
import {
  addToReadListBook,
  addToFavouriteBook,
} from "@/app/lib/features/books/bookSlice";

export default function Page() {
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const { data, work } = useFetchWorkAndEditionById(params.id);

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

        <Button
          handleOnClick={() => dispatch(addToFavouriteBook(work))}
          title=" Mark as favourite"
        />
        <Button
          handleOnClick={() => dispatch(addToReadListBook(work))}
          title="Mark as finished"
        />
      </Container>
      <Container size="80vw">
        <h1>{work.title}</h1>

        <p>
          <span className="bold">Subjects:</span> {work.subjects}
        </p>
        <p>
          <span className="bold">Description:</span>
          {work.description ? (
            <>
              {typeof work.description === "string" ? (
                <>{work.description}</>
              ) : (
                <>{work.description.value}</>
              )}
            </>
          ) : (
            ""
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
