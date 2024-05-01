import { Subject } from "./types";

export async function fetchBooksBySubject(query: string): Promise<any> {
  const apiUrl = `https://openlibrary.org/subjects/${encodeURIComponent(
    query
  )}.json`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data: Subject = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

/* export async function fetchBookCover() {
  const apiUrl = `https://openlibrary.org/subjects/${encodeURIComponent(
    query
  )}.json`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data: Subject = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
} */
