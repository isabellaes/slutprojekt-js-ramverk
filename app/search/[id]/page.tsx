"use client";

import { useParams } from "next/navigation";
import Search from "../../components/header/Search";
import { useEffect, useState } from "react";
import { fetchBookByTitle } from "@/app/lib/functions";
import { Doc, SearchResult } from "@/app/lib/types";

export default function Page() {
  const [data, setData] = useState<Doc[]>();
  const params = useParams<{ id: string }>();
  console.log(params.id);

  useEffect(() => {
    const fetchData = async () => {
      const data: Doc[] = await fetchBookByTitle(params.id);
      setData(data);
      console.log(data);
    };
    fetchData();
  }, [params.id]);

  return (
    <>
      <h1>Search Page</h1>
      {data?.map((s) => (
        <p>{s.title}</p>
      ))}
    </>
  );
}
