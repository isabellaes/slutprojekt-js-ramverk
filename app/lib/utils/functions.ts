import { Root, Subject, RootEntry, Entry, SearchResult, Doc } from "./types";

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

export async function fetchBookByTitle(query: string): Promise<Doc[]> {
  const apiUrl = `https://openlibrary.org/search.json?title=${encodeURIComponent(
    query
  )}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data: SearchResult = await response.json();
    console.log(data);
    return data.docs.slice(0, 10);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchWorkByIdAndEditions(query: string): Promise<Entry> {
  const apiUrl = `https://openlibrary.org/works/${encodeURIComponent(
    query
  )}/editions.json`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data: RootEntry = await response.json();
    return data.entries[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
