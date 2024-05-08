import { fetchBooksBySubject } from "@/app/lib/utils/api";
import Container from "@/app/components/container/Container";
import List from "@/app/components/list/List";
import Card from "@/app/components/card/Card";
import { Subject } from "@/app/lib/utils/types";
import Link from "next/link";
import "./style/startPage.scss";

const Home = async () => {
  const data_subject_romance: Subject = await fetchBooksBySubject("romance");
  const data_subject_scifi: Subject = await fetchBooksBySubject("scifi");
  const data_subject_drama: Subject = await fetchBooksBySubject("drama");

  const data: Subject[] = [
    data_subject_drama,
    data_subject_romance,
    data_subject_scifi,
  ];

  return (
    <Container>
      <h1>Explore library</h1>
      {data.map((x) => (
        <div key={x.key}>
          <h3>{x.name.toLocaleUpperCase()}</h3>
          <List key={x.key} space="evenly">
            {x.works.map((w) => (
              <Link key={w.key} href={w.key}>
                <Card
                  key={w.key}
                  title={w.title}
                  img={`https://covers.openlibrary.org/b/id/${w.cover_id}-M.jpg`}
                ></Card>
              </Link>
            ))}
          </List>
        </div>
      ))}
    </Container>
  );
};

export default Home;
