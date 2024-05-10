"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchBookByTitle } from "@/app/lib/utils/api";
import { SearchResult } from "@/app/lib/utils/types";
import Link from "next/link";
import Container from "@/app/components/container/Container";
import Pagination from "@mui/material/Pagination";

export default function Page() {
  const [data, setData] = useState<SearchResult>();
  const [currentPage, setCurrentPage] = useState(1);
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      const data: SearchResult = await fetchBookByTitle(params.id);
      setData(data);
    };
    fetchData();
  }, [params.id]);

  const itemsPerPage = 20;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = data?.docs.slice(startIndex, endIndex);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <Container>
      <h1>Search Page</h1>
      {displayedItems && data ? (
        <>
          <p>Results: {data.docs.length}</p>
          {displayedItems.map((i) => (
            <Link href={`${i.key}`}>
              <p>{i.title}</p>
            </Link>
          ))}

          <Pagination
            count={Math.ceil((data.docs.length || 0) / itemsPerPage)}
            onChange={handlePageChange}
            page={currentPage}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}
