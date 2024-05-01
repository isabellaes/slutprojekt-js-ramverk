"use server";

import { fetchBooksBySubject } from "./lib/functions";
import Container from "./components/container/Container";
import List from "./components/list/List";
import Card from "./components/card/Card";
import { Subject } from "./lib/types";

const Home = async () => {
  const subjects = ["romance", "drama", "sci-fi"];
  const data_subject_romance: Subject = await fetchBooksBySubject("romance");
  const works_subject_romance = data_subject_romance.works.slice(0, 8);
  const data_subject_scifi: Subject = await fetchBooksBySubject("scifi");
  const works_subject_scifi = data_subject_scifi.works.slice(0, 8);
  const data_subject_drama: Subject = await fetchBooksBySubject("drama");
  const works_subject_drama = data_subject_drama.works.slice(0, 8);

  return (
    <Container size="100vw">
      <h1>Utforska biblioteket</h1>
      <h2>{data_subject_romance.name}</h2>
      <List direction="row">
        {works_subject_romance.map((w) => (
          <Card data={w}></Card>
        ))}
      </List>
      <h2>{data_subject_scifi.name}</h2>
      <List direction="row">
        {works_subject_scifi.map((w) => (
          <Card data={w}></Card>
        ))}
      </List>
      <h2>{data_subject_drama.name}</h2>
      <List direction="row">
        {works_subject_drama.map((w) => (
          <Card data={w}></Card>
        ))}
      </List>
    </Container>
  );
};

export default Home;
