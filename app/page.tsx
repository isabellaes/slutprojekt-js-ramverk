"use server";

import { fetchBooksBySubject } from "./lib/functions";

export default async function Home() {
  const data = await fetchBooksBySubject("romance");

  return <h1>Start Page</h1>;
}
