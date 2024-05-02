import { Root, Subject } from "./types";

export async function fetchBooksBySubject(query: string): Promise<Subject> {
  const apiUrl = `https://openlibrary.org/subjects/${encodeURIComponent(
    query
  )}.json`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data: Subject = await response.json();
    return { ...data, works: data.works.slice(0, 8) };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchWorkById(query: string): Promise<Root> {
  const apiUrl = `https://openlibrary.org/works/${encodeURIComponent(
    query
  )}.json`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data: Root = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
