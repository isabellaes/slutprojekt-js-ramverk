import { fetchBookByTitle } from "@/app/lib/utils/api";
import { SearchResult } from "@/app/lib/utils/types";
import Link from "next/link";
import Container from "@/app/components/container/Container";
import PaginationBox from "@/app/components/pagination/Pagination";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    page: string;
    query: string;
    subject: string;
  };
}) {
  const data: SearchResult = await fetchBookByTitle(
    searchParams.query,
    searchParams.page
  );

  return (
    <Container>
      <h1>Search Page</h1>

      <>
        <p>Results: {data.numFound}</p>
        {data?.docs.map((i) => (
          <Link key={i.key} href={`${i.key}`}>
            <p>{i.title}</p>
          </Link>
        ))}
        <PaginationBox
          total={data.numFound}
          page={Number(searchParams.page)}
          searchTerm={searchParams.query}
          pathName={searchParams.subject}
        />
      </>
    </Container>
  );
}
