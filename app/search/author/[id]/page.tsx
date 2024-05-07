"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchAuthorByName } from "@/app/lib/utils/api";
import { AuthorDoc } from "@/app/lib/utils/types";
import Link from "next/link";
import Container from "@/app/components/container/Container";

export default function Page() {
  const [data, setData] = useState<AuthorDoc[]>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      const data: AuthorDoc[] = await fetchAuthorByName(params.id);
      setData(data);
    };
    fetchData();
  }, [params.id]);

  return (
    <Container>
      <h1>Search Page</h1>
      {data ? (
        <>
          {data?.map((s) => (
            <Link href={`/author/${s.key}`}>
              <p>{s.name}</p>
            </Link>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}
