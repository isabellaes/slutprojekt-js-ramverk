"use server";

import { fetchBooksBySubject } from "./lib/functions";
import Container from "./components/container/Container";

const Home = async () => {
  const data = await fetchBooksBySubject("romance");

  return (
    <Container size="100vw">
      <h1>Start Page</h1>
    </Container>
  );
};

export default Home;
