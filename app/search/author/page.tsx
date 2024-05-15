import { fetchAuthorByName } from "@/app/lib/utils/api";
import { SearchResult } from "@/app/lib/utils/types";
import Link from "next/link";
import Container from "@/app/components/container/Container";
import PaginationBox from "@/app/components/pagination/Pagination";
import style from "../searchResult.module.scss";
import blankprofile from "../../images/blank-profile-picture-973460_640.png";
import List from "@/app/components/list/List";

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
      <h1 className={style.title}>Searchresult "{searchParams.query}"</h1>
      <p className={style.title}>Results: {data.numFound}</p>

      <div className={style.content}>
        {data.docs.map((i) => (
          <Link key={i.key} href={`/author/${i.key}`}>
            <List space="between">
              <div>
                <img src={blankprofile.src} alt="profile" />
                <p>{i.name}</p>
              </div>
            </List>
          </Link>
        ))}
        <PaginationBox
          total={data.numFound}
          page={Number(searchParams.page) / 100}
          searchTerm={searchParams.query}
          pathName={searchParams.subject}
        />
      </div>
    </Container>
  );
}
