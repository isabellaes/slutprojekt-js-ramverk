"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchBookByTitle } from "@/app/lib/utils/functions";
import { Doc } from "@/app/lib/utils/types";
import Link from "next/link";

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
        <Link href={`${s.key}`}>
          <p>{s.title}</p>
        </Link>
      ))}
    </>
  );
}
