import { fetchAuthorByName } from "@/app/lib/utils/api";
import { SearchResult } from "@/app/lib/utils/types";
import Link from "next/link";
import Container from "@/app/components/container/Container";
import PaginationBox from "@/app/components/pagination/Pagination";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    query: string;
    page: string;
    subject: string;
  };
}) {
  const data: SearchResult = await fetchAuthorByName(
    searchParams.query,
    searchParams.page
  );

  return (
    <Container>
      <h1>Search Page</h1>

      <>
        <p>Results: {data.numFound}</p>
        {data.docs.map((i) => (
          <Link href={`/author/${i.key}`}>
            <p>{i.name}</p>
          </Link>
        ))}
        <PaginationBox
          total={data.numFound}
          page={Number(searchParams.page)}
          seacrhTerm={searchParams.query}
          pathName={searchParams.subject}
        />
      </>
    </Container>
  );
}
