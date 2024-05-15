import { fetchBooksBySubject } from "@/app/lib/utils/api";
import Container from "@/app/components/container/Container";
import Card from "@/app/components/card/Card";
import { Subject } from "@/app/lib/utils/types";
import Link from "next/link";
import styles from "./style/home.module.scss";
import { Suspense } from "react";
import CardSkeleton from "./components/skeletons/CardSkeleton";

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
      <h1 className={styles.title}>Explore library</h1>
      {data.map((x) => (
        <div key={x.key}>
          <h3 className={styles.subtitle}>{x.name.toLocaleUpperCase()}</h3>
          <div className={styles.row}>
            {x.works.map((w) => (
              <Link key={w.key} href={w.key} className={styles.link}>
                <Suspense fallback={<CardSkeleton />}>
                  <Card
                    key={w.key}
                    title={w.title}
                    img={`https://covers.openlibrary.org/b/id/${w.cover_id}-M.jpg`}
                  ></Card>
                </Suspense>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Home;
