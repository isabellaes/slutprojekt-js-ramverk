"use client";

import { useState, useEffect } from "react";
import Container from "@/app/components/container/Container";
import { fetchWorkById } from "@/app/lib/functions";
import "../workpage.scss";
import Button from "@/app/components/button/Button";
import { useParams } from "next/navigation";

export default function Page() {
  const [data, setData] = useState<any>(null);
  const params = useParams<{ id: string }>();
  console.log(params.id);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWorkById(params.id);
      setData(data);
    };
    fetchData();
  }, [params.id]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="work-page">
      <Container size="20vw">
        <img
          src={`https://covers.openlibrary.org/b/id/${data.covers[0]}-M.jpg`}
          alt="cover"
        />
        <p>{data.title}</p>
        <Button work={data}></Button>
        <button>Mark as finished</button>
      </Container>
      <Container size="80vw">
        <h1>{data.title}</h1>
        <p>
          {typeof data.description === "string" ? (
            <>{data.description}</>
          ) : (
            <>{data.description.value}</>
          )}
        </p>
      </Container>
    </div>
  );
}
