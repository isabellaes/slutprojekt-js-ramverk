"use client";

import { useParams } from "next/navigation";
import Search from "../../components/header/Search";
import { useEffect } from "react";
import { fetchBookByTitle } from "@/app/lib/functions";

export default function Page() {
  const params = useParams<{ id: string }>();
  console.log(params.id);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBookByTitle(params.id);
      console.log(data);
    };
    fetchData();
  });

  return (
    <>
      <h1>Search Page</h1>
    </>
  );
}
