import { fetchBookByTitle } from "@/app/lib/utils/api";
import { SearchResult } from "@/app/lib/utils/types";
import Link from "next/link";
import Container from "@/app/components/container/Container";
import PaginationBox from "@/app/components/pagination/Pagination";
import style from "../searchResult.module.scss";
import defaultImg from "../../images/No-Image-Placeholder.svg.png";
import Box from "@/app/components/box/Box";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    page: string;
    query: string;
    subject: string;
  };
}) {
  //calculates offset for pagination
  const offset =
    searchParams.page === "0"
      ? searchParams.page
      : (Number(searchParams.page) - 10).toString();

  const data: SearchResult = await fetchBookByTitle(searchParams.query, offset);

  return (
    <Container>
      <h1 className={style.title}>Search results for "{searchParams.query}"</h1>
      <p className={style.title}>Total: {data.numFound}</p>

      <div className={style.content}>
        {data.docs.map((i) => (
          <Link key={i.key} href={i.key}>
            <Box>
              <div>
                {i.cover_i ? (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${i.cover_i}-M.jpg`}
                    alt="cover"
                  />
                ) : (
                  <img src={defaultImg.src}></img>
                )}
                <p>{i.title}</p>
              </div>
            </Box>
          </Link>
        ))}

        <PaginationBox
          total={data.numFound}
          page={Number(searchParams.page) / 10}
          query={searchParams.query}
          pathName={searchParams.subject}
        />
      </div>
    </Container>
  );
}
