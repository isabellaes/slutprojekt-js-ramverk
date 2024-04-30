"use server";

import { fetchBooksBySubject } from "./lib/functions";

export default async function Home() {
  const data = await fetchBooksBySubject("romance");

  return (
    <main>
      <h1>Start Page</h1>
    </main>
  );
}
